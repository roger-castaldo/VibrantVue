<template>
    <div class="summernote" ref="snote"/>    
</template>

<script lang="ts">
    import { watch, onMounted, onUnmounted, ref,inject } from 'vue';
    import { css } from '../utilities';
    import {coreFieldProps} from './common';
    import { ValueChangedEvent } from './typeDefinitions';
    import { useSummerNote } from '../shared';
</script>

<script lang="ts" setup>
/**
 * A full editor style of form input (uses SummerNote)
 * 
 * @displayName FullEditor
 * @link https://summernote.org/
 * @link_title SummerNote
 */
    const cdnBase = useSummerNote(inject);

    css([`${cdnBase}summernote-lite.min.css`]);
    await import(`${cdnBase}summernote`);
    const snote = ref(null);

    const props = defineProps<coreFieldProps>();
    const emit = defineEmits<{
        /**
         * Emitted when the value has changed
         * 
         * @param data ValueChangedEvent
         */
        valueChanged:[data:ValueChangedEvent]
    }>();

    watch(()=>props.disabled,(val)=>{
        if (snote.value!=null)
            $(snote.value).summernote(val ? 'disable' : 'enable');
    });

    const getValue = ():string=>{
        return $(snote.value).summernote('code');
    };
    const setValue = (value:string|null):void=>{
        $(snote.value).summernote('code',value);
    }

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value string|null
         * @returns void
         */
        setValue 
    });

    onMounted(()=>{
        $(snote.value).summernote({
            height:400,
            callbacks: {
                onChange: function(contents) {
                    emit('valueChanged',{name:props.name,value:contents});
                }
            }
        });
        if (props.disabled??false){
            $(snote.value).summernote('disable');
        }
    });

    onUnmounted(()=>{
        $(snote.value).summernote('destroy');
    });
</script>