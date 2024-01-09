<template>
    <div>
        <Promised v-bind:promise="Values">
            <template v-slot="values:ListItemValue[]">
                <template v-for="value in values">
                    <label class="checkbox is-block" v-show="!hiddenValues.some(v=>v===value.value)">
                        <input type="checkbox" class="checkbox" v-bind:value="value.value" v-model="checks" v-bind:disabled="props.disabled||disabledValues.some(v=>v===value.value)" />
                        {{Translator(value.label)}}
                    </label>
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

    const checks = ref<any[]>([]);
    const locked = ref<boolean>(false);
    
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
            let tchecks:any[] = result.filter((item)=>item.selected).map((item):any=>item.value);
            if (checks.value === null || checks.value.length == 0) {
                checks.value = (tchecks.length>0 ? [...tchecks] : []);
            } else {
                tchecks = checks.value;
                result = result.map((item:ListItemValue):ListItemValue=>{
                    return {
                        label:item.label,
                        value:item.value,
                        selected:tchecks.some((check)=>check===item.value)
                    };
                });
            }
            return result;
        }
    });

    watch(checks, (val) => {
        emit('value_changed', { name: props.name, value: getValue() });
    });

    const getValue = ():any[]|null => {
        return (checks.value.length == 0 ? null : checks.value);
    };
    const setValue = (value:any[]|null):void => {
        locked.value = true;
        checks.value.splice(0);
        if (value !== null) {
            checks.value = [...value];
        }
        locked.value = false;
        emit('value_changed', { name: props.name, value: getValue() });
    };
    
    const {hiddenValues,disabledValues,hideValue,showValue,disableValue,enableValue} = useValuesList();

    defineExpose({ getValue, setValue, hideValue, showValue, disableValue, enableValue });
</script>