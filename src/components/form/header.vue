<template>
    <skeleton :tag="props.subtype" :is_loading="props.is_loading" class="title">{{Translator(props.label??'')}}</skeleton>
</template>

<script lang="ts">
    import { skeleton } from '../shared';
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