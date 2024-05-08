export interface ITableProperties {
    scrollable?:boolean,
    fixed_header?:boolean,
    full_width?:boolean,
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