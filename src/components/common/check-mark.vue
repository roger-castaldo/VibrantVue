<template>
    <Icon icon="check" size="sm" :IconSet="IconSet"/>
</template>

<script lang="ts">
    import Icon from "./icon.vue";
    import {inject} from 'vue';
</script>

<script lang="ts" setup>
    const IconSet = inject<string>('IconSet');
</script>