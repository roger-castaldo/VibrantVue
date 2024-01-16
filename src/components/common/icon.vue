<template>
    <i :class="clazz" />
</template>

<script lang="ts">
    import { css } from '../utilities.js';
    import { computed,onMounted,inject,ref } from 'vue';
    import {IconSizes} from '../enums';
    import { useFontAwesome, useIconSet } from '../shared';

    const brandsUrl:string = `brands.min.css`;
    const brandsId:string = 'brands_style_sheet';

    const reg = /\.fa-([^: ]+):before/g;
    const brands = ref<string[]>([]);
    const urlReg = /url\(([^)]+)\)/g;

</script>

<script lang="ts" setup>
    const urlBase = useFontAwesome(inject);

    css([
        `${urlBase}all.min.css`
    ]);

    if (!document.getElementById(brandsId)) {
        let el = document.createElement('style');
        el.setAttribute('id', brandsId);
        document.head.appendChild(el);
        el.setAttribute('type', 'text/css');
        el.setAttribute('server_path', `${urlBase}${brandsUrl}`);
        fetch(`${urlBase}${brandsUrl}`)
            .then(result => {
                if (result.ok) {
                    result.text().then(content => {
                        [...content.matchAll(reg)].forEach(match => {
                            brands.value.push(match[1]);
                        });
                        [...content.matchAll(urlReg)].forEach(match=>{
                            content=content.replace(match[0],`url(${new URL(match[1],urlBase)})`);
                        });
                        el.innerText=content;
                    });
                }
            });
    }

    const props = defineProps<{
        icon:string,
        size?:IconSizes
    }>();

    const IconSet = useIconSet(inject);

    const clazz = computed(() => {
        let results = [];
        if (props.icon !== undefined && props.icon !== null) {
            if (brands.value.indexOf(props.icon) >= 0) {
                results.push('fa-brands');
            } else {
                results.push('fa-ico');
                results.push(`fa-${IconSet.value}`);
            }
        }
        if (props.icon !== undefined && props.icon !== null) {
            results.push((props.icon.indexOf('fa-') == -1 ? ' fa-' : ' ') + props.icon);
        }
        if (props.size !== undefined && props.size !== null && props.size!==IconSizes.normal) {
            switch(props.size){
                case IconSizes.xxsmall:results.push('fa-2xs');break;
                case IconSizes.xsmall:results.push('fa-xs');break;
                case IconSizes.small:results.push('fa-sm');break;
                case IconSizes.large:results.push('fa-lg');break;
                case IconSizes.xlarge:results.push('fa-xl');break;
                case IconSizes.xxlarge:results.push('fa-2xl');break;
            }
        }
        return results;
    });

    onMounted(()=>css(`${urlBase}${IconSet.value}.min.css`));
</script>

<style>
    .fa-ico.fa-md {
        font-size: 15px !important;
    }
</style>