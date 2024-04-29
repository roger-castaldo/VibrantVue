<template>
    <p v-bind:id="props.name">{{Translator(props.label)}}</p>
</template>

<script lang="ts">
    import { TranslateMethod, } from './typesDefinitions';
    import { useTranslator,translateFieldProps } from './common';
    import { inject } from 'vue';

    interface fieldProps extends translateFieldProps {
        label:string,
        name?:string
    };
</script>

<script lang="ts" setup>
    const props = defineProps<fieldProps>();

    const Translator = useTranslator(props,inject);
</script>