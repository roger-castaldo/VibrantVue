import * as button from './button/messages.json';
import * as filter from './filter/messages.json';
import * as pagination from './pagination/messages.json';
import * as date from './date/messages.json';
import * as form from './form/messages.json';
import { ComputedRef } from 'vue';

const messages = {
    Button:button,
    Filter:filter,
    Pagination:pagination,
    Date:date,
    Form:form
};

export default (message:string,language:ComputedRef<string>):string=>{
    let obj = messages[message.substring(0,message.indexOf('.'))];
    if (obj!==undefined){
        if (obj[language.value]===undefined){
            obj = obj['en'];
        }else{
            obj=obj[language.value];
        }
        obj = obj[message.substring(message.indexOf('.')+1)];
    }
    if (obj===undefined){
        throw `unable to locate message ${message}`;
    }
    return obj;
};