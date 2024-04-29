<template>
    <div :class="{'modal':true,'is-active':props.display}" :style="`z-index:${props.z_index}`">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close" v-if="props.has_close"></button>
    </div>
</template>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
       display?:boolean,
       has_close?:boolean,
       z_index?:number
    }>(),{
        display:true,
        has_close:false,
        z_index:99
    });
</script>