<template>
    <div :class="Classes">
        <div class="slideout-background" @click="emit('close')"></div>
        <div class="slideout-content">
            <button v-if="has_close" class="delete" aria-label="close" @click="emit('close')"></button>
            <div class="slideout-head" v-if="slots.header">
                <slot name="header" v-bind="headerProps"/>
            </div>
            <div class="slideout-body">
                <slot name="content" />
                <slot/>
            </div>
            <div class="slideout-foot" v-if="slots.footer">
                <slot name="footer" v-bind="footerProps"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ColorTypes } from '../enums';
    import {computed, useSlots } from 'vue';

    const slots = useSlots();

    const footerProps = {
        addon_class: ''
    };

    const headerProps = {
        header_class: 'slideout-title has-text-centered',
        addon_class: ''
    };

    const props = defineProps<{
        show?:boolean,
        has_close?:boolean,
        full_width?:boolean,
        type?:ColorTypes
    }>();
    
    const emit = defineEmits<{close}>();

    const Classes = computed<string[]>(()=>{
        let result=['slideout'];
        if (props.show){result.push('is-active');}
        if (props.type!==undefined && props.type!==null){result.push(`is-${props.type}`);}
        if (props.full_width){result.push('is-fullwidth');}
        return result;
    });
</script>