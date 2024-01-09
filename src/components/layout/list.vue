<template>
    <component v-bind:is="(numbered==null||numbered==undefined||!numbered ? 'ul' : 'ol')" v-bind:class="classes">
        <slot/>
    </component>
</template>

<script lang="ts">
    import { computed } from 'vue';
import { ColorTypes } from '../enums';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        type?:ColorTypes,
        numbered?:boolean,
        compact?:boolean,
        outlined?:boolean,
        highlighted?:boolean
    }>();

    const classes = computed<string[]>(() => {
        var ret = ['block-list', 'has-radius', `is-${props.type??'primary'}`];
        if (props.compact) {
            ret.push('is-small');
        }
        if (props.outlined) {
            ret.push('is-outlined');
        }
        if (props.highlighted) {
            ret.push('is-highlighted');
        }
        return ret;
    });
</script>