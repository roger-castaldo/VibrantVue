<template>
    <div class="box" :id="props.name" :name="props.name" v-show="!props.hidden">
        <Row v-for="(row,index) in rows" :ref="(el) => (refs[index] = el)" :inputs="row" :disabled="props.disabled" v-on:valueChanged="emit('valueChanged',$event)" v-on:buttonClicked="emit('buttonClicked',$event)"/>
    </div>
</template>

<script lang="ts">
    import Row from './row.vue';
    import { ref, watch, computed, Ref } from 'vue';
    import { FormInputType, ValueChangedEvent } from './typesDefinitions';
    import {buildFieldRows, coreFieldProps} from './common';

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
    
    const emit = defineEmits<{
         valueChanged:[data:ValueChangedEvent],
         buttonClicked:[name:string]
    }>();

    let refs = [];
    const hidden = ref(false);

    const rows = computed<FormInputType[][]>(() => {
        let result = buildFieldRows(props.fields);
        refs = result.map(r=>ref(null));
        return result;
    });

    const isValid = ():boolean=> !refs.some(row=>!(row.isValid===undefined?true:row.isValid()));
    const setValue = (values:any):void=>refs.forEach(row => row.setValue(values));
    const getValue = ():any=> {
        var ret = {};
        refs.forEach(row => {
            ret = $.extend(ret, row.getValue());
        });
        return ret;
    };
    
    defineExpose({ isValid, setValue, getValue});
    
</script>