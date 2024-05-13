import { MaybeRef } from "vue";
import { ITableProperties } from "../layout/interfaces";
import { IPaginationProperties } from "../common/typeDefinitions";
import { ColorTypes } from "../enums";

type AutoCompleteEntry = {
    method:string,
    description:string
};

type GridColumn = {
    id:string,
    propertyName?:string,
    title?:MaybeRef<string>,
    headerColspan?:number,
    headerRowspan?:number,
    headerClass?:MaybeRef<string>|MaybeRef<string[]>,
    dataColspan?:number,
    dataRowspan?:number,
    cellClass?:MaybeRef<string>|MaybeRef<string[]>,
    headerOnly?:boolean,
    canSort?:boolean,
    getCellColor?:(rowIndex:number,row:any,data:any|undefined)=>ColorTypes|null|undefined
};

type CellData = {
    rowIndex:number,
    data:any,
    row:any
}

type GridSort = {
    column:string,
    ascending:boolean
};

interface IGridProperties 
    extends ITableProperties,IPaginationProperties {
    columns:GridColumn[][],
    data:[]|null,
    empty_message?:string,
    column_rows?:string[][],
    has_filter?:boolean,
    current_sort?:GridSort,
    getRowColor?:(rowIndex:number,row:any)=>ColorTypes|null|undefined
};

export type {AutoCompleteEntry, GridColumn,CellData,GridSort};
export {IGridProperties};