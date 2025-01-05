<template>
    <Box :id="props.name" :name="props.name" v-show="!isHidden">
        <InputsCollection :fields="props.fields" 
            ref="inputs" 
            :disabled="props.disabled"
            @valueChanged="emit('valueChanged',$event)" 
            @buttonClicked="emit('buttonClicked',$event)"
            />
    </Box>
</template>

<script lang="ts">
    import { ref, computed,inject } from 'vue';
    import { FormInputType, ValueChangedEvent } from './typeDefinitions';
    import { HIDDEN_FIELDS_PROPERTY, coreFieldProps} from './common';
    import InputsCollection from './inputs-collection.vue';
    import Box from '../layout/box.vue';

    interface fieldProps extends coreFieldProps {
        /**
         * The form components for this subform
         */
        fields:FormInputType[];
    };
</script>

<script lang="ts" setup>
/**
 * Used to create form within a form (a way of collecting child inputs that maybe have a specific use)
 * 
 * @displayName Subform
 */
    const props = withDefaults(defineProps<fieldProps>(),{
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
         * Emitted when a button within the sub form is clicked
         * 
         * @param name string
         */
        buttonClicked:[name:string]
    }>();

    const inputs = ref(null);
    
    const hiddenInputs = inject<string[]>(HIDDEN_FIELDS_PROPERTY);

    const isHidden = computed<boolean>(()=>{
        return (hiddenInputs ? hiddenInputs.some(h=>h===props.name) : false);
    });

    const isValid = ():boolean=> (inputs.value===null ? false : inputs.value.isValid());
    const setValue = (values:any):void=>{
        if (inputs.value!==null){
            inputs.value.setValue(values);
        }
    }
    const getValue = ():any|null=> (inputs.value===null ? null : inputs.value.getValue());
    
    defineExpose({ 
        /**
         * Called to set the value of 1 or more copmonents inside this sub form
         * 
         * @param value any
         */
        setValue, 
        /**
         * Called to get the value of this of all the components inside this subform.  
         * Returns an object where each propertyName is the name of the field and it's value is the value.
         */
        getValue, 
        /**
         * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
         */
        isValid
    });
    
</script>