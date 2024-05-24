<template>
    <article :class="['message',Size,Type]">
        <div class="message-header" v-if="props.title">
            <p>{{props.title}}</p>
            <button class="delete" aria-label="delete" v-if="props.has_delete" @click="emit('close')"></button>
        </div>
        <div class="message-body">
            <!--
                @slot Content of the message if the message property is not enough
            -->
            <slot>
                {{props.message}}
            </slot>
        </div>
    </article>
</template>

<script lang="ts" setup>
/**
 * Used to display a Message component on the screen
 * 
 * @displayName Message
 */
    import { ColorTypes,Sizes } from '../../enums';
    import {computed} from 'vue';

    const props = withDefaults(defineProps<{
        /**
         * The color type of the message
         */
            type?: ColorTypes|null,
            /**
             * The message content
             */
            message?:string|null,
            /**
             * Indicates if it has a delete button
             */
            has_delete?:boolean,
            /**
             * The title for the message container
             */
            title?:string|null,
            /**
             * The size of the message container
             */
            size?:Sizes|null
        }>(),{
            type:ColorTypes.primary,
            message:null,
            has_delete:false,
            title:null,
            size:Sizes.normal
        });

    const emit = defineEmits<{
        /**
         * Emitted when the delete (close) button is clicked
         */
        close: []
    }>();

    const Size = computed(()=>{
        if (props.size===Sizes.normal){return null;}
        else{return `is-${props.size}`;}
    });
    const Type = computed(()=>`is-${props.type}`);
</script>