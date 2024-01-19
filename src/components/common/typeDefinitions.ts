import { MaybeRef } from "vue";

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