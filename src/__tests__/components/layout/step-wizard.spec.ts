import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import StepWizard from '../../../components/layout/step-wizard.vue';
import { sleep, stripCommentNodes } from '../../common';
import translate from '../../../messages/messages.js';
import { NoticeTypes, Sizes, StepWizardOrientations } from '../../../enums';
import { h } from 'vue';
import {mount} from '@vue/test-utils';


describe('Step Wizard', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(StepWizard, {
        props: {
          steps:[
            {name:'step1',title:'Step 1',description:'This is step 1'},
            {name:'step2',title:'Step 2',description:'This is step 2'}
          ]
        },
        slots:{
          step1:()=>'This is the slot content for step 1',
          step2:()=>'This is the slot content for step 2'
        }
      });
      return container;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async()=>{
    const steps = [
      {name:'step1',title:'Step 1',description:'This is step 1'},
      {name:'step2',title:'Step 2'}
    ];

    const slots = {
      step1:()=>'This is the slot content for step 1',
      step2:()=>'This is the slot content for step 2'
    };

    const {container} = render(StepWizard, {
      props: {
        steps:steps
      },
      slots:slots
    });

    const stepsContainer = container.childNodes[0] as HTMLElement;

    expect(stepsContainer.classList).toContain('steps-container');

    const containerChildren = stripCommentNodes(stepsContainer).map(n=>n as HTMLElement);

    expect(containerChildren).toHaveLength(3);

    const stepList = containerChildren[0];
    const stepContent = containerChildren[1];
    const stepActions = containerChildren[2];

    expect(stepList.classList).toContain('steps');

    const stepChildren = stripCommentNodes(stepList).map(n=>n as HTMLElement);

    expect(stepChildren).toHaveLength(steps.length);
    for(let x=0;x<steps.length;x++){
      expect(stepChildren[x].classList).toContain('step-item');
      if (x===0){
        expect(stepChildren[x].classList).toContain('is-active');
      }

      const childElements = stripCommentNodes(stepChildren[x]).map(n=>n as HTMLElement);

      expect(childElements).toHaveLength(2);

      expect(childElements[0].classList).toContain('step-marker');
      expect(childElements[0].classList).toContain('is-clickable');

      expect(stripCommentNodes(childElements[0])).toHaveLength(1);
      expect(childElements[0].innerText).toBe(`${x+1}`);

      expect(childElements[1].className).toBe('step-details');
      
      const stepDetails = stripCommentNodes(childElements[1]).map(n=>n as HTMLElement);

      expect(stepDetails).toHaveLength((steps[x].description !== undefined ? 2 : 1));

      expect(stepDetails[0].className).toBe('step-title');
      expect(stepDetails[0].innerText).toBe(steps[x].title);
      
      if (steps[x].description!==undefined){
        expect(stepDetails[1].className).toBe('');
        expect(stepDetails[1].innerText).toBe(steps[x].description);
      }
    }

    expect(stepContent.className).toBe('steps-content');

    const contentChildren = stripCommentNodes(stepContent).map(n=>n as HTMLElement);

    expect(contentChildren).toHaveLength(steps.length);

    for(let x=0;x<steps.length;x++){
      expect(contentChildren[x].classList).toContain('step-content');
      if (x===0){
        expect(contentChildren[x].classList).toContain('is-active');
      }
      expect(contentChildren[x].innerText).toBe(slots[steps[x].name]());
    }

    expect(stepActions.className).toBe('steps-actions');

    const actions = stripCommentNodes(stepActions).map(n=>n as HTMLElement);

    expect(actions).toHaveLength(2);

    expect(actions[0].className).toBe('steps-action');

    const preButton = actions[0].childNodes[0] as HTMLElement;

    expect(preButton.getAttribute('disabled')).toBeDefined();
    expect(preButton.innerText).toBe(translate('Pagination.Previous'));

    expect(actions[1].className).toBe('steps-action');
    
    const nextButton = actions[1].childNodes[0] as HTMLElement;

    expect(nextButton.getAttribute('disabled')).toBeNull();
    expect(nextButton.innerText).toBe(translate('Pagination.Next'));
  }),
  test('check sizes',async()=>{
    const steps = [
      {name:'step1',title:'Step 1',description:'This is step 1'},
      {name:'step2',title:'Step 2'}
    ];

    const slots = {
      step1:()=>'This is the slot content for step 1',
      step2:()=>'This is the slot content for step 2'
    };

    for(const key in Sizes){
      const {container} = render(StepWizard, {
        props: {
          steps:steps,
          size:Sizes[key]
        },
        slots:slots
      });

      const stepsContainer = container.childNodes[0] as HTMLElement;

      expect(stepsContainer.classList).toContain('steps-container');

      const containerChildren = stripCommentNodes(stepsContainer).map(n=>n as HTMLElement);

      expect(containerChildren).toHaveLength(3);

      const stepList = containerChildren[0];

      expect(stepList.classList).toContain('steps');
      if (Sizes[key]!==Sizes.normal){
        expect(stepList.classList).toContain(`is-${Sizes[key]}`);
      }
    }
  }),
  test('check orientations',async()=>{
    const steps = [
      {name:'step1',title:'Step 1',description:'This is step 1'},
      {name:'step2',title:'Step 2'}
    ];

    const slots = {
      step1:()=>'This is the slot content for step 1',
      step2:()=>'This is the slot content for step 2'
    };

    for(const key in StepWizardOrientations){
      const {container} = render(StepWizard, {
        props: {
          steps:steps,
          orientation:StepWizardOrientations[key]
        },
        slots:slots
      });

      const stepsContainer = container.childNodes[0] as HTMLElement;

      expect(stepsContainer.classList).toContain('steps-container');
      if (StepWizardOrientations[key]!==StepWizardOrientations.default){
        expect(stepsContainer.classList).toContain(`${StepWizardOrientations[key]}`);
      }
    }
  }),
  test('check types',async()=>{
    for(const key in NoticeTypes){
      const steps = [
        {name:'step1',title:'Step 1',description:'This is step 1',type:NoticeTypes[key]},
        {name:'step2',title:'Step 2'}
      ];

      const slots = {
        step1:()=>'This is the slot content for step 1',
        step2:()=>'This is the slot content for step 2'
      };

      const {container} = render(StepWizard, {
        props: {
          steps:steps
        },
        slots:slots
      });

      const stepsContainer = container.childNodes[0] as HTMLElement;

      expect(stepsContainer.classList).toContain('steps-container');

      const containerChildren = stripCommentNodes(stepsContainer).map(n=>n as HTMLElement);

      expect(containerChildren).toHaveLength(3);

      const stepList = containerChildren[0];
      const stepContent = containerChildren[1];
      const stepActions = containerChildren[2];

      expect(stepList.classList).toContain('steps');

      const stepChildren = stripCommentNodes(stepList).map(n=>n as HTMLElement);

      expect(stepChildren).toHaveLength(steps.length);
      for(let x=0;x<steps.length;x++){
        expect(stepChildren[x].classList).toContain('step-item');
        if (x===0){
          expect(stepChildren[x].classList).toContain('is-active');
        }
        if (steps[x].type){
          expect(stepChildren[x].classList).toContain(`is-${NoticeTypes[key]}`);
        }

        const childElements = stripCommentNodes(stepChildren[x]).map(n=>n as HTMLElement);

        expect(childElements).toHaveLength(2);

        expect(childElements[0].classList).toContain('step-marker');
        expect(childElements[0].classList).toContain('is-clickable');

        expect(stripCommentNodes(childElements[0])).toHaveLength(1);
        expect(childElements[0].innerText).toBe(`${x+1}`);

        expect(childElements[1].className).toBe('step-details');
        
        const stepDetails = stripCommentNodes(childElements[1]).map(n=>n as HTMLElement);

        expect(stepDetails).toHaveLength((steps[x].description !== undefined ? 2 : 1));

        expect(stepDetails[0].className).toBe('step-title');
        expect(stepDetails[0].innerText).toBe(steps[x].title);
        
        if (steps[x].description!==undefined){
          expect(stepDetails[1].className).toBe('');
          expect(stepDetails[1].innerText).toBe(steps[x].description);
        }
      }

      expect(stepContent.className).toBe('steps-content');

      const contentChildren = stripCommentNodes(stepContent).map(n=>n as HTMLElement);

      expect(contentChildren).toHaveLength(steps.length);

      for(let x=0;x<steps.length;x++){
        expect(contentChildren[x].classList).toContain('step-content');
        if (x===0){
          expect(contentChildren[x].classList).toContain('is-active');
        }
        expect(contentChildren[x].innerText).toBe(slots[steps[x].name]());
      }

      expect(stepActions.className).toBe('steps-actions');

      const actions = stripCommentNodes(stepActions).map(n=>n as HTMLElement);

      expect(actions).toHaveLength(2);

      expect(actions[0].className).toBe('steps-action');

      const preButton = actions[0].childNodes[0] as HTMLElement;

      expect(preButton.getAttribute('disabled')).toBeDefined();
      expect(preButton.innerText).toBe(translate('Pagination.Previous'));

      expect(actions[1].className).toBe('steps-action');
      
      const nextButton = actions[1].childNodes[0] as HTMLElement;

      expect(nextButton.getAttribute('disabled')).toBeNull();
      expect(nextButton.innerText).toBe(translate('Pagination.Next'));
    }
  }),
  test('check navigation',async()=>{
    const steps = [
      {name:'step1',title:'Step 1',description:'This is step 1'},
      {name:'step2',title:'Step 2',is_valid:false}
    ];

    const slots = {
      step1:()=>'This is the slot content for step 1',
      step2:()=>'This is the slot content for step 2'
    };

    let currentStep : number = -1;

    const {container} = render(StepWizard, {
      props: {
        steps:steps,
        onChangedStep:(val)=>currentStep=val
      },
      slots:slots
    });

    const stepsContainer = container.childNodes[0] as HTMLElement;

    expect(stepsContainer.classList).toContain('steps-container');

    const containerChildren = stripCommentNodes(stepsContainer).map(n=>n as HTMLElement);

    expect(containerChildren).toHaveLength(3);

    const stepList = containerChildren[0];
    const stepContent = containerChildren[1];
    const stepActions = containerChildren[2];

    expect(stepList.classList).toContain('steps');

    const stepChildren = stripCommentNodes(stepList).map(n=>n as HTMLElement);

    expect(stepChildren).toHaveLength(steps.length);
    for(let x=0;x<steps.length;x++){
      expect(stepChildren[x].classList).toContain('step-item');
      if (x===0){
        expect(stepChildren[x].classList).toContain('is-active');
      }

      const childElements = stripCommentNodes(stepChildren[x]).map(n=>n as HTMLElement);

      expect(childElements).toHaveLength(2);

      expect(childElements[0].classList).toContain('step-marker');
      expect(childElements[0].classList).toContain('is-clickable');

      expect(stripCommentNodes(childElements[0])).toHaveLength(1);
      expect(childElements[0].innerText).toBe(`${x+1}`);

      expect(childElements[1].className).toBe('step-details');
      
      const stepDetails = stripCommentNodes(childElements[1]).map(n=>n as HTMLElement);

      expect(stepDetails).toHaveLength((steps[x].description !== undefined ? 2 : 1));

      expect(stepDetails[0].className).toBe('step-title');
      expect(stepDetails[0].innerText).toBe(steps[x].title);
      
      if (steps[x].description!==undefined){
        expect(stepDetails[1].className).toBe('');
        expect(stepDetails[1].innerText).toBe(steps[x].description);
      }
    }

    expect(stepContent.className).toBe('steps-content');

    const contentChildren = stripCommentNodes(stepContent).map(n=>n as HTMLElement);

    expect(contentChildren).toHaveLength(steps.length);

    for(let x=0;x<steps.length;x++){
      expect(contentChildren[x].classList).toContain('step-content');
      if (x===0){
        expect(contentChildren[x].classList).toContain('is-active');
      }
      expect(contentChildren[x].innerText).toBe(slots[steps[x].name]());
    }

    expect(stepActions.className).toBe('steps-actions');

    const actions = stripCommentNodes(stepActions).map(n=>n as HTMLElement);

    expect(actions).toHaveLength(2);

    expect(actions[0].className).toBe('steps-action');

    const preButton = actions[0].childNodes[0] as HTMLElement;

    expect(preButton.getAttribute('disabled')).toBeDefined();
    expect(preButton.innerText).toBe(translate('Pagination.Previous'));

    expect(actions[1].className).toBe('steps-action');
    
    const nextButton = actions[1].childNodes[0] as HTMLElement;

    expect(nextButton.getAttribute('disabled')).toBeNull();
    expect(nextButton.innerText).toBe(translate('Pagination.Next'));

    nextButton.click();

    await sleep(100);

    expect(currentStep).toBe(1);

    expect(stepChildren[0].classList).toContain('is-completed'); 
    expect(stepChildren[0].classList).not.toContain('is-active'); 
    expect(stepChildren[1].classList).toContain('is-active'); 

    expect(contentChildren[0].classList).not.toContain('is-active'); 
    expect(contentChildren[1].classList).toContain('is-active'); 

    expect(preButton.getAttribute('disabled')).toBeNull();

    const doneButton = stripCommentNodes(stepActions).map(n=>n as HTMLElement)[1];

    expect(doneButton.getAttribute('disabled')).toBeDefined();
    expect(doneButton.innerText).toBe(translate('Wizard.Done'));
  }),
  test('check action slots',async()=>{
    const actionContent = 'This is the content for the actions';
    const actionStep2Content = 'This is the content for step 2\'s actions';

    const steps = [
      {name:'step1',title:'Step 1',description:'This is step 1'},
      {name:'step2',title:'Step 2',is_valid:false}
    ];

    const slots = {
      step1:()=>'This is the slot content for step 1',
      step2:()=>'This is the slot content for step 2',
      actions:()=>h('p',null,actionContent),
      'actions-step2':()=>h('p',null,actionStep2Content)
    };

    let currentStep = -1;

    const wrapper = mount(StepWizard, {
      props: {
        steps:steps,
        use_previous_next:false,
        onChangedStep:(newStep)=>currentStep=newStep
      },
      slots:slots
    });

    const stepsContainer = wrapper.element;

    expect(stepsContainer.classList).toContain('steps-container');

    const containerChildren = stripCommentNodes(stepsContainer).map(n=>n as HTMLElement);

    expect(containerChildren).toHaveLength(3);

    const stepList = containerChildren[0];
    const stepContent = containerChildren[1];
    const stepActions = containerChildren[2];

    expect(stepList.classList).toContain('steps');

    const stepChildren = stripCommentNodes(stepList).map(n=>n as HTMLElement);

    expect(stepChildren).toHaveLength(steps.length);
    for(let x=0;x<steps.length;x++){
      expect(stepChildren[x].classList).toContain('step-item');
      if (x===0){
        expect(stepChildren[x].classList).toContain('is-active');
      }

      const childElements = stripCommentNodes(stepChildren[x]).map(n=>n as HTMLElement);

      expect(childElements).toHaveLength(2);

      expect(childElements[0].classList).toContain('step-marker');
      expect(childElements[0].classList).toContain('is-clickable');

      expect(stripCommentNodes(childElements[0])).toHaveLength(1);
      expect(childElements[0].innerText).toBe(`${x+1}`);

      expect(childElements[1].className).toBe('step-details');
      
      const stepDetails = stripCommentNodes(childElements[1]).map(n=>n as HTMLElement);

      expect(stepDetails).toHaveLength((steps[x].description !== undefined ? 2 : 1));

      expect(stepDetails[0].className).toBe('step-title');
      expect(stepDetails[0].innerText).toBe(steps[x].title);
      
      if (steps[x].description!==undefined){
        expect(stepDetails[1].className).toBe('');
        expect(stepDetails[1].innerText).toBe(steps[x].description);
      }
    }

    expect(stepContent.className).toBe('steps-content');

    const contentChildren = stripCommentNodes(stepContent).map(n=>n as HTMLElement);

    expect(contentChildren).toHaveLength(steps.length);

    for(let x=0;x<steps.length;x++){
      expect(contentChildren[x].classList).toContain('step-content');
      if (x===0){
        expect(contentChildren[x].classList).toContain('is-active');
      }
      expect(contentChildren[x].innerText).toBe(slots[steps[x].name]());
    }

    expect(stepActions.className).toBe('steps-actions');

    const actions = stripCommentNodes(stepActions).map(n=>n as HTMLElement);

    expect(actions).toHaveLength(1);

    expect(actions[0].tagName).toBe('P');
    expect(actions[0].innerText).toBe(actionContent);

    wrapper.vm.moveToStep(1);

    await sleep(100);

    expect(currentStep).toBe(1);

    const newStepActions = stripCommentNodes(wrapper.element).map(n=>n as HTMLElement)[2];

    const newActions = stripCommentNodes(newStepActions).map(n=>n as HTMLElement);

    expect(newActions).toHaveLength(2);

    expect(newActions[0].tagName).toBe('P');
    expect(newActions[0].innerText).toBe(actionContent);

    expect(newActions[1].tagName).toBe('P');
    expect(newActions[1].innerText).toBe(actionStep2Content);
  })
});