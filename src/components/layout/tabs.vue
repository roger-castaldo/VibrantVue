<template>
    <div :class="classes">
        <ul>
            <slot />
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import {computed} from 'vue';
    import { TabAlignments, TabStyles } from '../enums';

    const props = defineProps<{
        alignment?:TabAlignments,
        type?:TabStyles,
        fullWidth?:boolean
    }>();

    const classes = computed<string[]>(()=>{
        let ret:string[] = ['tabs'];
        if (props.alignment){ret.push(`is-${props.alignment}`);}
        else{ret.push('is-left');}
        if(props.type){ret.push(`is-${props.type}`);}
        if (props.fullWidth){ret.push('is-fullwidth');}
        return ret;
    });
</script>