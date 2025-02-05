<template>
    <List :type="type" :compact="compact" :outlined="outlined" :highlighted="highlighted" @drop="itemDropped">
        <template v-for="item,index in sorted">
            <li v-show="currentIndex===index&&selectedIndex!==index&&currentQuadrant===DropZoneQuadrants.top">
                <Notification :light="true">&nbsp;</Notification>
            </li>
            <li draggable="true" @dragstart="dragStart(index,$event)" @dragend="selectedIndex=null" @dragover="itemEntered(index,$event)" :class="{'has-cursor':true,'is-move':(currentIndex==index),'is-grab':(currentIndex!=index)}">
                <!--
                    @slot Used to render a given item in the sort list
                -->
                <slot name="item" :item="item" :index="index" />
            </li>
            <li v-show="currentIndex===index&&selectedIndex!==index&&currentQuadrant===DropZoneQuadrants.bottom">
                <Notification :light="true">&nbsp;</Notification>
            </li>
        </template>
    </List>
</template>

<script lang="ts">
    import List from '../layout/list.vue';
    import Notification from '../common/notification.vue';
    import { ref, watch,onMounted } from 'vue';
    import { ColorTypes, DropZoneQuadrants } from '../../enums';
import { IListProperties } from '../layout/interfaces';

    interface ISortableProperties extends IListProperties{
        /**
         * The items that are contained within the sortable list
         */
        items:any[]
    };
</script>

<script lang="ts" setup>
/**
 * Used to supply a Sortable list that can be dragged and dropped to change the order
 * 
 * @displayName Sortable
 */
    const props = withDefaults(defineProps<ISortableProperties>(),{
        type:ColorTypes.primary,
        compact:false,
        outlined:false,
        highlighted:false
    });
    const emit = defineEmits<{
        /**
         * Emitted when the sorting changes.  Supplies the items based on their current sort.
         */
        sorted:[items:any[]]
    }>();

    const sorted = ref<any[]>([]);
    const selectedIndex = ref<number>(-1);
    const currentIndex = ref<number>(-1);
    const currentQuadrant = ref<DropZoneQuadrants|null>(null);

    watch(props.items, (oldValue,newValue) => {
        sorted.value = [...newValue];
    });

    onMounted(() => {
        if (props.items !== null) {
            sorted.value = [...props.items];
        }
    });

    const getQuadrant = (event:any):DropZoneQuadrants => {
        var bounds = event.target.getBoundingClientRect();
        var mid = {
            x: bounds.x + (bounds.width / 2),
            y: bounds.y + (bounds.height / 2)
        };
        let ret : DropZoneQuadrants = DropZoneQuadrants.center;
        if (event.y < mid.y)
            ret = DropZoneQuadrants.top;
        else
            ret = DropZoneQuadrants.bottom;
        return ret;
    };

    const dragStart = (index:number, event:any) => {
        event.stopPropagation();
        selectedIndex.value = index;
        event.dataTransfer.setData('value', null);
    };

    const itemEntered = (index:number, event:any)=> {
        if (selectedIndex.value) {
            event.stopPropagation();
            if (index != selectedIndex.value) {
                currentIndex.value = index;
                currentQuadrant.value = getQuadrant(event);
            } else {
                currentIndex.value = -1;
                currentQuadrant.value = null;
            }
        }
    };

    const itemMoved = (index:number, event:any) => {
        if (selectedIndex.value) {
            event.stopPropagation();
            if (index != selectedIndex.value) {
                currentIndex.value = index;
                currentQuadrant.value = getQuadrant(event);
            } else {
                currentIndex.value = -1;
                currentQuadrant.value = null;
            }
        }
    };

    const itemDropped = (event:any)=> {
        if (selectedIndex.value) {
            event.stopPropagation();
            var index = currentIndex.value + (currentQuadrant.value == DropZoneQuadrants.top ? 0 : 1);
            var elem = sorted.value.splice(index, 1)[0];
            if (index >= selectedIndex.value)
                index--;
            sorted.value.splice(index, 0, elem);
            currentIndex.value = -1;
            currentQuadrant.value = null;
            selectedIndex.value = -1;
            emit('sorted', sorted.value);
        }
    };
</script>