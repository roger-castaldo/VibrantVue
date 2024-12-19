<template>
    <component v-for="comp in components" :is="comp" v-bind="props.props"/>
</template>

<script lang="ts">
    import { ref,watch,computed,onMounted,ComputedRef } from 'vue';

    const reload = async (url:string,sortMethod?:(a:string,b:string)=>number,filterReg?:ComputedRef<RegExp|null>) : Promise<any[]> => {
        let imps = await import(url);
        const names = Object.keys(imps);
        if (sortMethod) {
            names.sort(sortMethod);
        }
        return names
            .filter(n=>filterReg===undefined||filterReg.value===null||filterReg.value.test(n))
            .map(n=>{
                return imps[n];
            });
    };
</script>

<script lang="ts" setup>
/**
 * This is used to dynamically load multiple components as a set of dynamic items
 * @displayName DynamicSlot
 */
    const components = ref<any[]|null>(null);

    const props = defineProps<{
        /**
         * The props to pass to all the loaded child components
         */
        props?:any,
        /**
         * The url to load the components from
         */
        url:string,
        /**
         * Used to filter out some of the loaded components by name
         */
        filter?:string,
        /**
         * The method used to sort the components
         * @param a the name of the first component
         * @param b the name of the next component
         */
        sortMethod:(a:string,b:string)=>number
    }>();

    const FilterReg = computed<RegExp|null>(() => {
        return (props.filter == null || props.filter == undefined ? null : new RegExp('^' + props.filter.replaceAll('.', '\\.').replaceAll('*', '.+') + '$'));
    });

    watch(()=>[props.url,props.filter], async () => {
        components.value = await reload(props.url, props.sortMethod, FilterReg);
    });

    onMounted(async () => {
        components.value = await reload(props.url, props.sortMethod, FilterReg);
    });
</script>