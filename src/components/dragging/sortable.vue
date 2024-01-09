<template>
    <List :type="type" :compact="compact" :outlined="outlined" :highlighted="highlighted" @drop="itemDropped">
        <template v-for="item,index in sorted">
            <ListItem v-show="currentIndex===index&&selectedIndex!==index&&currentQuadrant===DropZoneQuadrants.top">
                <Notification :light="true">&nbsp;</Notification>
            </ListItem>
            <ListItem draggable="true" @dragstart="dragStart(index,$event)" @dragend="selectedIndex=null" @dragover="itemEntered(index,$event)" :class="{'has-cursor':true,'is-move':(currentIndex==index),'is-grab':(currentIndex!=index)}">
                <slot name="item" :item="item" :index="index" />
            </ListItem>
            <ListItem v-show="currentIndex===index&&selectedIndex!==index&&currentQuadrant===DropZoneQuadrants.bottom">
                <Notification :light="true">&nbsp;</Notification>
            </ListItem>
        </template>
    </List>
</template>

<script lang="ts">
    import List from '../layout/list.vue';
    import ListItem from '../layout/list-item.vue';
    import Notification from '../common/notification.vue';
    import { ref, watch,onMounted } from 'vue';
    import { ColorTypes, DropZoneQuadrants } from '../enums';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        Items:any[],
        type?:ColorTypes,
        compact?:boolean,
        outlined?:boolean,
        highlighted?:boolean
    }>(),{
        type:ColorTypes.primary,
        compact:false,
        outlined:false,
        highlighted:false
    });
    const emit = defineEmits<{
        sorted:[items:any[]]
    }>();

    const sorted = ref<any[]>([]);
    const selectedIndex = ref<number>(-1);
    const currentIndex = ref<number>(-1);
    const currentQuadrant = ref<DropZoneQuadrants|null>(null);

    watch(props.Items, (oldValue,newValue) => {
        sorted.value = [...newValue];
    });

    onMounted(() => {
        if (props.Items !== null) {
            sorted.value = [...props.Items];
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