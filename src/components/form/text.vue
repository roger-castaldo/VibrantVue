<template>
    <input :type="subtype" class="input" :name="name" :disabled="disabled" :maxlength="props.maxlength" v-model="value">
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
    import { coreFieldProps } from './common';
    import { ValueChangedEvent } from './typeDefinitions';

    interface fieldProps extends coreFieldProps{
        /**
         * The subtype to use for a text input, such as password, text, etc.
         */
        subtype:string,
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
 */
    const props = defineProps<fieldProps>();
        const emit = defineEmits<{
        /**
         * Emitted when the value of the text box changes
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();
    const value = ref(null);

    watch(value, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue = ():any=> { return value.value; }
    const setValue = (val:any|null):void=> { value.value = val; }

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