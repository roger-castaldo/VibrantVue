import { ColorTypes } from "../../enums.ts";

export type ValueChangedEvent = {
    /**
     * Name of the form element that changed
     */
    name:string,
    /**
     * The new value
     */
    value:any
};

export type ListItemValue = {
    /**
     * The value for this list item that will be used when selected
     */
    value:any,
    /**
     * What to display on the screen
     */
    label:string,
    /**
     * Indicates if the item is currently selected
     */
    selected?:boolean
};

export type SelectListItemValue = {
    /**
     * The value for this list item that will be used when selected
     */
    value:any,
    /**
     * What to display on the screen
     */
    label:string,
    /**
     * Indicates if the item is currently selected
     */
    selected?:boolean
    /**
     * Child items if this item is a group
     */
    values?:SelectListItemValue[]
};

export type FormInputType = {
    /**
     * The type of input in the form
     */
    type:string,
    /**
     * The name of the input (used in getting/setting values, etc)
     */
    name?:string,
    /**
     * The subtype (sometimes required in the case of something like text)
     */
    subtype?:string,
    /**
     * The label for the item if needed
     */
    label?:string,
    /**
     * Indicates if the field is required
     */
    required?:boolean,
    /**
     * Set a specific color for it
     */
    style?:ColorTypes,
    /**
     * Additional classes if needed
     */
    className?:string,
    /**
     * Icon to use for it
     */
    icon?:string,
    /**
     * Value for it
     */
    value?:any,
    /**
     * Indicates if it is disabled
     */
    disabled?:boolean,
    /**
     * Number of columns that are taken up from 1 - 12
     */
    form_columns?:number,
    /**
     * Custom translate function if desired from defaults
     * 
     * @param value the string to translate
     * @returns a translated string based on current language
     */
    Translate?:(value:string)=>string
};

export type TranslateMethod = (value:string)=>string;