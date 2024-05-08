<template>
    <div class="panel" :class="addons">
        <div class="panel-heading" v-if="slots.header" v-show="!(props.hidden_sections??[]).includes('header')">
            <slot name="header"/>
        </div>
        <div class="panel-tabs" v-if="slots.tabs" v-show="!(props.hidden_sections??[]).includes('tabs')">
            <slot name="tabs"/>
        </div>
        <template v-for="name in BlockNames">
            <div class="panel-block" v-if="slots[name]"  v-show="!(props.hidden_sections??[]).includes(name)">
                <slot :name="name"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import { computed,useSlots } from 'vue';
    import { ColorTypes } from '../enums';
</script>

<script lang="ts" setup>
    const slots = useSlots();

    const props = defineProps<{
        type?:ColorTypes,
        block_names?:string[],
        full_width?:boolean,
        full_height?:boolean,
        hidden_sections?:string[]
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