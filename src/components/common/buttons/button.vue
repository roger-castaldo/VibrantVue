<template>
    <button :class="Classes" :disabled="props.disabled" @click="emit('click')">
        <span :class="['icon',
            (props.size === Sizes.small ? 'is-small' : ''),
            (props.size === Sizes.large ? 'is-medium' : '')
        ]" v-if="props.icon">
            <Icon :icon="props.icon"/>
        </span>
        <span v-if="props.title">{{props.title}}</span>
    </button>
</template>

<script lang="ts">
    import Icon from '../icon.vue';
    import {ColorTypes,Sizes} from '../../../enums';
    import {computed} from 'vue';
import { IButtonProperties } from '../typeDefinitions';
</script>

<script lang="ts" setup>
/**
 * This is a stylized and customizable button
 * @displayName Button
 * @link https://bulma.io/documentation/elements/button/
 */
    const props = withDefaults(defineProps<IButtonProperties>(),{
        type:ColorTypes.primary,
        size:Sizes.normal,
        hide_desktop:false,
        hide_mobile:false,
        hide_tablet:false,
        is_rounded:false,
        is_outlined:false,
        disabled:false
    });

    const emit = defineEmits<{
        /**
         * Emit a click even when the button is clicked
         */
        click: []
    }>();

    const Classes = computed<string[]>(()=>{
        return [
            'button',
            `is-${props.size??Sizes.normal}`,
            `is-${props.type??ColorTypes.primary}`,
            (props.disabled ? 'disabled' : ''),
            (props.is_rounded ? 'is-rounded' : ''),
            (props.hide_mobile ? 'is-hidden-mobile' : ''),
            (props.hide_tablet ? 'is-hidden-tablet-only' : ''),
            (props.hide_desktop ? 'is-hidden-desktop is-hidden-widescreen' : '' ),
            (props.is_outlined ? 'is-outlined' : '')
        ];
    });
</script>