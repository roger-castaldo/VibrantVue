<template>
    <skeleton :tag="tag" :is_loading="props.is_loading" :class="['title',`is-${props.level}`]">
        <!--
            @slot used when something more than text is desired
        -->
        <slot>
            {{ props.text }}
        </slot>
    </skeleton>
</template>

<script lang="ts" setup>
import { computed, Ref } from 'vue';
import { skeleton } from '../shared';

/**
 * Used to supply a title component
 * 
 * @displayName Title
 * @link https://bulma.io/documentation/elements/title/
 */
    const props = withDefaults(defineProps<{
        /**
         * The title level 1-6
         */
        level?:number,
        /**
         * The string content of the title
         */
        text?:string,
        /**
         * Indicates if the title is loading and to render a skeleton style
         */
        is_loading?:Ref<boolean>|boolean
    }>(),{
        level:1,
        text:'',
        is_loading:undefined
    });

    if (props.level<1 || props.level>6){
        throw 'level must be between 1 and 6';
    }

    var tag = computed(()=>`h${(props.level<1 || props.level>6 ? 1 : props.level.toFixed(0))}`);
</script>