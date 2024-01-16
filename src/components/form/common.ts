import { ComputedRef, Ref, computed, ref } from "vue";
import { FormInputType, TranslateMethod,ValueChangedEvent } from "./types";

export const HIDDEN_FIELDS_PROPERTY = "HiddenFields";
export const DISABLED_FIELDS_PROPERTY = "DisabledFields";

export interface translateFieldProps{
    translate?:TranslateMethod;
}

export interface coreFieldProps{
    name:string;
    disabled:boolean;
};

export interface commonFieldProps extends coreFieldProps,translateFieldProps{};

const defaultTranslate : TranslateMethod = (value:string)=>value;

export const useTranslator= (props:translateFieldProps,inject: (<T>(string,T?)=> T | undefined)) : ComputedRef<TranslateMethod> => {
    const Translate = inject<TranslateMethod>("Translate",defaultTranslate);
    const Translator = computed<TranslateMethod>(()=>props.translate??Translate);
  
    return Translator;
};

export function useValuesList(name:string,inject: (<T>(string,T?)=> T | undefined)){
    const iHiddenValues = inject<Readonly<Ref<readonly string[]>>>(HIDDEN_FIELDS_PROPERTY);
    const iDisabledValues = inject<Readonly<Ref<readonly string[]>>>(DISABLED_FIELDS_PROPERTY);

    const hiddenValues = computed<string[]>(()=>iHiddenValues.value.filter(h=>h.indexOf(`${name}.`)===0).map(h=>h.split('.')[1]));
    const disabledValues = computed<string[]>(()=>iDisabledValues.value.filter(h=>h.indexOf(`${name}.`)===0).map(h=>h.split('.')[1]));

    return {hiddenValues,disabledValues};
}

export const buildFieldRows = (fields:FormInputType[]):FormInputType[][]=>{
    let result:FormInputType[][] = [];
    let row:FormInputType[] = [];
    let curLen = 0;
    fields.forEach(field=>{
        let len = (field.form_columns??12);
        if (curLen+len>12){
            result.push(row);
            row=[];
            curLen=0;
        }
        row.push(field);
        curLen+=len;
        if (curLen===12){
            result.push(row);
            row=[];
            curLen=0;
        }
    });
    if (row.length > 0) {
        result.push(row);
    }
    return result;
}

export async function resolveListItems<T>(values: (T[]|Promise<T[]>|(()=>T[])|(()=>Promise<T[]>))) : Promise<T[]> {
    let p : Promise<any>|null = null;
    let tmp:any = values;
    if (values instanceof Function){
        tmp = (values as Function)();
    }
    if (tmp instanceof Promise){
        p=tmp;
    }else{
        p=Promise.resolve(tmp);
    }
    let tmpResult:any  = await p as any;
    let result:T[] = [];
    if (tmpResult.value!==undefined){
        result = tmpResult.value as T[];
    }else{
        result = tmpResult as T[];
    }
    return result;
}