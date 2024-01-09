<template>
    <span v-bind:class="['tags',(props.size===null?'':'are-'+props.size),(props.addons?'has-addons':'')]">
        <slot />
    </span>
</template>

<script lang="ts" setup>
    import { Sizes } from '../enums';

    const props = defineProps<{
        size?:Sizes,
        addons?:boolean
    }>();
</script>