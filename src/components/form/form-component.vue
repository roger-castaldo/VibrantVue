<template>
    <div class="field column" :class="[columns]" v-show="!props.hidden">
        <template v-if="props.input.type=='header'">
            <Header :subtype="props.input.subtype" :label="props.input.label" ref="inp"/>
        </template>
        <template v-else-if="props.input.type=='paragraph'">
            <Paragraph :name="props.input.name" :label="props.input.label" ref="inp"/>
        </template>
        <template v-else-if="props.input.type=='button'">
            <Button :name="props.input.name" :sstyle="props.input.style" :className="props.input.className" :icon="props.input.icon" :label="props.input.label" :disabled="Disabled" @buttonClicked="buttonClicked" ref="inp"/>
        </template>
        <template v-else>
            <label class="label" :for="props.input.name" v-if="hasLabel">
                {{Translator(props.input.label)}}
                <span class="help is-danger" v-if="props.input.required">*</span>
            </label>
            <div class="control">
                <component :is="inputType" v-bind="inputProps" @valueChanged="valueChanged" ref="inp"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import 'jquery';
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
    import { FormInputType, ValueChangedEvent } from './typesDefinitions';
    import { translateFieldProps, useTranslator } from './common';

    const LABELLED_FIELDS = ['autocomplete', 'checkbox-group', 'date', 'number', 'radio-group', 'select', 'text', 'textarea', 'time', 'file_download', 'subform', 'textarea-code'];
    const TRANSLATE_FIELDS = ['subform','switch','select','radio-group','paragraph','header','checkbox-group','checkbox','button','autocomplete'];

    interface formComponentProps extends translateFieldProps{
        /**
         * The type of input this form component represents
         */
        input:FormInputType,
        /**
         * Indicates if this is disabled
         */
        disabled?:boolean,
        /**
         * Indicates if this is hidden
         */
        hidden?:boolean
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
            case 'autocomplete': result = Autocomplete; break;
            case 'button': result = Button; break;
            case 'checkbox-group': result = CheckboxGroup; break;
            case 'checkbox': result = Checkbox; break;
            case 'date': result = Date; break;
            case 'full-editor': result = FullEditor; break;
            case 'header': result = Header; break;
            case 'hidden': result = Hidden; break;
            case 'number': result = Number; break;
            case 'paragraph': result = Paragraph; break;
            case 'radio-group': result = RadioGroup; break;
            case 'select': result = Select; break;
            case 'switch': result = Switch; break;
            case 'text': result = Text; break;
            case 'textarea': result = Textarea; break;
            case 'time': result = Time; break;
            case 'subform': result = Subform; break;
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
    const columns = computed<string>(() => `is-${props.input.form_columns??12}`);
    const fieldName = computed(() => props.input.name);
    const altFieldName = computed(() => props.input.processVariable??props.input.name);
    const hasLabel = computed(() =>(LABELLED_FIELDS.some(l=>l===props.input.type) && props.input.label !== undefined && props.input.label !== null));
    const inputProps = computed(() => {
        let result:any = $.extend({}, props.input);
        delete result.type;
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