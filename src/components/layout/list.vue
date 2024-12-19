<template>
    <component :is="(numbered==null||numbered==undefined||!numbered ? 'ul' : 'ol')" :class="Classes">
        <slot v-if="Items===null"/>
        <template v-else>
            <template v-for="item in Items">
                <li :class="item.classes" v-if="slots[item.name]!==undefined||slots[item.name]!==null||item.icon!==undefined" @click="invokeClick(item)">
                    <span class="icon" v-if="item.icon">
                        <Icon :icon="item.icon"/>
                    </span>
                    <!--
                        @slot A slot for each list item defined.  The name is either the name supplied of item-{index}
                    -->
                    <slot :name="item.name"/>
                </li>
            </template>
        </template>
    </component>
</template>

<script lang="ts">
    import { computed, useSlots } from 'vue';
    import { IListProperties } from './interfaces';
    import {ListItem} from './typeDefinitions';
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
         * The items to contain within the list.  If not supplied use li elements within.
         */
        items?:ListItem[]
    }
</script>

<script lang="ts" setup>
/**
 * A stylized list
 * 
 * @displayName List
 * @link https://github.com/chrisrhymes/bulma-block-list
 */
    const props = defineProps<IFullListProperties>();

    const slots = useSlots();

    const Classes = computed<string[]>(() => {
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
    const Items = computed<definedListItem[]|null>(()=>{
        if (props.items){
            return props.items.map((li,index)=>{
                return {
                    name:li.name??`item-${index}`,
                    classes:[
                        (li.type?`is-${li.type}`:''),
                        (li.outlined?'is-outlined':''),
                        (li.highlighted?'is-highlighted':''),
                        (li.icon?'has-icon':''),
                        (li.onClick?'is-clickable':'')
                    ],
                    onClick:li.onClick,
                    icon:li.icon
                };
            });
        }
        return null;
    });
    const invokeClick = (item:definedListItem):void => {
        if (item.onClick){item.onClick();}
    };
</script>