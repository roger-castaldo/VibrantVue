<template>
    <nav :class="['pagination',ButtonClass]" role="navigation" aria-label="pagination" v-show="props.hasmore||props.hasprevious">
        <a :class="['pagination-previous',ButtonClass]"
           v-bind:title="Previous" v-on:click="moveBack" v-bind:disabled="DisablePrevious">
           <Icon type="backward" :size="IconSizes.small"/>
            {{Previous}}
        </a>
        <a :class="['pagination-next',ButtonClass]"
           v-bind:title="Next" v-on:click="moveForward" v-bind:disabled="DisableNext">
            {{Next}}
            <Icon type="forward" :size="IconSizes.small"/>
        </a>
    </nav>
</template>

<script lang="ts">
    import { computed, inject } from 'vue';
    import translate from '../../messages/messages.js';
    import Icon from './icon.vue';
    import { Sizes,ColorTypes,IconSizes } from '../enums';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        usenext?:boolean,
        hasmore:boolean,
        hasprevious:boolean
        size?:Sizes,
        rounded?:boolean,
        buttonType?:ColorTypes
    }>(),{
        usenext:true,
        hasmore:true,
        hasprevious:true,
        size:Sizes.small,
        rounded:false
    });

    const emit = defineEmits<{
        moveForward:[],
        moveBack:[]
    }>();

    const Language = inject<string>('Language');

    const Previous = computed<string>(()=>translate((props.usenext ? 'Pagination.Previous' : 'Pagination.Older'),Language));
    const Next = computed<string>(()=>translate((props.usenext ? 'Pagination.Next' : 'Pagination.Newer'),Language));
    const ButtonClass = computed<string>(()=>props.buttonType ? `has-background-${props.buttonType}` : '');

    const DisablePrevious = computed<boolean>(() => props.hasprevious??true);
    const DisableNext = computed<boolean>(() => props.hasmore??true);

    const moveBack = function () {
        if (!DisablePrevious)
            emit('moveBack');
    };
    const moveForward = function () {
        if (!DisableNext)
            emit('moveForward');
    };
</script>

<style>
    .pagination a {
        text-decoration: none !important;
    }
</style>