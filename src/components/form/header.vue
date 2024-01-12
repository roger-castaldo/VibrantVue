<template>
    <component :is="props.subtype">{{Translator(props.label)}}</component>
</template>

<script lang="ts" setup>
    import { TranslateMethod } from './types';
    import { useTranslator } from './common';
    import { inject } from 'vue';

    const props = withDefaults(defineProps<{
        label:string,
        subtype?:string,
        Translate?:TranslateMethod
    }>(),{
        subtype:'h1'
    });

    const Translator = useTranslator(props,inject);
</script>