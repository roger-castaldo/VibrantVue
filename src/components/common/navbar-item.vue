<template>
    <a :class="['navbar-item',(props.active?'is-active':''),(props.hasDropDown?'has-dropdown is-hoverable':'')]" :href="props.href" @click="emit('click')">
        <span class="icon is-small" v-if="props.icon!==undefined && props.icon!==null">
            <Icon :icon="props.icon"/>
        </span>
        <span>{{props.title}}</span>
        <div class="navbar-dropdown" v-if="props.hasDropDown">
            <slot/>
        </div>
    </a>
</template>

<script lang="ts">
    import { MaybeRef } from 'vue';
    import Icon from './icon.vue';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        title:MaybeRef<string>|string,
        active?:boolean,
        icon?:string,
        hasDropDown?:boolean,
        href?:string
    }>(),{
        active:false,
        hasDropDown:false
    });

    const emit = defineEmits<{
        click:[]
    }>();
</script>