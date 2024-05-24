import { MaybeRef } from "vue";
import { ITableProperties } from "../layout/interfaces.ts";
import { IPaginationProperties } from "../common/typeDefinitions.ts";
import { ColorTypes } from "../../enums.ts";

export type AutoCompleteEntry = {
    /**
     * The method for the auto complete entry
     */
    method:string,
    /**
     * The description to display when suggesting it
     */
    description:string
};

export type GridColumn = {
    /**
     * The unique ID to use for the column
     */
    id:string,
    /**
     * The name of the property from the data object for the column
     */
    propertyName?:string,
    /**
     * The title to put in the table header for this column
     */
    title?:MaybeRef<string>,
    /**
     * The column span to apply to the table header cell
     */
    headerColspan?:number,
    /**
     * The row span to apply to the table header cell
     */
    headerRowspan?:number,
    /**
     * Additional classes to apply the table header cell
     */
    headerClass?:MaybeRef<string>|MaybeRef<string[]>,
    /**
     * The column span to apply to the table body cell
     */
    dataColspan?:number,
    /**
     * The row  span to apply to the table body cell
     */
    dataRowspan?:number,
    /**
     * The class to apply to the table body cell
     */
    cellClass?:MaybeRef<string>|MaybeRef<string[]>,
    /**
     * Indicates if this column only exists in the header
     */
    headerOnly?:boolean,
    /**
     * Indicates if this column can be sorted
     */
    canSort?:boolean,
    /**
     * Called to get a color for a given table body cell
     * 
     * @param rowIndex the index in the data supplied to the grid
     * @param row the item at the current index
     * @param data the property value gained from the propertyName
     * @returns The color for the table body cell if desired
     */
    getCellColor?:(rowIndex:number,row:any,data:any|undefined)=>ColorTypes|null|undefined
};

export type CellData = {
    /**
     * The index in the data of the grid
     */
    rowIndex:number,
    /**
     * The data value obtained from the propertyName for this column
     */
    data:any,
    /**
     * The data object in the data for the grid and the given index
     */
    row:any
}

export type GridSort = {
    /**
     * The column to sort the grid by
     */
    column:string,
    /**
     * Indicates if the sort order should be ascending
     */
    ascending:boolean
};

export interface IGridProperties 
    extends ITableProperties,IPaginationProperties {
    /**
     * The columns to define the grid with
     */
    columns:GridColumn[][],
    /**
     * The data belonging to the grid
     */
    data:[]|null,
    /**
     * A custom empty data message if desired
     */
    empty_message?:string,
    /**
     * Allows modifying how the columns are layed out within the grid by supplying the column ids.
     * Otherwise it simply goes in the order defined, left to right.
     */
    column_rows?:string[][],
    /**
     * Indicates if a Filter should be placed in the header
     */
    has_filter?:boolean,
    /**
     * Defines how the data is currently sorted
     */
    current_sort?:GridSort,
    /**
     * Called to get a color for a given table body row
     * 
     * @param rowIndex the index in the data supplied to the grid
     * @param row the item at the current index
     * @returns The color for the table body row if desired
     */
    getRowColor?:(rowIndex:number,row:any)=>ColorTypes|null|undefined
};