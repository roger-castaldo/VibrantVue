<template>
    <Button v-bind="Properties" @click="emit('click')"/>
</template>

<script lang="ts">
    import translate from '../../messages/messages';
    import Button from './button.vue';
    import {computed,inject} from 'vue';
    import {ColorTypes} from '../enums';
    import { useLanguage } from '../shared';
import { IButtonBasicProperties, IButtonProperties } from './typeDefinitions';
</script>

<script lang="ts" setup>
    const emit = defineEmits<{
        click: []
    }>();
    const props = defineProps<IButtonBasicProperties>();
    const Language = useLanguage(inject);
    const Properties = computed<IButtonProperties>(()=>{
        return props||{
            title:translate('Button.Disable',Language),
            icon:'times-circle',
            type:ColorTypes.danger
        };
    });
</script>