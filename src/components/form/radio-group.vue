<template>
    <div>
        <Promised v-bind:promise="Values">
            <template v-slot:resolved="values:ListItemValue[]|null">
                <template v-for="val in values" v-if="values!=null">
                    <label class="radio" v-show="!hiddenValues.some(v=>v===val.value)">
                        <input type="radio" :name="props.name" :value="val.value" class="radio" :disabled="props.disabled||disabledValues.some(v=>v===val.value)"/>
                        {{Translator(val.label)}}
                    </label>
                    <br />
                </template>
            </template>
        </Promised>
    </div>
</template>

<script lang="ts">
    import { ref, computed, watch } from 'vue';
    import {Promised} from '../common/Promised';
    import {ListItemValue } from './types';
    import { commonFieldProps,useTranslator,useValueChanged, useValuesList } from './common';

    interface fieldProps extends commonFieldProps {
        values:ListItemValue[]|Promise<ListItemValue[]>|(()=>ListItemValue[])|(()=>Promise<ListItemValue[]>);
    };
</script>

<script lang="ts" setup>
    const props = defineProps<fieldProps>();

    const emit = useValueChanged();

    const Translator = useTranslator(props);

    const val = ref<any|null>(null);

    const getValue = function () { return val.value; }

    watch(val, (val) => {
        emit('value_changed', { name: props.name, value: getValue() });
    });

    const Values = computed<Promise<ListItemValue[]>>(async () => {
        if (props.values == null) {
            return [];
        } else {
            let p : Promise<any>|null = null;
            let tmp:any = props.values;
            if (props.values instanceof Function){
                tmp = (props.values as Function)();
            }
            if (tmp instanceof Promise){
                p=tmp;
            }else{
                p=Promise.resolve(tmp);
            }
            let result:ListItemValue[] = await p as ListItemValue[];
            if (val.value===null && result.some(r=>r.selected)){
                val.value = result.find(r=>r.selected).value;
            }
            return result.map((item:ListItemValue):ListItemValue=>{
                return {
                    label:item.label,
                    value:item.value,
                    selected:val.value===item.value
                };
            });
        }
    });
    const setValue = (value:any):void => {
        val.value = value;
    };
    
    const {hiddenValues,disabledValues,hideValue,showValue,disableValue,enableValue} = useValuesList();

    defineExpose({ getValue, setValue, hideValue, showValue, disableValue, enableValue });
</script>