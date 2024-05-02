<template>
    <span :class="['badge',`is-${props.position}`,(props.type===undefined?'':`is-${props.type}`)]">
        {{ props.text }}
        <slot/>
    </span>
</template>

<script lang="ts" setup>
    import { BadgePositiions,ColorTypes } from '../enums';

    const props = withDefaults(defineProps<{
        position?:BadgePositiions,
        text?:string,
        type?:ColorTypes
    }>(),{
        position:BadgePositiions.topRight
    });
</script>