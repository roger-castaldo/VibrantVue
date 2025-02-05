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
      if (match!==null){
        return {
          name:match[1],
          value:match[2].trim()
        };
      } else if (line.trim()==='@ignore'){
        return {
          name:'ignore',
          value:true
        };
      }else{
        throw 'Unknown tag';
      }
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

function extractPropType(type,tags,enumData,typeDefinitions){
  if(type===undefined || type===null){return '';}
  let result='';
  switch(type.name){
    case 'union':
      result = type.elements.map(t=>extractPropType(t,tags,enumData,typeDefinitions)).join('\\|');
      break;
    case 'Array':
      result = `${extractPropType(type.elements[0],tags,enumData,typeDefinitions)}\\[\\]`;
      break;
    case 'MaybeRef':
    case 'Promise':
      result = `${type.name}`;
      if (type.elements){
        result+=`\\<${extractPropType(type.elements[0],tags,enumData,typeDefinitions)}\\>`;
      }
      break;
    case 'TSFunctionType':
      result = `()=>${tags!==undefined && tags.returns!==undefined ? tags.returns[0].description : 'unknown'}`;
      break;
    default:
      let url=null;
      if (enumData[type.name]){
        url=`../enums.md#${type.name}`;
      }else if (typeDefinitions[type.name]){
        url=`../types.md#${type.name}`;
      }
      result = (url? `[${type.name}](${url})` : `${type.name}`);
      break;
  }
  return result;
}

function generateMarkdownFromJSON(jsonData, outputFilePath,enumData,typeDefinitions) {
  if (jsonData.ignore){
    return;
  }
  let markdownContent = '';

  // Iterate over each component in the JSON data
  (Array.isArray(jsonData) ? jsonData : [jsonData]).forEach(component => {
      // Add component name as markdown header
      markdownContent += `# ${component.displayName}\n\n`;
      if (component.description!==''){
        markdownContent += `${component.description.replaceAll('\n','\\\n')}\n`;
      }
      if (component.link){
        markdownContent += `[${component.link_title??'Bulma Docs'}](${component.link})\n`;
      }

      // Add props section if props exist
      if (component.props && component.props.length > 0) {
          markdownContent += '## Props\n\n';
          markdownContent+=`| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |\n`;
          component.props.forEach(prop => {
              markdownContent += `| ${prop.name} | ${extractPropType(prop.type,prop.tags,enumData,typeDefinitions)} |`;
              if (prop.type?.name && (enumData[prop.type?.name]||(prop.type?.name==='union' && Object.keys(enumData).some(k=>prop.type?.elements.some(e=>e.name===k))))){
                let values = [];
                let hash='';
                if (enumData[prop.type?.name]){
                  values = enumData[prop.type?.name];
                  hash=prop.type?.name;
                }else{
                  values = enumData[Object.keys(enumData).find(k=>prop.type?.elements.some(e=>e.name===k))];
                  hash = Object.keys(enumData).find(k=>prop.type?.elements.some(e=>e.name===k));
                }
                values = values.map(p=>p.name).join(', ');
                if (values.length>250){
                  values = values.substring(0,247)+`[...](../enums.md#${hash})`;
                }
                markdownContent+=`${values}`;
              }
              markdownContent+=`| ${prop.defaultValue ? prop.defaultValue.value : ''} | `
              if (prop.description){
                markdownContent += `${prop.description.replaceAll('\n','<br/>')}`;
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
                markdownContent+=`${method.description.replaceAll('\n','<br/>')}`;
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
              markdownContent+=extractPropType({name:event.type.names[0],elements:event.type.elements},null,enumData,typeDefinitions);
            }
            markdownContent+='|';
            if (event.description){
              markdownContent+=`${event.description.replaceAll('\n','<br/>')}`;
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
              markdownContent+=`${slot.description.replaceAll('\n','<br/>')}`;
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
            markdownContent+=extractPropType({name:expose.type.names[0],elements:expose.type.elements},null,enumData,typeDefinitions);
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
              markdownContent += `${example.description.replace(/\n/g,'\\\n')}\n\n`;
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
    markdownContent+=`## [${key}](#${key})\n\n`;
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
    markdownContent+=`|[${match[1]}](#${match[1]})|${match[2]}|\n`;
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
    markdownContent = '# Components\n\n';
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

function extractTypeDefinitions(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const typeDefinitions = {};
  const typeRegex = /export type (\w+) =([^{]+){([^}]*)}/g;
  const propertyRegex = /\s*(\/\*\*(.*?)\*\/)\s*([^:]+):([^\n]+)\n/gs;
  const inheritanceRegex = /((\w+)\s*&?)+/g;
  
  let typeMatch;
  while ((typeMatch = typeRegex.exec(fileContent)) !== null) {
      const typeName = typeMatch[1];
      const inheritance = typeMatch[2];
      const typeBody = typeMatch[3];
      typeDefinitions[typeName] = {};

      let inheritanceMatch;
      let inheritanceList = [];
      while ((inheritanceMatch = inheritanceRegex.exec(inheritance)) !== null){
        inheritanceList.push(inheritanceMatch[2]);
      }
      if (inheritanceList.length>0){
        typeDefinitions[typeName].inherits = inheritanceList;
      }

      let propertyMatch;
      while ((propertyMatch = propertyRegex.exec(typeBody)) !== null) {
          const headerItems = extractCommentHeaderItems([propertyMatch[1].trim()]);
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
          let propertyName = propertyMatch[3];
          let propertyType = propertyMatch[4].trim();
          propertyType = (propertyType.endsWith(',') ? propertyType.substring(0,propertyType.length-1) : propertyType);
          
          typeDefinitions[typeName][propertyName] = {
              description:description,
              propertyOverrides,
              type: propertyType
          };
      }
  }
  
  return typeDefinitions;
}

function fixTableCellChars(input){
  const resChars = '\\|<>[]';
  for(let x=0;x<resChars.length;x++){
    input = input.replaceAll(resChars[x],`\\${resChars[x]}`);
  }
  return input;
}

function writeTypesMDFile(outputFilePath,typeDefinitions){
  let markdownContent = '# Types\n\n';
  
  Object.keys(typeDefinitions).forEach(key=>{
    let type = typeDefinitions[key];

    markdownContent+=`## [${key}](#${key})\n\n`;
    if (type.inherits){
      markdownContent+='### Inherits\n\n';
      type.inherits.forEach(t=>markdownContent+=`- [${t}](#${t})\n`);
      markdownContent+='\n';
    }
    markdownContent+=`### Properties\n
| Name | Type | Description |
| ------- | ------- | ------- |\n`;

    Object.keys(type).forEach(prop=>{
      if (prop!=='inherits'){
        markdownContent+=`|${prop}|${fixTableCellChars(type[prop].type)}|${type[prop].description.replaceAll('\n','<br/>')}|\n`;
      }
    });
    markdownContent+='\n\n';
  });


  // Write markdown content to file
  fs.writeFileSync(outputFilePath, markdownContent, 'utf8');
}

const typeDefinitionPaths = [
  'src/components/common/typeDefinitions.ts',
  'src/components/extended/typeDefinitions.ts',
  'src/components/form/typeDefinitions.ts',
  'src/components/layout/typeDefinitions.ts'
];

async function main(){
  const enumData = extractEnums(fs.readFileSync('src/enums.ts', 'utf8'));
  const paths = findVueFiles('src/components/');

  let typeDefinitions = {};
  for(let x=0;x<typeDefinitionPaths.length;x++){
    typeDefinitions = { ...typeDefinitions, ...extractTypeDefinitions(typeDefinitionPaths[x]) };
  }

  const results = [];
  for(let x=0;x<paths.length;x++){
    let vueFile = paths[x];
    let ci = await extractVueDocs(vueFile.path);
    ci.exportName = toCamelCase(vueFile.name);
    if (ci.displayName.toLowerCase()===ci.displayName){
      ci.displayName=ci.exportName;
    }
    results.push(ci);
    generateMarkdownFromJSON(ci,vueFile.path.replace('src\\components\\','docs\\').replace('.vue','.md'),enumData.values,typeDefinitions);
  }
  writeJsonDocFile('docs/components.json', results);

  //generate enums doc
  writeJsonDocFile('docs/enums.json',enumData.values);
  writeEnumMDFile(enumData.values,'docs/enums.md');

  //generate injections
  writeInjectionsMDFile('src/components/shared.ts','docs/injections.md');

  //generate types
  writeJsonDocFile('docs/types.json',typeDefinitions);
  writeTypesMDFile('docs/types.md',typeDefinitions);

  writeMDIndexes('docs');
}

main();


