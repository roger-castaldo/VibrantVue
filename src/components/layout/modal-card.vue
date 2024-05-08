<template>
    <div class="modal" :class="{'is-active':props.show}">
        <div class="modal-background"></div>
        <div class="modal-card" :class="classes">
            <div class="card-icon" v-if="props.icon!==null">
                <div class="card-icon-wrapper">
                    <Icon :icon="props.icon" :size="IconSizes.xxlarge"/>
                </div>
            </div>
            <div class="modal-card-head" v-if="slots.header">
                <slot name="header" v-bind="headerProps" />
                <button v-if="has_close" class="delete" aria-label="close" @click="emit('close')"></button>
            </div>
            <div class="modal-card-body" v-if="slots.content">
                <slot name="content" />
            </div>
            <div class="modal-card-foot" v-if="slots.footer">
                <slot name="footer" v-bind="footerProps" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {computed, useSlots} from 'vue';
    import Icon from '../common/icon.vue';
    import { IconSizes } from '../enums';

    const slots = useSlots();
    
    const props = withDefaults(defineProps<{
        show?:boolean,
        has_close?:boolean,
        full_width?:boolean,
        full_height?:boolean,
        max_width?:boolean,
        max_height?:boolean
        icon?:string
    }>(),{
        icon:null
    });
    
    const emit = defineEmits<{close}>();

    const footerProps = {
        addon_class: 'card-footer-item'
    };

    const headerProps = {
        header_class: 'modal-card-title has-text-centered',
        addon_class: 'card-footer-item'
    };

    const classes = computed<string[]>(()=>{
        var result=[];
        if (props.full_width){result.push('is-fullwidth');}
        if (props.full_height){result.push('is-fullheight');}
        if (props.max_width){result.push('is-maxwidth');}
        if (props.max_height){result.push('is-maxheight');}
        return result;
    });
</script>