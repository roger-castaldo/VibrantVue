<template>
    <div class="select">
        <Promised v-if="Values!=null" :promise="Values">
            <template v-slot="{response}">
                <select :id="props.name" :name="props.name" :multiple="props.multiple" :class="[props.multiple ? 'is-multiple' : '']" v-model="vals" :disabled="props.disabled">
                    <template  v-if="response!=null" v-for="val in (response as SelectListItemValue[])">
                        <option v-if="val.values==undefined" :value="val.value" :selected="val.selected" v-show="!hiddenValues.some(h=>h===val.value.toString())" :disabled="disabledValues.some(d=>d===val.value.toString())">{{Translator(val.label)}}</option>
                        <optgroup v-if="val.values!=undefined" :label="Translator(val.label)">
                            <option v-for="v in val.values" :value="v.value" :selected="v.selected" v-show="!hiddenValues.some(h=>h===v.value.toString())" :disabled="disabledValues.some(d=>d===v.value.toString())">
                                {{Translator(v.label)}}
                            </option>
                        </optgroup>
                    </template>
                </select>
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
/**
 * A select input
 * 
 * @displayName Select
 */
    import { ref, watch, inject,computed, toRaw } from 'vue';
    import Promised from '../common/Promised.vue';
    import { SelectListItemValue, ValueChangedEvent} from './typesDefinitions';
    import { commonFieldProps,resolveListItems,useTranslator, useValuesList } from './common';
    import {Progress,Notification} from '../common/';
    import {NoticeTypes} from '../../enums';
    import translate from '../../messages/messages.js';
    import { useLanguage } from '../shared';

    const mergeValueGroups = (parent:string|null, value:SelectListItemValue, dest:SelectListItemValue[]):SelectListItemValue[]=> {
        let base:any = {
            label: (parent === null ? value.label : `${parent}->${value.label}`),
            values: []
        };
        let idx = dest.length;
        dest.push(base);
        value.values.forEach(val=>{
            if (val.values===undefined){
                base.values.push(val);
            }else{
                dest = mergeValueGroups(base.label,val,dest);
            }
        });
        if (dest[idx].values.length == 0) {
            dest.splice(idx, 1);
        }
        return dest;
    };

    interface fieldProps extends commonFieldProps{
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

    const vals = ref<any[]|null>(null);
    const locked = ref<boolean>(false);
    
    const Values = computed<Promise<SelectListItemValue[]>>(async () => {
        if (props.values == null) {
            return [];
        } else {
            let result:SelectListItemValue[] = await resolveListItems<SelectListItemValue>(props.values);
            let tvalues:any[] = result.filter(s=>s.selected).map(s=>s.value);
            if (result.some(s=>s.values!==undefined)){
                result.filter(s=>s.values!==undefined)
                .forEach(s=>{
                    tvalues = tvalues.concat(
                        s.values.filter(v=>v.selected).map(v=>v.value)
                    );
                });
            }
            if (vals.value === null || vals.value.length === 0) {
                vals.value = null;
            } else {
                result = result.map(r=>{
                    let t = r;
                    if (t.values!==undefined){
                        t.values = t.values.map(sv=>{
                            sv.selected=vals.value.some(v=>v===sv.value);
                            return sv;
                        });
                    }
                    return t;
                });
                vals.value.forEach(v=>{
                    if (!result.some(r=>(r.value!==undefined && r.value===v)
                    || (r.values!==undefined && r.values.some(sr=>sr.value===v)))){
                        result.push({
                            label:v,
                            value:v
                        });
                    }
                });
            }
            let dest:SelectListItemValue[] = [];
            result.forEach(r=>{
                if (r.values===undefined){
                    dest.push(r);
                }else{
                    dest=mergeValueGroups(r.label,r,dest);
                }
            });
            return dest;
        }
    });

    const getValue = ():any[]|any=> { 
        return (vals.value == null ? null : (vals.value.length == 0 ? null : (props.multiple ? vals.value.slice() : (Array.isArray(vals.value) ? vals.value[0] : vals.value)))); 
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
            if (props.multiple) {
                vals.value = (Array.isArray(val) ? val : [val]);
            } else {
                vals.value = val;
            }
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