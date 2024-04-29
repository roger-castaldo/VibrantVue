<template>
    <Transition :enter-active-class="onEnter" :leave-active-class="onExit" :duration="Duration" v-if="!props.repeating">
        <slot/>
    </Transition>
    <div :class="repeatingClass" v-else>
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    import {css} from '../utilities.js';
    import { computed,inject } from 'vue';
    import { AnimationSpeeds, AnimationTypes } from '../enums';
    import { useAnimation } from '../shared';

    const baseURL = useAnimation(inject);

    css(`${baseURL}animate.min.css`);

    const props = withDefaults(defineProps<{
        incoming?:AnimationTypes,
        outgoing?:AnimationTypes,
        inout?:AnimationTypes
        speed?:AnimationSpeeds, 
        speedIn?:AnimationSpeeds, 
        speedOut?:AnimationSpeeds,
        repeating?:AnimationTypes
    }>(),{
        speed:AnimationSpeeds.slow
    });

    const getSpeedTime = (speed:AnimationSpeeds) => {
        switch (speed) {
            case AnimationSpeeds.slower:
                return 3000;
                break;
            case AnimationSpeeds.fast:
                return 800;
                break;
            case AnimationSpeeds.faster:
                return 500;
                break;
            default:
                return 2000;
                break;
        }
    };

    const getAnimationName = (animation?:AnimationTypes) => {
        return (animation === undefined ? '' : `animate__${animation}`);
    };
    const getSpeedName = (speed?:AnimationSpeeds)=> {
        return (speed === undefined ? 'animate__slow' : `animate__${speed}`);
    };
    
    const Duration = computed(() => {
        return {
            enter: getSpeedTime(props.speedIn ?? props.speed),
            leave: getSpeedTime(props.speedOut ?? props.speed)
        };
    });
    const onEnter = computed(() => {
        return [
            'animate__animated',
            getAnimationName(props.incoming ?? props.inout),
            getSpeedName(props.speedIn ?? props.speed)
        ].join(' ');
    });
    const onExit = computed(() => {
        return [
            'animate__animated',
            getAnimationName(props.outgoing ?? props.inout),
            getSpeedName(props.speedOut ?? props.speed)
        ].join(' ');
    });
    const repeatingClass = computed(() => {
        return [
            'animate__animated',
            'animate__infinite',
            getAnimationName(props.repeating),
            getSpeedName(props.speed)
        ].join(' ');
    });
</script>