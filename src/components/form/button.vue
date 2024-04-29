<template>
    <Button :type="sstyle" :icon="(props.icon ? props.icon : null)" :title="Translator(props.label)" v-on:click="emit('buttonClicked',props.name)" :disabled="props.disabled"/>
</template>

<script lang="ts">
    import { inject } from 'vue';
import Button from '../common/button.vue';
    import { ColorTypes } from '../enums';
    import { commonFieldProps,useTranslator } from './common';

    interface fieldProps extends commonFieldProps {
        label:string;
        sstyle:ColorTypes;
        icon?:string;
    };
</script>

<script lang="ts" setup>
    const props = defineProps<fieldProps>();

    const emit = defineEmits<{
         buttonClicked:[name:string]
    }>();

    const Translator = useTranslator(props,inject);
</script>