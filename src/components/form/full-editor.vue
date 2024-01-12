<template>
    <div class="summernote" ref="snote"/>    
</template>

<script lang="ts">
    import { watch, onMounted, onUnmounted, ref } from 'vue';
    import { css } from '../utilities';
    import {coreFieldProps} from './common';
import { ValueChangedEvent } from './types';

    css(['https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css']);
</script>

<script lang="ts" setup>
    await import('summernote');
    const snote = ref(null);

    const props = defineProps<coreFieldProps>();
        const emit = defineEmits<{
         value_changed:[data:ValueChangedEvent]
    }>();

    watch([props.disabled],(val)=>{
        if (snote.value!=null)
            $(snote.value).summernote(val ? 'disable' : 'enable');
    });

    const getValue = ():string=>{
        return $(snote.value).summernote('code');
    };
    const setValue = (value:string):void=>{
        $(snote.value).summernote('code',value);
    }

    defineExpose({getValue,setValue});

    onMounted(()=>{
        $(snote.value).summernote({
            height:400,
            callbacks: {
                onChange: function(contents) {
                    emit('value_changed',{name:props.name,value:contents});
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