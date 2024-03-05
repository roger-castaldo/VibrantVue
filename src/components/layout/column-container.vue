<template>
    <div class="columns" :class="classes">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    import { ColumnContainerModifiers } from '../enums';
    import {computed} from 'vue';

    const props = defineProps<{
        modifiers?:ColumnContainerModifiers[]
    }>();

    const classes = computed<string[]>(()=>{
        let result = ['columns'];
        if (props.modifiers!==undefined && props.modifiers!==null){
            result = result.concat(props.modifiers.map(mod=>`is-${mod}`));
        }
        return result;
    });
</script>