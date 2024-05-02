<template>
    <input :type="subtype" class="input" :name="name" :disabled="disabled" :maxlength="props.maxlength" v-model="value">
</template>

<script lang="ts">
    import { ref, watch } from 'vue';
    import { coreFieldProps } from './common';
import { ValueChangedEvent } from './typesDefinitions';

    interface fieldProps extends coreFieldProps{
        subtype:string,
        maxlength?:number
    };
</script>

<script lang="ts" setup>
    const props = defineProps<fieldProps>();
    const emit = defineEmits<{
         valueChanged:[data:ValueChangedEvent]
    }>();
    const value = ref(null);

    watch(value, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue = ():any=> { return value.value; }
    const setValue = (val:any):void=> { value.value = val; }

    defineExpose({ getValue, setValue });
</script>