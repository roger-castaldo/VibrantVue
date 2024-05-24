<template>
    <p :id="props.name">{{Translator(props.label)}}</p>
</template>

<script lang="ts">
    import { TranslateMethod, } from './typesDefinitions';
    import { useTranslator,translateFieldProps } from './common';
    import { inject } from 'vue';

    interface fieldProps extends translateFieldProps {
        /**
         * The content of the paragraph
         */
        label:string,
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
</script>./typeDefinitions