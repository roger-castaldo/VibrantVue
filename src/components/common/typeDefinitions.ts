import { MaybeRef } from "vue";
import { NoticeTypes } from "../enums";

export interface MenuItem {
    title:MaybeRef<string>|string,
    active?:boolean,
    icon?:string,
    href?:string,
    onClick?:()=>void
}

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
}