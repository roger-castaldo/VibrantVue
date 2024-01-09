<template>
    <div :class="{'modal':props.blockUser&&props.visible,'is-active':props.blockUser&&props.visible}">
        <div v-if="props.blockUser&&props.visible" class="modal-background"></div>
        <Animation :incoming="AnimationTypes.fadeIn" :outgoing="AnimationTypes.fadeOut" :speed="AnimationSpeeds.slower">
            <div v-if="props.visible" :class="clazz">
                <Icon :icon="iconType" :size="IconSizes.xxlarge" />
                <h1 v-if="props.header!==null && props.header!==undefined" class="title">{{ props.header }}</h1>
                <div class="block">
                    {{ props.message }}
                </div>
                <Icon v-if="props.hasClose" icon="circle-xmark" v-on:click="emit('close')" :size="IconSizes.large" />
            </div>
        </Animation>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import Icon from './icon.vue';
    import Animation from './animation.vue';
    import {NoticeTypes,AnimationTypes,AnimationSpeeds,IconSizes} from '../enums';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        visible?:boolean,
        type?:NoticeTypes,
        message?:string,
        header?:string,
        blockUser?:boolean,
        hasClose?:boolean,
        isLight?:boolean
    }>(),{
        visible:false,
        type:NoticeTypes.info
    });

    const emit = defineEmits<{
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
        if (props.isLight)
            result.push('is-light-mode');
        if (!(props.hasClose === undefined || props.hasClose === null ? true : props.hasClose))
            result.push('has-no-close');
        return result;
    });
</script>