<template>
    <Button v-bind="Properties" @click="emit('click')"/>
</template>

<script lang="ts">
    import translate from '../../messages/messages';
    import Button from './button.vue';
    import {computed,inject} from 'vue';
    import {ColorTypes,Sizes} from '../enums';
</script>

<script lang="ts" setup>
    const emit = defineEmits<{
        click: []
    }>();
    const props = defineProps<{
       disabled?:boolean,
       size?:Sizes,
       addonclass?:string|null,
       hidemobile?:boolean,
       hidetablet?:boolean,
       hidedesktop?:boolean 
    }>();
    const Language = inject<string>('Language');
    const Properties = computed(()=>{
        return {
            Title:translate('Button.Print',Language),
            icon:'print',
            type:ColorTypes.primary,
            disabled:props.disabled,
            addonclass:props.addonclass,
            hidemobile:props.hidemobile,
            hidetablet:props.hidetablet,
            hidedesktop:props.hidedesktop,
            size:props.size
        }
    });
</script>