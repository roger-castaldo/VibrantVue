<template>
    <div class="field">
        <input type="checkbox" class="switch is-rounded" :id="props.name" :name="props.name" v-model="isChecked" :disabled="props.disabled"/>
        <label v-bind:for="name">
            {{Translator(props.label)}}
            <span class="help is-danger" v-if="props.required">*</span>
        </label>
    </div>
</template>

<script lang="ts">
    import { inject, ref, watch } from 'vue';
    import {commonFieldProps, useTranslator} from './common';
    import { ValueChangedEvent } from './typesDefinitions';

    interface fieldProps extends commonFieldProps{
        label:string;
        required?:boolean;
    };
</script>

<script lang="ts" setup>
    const props = defineProps<fieldProps>();
    
    const emit = defineEmits<{
         valueChanged:[data:ValueChangedEvent]
    }>();

    const Translator = useTranslator(props,inject);

    const isChecked = ref(false);

    watch(isChecked, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue =  ():boolean=> { return isChecked.value; };
    const setValue = (val:boolean):void=> { isChecked.value = val; };

    defineExpose({ getValue, setValue });
</script>