<template>
    <label class="checkbox">
        <input type="checkbox" class="checkbox" :name="props.name" :disabled="props.disabled" v-model="value"/>
        {{Label}}
        <span class="help is-danger" v-if="props.required">*</span>
    </label>
</template>

<script lang="ts">
    import { ref, watch,computed, inject} from 'vue';
    import { commonFieldProps,useTranslator} from './common';
    import { ValueChangedEvent } from './types';

    interface fieldProps extends commonFieldProps {
        label:string;
        required?:boolean;
    };
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<fieldProps>(),{
        required:false,
        disabled:false
    });

    const emit = defineEmits<{
         value_changed:[data:ValueChangedEvent]
    }>();

    const Translator = useTranslator(props,inject);

    const Label = computed<string>(() => Translator.value(props.label));

    const value = ref<boolean>(false);

    watch(value, (val) => emit('value_changed', { name: props.name, value: val }));

    const getValue = () => { return value.value; };
    const setValue = (val:boolean)=> { value.value = val; };

    defineExpose({ getValue, setValue });
</script>