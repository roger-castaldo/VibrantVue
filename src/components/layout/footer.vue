<template>
    <footer class="footer" :aria-label="props.aria_label">
        <!--
            @slot The content of the footer
        -->
        <slot/>
    </footer>
</template>

<script lang="ts" setup>
/**
 * A simple responsive footer which can include anything: lists, headings, columns, icons, buttons, etc.
 * 
 * @displayName Footer
 * @link https://bulma.io/documentation/layout/footer/
 */

const props = withDefaults(defineProps<{
        aria_label?:string
    }>(),{
        aria_label:'footer'
    });
</script>