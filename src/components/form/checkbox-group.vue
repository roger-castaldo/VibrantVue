<template>
    <div>
        <Promised :promise="Values">
            <template v-slot="{response}">
                <template v-for="value in (response as ListItemValue[])" v-if="response!==null">
                    <label class="checkbox is-block" v-show="!hiddenValues.some(v=>v===value.value.toString())">
                        <input type="checkbox" class="checkbox" :value="value.value" v-model="checks" :disabled="props.disabled||disabledValues.some(v=>v===value.value.toString())" />
                        {{Translator(value.label)}}
                    </label>
                </template>
            </template>
            <template #pending>
                <Progress/> 
            </template>
            <template #rejected>
                <Notification :type="NoticeTypes.danger" :message="Error"/>
            </template>
        </Promised>
    </div>
</template>

<script lang="ts">
    import { ref, computed, watch, inject } from 'vue';
    import Promised from '../common/Promised.vue';
    import {ListItemValue, ValueChangedEvent } from './typesDefinitions';
    import { commonFieldProps,resolveListItems,useTranslator, useValuesList } from './common';
    import {Progress,Notification} from '../common/';
    import {NoticeTypes} from '../../enums';
    import { useLanguage } from '../shared';
    import translate from '../../messages/messages.js';

    interface fieldProps extends commonFieldProps {
        /**
         * The available values to create the list of checkboxes from
         */
        values:ListItemValue[]|Promise<ListItemValue[]>|(()=>ListItemValue[])|(()=>Promise<ListItemValue[]>);
    };
</script>

<script lang="ts" setup>
/**
 * A list of checkboxes that are related in some way and therefore grouped together
 * 
 * @displayName CheckboxGroup
 */
    const props = defineProps<fieldProps>();

    const Language = useLanguage(inject);
    const Error = computed<string>(()=>translate('Form.Error',Language));

    const emit = defineEmits<{
        /**
         * Emitted when a checkbox is either checked or unchecked
         * 
         * @param data ValueChangedEvent
         */
        valueChanged:[data:ValueChangedEvent]
    }>();

    const Translator = useTranslator(props,inject);

    const checks = ref<any[]>([]);
    const locked = ref<boolean>(false);
    
    const Values = computed<Promise<ListItemValue[]>>(async () => {
        if (props.values == null) {
            return [];
        } else {
            let result:ListItemValue[] = await resolveListItems<ListItemValue>(props.values);
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
        emit('valueChanged', { name: props.name, value: getValue() });
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
        emit('valueChanged', { name: props.name, value: getValue() });
    };
    
    const {hiddenValues,disabledValues} = useValuesList(props.name,inject);

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value any[]|null
         * @returns void
         */
        setValue 
    });
</script>