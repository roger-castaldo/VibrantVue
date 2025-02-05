<template>
    <section :class="['hero','is-small','has-text-centered',(type==null ? '' : 'is-'+props.type)]">
        <div class="hero-body">
            <p class="title">{{props.title}}</p>
            <p class="subtitle" v-if="props.subtitle">{{props.subtitle}}</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
/**
 * A banner component to use
 * 
 * @displayName Banner
 * @link https://bulma.io/documentation/layout/hero/
 */
    import { ColorTypes } from '../../enums';

    const props = defineProps<{
        /**
         * The color of the banner
         */
        type:ColorTypes,
        /**
         * The title of the banner
         */
        title:string,
        /**
         * The sub title of the banner
         */
        subtitle?:string|null
    }>();
</script>