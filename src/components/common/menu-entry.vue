<template>
    <li>
        <a :href="props.href" @click="processClick()" :class="(props.active?'is-active':'')">
            <span v-if="props.icon!==undefined && props.icon!==null" class="icon-text">
                <span class="icon">
                    <Icon :icon="props.icon"/>
                </span>
                <span>
                    {{ props.title }}
                </span>
            </span>
            <span v-else>
                {{ props.title }}
            </span>
            <!--
                @slot Content of the menu entry if something beyond a title and icon is desired
            -->
            <slot/>
        </a>
        <!--
            @slot Used to contain all child menu entries, if desired
        -->
        <slot name="children"/>
    </li>
</template>

<script lang="ts" setup>
/**
 * This is used to supply menu entries into the Menu component
 * 
 * @displayName MenuEntry
 * @link https://bulma.io/documentation/components/menu/
 */
    import Icon from './icon.vue';
    import { MenuItem } from './typeDefinitions';

    const props = defineProps<MenuItem>();
    
    const processClick = ():void=>{
        if (props.onClick!==undefined){
            props.onClick();
        }
    }
</script>