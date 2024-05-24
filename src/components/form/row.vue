<template>
    <div class="columns">
        <FormComponent v-for="(input,index) in props.inputs" :ref="(el) => (refs[index].value = el)"  :input="input" @valueChanged="emit('valueChanged',$event)" @buttonClicked="emit('buttonClicked',$event)" :disabled="props.disabled||disabledFields.some(f=>f===input.name)" :hidden="hiddenInputs.some(f=>f===input.name)"/>
    </div>
</template>

<script lang="ts">
    import { inject, ref ,watch} from 'vue';
    import FormComponent from './form-component.vue';
    import { FormInputType, ValueChangedEvent } from './typesDefinitions';
    import { DISABLED_FIELDS_PROPERTY, HIDDEN_FIELDS_PROPERTY } from './common';
</script>

<script lang="ts" setup>
/**
 * An internal component for defining a row in a form
 * 
 * @displayName Row
 */
    const props = withDefaults(defineProps<{
        /**
         * The inputs contained within the row
         */
        inputs:FormInputType[],
        /**
         * Indicates if the row is disabled
         */
        disabled?:boolean
    }>(),{
        disabled:false
    });

    const emit = defineEmits<{
        /**
         * Emitted when the value of a component in this row changes
         * 
         * @param data ValueChangedEvent
         */
        valueChanged:[data:ValueChangedEvent],
        /**
         * Emitted when a button within this row is clicked
         * 
         * @param name string
         */
        buttonClicked:[name:string]
    }>();

    const refs = props.inputs.map(i=>ref(null));

    const hiddenInputs = inject<string[]>(HIDDEN_FIELDS_PROPERTY);
    const disabledFields = inject<string[]>(DISABLED_FIELDS_PROPERTY);

    const setValue = (values:any|null):void=> {
        refs.forEach((input,index) => {
            switch (props.inputs[index].type) {
                case 'subform':
                    input.value.setValue(values);
                    break;
                default:
                    if (input.value.setValue !== undefined) {
                        if (values === null) {
                            input.value.setValue(null);
                        } else if (Object.keys(values).some(k=>k===input.value.fieldName)) {
                            input.value.setValue(values[input.value.fieldName]);
                        } else if (Object.keys(values).some(k=>k===input.value.altFieldName)) {
                            input.value.setValue(values[input.value.altFieldName]);
                        }
                    }
                    break;
            }
        });
    };
    const getValue = ():any=> {
        var result:any = {};
        refs.forEach(input => {
            if (input.value.getValue != undefined) {
                switch (input.value.type) {
                    case 'subform':
                        result = $.extend(result,input.value.getValue());
                        break;
                    default:
                        result[input.value.fieldName] = input.value.getValue();
                        break;
                }
            }
        });
        return result;
    };
    const isValid = ():boolean=> {
        return !refs.some(input=>!(input.value.isValid===undefined?true:input.value.isValid()));
    };
    
    defineExpose({ 
        /**
         * Called to set the value for a component in the row
         * 
         * @param value any
         */
         setValue,  
        /**
         * Called to get the value of the components in this row.
         * Returns an object where the propertyName are the names of the fields in the subform.
         */
         getValue, 
        /**
         * Called to see if all the copmonents in this row are valid.
         */
        isValid
    });
</script>