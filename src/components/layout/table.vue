<template>
    <div :class="containerClasses">
        <table :class="tableClasses">
            <thead v-if="slots.thead">
                <slot name="thead" />
            </thead>
            <tbody v-if="slots.tbody">
                <slot name="tbody"/>
            </tbody>
            <tfoot v-if="slots.tfoot">
                <slot name="tfoot"/>
            </tfoot>
        </table>
    </div>
</template>

<script lang="ts" setup>
    import {computed, useSlots} from 'vue';
    import { ITableProperties } from './interfaces';

    const slots = useSlots();
    
    const props = defineProps<ITableProperties>();
    
    const containerClasses = computed<string[]>(()=>{
        let ret:string[]=[];
        if (props.scrollable){ret.push('table-container');}
        if (props.fixed_header&&props.scrollable){ret.push('is-fixed');}
        return ret;
    });

    const tableClasses = computed<string[]>(()=>{
        let ret:string[]=['table','is-striped','is-hoverable'];
        if (props.fixed_header&&!props.scrollable){ret.push('is-fixed');}
        if(props.full_width){ret.push('is-fullwidth');}
        if (props.narrow){ret.push('is-narrow');}
        return ret;
    });
</script>