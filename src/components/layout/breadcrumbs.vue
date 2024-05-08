<template>
    <nav :class="Class" aria-label="breadcrumbs">
        <ul v-if="props.breadCrumbs!==null">
            <li v-for="crumb in props.breadCrumbs" :class="{'is-active':crumb.active}">
                <a @click="processClick(crumb.onClick)">
                    <span :class="['icon',(crumb.onClick ? 'is-clickable' : '')]" v-if="crumb.icon">
                        <Icon :icon="crumb.icon" />
                    </span>
                    {{crumb.title}}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
    import {computed} from 'vue';
    import {BreadCrumbAlignments,Sizes,BreadCrumbSeperators} from '../enums';
    import {BreadCrumb} from './interfaces';
    import {Icon} from '../common/';

    const props = withDefaults(defineProps<{
        breadCrumbs:BreadCrumb[]|null
        alignment?:BreadCrumbAlignments,
        size?:Sizes,
        seperator?:BreadCrumbSeperators
    }>(),{
        alignment:BreadCrumbAlignments.left,
        size:Sizes.normal
    });

    const Class = computed<string[]>(()=>{
        let result:string[] = ['breadcrumb'];
        if (props.alignment && props.alignment!==BreadCrumbAlignments.left){
            result.push(`is-${props.alignment}`);
        }
        if (props.size && props.size!==Sizes.normal){
            result.push(`is-${props.size}`);
        }
        if (props.seperator){
            result.push(`has-${props.seperator}-seperator`);
        }
        return result;
    });

    const processClick = (onClick?:()=>void) : void =>{
        if (onClick!==undefined){
            onClick();
        }
    };
</script>