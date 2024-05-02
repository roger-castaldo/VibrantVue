<template>
    <div class="panel" :class="addons">
        <div class="panel-heading" v-if="props.has_header">
            <slot name="header"/>
        </div>
        <div class="panel-tabs" v-if="props.has_tabs">
            <slot name="tabs"/>
        </div>
        <div class="panel-block" v-for="name in BlockNames">
            <slot :name="name"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import { ColorTypes } from '../enums';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        type?:ColorTypes,
        block_names?:string[],
        has_tabs?:boolean,
        full_width?:boolean,
        full_height?:boolean,
        has_header?:boolean
    }>();

    const BlockNames = computed<string[]>(() => props.block_names??['default']);

    const addons = computed<string[]>(() => {
        let ret = [];
        if (props.type){ret.push(`is-${props.type}`);}
        if (props.full_width) { ret.push('is-fullwidth'); }
        if (props.full_height) { ret.push('is-fullheight'); }
        return ret;
    });
</script>