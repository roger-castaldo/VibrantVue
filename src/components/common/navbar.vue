<template>
    <nav :class="['navbar',props.fixed_position,(props.color!==undefined&&props.color!==null ? `is-${props.color}` : '')]" role="navigation" :aria-label="props.ariaLabel">
        <div class="navbar-brand">
            <!--
                @slot houses a brand identifier if desired
            -->
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
    import {onMounted, ref} from 'vue';
    import { FixedNavBarPositions,Sizes,ColorTypes } from '../../enums';
    import type { ParentMenuItem } from './typeDefinitions';
    import Promised from './Promised.vue';
    import NavBarMenuItem from './navbar-item.vue'
    import Progress from './progress.vue';
</script>

<script lang="ts" setup>
/**
 * Used to supply a Nav Bar component ment for menu navigation
 * 
 * @displayName NavBar
 * @link https://bulma.io/documentation/components/navbar/
 */
    const props = withDefaults(defineProps<{
        /**
         * The menu items to appear at the start of the nav bar (left)
         */
        start_items?:Promise<ParentMenuItem[]>|ParentMenuItem[],
        /**
         * The menu items to appear at the end of the nav bar (right)
         */
        end_items?:Promise<ParentMenuItem[]>|ParentMenuItem[],
        /**
         * If desired to affix the menu to a given position on the screen
         */
        fixed_position?:FixedNavBarPositions|null,
        /**
         * The aria label to use for the nav bar
         */
        ariaLabel?:string,
        /**
         * The color to use for the nav bar
         */
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
            let classCheck = '';
            switch(props.fixed_position){
                case FixedNavBarPositions.top:
                    classCheck='has-navbar-fixed-top';
                    break;
                case FixedNavBarPositions.bottom:
                    classCheck = 'has-navbar-fixed-bottom';
                    break;
            }
            if (classCheck!==''){
                if (!document.body.classList.contains(classCheck)) {
                    document.body.classList.add(classCheck);
                }
            }
        }
    });
</script>