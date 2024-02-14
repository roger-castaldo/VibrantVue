<template>
    <Table v-bind="tableProperties">
        <template #thead>
            <tr v-for="row in props.Columns">
                <th v-for="col in row" :colspan="col.Colspan??1" :rowspan="col.Rowspan??1">
                    <slot :name="`head-${col.ID}`"/>
                    {{ col.Title }}
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
                    <tr :key="`row-${index}-${cindex}`" v-for="row,cindex in props.Columns">
                        <td :key="`data-${index}-${cindex}`" 
                            v-for="col in row" 
                            :colspan="col.Colspan??1" 
                            :rowspan="col.Rowspan??1"
                            @click="emit('cellClicked',{RowIndex:index,Data:(col.PropertyName?drow[col.PropertyName] : null),Row:drow})"
                        >
                            <slot :name="`body-${col.ID}`" v-bind="{RowIndex:index,Data:(col.PropertyName?drow[col.PropertyName] : null),Row:drow}"/>
                        </td>
                    </tr>
                </template>
            </template>
        </template>
        <template #tfoot>
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
</script>