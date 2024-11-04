<template>
    <Button class="button" :type="props.sstyle" :icon="(props.icon ? props.icon : null)" :title="Translator(props.label)" @click="emit('buttonClicked',props.name)" :disabled="props.disabled"/>
</template>

<script lang="ts">
    import { inject } from 'vue';
import Button from '../common/button.vue';
    import { ColorTypes } from '../../enums';
    import { commonFieldProps,useTranslator } from './common';

    interface fieldProps extends commonFieldProps {
        /**
         * The label for the button
         */
        label:string;
        /**
         * The color style to use
         */
        sstyle:ColorTypes;
        /**
         * An icon if one is desired
         */
        icon?:string;
    };
</script>

<script lang="ts" setup>
/**
 * A generic form button
 * 
 * @displayName Button
 * @link https://bulma.io/documentation/elements/button/
 */
    const props = defineProps<fieldProps>();

    const emit = defineEmits<{
        /**
         * Emitted when the button is clicked
         * 
         * @param name string
         */
         buttonClicked:[name:string]
    }>();

    const Translator = useTranslator(props,inject);
</script>