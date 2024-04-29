<template>
    <nav :class="['navbar',props.fixed_position,(props.color!==undefined&&props.color!==null ? `is-${props.color}` : '')]" role="navigation" :aria-label="props.ariaLabel">
        <div class="navbar-brand">
            <slot name="brand"/>
            <a role="button" :class="['navbar-burger',(isActive?'is-active':'')]" aria-label="menu" :aria-expanded="(isActive?'true':'false')" @click="isActive=!isActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div :class="['navbar-menu',(isActive?'is-active':'')]">
            <div class="navbar-start" v-if="props.start_items!==undefined">
                <Promised :promise="props.start_items">
                    <template v-slot="{response}">
                        <NavBarMenuItem v-for="item in (response as ParentMenuItem[])"
                            v-bind="item"
                            @itemClicked="isActive=false"/>
                    </template>
                    <template #pending>
                        <div style="width:100px;">
                            <Progress :size="Sizes.small"/>
                        </div>
                    </template>
                </Promised>
            </div>
            <div class="navbar-end" v-if="props.end_items!==undefined">
                <Promised :promise="props.end_items">
                    <template v-slot="{response}">
                        <NavBarMenuItem v-for="item in (response as ParentMenuItem[])"
                            v-bind="item"
                            @itemClicked="isActive=false"/>
                    </template>
                    <template #pending>
                        <div style="width:100px;">
                            <Progress :size="Sizes.small"/>
                        </div>
                    </template>
                </Promised>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import 'jquery';
    import {onMounted, withDefaults,ref} from 'vue';
    import { FixedNavBarPositions,Sizes,ColorTypes } from '../enums';
    import type { ParentMenuItem } from './typeDefinitions';
    import Promised from './Promised.vue';
    import NavBarMenuItem from './navbar-item.vue'
    import Progress from './progress.vue';
</script>

<script lang="ts" setup>

    const props = withDefaults(defineProps<{
        start_items?:Promise<ParentMenuItem[]>|ParentMenuItem[],
        end_items?:Promise<ParentMenuItem[]>|ParentMenuItem[],yeah
        fixed_position?:FixedNavBarPositions|null,
        ariaLabel?:string,
        color?:ColorTypes
    }>(),{
        fixed_position:null,
        ariaLabel:'navigation'
    });

    const isActive = ref<boolean>(false);

    const processClick = (onClick?:()=>void) : void =>{
        isActive.value=false;
        if (onClick!==undefined){
            onClick();
        }
    };

    onMounted(()=>{
        if (props.fixed_position){
            switch(props.fixed_position){
                case FixedNavBarPositions.top:
                    if (!$(document.body).hasClass('has-navbar-fixed-top')){
                        $(document.body).addClass('has-navbar-fixed-top')
                    }
                break;
                case FixedNavBarPositions.bottom:
                    if (!$(document.body).hasClass('has-navbar-fixed-bottom')){
                        $(document.body).addClass('has-navbar-fixed-bottom')
                    }
                break;
            }
        }
    });
</script>