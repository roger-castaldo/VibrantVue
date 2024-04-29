<template>
    <component ref="handle" :is="props.tag" :class="{'is-bordered':isOver}" @dragenter="Enter" @dragleave="Leave" @drop="Drop" @dragover="Moved">
        <slot />
    </component>
</template>

<script lang="ts">
    import { ref,computed } from 'vue';
    import {DropZoneQuadrants} from '../enums';
</script>

<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        is_valid_child?:(data:any)=>boolean,
        tag?:string
    }>(),{
        tag:'div',
        is_valid_child:(data:any)=>true
    });

    const emit = defineEmits<{
        itemAdded:[data:any,position:DropZoneQuadrants],
        itemEntered:[quadrant:DropZoneQuadrants],
        itemExited:[quadrant:DropZoneQuadrants],
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