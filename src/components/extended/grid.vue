<template>
    <Table v-bind="tableProperties">
        <template #thead>
            <tr v-if="props.has_filter??false">
                <th colspan="100%">
                    <Filter v-on:filter="(value)=>emit('filter',value)"/>
                </th>
            </tr>
            <tr v-for="row in props.columns">
                <th v-for="col in row" :colspan="col.headerColspan" :rowspan="col.headerRowspan">
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
                    <tr :key="`row-${index}-${cindex}`" v-for="row,cindex in ColumnRows.filter(col=>col.some(c=>!(c.headerOnly??false)))">
                        <td :key="`data-${index}-${cindex}`" 
                            v-for="col in row.filter(c=>!(c.headerOnly??false))" 
                            :colspan="col.dataColspan" 
                            :rowspan="col.dataRowspan"
                            @click="emit('cellClicked',{rowIndex:index,data:(col.propertyName?drow[col.propertyName] : null),row:drow})"
                        >
                            <slot :name="`body-${col.id}`" v-bind="{rowIndex:index,data:(col.propertyName?drow[col.propertyName] : null),row:drow}">
                                {{(col.propertyName?drow[col.propertyName] : null)}}
                            </slot>
                        </td>
                    </tr>
                </template>
            </template>
        </template>
        <template #tfoot v-if="(props.has_previous??false) || ((props.current_page??0)>0)||(props.has_more??false) || ((props.current_page??0)<(props.total_pages??0-1))">
            <tr>
                <td colspan="100%">
                    <Pagination 
                        v-bind="paginationProperties" 
                        @moveForward="emit('moveForward')"
                        @moveBack="emit('moveBack')"
                        @goToPage="(page:number)=>emit('goToPage',page)"/>
                </td>
            </tr>
        </template>
    </Table>
</template>

<script lang="ts" setup>
    import { CellData, GridSort, IGridProperties } from './typeDefinitions';
    import Table from '../layout/table.vue';
    import Pagination from '../common/pagination.vue';
    import Notification from '../common/notification.vue';
    import Progress from '../common/progress.vue';
    import Filter from '../common/filter.vue';
    import Icon from '../common/icon.vue';
    import { ITableProperties } from '../layout/interfaces';
    import { IPaginationProperties } from '../common/typeDefinitions';
    import {computed} from 'vue';
    import { Sizes } from '../enums';

    const props = withDefaults(defineProps<IGridProperties>(),{
        use_next:true,
        size:Sizes.small,
        rounded:false ,
        has_previous:undefined,
        has_more:undefined
    });
    const emit = defineEmits<{
        moveForward:[],
        moveBack:[],
        goToPage:[page:number],
        cellClicked:[cell:CellData],
        sort:[by:GridSort],
        filter:[value:string|null]
    }>();
    const tableProperties = computed<ITableProperties>(()=>{
        return {
            scrollable:props.scrollable,
            fixed_header:props.fixed_header,
            full_width:props.full_width,
            narrow:props.narrow
        };
    });
    const paginationProperties = computed<IPaginationProperties>(()=>{
        return {
            use_next:props.use_next,
            has_more:props.has_more,
            has_previous:props.has_previous,
            size:props.size,
            rounded:props.rounded,
            button_type:props.button_type,
            total_pages:props.total_pages,
            current_page:props.current_page
        };
    });
    const ColumnRows = computed(()=>{
        if (props.column_rows===undefined || props.column_rows.length===0){
            return props.columns;
        }
        return props.column_rows.map(row=>{
            return row.map(c=>props.columns.filter(col=>col.some(i=>i.id===c))[0].find(col=>col.id===c));
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
</script>