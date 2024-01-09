import { ColorTypes } from "../enums";

export type ValueChangedEvent = {
    name:string,
    value:any
};

export type ListItemValue = {
    value:any,
    label:string,
    selected?:boolean
}

export type SelectListItemValue = {
    value?:any,
    label:string,
    selected?:boolean,
    values?:SelectListItemValue[]
}

export type FormInputType = {
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
}

export type TranslateMethod = (value:string)=>string;