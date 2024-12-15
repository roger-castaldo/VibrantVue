<template>
    <div :class="{'modal':props.block_user&&props.visible,'is-active':props.block_user&&props.visible}">
        <div v-if="props.block_user&&props.visible" class="modal-background"></div>
        <Animation :incoming="AnimationTypes.fadeIn" :outgoing="AnimationTypes.fadeOut" :speed="AnimationSpeeds.slower">
            <div v-if="props.visible" :class="clazz" role="dialog" :aria-label="props.header??'Page Notification'">
                <Icon :icon="iconType" :size="IconSizes.xxlarge" />
                <h1 v-if="props.header!==null && props.header!==undefined" class="title">{{ props.header }}</h1>
                <div class="block">
                    {{ props.message }}
                </div>
                <Icon v-if="props.has_close" icon="circle-xmark" @click="emit('close')" :size="IconSizes.large" role="button" aria-label="close" />
            </div>
        </Animation>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import Icon from './icon.vue';
    import Animation from './animation.vue';
    import {NoticeTypes,AnimationTypes,AnimationSpeeds,IconSizes} from '../../enums';
</script>

<script lang="ts" setup>
/**
 * Used to supply a page level notification that will appear on top of everything
 * 
 * @displayName PageNotification
 * @link https://bulma.io/documentation/elements/notification/
 * @link_title Based On This Bulma Component
 */
    const props = withDefaults(defineProps<{
        /**
         * Inidicates whether or not to show
         */
        visible?:boolean,
        /**
         * Set the color of the notification
         */
        type?:NoticeTypes,
        /**
         * The message content of the notification
         */
        message?:string,
        /**
         * The title for the notification
         */
        header?:string,
        /**
         * Indicates if the user needs to be blocked from doing anything while fvisible
         */
        block_user?:boolean,
        /**
         * Inidicates if there is a close button
         */
        has_close?:boolean,
        /**
         * Indicates the use of the light version of the color specified
         */
        is_light?:boolean
    }>(),{
        visible:false,
        type:NoticeTypes.info
    });

    const emit = defineEmits<{
        /**
         * Emitted when the close button is clicked
         */
        close:[]
    }>();
    const iconType = computed<string>(()=>{
        switch(props.type){
            case NoticeTypes.info:
                return 'circle-info';
                break;
            case NoticeTypes.success:
                return 'circle-check';
                break;
            case NoticeTypes.danger:
                return 'bug';
                break;
            case NoticeTypes.warning:
                return 'circle-exclamation';
                break;
        }            
    });
    const clazz = computed<string[]>(() => {
        var result = ['is-page-notification-container',`is-${props.type}`];
        if (props.is_light)
            result.push('is-light-mode');
        if (!(props.has_close === undefined || props.has_close === null ? true : props.has_close))
            result.push('has-no-close');
        return result;
    });
</script>