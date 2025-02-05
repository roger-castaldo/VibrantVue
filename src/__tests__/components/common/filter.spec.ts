import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import filter from '../../../components/common/filter.vue';
import { stripCommentNodes } from '../../common';
import translate from '../../../messages/messages.js';
import {sleep} from '../../common';
import { userEvent } from '@vitest/browser/context'

describe('Filter', () => {
    test('check accessibility',async() => {
      const {container} = render(filter, {
        props: {
          text:'Sample text'
        },
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('renders a basic filter', async () => {
      const { container,getByText } = render(filter, {
        props: {},
      });
  
      const filterContainer = container.childNodes[0] as HTMLElement;

      expect(filterContainer.className).toBe('field');

      const controlContainer = stripCommentNodes(filterContainer).map(x=>x as HTMLElement)[0];
  
      expect(controlContainer.classList).toContain('control');
      expect(controlContainer.classList).toContain('has-icons-left');

      const controlContainerChildren = stripCommentNodes(controlContainer);
      
      expect(controlContainerChildren).toHaveLength(2);

      const filterInput = controlContainerChildren[0] as HTMLElement;

      expect(filterInput.getAttribute('type')).toBe('text');
      expect(filterInput.classList).toContain('input');
      expect(filterInput.classList).toContain('is-expanded');
      expect(filterInput.classList).toContain('is-rounded');
      expect(filterInput.getAttribute('placeholder')).toBe(translate('Filter.Filter'));

      const filterIconContainer = controlContainerChildren[1] as HTMLElement;

      expect(filterIconContainer.classList).toContain('is-left');
      expect(stripCommentNodes(filterIconContainer).length).toBe(1);

      const filterIcon = stripCommentNodes(filterIconContainer)[0] as HTMLElement;

      expect(filterIcon.classList).toContain('fa-filter');
      expect(filterIcon.classList).toContain('fa-sm');
    }),
    test('renders a filter with default value', async () => {
        const defaultValue:string = 'Test Filter Value';
        let currentFilterValue:string|null = null;
        const { getByRole } = render(filter, {
          props: {
            default_value:defaultValue,
            onFilter:(val)=>currentFilterValue=val
          },
        });
    
        const filterInput = getByRole('searchbox');
        
        expect(currentFilterValue).toBeNull();

        await userEvent.type(filterInput,'{enter}');

        expect(currentFilterValue).toBe(defaultValue);
        currentFilterValue=null;

        await userEvent.clear(filterInput);
        await userEvent.type(filterInput,'{enter}');

        expect(currentFilterValue).toBe(defaultValue);

      }),
      test('renders a filter and interacts with it to filter', async () => {
        const searchValue:string = 'Find me';
        let currentFilterValue:string|null = null;
        const { getByRole } = render(filter, {
          props: {
            onFilter:(val)=>currentFilterValue=val
          },
        });
    
        const filterInput = getByRole('searchbox');
        
        expect(currentFilterValue).toBeNull();

        await userEvent.type(filterInput,`${searchValue}{enter}`);

        expect(currentFilterValue).toBe(searchValue);
        currentFilterValue=null;

        await userEvent.clear(filterInput);
        await userEvent.type(filterInput,'{enter}');

        expect(currentFilterValue).toBeNull();

      })
});
