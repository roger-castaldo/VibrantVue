<template>
    <div class="columns">
        <FormComponent v-for="(input,index) in props.inputs" :ref="(el) => (refs[index] = el)"  :input="input" v-on:valueChanged="emit('valueChanged',$event)" v-on:buttonClicked="emit('buttonClicked',$event)" :disabled="props.disabled||disabledFields.some(f=>f===input.name)" :hidden="hiddenInputs.some(f=>f===input.name)"/>
    </div>
</template>

<script lang="ts">
    import { inject, ref ,watch} from 'vue';
    import FormComponent from './form-component.vue';
    import { FormInputType, ValueChangedEvent } from './typesDefinitions';
    import { DISABLED_FIELDS_PROPERTY, HIDDEN_FIELDS_PROPERTY } from './common';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        inputs:FormInputType[],
        disabled?:boolean
    }>(),{
        disabled:false
    });

    const emit = defineEmits<{
         valueChanged:[data:ValueChangedEvent],
         buttonClicked:[name:string]
    }>();

    const refs = props.inputs.map(i=>ref(null));

    const hiddenInputs = inject<string[]>(HIDDEN_FIELDS_PROPERTY);
    const disabledFields = inject<string[]>(DISABLED_FIELDS_PROPERTY);

    const setValue = (values:any):void=> {
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
    
    defineExpose({ setValue, getValue, isValid});
</script>