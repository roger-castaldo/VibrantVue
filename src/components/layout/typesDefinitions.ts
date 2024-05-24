import { BorderTypes, ColorTypes, ColumnOffsetSizes, ColumnSizes } from '../../enums.ts';

export type Column = {
    /**
     * The size of the column
     */
    size?:ColumnSizes,
    /**
     * The offset to use for the column
     */
    offset?:ColumnOffsetSizes,
    /**
     * The border(s) to apply to the column
     */
    border?:BorderTypes[],
    /**
     * The name of the column, if not supplied, the slot will be names #col-{index}
     */
    name?:string,
    /**
     * Additional classes to apply to the column if needed
     */
    class?:string
}

export type ListItem = {
    /**
     * The color of the list item
     */
    type?:ColorTypes,
    /**
     * Indicates if the list item is styled by outline
     */
    outlined?:boolean,
    /**
     * Indicates if the list item is styled by highlight
     */
    highlighted?:boolean,
    /**
     * Add on Icon to the list item
     */
    icon?:string,
    /**
     * The name to use for identifying the slot
     */
    name?:string,
    /**
     * The click call back to call when the icon is clicked
     * @returns void
     */
    onClick?:()=>void
}