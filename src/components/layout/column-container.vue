<template>
    <div class="columns" v-bind:class="[
         {
            'is-mobile':props.mobile,
            'is-desktop':props.desktop,
            'is-tablet':props.tablet,
            'is-gapless':props.gapless,
            'is-multiline':props.multiline,
            'is-centered':props.centered,
            'is-vcentered':props.verticalCentered,
            'is-bordered-left':props.borderleft,
            'is-bordered-right':props.borderright,
            'is-bordered-top':props.bordertop,
            'is-bordered-bottom':props.borderbottom,
            'is-fullwidth':props.fullWidth,
            'is-fullheight':props.fullHeight
         },props.addonclass]">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        mobile?:boolean, 
        desktop?:boolean, 
        tablet?:boolean, 
        gapless?:boolean, 
        multiline?:boolean, 
        centered?:boolean, 
        verticalCentered?:boolean, 
        borderleft?:boolean, 
        borderright?:boolean, 
        borderbottom?:boolean, 
        bordertop?:boolean, 
        fullWidth?:boolean, 
        fullHeight?:boolean, 
        addonclass?:string
    }>();
</script>