<template>
    <div class="modal" v-bind:class="{'is-active':props.show}">
        <div class="modal-background"></div>
        <div class="modal-card" v-bind:class="classes">
            <div class="card-icon" v-if="props.icon!==null">
                <div class="card-icon-wrapper">
                    <Icon :icon="props.icon" :size="IconSizes.xxlarge"/>
                </div>
            </div>
            <div class="modal-card-head">
                <slot name="header" v-bind="headerProps" />
                <button v-if="hasClose" class="delete" aria-label="close" v-on:click="emit('close')"></button>
            </div>
            <div class="modal-card-body">
                <slot name="content" />
            </div>
            <div class="modal-card-foot">
                <slot name="footer" v-bind="footerProps" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {computed} from 'vue';
    import Icon from '../common/icon.vue';
    import { IconSizes } from '../enums';
    
    const props = withDefaults(defineProps<{
        show?:boolean,
        hasClose?:boolean,
        fullWidth?:boolean,
        fullHeight?:boolean,
        maxWidth?:boolean,
        maxHeight?:boolean
        icon?:string
    }>(),{
        icon:null
    });
    
    const emit = defineEmits<{close}>();

    const footerProps = {
        addonclass: 'card-footer-item'
    };

    const headerProps = {
        headerClass: 'modal-card-title is-centered',
        addonclass: 'card-footer-item'
    };

    const classes = computed<string[]>(()=>{
        var result=[];
        if (props.fullWidth){result.push('is-fullwidth');}
        if (props.fullHeight){result.push('is-fullheight');}
        if (props.maxWidth){result.push('is-maxwidth');}
        if (props.maxHeight){result.push('is-maxheight');}
        return result;
    });
</script>