<template>
    <nav :class="['pagination','is-centered',ButtonClass,`is-${props.size}`,(props.rounded?'is-rounded':'')]" role="navigation" aria-label="pagination" v-show="HasPrevious||HasNext">
        <a :class="['pagination-previous',ButtonClass]"
           :title="Previous" @click="moveBack" :disabled="(HasPrevious?null:'disabled')">
           <Icon icon="backward" class="mr-1" :size="IconSizes.small"/>
            {{Previous}}
        </a>
        <a :class="['pagination-next',ButtonClass]"
           :title="Next" @click="moveForward" :disabled="(HasNext?null:'disabled')">
            {{Next}}
            <Icon icon="forward" class="ml-1" :size="IconSizes.small"/>
        </a>
        <template v-if="props.totalpages!==undefined">
            <ul class="pagination-list">
                <li v-for="page in Pages">
                    <span v-if="page===-1" class="pagination-ellipsis">&hellip;</span>
                    <a v-else :class="(page===-1 ? ['pagination-ellipsis'] : ['pagination-link',(page===props.currentpage+1 ? 'is-current' : '')])"
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
    import { Sizes,IconSizes } from '../enums';
    import { useLanguage } from '../shared';
    import { IPaginationProperties } from './typeDefinitions';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<IPaginationProperties>(),{
        usenext:true,
        size:Sizes.small,
        rounded:false ,
        hasprevious:undefined,
        hasmore:undefined
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

    const HasPrevious = computed<boolean>(() => ((props.hasprevious??false) || ((props.currentpage??0)>0)));
    const HasNext = computed<boolean>(() => ((props.hasmore??false) || ((props.currentpage??0)<(props.totalpages??0-1))));

    const Pages = computed<number[]>(()=>{
        if (props.totalpages===undefined||props.currentpage===undefined){
            return [];
        }else if(props.totalpages>5){
            let center:number = Math.max((props.currentpage===undefined ? Math.floor(props.totalpages/2) : props.currentpage),3);
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
        if (HasPrevious){
            if (props.currentpage!==null){
                emit('goToPage',props.currentpage-1);
            }else{
                emit('moveBack');
            }
        }
    };
    const moveForward = function () {
        if (HasNext){
            if (props.currentpage!==null){
                emit('goToPage',props.currentpage+1);
            }else{
                emit('moveForward');
            }
        }
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