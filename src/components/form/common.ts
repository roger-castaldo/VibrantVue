import { ComputedRef, Ref, computed, readonly, ref } from "vue";
import { TranslateMethod } from "./typeDefinitions";

export const HIDDEN_FIELDS_PROPERTY = "HiddenFields";
export const DISABLED_FIELDS_PROPERTY = "DisabledFields";

interface internalBaseFieldProps{
    /**
     * definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility
     */
    inputId:string;
};

export interface translateFieldProps{
    /**
     * The translate call method used to translate a given value (field title, element name, etc) into a desired language
     */
    translate?:TranslateMethod;
};

export interface internalTranslateFieldProps extends internalBaseFieldProps,translateFieldProps{};

export interface coreFieldProps{
    /**
     * The name of the form element
     */
    name:string;
    /**
     * Indicates if it is currently disabled
     */
    disabled:boolean;
};

export interface internalCoreFieldProps extends internalBaseFieldProps,coreFieldProps{};

export interface commonFieldProps extends coreFieldProps,translateFieldProps{};

export interface internalCommonFieldProps extends internalCoreFieldProps,internalTranslateFieldProps{};

const defaultTranslate : TranslateMethod = (value:string)=>value;

export const useTranslator= (props:translateFieldProps,inject: (<T>(string,T?)=> T | undefined)) : ComputedRef<TranslateMethod> => {
    const Translate = inject<TranslateMethod>("Translate",defaultTranslate);
    const Translator = computed<TranslateMethod>(()=>props.translate??Translate);
  
    return Translator;
};

export function useValuesList(name:string,inject: (<T>(string,T?)=> T | undefined)){
    const iHiddenValues = inject<Readonly<Ref<readonly string[]>>>(HIDDEN_FIELDS_PROPERTY,readonly(ref([])));
    const iDisabledValues = inject<Readonly<Ref<readonly string[]>>>(DISABLED_FIELDS_PROPERTY,readonly(ref([])));

    const hiddenValues = computed<string[]>(()=>iHiddenValues.value.filter(h=>h.indexOf(`${name}.`)===0).map(h=>h.split('.')[1]));
    const disabledValues = computed<string[]>(()=>iDisabledValues.value.filter(h=>h.indexOf(`${name}.`)===0).map(h=>h.split('.')[1]));

    return {hiddenValues,disabledValues};
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