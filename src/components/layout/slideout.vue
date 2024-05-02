<template>
    <div class="slideout" :class="{'is-active':props.show}">
        <div class="slideout-background" @click="emit('close')"></div>
        <div class="slideout-content">
            <slot/>
        </div>
        <button v-if="has_close" class="delete" aria-label="close" @click="emit('close')"></button>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        show?:boolean,
        has_close?:boolean
    }>();
    
    const emit = defineEmits<{close}>();
</script>