<template>
    <skeleton tag="p" :is_loading="props.is_loading" class="is-form-paragraph" :id="props.inputId">{{Translator(props.label??'')}}</skeleton>
</template>

<script lang="ts">
    import { useTranslator,internalTranslateFieldProps } from './common';
    import { inject } from 'vue';
    import { skeleton } from '../shared';

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