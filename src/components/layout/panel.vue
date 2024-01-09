<template>
    <div class="panel" v-bind:class="addons">
        <div class="panel-heading" v-if="props.hasHeader">
            <slot name="header"/>
        </div>
        <div class="panel-tabs" v-if="props.hasTabs">
            <slot name="tabs"/>
        </div>
        <div class="panel-block" v-for="name in BlockNames">
            <slot v-bind:name="name"/>
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
        blockNames?:string[],
        hasTabs?:boolean,
        fullWidth?:boolean,
        fullHeight?:boolean,
        hasHeader?:boolean
    }>();

    const BlockNames = computed<string[]>(() => props.blockNames??['default']);

    const addons = computed<string[]>(() => {
        let ret = [];
        if (props.type){ret.push(`is-${props.type}`);}
        if (props.fullWidth) { ret.push('is-fullwidth'); }
        if (props.fullHeight) { ret.push('is-fullheight'); }
        return ret;
    });
</script>