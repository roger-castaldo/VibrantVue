<template>
    <form onsubmit="return false;" class="container is-fullhd">
        <template v-if="rows!=null">
            <Row v-for="(row,index) in rows" v-bind:inputs="row" v-bind:key="index" v-on:value_changed="emit('value_changed',$event)" v-on:button_clicked="emit('button_clicked',$event)" :ref="refs[index]"  :disabled="disabled"/>
        </template>
    </form>
</template>

<script lang="ts">
    import { computed, ref,provide } from 'vue';
    import Row from './row.vue';
import { FormInputType, TranslateMethod, ValueChangedEvent } from './types';
import { useButtonClickedAndValueChanged } from './common';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        elements:FormInputType[],
        disabled?:boolean,
        Translate?:TranslateMethod
    }>(),{
        disabled:false
    });

    const emit = useButtonClickedAndValueChanged();

    provide<TranslateMethod|null>('Translate',props.Translate===undefined?null:props.Translate);

    let refs = [];

    const rows = computed<FormInputType[][]>(()=>{
        if (props.elements != null) {
            let ret:FormInputType[][] = [];
            let row:FormInputType[] = [];
            let curLen = 0;
            props.elements.forEach(elem=>{
                let len = elem.form_columns??12;
                if (curLen+len>12 && row.length>0){
                    ret.push(row);
                    row=[];
                    curLen=0;
                }
                row.push(elem);
                curLen+=len;
                if (curLen===12){
                    ret.push(row);
                    row=[];
                    curLen=0;
                }
            });
            if (row.length>0){
                ret.push(row);
            }
            refs = row.map(r=>ref(null));
            return ret;
        } else {
            return null;
        }
    });
    const getValues=():any=>{
        let ret:any = {};
        refs.forEach(row => { ret = $.extend(ret, row.value.getValues()); });
        return ret;
    };
    const setValues = (values:any):void=> {
        refs.forEach(row => row.value.setValues(values));
    };
    const isValid = ():boolean=> {
        return !refs.some(row=>!(row.value.isValid===undefined?true:row.value.isValid()));
    };
    const hideField = (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            name.forEach(n=>hideField(n));
        } else {
            refs.forEach(row => row.value.hideField(name));
        }
    };
    const showField = (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            name.forEach(n=>showField(n));
        } else {
            refs.forEach(row => row.value.showField(name));
        }
    };
    const disableField = (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            name.forEach(n=>disableField(n));
        } else {
            refs.forEach(row => row.value.disableField(name));
        }
    };
    const enableField= (name:string|string[]):void=> {
        if (Array.isArray(name)) {
            name.forEach(n=>enableField(n));
        } else {
            refs.forEach(row => row.value.enableField(name));
        }
    };

    defineExpose({getValues,setValues,isValid,hideField,showField,disableField,enableField});
</script>