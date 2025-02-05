import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import progress from '../../../components/common/progress.vue';
import { ColorTypes,Sizes } from '../../../enums';

describe('Progress', () => {
    test('check accessibility',async() => {
      const {container} = render(progress, {
        props:{}
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check default values',async() => {
        const {container} = render(progress, {
          props:{}
        });
    
        var progressBar = container.childNodes[0] as HTMLElement;

        expect(progressBar.classList).toContain('progress');
        expect(progressBar.classList).toContain('is-normal');
        expect(progressBar.classList).toContain('is-primary');

        expect(progressBar.innerText).toBe('');
    }),
    test('check value assigned',async() => {
        const value = 10;
        const maximum = 100;

        const {container} = render(progress, {
          props:{
            value:value,
            maximum:maximum
          }
        });
    
        var progressBar = container.childNodes[0] as HTMLElement;

        expect(progressBar.classList).toContain('progress');
        expect(progressBar.classList).toContain('is-normal');
        expect(progressBar.classList).toContain('is-primary');

        expect(progressBar.getAttribute('value')).toBe(value.toString());
        expect(progressBar.getAttribute('max')).toBe(maximum.toString());

        expect(progressBar.innerHTML).toBe(`${((value/maximum)*100).toFixed(2)}%`);
    }),
    test('check color types',async() => {
        for (const key in ColorTypes) {
            const {container} = render(progress, {
            props:{
                type:ColorTypes[key]
            }
            });
        
            var progressBar = container.childNodes[0] as HTMLElement;

            expect(progressBar.classList).toContain('progress');
            expect(progressBar.classList).toContain('is-normal');
            expect(progressBar.classList).toContain(`is-${ColorTypes[key]}`);

            expect(progressBar.innerText).toBe('');
        }
    }),
    test('check size types',async() => {
        for (const key in Sizes) {
            const {container} = render(progress, {
            props:{
                size:Sizes[key]
            }
            });
        
            var progressBar = container.childNodes[0] as HTMLElement;

            expect(progressBar.classList).toContain('progress');
            expect(progressBar.classList).toContain('is-primary');
            expect(progressBar.classList).toContain(`is-${Sizes[key]}`);

            expect(progressBar.innerText).toBe('');
        }
    })
});