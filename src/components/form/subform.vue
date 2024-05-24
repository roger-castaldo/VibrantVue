<template>
    <div class="box" :id="props.name" :name="props.name" v-show="!props.hidden">
        <Row v-for="(row,index) in rows" :ref="(el) => (refs[index] = el)" :inputs="row" :disabled="props.disabled" @valueChanged="emit('valueChanged',$event)" @buttonClicked="emit('buttonClicked',$event)"/>
    </div>
</template>

<script lang="ts">
    import Row from './row.vue';
    import { ref, watch, computed, Ref } from 'vue';
    import { FormInputType, ValueChangedEvent } from './typesDefinitions';
    import {buildFieldRows, coreFieldProps} from './common';

    interface fieldProps extends coreFieldProps {
        /**
         * The form components for this subform
         */
        fields:FormInputType[];
        /**
         * Indicates if the subform is hidden
         */
        hidden?:boolean;
    };
</script>

<script lang="ts" setup>
/**
 * Used to create form within a form (a way of collecting child inputs that maybe have a specific use)
 * 
 * @displayName Subform
 */
    const props = withDefaults(defineProps<fieldProps>(),{
        hidden:false,
        disabled:false
    });
    
    const emit = defineEmits<{
        /**
         * Emitted when the value of a form element changes
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent],
        /**
         * Emitted when a button within the sub form is clicked
         * 
         * @param name string
         */
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
    
    defineExpose({ 
        /**
         * Called to set the value of 1 or more copmonents inside this sub form
         * 
         * @param value any
         */
        setValue, 
        /**
         * Called to get the value of this of all the components inside this subform.  
         * Returns an object where each propertyName is the name of the field and it's value is the value.
         */
        getValue, 
        /**
         * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
         */
        isValid
    });
    
</script>