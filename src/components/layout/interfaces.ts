import { ColorTypes } from "../../enums";

export interface ITableProperties {
    /**
     * Indicates of the table is scrollable
     */
    scrollable?:boolean,
    /**
     * Indicates if the table header should be fixed
     */
    fixed_header?:boolean,
    /**
     * Indicates if the width of the table should be the max allowed and not based on the content
     */
    full_width?:boolean,
    /**
     * Indicates if the table should be made narrow (minimal padding)
     */
    narrow?:boolean
};

export type Tab = {
    active?:boolean,
    title?:string,
    icon?:string,
    href?:string,
    onClick?:()=>void
};

export type BreadCrumb = {
    active:boolean,
    title:string,
    icon?:string|null,
    onClick?:()=>void
}

export interface IListProperties{
    /**
     * The color type to use for the list
     */
    type?:ColorTypes,
    /**
     * Inidicates if this list should be compact
     */
    compact?:boolean,
    /**
     * Indicates if this list should use the outlined styling
     */
    outlined?:boolean,
    /**
     * Inidicates if this list should use the highlighted styling
     */
    highlighted?:boolean
}