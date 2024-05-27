<template>
    <form onsubmit="return false;" class="container is-fullhd">
        <InputsCollection :fields="props.elements" 
            ref="inputs" 
            :disabled="props.disabled"
            @valueChanged="emit('valueChanged',$event)" 
            @buttonClicked="emit('buttonClicked',$event)"
            />
    </form>
</template>

<script lang="ts">
    import { ref,provide, inject, readonly } from 'vue';
    import { FormInputType, TranslateMethod, ValueChangedEvent } from './typeDefinitions';
    import { DISABLED_FIELDS_PROPERTY, HIDDEN_FIELDS_PROPERTY, translateFieldProps, useTranslator } from './common';
    import InputsCollection from './inputs-collection.vue';

    interface formProps extends translateFieldProps{
        /**
         * The elements of the form
         */
        elements:FormInputType[];
        /**
         * Indicates if the form is disabled
         */
        disabled?:boolean;
    };
</script>

<script lang="ts" setup>
/**
 * Used to create a form with a given set of elements 
 * 
 * @displayName ComponentForm
 */
    const props = withDefaults(defineProps<formProps>(),{
        disabled:false
    });

    const emit = defineEmits<{
        /**
         * Emitted when the value of a form element changes
         * 
         * @param data ValueChangedEvent
         */
        valueChanged:[data:ValueChangedEvent],
        /**
         * Emitted when a button within the form is clicked
         * 
         * @param name string
         */
        buttonClicked:[name:string]
    }>();

    const Translator = useTranslator(props,inject);

    provide<TranslateMethod|null>('Translate',(value:string):string=>{
        return Translator.value(value);
    });

    const inputs = ref(null);

    const getValues=():any|null=>(inputs.value!==null ? inputs.value.getValue() : null);
    const setValues = (values:any):void=> {
        if (inputs.value!==null){
            inputs.value.setValue(values);
        }
    };
    const isValid = ():boolean=> (inputs.value!==null ? inputs.value.isValid() : false);

    const hiddenFields = ref<string[]>([]);
    provide(HIDDEN_FIELDS_PROPERTY,readonly(hiddenFields));
    const hideField = (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            hiddenFields.value = [...hiddenFields.value,...name];
        } else {
            hiddenFields.value.push(name);
        }
    };
    const showField = (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            hiddenFields.value = hiddenFields.value.filter(f=>name.indexOf(f)>=0);
        } else {
            hiddenFields.value = hiddenFields.value.filter(f=>f!==name);
        }
    };

    const disabledFields = ref<string[]>([]);
    provide(DISABLED_FIELDS_PROPERTY,readonly(disabledFields));
    const disableField = (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            disabledFields.value = [...disabledFields.value,...name];
        } else {
            disabledFields.value.push(name);
        }
    };
    const enableField= (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            disabledFields.value = disabledFields.value.filter(f=>name.indexOf(f)>=0);
        } else {
            disabledFields.value = disabledFields.value.filter(f=>f!==name);
        }
    };

    defineExpose({
        /**
         * Returns the values of the given form elements as an object where the property name is the name of the form element and the property value is 
         * that elements value
         */
        getValues,
        /**
         * Called to set the values on the form elements using an object where the property name is the name of the form element
         * 
         * @param values any
         */
        setValues,
        /**
         * Called to see if the form is valid.  Returns a boolean value that is true if all required fields have a value.
         */
        isValid,
        /**
         * Called to hide 1 or more fields in the form
         * 
         * @param name string|string[]
         */
        hideField,
        /**
         * Called to show 1 or more hidden fields in the form
         * 
         * @param name string|string[]
         */
        showField,
        /**
         * Called to disable 1 or more fields in the form
         * 
         * @param name string|string[]
         */
        disableField,
        /**
         * Called to enable 1 or more disabled fields in the form
         * 
         * @param name string|string[]
         */
        enableField
    });
</script>