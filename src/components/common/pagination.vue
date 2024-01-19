<template>
    <nav :class="['pagination','is-centered',ButtonClass,`is-${props.size}`,(props.rounded?'is-rounded':'')]" role="navigation" aria-label="pagination" v-show="props.hasmore||props.hasprevious">
        <a :class="['pagination-previous',ButtonClass]"
           v-bind:title="Previous" v-on:click="moveBack" v-bind:disabled="DisablePrevious">
           <Icon icon="backward" :size="IconSizes.small"/>
            {{Previous}}
        </a>
        <a :class="['pagination-next',ButtonClass]"
           v-bind:title="Next" v-on:click="moveForward" v-bind:disabled="DisableNext">
            {{Next}}
            <Icon icon="forward" :size="IconSizes.small"/>
        </a>
        <template v-if="props.totalpages!==undefined">
            <ul class="pagination-list">
                <li v-for="page in Pages">
                    <span v-if="page===-1" class="pagination-ellipsis">&hellip;</span>
                    <a v-else :class="(page===-1 ? ['pagination-ellipsis'] : ['pagination-link',(page===props.currentpage ? 'is-current' : '')])"
                        :aria-label="(page===-1 ? '' : `${GoToPage} ${page}`)"
                        @onclick="goToPage(page)">{{(page===-1?'':page)}}
                    </a>
                </li>
            </ul>
        </template>
    </nav>
</template>

<script lang="ts">
    import { computed, inject } from 'vue';
    import translate from '../../messages/messages.js';
    import Icon from './icon.vue';
    import { Sizes,ColorTypes,IconSizes } from '../enums';
    import { useLanguage } from '../shared';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        usenext?:boolean,
        hasmore:boolean,
        hasprevious:boolean
        size?:Sizes,
        rounded?:boolean,
        buttontype?:ColorTypes,
        totalpages?:number,
        currentpage?:number
    }>(),{
        usenext:true,
        hasmore:true,
        hasprevious:true,
        size:Sizes.small,
        rounded:false,
        currentpage:1
    });

    const emit = defineEmits<{
        moveForward:[],
        moveBack:[],
        goToPage:[page:number]
    }>();

    const Language = useLanguage(inject);

    const Previous = computed<string>(()=>translate((props.usenext ? 'Pagination.Previous' : 'Pagination.Older'),Language));
    const Next = computed<string>(()=>translate((props.usenext ? 'Pagination.Next' : 'Pagination.Newer'),Language));
    const ButtonClass = computed<string>(()=>props.buttontype ? `has-background-${props.buttontype}` : '');
    const GoToPage = computed<string>(()=>translate('Pagination.GoToPage',Language));

    const DisablePrevious = computed<boolean>(() => props.hasprevious??true);
    const DisableNext = computed<boolean>(() => props.hasmore??true);

    const Pages = computed<number[]>(()=>{
        if (props.totalpages===undefined){
            return [];
        }else if(props.totalpages>5){
            let center:number = (props.currentpage===undefined ? Math.floor(props.totalpages/2) : props.currentpage);
            return [
                1,
                -1,
                center-1,
                center,
                center+1,
                -1,
                props.totalpages
            ];
        }else{
            let result:number[] = [];
            for(let x=1;x<=props.totalpages;x++){
                result.push(x);
            }
            return result;
        }
    });

    const moveBack = function () {
        if (!DisablePrevious)
            emit('moveBack');
    };
    const moveForward = function () {
        if (!DisableNext)
            emit('moveForward');
    };
    const goToPage = function(page:number){
        emit('goToPage',page);
    }
</script>

<style>
    .pagination a {
        text-decoration: none !important;
    }
</style>