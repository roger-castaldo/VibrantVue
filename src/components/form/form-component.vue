<template>
    <div class="field column" v-bind:class="[columns]" v-show="!props.hidden">
        <template v-if="props.input.type=='header'">
            <Header v-bind:subtype="props.input.subtype" v-bind:label="props.input.label" ref="inp"/>
        </template>
        <template v-else-if="props.input.type=='paragraph'">
            <Paragraph v-bind:name="props.input.name" v-bind:label="props.input.label" ref="inp"/>
        </template>
        <template v-else-if="props.input.type=='button'">
            <Button v-bind:name="props.input.name" v-bind:sstyle="props.input.style" v-bind:className="props.input.className" v-bind:icon="props.input.icon" v-bind:label="props.input.label" v-bind:disabled="Disabled" v-on:button_clicked="button_clicked" ref="inp"/>
        </template>
        <template v-else>
            <label class="label" v-bind:for="props.input.name" v-if="hasLabel">
                {{Translator(props.input.label)}}
                <span class="help is-danger" v-if="props.input.required">*</span>
            </label>
            <div class="control">
                <component :is="inputType" v-bind="inputProps" v-on:value_changed="value_changed" ref="inp"/>
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
        input:FormInputType,
        disabled?:boolean,
        hidden?:boolean
    };
</script>

<script lang="ts" setup>
    const inp = ref<any>(null);

    const emit = defineEmits<{
         value_changed:[data:ValueChangedEvent],
         button_clicked:[name:string]
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

    const setValue = function (value) {
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

    const value_changed = (data:ValueChangedEvent) => {
        if (data.value !== undefined && data.value !== null && Array.isArray(data.value)) {
            let tmp = [...data.value];
            data.value = tmp;
        }
        emit('value_changed', data);
    };
    const button_clicked = (data:string)=> {
        emit('button_clicked', data);
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
    
    defineExpose({ setValue, fieldName, type,altFieldName, getValue, isValid, setValues});
</script>

<style>
    label.label > span.help.is-danger{
        display:inline-block;
    }
</style>