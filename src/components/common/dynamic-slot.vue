<template>
    <component v-for="comp in components" :is="comp" v-bind="props.props"/>
</template>

<script lang="ts">
    import { ref,watch,computed,onMounted,ComputedRef } from 'vue';

    const reload = async (url:string,sortMethod?:(a:string,b:string)=>number,filterReg?:ComputedRef<RegExp>) : Promise<any[]> => {
        let imps = await import(url);
        const names = Object.keys(imps);
        if (sortMethod) {
            names.sort(sortMethod);
        }
        return names
            .filter(n=>filterReg===undefined||filterReg.value.test(n))
            .map(n=>{
                return imps[n];
            });
    };
</script>

<script lang="ts" setup>
    const components = ref<any[]|null>(null);

    const props = defineProps<{
        props?:any,
        url:string,
        filter?:string,
        sortMethod:(a:string,b:string)=>number
    }>();

    const FilterReg = computed<RegExp>(() => {
        return (props.filter == null || props.filter == undefined ? null : new RegExp('^' + props.filter.replaceAll('.', '\\.').replaceAll('*', '.+') + '$'));
    });

    watch([props.url,props.filter], async () => {
        components.value = await reload(props.url, props.sortMethod, FilterReg);
    });

    onMounted(async () => {
        components.value = await reload(props.url, props.sortMethod, FilterReg);
    });
</script>