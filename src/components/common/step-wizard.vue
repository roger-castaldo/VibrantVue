<template>
    <div :class="['steps',(props.size===Sizes.normal ? '' : `is-${props.size}`)]">
        <div v-for="step,index in props.steps" 
            :class="['step-item', (index<currentIndex ? 'is-completed' : ''),(index===currentIndex?'is-active':''),(step.type?`is-${step.type}` : '')]">
            <div class="step-marker">
                <Icon v-if="step.icon" :icon="step.icon"/>
                <span v-else>{{ index+1 }}</span>
            </div>
            <div class="step-details">
                <p class="step-title">{{ step.title }}</p>
                <p v-if="step.description">{{step.description}}</p>
            </div>
        </div>
        <div class="steps-content">
            <div v-for="step,index in steps" :class="['step-content',(index===currentIndex?'is-active':'')]">
                <slot :name="step.name"/>
            </div>
        </div>
        <div class="steps-actions">
            <template v-if="props.usePreviousNext">
                <div class="steps-action">
                    <Button :title="Previous" :disabled="currentIndex===0" @click="()=>{currentIndex--;}"/>
                </div>
                <div class="steps-action">
                    <Button :title="Next" :disabled="props.steps[currentIndex].isValid??true" @click="()=>{currentIndex++;}"/>
                </div>
                <div class="steps-action" v-if="currentIndex+1<props.steps.length">
                    <Button :title="Done" :disabled="props.steps[currentIndex].isValid??true" @click="()=>{emit('done');}"/>
                </div>
            </template>
            <template v-else>
                <slot v-for="name in actionSlots" :name="name"/>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { Sizes } from '../enums';
    import { IWizardStep } from './typeDefinitions';
    import Icon from './icon.vue';
    import Button from './button.vue';
    import {ref,computed, inject,watch } from 'vue';
    import translate from '../../messages/messages.js';
    import { useLanguage } from '../shared';

    const Language = useLanguage(inject);

    const Previous = computed<string>(()=>translate('Pagination.Previous',Language));
    const Next = computed<string>(()=>translate('Pagination.Next',Language));
    const Done = computed<string>(()=>translate('Wizard.Done',Language));

    const props = withDefaults(defineProps<{
        steps:IWizardStep[],
        usePreviousNext?:boolean,
        actionSlots?:number,
        size?:Sizes,
        startingIndex?:number
    }>(),
    {
        size:Sizes.normal,
        usePreviousNext:true,
        actionSlots:0
    });
    const emit = defineEmits<{
        done: [],
        changedStep:[index:number]
    }>();

    const currentIndex = ref(props.startingIndex??0);
    const actionSlots = computed(()=>{
        let result=[];
        for(let x=0;x<props.actionSlots;x++){
            result.push(`action-${x}`);
        }
        return result;
    });

    watch(currentIndex,(value:number,oldValue:number)=>{
        emit('changedStep',value);
    });

    defineExpose({
        moveToStep:(index:number)=>{
            currentIndex.value=index;
        }
    });
</script>