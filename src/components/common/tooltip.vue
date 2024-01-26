<template>
    <component :is="is" 
        :class="[
            (props.hasArrow?'has-tooltop-arrow':''),
            (props.position?`has-tooltip-${props.position}`:''),
            (props.multiline?'has-tooltip-multiline':''),
            (props.type?`has-tooltip-${props.type}`:''),
            (props.textAlign?`has-tooltip-text-${props.text}`:''),
            (props.alwaysActive?'has-tooltip-active':'')
        ]"
        :data-tooltip="text">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
    import { NoticeTypes, ToolTipPositions, ToolTipTextAlignments } from '../enums';

    const props = withDefaults(defineProps<{
        text:string,
        is:any,
        hasArrow?:boolean,
        position?:ToolTipPositions,
        multiline?:boolean,
        type?:NoticeTypes,
        alwaysActive?:boolean,
        textAlign?:ToolTipTextAlignments
    }>(),{
        hasArrow:false,
        position:ToolTipPositions.left,
        multiline:false,
        alwaysActive:false,
        textAlign:ToolTipTextAlignments.left
    });
</script>