<template>
    <div class="columns">
        <Component v-for="(input,index) in props.inputs" :input="input" v-on:value_changed="emit('value_changed',$event)" v-on:button_clicked="emit('button_clicked',$event)" :ref="refs[index]" :disabled="props.disabled||disabledFields.some(f=>f===input.name)" :hidden="hiddenInputs.some(f=>f===input.name)"/>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import Component from './component.vue';
    import { FormInputType, ValueChangedEvent } from './types';
    import { useButtonClickedAndValueChanged } from './common';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        inputs:FormInputType[],
        disabled?:boolean
    }>(),{
        disabled:false
    });
    
    const emit = useButtonClickedAndValueChanged();

    const refs = [];
    const hiddenInputs = ref<string[]>([]);
    const disabledFields = ref<string[]>([]);

    const setValues = (values:any):void=> {
        refs.forEach(input => {
            switch (input.value.type) {
                case 'subform':
                    input.value.setValues(values);
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
    const getValues = ():any=> {
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
    const hideField = (name:string):void=> {
        refs.forEach(input => {
            if (input.value.fieldName === name) {
                if (!hiddenInputs.value.some(h=>h===name))
                    hiddenInputs.value.push(name);
            } else {
                switch (input.value.type) {
                    case 'subform':
                        input.value.hideField(name);
                        break;
                    case 'checkbox-group':
                    case 'radio-group':
                    case 'select':
                        if (name.startsWith(input.value.fieldName + '.')) {
                            input.value.hideValue(name.split('.')[1]);
                        }
                        break;
                }
            }
        });
    };
    const showField = (name:string):void=> {
        refs.forEach(input => {
            if (input.value.fieldName === name) {
                hiddenInputs.value = hiddenInputs.value.filter(h=>h!==name);
            } else {
                switch (input.value.type) {
                    case 'subform':
                        input.value.showField(name);
                        break;
                    case 'checkbox-group':
                    case 'radio-group':
                    case 'select':
                        if (name.startsWith(input.value.fieldName + '.')) {
                            input.value.showValue(name.split('.')[1]);
                        }
                        break;
                }
            }
        });
    };
    const disableField = (name:string):void=> {
        refs.forEach(input => {
            if (input.value.fieldName == name) {
                if (!disabledFields.value.some(h=>h===name))
                    disabledFields.value.push(name);
            } else {
                switch (input.value.type) {
                    case 'subform':
                        input.value.disableField(name);
                        break;
                    case 'checkbox-group':
                    case 'radio-group':
                    case 'select':
                        if (name.startsWith(input.value.fieldName + '.')) {
                            input.value.disableValue(name.split('.')[1]);
                        }
                        break;
                }
            }
        });
    };
    const enableField = (name:string):void=> {
        refs.forEach(input => {
            if (input.value.fieldName === name) {
                disabledFields.value = disabledFields.value.filter(f=>f!==name);
            } else {
                switch (input.type) {
                    case 'subform':
                        input.value.enableField(name);
                        break;
                    case 'checkbox-group':
                    case 'radio-group':
                    case 'select':
                        if (name.startsWith(input.valuefieldName + '.')) {
                            input.value.enableValue(name.split('.')[1]);
                        }
                        break;
                }
            }
        });
    };

    defineExpose({ setValues, getValues, isValid, hideField, showField, disableField, enableField });

    if (props.inputs !== null) {
        for (let x = 0; x < props.inputs.length; x++) {
            refs[x] = ref(null);
        }
    }
</script>