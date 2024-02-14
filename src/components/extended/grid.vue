<template>
    <Table v-bind="tableProperties">
        <template #thead>
            <tr v-for="row in props.Columns">
                <th v-for="col in row" :colspan="col.HeaderColspan" :rowspan="col.HeaderRowspan">
                    <slot :name="`head-${col.ID}`"/>
                    {{col.Title}}
                </th>
            </tr>
        </template>
        <template #tbody>
            <template v-if="props.Data===null || props.Data.length===0">
                <tr>
                    <td colspan="100%">
                        <Progress v-if="props.Data===null"/>
                        <Notification :message="props.EmptyMessage??'No data available'" v-else/>
                    </td>
                </tr>
            </template>
            <template v-else>
                <template v-for="drow,index in props.Data">
                    <tr :key="`row-${index}-${cindex}`" v-for="row,cindex in ColumnRows.filter(col=>col.some(c=>!(c.HeaderOnly??false)))">
                        <td :key="`data-${index}-${cindex}`" 
                            v-for="col in row.filter(c=>!(c.HeaderOnly??false))" 
                            :colspan="col.DataColspan" 
                            :rowspan="col.DataRowspan"
                            @click="emit('cellClicked',{RowIndex:index,Data:(col.PropertyName?drow[col.PropertyName] : null),Row:drow})"
                        >
                            <slot :name="`body-${col.ID}`" v-bind="{RowIndex:index,Data:(col.PropertyName?drow[col.PropertyName] : null),Row:drow}">
                                {{(col.PropertyName?drow[col.PropertyName] : null)}}
                            </slot>
                        </td>
                    </tr>
                </template>
            </template>
        </template>
        <template #tfoot v-if="(props.hasprevious??false) || ((props.currentpage??0)>0)||(props.hasmore??false) || ((props.currentpage??0)<(props.totalpages??0-1))">
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
    import { CellData, IGridProperties } from './typeDefinitions';
    import Table from '../layout/table.vue';
    import Pagination from '../common/pagination.vue';
    import Notification from '../common/notification.vue';
    import Progress from '../common/progress.vue';
    import { ITableProperties } from '../layout/interfaces';
    import { IPaginationProperties } from '../common/typeDefinitions';
    import {computed} from 'vue';
    import { Sizes } from '../enums';

    const props = withDefaults(defineProps<IGridProperties>(),{
        usenext:true,
        size:Sizes.small,
        rounded:false ,
        hasprevious:undefined,
        hasmore:undefined
    });
    const emit = defineEmits<{
        moveForward:[],
        moveBack:[],
        goToPage:[page:number],
        cellClicked:[cell:CellData]
    }>();
    const tableProperties = computed<ITableProperties>(()=>{
        return {
            scrollable:props.scrollable,
            fixedHeader:props.fixedHeader,
            fullWidth:props.fullWidth,
            narrow:props.narrow
        };
    });
    const paginationProperties = computed<IPaginationProperties>(()=>{
        return {
            usenext:props.usenext,
            hasmore:props.hasmore,
            hasprevious:props.hasprevious,
            size:props.size,
            rounded:props.rounded,
            buttontype:props.buttontype,
            totalpages:props.totalpages,
            currentpage:props.currentpage
        };
    });
    const ColumnRows = computed(()=>{
        if (props.ColumnRows===undefined || props.ColumnRows.length===0){
            return props.Columns;
        }
        return props.ColumnRows.map(row=>{
            return row.map(c=>props.Columns.filter(col=>col.some(i=>i.ID===c))[0].find(col=>col.ID===c));
        });
    });
</script>