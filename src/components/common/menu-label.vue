<template>
    <p class="menu-label">
        {{ props.message }}
        <!--
            @slot Content of the menu label if something beyond a string is desired
        -->
        <slot/>
    </p>
</template>
<script lang="ts" setup>
/**
 * This is used to supply a menu label entry into the Menu component
 * 
 * @displayName MenuLabel
 */
    const props = withDefaults(defineProps<{
        /**
         * The content of the Menu Label
         */
        message?:string
    }>(),{
        message:''
    });
</script>