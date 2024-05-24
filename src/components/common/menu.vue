<template>
    <aside :class="['menu',(props.fixedPosition!==undefined ? `is-fixed-menu is-fixed-menu-${props.fixedPosition}`:'')]">
        <slot/>
    </aside>
</template>
<script lang="ts" setup>
/**
 * This is used to supply a side menu to your screen
 * 
 * @displayName Menu
 */
import { FixedMenuPositions } from '../../enums';

    const props = defineProps<{
        /**
         * Defines both if the menu is fixed and what position it is fixed in
         */
        fixedPosition?:FixedMenuPositions
    }>();
</script>