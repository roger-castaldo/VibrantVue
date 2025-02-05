<template>
    <div :class="Classes">
        <ul>
            <Promised :promise="props.tabs">
                <template v-slot="{response}">
                    <li v-for="tab in (response as Tab[])" :class="{'is-active':tab.active}">
                        <a :href="tab.href" @click="tabClicked($event,tab)">
                            <span v-if="tab.icon" class="icon is-small">
                                <Icon :icon="tab.icon"/>
                            </span>
                            <span>{{tab.title}}</span>
                        </a>
                    </li>
                </template>
                <template #pending>
                    <li style="width:100px;">
                        <Progress :size="Sizes.small"/>
                    </li>
                </template>
            </Promised>
        </ul>
    </div>
</template>

<script lang="ts" setup>
/**
 * A Tabs component to use (Tab Navigation)
 * 
 * @displayName Tabs
 * @link https://bulma.io/documentation/components/tabs/
 */
    import {Icon,Promised, Progress} from '../common/';
    import {computed} from 'vue';
    import { TabAlignments, TabStyles,Sizes } from '../../enums';
    import {Tab} from './interfaces';

    const props = withDefaults(defineProps<{
        /**
         * The tabs to be defined 
         */
        tabs:Tab[]|Promise<Tab[]>,
        /**
         * The alignment of the tabs
         */
        alignment?:TabAlignments,
        /**
         * The color styling for the tabs
         */
        type?:TabStyles,
        /**
         * Indicates if the width should just be max and not based on the content
         */
        full_width?:boolean
    }>(),{
        alignment:TabAlignments.left
    });

    const Classes = computed<string[]>(()=>{
        return [
            'tabs',
            `is-${props.alignment}`,
            (props.type?`is-${props.type}`:''),
            (props.full_width?'is-fullwidth':'')
        ];
    });

    const tabClicked = (event:any,tab:Tab):void=> {
        if ((tab.href === null || tab.href === undefined)
            && tab.onClick!==undefined) {
            event.preventDefault();
            tab.onClick();
        }
    }
</script>