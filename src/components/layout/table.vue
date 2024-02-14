<template>
    <div :class="containerClasses">
        <table :class="tableClasses">
            <thead>
                <slot name="thead" />
            </thead>
            <tbody>
                <slot name="tbody"/>
            </tbody>
            <tfoot>
                <slot name="tfoot"/>
            </tfoot>
        </table>
    </div>
</template>

<script lang="ts" setup>
    import {computed} from 'vue';
    import { ITableProperties } from './interfaces';
    
    const props = defineProps<ITableProperties>();
    
    const containerClasses = computed<string[]>(()=>{
        let ret:string[]=[];
        if (props.scrollable){ret.push('table-container');}
        if (props.fixedHeader&&props.scrollable){ret.push('is-fixed');}
        return ret;
    });

    const tableClasses = computed<string[]>(()=>{
        let ret:string[]=['table','is-striped','is-hoverable'];
        if (props.fixedHeader&&!props.scrollable){ret.push('is-fixed');}
        if(props.fullWidth){ret.push('is-fullwidth');}
        if (props.narrow){ret.push('is-narrow');}
        return ret;
    });
</script>