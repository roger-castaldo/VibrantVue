<template>
    <component :is="is" 
        :class="[
            (props.has_arrow?'has-tooltop-arrow':''),
            (props.position?`has-tooltip-${props.position}`:''),
            (props.multiline?'has-tooltip-multiline':''),
            (props.type?`has-tooltip-${props.type}`:''),
            (props.text_align?`has-tooltip-text-${props.text}`:''),
            (props.always_active?'has-tooltip-active':'')
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
        has_arrow?:boolean,
        position?:ToolTipPositions,
        multiline?:boolean,
        type?:NoticeTypes,
        always_active?:boolean,
        text_align?:ToolTipTextAlignments
    }>(),{
        has_arrow:false,
        position:ToolTipPositions.left,
        multiline:false,
        always_active:false,
        text_align:ToolTipTextAlignments.left
    });
</script>