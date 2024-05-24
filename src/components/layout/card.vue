<template>
    <div class="card" :class="{'is-fullwidth':props.full_width,'is-fullheight':props.full_height}">
        <div class="card-icon" v-if="props.icon!==null">
            <div class="card-icon-wrapper">
                <Icon :icon="props.icon" :size="IconSizes.xxlarge"/>
            </div>
        </div>
        <div class="card-header" v-if="slots.header">
            <!--
                @slot The header of the card
            -->
            <slot name="header" v-bind="headerProps"/>
        </div>
        <div class="card-content" v-if="slots.content">
            <!--
                @slot The body of the card
            -->
            <slot name="content"/>
        </div>
        <div class="card-footer" v-if="slots.footer">
            <!--
                @slot The footer of the card
            -->
            <slot name="footer" v-bind="footerProps"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
/**
 * A Card component to use
 * 
 * @displayName Card
 */
    import Icon from '../common/icon.vue';
    import { IconSizes } from '../../enums';
    import {useSlots} from 'vue';

    const slots = useSlots();


    const props = withDefaults(defineProps<{
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
    }>(),
    {
        full_height:false,
        full_width:false,
        icon:null
    });

    const footerProps = {
        addon_class: 'card-footer-item'
    };

    const headerProps = {
        header_class: 'card-header-title has-text-centered',
        addon_class: 'card-header-icon'
    };
</script>