<template>
    <Icon :icon="`square-${(props.checked ? 'check' : 'xmark')}`" :size="props.size"/>
</template>

<script lang="ts" setup>
    import Icon from "./icon.vue";
    import { IconSizes } from "../enums";
    import { withDefaults } from "vue";

    const props = withDefaults(defineProps<{
        checked?:boolean,
        size?:IconSizes
    }>(),{
        checked:true,
        size:IconSizes.normal
    });
</script>