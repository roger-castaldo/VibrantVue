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
                <!--
                    @slot The header of the modal card
                -->
                <slot name="header" v-bind="headerProps" />
                <button v-if="has_close" class="delete" aria-label="close" @click="emit('close')"></button>
            </div>
            <div class="modal-card-body" v-if="slots.content">
                <!--
                    @slot The body of the modal card
                -->
                <slot name="content" />
            </div>
            <div class="modal-card-foot" v-if="slots.footer">
                <!--
                    @slot The footer of the modal card
                -->
                <slot name="footer" v-bind="footerProps" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
/**
 * A Modal Card component to use
 * 
 * @displayName ModalCard
 * @link https://bulma.io/documentation/components/modal/
 */
    import {computed, useSlots} from 'vue';
    import Icon from '../common/icon.vue';
    import { IconSizes } from '../../enums';

    const slots = useSlots();
    
    const props = withDefaults(defineProps<{
        /**
         * Indicates if the modal card should be shown
         */
        show?:boolean,
        /**
         * Indicates if a close icon should exist on the card
         */
        has_close?:boolean,
        /**
         * Indicates if the modal card should be set to the maximum allowed width
         */
        max_width?:boolean,
        /**
         * Indicates if the modal card should be set to the maximum allowed height
         */
        max_height?:boolean
        /**
         * Indicates if the width of the card should be based on the content or a built in maximum
         */
         full_width?:boolean,
        /**
         * Indicates if the height of the card should be based on the content or a build in maximum
         */
        full_height?:boolean,
        /**
         * Set an icon to overlay within the header
         */
        icon?:string
    }>(),{
        icon:null
    });
    
    const emit = defineEmits<{
        /**
         * Emitted when the close button is clicked
         */
        close:[]
    }>();

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