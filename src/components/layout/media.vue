<template>
    <article class="media">
        <skeleton tag="figure" :is_loading="props.is_loading" class="media-left" v-if="slots.left_figure">
            <!--
                @slot A slot containing an image to place on the left of the article
            -->
            <slot name="left_figure"/>
        </skeleton>
        <skeleton :is_loading="props.is_loading" class="media-content">
            <!--
                @slot The content of this media item
            -->
            <slot name="content"/>
        </skeleton>
        <skeleton :is_loading="props.is_loading" class="media-right" v-if="slots.right_section">
            <!--
                @slot The content to place on the right of this article
            -->
            <slot name="right_section"/>
        </skeleton>
    </article>
</template>

<script lang="ts" setup>
/**
 * The famous media object prevalent in social media interfaces, but useful in any context
 *  
 * @displayName Media
 * @link https://bulma.io/documentation/layout/media-object/
 */
    import {Ref, useSlots} from 'vue';
import { skeleton } from '../shared';

    const slots = useSlots();

    const props = withDefaults(defineProps<{
        /**
         * Indicates if the media object is loading and to render a skeleton style
         */
        is_loading?:Ref<boolean>|boolean
    }>(),{
        is_loading:undefined
    });
 </script>