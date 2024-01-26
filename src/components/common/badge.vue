<template>
    <span :class="['badge',`is-${props.position}`]">
        {{ props.text }}
        <slot/>
    </span>
</template>

<script lang="ts" setup>
    import { BadgePositiions } from '../enums';

    const props = withDefaults(defineProps<{
        position?:BadgePositiions,
        text?:string
    }>(),{
        position:BadgePositiions.topRight
    });
</script>