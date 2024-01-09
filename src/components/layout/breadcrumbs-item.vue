<template>
    <li :class="{'is-active':props.active}">
        <a v-on:click="emit('click')">
            <span class="icon is-clickable" v-if="props.icon">
                <Icon :icon="props.icon" />
            </span>
            {{props.title}}
        </a>
    </li>
</template>

<script lang="ts">
    import {Icon} from '../common/';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        active:boolean,
        title:string,
        icon?:string|null
    }>();
    
    const emit = defineEmits<{click}>();
</script>