<template>
    <ul class="menu-list">
        <Promised :promise="props.items">
            <template v-slot="{response}">
                <li v-for="item in (response as ParentMenuItem[])">
                    <a :href="item.href" @click="processClick(item)" :class="(item.active?'is-active':'')">
                        <span v-if="item.icon!==undefined && item.icon!==null" class="icon-text">
                            <span class="icon">
                                <Icon :icon="item.icon"/>
                            </span>
                            <span>{{ item.title }}</span>
                        </span>
                        <span v-else>{{ item.title }}</span>
                    </a>
                    <menu-list v-if="item.childItems!==undefined" :items="item.childItems"/>
                </li>
            </template>
            <template #pending>
                <li>
                    <Progress :size="Sizes.small"/>
                </li>
            </template>
        </Promised>
    </ul>
</template>
<script lang="ts" setup>
    import { ParentMenuItem } from './typeDefinitions';
    import { Sizes } from '../enums';
    import Icon from './icon.vue';
    import Progress from './progress.vue';
    import Promised from './Promised.vue';

    const props = defineProps<{
        items:Promise<ParentMenuItem[]>|ParentMenuItem[]
    }>();

    const processClick = (item:ParentMenuItem):void=>{
        if (item.onClick!==undefined){
            item.onClick();
        }
    }
</script>