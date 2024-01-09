<template>
    <article :class="['message',Size,Type]">
        <div class="message-header" v-if="props.title">
            <p>{{props.title}}</p>
            <button class="delete" aria-label="delete" v-if="props.hasDelete"></button>
        </div>
        <div class="message-body">
            {{props.message}}
            <slot/>
        </div>
    </article>
</template>

<script lang="ts" setup>
    import { ColorTypes,Sizes } from '../enums';
    import {computed} from 'vue';

    const props = withDefaults(defineProps<{
            type?: ColorTypes|null,
            message?:string|null,
            hasDelete?:boolean,
            title?:string|null,
            size?:Sizes|null
        }>(),{
            type:ColorTypes.primary,
            message:null,
            hasDelete:false,
            title:null,
            size:Sizes.normal
        });

    const Size = computed(()=>{
        if (props.size===Sizes.normal){return null;}
        else{return `is-${props.size}`;}
    });
    const Type = computed(()=>`is-${props.type}`);
</script>