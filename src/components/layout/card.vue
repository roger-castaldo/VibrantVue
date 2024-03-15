<template>
    <div class="card" v-bind:class="{'is-fullwidth':props.fullWidth,'is-fullheight':props.fullHeight}">
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
        fullWidth?:boolean,
        fullHeight?:boolean,
        icon?:string
    }>(),
    {
        fullHeight:false,
        fullWidth:false,
        icon:null
    });

    const footerProps = {
        addonclass: 'card-footer-item'
    };

    const headerProps = {
        headerclass: 'card-header-title is-centered',
        addonclass: 'card-header-icon'
    };
</script>