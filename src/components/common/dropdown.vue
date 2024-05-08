<template>
    <div :class="Classes">
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" :aria-controls="menuID" @click="isActive=true">
                <span>{{props.title}}</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu" :id="menuID" role="menu">
            <div class="dropdown-content" v-for="block in Blocks">
                <template v-for="content,index in block.children">
                    <hr class="dropdown-divider" v-if="index>0"/>
                    <component v-for="entry in content" 
                        :is="(entry instanceof String ? 'div' : 'a')"
                        :class="GetItemClasses(entry)"
                        :href="GetItemURL(entry)"
                        @click="ProcessItemClick(entry)">
                        <p v-if="entry instanceof String">{{entry}}</p>
                        {{(entry instanceof String ? null : (entry as DropDownItem).title)}}
                    </component>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { MaybeRef,computed,toValue,ref} from 'vue';
    import { DropDownBlock, DropDownItem } from './typeDefinitions';
    import { generateUUID } from '../utilities';

    const menuID:string = generateUUID();

    const props = defineProps<{
        title:MaybeRef<string>,
        items:MaybeRef<DropDownBlock[]|DropDownBlock>,
        is_hoverable?:boolean,
        is_right_align?:boolean,
        drops_up?:boolean
    }>();

    const isActive=ref(false);

    const Classes = computed<string[]>(()=>{
        let results:string[] = ['dropdown'];
        if (props.is_hoverable){results.push('is-hoverable');}
        if (props.is_right_align){results.push('is-right');}
        if (props.drops_up){results.push('is-up');}
        if (isActive.value){results.push('is-active');}
        return results;
    });
    const Blocks = computed<DropDownBlock[]>(()=>{
        let result = toValue(props.items);
        return (Array.isArray(result) ? result : [result]);
    });

    const GetItemClasses = (entry:string|DropDownItem):string[]=>{
        let result:string[] = ['dropdown-item'];
        if (!(entry instanceof String)){
            let item = entry as DropDownItem;
            if (item.active){result.push('is-active');}
        }
        return result;
    }
    const GetItemURL = (entry:string|DropDownItem):string|undefined=>{
        if (!(entry instanceof String)){
            let item = entry as DropDownItem;
            return item.href;
        }
        return undefined;
    }
    const ProcessItemClick = (entry:string|DropDownItem):void=>{
        if (!(entry instanceof String)){
            isActive.value=false;
            let item = entry as DropDownItem;
            if (item.onClick){item.onClick();}
        }
    }
</script>