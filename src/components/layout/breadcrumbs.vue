<template>
    <nav :class="Class" aria-label="breadcrumbs">
        <ul>
            <slot/>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
    import {computed} from 'vue';
    import {BreadCrumbAlignments,Sizes,BreadCrumbSeperators} from '../enums';

    const props = withDefaults(defineProps<{
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
</script>