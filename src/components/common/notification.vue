<template>
    <skeleton tag="div" :is_loading="props.is_loading" :class="['notification','is-'+props.type,(props.light ? 'is-light' : '')]">
        <!--
            @slot Content of the notification if the message property is not enough
        -->
        <slot>
            {{props.message}}
        </slot>
    </skeleton>
</template>

<script lang="ts" setup>
/**
 * Used to supply a notification component
 * 
 * @displayName Notification
 * @link https://bulma.io/documentation/elements/notification/
 */
import { MaybeRef, Ref } from 'vue';
import {NoticeTypes} from '../../enums';
import {skeleton} from '../shared';

const props = withDefaults(defineProps<{
    /**
     * The color type to use
     */
    type?: NoticeTypes|null,
    /**
     * The content of the notifcation
     */
    message?:MaybeRef<string>|string|null,
    /**
     * Inidicates to use the light version of the given color
     */
    light?:boolean,
    /**
     * Indicates if the notification is loading and to render a skeleton style
     */
    is_loading?:Ref<boolean>|boolean
    }>(),{
        type:NoticeTypes.info,
        message:null,
        light:false,
        is_loading:undefined
    });
</script>