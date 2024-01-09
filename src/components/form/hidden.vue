<template>
    <input type="hidden" class="input" :name="props.name" v-model="value">
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
import { ValueChangedEvent } from './types';
import { useValueChanged } from './common';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        name:string
    }>();
    const emit = useValueChanged();

    const value = ref<string|null>(null);

    watch(value, (val) => emit('value_changed', { name: props.name, value: val }));

    const getValue = ():string => { return value.value; };
    const setValue = (val:string):void=> { value.value = val; };

    defineExpose({ getValue, setValue });
</script>