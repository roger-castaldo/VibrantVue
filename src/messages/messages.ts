import button from './button/messages.json?raw';
import filter from './filter/messages.json?raw';
import pagination from './pagination/messages.json?raw';
import date from './date/messages.json?raw';
import form from './form/messages.json?raw';
import wizard from './wizard/messages.json?raw';
import { ComputedRef } from 'vue';

const messages = {
    Button:JSON.parse(button),
    Filter:JSON.parse(filter),
    Pagination:JSON.parse(pagination),
    Date:JSON.parse(date),
    Form:JSON.parse(form),
    Wizard:JSON.parse(wizard)
};

export default (message:string,language?:ComputedRef<string>|null):string=>{
    let split = message.split('.');
    let obj = messages[split[0]];
    const lang:any = (language==undefined || language==null ? null : language.value)??'en';
    if (obj!==undefined){
        if (obj[lang]===undefined){
            obj = obj['en'];
        }else{
            obj=obj[lang];
        }
        let idx = 1;
        while(obj!==undefined && idx<split.length){
            obj = obj[split[idx]];
            idx++;
        }
    }
    if (obj===undefined){
        throw `unable to locate message ${message}`;
    }
    return obj;
};