<template>
    <div :class="['steps-container',(props.orientation===StepWizardOrientations.default?'' : `${props.orientation}`)]">
        <ul :class="['steps',(props.size===Sizes.normal ? '' : `is-${props.size}`)]">
            <li v-for="step,index in props.steps" 
                :class="['step-item', (index<currentIndex ? 'is-completed' : ''),(index===currentIndex?'is-active':''),(step.type?`is-${step.type}` : '')]">
                <div class="step-marker is-clickable" @click="emit('changedStep',index)">
                    <Icon v-if="step.icon" :icon="step.icon"/>
                    <span v-else>{{ index+1 }}</span>
                </div>
                <div class="step-details">
                    <p class="step-title">{{ step.title }}</p>
                    <p v-if="step.description">{{step.description}}</p>
                </div>
            </li>
        </ul>
        <div class="steps-content">
            <template v-for="step,index in steps">
                <div :class="['step-content',(index===currentIndex?'is-active':'')]" v-if="slots[step.name]">
                    <!--
                        @slot a slot created for each step named with the step's name
                    -->
                    <slot :name="step.name"/>
                </div>
            </template>
        </div>
        <div class="steps-actions">
            <template v-if="props.use_previous_next">
                <div class="steps-action">
                    <Button :title="Previous" :disabled="currentIndex===0" @click="()=>{currentIndex--;}"/>
                </div>
                <div class="steps-action">
                    <Button :title="Next" :disabled="props.steps[currentIndex].is_valid??true" @click="()=>{currentIndex++;}"/>
                </div>
                <div class="steps-action" v-if="currentIndex+1<props.steps.length">
                    <Button :title="Done" :disabled="props.steps[currentIndex].is_valid??true" @click="()=>{emit('done');}"/>
                </div>
            </template>
            <template v-else>
                <!--
                    @slot a slot created for the actions (as a default) when use_previous_next is false
                -->
                <slot name="actions" v-if="slots['actions']"/>
                <template v-for="step,index in steps">
                    <!--
                        @slot a slot created for each of the actions of each step when use_previous_next is false
                    -->
                    <slot :name="`actions-${step.name}`" v-if="slots[`actions-${step.name}`] && index===currentIndex"/>
                </template>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
/**
 * Used to supply Step Wizard control
 * All steps are 0 based index
 * 
 * @displayName StepWizard
 * @link https://aramvisser.github.io/bulma-steps/
 */
    import { Sizes, StepWizardOrientations } from '../../enums';
    import { WizardStep } from '../common/typeDefinitions';
    import Icon from '../common/icon.vue';
    import Button from '../common/buttons/button.vue';
    import {ref,computed, inject,watch,useSlots } from 'vue';
    import translate from '../../messages/messages.js';
    import { useLanguage } from '../shared';

    const slots = useSlots();
    const Language = useLanguage(inject);

    const Previous = computed<string>(()=>translate('Pagination.Previous',Language));
    const Next = computed<string>(()=>translate('Pagination.Next',Language));
    const Done = computed<string>(()=>translate('Wizard.Done',Language));

    const props = withDefaults(defineProps<{
        /**
         * The steps for the wizard
         */
        steps:WizardStep[],
        /**
         * Inidicates if the actions should be defaulted to Previous/Next/Done
         */
        use_previous_next?:boolean,
        /**
         * The size of the steps indicators to use
         */
        size?:Sizes,
        /**
         * The starting step index
         */
        starting_index?:number,
        /**
         * The orientation style for the wizard
         */
        orientation?:StepWizardOrientations
    }>(),
    {
        size:Sizes.normal,
        use_previous_next:true,
        orientation:StepWizardOrientations.default
    });
    const emit = defineEmits<{
        /**
         * Emitted when the wizard is completed (last step succeeded and done clicked)
         */
        done: [],
        /**
         * Emitted when the step is changed to a given index
         */
        changedStep:[index:number]
    }>();

    const currentIndex = ref(props.starting_index??0);

    watch(currentIndex,(value:number,oldValue:number)=>{
        emit('changedStep',value);
    });

    defineExpose({
        /**
         * Used to move to a given step in the wizard
         * 
         * @param index the step index to move to
         */
        moveToStep:(index:number)=>{
            currentIndex.value=index;
        }
    });
</script>