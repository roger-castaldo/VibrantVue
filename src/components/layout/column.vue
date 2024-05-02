<template>
    <div class="column" :class="Class">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
import { BorderTypes, ColumnOffsetSizes, ColumnSizes } from '../enums';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        size?:ColumnSizes,
        offset?:ColumnOffsetSizes,
        border?:BorderTypes[]
    }>();
    
    const Class = computed<string[]>(() => {
        var ret = [];
        if (props.size){ret.push(`is-${props.size}`);}
        if (props.offset){ret.push(`is-offset-${props.offset}`)};
        if (props.border){
            if (props.border.some(b=>b===BorderTypes.all)){
                ret.push('is-bordered');
            }else{
                props.border.forEach(b=>ret.push(`is-bordered-${b}`));
            }
        }
        return ret;
    });
</script>