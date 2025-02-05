<template>
    <span :class="['tags',(props.size===null?'':'are-'+props.size),(props.addons?'has-addons':'')]">
        <!--
            @slot Houses the tags to contain within the tags collection
        -->
        <slot />
    </span>
</template>

<script lang="ts" setup>
/**
 * Used to supply a Tags control to house multiple tags
 * 
 * @displayName Tags
 * @link https://bulma.io/documentation/elements/tag/
 */
    import { Sizes } from '../../enums';

    const props = defineProps<{
        /**
         * The size to override for all the tags
         */
        size?:Sizes,
        /**
         * Used to set the has-addons class
         */
        addons?:boolean
    }>();
</script>