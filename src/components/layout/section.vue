<template>
    <section :class="['section',(props.size ? `is-${props.size}` : '')]">

    </section>
</template>

<script lang="ts" setup>
/**
 * A generic section container used in laying out 
 * 
 * @displayName Section
 * @link https://bulma.io/documentation/layout/section/
 */
    import {SectionSizes} from '../../enums';

    const props = defineProps<{
        size?:SectionSizes
    }>();
 </script>