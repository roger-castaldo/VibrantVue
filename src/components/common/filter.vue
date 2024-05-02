<template>
    <div class="control has-icons-left">
        <input type="text" class="input is-expanded is-rounded" :placeholder="Filter" v-model="filter" @keypress="FilterKeyPress">
        <span class="icon is-small is-left">
            <Icon icon="filter"/>   
        </span>
    </div>
</template>

<script lang="ts">
    import { onMounted, ref, watch, computed,inject } from 'vue';
    import Icon from './icon.vue';
    import translate from '../../messages/messages.js';
import { useLanguage } from '../shared';
</script>

<script lang="ts" setup>
    const props = defineProps<{
        default_value?:string
    }>();

    const emit = defineEmits<{
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
