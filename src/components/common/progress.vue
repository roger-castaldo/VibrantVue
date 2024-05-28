<template>
    <progress :class="`progress is-${props.size} is-${props.type}`" :value="props.value" :max="props.maximum">{{percentage ? `${percentage}%` : null}}</progress>
</template>

<script lang="ts" setup>
/**
 * Used to supply a progress bar control
 * 
 * @displayName Progress
 * @link https://bulma.io/documentation/elements/progress/
 */
import { computed } from 'vue';
import { ColorTypes, Sizes } from '../../enums';

    const props = withDefaults(defineProps<{
       /**
        * The color to use for the progress bar
        */ 
       type?:ColorTypes,
       /**
        * The size to use
        */
       size?:Sizes,
       /**
        * A number value if desired to display a number
        */
       value?:number,
       /**
        * The maximum value if desired to use a value
        */
       maximum?:number
    }>(),{
        type:ColorTypes.primary,
        size:Sizes.normal
    });

    const percentage = computed<number|null>(()=>{
        return props.maximum===undefined ? null : (props.value??0)/props.maximum;
    });
</script>