<template>
    <div class="field">
        <p class="control has-icons-left">
            <input role="searchbox" type="text" class="input is-expanded is-rounded" :placeholder="Filter" v-model="filter" @keypress="FilterKeyPress">
            <span class="icon is-small is-left">
                <Icon icon="filter" :size="IconSizes.small"/>   
            </span>
        </p>
    </div>
</template>

<script lang="ts">
    import { onMounted, ref, watch, computed,inject } from 'vue';
    import Icon from './icon.vue';
    import translate from '../../messages/messages.js';
    import { useLanguage } from '../shared';
    import { IconSizes } from '../../enums';
</script>

<script lang="ts" setup>
/**
 * This is a built form style component used to create a basic filter input
 * @displayName Filter
 * @link https://bulma.io/documentation/form/input/
 * @link_title Based Off Bulma Component
 */
    const props = defineProps<{
        /**
         * The default value to set the filter to when it is cleared
         */
        default_value?:string
    }>();

    const emit = defineEmits<{
        /**
         * When a filter is triggered this event will emit supplying the value or null
         */
        filter:[value:string|null]
    }>();

    const Language = useLanguage(inject);
    const Filter = computed<string>(()=>translate('Filter.Filter',Language));

    const filter = ref<string|null>(null);

    watch([filter], (val) => {
        if (val[0] === '') {
            if (props.default_value) {
                filter.value = props.default_value;
                emit('filter', (filter.value == '' ? null : filter.value));
            }
        }
    });

    const FilterKeyPress = (event:any) => {
        if (event.keyCode == 13) {
            emit('filter', (filter.value == '' ? null : filter.value));
        }
    };

    onMounted(()=>{
        if (props.default_value) {
            filter.value = props.default_value;
        }
    });
</script>
