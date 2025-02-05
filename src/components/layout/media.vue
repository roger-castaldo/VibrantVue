<template>
    <article class="media">
        <figure class="media-left" v-if="slots.left_figure">
            <!--
                @slot A slot containing an image to place on the left of the article
            -->
            <slot name="left_figure"/>
        </figure>
        <div class="media-content">
            <!--
                @slot The content of this media item
            -->
            <slot name="content"/>
        </div>
        <div class="media-right" v-if="slots.right_section">
            <!--
                @slot The content to place on the right of this article
            -->
            <slot name="right_section"/>
        </div>
    </article>
</template>

<script lang="ts" setup>
/**
 * The famous media object prevalent in social media interfaces, but useful in any context
 *  
 * @displayName Media
 * @link https://bulma.io/documentation/layout/media-object/
 */
    import {useSlots} from 'vue';

    const slots = useSlots();
 </script>