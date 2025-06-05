<template>
    <input :id="props.inputId" :type="subtype" class="input" :name="name" :disabled="disabled" :maxlength="props.maxlength" v-model="value">
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
    import { internalCoreFieldProps } from './common';
    import { ValueChangedEvent } from './typeDefinitions';

    interface fieldProps extends internalCoreFieldProps{
        /**
         * The subtype to use for a text input, such as password, text, etc.
         */
        subtype?:string,
        /**
         * The maxLength to apply to the text box
         */
        maxlength?:number
    };
</script>

<script lang="ts" setup>
/**
 * A text input for the form
 * 
 * @displayName Text
 * @link https://bulma.io/documentation/form/input/
 */
    const props = withDefaults(defineProps<fieldProps>(),
    {
        subtype:'text'
    });
    const emit = defineEmits<{
        /**
         * Emitted when the value of the text box changes
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();
    const value = ref<string|null>(null);

    watch(value, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue = ():string|null=> { return value.value; }
    const setValue = (val:string|null):void=> { value.value = val; }

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value any|null
         * @returns void
         */
        setValue 
    });
</script>