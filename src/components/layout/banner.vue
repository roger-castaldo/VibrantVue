<template>
    <section :class="['hero','is-small','has-text-centered',(type==null ? '' : 'is-'+props.type)]">
        <div class="hero-body">
            <p class="title">{{props.title}}</p>
            <p class="subtitle" v-if="props.subtitle">{{props.subtitle}}</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { ColorTypes } from '../enums';

    const props = defineProps<{
        type:ColorTypes,
        title:string,
        subtitle?:string|null
    }>();
</script>