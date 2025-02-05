<template>
    <component ref="handle" :is="props.tag" :class="{'is-bordered':isOver}" @dragenter="Enter" @dragleave="Leave" @drop="Drop" @dragover="Moved">
        <!--
            @slot The area contained within the drop zone to be used however is seen fit
        -->
        <slot />
    </component>
</template>

<script lang="ts">
    import { ref,computed } from 'vue';
    import {DropZoneQuadrants} from '../../enums';
</script>

<script lang="ts" setup>
/**
 * Used to supply a Drop Zone for a draggable item to be dropped within
 * 
 * @displayName Dropzone
 */
    const props = withDefaults(defineProps<{
        /**
         * A callback designed to indicate of a particular item being dragged into this drop zone can be dropped here
         * 
         * @param data the data supplied as copy_data from the DraggableItem
         */
        is_valid_child?:(data:any)=>boolean,
        /**
         * The html tag to render this drop zone as
         */
        tag?:string
    }>(),{
        tag:'div',
        is_valid_child:(data:any)=>true
    });

    const emit = defineEmits<{
        /**
         * Emitted when a valid item is dropped into this zone.  
         * Supplies both the copy_data as well as a position to indicate the quadrant it was dropped in.
         */
        itemAdded:[data:any,position:DropZoneQuadrants],
        /**
         * Emitted when a valid item enters into this zone.  
         * Supplies a position to indicate the quadrant it entered in.
         */
        itemEntered:[quadrant:DropZoneQuadrants],
        /**
         * Emitted when a valid item exits from this zone.  
         * Supplies a position to indicate the quadrant it exited from.
         */
        itemExited:[quadrant:DropZoneQuadrants],
        /**
         * Emitted when a valid item moves within the zone
         * Supplies a position to indicate the quadrant it moved into.
         */
        itemMoved:[quadrant:DropZoneQuadrants]
    }>();

    const isOver = ref<boolean>(false);
    const lastQuadrant = ref<DropZoneQuadrants|null>(null);
    const handle = ref<any>(null);

    const Tag = computed(() => props.tag ?? 'div');

    const getQuadrant = (event:any):DropZoneQuadrants=> {
        const bounds = handle.value.getBoundingClientRect();
        const mid = {
            x: bounds.x + (bounds.width / 2),
            y: bounds.y + (bounds.height / 2)
        };
        let ret = DropZoneQuadrants.center;
        if (event.x < mid.x) {
            if (event.y < mid.y)
                ret = DropZoneQuadrants.topLeft;
            else
                ret = DropZoneQuadrants.bottomLeft;
        } else {
            if (event.y < mid.y)
                ret = DropZoneQuadrants.topRight;
            else
                ret = DropZoneQuadrants.bottomRight;
        }
        lastQuadrant.value = ret;
        return lastQuadrant.value;
    };

    const Enter = (event:any) => {
        event.preventDefault();
        isOver.value = true;
        emit('itemEntered', getQuadrant(event));
    };

    const Leave = (event:any)=> {
        isOver.value = true;
        emit('itemExited', getQuadrant(event));
    };

    const Moved = (event:any)=> {
        event.preventDefault();
        emit('itemMoved', getQuadrant(event));
    };

    const Drop = (event:any)=> {
        if (props.is_valid_child) {
            if (!props.is_valid_child(JSON.parse(event.dataTransfer.getData('value'))))
                return false;
        }
        event.stopPropagation();
        event.preventDefault();
        emit('itemAdded', JSON.parse(event.dataTransfer.getData('value')), lastQuadrant.value);
        isOver.value = false;
    };
</script>