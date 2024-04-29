<template>
    <span :class="Classes">
        <slot />
    </span>
</template>

<script lang="ts" setup>
    import { ColorTypes,Sizes } from '../enums';
    import {computed} from 'vue';

    const props = withDefaults(defineProps<{
        type?:ColorTypes,
        light?:boolean,
        rounded?:boolean,
        size?:Sizes,
        is_delete?:boolean
    }>(),{
        type:ColorTypes.primary,
        light:false,
        rounded:false,
        size:Sizes.normal,
        is_delete:false
    });
    
    const Classes = computed<string[]>(()=>{
        let result = ['tag',`is-${props.type}`,`is-${props.size}`];
        if (props.light){result.push('is-light');}
        if(props.rounded){result.push('is-rounded');}
        if (props.is_delete){result.push('is-delete');}
        return result;
    });
</script>