<template>
    <Table v-bind="tableProperties">
        <template #thead>
            <tr v-if="props.has_filter??false">
                <th colspan="100%">
                    <Filter @filter="(value)=>emit('filter',value)"/>
                </th>
            </tr>
            <tr v-for="row in props.columns">
                <th v-for="col in row" :colspan="col.headerColspan" :rowspan="col.headerRowspan" :class="col.headerClass">
                    <!--
                        @slot A slot automatically created for each column.  Available to make custom header content for a given column
                    -->
                    <slot :name="`head-${col.id}`">
                        <span v-if="props.current_sort!==undefined && props.current_sort!==null && (col.canSort??false) && col.id===props.current_sort.column" 
                            class="icon-text is-clickable"
                            @click="changeSort(col.id)">
                            <span class="icon">
                                <Icon icon="arrow-down"/>
                            </span>
                            <span>{{col.title}}</span>
                        </span>
                        <template v-else>
                            {{col.title}}
                        </template>
                    </slot>
                </th>
            </tr>
        </template>
        <template #tbody>
            <template v-if="props.data===null || props.data.length===0">
                <tr>
                    <td colspan="100%">
                        <Progress v-if="props.data===null"/>
                        <Notification :message="props.empty_message??'No data available'" v-else/>
                    </td>
                </tr>
            </template>
            <template v-else>
                <template v-for="drow,index in props.data">
                    <tr :key="`row-${index}-${cindex}`" 
                        v-for="row,cindex in ColumnRows.filter(col=>col.some(c=>!(c.headerOnly??false)))"
                        :class="extractRowClass(index,drow)">
                        <td :key="`data-${index}-${cindex}`" 
                            v-for="col in row.filter(c=>!(c.headerOnly??false))" 
                            :colspan="col.dataColspan" 
                            :rowspan="col.dataRowspan"
                            :class="getCellClass(index,col,drow,(col.propertyName?drow[col.propertyName] : undefined))"
                            @click="emit('cellClicked',{rowIndex:index,data:(col.propertyName?drow[col.propertyName] : null),row:drow})"
                        >
                        <!--
                            @slot A slot automatically created for each column.  Available to make custom table cell content for a given column.  Supplied with rowIndex,data,row.
                        -->
                            <slot :name="`body-${col.id}`" v-bind="{rowIndex:index,data:(col.propertyName?drow[col.propertyName] : null),row:drow}">
                                {{(col.propertyName?drow[col.propertyName] : null)}}
                            </slot>
                        </td>
                    </tr>
                </template>
            </template>
        </template>
        <template #tfoot v-if="supportsPagination||slots.tfoot_head||slots.tfoot_bottom">
            <!--
                @slot appears prior to where the pagination footer would appear in the tfoot
            -->
            <slot name="tfoot_head"  v-if="slots.tfoot_head"/>
            <tr v-if="supportsPagination">
                <td colspan="100%">
                    <Pagination 
                        v-bind="paginationProperties" 
                        @moveForward="emit('moveForward')"
                        @moveBack="emit('moveBack')"
                        @goToPage="(page:number)=>emit('goToPage',page)"/>
                </td>
            </tr>
            <!--
                @slot appears after where the pagination footer would appear in the tfoot
            -->
            <slot name="tfoot_bottom" v-if="slots.tfoot_bottom"/>
        </template>
    </Table>
</template>

<script lang="ts" setup>
/**
 * Used to create a Grid on the screen.
 * The grid can support pagination, filtering, etc all layed out in a table that can be defined 
 * and implemented with minimal parts such as defining the tbody or a loop for the elements
 * 
 * @displayName Grid
 */
    import { CellData, GridSort, IGridProperties,GridColumn } from './typeDefinitions';
    import Table from '../layout/table.vue';
    import Pagination from '../common/pagination.vue';
    import Notification from '../common/notification.vue';
    import Progress from '../common/progress.vue';
    import Filter from '../common/filter.vue';
    import Icon from '../common/icon.vue';
    import { ITableProperties } from '../layout/interfaces';
    import { IPaginationProperties } from '../common/typeDefinitions';
    import {computed, toValue, useSlots} from 'vue';
    import { Sizes } from '../../enums';

    const slots : any = useSlots();

    const props = withDefaults(defineProps<IGridProperties>(),{
        use_next:true,
        size:Sizes.small,
        rounded:false ,
        has_previous:undefined,
        has_more:undefined
    });
    const emit = defineEmits<{
        /**
         * Emitted when the Forward button is clicked on the Pagination
         */
        moveForward:[],
        /**
         * Emitted when the Back button is clicked on the Pagination
         */
        moveBack:[],
        /**
         * Emitted when a Specific Page button is clicked on the Pagiation
         */
        goToPage:[page:number],
        /**
         * Emitted when a table cell is clicked on
         */
        cellClicked:[cell:CellData],
        /**
         * Emitted when a header that is sortable is clicked on to invoke a sort
         */
        sort:[by:GridSort],
        /**
         * Emitted when the Filter item emits a request to filter
         */
        filter:[value:string|null]
    }>();
    const tableProperties:ITableProperties = {
        scrollable:props.scrollable,
        fixed_header:props.fixed_header,
        full_width:props.full_width,
        narrow:props.narrow
    };
    const paginationProperties:IPaginationProperties = {
        use_next:props.use_next,
        has_more:props.has_more,
        has_previous:props.has_previous,
        size:props.size,
        rounded:props.rounded,
        button_type:props.button_type,
        total_pages:props.total_pages,
        current_page:props.current_page
    };
    const supportsPagination = computed<boolean>(()=>{
        if (props.has_previous){return true;}
        if (props.has_more){return true;}
        if (props.current_page!==undefined && props.total_pages!==undefined && toValue<number>(props.total_pages)>1){return true;}
        return false;
    });
    const ColumnRows = computed<GridColumn[][]>(()=>{
        if (props.column_rows===undefined || props.column_rows.length===0){
            return props.columns;
        }
        return props.column_rows.map(row=>{
            return row.map(c=>props.columns.filter(col=>col.some(i=>i.id===c))[0].find(col=>col.id===c)!);
        });
    });
    const changeSort = (column:string) => {
        if (props.current_sort!==undefined && props.current_sort!==null 
        && props.current_sort.column===column){
            emit('sort',{
                column:column,
                ascending:!props.current_sort.ascending
            });
        }else{
            emit('sort',{
                column:column,
                ascending:true
            });
        }
    };
    const extractRowClass = (rowIndex:number,row:any): string|null=>{
        if (props.getRowColor){
            let color = props.getRowColor(rowIndex,row);
            if (color){
                return `is-${color}`;
            }
        }
        return null;
    }
    const getCellClass = (rowIndex:number,col:GridColumn,row:any,data:any|undefined) : string|null =>{
        let result:string|null = '';
        if (col.cellClass || col.getCellColor){
            if(col.cellClass){
                result += `${col.cellClass}`;
            }
            if (col.getCellColor){
                let cellColor = col.getCellColor(rowIndex,row,data);
                if (cellColor){
                    result+= ` is-${cellColor}`;
                }
            }
        }
        return (result===''?null:result);
    }
</script>