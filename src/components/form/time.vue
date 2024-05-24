<template>
    <div class="control">
        <input class="input is-time" :name="props.name" :id="props.name" type="time" v-model="value" :disabled="props.disabled" :style="styles">
    </div>
</template>

<script lang="ts">
    import { ref, watch, computed } from 'vue';
    import { coreFieldProps } from './common';
    import { ValueChangedEvent } from './typesDefinitions';

    const regTime = RegExp('^(\\d{2}):(\\d{2}) (AM|PM)$');
    const reg24Time = RegExp('^(\\d{2}):(\\d{2}):\\d{2}$');
</script>

<script lang="ts" setup>
/**
 * A time input for the form
 * 
 * @displayName Time
 */
    const props = defineProps<coreFieldProps>();
        const emit = defineEmits<{
        /**
         * Emitted when the value changes
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const value = ref<string|null>(null);

    const styles = computed(() => {
        if (value.value == null || value.value == '') {
            return null;
        } else {
            var minute = Number(value.value.substring(3, 5));
            var hour = Number(value.value.substring(0, 2)) % 12 + (minute / 60);
            return {
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * minute / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * hour / 12}deg); transform-origin: 50% 50%;' /></svg>")`
            };
        }
    });

    watch(value, (val) => { emit('valueChanged', { name: props.name, value: val }) });

    const getValue = ():string|null=> { return value.value; };
    const setValue = (val:string|null):void=> {
        if (val != null) {
            if (regTime.test(val)) {
                var tmp = regTime.exec(val);
                val = (tmp[3] == "AM" ? tmp[1] : (parseInt(tmp[1]) + 12).toFixed(0)) + ':' + tmp[2] + ':00';
            }
        }
        value.value = val;
    };

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value string|null
         * @returns void
         */
        setValue 
    });
</script>

<style>
.input.is-time {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(120deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(20deg); transform-origin: 50% 50%;' /></svg>");
    background-position: 1px 1px;
    background-repeat: no-repeat;
    background-size: 32px 32px;
    color: #222;
    transition: backgroundImage 0.25s;
    padding-left: 40px;
    width: 140px;
}
</style>