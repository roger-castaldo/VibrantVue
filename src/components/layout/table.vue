<template>
    <div :class="containerClasses">
        <table :class="tableClasses">
            <thead v-if="slots.thead">
                <!--
                    @slot The thead portion of the table
                -->
                <slot name="thead" />
            </thead>
            <tbody v-if="slots.tbody">
                <!--
                    @slot The tbody portion of the table
                -->
                <slot name="tbody"/>
            </tbody>
            <tfoot v-if="slots.tfoot">
                <!--
                    @slot The tfoot portion of the table
                -->
                <slot name="tfoot"/>
            </tfoot>
        </table>
    </div>
</template>

<script lang="ts" setup>
/**
 * A Table component to use
 * 
 * @displayName Table
 * @link https://bulma.io/documentation/elements/table/
 */
    import {computed, useSlots} from 'vue';
    import { ITableProperties } from './interfaces';

    const slots = useSlots();
    
    const props = withDefaults(defineProps<ITableProperties>(),{
        fixed_header:false,
        scrollable:false
    });
    
    const containerClasses = computed<string[]>(()=>{
        return [
            (props.scrollable?'table-container':''),
            (props.fixed_header&&!props.scrollable?'is-fixed':'')
        ];
    });

    const tableClasses = computed<string[]>(()=>{
        return [
            'table',
            'is-striped',
            'is-hoverable',
            (props.fixed_header&&!props.scrollable?'is-fixed':''),
            (props.full_width?'is-fullwidth':''),
            (props.narrow?'is-narrow':'')
        ];
    });
</script>