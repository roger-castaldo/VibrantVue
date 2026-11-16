<template>
    <skeleton tag="div" :is_loading="props.is_loading" :class="{'select':true,'is-multiple':props.multiple}">
        <Promised v-if="Values!=null" :promise="Values">
            <template v-slot="{response}">
                <skeleton tag="select" :is_loading="props.is_loading" :id="props.inputId" :name="props.name" :multiple="props.multiple" :class="(props.multiple ? 'is-multiple' : '')" v-model="vals" :disabled="props.disabled">
                    <template  v-if="response!=null" v-for="val in (response as SelectListItemValue[])">
                        <option v-if="val.values===undefined" :value="val.value" :selected="val.selected" v-show="!hiddenValues.some(h=>h===val.value.toString())" :disabled="disabledValues.some(d=>d===val.value.toString())">{{Translator(val.label)}}</option>
                        <optgroup v-if="val.values!==undefined" :label="Translator(val.label)" v-show="!hiddenValues.some(h=>h===val.value.toString())" :disabled="disabledValues.some(d=>d===val.value.toString())">
                            <option v-for="v in val.values" :value="v.value" :selected="v.selected" v-show="!hiddenValues.some(h=>h===v.value.toString())" :disabled="disabledValues.some(d=>d===v.value.toString())">
                                {{Translator(v.label)}}
                            </option>
                        </optgroup>
                    </template>
                </skeleton>
            </template>
            <template #rejected>
                <Notification :type="NoticeTypes.danger" :message="Error"/>
            </template>
        </Promised>
    </skeleton>
</template>

<script lang="ts">
/**
 * A select input
 * 
 * @displayName Select
 * @link https://bulma.io/documentation/form/select/
 */
    import { ref, watch, inject,computed } from 'vue';
    import Promised from '../common/Promised.vue';
    import { SelectListItemValue, ValueChangedEvent} from './typeDefinitions';
    import { internalCommonFieldProps,resolveListItems,useTranslator, useValuesList } from './common';
    import {Notification} from '../common/';
    import {NoticeTypes} from '../../enums';
    import translate from '../../messages/messages.js';
    import { skeleton, useLanguage } from '../shared';

    const mergeValueGroups = (parent:string|null, value:SelectListItemValue, dest:SelectListItemValue[]):SelectListItemValue[]=> {
        let base:any = {
            label: (parent === null ? value.label : `${parent}->${value.label}`),
            values: [],
            value:value.value
        };
        let idx = dest.length;
        dest.push(base);
        value.values!.forEach(val=>{
            if (val.values===undefined){
                base.values.push(val);
            }else{
                dest = mergeValueGroups(base.label,val,dest);
            }
        });
        if (dest[idx].values!.length == 0) {
            dest.splice(idx, 1);
        }
        return dest;
    };

    interface fieldProps extends internalCommonFieldProps{
        /**
         * The values to supply for the select box
         */
        values:SelectListItemValue[]|Promise<SelectListItemValue[]>|(()=>SelectListItemValue[])|(()=>Promise<SelectListItemValue[]>);
        /**
         * Indicates if this is multiple select
         */
        multiple?:boolean;
    };
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<fieldProps>(),
    {
        multiple:false
    });

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

    const vals = ref<any[] | any | null>(
        props.multiple ? [] : null
    );
    const locked = ref<boolean>(false);
    
    const Values = computed<Promise<SelectListItemValue[]>>(async () => {
        if (props.values == null) {
            return [];
        }

        let result = await resolveListItems<SelectListItemValue>(props.values);

        // Extract selected values, including grouped options
        let selectedValues: any[] = result
            .filter(s => s.selected)
            .map(s => s.value);

        result.forEach(s => {
            if (s.values !== undefined) {
                selectedValues = selectedValues.concat(
                    s.values.filter(v => v.selected).map(v => v.value)
                );
            }
        });

        // Initialize the model if it hasn't already been initialized
        if (vals.value === null || vals.value.length === 0) {
            vals.value = props.multiple
                ? selectedValues
                : (selectedValues.length > 0 ? selectedValues[0] : null);
        }

        // Synchronize option selection with the model
        result = result.map(r => {
            if (r.values !== undefined) {
                r.values = r.values.map(sv => ({
                    ...sv,
                    selected: Array.isArray(vals.value)
                        ? vals.value.includes(sv.value)
                        : vals.value === sv.value
                }));
            } else {
                r.selected = Array.isArray(vals.value)
                    ? vals.value.includes(r.value)
                    : vals.value === r.value;
            }

            return r;
        });

        // Existing group flattening
        let dest: SelectListItemValue[] = [];

        result.forEach(r => {
            if (r.values === undefined) {
                dest.push(r);
            } else {
                dest = mergeValueGroups(null, r, dest);
            }
        });

        return dest;
    });

    const getValue = ():any[]|any=> { 
        if(vals.value===null || (Array.isArray(vals.value) && vals.value.length===0))
            return null;
        if (props.multiple){
            if(!Array.isArray(vals.value))
                return [vals.value];
            return vals.value.slice();
        }else if (Array.isArray(vals.value))
            return vals.value[0];
        return vals.value;
    };

    watch(vals, () => {
        if (!locked.value)
            emit('valueChanged', { name: props.name, value: getValue() });
    });
    watch(locked, (val) => {
        if (!val)
            emit('valueChanged', { name: props.name, value: getValue() });
    });

    const setValue = (val:any[]|any|null):void=> {
        locked.value = true;
        if (val !== null && val !== undefined) {
            vals.value = (Array.isArray(val) ? val : [val]);
        } else {
            if (props.multiple){
                vals.value=[];
            }else{
                vals.value=null;
            }
        }
        locked.value = false;
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
         * @param value any|any[]|null
         * @returns void
         */
        setValue 
    });

</script>