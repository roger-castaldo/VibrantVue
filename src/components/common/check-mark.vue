<template>
    <Icon :icon="`square-${(props.checked ? 'check' : 'xmark')}`" :size="props.size"/>
</template>

<script lang="ts" setup>
/**
 * used to display a basic check mark on the screen
 * @displayName CheckMark
 */
    import Icon from "./icon.vue";
    import { IconSizes } from "../../enums";
    import { withDefaults } from "vue";

    const props = withDefaults(defineProps<{
        /**
         * Indicates if the icon should be be checked (check) or (xmark)
         */
        checked?:boolean,
        /**
         * Sets the size of the icon to use
         */
        size?:IconSizes
    }>(),{
        checked:true,
        size:IconSizes.normal
    });
</script>