<template>
    <div :class="Classes">
        <div class="slideout-background" @click="emit('close')"></div>
        <div class="slideout-content">
            <button v-if="props.has_close" class="delete" aria-label="close" @click="emit('close')"></button>
            <div class="slideout-head" v-if="slots.header">
                <!--
                    @slot The header of the slideout
                -->
                <slot name="header" v-bind="headerProps"/>
            </div>
            <div class="slideout-body">
                <!--
                    @slot The content of the slideout
                -->
                <slot name="content" v-if="slots.content"/>
                <!--
                    @slot The default content if no slot is specified
                -->
                <slot/>
            </div>
            <div class="slideout-foot" v-if="slots.footer">
                <!--
                    @slot The footer of the slideout
                -->
                <slot name="footer" v-bind="footerProps"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
/**
 * A Slideout component to use, similar to a modal card, slides out from the right
 * 
 * @displayName Slideout
 */
    import { ColorTypes } from '../../enums';
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
        /**
         * Indicates if the slideout should be shown
         */
        show?:boolean,
        /**
         * Indicates if there should be a close button
         */
        has_close?:boolean,
        /**
         * Indicates that the width of this slideout should be the maximum allowed and not based on the content
         */
        full_width?:boolean,
        /**
         * The color type to use for the slideout
         */
        type?:ColorTypes,
        /**
         * Indicates if the animation of the slideout when appears should be disabled
         */
        not_animated?:boolean
    }>();
    
    const emit = defineEmits<{
        /**
         * Emitted when the close button is clicked
         */
        close:[]
    }>();

    const Classes = computed<string[]>(()=>{
        return [
            'slideout',
            (props.show?'is-active':''),
            (props.type!==undefined && props.type!==null?`is-${props.type}`:''),
            (props.full_width?'is-fullwidth':''),
            (props.not_animated?'no-animation':'')
        ];
    });
</script>