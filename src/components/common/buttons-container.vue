<template>
    <div :class="['buttons',(props.size?`are-${props.size}`:''),(props.alignment?`is-${props.alignment}`:'')]">
        <!--
            @slot The buttons that are being collected together
        -->
        <slot/>
    </div>
</template>

<script lang="ts" setup>
/**
 * This is used to collect a set of buttons together and align/style them approriately
 * @displayName ButtonsContainer
 */
    import {Sizes,ButtonAlignments} from '../../enums';

    const props = defineProps<{
        /**
         * The size to set for the buttons (if there is desire to override)
         */
        size?:Sizes,
        /**
         * The alignment to use for the buttons within the group
         */
        alignment?:ButtonAlignments
    }>();
</script>