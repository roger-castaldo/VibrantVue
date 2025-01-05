<template>
    <section>
        <ColumnContainer :modifiers="[ColumnContainerModifiers.gapless]" v-for="row in Rows" :columns="row.map(r=>convertInputToColumn(r))">
            <template v-for="inp in row.map<FilteredRowItem>((value,index)=>{return {input:value,index:index};})
        .filter(val=>!hiddenInputs!.some(f=>f===val.input.name))" 
                #[`col-${inp.index}`]>
                <FormComponent 
                    :ref="(el) => (refs[inp.input.refIndex].value = el)" 
                    :input="inp.input" 
                    @valueChanged="emit('valueChanged',$event)" 
                    @buttonClicked="emit('buttonClicked',$event)" 
                    :disabled="(props.disabled??false) || disabledFields!.some(f=>f===inp.input.name)"/>
            </template>
        </ColumnContainer>
    </section>
</template>

<script lang="ts">
    import { inject, ref,computed} from 'vue';
    import ColumnContainer from '../layout/column-container.vue';
    import FormComponent from './form-component.vue';
    import { FormInputType, ValueChangedEvent } from './typeDefinitions';
    import {Column} from '../layout/typeDefinitions';
    import { DISABLED_FIELDS_PROPERTY, HIDDEN_FIELDS_PROPERTY } from './common';
    import {ColumnSizes,ColumnContainerModifiers} from '../../enums';

    const getColumnSize = (form_columns?:number) : ColumnSizes =>{
        let size:ColumnSizes = ColumnSizes.twelve;
        if (form_columns!==undefined){
            switch(form_columns!){
                case 1: size=ColumnSizes.one; break;
                case 2: size=ColumnSizes.two; break;
                case 3: size=ColumnSizes.three; break;
                case 4: size=ColumnSizes.four; break;
                case 5: size=ColumnSizes.five; break;
                case 6: size=ColumnSizes.six; break;
                case 7: size=ColumnSizes.seven; break;
                case 8: size=ColumnSizes.eight; break;
                case 9: size=ColumnSizes.nine; break;
                case 10: size=ColumnSizes.ten; break;
                case 11: size=ColumnSizes.eleven; break;
                default: size=ColumnSizes.twelve; break;
            }
        }
        return size;
    }

    type MappedFormInputType = FormInputType & {
        refIndex:number
    }

    type FilteredRowItem = {
        input:MappedFormInputType,
        index:number
    };
</script>

<script lang="ts" setup>
/**
 * @ignore
 */
    const convertInputToColumn = (input:FormInputType) : Column =>{
        return {
            size:getColumnSize(input.form_columns),
            class:'field'
        };
    }
    
    const props = defineProps<{
        /**
         * The inputs contains within the input collection
         */
        fields:FormInputType[],
        /**
         * Indicates if the input collection is disabled
         */
         disabled?:boolean;
    }>();

    const emit = defineEmits<{
        /**
         * Emitted when the value of a component in this row changes
         * 
         * @param data ValueChangedEvent
         */
        valueChanged:[data:ValueChangedEvent],
        /**
         * Emitted when a button within this row is clicked
         * 
         * @param name string
         */
        buttonClicked:[name:string]
    }>();

    let refs = [];

    const Rows = computed<MappedFormInputType[][]>(()=>{
        let result:MappedFormInputType[][] = [];
        let row:MappedFormInputType[] = [];
        let curLen = 0;
        refs = props.fields.map((inp,index)=>ref(null));
        props.fields.forEach((field,index)=>{
            let len = (field.form_columns??12);
            if (curLen+len>12){
                result.push(row);
                row=[];
                curLen=0;
            }
            row.push({...field,...{refIndex:index}});
            curLen+=len;
            if (curLen===12){
                result.push(row);
                row=[];
                curLen=0;
            }
        });
        if (row.length > 0) {
            result.push(row);
        }
        return result;
    });

    const hiddenInputs = inject<string[]>(HIDDEN_FIELDS_PROPERTY);
    const disabledFields = inject<string[]>(DISABLED_FIELDS_PROPERTY);
    
    const setValue = (values:any|null):void=> {
        refs.forEach((input,index) => {
            switch (props.fields[index].type) {
                case 'subform':
                    input.value!.setValue(values);
                    break;
                default:
                    if (input.value!.setValue !== undefined) {
                        if (values === null) {
                            input.value!.setValue(null);
                        } else if (Object.keys(values).some(k=>k===input.value!.fieldName)) {
                            input.value!.setValue(values[input.value!.fieldName]);
                        } else if (Object.keys(values).some(k=>k===input.value!.altFieldName)) {
                            input.value!.setValue(values[input.value!.altFieldName]);
                        }
                    }
                    break;
            }
        });
    };
    const getValue = ():any=> {
        var result:any = {};
        refs.forEach(input => {
            if (input.value!.getValue != undefined) {
                switch (input.value!.type) {
                    case 'subform':
                        result = $.extend(result,input!.value.getValue());
                        break;
                    default:
                        result[input.value!.fieldName] = input.value!.getValue();
                        break;
                }
            }
        });
        return result;
    };
    const isValid = ():boolean=> {
        return !refs.some(input=>!(input.value!.isValid===undefined?true:input.value!.isValid()));
    };
    
    defineExpose({ 
        /**
         * Called to set the value for a component in the row
         * 
         * @param value any
         */
         setValue,  
        /**
         * Called to get the value of the components in this row.
         * Returns an object where the propertyName are the names of the fields in the subform.
         */
         getValue, 
        /**
         * Called to see if all the copmonents in this row are valid.
         */
        isValid
    });
</script>