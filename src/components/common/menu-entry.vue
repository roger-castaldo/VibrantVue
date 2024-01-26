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
            <slot/>
        </a>
        <slot name="children"/>
    </li>
</template>

<script lang="ts" setup>
    import Icon from './icon.vue';
    import { MenuItem } from './typeDefinitions';

    const props = defineProps<MenuItem>();
    
    const processClick = ():void=>{
        if (props.onClick!==undefined){
            props.onClick();
        }
    }
</script>