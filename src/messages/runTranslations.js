import {readdir,unlink,readFile,writeFile} from 'node:fs/promises';
import { resolve } from "path";
import fetch from 'node-fetch';
import { exec } from 'node:child_process';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const serverUrl = 'http://localhost:5000/';
const dockerImageName = 'wonderful_herschel'

console.log('Starting docker libretranslate image...');
exec(`docker run -d -p 5000:5000 --name ${dockerImageName} libretranslate/libretranslate`);
console.log('Waiting for image to fully start...');
await sleep(15*60*1000);

const buttonPath = resolve("./src/messages/button/");
const filterPath = resolve("./src/messages/filter/");
const paginationPath = resolve("./src/messages/pagination/");
const datePath = resolve('./src/messages/date/');
const formPath = resolve('./src/messages/form/');
const wizardPath = resolve('./src/messages/wizard/');

const paths = [buttonPath,filterPath,formPath,paginationPath,datePath,wizardPath];

let resp = await fetch(`${serverUrl}languages`);
const json = await resp.json();
const languages = json.find(l=>l.code==='en').targets.filter(l=>l!=='en');

await writeFile(resolve(`./src/messages/languages.json`),JSON.stringify(languages));

const processValue = async (val,lang)=>{
    if (typeof val === 'string'){
        let count = 0;
        let text = null;
        while (count<5 && text===null){
            try{
                console.log(`attempting to translate ${val} to ${lang}`);
                const res = await fetch(`${serverUrl}translate`, {
                    method: "POST",
                    body: JSON.stringify({
                        q: val,
                        source: "en",
                        target: lang
                    }),
                    headers: { "Content-Type": "application/json" }
                });
                const resp = await res.json();
                text = resp.translatedText;
                if (text!==undefined && text.indexOf(' ')>0 && val.indexOf(' ')===-1){
                    text = text.substring(0,text.indexOf(' '));
                }
            }catch(err){
                console.log(err);
                count++;
                text=null;
                console.log('restarting docker');
                exec(`docker restart ${dockerImageName}`);
                await sleep(10000);
                console.log('docker restarted');
            }
        }
        return text;
    }else{
        let result = {};
        let props = Object.keys(val);
        for(let x=0;x<props.length;x++){
            result[props[x]] = await processValue(val[props[x]],lang);
            if (result[props[x]]===null)
                return null;
        }
        if (Object.keys(result).length===0){
            return null;
        }
        return result;
    }
}

for(let i=0;i<paths.length;i++)
{
    const path=paths[i];
    console.log(`Cleaning files in ${path}`);
    const files = await readdir(path);
    for(let j=0;j<files.length;j++){
        const file = files[j];
        if (file!=='en.json'){
            console.log(`Deleting ${file}`);
            await unlink(resolve(path,'./',file));
        }
    }

    const data = JSON.parse(await readFile(resolve(path,'./en.json')));
    const props = Object.keys(data);

    let output = {
        en:data
    };

    for(let x=0;x<languages.length;x++){
        const lang = languages[x];
        console.log(`Translating ${path} to ${lang}`);

        let olang = {};
        for(let y=0;y<props.length;y++){
            olang[props[y]] = await processValue(data[props[y]],lang);
            if (olang[props[y]]===null){
                delete olang[props[y]];
            }
            await sleep(500);
        }
        if (Object.keys(olang).length!==0){
            output[lang]=olang;
        }
    }

    await writeFile(resolve(path,`./messages.json`),JSON.stringify(output));
};