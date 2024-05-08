<template>
    <div :class="['buttons',(props.size?`are-${props.size}`:''),(props.alignment?`is-${props.alignment}`:'')]">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    import {Sizes,ButtonAlignments} from '../enums';

    const props = defineProps<{
        size?:Sizes,
        alignment?:ButtonAlignments
    }>();
</script>