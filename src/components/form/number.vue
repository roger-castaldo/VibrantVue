<template>
    <input type="number" class="input" :id="props.inputId" :name="props.name" v-model="value" :disabled="props.disabled" :min="props.min" :max="props.max" :step="props.step"/>
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
    import { internalCoreFieldProps } from './common';
    import { ValueChangedEvent } from './typeDefinitions';

    interface fieldProps extends internalCoreFieldProps {
        /**
         * The minimum value
         */
        min?:number;
        /**
         * The maximum value
         */
        max?:number;
        /**
         * The step value
         */
        step?:number;
    };
</script>

<script lang="ts" setup>
/**
 * A number input
 * 
 * @displayName Number
 * @link https://bulma.io/documentation/form/input/
 */
    const props = withDefaults(defineProps<fieldProps>(),{
        disabled:false
    });
    
    const emit = defineEmits<{
        /**
         * Emitted when the value has changed
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const value = ref<string|null>(null);

    const getValue = ():number|null => {
        if (value.value === '' ||  value.value === null)
            return null;
        let result:number = parseInt(value.value);
        if (props.min !== undefined) {
            if (result < props.min * 1)
                return null;
        }
        if (props.max !== undefined) {
            if (result > props.max * 1)
                return null;
        }
        return result;
    };
    const setValue = (val:number|string|null) => { value.value = (val===null?'':val.toString()); }

    watch([value], (val) => emit('valueChanged', { name: props.name, value: getValue() }));

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value number|string|null
         * @returns void
         */
        setValue 
    });
</script>