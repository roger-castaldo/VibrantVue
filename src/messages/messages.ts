import * as button from './button/messages.json';
import * as filter from './filter/messages.json';
import * as pagination from './pagination/messages.json';
import * as date from './date/messages.json';

const messages = {
    Button:button,
    Filter:filter,
    Pagination:pagination,
    Date:date
};

export default (message:string,language?:string|null):string=>{
    if(language===undefined || language===null){
        language='en';
    }
    let obj = messages[message.substring(0,message.indexOf('.'))];
    if (obj!==undefined){
        if (obj[language]===undefined){
            obj = obj['en'];
        }else{
            obj=obj[language];
        }
        obj = obj[message.substring(message.indexOf('.')+1)];
    }
    if (obj===undefined){
        throw `unable to locate message ${message}`;
    }
    return obj;
};