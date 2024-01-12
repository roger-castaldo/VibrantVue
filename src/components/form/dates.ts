import { ComputedRef } from 'vue';
import translate from '../../messages/messages.js';

export const addDays = (date:Date,days:number) : Date => {
    let result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
};
export const addHours = (date:Date,hours:number):Date => {
    let result = new Date(date);
    result.setHours(result.getHours() + hours, result.getMinutes(), result.getSeconds(), result.getMilliseconds());
    return result;
};
export const daysBetween = (start:Date,end:Date):number => {
    var one = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    var two = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = two.getTime() - one.getTime();
    var days = millisBetween / millisecondsPerDay;
    return Math.abs(Math.floor(days));
};
export const canParse = (value:string):boolean => {
    try {
        return !isNaN(Date.parse(value));
    } catch (err) {
        return false;
    }
};
export const getWeekOfMonth = (date:Date):number => {
    return Math.floor((date.getDate() + new Date(date.getFullYear(), date.getMonth(), 1).getDay()) / 7);
};

export const padLeft = (value:string,char:string,length:number):string=>{
    let result=value;
    while(result.length<length)
        result = char+result;
    return result;
};

const processFormat = (curCode:string,language:ComputedRef<string>,date:Date):string=>{
    let result:string = '';
    switch (curCode) {
        case 'd':
        case 'dd':
            result += `${padLeft(date.getDate().toString(),'0',curCode.length)}`;
            break;
        case 'ddd':
        case 'dddd':
            let name:string ='';
            switch (date.getDay()) {
                case 0:
                    name = 'Sunday';
                    break;
                case 1:
                    name= 'Monday';
                    break;
                case 2:
                    name='Tuesday';
                    break;
                case 3:
                    name='Wednesday';
                    break;
                case 4:
                    name='Thursday';
                    break;
                case 5:
                    name='Friday';
                    break;
                case 6:
                    name='Saturday';
                    break;
            }
            result+=`${translate('Date.Weekdays.'+(curCode.length > 3 ? name : name.substring(0,3)),language)}`;
            break;
        case 'f':
        case 'ff':
        case 'fff':
            result += `${padLeft(date.getMilliseconds().toString(),'0', curCode.length)}`;
            break;
        case 'F':
        case 'FF':
        case 'FFF':
            result += `${(date.getMilliseconds() == 0 ? '' : padLeft(date.getMilliseconds().toString(),'0', curCode.length))}`;
            break;
        case 'g':
        case 'gg':
            result += 'A.D.';
            break;
        case 'h':
        case 'hh':
            result += `${padLeft((date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() == 0 ? 12 : date.getHours())).toString(),'0', curCode.length)}`;
            break;
        case 'H':
        case 'HH':
            result += `${padLeft(date.getHours().toString(),'0', curCode.length)}`;
            break;
        case 'K':
        case 'z':
        case 'zz':
        case 'zzz':
            let tzo:number = date.getTimezoneOffset()*-1;
            let hours:number = parseInt((tzo / 60).toFixed(0));
            let minutes:number = tzo - (Math.abs(hours) * 60);
            switch (curCode) {
                case 'K':
                case 'zzz':
                    result += `${(hours < 0 ? '-' : '+')}${padLeft(Math.abs(hours).toString(),'0', 2) + ':' + padLeft(Math.abs(minutes).toString(),'0', 2)}`;
                    break;
                case 'z':
                case 'zz':
                    result += `${(hours < 0 ? '-' : '+')}${padLeft(Math.abs(hours).toString(),'0', curCode.length)}`;
                    break;
            }
            break;
        case 'm':
        case 'mm':
            result += `${padLeft(date.getMinutes().toString(),'0', curCode.length)}`;
            break;
        case 'M':
        case 'MM':
            result += `${padLeft((date.getMonth() + 1).toString(),'0', curCode.length)}`;
            break;
        case 'MMM':
        case 'MMMM':
            let monthName:string = '';
            switch (date.getMonth()) {
                case 0:
                    monthName = 'January';
                    break;
                case 1:
                    monthName = 'February';
                    break;
                case 2:
                    monthName = 'March';
                    break;
                case 3:
                    monthName = 'April';
                    break;
                case 4:
                    monthName = 'May';
                    break;
                case 5:
                    monthName = 'June';
                    break;
                case 6:
                    monthName = 'July';
                    break;
                case 7:
                    monthName = 'August';
                    break;
                case 8:
                    monthName = 'September';
                    break;
                case 9:
                    monthName = 'October';
                    break;
                case 10:
                    monthName = 'November';
                    break;
                case 11:
                    monthName = 'December';
                    break;
            }
            result+=`${translate('Date.Months.'+(curCode.length>3 ? monthName : monthName.substring(0,3)),language)}`;
            break;
        case 's':
        case 'ss':
            result += `${padLeft(date.getSeconds().toString(),'0', curCode.length)}`;
            break;
        case 't':
        case 'tt':
            if (date.getHours() >= 12)
                result += `${(curCode.length == 1 ? 'P' : 'PM')}`;
            else
                result += `${(curCode.length == 1 ? 'A' : 'AM')}`;
            break;
        case 'y':
        case 'yy':
            var years = date.getFullYear().toString();
            while (years.length > 2) {
                years = years.substring(1);
            }
            result += `${padLeft(years.toString(),'0', curCode.length)}`;
            break;
        case 'yyy':
        case 'yyyy':
        case 'yyyyy':
            result += `${padLeft(date.getFullYear().toString(),'0', curCode.length)}`;
            break;
        default:
            result += `[UNKOWN FORMAT ${curCode}]`;
            break;
    }
    return result;
};

export const format = (date:Date,language:ComputedRef<string>,format?:string):string=> {
    format = format??'ddd MMM dd yyyy HH:mm:ss G\\MTzz00';
    let result:string = '';
    let curCode:string = '';
    for (var x = 0; x < format.length; x++) {
        switch (format.charAt(x)) {
            case '\\':
                if (curCode != '') {
                    result += processFormat(curCode,language, date);
                    curCode = '';
                }
                result += format.charAt(x + 1);
                x++;
                break;
            case 'd':
            case 'f':
            case 'F':
            case 'g':
            case 'h':
            case 'H':
            case 'K':
            case 'm':
            case 'M':
            case 's':
            case 't':
            case 'y':
            case 'z':
                if (curCode != '') {
                    if (curCode.charAt(0) != format.charAt(x)) {
                        result += processFormat(curCode,language, date);
                        curCode = '';
                    } else {
                        curCode += format.charAt(x);
                    }
                } else {
                    curCode += format.charAt(x);
                }
                break;
            default:
                if (curCode != '') {
                    result += processFormat(curCode,language, date);
                    curCode = '';
                }
                result += format.charAt(x);
                break;
        }
    }
    if (curCode != '') {
        result += processFormat(curCode,language, date);
        curCode = '';
    }
    return result;
};