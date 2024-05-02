<template>
    <component ref="handle" :is="props.tag" :draggable="true" @dragstart="Start" @dragend="Stop" :class="Classes">
        <slot/>
    </component>
</template>

<script lang="ts">
    import { ref,computed,onMounted } from 'vue';
</script>

<script lang="ts" setup>
    const emit = defineEmits<{
        started:[],
        stopped:[]
    }>();

    const props = withDefaults(defineProps<{
        copy_data?:any|null,
        disabled?:boolean,
        tag?:string,
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
            let clickHandle = $(handle.value).find(props.handle_search);
            if (clickHandle.length > 0) {
                handleDisabled.value = true;
                clickHandle.on('mousedown',() => handleDisabled.value = false);
                clickHandle.on('mouseup',() => handleDisabled.value = true);
            }
        }
    });
</script>