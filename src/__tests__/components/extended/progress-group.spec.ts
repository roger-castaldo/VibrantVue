import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import ProgressGroup from '../../../components/extended/progress-group.vue';
import { ColorTypes,Sizes } from '../../../enums';
import { ProgressEntry } from '../../../components/extended/typeDefinitions';
import { stripCommentNodes } from '../../common';

describe('Progress Group', () => {
    test('check accessibility',async() => {
      const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
        const {container} = render(ProgressGroup, {
          props:{
            values:[
              {type:ColorTypes.info,value:20},
              {type:ColorTypes.success,value:35}
            ],
            max:100
          }
        });
        return container;
      });

      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check default values',async() => {
        const values:ProgressEntry[] = [
          {type:ColorTypes.info,value:20},
          {type:ColorTypes.success,value:35}
        ]

        const {container} = render(ProgressGroup, {
          props:{
            values:values
          }
        });
    
        var progressGroup = container.childNodes[0] as HTMLElement;

        expect(progressGroup.classList).toContain('progress-group');
        
        const children = stripCommentNodes(progressGroup).map(n=>n as HTMLElement);

        expect(children).toHaveLength(values.length);

        for(let x=0;x<values.length;x++){
          const progress = children[x];

          expect(progress.classList).toContain('progress');
          expect(progress.classList).toContain(`is-${Sizes.normal}`);
          expect(progress.classList).toContain(`is-${values[x].type}`);
          if (values[x].onClick){
            expect(progress.classList).toContain('is-clickable');
          }

          expect(progress.getAttribute('value')).toBe('100');
          expect(progress.getAttribute('max')).toBe('100');
        }
    }),
    test('check Sizes',async() => {
      const values:ProgressEntry[] = [
        {type:ColorTypes.info,value:20},
        {type:ColorTypes.success,value:35}
      ]

      for(const key in Sizes){
        const {container} = render(ProgressGroup, {
          props:{
            values:values,
            size:Sizes[key]
          }
        });
    
        var progressGroup = container.childNodes[0] as HTMLElement;

        expect(progressGroup.classList).toContain('progress-group');
        
        const children = stripCommentNodes(progressGroup).map(n=>n as HTMLElement);

        expect(children).toHaveLength(values.length);

        for(let x=0;x<values.length;x++){
          const progress = children[x];

          expect(progress.classList).toContain('progress');
          expect(progress.classList).toContain(`is-${Sizes[key]}`);
          expect(progress.classList).toContain(`is-${values[x].type}`);
          if (values[x].onClick){
            expect(progress.classList).toContain('is-clickable');
          }

          expect(progress.getAttribute('value')).toBe('100');
          expect(progress.getAttribute('max')).toBe('100');
        }
      }
  }),
  test('check Colors',async() => {
    for(const key in ColorTypes){
      const values:ProgressEntry[] = [
        {type:ColorTypes[key],value:20},
        {type:ColorTypes.success,value:35}
      ]

      const {container} = render(ProgressGroup, {
        props:{
          values:values
        }
      });
    
      var progressGroup = container.childNodes[0] as HTMLElement;

      expect(progressGroup.classList).toContain('progress-group');
      
      const children = stripCommentNodes(progressGroup).map(n=>n as HTMLElement);

      expect(children).toHaveLength(values.length);

      for(let x=0;x<values.length;x++){
        const progress = children[x];

        expect(progress.classList).toContain('progress');
        expect(progress.classList).toContain(`is-${Sizes.normal}`);
        expect(progress.classList).toContain(`is-${values[x].type}`);
        if (values[x].onClick){
          expect(progress.classList).toContain('is-clickable');
        }

        expect(progress.getAttribute('value')).toBe('100');
        expect(progress.getAttribute('max')).toBe('100');
      }
    }
  }),
  test('check filler',async() => {
    const values:ProgressEntry[] = [
      {type:ColorTypes.info,value:20,caption:'sample1'},
      {type:ColorTypes.success,value:35}
    ]

    const {container} = render(ProgressGroup, {
      props:{
        values:values,
        max:100
      }
    });

    var progressGroup = container.childNodes[0] as HTMLElement;

    expect(progressGroup.classList).toContain('progress-group');
    
    const children = stripCommentNodes(progressGroup).map(n=>n as HTMLElement);

    expect(children).toHaveLength(values.length+1);

    for(let x=0;x<values.length;x++){
      const progress = children[x];

      expect(progress.classList).toContain('progress');
      expect(progress.classList).toContain(`is-${Sizes.normal}`);
      expect(progress.classList).toContain(`is-${values[x].type}`);
      if (values[x].onClick){
        expect(progress.classList).toContain('is-clickable');
      }

      expect(progress.getAttribute('value')).toBe('100');
      expect(progress.getAttribute('max')).toBe('100');

      expect(progress.innerHTML).toContain(`${(values[x].value/100)*100}%`);

      expect(progress.getAttribute('data-tooltip')).toBe(values[x].caption??`${(values[x].value/100)*100}`);
    }

    const progress = children[2];

    expect(progress.classList).toContain('progress');
    expect(progress.classList).toContain(`is-${Sizes.normal}`);
    expect(progress.classList).toContain(`is-${null}`);
    
    expect(progress.getAttribute('value')).toBe('100');
    expect(progress.getAttribute('max')).toBe('100');

    expect(progress.innerHTML).toContain(`${((100-55)/100)*100}%`);

    expect(progress.getAttribute('data-tooltip')).toBeNull();
  })
});