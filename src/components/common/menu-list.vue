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
        <slot/>
    </ul>
</template>
<script lang="ts" setup>
    import { ParentMenuItem } from './typeDefinitions';
    import { Sizes } from '../enums';
    import Icon from './icon.vue';
    import Progress from './progress.vue';
    import Promised from './Promised.vue';
    import MenuEntry from './menu-entry.vue';

    const props = defineProps<{
        items:Promise<ParentMenuItem[]>|ParentMenuItem[]|null
    }>();

    const processClick = (item:ParentMenuItem):void=>{
        if (item.onClick!==undefined){
            item.onClick();
        }
    }
</script>