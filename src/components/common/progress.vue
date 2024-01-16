<template>
    <progress :class="`progress is-${props.size} is-${props.type}`" :value="props.value" :max="props.maximum">{{percentage ? `${percentage}%` : null}}</progress>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ColorTypes, Sizes } from '../enums';

    const props = withDefaults(defineProps<{
       type?:ColorTypes,
       size?:Sizes,
       value?:number,
       maximum?:number
    }>(),{
        type:ColorTypes.primary,
        size:Sizes.normal
    });

    const percentage = computed<number|null>(()=>{
        return props.maximum===undefined ? null : (props.value??0)/props.maximum;
    });
</script>