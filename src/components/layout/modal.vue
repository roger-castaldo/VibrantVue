<template>
    <div :class="{'modal':true,'is-active':props.display}" :style="`z-index:${props.z_index}`">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!--
                @slot The content to display within the modal
            -->
            <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close" v-if="props.has_close" @click="emit('close')"></button>
    </div>
</template>

<script lang="ts" setup>
/**
 * A Mocal component to use
 * 
 * @displayName Modal
 * @link https://bulma.io/documentation/components/modal/
 */
    const props = withDefaults(defineProps<{
        /**
         * Indicates if the modal should be shown
         */
       display?:boolean,
       /**
        * Indicates if there should be a close button
        */
       has_close?:boolean,
       /**
        * Set the z-index if something beyond the default is desired
        */
       z_index?:number
    }>(),{
        display:true,
        has_close:false,
        z_index:99
    });

    const emit = defineEmits<{
        /**
         * Emitted when the close button is clicked
         */
        close:[]
    }>();
</script>