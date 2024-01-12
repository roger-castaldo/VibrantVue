<template>
    <div class="columns">
        <FormComponent v-for="(input,index) in props.inputs" :ref="(el) => (refs[index] = el)"  :input="input" v-on:value_changed="emit('value_changed',$event)" v-on:button_clicked="emit('button_clicked',$event)" :disabled="props.disabled||disabledFields.some(f=>f===input.name)" :hidden="hiddenInputs.some(f=>f===input.name)"/>
    </div>
</template>

<script lang="ts">
    import { inject, ref ,watch} from 'vue';
    import FormComponent from './form-component.vue';
    import { FormInputType, ValueChangedEvent } from './types';
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
         value_changed:[data:ValueChangedEvent],
         button_clicked:[name:string]
    }>();

    const hiddenInputs = inject<string[]>(HIDDEN_FIELDS_PROPERTY);
    const disabledFields = inject<string[]>(DISABLED_FIELDS_PROPERTY);

    const setValue = (values:any):void=> {
        refs.forEach(input => {
            switch (input.type) {
                case 'subform':
                    input.setValue(values);
                    break;
                default:
                    if (input.setValue !== undefined) {
                        if (values === null) {
                            input.setValue(null);
                        } else if (Object.keys(values).some(k=>k===input.fieldName)) {
                            input.setValue(values[input.fieldName]);
                        } else if (Object.keys(values).some(k=>k===input.altFieldName)) {
                            input.setValue(values[input.altFieldName]);
                        }
                    }
                    break;
            }
        });
    };
    const getValue = ():any=> {
        var result:any = {};
        refs.forEach(input => {
            if (input.getValue != undefined) {
                switch (input.type) {
                    case 'subform':
                        result = $.extend(result,input.getValue());
                        break;
                    default:
                        result[input.fieldName] = input.getValue();
                        break;
                }
            }
        });
        return result;
    };
    const isValid = ():boolean=> {
        return !refs.some(input=>!(input.isValid===undefined?true:input.isValid()));
    };
    
    defineExpose({ setValue, getValue, isValid});

    const refs = props.inputs.map(i=>ref(null));
</script>