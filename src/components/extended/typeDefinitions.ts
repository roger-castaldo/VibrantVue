import { MaybeRef } from "vue";
import { ITableProperties } from "../layout/interfaces";
import { IPaginationProperties } from "../common/typeDefinitions";

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
    dataColspan?:number,
    dataRowspan?:number,
    headerOnly?:boolean,
    canSort?:boolean
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
    current_sort?:GridSort
};

export type {AutoCompleteEntry, GridColumn,CellData,GridSort};
export {IGridProperties};