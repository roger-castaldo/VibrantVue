<template>
    <div :class="Classes">
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" :aria-controls="menuID" @click="isActive=!isActive">
                <span>{{props.title}}</span>
                <span class="icon is-small">
                    <Icon icon="angle-down" aria-hidden="true"/>
                </span>
            </button>
        </div>
        <div class="dropdown-menu" :id="menuID" role="menu">
            <div class="dropdown-content" v-for="block,index in Blocks">
                <hr class="dropdown-divider" v-if="index>0"/>
                <template v-for="entry in block.children">
                    <component :is="(typeof entry === 'string' ? 'div' : 'a')"
                        :class="GetItemClasses(entry)"
                        :href="GetItemURL(entry)"
                        @click="ProcessItemClick(entry)">
                        <p v-if="typeof entry === 'string'">{{entry}}</p>
                        {{(typeof entry === 'string' ? null : (entry as DropDownItem).title)}}
                    </component>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * This is used to create a drop down element
 * @displayName DropDown
 * @link https://bulma.io/documentation/components/dropdown/
 */
    import { MaybeRef,computed,toValue,ref} from 'vue';
    import { DropDownBlock, DropDownItem } from './typeDefinitions';
    import { generateUUID } from '../utilities';
    import Icon from './icon.vue';

    const menuID:string = generateUUID();

    const props = defineProps<{
        /**
         * The title of the drop down
         */
        title:MaybeRef<string>,
        /**
         * The dropdown menu items to use
         */
        items:MaybeRef<DropDownBlock[]|DropDownBlock|(| string| DropDownItem)[]|(| string| DropDownItem)[][]>,
        /**
         * Indicates if it should display from hovering
         */
        is_hoverable?:boolean,
        /**
         * Inidicates if the menu should display right aligned
         */
        is_right_align?:boolean,
        /**
         * Indicates if the menu should display up instead of down
         */
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
        let result = toValue<DropDownBlock[]|DropDownBlock|(| string| DropDownItem)[]|(| string| DropDownItem)[][]>(props.items);
        if (Array.isArray(result)){
            result = result.map<DropDownBlock>(item=>(Array.isArray(item) ? {children:item} : {children:[item]}) as DropDownBlock);
        }
        return (Array.isArray(result) ? result : [result]) as DropDownBlock[];
    });

    const GetItemClasses = (entry:string|DropDownItem):string[]=>{
        let result:string[] = ['dropdown-item'];
        if (typeof entry !== 'string'){
            let item = entry as DropDownItem;
            if (item.active){result.push('is-active');}
        }
        return result;
    }
    const GetItemURL = (entry:string|DropDownItem):string|undefined=>{
        if (typeof entry !== 'string'){
            let item = entry as DropDownItem;
            return item.href;
        }
        return undefined;
    }
    const ProcessItemClick = (entry:string|DropDownItem):void=>{
        if (typeof entry !=='string'){
            isActive.value=false;
            let item = entry as DropDownItem;
            if (item.onClick){item.onClick();}
        }
    }
</script>