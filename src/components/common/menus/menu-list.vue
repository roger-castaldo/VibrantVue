<template>
    <ul class="menu-list">
        <Promised :promise="props.items" v-if="props.items!==null">
            <template v-slot="{response}">
                <li v-for="item in (response as ParentMenuItem[])">
                    <MenuEntry v-bind="item"/>
                    <menu-list v-if="item.childItems!==undefined" :items="item.childItems"/>
                </li>
            </template>
            <template #pending>
                <li>
                    <Progress :size="Sizes.small"/>
                </li>
            </template>
        </Promised>
        <!--
            @slot Used to add custom content to a MenuList
        -->
        <slot/>
    </ul>
</template>
<script lang="ts" setup>
/**
 * This is used to supply a list of Menu Items to a Menu
 * 
 * @displayName MenuList
 * @link https://bulma.io/documentation/components/menu/
 */
    import { ParentMenuItem } from '../typeDefinitions';
    import { Sizes } from '../../../enums';
    import Progress from '../progress.vue';
    import Promised from '../Promised.vue';
    import MenuEntry from './menu-entry.vue';

    const props = defineProps<{
        /**
         * The Menu items for this list of menu entries
         */
        items:Promise<ParentMenuItem[]>|ParentMenuItem[]|null
    }>();

    const processClick = (item:ParentMenuItem):void=>{
        if (item.onClick!==undefined){
            item.onClick();
        }
    }
</script>