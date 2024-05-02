<template>
    <li :class="classes">
        <span class="icon is-clickable" v-if="props.icon" @click="emit('click')">
            <Icon :icon="props.icon"/>
        </span>
        <slot/>
    </li>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import Icon from '../common/icon.vue';
    import { ColorTypes } from '../enums';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        type?:ColorTypes,
        outlined?:boolean,
        highlighted?:boolean,
        icon?:string
    }>();

    const emit = defineEmits<{click}>();

    const classes = computed<string[]>(() => {
        var ret = [];
        if (props.type) {
            ret.push('is-' + props.type);
        }
        if (props.outlined) {
            ret.push('is-outlined');
        }
        if (props.highlighted) {
            ret.push('is-highlighted');
        }
        if (props.icon) {
            ret.push('has-icon');
        }
        return ret;
    });
</script>