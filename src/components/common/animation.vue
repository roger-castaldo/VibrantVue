<template>
    <Transition :enter-active-class="onEnter" :leave-active-class="onExit" :duration="Duration" v-if="!props.repeating">
        <!--
            @slot Content to be animated
        -->
        <slot/>
    </Transition>
    <div :class="repeatingClass" v-else>
        <!--
            @slot Content to be animated
        -->
        <slot/>
    </div>
</template>

<script setup lang="ts">
/**
     * When supplying properties, the combinations should either be incoming and outgoing if seperate types are desired.
     * Otherwise supply inout and it will use that for both enter an exit.
     * If the desire is to repeat, specify repeating and do not specify the previous ones.
     * If the speed for either enter and exit is desired to be the same, specify speed.
     * Otherwise specify speedin or speedout or both.  These will not apply to repeating, speed will apply to repeating.
     * 
     * @displayName Animation
     */
    import {css} from '../utilities.js';
    import { computed,inject } from 'vue';
    import { AnimationSpeeds, AnimationTypes } from '../../enums';
    import { useAnimation } from '../shared';

    const baseURL = useAnimation(inject);

    css(`${baseURL}animate.min.css`);

    const props = withDefaults(defineProps<{
        /**
       * The incoming animation to use for an item entering
       */
        incoming?:AnimationTypes,
        /**
       * The outgoing animation to use for an item exiting
       */
        outgoing?:AnimationTypes,
        /**
       * The animation to use for an item entering and exiting
       */
        inout?:AnimationTypes
        /**
       * The speed of the animation
       */
        speed?:AnimationSpeeds, 
        /**
       * The speed of the animation for an item entering
       */
        speedIn?:AnimationSpeeds, 
        /**
       * The speed of the animation for an item exiting
       */
        speedOut?:AnimationSpeeds,
        /**
       * The repeating animation to use for an item
       */
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
</script>.js