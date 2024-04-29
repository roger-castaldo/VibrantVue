<template>
    <div class="card" v-bind:class="{'is-fullwidth':props.full_width,'is-fullheight':props.full_height}">
        <div class="card-icon" v-if="props.icon!==null">
            <div class="card-icon-wrapper">
                <Icon :icon="props.icon" :size="IconSizes.xxlarge"/>
            </div>
        </div>
        <div class="card-header">
            <slot name="header" v-bind="headerProps"/>
        </div>
        <div class="card-content">
            <slot name="content"/>
        </div>
        <div class="card-footer">
            <slot name="footer" v-bind="footerProps"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Icon from '../common/icon.vue';
    import { IconSizes } from '../enums';

    const props = withDefaults(defineProps<{
        full_width?:boolean,
        full_height?:boolean,
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
        header_class: 'card-header-title is-centered',
        addon_class: 'card-header-icon'
    };
</script>