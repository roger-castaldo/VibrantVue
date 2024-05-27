<template>
    <div :class="classes">
        <template v-for="col,index in Columns">
            <div :class="col.class">
                <!--
                    @slot the slot for the content of the given column whose name is either the name property or col-{index}
                -->
                <slot :name="col.name" v-if="slots[col.name]"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
type definedColumn = {
    name:string,
    class:string[]
};
</script>

<script lang="ts" setup>
/**
 * A Column Container component to use to build a set of columns
 * 
 * @displayName ColumnContainer
 */
    import { ColumnContainerModifiers,BorderTypes } from '../../enums';
    import { Column } from './typeDefinitions';
    import {computed,useSlots} from 'vue';

    const slots = useSlots();

    const props = defineProps<{
        /**
         * Any modifiers to apply to the given columns
         */
        modifiers?:ColumnContainerModifiers[],
        /**
         * The columns to be defined inside this container
         */
        columns:Column[]
    }>();

    const classes = computed<string[]>(()=>{
        let result = ['columns'];
        if (props.modifiers!==undefined && props.modifiers!==null){
            result = result.concat(props.modifiers.map(mod=>`is-${mod}`));
        }
        return result;
    });
    const Columns = computed<definedColumn[]>(()=>{
        return props.columns.map((c,index)=>{
            let classData:string[] = ['column'];
            if (c.size){classData.push(`is-${c.size}`);}
            if (c.offset){classData.push(`is-offset-${c.offset}`)};
            if (c.border){
                if (c.border.some(b=>b===BorderTypes.all)){
                    classData.push('is-bordered');
                }else{
                    c.border.forEach(b=>classData.push(`is-bordered-${b}`));
                }
            }
            return {
                name:c.name??`col-${index}`,
                class:classData
            };
        });
    });
</script>