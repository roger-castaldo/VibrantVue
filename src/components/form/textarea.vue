<template>
    <textarea class="textarea" :name="props.name" :rows="props.rows" :cols="props.cols" :maxlength="props.maxlength" :disabled="props.disabled" @keydown="keyPressed" v-model="value"/>
</template>

<script lang="ts">
    import { watch,ref } from 'vue';
    import { coreFieldProps } from './common';
import { ValueChangedEvent } from './typesDefinitions';

    const tabKeyCode = 9;
    const tab = String.fromCharCode(tabKeyCode);
    const newLine = String.fromCharCode(10);

    interface fieldProps extends coreFieldProps{
        maxlength?:number,
        rows?:number,
        cols?:number,
        supportsTab?:boolean
    };
</script>

<script lang="ts" setup>
    const props = defineProps<fieldProps>();
    const emit = defineEmits<{
         valueChanged:[data:ValueChangedEvent]
    }>();

    const value = ref<string|null>(null);

    watch(value, (val) => { emit('valueChanged', { name: props.name, value: val }); });

    const getValue = ():string=> { return value.value; };
    const setValue = (val:string|null):void=> { value.value = val; };

    defineExpose({ getValue, setValue });

    const keyPressed = (event:any):boolean=> {
        if (props.supportsTab) {
            let val = getValue();
            switch (event.keyCode) {
                case tabKeyCode:
                    let selectionStart = event.target.selectionStart;
                    let selectionEnd = event.target.selectionEnd;
                    let start = val.substring(0, selectionStart);
                    let end = (val.length > selectionEnd ? val.substring(selectionEnd) : '');
                    let chunk = (selectionStart == selectionEnd ? '' : val.substring(selectionStart, selectionEnd));
                    if (chunk.indexOf(String.fromCharCode(10))<0) {
                        if (event.shiftKey) {
                            if (chunk.startsWith(tab)) {
                                chunk = chunk.substring(1);
                                selectionStart--;
                            } else if (start.endsWith(tab)) {
                                start = start.substring(0, start.length - 1);
                                selectionStart--;
                            }
                        } else {
                            chunk = tab + chunk;
                        }
                    } else {
                        let addnewLine = false;
                        if (chunk.endsWith(newLine)) {
                            addnewLine = true;
                            chunk = chunk.substring(0, chunk.length - 1);
                        }
                        let chunks = chunk.split(newLine);
                        chunk = '';
                        if (event.shiftKey && start.endsWith(tab)) {
                            start = start.substring(0, start.length - 1);
                            selectionStart--;
                        }
                        chunks.forEach((c,index)=>{
                            if (event.shiftKey && c.startsWith(tab)) {
                                c = c.substring(1);
                            } else if (!event.shiftKey) {
                                c = tab + c;
                            }
                            chunk += c + (index === chunks.length - 1 ? '' : newLine);
                        });
                        if (addnewLine) {
                            chunk += newLine;
                        }
                    }
                    val = start + chunk + end;
                    selectionStart += (chunk.length == 1 ? 1 : 0);
                    selectionEnd = selectionStart + (chunk.length == 1 ? 0 : chunk.length);
                    setValue(val);
                    event.target.selectionStart = selectionStart;
                    event.target.selectionEnd = selectionEnd;
                    event.target.focus();
                    if (event.preventDefault != undefined)
                        event.preventDefault();
                    return false;
                default:
                    return true;
                    break;
            }
        }
        return true;
    };

</script>