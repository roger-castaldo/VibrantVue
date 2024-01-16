<template>
    <div v-bind:class="['notification','is-'+props.type,(props.light ? 'is-light' : '')]">
        <slot>
            {{props.message}}
        </slot>
    </div>
</template>

<script lang="ts" setup>
    import {NoticeTypes} from '../enums';

    const props = withDefaults(defineProps<{
            type?: NoticeTypes|null,
            message?:string|null,
            light?:boolean
        }>(),{
            type:NoticeTypes.info,
            message:null,
            light:false
        });
</script>