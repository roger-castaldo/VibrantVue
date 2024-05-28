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
    import { ValueChangedEvent } from './typeDefinitions';

    interface fieldProps extends commonFieldProps {
        /**
         * The label for the checkbox
         */
        label:string;
        /**
         * Indicates if the checkbox is required
         */
        required?:boolean;
    };
</script>

<script lang="ts" setup>
/**
 * A checkbox used in a form
 * 
 * @displayName Checkbox
 * @link https://bulma.io/documentation/form/checkbox/
 */
    const props = withDefaults(defineProps<fieldProps>(),{
        required:false,
        disabled:false
    });

    const emit = defineEmits<{
        /**
         * Emitted when the checkbox is either checked or unchecked
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const Translator = useTranslator(props,inject);

    const Label = computed<string>(() => Translator.value(props.label));

    const value = ref<boolean>(false);

    watch(value, (val) => emit('valueChanged', { name: props.name, value: val }));

    const getValue = () => { return value.value; };
    const setValue = (val:boolean)=> { value.value = val; };

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
</script>.ts