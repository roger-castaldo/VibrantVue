<template>
    <Header v-if="props.input.type===FormInputTypes.header" 
        :subtype="props.input.subtype" 
        :label="props.input.label" 
        ref="inp"/>
    <Paragraph v-else-if="props.input.type===FormInputTypes.paragraph" 
        :name="props.input.name" 
        :label="props.input.label" 
        ref="inp"/>
    <Button v-else-if="props.input.type===FormInputTypes.button"
        v-bind="inputProps" 
        :disabled="Disabled" 
        @buttonClicked="buttonClicked" 
        ref="inp"/>
    <template v-else>
        <label class="label" :for="props.input.name" v-if="hasLabel">
            {{Translator(props.input.label??'')}}
            <span class="help is-danger" v-if="props.input.required">*</span>
        </label>
        <div class="control">
            <component :is="inputType" v-bind="inputProps" @valueChanged="valueChanged" ref="inp"/>
        </div>
    </template>
</template>

<script lang="ts">
    import { onMounted, computed, ref,readonly,inject } from 'vue';
    import Autocomplete from './autocomplete.vue';
    import Button from './button.vue';
    import CheckboxGroup from './checkbox-group.vue';
    import Checkbox from './checkbox.vue';
    import Date from './date.vue';
    import FullEditor from './full-editor.vue';
    import Header from './header.vue';
    import Hidden from './hidden.vue';
    import Number from './number.vue';
    import Paragraph from './paragraph.vue';
    import RadioGroup from './radio-group.vue';
    import Select from './select.vue';
    import Switch from './switch.vue';
    import Text from './text.vue';
    import Textarea from './textarea.vue';
    import Time from './time.vue';
    import Subform from './subform.vue';
    import { FormInputType, ValueChangedEvent } from './typeDefinitions';
    import {FormInputTypes} from './enums';
    import { translateFieldProps, useTranslator } from './common';

    const LABELLED_FIELDS : FormInputTypes[] = [FormInputTypes.autocomplete, FormInputTypes.checkbox_group, FormInputTypes.date, FormInputTypes.number, FormInputTypes.radio_group, FormInputTypes.select, FormInputTypes.text, FormInputTypes.textarea, FormInputTypes.time, FormInputTypes.subform];
    const TRANSLATE_FIELDS : FormInputTypes[] = [FormInputTypes.subform,FormInputTypes.switch,FormInputTypes.select,FormInputTypes.radio_group,FormInputTypes.paragraph,FormInputTypes.header,FormInputTypes.checkbox_group,FormInputTypes.checkbox,FormInputTypes.button,FormInputTypes.autocomplete];

    interface formComponentProps extends translateFieldProps{
        /**
         * The type of input this form component represents
         */
        input:FormInputType,
        /**
         * Indicates if this is disabled
         */
        disabled?:boolean,
    };
</script>

<script lang="ts" setup>
/**
 * A date input used in a form
 * 
 * @displayName FormComponent
 */
    const inp = ref<any>(null);

    const emit = defineEmits<{
        /**
         * Emitted when the value of this form component changes
         * 
         * @param data ValueChangedEvent
         */
        valueChanged:[data:ValueChangedEvent],
        /**
         * Emitted when a button within this form component is clicked
         * 
         * @param name string
         */
        buttonClicked:[name:string]
    }>();

    const props = withDefaults(defineProps<formComponentProps>(),{
        disabled:false,
        hidden:false
    });

    const Translator = useTranslator(props,inject);

    const type = readonly(ref(props.input.type));

    const inputType = computed(() => {
        let result = null;
        switch (props.input.type) {
            case FormInputTypes.autocomplete: result = Autocomplete; break;
            case FormInputTypes.button: result = Button; break;
            case FormInputTypes.checkbox_group: result = CheckboxGroup; break;
            case FormInputTypes.checkbox: result = Checkbox; break;
            case FormInputTypes.date: result = Date; break;
            case FormInputTypes.full_editor: result = FullEditor; break;
            case FormInputTypes.header: result = Header; break;
            case FormInputTypes.hidden: result = Hidden; break;
            case FormInputTypes.number: result = Number; break;
            case FormInputTypes.paragraph: result = Paragraph; break;
            case FormInputTypes.radio_group: result = RadioGroup; break;
            case FormInputTypes.select: result = Select; break;
            case FormInputTypes.switch: result = Switch; break;
            case FormInputTypes.text: result = Text; break;
            case FormInputTypes.textarea: result = Textarea; break;
            case FormInputTypes.time: result = Time; break;
            case FormInputTypes.subform: result = Subform; break;
        }
        return result;
    });

    const setValue = function (value:any) {
        if (inp.value !== null && inp.value.setValue !== undefined) {
            inp.value.setValue(value);
        }
    };

    onMounted(() => {
        if (inp.value !== null && props.input.value !== undefined && props.input.value !== null) {
            setValue(props.input.value);
        }
    });

    const Disabled = computed<boolean>(() => props.input.disabled??props.disabled??false);
    const fieldName = computed(() => props.input.name);
    const altFieldName = computed(() => props.input.name);
    const hasLabel = computed(() =>(LABELLED_FIELDS.some(l=>l===props.input.type) && props.input.label !== undefined && props.input.label !== null));
    const inputProps = computed(() => {
        let result:any = Object.assign({},props.input??{});
        delete result.type;
        if (hasLabel.value){
            delete result.label;
        }
        if (result.className != undefined) {
            delete result.className;
        }
        if (result.form_columns != undefined) {
            delete result.form_columns;
        }
        if (TRANSLATE_FIELDS.some(f=>f===props.input.type)){
            result.translate = props.translate;
        }
        result.disabled = props.disabled;
        if (result.additional!==undefined){
            for(const key in result.additional)
            {
               result[key] = result.additional[key]; 
            }
            delete result.additional;
        }
        return result;
    });

    const valueChanged = (data:ValueChangedEvent) => {
        if (data.value !== undefined && data.value !== null && Array.isArray(data.value)) {
            let tmp = [...data.value];
            data.value = tmp;
        }
        emit('valueChanged', data);
    };
    const buttonClicked = (data:string)=> {
        emit('buttonClicked', data);
    };
    const getValue = ():any|null=> {
        if (inp.value != null) {
            if (inp.value.getValue != undefined) {
                let ret = inp.value.getValue();
                if (ret !== undefined && ret !== null && Array.isArray(ret)) {
                    return [...ret];
                }
                return ret;
            }
        }
        return null;
    };
    const isValid = ():boolean=> {
        if (props.input.type === 'subform' && inp.value !== null)
            return inp.value.isValid();
        if (props.input.required??false) {
            let val = getValue();
            return val!==undefined && val!==null 
                && (Array.isArray(val) ? val.length>0 : true)
                && val.toString()!=='';
        }
        return true;
    };
    const setValues = (values:any|null):void=> {
        if (props.input.type === 'subform' && inp.value !== null)
            inp.value.setValues(values);
        else
            throw 'unable to call set values on any form element except a subform';
    };
    
    defineExpose({ 
        /**
         * Called to set the value for this given form component
         * 
         * @param value any
         */
        setValue, 
        /**
         * Property that returns the name of this given component
         */
        fieldName, 
        /**
         * Property that returns the type of form component this is
         */
        type,
        /**
         * Property that returns the alternative field name for this component
         */
        altFieldName, 
        /**
         * Called to get the value of this component.
         * If this is a basic component, it returns that value.
         * If this is a subform it will return an object where the propertyName are the names of the fields in the subform.
         */
        getValue, 
        /**
         * Called to see if this component is valid.
         * If this is a basic component, it ensures it has a value if required.
         * If this is a subform it returns the result from the subform isValid call.
         */
        isValid, 
        /**
         * Called to set the values of a subform component, this will throw an error if this component is not a subform.
         * 
         * @param values any|null
         */
        setValues
    });
</script>

<style>
    label.label > span.help.is-danger{
        display:inline-block;
    }
</style>./typeDefinitions