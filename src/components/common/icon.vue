<template>
    <i :class="clazz" />
</template>

<script lang="ts">
    import { css } from '../utilities.js';
    import { computed,onMounted,inject } from 'vue';
    import {IconSizes} from '../enums';

    const urlBase:string = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/';
    const brandsUrl:string = `${urlBase}brands.min.css`;
    const brandsId:string = 'brands_style_sheet';

    css([
        `${urlBase}all.min.css`
    ]);

    const reg = /\.fa-([^: ]+):before/g;
    const brands = [];

    if (!document.getElementById(brandsId)) {
        let el = document.createElement('style');
        el.setAttribute('type', 'text/css');
        el.setAttribute('server_path', brandsUrl);
        el.setAttribute('id', brandsId);
        document.head.appendChild(el);
        fetch(brandsUrl)
            .then(result => {
                if (result.ok) {
                    result.text().then(content => {
                        [...content.matchAll(reg)].forEach(match => {
                            brands.push(match[1]);
                        });
                        el.innerText = content;
                    });
                }
            });
    }
</script>

<script lang="ts" setup>
    const props = defineProps<{
        icon:string,
        size?:IconSizes
    }>();

    const IconSet = inject<string>('IconSet');

    const clazz = computed(() => {
        let results = [];
        if (props.icon !== undefined && props.icon !== null) {
            if (brands.indexOf(props.icon) >= 0) {
                results.push('fa-brands');
            } else {
                results.push('fa-ico');
                if (IconSet !== undefined && IconSet != null) {
                    results.push('fa-' + IconSet);
                } else {
                    results.push('fa-solid');
                }
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

    onMounted(()=>css(`${urlBase}${IconSet??'solid'}.min.css`));
</script>

<style>
    .fa-ico.fa-md {
        font-size: 15px !important;
    }
</style>