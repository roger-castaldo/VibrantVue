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
import { IButtonProperties } from './typeDefinitions';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<IButtonProperties>(),{
        type:ColorTypes.primary,
        size:Sizes.small
    });

    const emit = defineEmits<{
        click: []
    }>();

    const Classes = computed<string>(()=>{
        let result = ['button','is-rounded',`is-${props.size}`,`is-${props.type}`];
        if (props.disabled){
            result.push('disabled');
        }
        if (props.hide_mobile){result.push('is-hidden-mobile');}
        if (props.hide_tablet){result.push('is-hidden-tablet-only');}
        if (props.hide_desktop){result.push('is-hidden-desktop is-hidden-widescreen');}
        return result.join(' ');
    });
</script>
