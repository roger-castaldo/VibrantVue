<template>
    <div class="card" v-bind:class="{'is-fullwidth':props.fullWidth,'is-fullheight':props.fullHeight}">
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
    const props = defineProps<{
        fullWidth?:boolean,
        fullHeight?:boolean
    }>();

    const footerProps = {
        addonclass: 'card-footer-item'
    };

    const headerProps = {
        headerClass: 'card-header-title is-centered',
        addonclass: 'card-header-icon'
    };
</script>