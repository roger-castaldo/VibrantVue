<template>
    <i :class="clazz" />
</template>

<script lang="ts">
    import { computed,watch,inject,ref } from 'vue';
    import {IconSizes} from '../../enums';
    import { useFontAwesome, useIconSet } from '../shared';

    const brandsUrl:string = `brands.min.css`;
    const allUrl:string = `all.min.css`;
    const brandsId:string = 'icon_styles';

    const reg = /\.fa-([^: ]+):before/g;
    const urlReg = /url\(([^)]+)\)/g;
    const brands = ref<string[]>([]);
    const loading = ref<boolean>(false);
    
    const loadStyles = async (urlBase:string,iconSet:string) : Promise<void> =>{
        if (!loading.value){
            loading.value=true;
            let el:HTMLStyleElement;
            if (brands.value.length===0){
                el = document.createElement('style') as HTMLStyleElement;
                el.setAttribute('id',brandsId);
                document.head.appendChild(el);
                el.setAttribute('type', 'text/css');
            }else{
                el = document.getElementById(brandsId) as HTMLStyleElement;
            }
            brands.value=[' '];
            let results = await Promise.all([
                fetch(`${urlBase}${brandsUrl}`),
                fetch(`${urlBase}${allUrl}`),
                fetch(`${urlBase}${iconSet}.min.css`)
            ]);
            let content:string = await results[0].text();
            [...content.matchAll(reg)].forEach(match => {
                brands.value.push(match[1]);
            });
            content = `${await results[1].text()}
    ${await results[2].text()}
    ${content}`;
            [...content.matchAll(urlReg)].forEach(match=>{
                content=content.replace(match[0],`url(${new URL(match[1],urlBase)})`);
            });
            el.innerText=content;
            brands.value.splice(0,1);
            loading.value=false;
        }
    };
</script>

<script lang="ts" setup>
/**
 * This is used to add an icon on the screen from the font-awesome icon set
 * If you desire to change the font awesome cdn version, inject FontAwesomeCDN
 * If you desire to change the font awesome iconset to use, default is solid, inject IconSet
 * 
 * @displayName Icon
 */
    const urlBase = useFontAwesome(inject);
    const iconSet = useIconSet(inject);

    if(brands.value.length===0){
        loadStyles(urlBase,iconSet.value);
    }else{
        watch(iconSet,()=>loadStyles(urlBase,iconSet.value));
    }
    
    const props = defineProps<{
        /**
         * The icon name to use from font awesome
         */
        icon:string,
        /**
         * The size of the icon
         */
        size?:IconSizes
    }>();

    const clazz = computed(() => {
        let results = [];
        if (props.icon !== undefined && props.icon !== null) {
            if (brands.value.indexOf(props.icon) >= 0) {
                results.push('fa-brands');
            } else {
                results.push('fa-ico');
                results.push(`fa-${iconSet.value}`);
            }
            results.push((props.icon.indexOf('fa-') == -1 ? ' fa-' : ' ') + props.icon);
        }
        if (props.size !== undefined && props.size !== null && props.size!==IconSizes.normal) {
            results.push(`fa-${props.size}`);
        }
        return results;
    });
</script>

<style>
    .fa-ico.fa-md {
        font-size: 15px !important;
    }
</style>../../enums