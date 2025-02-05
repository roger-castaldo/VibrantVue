<template>
    <component :is="props.subtype">{{Translator(props.label??'')}}</component>
</template>

<script lang="ts">
    import { useTranslator,translateFieldProps } from './common';
    import { inject } from 'vue';

    interface fieldProps extends translateFieldProps {
        /**
         * Content of the header
         */
        label?:string,
        /**
         * The subtype to use, ie h1,h2...
         */
        subtype?:string,
    };
</script>

<script lang="ts" setup>
/**
 * A html header
 * 
 * @displayName Header
 */
    const props = withDefaults(defineProps<fieldProps>(),{
        subtype:'h1'
    });

    const Translator = useTranslator(props,inject);
</script>