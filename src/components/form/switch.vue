<template>
    <div class="field">
        <input type="checkbox" class="switch is-rounded" :id="props.name" :name="props.name" v-model="isChecked" :disabled="props.disabled"/>
        <label :for="name">
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
        /**
         * The label for the switch
         */
        label:string;
        /**
         * Indicates if this is required
         */
        required?:boolean;
    };
</script>

<script lang="ts" setup>
/**
 * A checkbox used in a form but styled as a switch
 * 
 * @displayName Switch
 */
    const props = defineProps<fieldProps>();
    
    const emit = defineEmits<{
        /**
         * Emitted when the switch is either checked or unchecked
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const Translator = useTranslator(props,inject);

    const isChecked = ref(false);

    watch(isChecked, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue =  ():boolean=> { return isChecked.value; };
    const setValue = (val:boolean):void=> { isChecked.value = val; };

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value boolean
         * @returns void
         */
        setValue 
    });
</script>./typeDefinitions