<template>
    <div class="progress-group">
        <ToolTip v-for="entry,index in Entries" is="progress" 
            :class="`progress is-${entry.size} is-${entry.type} ${entry.onClick!==undefined ? 'is-clickable' : ''}`" 
            :key="index"
            :text="entry.caption??''"
            :position="ToolTipPositions.top"
            :style="{width:`${entry.percentage}%`}"
            value="100" 
            maximum="100"
            @click="()=>{if(entry.onClick!==undefined) entry.onClick();}">
            {{ `${entry.percentage}%` }}
        </ToolTip>
        <progress v-if="Filler!=null" 
            :class="`progress is-${Filler.size} is-${Filler.type}`" 
            :style="{width:`${Filler.percentage}%`}"
            value="100" 
            maximum="100">
            {{ `${Filler.percentage}%` }}>
        </progress>
    </div>
</template>

<script lang="ts" setup>
/**
 * Used to create a group of progressbars as a way of displaying multiple progress steps
 * 
 * @displayName ProgressGroup
 * @link https://github.com/CreativeBulma/bulma-tooltip/
 */
    import {computed,MaybeRef} from 'vue';
    import {ToolTip} from '../common/index';
    import {ProgressEntry} from './typeDefinitions';
    import { Sizes,ColorTypes,ToolTipPositions } from '../../enums';

    type MappedEntry = {
        size:Sizes,
        type:ColorTypes|null,
        caption:MaybeRef<string>|null,
        percentage:number,
        onClick?:()=>void
    };

    const props = defineProps<{
        /**
        * The size to use
        */
        size?:Sizes,
        /**
         * The values of the progress
         */
        values:ProgressEntry[],
        /**
         * The maxmimum total value to use for scaling
         */
        max?:number
    }>();

    const Total = computed<number>(()=>{
        let total:number = 0;
        for(let x=0;x<props.values.length;x++){
            total+=props.values[x].value;
        }
        return total;
    });

    const Entries = computed<MappedEntry[]>(()=>{
        return props.values.map<MappedEntry>(val=>{
            return {
                size:props.size??Sizes.normal,
                type:val.type,
                percentage:(val.value/(props.max??Total.value))*100,
                caption:val.caption??`${val.value}`,
                onClick:val.onClick
            };
        });
    });

    const Filler = computed<MappedEntry|null>(()=>{
        if (props.max!==undefined){
            return {
                size:props.size??Sizes.normal,
                type:null,
                percentage:((props.max!-Total.value)/props.max!)*100,
                caption:null
            };
        }
        return null;
    });
</script>