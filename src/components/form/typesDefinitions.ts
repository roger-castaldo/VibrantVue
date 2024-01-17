import { ColorTypes } from "../enums";

type ValueChangedEvent = {
    name:string,
    value:any
};

type ListItemValue = {
    value:any,
    label:string,
    selected?:boolean
};

 type SelectListItemValue = {
    value?:any,
    label:string,
    selected?:boolean,
    values?:SelectListItemValue[]
};

type FormInputType = {
    type:string,
    name?:string,
    subtype?:string,
    label?:string,
    required?:boolean,
    style?:ColorTypes,
    className?:string,
    icon?:string,
    value?:any,
    disabled?:boolean,
    form_columns?:number,
    processVariable?:string,
    Translate?:(value:string)=>string
};

type TranslateMethod = (value:string)=>string;

export type {ValueChangedEvent,ListItemValue,SelectListItemValue,FormInputType,TranslateMethod};