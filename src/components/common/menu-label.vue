<template>
    <p class="menu-label">
        {{ props.message }}
        <slot/>
    </p>
</template>
<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        message?:string
    }>(),{
        message:''
    });
</script>