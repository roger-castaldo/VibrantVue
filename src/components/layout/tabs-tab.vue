<template>
    <li v-bind:class="{'is-active':props.active}">
        <a v-bind:href="href" v-on:click="click">
            <span v-if="props.icon" class="icon is-small">
                <Icon :icon="props.icon"/>
            </span>
            <span>{{props.title}}</span>
        </a>
    </li>
</template>

<script lang="ts">
    import {Icon} from '../common/';
</script>

<script lang="ts" setup>
    const emit = defineEmits<{click}>();
    const props = defineProps<{
        active?:boolean,
        title?:string,
        icon?:string,
        href?:string
    }>();

    const click = (event:any):void=> {
        if (props.href === null || props.href === undefined) {
            event.preventDefault();
            emit('click');
        }
    }
</script>