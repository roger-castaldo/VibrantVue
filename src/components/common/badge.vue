<template>
    <span :class="['badge',`is-${props.position}`,(props.type===undefined?'':`is-${props.type}`)]">
        {{ props.text }}
        <!--
            @slot Content of the badge if something beyond a text string is desired
        -->
        <slot/>
    </span>
</template>

<script lang="ts" setup>
/**
 * @displayName Badge
 */
    import { BadgePositions,ColorTypes } from '../../enums';

    const props = withDefaults(defineProps<{
        /**
       * The position of the badge relative to it's parent.
       */
        position?:BadgePositions,
        /**
       * The text contained within the bade
       */
        text?:string,
        /**
       * The ColorType the badge should be
       */
        type?:ColorTypes
    }>(),{
        position:BadgePositions.topRight
    });
</script>