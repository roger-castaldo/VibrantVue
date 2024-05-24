<template>
    <component :is="(numbered==null||numbered==undefined||!numbered ? 'ul' : 'ol')" :class="classes">
        <li v-for="item in Items" :class="item.classes">
            <span class="icon is-clickable" v-if="item.icon" @click="invokeClick(item)">
                <Icon :icon="item.icon"/>
            </span>
            <!--
                @slot A slot for each list item defined.  The name is either the name supplied of item-{index}
            -->
            <slot :name="item.name"/>
        </li>
    </component>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import { IListProperties } from './interfaces';
    import {ListItem} from './typesDefinitions';
    import Icon from '../common/icon.vue';

    type definedListItem = {
        name:string,
        classes:string[],
        icon?:string,
        onClick?:()=>void
    }

    interface IFullListProperties extends IListProperties{
        /**
         * Indicates if the list should be numbered
         */
        numbered?:boolean,
        /**
         * The items to contain within the list
         */
        items:ListItem[]
    }
</script>

<script lang="ts" setup>
/**
 * A stylized list
 * 
 * @displayName List
 */
    const props = defineProps<IFullListProperties>();

    const classes = computed<string[]>(() => {
        var ret = ['block-list', 'has-radius', `is-${props.type??'primary'}`];
        if (props.compact) {
            ret.push('is-small');
        }
        if (props.outlined) {
            ret.push('is-outlined');
        }
        if (props.highlighted) {
            ret.push('is-highlighted');
        }
        return ret;
    });
    const Items = computed<definedListItem[]>(()=>{
        return props.items.map((li,index)=>{
            let itemClasses:string[] = [];
            if (li.type){itemClasses.push(`is-${li.type}`);}
            if (li.outlined){itemClasses.push('is-outlined');}
            if (li.highlighted){itemClasses.push('has-icon');}
            if (li.icon){itemClasses.push('has-icon');}
            return {
                name:li.name??`item-${index}`,
                classes:itemClasses,
                onClick:li.onClick,
                icon:li.icon
            };
        });
    });
    const invokeClick = (item:definedListItem):void => {
        if (item.onClick){item.onClick();}
    };
</script>