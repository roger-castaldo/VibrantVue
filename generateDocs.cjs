const vueDocs = require('vue-docgen-api');
const fs = require('fs');
const path = require('path');

const commentRegex = /<script[^>]*>\s*\n\s*\/\*\*(.*?)\*\//gs;

function findVueFiles(dirPath, fileList = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();

        if (isDirectory) {
            findVueFiles(filePath, fileList);
        } else if (file.endsWith('.vue')) {
            fileList.push({
              name:file,
              path:path.join(dirPath,file)
            });
        }
    });

    return fileList;
}

// Function to read file content and extract commented data
function extractCommentHeader(filePath) {
    try {
        // Read file synchronously
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Extracting commented data
        const matches = fileContent.match(commentRegex);

        if (matches) {
            return matches.map(match => match.trim());
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}

function extractCommentHeaderItems(commentHeader) {
  return commentHeader.map(header=>{
    return header.split('\n')
      .map(line => line.replace('/**','').replace('*/','').replace(/^\s*\*?\s*/, '').trim())
      .filter(line => line !== '')
      .filter(line=>line.indexOf('<script')<0);
  })
  .flat();
}

async function  extractVueDocs(filePath) {
  let ci = await vueDocs.parse(filePath);
  const headerItems = extractCommentHeaderItems(extractCommentHeader(filePath));
  const propertyOverrides = headerItems
    .filter(line=>line.indexOf('@')===0)
    .map(line=>{
      const match = /^@([^\s]+)\s(.+)$/.exec(line);
      return {
        name:match[1],
        value:match[2].trim()
      };
    });
  const description = headerItems
    .filter(line=>line.indexOf('@')!==0)
    .join('\n');
  if (description!==''){
    ci.description=description;
  }
  propertyOverrides.forEach(element => {
    ci[element.name] = element.value
  });
  return ci;
}

function toCamelCase(fileName) {
  const parts = fileName.substring(0,fileName.length-4).split('-');
  const camelCaseName = parts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('');

  return camelCaseName;
}

function extractEnums(text) {
  const enumRegex = /export\s+enum\s+(\w+)\s*{([^}]+)}/g;
  const enumNames = [];
  const enumValues = {};

  let match;
  while ((match = enumRegex.exec(text)) !== null) {
      const enumName = match[1];
      const enumBody = match[2];
      const enumValuesRegex = /(\w+)\s*=\s*'([^']+)'(?:,|\s*;|\s*$)/g;
      const values = [];

      let valueMatch;
      while ((valueMatch = enumValuesRegex.exec(enumBody)) !== null) {
          const valueName = valueMatch[1];
          const value = valueMatch[2];
          values.push({ name: valueName, value: value });
      }

      enumNames.push(enumName);
      enumValues[enumName] = values;
  }

  return { names: enumNames, values: enumValues };
}

function writeJsonDocFile(path,data){
  fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8',function(err) {
    if (err) throw err;
    console.log('complete');
    });
}

function extractPropType(type,tags){
  if(type===undefined || type===null){return '';}
  let result='';
  switch(type.name){
    case 'union':
      result = type.elements.map(t=>extractPropType(t,tags)).join('\\|');
      break;
    case 'Array':
      result = `${extractPropType(type.elements[0],tags)}\\[\\]`;
      break;
    case 'MaybeRef':
    case 'Promise':
      result = `${type.name}`;
      if (type.elements){
        result+=`\\<${extractPropType(type.elements[0],tags)}\\>`;
      }
      break;
    case 'TSFunctionType':
      result = `()=>${tags!==undefined && tags.returns!==undefined ? tags.returns[0].description : 'unknown'}`;
      break;
    default:
      result = `${type.name}`;
      break;
  }
  return result;
}

function generateMarkdownFromJSON(jsonData, outputFilePath,enumData) {
  let markdownContent = '';

  // Iterate over each component in the JSON data
  (Array.isArray(jsonData) ? jsonData : [jsonData]).forEach(component => {
      // Add component name as markdown header
      markdownContent += `# ${component.displayName}\n\n`;
      if (component.description!==''){
        markdownContent += `${component.description.replaceAll('\n','\\\n')}\n`;
      }

      // Add props section if props exist
      if (component.props && component.props.length > 0) {
          markdownContent += '## Props\n\n';
          markdownContent+=`| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |\n`;
          component.props.forEach(prop => {
              markdownContent += `| ${prop.name} | ${extractPropType(prop.type,prop.tags)} |`;
              if (prop.type?.name && (enumData[prop.type?.name]||(prop.type?.name==='union' && Object.keys(enumData).some(k=>prop.type?.elements.some(e=>e.name===k))))){
                let values = [];
                if (enumData[prop.type?.name])
                   values = enumData[prop.type?.name];
                else 
                  values = enumData[Object.keys(enumData).find(k=>prop.type?.elements.some(e=>e.name===k))];
                values = values.map(p=>p.name).join(', ');
                if (values.length>250){
                  values = values.substring(0,247)+`[...](../enums.md)`;
                }
                markdownContent+=`${values}`;
              }
              markdownContent+=`| ${prop.defaultValue ? prop.defaultValue.value : ''} | `
              if (prop.description){
                markdownContent += `${prop.description.replace('\n','<br/>')}`;
              }
              markdownContent+='|\n';
          });
      }

      // Add methods section if methods exist
      if (component.methods && component.methods.length > 0) {
          markdownContent += '## Methods\n\n';
          markdownContent+=`| Name    | Description |
| ------- | ------- |\n`;
          component.methods.forEach(method => {
              markdownContent += `| ${method.name}|`;
              if (method.description){
                markdownContent+=`${method.description.replace('\n','<br/>')}`;
              }
              markdownContent+='|\n';
          });
      }

      // Add events section if events exist
      if (component.events && component.events.length > 0) {
          markdownContent += '## Events\n\n';
          markdownContent+=`| Name    | Params | Description |
| ------- | ------- | ------- |\n`;
          component.events.forEach(event => {
            markdownContent += `| ${event.name}|`;
            if (event.tags && event.tags.some(t=>t.title==='param')){
              markdownContent+=event.tags
                .filter(t=>t.title==='param').map(t=>`${t.name}:${t.description.replaceAll('|','\\|')}`)
                .join(',');
            }else if (event.type){
              markdownContent+=extractPropType({name:event.type.names[0],elements:event.type.elements});
            }
            markdownContent+='|';
            if (event.description){
              markdownContent+=`${event.description.replace('\n','<br/>')}`;
            }
            markdownContent+='|\n';
          });
      }

      // Add slots section if slots exist
      if (component.slots && component.slots.length > 0) {
          markdownContent += '## Slots\n\n';
          markdownContent+=`| Name    | Description |
| ------- | ------- |\n`;
          component.slots.forEach(slot => {
            markdownContent += `| ${slot.name}|`;
            if (slot.description){
              markdownContent+=`${slot.description.replace('\n','<br/>')}`;
            }
            markdownContent+='|\n';
          });
      }

      // Add expose section if expose exist
      if (component.expose && component.expose.length > 0) {
        markdownContent += '## Expose\n\n';
        markdownContent+=`| Name    | Params | Description |
| ------- | ------- | ------- |\n`;
        component.expose.forEach(expose => {
          markdownContent += `| ${expose.name}|`;
          if (expose.type){
            markdownContent+=extractPropType({name:expose.type.names[0],elements:expose.type.elements});
          }else if (expose.tags && expose.tags.some(t=>t.title==='param')){
            markdownContent+=expose.tags
              .filter(t=>t.title==='param').map(t=>`${t.name}:${t.description.replaceAll('|','\\|')}`)
              .join(',');
          }
          markdownContent+='|';
          if (expose.description){
            markdownContent+=`${expose.description.replace('\n','<br/>')}`;
          }
          markdownContent+='|\n';
        });
    }

      // Add examples section if examples exist
      if (component.examples && component.examples.length > 0) {
          markdownContent += '## Examples\n\n';
          component.examples.forEach(example => {
              markdownContent += '```vue\n';
              markdownContent += example.code + '\n';
              markdownContent += '```\n\n';
              markdownContent += `${example.description.replace('\n','\\\n')}\n\n`;
          });
      }
  });

  fs.mkdir(outputFilePath.substring(0,outputFilePath.lastIndexOf('\\')), { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Write markdown content to file
  fs.writeFileSync(outputFilePath, markdownContent, 'utf8');
}

function writeEnumMDFile(enumData, outputFilePath) {
  let markdownContent = '# Enums\n\n';

  Object.keys(enumData).forEach(key=>{
    markdownContent+=`## ${key}\n\n`;
    markdownContent+=`| Name    | Value |
| ------- | ------- |\n`;
    enumData[key].forEach(evalue=>{
      markdownContent+=`|${evalue.name}|${evalue.value}|\n`
    });
  });

  // Write markdown content to file
  fs.writeFileSync(outputFilePath, markdownContent, 'utf8');
}

function writeInjectionsMDFile(inputFilePath,outputFilePath){
  let markdownContent = `# Injections\n\n
| Name    | Value |
| ------- | ------- |\n`;
  const re = /\s*inject<[^>]+>\s*\('([^']+)'\s*,\s*'([^']+)'\);/g;
  const sourcestring = fs.readFileSync(inputFilePath, 'utf8');
  let match;
  while ((match = re.exec(sourcestring)) !== null) {
    markdownContent+=`|${match[1]}|${match[2]}|\n`;
  }
  // Write markdown content to file
  fs.writeFileSync(outputFilePath, markdownContent, 'utf8');
}

function writeMDIndexes(docsFolder){
  const files = fs.readdirSync(docsFolder);
  let markdownContent = '';
  if (docsFolder.indexOf(path.delimiter)>=0){
    let splt = docsFolder.split(path.delimiter);
    markdownContent = `# ${splt[splt.length-1]}\n\n`;
  }else{
    markdownContent = '# Bulma Skins\n\n';
  }

  files.filter(file=>file!=='index.md').forEach(file => {
      const filePath = path.join(docsFolder, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
          writeMDIndexes(filePath);
          markdownContent+=`- [${file}](${file}/index.md)\n`;
      } else if (file.endsWith('.md')) {
          let splt = file.split(path.delimiter);
          markdownContent+=`- [${splt[splt.length-1].substring(0,splt[splt.length-1].length-3)}](${file})\n`;
      }
  });

  // Write markdown content to file
  fs.writeFileSync(path.join(docsFolder,'index.md'), markdownContent, 'utf8');
}

async function main(){
  const enumData = extractEnums(fs.readFileSync('src/enums.ts', 'utf8'));
  const paths = findVueFiles('src/components/');

  const results = [];
  for(let x=0;x<paths.length;x++){
    let vueFile = paths[x];
    let ci = await extractVueDocs(vueFile.path);
    ci.exportName = toCamelCase(vueFile.name);
    if (ci.displayName.toLowerCase()===ci.displayName){
      ci.displayName=ci.exportName;
    }
    results.push(ci);
    generateMarkdownFromJSON(ci,vueFile.path.replace('src\\components\\','docs\\').replace('.vue','.md'),enumData.values);
  }
  writeJsonDocFile('docs/components.json', results);

  //generate enums doc
  writeJsonDocFile('docs/enums.json',enumData.values);
  writeEnumMDFile(enumData.values,'docs/enums.md');
  writeInjectionsMDFile('src/components/shared.ts','docs/injections.md');

  writeMDIndexes('docs');
}

main();


