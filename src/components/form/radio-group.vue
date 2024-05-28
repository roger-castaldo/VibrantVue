<template>
    <div>
        <Promised :promise="Values">
            <template v-slot="{response}">
                <template v-for="val in (response as ListItemValue[])" v-if="values!=null">
                    <label class="radio" v-show="!hiddenValues.some(v=>v===val.value.toString())">
                        <input type="radio" :name="props.name" :value="val.value" class="radio" :disabled="props.disabled||disabledValues.some(v=>v===val.value.toString())"/>
                        {{Translator(val.label)}}
                    </label>
                    <br />
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
    import {ListItemValue, ValueChangedEvent } from './typeDefinitions';
    import { commonFieldProps,resolveListItems,useTranslator, useValuesList } from './common';
    import {Progress,Notification} from '../common/';
    import {NoticeTypes} from '../../enums';
    import { useLanguage } from '../shared';
    import translate from '../../messages/messages.js';

    interface fieldProps extends commonFieldProps {
        /**
         * The values to build the radio group from
         */
        values:ListItemValue[]|Promise<ListItemValue[]>|(()=>ListItemValue[])|(()=>Promise<ListItemValue[]>);
    };
</script>

<script lang="ts" setup>
/**
 * A radio group
 * 
 * @displayName RadioGroup
 * #link https://bulma.io/documentation/form/radio/
 */
    const props = defineProps<fieldProps>();

    const Language = useLanguage(inject);
    const Error = computed<string>(()=>translate('Form.Error',Language));

    const emit = defineEmits<{
        /**
         * Emitted when the value has changed
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const Translator = useTranslator(props,inject);

    const val = ref<any|null>(null);

    const getValue = function () { return val.value; }

    watch(val, (val) => {
        emit('valueChanged', { name: props.name, value: getValue() });
    });

    const Values = computed<Promise<ListItemValue[]>>(async () => {
        if (props.values == null) {
            return [];
        } else {
            let result:ListItemValue[] = await resolveListItems<ListItemValue>(props.values);
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
    const setValue = (value:any|null):void => {
        val.value = value;
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
         * @param value any|null
         * @returns void
         */
        setValue 
    });
</script>