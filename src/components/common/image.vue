<template>
    <skeleton tag="figure" :class="['image',props.size]" :is_loading="props.is_loading">
        <img :alt="props.alt" :src="unref(props.src)"/>
    </skeleton>
</template>

<script lang="ts" setup>
/**
 * Used to supply a wrapped image component useful for sizing
 * 
 * @displayName Image
 * @link https://bulma.io/documentation/elements/image/
 */
import {ImageSizes} from '../../enums';
import { Ref, unref} from 'vue'; 
import { skeleton } from '../shared';

    const props = withDefaults(defineProps<{
        /**
         * The source of the image
         */
        src:Ref<string>|string,
        /**
         * The size of the image
         */
        size?:ImageSizes
        /**
         * The alt content to use
         */
        alt?:string,
        /**
         * Indicates if the image is loading and to render a skeleton style
         */
        is_loading?:Ref<boolean>|boolean
    }>(),{
        size:ImageSizes.normal,
        alt:'',
        is_loading:undefined
    });
</script>

