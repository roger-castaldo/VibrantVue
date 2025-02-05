<template>
    <div :class="['notification','is-'+props.type,(props.light ? 'is-light' : '')]">
        <!--
            @slot Content of the notification if the message property is not enough
        -->
        <slot>
            {{props.message}}
        </slot>
    </div>
</template>

<script lang="ts" setup>
/**
 * Used to supply a notification component
 * 
 * @displayName Notification
 * @link https://bulma.io/documentation/elements/notification/
 */
import { MaybeRef } from 'vue';
import {NoticeTypes} from '../../enums';

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
    light?:boolean
    }>(),{
        type:NoticeTypes.info,
        message:null,
        light:false
    });
</script>