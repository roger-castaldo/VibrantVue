import { MaybeRef } from "vue";

type NavBarMenuItem = {
    title:MaybeRef<string>|string,
    active?:boolean,
    icon?:string,
    childItems?:NavBarMenuItem[],
    href?:string,
    onClick?:()=>void
};

export type {NavBarMenuItem};