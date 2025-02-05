<template>
    <component ref="handle" :is="props.tag" :draggable="true" @dragstart="Start" @dragend="Stop" :class="Classes">
        <!--
            @slot The content of the draggable item
        -->
        <slot/>
    </component>
</template>

<script lang="ts">
    import { ref,computed,onMounted } from 'vue';
</script>

<script lang="ts" setup>
/**
 * Used to create a draggable item that can be used with a drop zone for drag and drop interfaces
 * 
 * @displayName DraggableItem
 */
    const emit = defineEmits<{
        /**
         * Emitted when the dragging of this item has started
         */
        started:[],
        /**
         * Emitted when the dragging of this item has stopped
         */
        stopped:[]
    }>();

    const props = withDefaults(defineProps<{
        /**
         * The data transfer when this item is dragged
         */
        copy_data?:any|null,
        /**
         * Indicates if dragging is currently disabled
         */
        disabled?:boolean,
        /**
         * The tag to use for wrapping this dragging item
         */
        tag?:string,
        /**
         * A querySelector search specify the dragging handle
         */
        handle_search:string|null
    }>(),{
        copy_data:null,
        disabled:false,
        tag:'div'
    });

    const isDragging = ref<boolean>(false);
    const handleDisabled = ref<boolean>(false);
    const handle = ref<any|null>(null);

    const Disabled = computed<boolean>(() => (props.disabled??false) || (handleDisabled.value && props.handle_search!==null));
    const Classes = computed<string[]>(()=>{
        let result = [];
        if (!Disabled){result.push('has-cursor');}
        if (isDragging.value){result.push('is-move');}
        else{result.push('is-grab');}
        return result;
    })

    const Start = (event:any) : boolean => {
        if (Disabled.value) {
            event.preventDefault();
            return false;
        }
        event.stopPropagation();
        event.dataTransfer.setData('value', JSON.stringify(props.copy_data));
        isDragging.value = true;
        emit('started');
        return true;
    }

    const Stop = () :void => {
        isDragging.value = false;
        handleDisabled.value = true;
        emit('stopped');
    };

    onMounted(() => {
        if (props.handle_search) {
            let clickHandle = (handle.value as HTMLElement).querySelector(props.handle_search);
            if (clickHandle!==null) {
                handleDisabled.value = true;
                (clickHandle as HTMLElement).addEventListener('mousedown',() => handleDisabled.value = false);
                (clickHandle as HTMLElement).addEventListener('mouseup',() => handleDisabled.value = true);
            }
        }
    });
</script>