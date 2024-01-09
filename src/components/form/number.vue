<template>
    <input type="number" class="input" :name="name" v-model="value" :disabled="disabled" :min="props.min" :max="props.max" :step="props.step"/>
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
    import { coreFieldProps, useValueChanged } from './common';

    interface fieldProps extends coreFieldProps {
        min?:number;
        max?:number;
        step?:number;
    };
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<fieldProps>(),{
        disabled:false
    });
    const emit = useValueChanged();

    const value = ref<string|null>(null);

    const getValue = ():number|null => {
        if (value.value === '')
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

    watch([value], (val) => emit('value_changed', { name: props.name, value: getValue() }));

    defineExpose({ getValue, setValue });
</script>