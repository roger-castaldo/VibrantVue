import { MaybeRef } from "vue";
import { ColorTypes, NoticeTypes, Sizes } from "../enums";

export interface IPaginationProperties {
    use_next?:boolean,
    has_more?:boolean,
    has_previous?:boolean
    size?:Sizes,
    rounded?:boolean,
    button_type?:ColorTypes,
    total_pages?:MaybeRef<number>,
    current_page?:MaybeRef<number>,
    zero_page_index?:boolean
};

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
    is_valid?:boolean
};

export interface IButtonBasicProperties{
    disabled?:boolean,
    size?:Sizes,
    hide_mobile?:boolean,
    hide_tablet?:boolean,
    hide_desktop?:boolean,
    is_rounded?:boolean 
};

export interface IButtonProperties extends IButtonBasicProperties{
    icon?:string|null,
    type?:ColorTypes,
    title?:string|null
};

export type DropDownItem = {
    title:MaybeRef<string>|string,
    active?:boolean,
    icon?:string,
    href?:string,
    onClick?:()=>void
}

export type DropDownBlock = {
    children:(string|DropDownItem)[]
}