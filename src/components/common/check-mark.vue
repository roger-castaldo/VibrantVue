<template>
    <Icon :icon="`square-${(props.checked ? 'check' : 'xmark')}`" :size="IconSizes.normal"/>
</template>

<script lang="ts" setup>
    import Icon from "./icon.vue";
    import { IconSizes } from "../enums";
    import { withDefaults } from "vue";

    const props = withDefaults(defineProps<{
        checked?:boolean
    }>(),{
        checked:true
    });
</script>