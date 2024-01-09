<template>
    <div :class="Classes">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
import { BorderTypes, TileSizes, TileTypes } from '../enums';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        type:TileTypes,
        size?:TileSizes,
        borders?:BorderTypes[],
        vertical?:boolean
    }>();

    const Classes = computed<string[]>(() => {
        let result:string[] = ['tile',`is-${props.type}`];
        if (props.size){result.push(`is-${props.size}`);}
        if (props.borders){
            if (props.borders.some(b=>b===BorderTypes.all)){
                result.push('is-bordered');
            }else{
                props.borders.forEach(b=>result.push(`is-bordered-${b}`));
            }
        }
        if (props.vertical){result.push('is-vertical');}
        return result;
    });
</script>