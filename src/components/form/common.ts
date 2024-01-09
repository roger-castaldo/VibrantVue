import { ComputedRef, computed, inject, ref } from "vue";
import { FormInputType, TranslateMethod,ValueChangedEvent } from "./types";

export interface coreFieldProps{
    name:string;
    disabled:boolean;
};

export interface commonFieldProps extends coreFieldProps{
    Translate?:TranslateMethod;
};

export const useTranslator= (props:any) : ComputedRef<TranslateMethod> => {
    const Translate = inject<TranslateMethod>("Translate");
    const Translator = computed<TranslateMethod>(()=>props.Translate??Translate??function(val:string){return val;});
  
    return Translator;
};

export const useButtonClicked = () =>
    defineEmits<{button_clicked:[name:string]}>();
export const useValueChanged = () => 
    defineEmits<{value_changed:[data:ValueChangedEvent]}>();

export const useButtonClickedAndValueChanged = () => 
    defineEmits<{
        button_clicked:[name:string],
        value_changed:[data:ValueChangedEvent]
    }>();

export function useValuesList(){
    const hiddenValues = ref<any[]>([]);
    const disabledValues = ref<any[]>([]);

    const hideValue = (value:any):void => {
        if (!hiddenValues.value.some(h=>h===value)) {
            hiddenValues.value.push(value);
        }
    };
    const showValue = (value:any):void => {
        hiddenValues.value = hiddenValues.value.filter(h=>h!==value);
    };
    const disableValue = (value:any):void => {
        if (!disabledValues.value.some(v=>value===v)) {
            disabledValues.value.push(value);
        }
    };
    const enableValue = (value:any):void => {
        disabledValues.value = disabledValues.value.filter(v=>v!==value);
    };

    return {hiddenValues,disabledValues,hideValue,showValue,disableValue,enableValue};
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