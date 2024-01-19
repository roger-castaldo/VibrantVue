<template>
    <aside :class="['menu',(props.fixedPosition!==undefined ? `is-fixed-menu is-fixed-menu-${props.fixedPosition}`:'')]">
        <slot/>
    </aside>
</template>
<script lang="ts" setup>
import { FixedMenuPositions } from '../enums';

    const props = defineProps<{
        fixedPosition?:FixedMenuPositions
    }>();
</script>