<template>
    <div :class="{'modal':true,'is-active':props.display}" :style="`z-index:${props.zIndex}`">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close" v-if="props.hasClose"></button>
    </div>
</template>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
       display?:boolean,
       hasClose?:boolean,
       zIndex?:number
    }>(),{
        display:true,
        hasClose:false,
        zIndex:99
    });
</script>