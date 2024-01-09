<template>
    <div class="box" :id="props.name" :name="props.name" v-show="!props.hidden">
        <Row v-for="(row,index) in rows" :inputs="row" :disabled="props.disabled" v-on:value_changed="emit('value_changed',$event)" v-on:button_clicked="emit('button_clicked',$event)" :ref="refs[index]"/>
    </div>
</template>

<script lang="ts">
    import Row from './row.vue';
    import { ref, watch, computed, Ref } from 'vue';
    import { FormInputType } from './types';
    import {buildFieldRows, coreFieldProps, useButtonClickedAndValueChanged} from './common';

    interface fieldProps extends coreFieldProps {
        fields:FormInputType[];
        hidden?:boolean;
    };
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<fieldProps>(),{
        hidden:false,
        disabled:false
    });
    
    const emit = useButtonClickedAndValueChanged();

    let refs:Ref<any|null>[] = [];
    const hidden = ref(false);

    const rows = computed<FormInputType[][]>(() => {
        let result = buildFieldRows(props.fields);
        for (let x = 0; x < result.length; x++) {
            refs[x] = ref(null);
        }
        return result;
    });

    const disableField = (name:string)=> refs.forEach(row=>row.value.disableField(name));
    const enableField = (name:string)=> refs.forEach(row=>row.value.enableField(name));
    const isValid = ():boolean=> !refs.some(row=>!(row.value.isValid===undefined?true:row.value.isValid()));
    const setValues = (values:any):void=>refs.forEach(row => row.value.setValues(values));
    const getValue = ():any=> {
        var ret = {};
        refs.forEach(row => {
            ret = $.extend(ret, row.value.getValue());
        });
        return ret;
    };
    const hideField = (name:string):void=> {
        if (props.name === name) {
            hidden.value = true;
        } else {
            refs.forEach(row => row.value.hideField(name));
        }
    };
    const showField = (name:string):void=> {
        if (props.name === name) {
            hidden.value = false;
        }
        refs.forEach(row => row.value.showField(name));
    };

    defineExpose({ disableField, enableField, isValid, setValues, getValue, hideField, showField });
    
</script>