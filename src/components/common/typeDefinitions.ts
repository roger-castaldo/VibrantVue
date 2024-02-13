import { MaybeRef } from "vue";
import { ColorTypes, NoticeTypes, Sizes } from "../enums";

export interface MenuItem {
    title:MaybeRef<string>|string,
    active?:boolean,
    icon?:string,
    href?:string,
    onClick?:()=>void
};

export interface ParentMenuItem extends MenuItem {
    childItems?:MenuItem[]
};

export interface IWizardStep {
    name:string,
    title:MaybeRef<string>|string,
    icon?:string,
    description?:string,
    type?:NoticeTypes,
    isValid?:boolean
};

export interface IButtonBasicProperties{
    disabled?:boolean,
    size?:Sizes,
    hidemobile?:boolean,
    hidetablet?:boolean,
    hidedesktop?:boolean 
};

export interface IButtonProperties extends IButtonBasicProperties{
    icon?:string|null,
    type?:ColorTypes,
    title?:string|null
};