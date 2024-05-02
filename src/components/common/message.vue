<template>
    <article :class="['message',Size,Type]">
        <div class="message-header" v-if="props.title">
            <p>{{props.title}}</p>
            <button class="delete" aria-label="delete" v-if="props.has_delete" @click="emit('close')"></button>
        </div>
        <div class="message-body">
            <slot>
                {{props.message}}
            </slot>
        </div>
    </article>
</template>

<script lang="ts" setup>
    import { ColorTypes,Sizes } from '../enums';
    import {computed} from 'vue';

    const props = withDefaults(defineProps<{
            type?: ColorTypes|null,
            message?:string|null,
            has_delete?:boolean,
            title?:string|null,
            size?:Sizes|null
        }>(),{
            type:ColorTypes.primary,
            message:null,
            has_delete:false,
            title:null,
            size:Sizes.normal
        });

    const emit = defineEmits<{
        close: []
    }>();

    const Size = computed(()=>{
        if (props.size===Sizes.normal){return null;}
        else{return `is-${props.size}`;}
    });
    const Type = computed(()=>`is-${props.type}`);
</script>