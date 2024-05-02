<template>
    <form onsubmit="return false;" class="container is-fullhd">
        <template v-if="rows!=null">
            <Row v-for="(row,index) in rows" :ref="(el) => (refs[index] = el)" :inputs="row" :key="index" @valueChanged="emit('valueChanged',$event)" @buttonClicked="emit('buttonClicked',$event)" :disabled="disabled"/>
        </template>
    </form>
</template>

<script lang="ts">
    import { computed, ref,provide, inject, readonly } from 'vue';
    import Row from './row.vue';
    import { FormInputType, TranslateMethod, ValueChangedEvent } from './typesDefinitions';
    import { DISABLED_FIELDS_PROPERTY, HIDDEN_FIELDS_PROPERTY, buildFieldRows, translateFieldProps, useTranslator } from './common';

    interface formProps extends translateFieldProps{
        elements:FormInputType[];
        disabled?:boolean;
    };
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<formProps>(),{
        disabled:false
    });

    const emit = defineEmits<{
        valueChanged:[data:ValueChangedEvent],
        buttonClicked:[name:string]
    }>();

    const Translator = useTranslator(props,inject);

    provide<TranslateMethod|null>('Translate',(value:string):string=>{
        return Translator.value(value);
    });

    let refs = [];

    const rows = computed<FormInputType[][]>(()=>{
        if (props.elements != null) {
            let result = buildFieldRows(props.elements);
            refs = result.map(r=>ref(null));
            return result;
        } else {
            return null;
        }
    });
    const getValues=():any=>{
        let ret:any = {};
        refs.forEach(row => { ret = $.extend(ret, row.getValue()); });
        return ret;
    };
    const setValues = (values:any):void=> {
        refs.forEach(row => row.setValue(values));
    };
    const isValid = ():boolean=> {
        return !refs.some(row=>!(row.isValid===undefined?true:row.isValid()));
    };

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

    defineExpose({getValues,setValues,isValid,hideField,showField,disableField,enableField});
</script>