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
        <template v-if="props.total_pages!==undefined">
            <ul class="pagination-list">
                <li v-for="page in Pages">
                    <span v-if="page===-1" class="pagination-ellipsis">&hellip;</span>
                    <a v-else :class="(page===-1 ? ['pagination-ellipsis'] : ['pagination-link',(page===currentPage ? 'is-current' : '')])"
                        :aria-label="(page===-1 ? '' : `${GoToPage} ${page}`)"
                        @onclick="goToPage(page)">{{(page===-1?'':page)}}
                    </a>
                </li>
            </ul>
        </template>
    </nav>
</template>

<script lang="ts">
    import { computed, inject,toValue } from 'vue';
    import translate from '../../messages/messages.js';
    import Icon from './icon.vue';
    import { Sizes,IconSizes } from '../../enums';
    import { useLanguage } from '../shared';
    import { IPaginationProperties } from './typeDefinitions';
</script>

<script lang="ts" setup>
/**
 * Used to supply a pagination control
 * 
 * @displayName Pagination
 * @link https://bulma.io/documentation/components/pagination/
 */
    const props = withDefaults(defineProps<IPaginationProperties>(),{
        usenext:true,
        size:Sizes.small,
        rounded:false ,
        has_previous:undefined,
        has_more:undefined,
        zero_page_index:true
    });

    const emit = defineEmits<{
        /**
         * Emitted when the Move Forward button is clicked
         */
        moveForward:[],
        /**
         * Emitted when the Move Back button is clicked
         */
        moveBack:[],
        /**
         * Emitted when a given page number is clicked
         */
        goToPage:[page:number]
    }>();

    const Language = useLanguage(inject);

    const Previous = computed<string>(()=>translate((props.usenext ? 'Pagination.Previous' : 'Pagination.Older'),Language));
    const Next = computed<string>(()=>translate((props.usenext ? 'Pagination.Next' : 'Pagination.Newer'),Language));
    const ButtonClass = computed<string>(()=>props.button_type ? `has-background-${props.button_type}` : '');
    const GoToPage = computed<string>(()=>translate('Pagination.GoToPage',Language));

    const currentPage = computed<number>(()=>{
        if (props.current_page===undefined){
            return 0;
        }
        return toValue<number>(props.current_page) + (props.zero_page_index? 1 : 0);
    });

    const HasPrevious = computed<boolean>(() => (props.has_previous??false) 
        || (currentPage.value>0));
    const HasNext = computed<boolean>(() => (props.has_more??false) 
        || (currentPage.value<((props.total_pages===undefined?0:toValue<number>(props.total_pages)))));

    const Pages = computed<number[]>(()=>{
        if (props.total_pages===undefined||props.current_page===undefined){
            return [];
        }else if(toValue<number>(props.total_pages)>5){
            let center:number = Math.max((props.current_page===undefined ? Math.floor(toValue<number>(props.total_pages)/2) : currentPage.value),3);
            if ((toValue<number>(props.total_pages)-currentPage.value)===0){
                center-=2;
            }
            else if ((toValue<number>(props.total_pages)-currentPage.value)===1){
                center--;
            }
            console.log(center);
            return [
                1,
                -1,
                center-1,
                center,
                center+1,
                -1,
                toValue<number>(props.total_pages)
            ];
        }else{
            let result:number[] = [];
            for(let x=1;x<=toValue<number>(props.total_pages);x++){
                result.push(x);
            }
            return result;
        }
    });

    const moveBack = function () {
        if (HasPrevious){
            if (props.current_page!==null){
                emit('goToPage',toValue<number>(props.current_page)-1);
            }else{
                emit('moveBack');
            }
        }
    };
    const moveForward = function () {
        if (HasNext){
            if (props.current_page!==null){
                emit('goToPage',toValue<number>(props.current_page)+1);
            }else{
                emit('moveForward');
            }
        }
    };
    const goToPage = function(page:number){
        emit('goToPage',(props.zero_page_index?page-1:page));
    }
</script>

<style>
    .pagination a {
        text-decoration: none !important;
    }
</style>