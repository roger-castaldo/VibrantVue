<template>
    <Button v-bind="Properties" @click="emit('click')"/>
</template>

<script lang="ts">
    import translate from '../../../messages/messages';
    import Button from './button.vue';
    import {computed,inject} from 'vue';
    import {ColorTypes} from '../../../enums';
    import { useLanguage } from '../../shared';
import { IButtonBasicProperties, IButtonProperties } from '../typeDefinitions';
</script>

<script lang="ts" setup>
    /**
     * This is a specifically built version of the default button that is designed around a delete call
     * Uses trash-alt icon, danger color and Cancel for text
     * @displayName ButtonDelete
     */
     const emit = defineEmits<{
        /**
         * Emit a click even when the button is clicked
         */
        click: []
    }>();
    const props = defineProps<IButtonBasicProperties>();
    const Language = useLanguage(inject);
    const Properties = computed<IButtonProperties>(()=>{
        return {
            title:translate('Button.Delete',Language),
            icon:'trash-alt',
            type:ColorTypes.danger
        }||props;
    });
</script>