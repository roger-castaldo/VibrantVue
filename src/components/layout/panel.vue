<template>
    <div class="panel" :class="addons">
        <div class="panel-heading" v-if="slots.header" v-show="!(props.hidden_sections??[]).includes('header')">
            <!--
                @slot The header for the panel
            -->
            <slot name="header"/>
        </div>
        <div class="panel-tabs" v-if="slots.tabs" v-show="!(props.hidden_sections??[]).includes('tabs')">
            <!--
                @slot The tabs container for the panel
            -->
            <slot name="tabs"/>
        </div>
        <template v-for="name in BlockNames">
            <div class="panel-block" v-if="slots[name]"  v-show="!(props.hidden_sections??[]).includes(name)">
                <!--
                    @slot A slot named after the slots provided inside the block names.  If none are supplied default is the minimum.
                -->
                <slot :name="name"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import { computed,useSlots } from 'vue';
    import { ColorTypes } from '../../enums';
</script>

<script lang="ts" setup>
/**
 * A Panel component to use
 * 
 * @displayName Panel
 * @link https://bulma.io/documentation/components/panel/
 */
    const slots = useSlots();

    const props = defineProps<{
        /**
         * The color of the panel
         */
        type?:ColorTypes,
        /**
         * Panel blocks to supply via slot names, if not specified the minimal slot will be default
         */
        block_names?:string[],
        /**
         * Indicates if the width of the panel should be based on the content instead of a built in maximum
         */
        full_width?:boolean,
        /**
         * Indicates if the height of the panel should be based on the content instead of a built in maximum
         */
        full_height?:boolean,
        /**
         * The names of the panel blocks to hide
         */
        hidden_sections?:string[]
    }>();

    const BlockNames = computed<string[]>(() => props.block_names??['default']);

    const addons = computed<string[]>(() => {
        return [
            (props.type ? `is-${props.type}` : ''),
            (props.full_width ? 'is-fullwidth' : ''),
            (props.full_height ? 'is-fullheight' : '')
        ];
    });
</script>