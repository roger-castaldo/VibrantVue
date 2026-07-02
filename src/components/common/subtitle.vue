<template>
    <skeleton :tag="tag" :is_loading="props.is_loading" :class="['subtitle',`is-${props.level}`]">
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
 * Used to supply a subtitle component
 * 
 * @displayName Subtitle
 * @link https://bulma.io/documentation/elements/title/
 */
    const props = withDefaults(defineProps<{
        /**
         * The subtitle level 1-6
         */
        level?:number,
        /**
         * The string content of the subtitle
         */
        text?:string,
        /**
         * Indicates if the subtitle is loading and to render a skeleton style
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