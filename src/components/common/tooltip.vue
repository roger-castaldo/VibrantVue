<template>
    <component :is="props.is" 
        :class="[
            (props.has_arrow?'has-tooltop-arrow':''),
            (props.position?`has-tooltip-${props.position}`:''),
            (props.multiline?'has-tooltip-multiline':''),
            (props.type?`has-tooltip-${props.type}`:''),
            (props.text_align?`has-tooltip-text-${props.text}`:''),
            (props.always_active?'has-tooltip-active':'')
        ]"
        :data-tooltip="text">
        <!--
            @slot the content to hold within the tool tipped item
        -->
        <slot/>
    </component>
</template>

<script lang="ts" setup>
/**
 * Used to allow for a mouse over tooltip to appear on a given object
 * 
 * @displayName Tooltip
 */
    import { NoticeTypes, ToolTipPositions, ToolTipTextAlignments } from '../../enums';

    const props = withDefaults(defineProps<{
        /**
         * The content of the tool tip
         */
        text:string,
        /**
         * The element that this component is (div,a...etc)
         */
        is:any,
        /**
         * Indicates if the tool tip will have an arrow
         */
        has_arrow?:boolean,
        /**
         * Specifies the position that the tool tip will appear
         */
        position?:ToolTipPositions,
        /**
         * Indicates if the content of the tooltip has multiple lines
         */
        multiline?:boolean,
        /**
         * Set the color type of the tool tip
         */
        type?:NoticeTypes,
        /**
         * Inidicates if the tool tip should always display
         */
        always_active?:boolean,
        /**
         * Set the alignment of the text in the tool tip
         */
        text_align?:ToolTipTextAlignments
    }>(),{
        has_arrow:false,
        position:ToolTipPositions.left,
        multiline:false,
        always_active:false,
        text_align:ToolTipTextAlignments.left
    });
</script>