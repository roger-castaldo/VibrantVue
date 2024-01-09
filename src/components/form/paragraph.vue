<template>
    <p v-bind:id="props.name">{{Translator(props.label)}}</p>
</template>

<script lang="ts">
    import { TranslateMethod } from './types';
    import { useTranslator } from './common';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        label:string,
        name?:string,
        Translate?:TranslateMethod
    }>();

    const Translator = useTranslator(props);
</script>