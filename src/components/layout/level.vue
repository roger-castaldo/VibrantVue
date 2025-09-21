<template>
    <nav class="level" :aria-label="props.aria_label">
        <div class="level-left" v-if="props.left_slots">
            <template v-for="name in props.left_slots">
                <div class="level-item" v-if="slots[name]">
                    <!--
                        @slot The dynamically produced slot for each left slot
                    -->
                    <slot :name="name"/>
                </div>
            </template>
        </div>
        <template v-if="props.slots">
            <template v-for="name in props.slots">
                <div class="level-item" v-if="slots[name]">
                    <!--
                        @slot The dynamically produced slot for each slot
                    -->
                    <slot :name="name"/>
                </div>
            </template>
        </template>
        <div class="level-right" v-if="props.right_slots">
            <template v-for="name in props.right_slots">
                <div class="level-item" v-if="slots[name]">
                    <!--
                        @slot The dynamically produced slot for each right slot
                    -->
                    <slot :name="name"/>
                </div>
            </template>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

/**
 * A multi-purpose horizontal level, which can contain almost any other element
 * 
 * @displayName Level
 * @link https://bulma.io/documentation/layout/level/
 */

    const props = defineProps<{
        aria_label:string,
        left_slots?:string[],
        right_slots?:string[],
        slots?:string[]
    }>();

    const slots = useSlots();
</script>