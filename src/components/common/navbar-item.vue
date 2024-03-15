<template>
    <component :is="(props.childItems!==undefined ? 'div' : 'a')" :class="['navbar-item',(props.active?'is-active':''),(props.childItems!==undefined?'has-dropdown is-hoverable':'')]" :href="props.href" @click="processClick">
        <template v-if="props.childItems!==undefined" class="navbar-link">
            <a class="navbar-link">
                <span v-if="props.icon!==undefined && props.icon!==null" class="icon-text">
                    <span class="icon">
                        <Icon :icon="props.icon"/>
                    </span>
                    <span>{{ props.title }}</span>
                </span>
                <span v-else>{{ props.title }}</span>
            </a>
        </template>
        <template v-else>
            <span v-if="props.icon!==undefined && props.icon!==null" class="icon-text">
                <span class="icon">
                    <Icon :icon="props.icon"/>
                </span>
                <span>{{ props.title }}</span>
            </span>
            <span v-else>{{ props.title }}</span>
        </template>
        <div class="navbar-dropdown" v-if="props.childItems!==undefined">
            <navbar-item v-for="child in props.childItems" v-bind="child" @itemClicked="emit('itemClicked')"/>
        </div>
    </component>
</template>

<script lang="ts">
    import { ParentMenuItem } from './typeDefinitions';
    import Icon from './icon.vue';

</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<ParentMenuItem>(),{
        active:false
    });

    const processClick = ():void=>{
        emit('itemClicked');
        if (props.onClick!==undefined){
            props.onClick();
        }
    };

    const emit = defineEmits<{
        itemClicked:[]
    }>();
</script>