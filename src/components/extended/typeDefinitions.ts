import { MaybeRef } from "vue";
import { ITableProperties } from "../layout/interfaces";
import { IPaginationProperties } from "../common/typeDefinitions";

type AutoCompleteEntry = {
    Method:string,
    Description:string
};

type GridColumn = {
    ID:string,
    PropertyName?:string,
    Title?:MaybeRef<string>,
    HeaderColspan?:number,
    HeaderRowspan?:number,
    DataColspan?:number,
    DataRowspan?:number,
    HeaderOnly?:boolean
};

type CellData = {
    RowIndex:number,
    Data:any,
    Row:any
}

interface IGridProperties 
    extends ITableProperties,IPaginationProperties {
    Columns:GridColumn[][],
    Data:[]|null,
    EmptyMessage?:string,
    ColumnRows?:string[][]
};

export type {AutoCompleteEntry, GridColumn,CellData};
export {IGridProperties};