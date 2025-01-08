<template>
    <input type="hidden" :name="props.name" v-model="value">
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
    import { ValueChangedEvent } from './typeDefinitions';
</script>

<script lang="ts" setup>
/**
 * A hidden input
 * 
 * @displayName Hidden
 */
    const props = defineProps<{
        /**
         * The name of the input
         */
        name:string
    }>();
    const emit = defineEmits<{
        /**
         * Emitted when the value has changed
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const value = ref<string|null>(null);

    watch(value, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue = ():string => { return value.value; };
    const setValue = (val:string|null):void=> { value.value = val; };

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value string|null
         * @returns void
         */
        setValue 
    });
</script>