<template>
    <button :class="Classes" v-bind:disabled="props.disabled" v-on:click="emit('click')">
        <span class="icon is-small" v-if="props.icon!=null">
            <Icon :icon="props.icon"/>
        </span>
        <span v-if="props.title!=null">{{props.title}}</span>
    </button>
</template>

<script lang="ts">
    import Icon from './icon.vue';
    import {ColorTypes,Sizes} from '../enums';
    import {computed} from 'vue';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
       icon?:string|null,
       disabled?:boolean,
       type?:ColorTypes,
       size?:Sizes,
       title?:string|null,
       addonclass?:string|null,
       hidemobile?:boolean,
       hidetablet?:boolean,
       hidedesktop?:boolean 
    }>(),{
        type:ColorTypes.primary,
        size:Sizes.small
    });

    const emit = defineEmits<{
        click: []
    }>();

    const Classes = computed(()=>{
        let result = ['button','is-rounded',`is-${props.size}`,`is-${props.type}`];
        if (props.disabled){
            result.push('disabled');
        }
        if (props.addonclass){
            result.push(props.addonclass);
        }
        if (props.hidemobile){result.push('is-hidden-mobile');}
        if (props.hidetablet){result.push('is-hidden-tablet-only');}
        if (props.hidedesktop){result.push('is-hidden-desktop is-hidden-widescreen');}
        return result;
    });
</script>
