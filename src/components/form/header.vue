<template>
    <component :is="props.subtype">{{Translator(props.label)}}</component>
</template>

<script lang="ts">
    import { TranslateMethod, } from './typesDefinitions';
    import { useTranslator,translateFieldProps } from './common';
    import { inject } from 'vue';

    interface fieldProps extends translateFieldProps {
        label:string,
        subtype?:string,
    };
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<fieldProps>(),{
        subtype:'h1'
    });

    const Translator = useTranslator(props,inject);
</script>