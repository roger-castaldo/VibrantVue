<template>
    <span :class="Classes">
        <!--
            @slot used when something more than text is desired
        -->
        <slot>
            {{ props.text }}
        </slot>
    </span>
</template>

<script lang="ts" setup>
/**
 * Used to supply a tag component
 * 
 * @displayName Tag
 * @link https://bulma.io/documentation/elements/tag/
 */
    import { ColorTypes,Sizes } from '../../enums';
    import {computed} from 'vue';

    const props = withDefaults(defineProps<{
        /**
         * The color of the tag
         */
        type?:ColorTypes,
        /**
         * Inidicates to use the light version of the specified color
         */
        light?:boolean,
        /**
         * Inidicates if the tag should be rounded
         */
        rounded?:boolean,
        /**
         * The size of the tag to use
         */
        size?:Sizes,
        /**
         * Inidicates if this tag is a delete tag
         */
        is_delete?:boolean,
        /**
         * The string content of the tag
         */
        text?:string
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