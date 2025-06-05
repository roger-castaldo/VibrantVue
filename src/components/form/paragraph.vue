<template>
    <p :id="props.inputId">{{Translator(props.label??'')}}</p>
</template>

<script lang="ts">
    import { useTranslator,internalTranslateFieldProps } from './common';
    import { inject } from 'vue';

    interface fieldProps extends internalTranslateFieldProps {
        /**
         * The content of the paragraph
         */
        label?:string,
        /**
         * The name of the field
         */
        name?:string
    };
</script>

<script lang="ts" setup>
/**
 * A paragraph
 * 
 * @displayName Paragraph
 */
    const props = defineProps<fieldProps>();

    const Translator = useTranslator(props,inject);
</script>