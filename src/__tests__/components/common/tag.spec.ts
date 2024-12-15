import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import tag from '../../../components/common/tag.vue';
import { ColorTypes, Sizes } from '../../../enums';

describe('Tag', () => {
    test('check accessibility',async() => {
      const {container} = render(tag, {
        props:{
          text:'test tag'
        },
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check default values',async() => {
        const testContent = 'Test Tag';

        const {container} = render(tag, {
          props:{
            text:testContent
          }
        });
    
        var tagItem = container.childNodes[0] as HTMLElement;

        expect(tagItem.classList).toContain('tag');
        expect(tagItem.classList).toContain('is-normal');
        expect(tagItem.classList).toContain('is-primary');

        expect(tagItem.innerText).toBe(testContent);
    }),
    test('check style tweaks',async() => {
      const testContent = 'Test Tag';

      const {container} = render(tag, {
        props:{
          text:testContent,
          rounded:true,
          is_delete:true,
          light:true
        }
      });
  
      var tagItem = container.childNodes[0] as HTMLElement;

      expect(tagItem.classList).toContain('tag');
      expect(tagItem.classList).toContain('is-normal');
      expect(tagItem.classList).toContain('is-primary');
      expect(tagItem.classList).toContain('is-light');
      expect(tagItem.classList).toContain('is-rounded');
      expect(tagItem.classList).toContain('is-delete');

      expect(tagItem.innerText).toBe(testContent);
  }),
  test('check color types',async() => {
    const testContent = 'Test Tag';

    for (const key in ColorTypes) {
        const {container} = render(tag, {
          props:{
            text:testContent,
            type:ColorTypes[key]
          }
        });
    
        var tagItem = container.childNodes[0] as HTMLElement;

        expect(tagItem.classList).toContain('tag');
        expect(tagItem.classList).toContain('is-normal');
        expect(tagItem.classList).toContain(`is-${ColorTypes[key]}`);

        expect(tagItem.innerText).toBe(testContent);
    }
  }),
  test('check sizes',async() => {
    const testContent = 'Test Tag';

    for (const key in Sizes) {
        const {container} = render(tag, {
          props:{
            text:testContent,
            size:Sizes[key]
          }
        });
    
        var tagItem = container.childNodes[0] as HTMLElement;

        expect(tagItem.classList).toContain('tag');
        expect(tagItem.classList).toContain('is-primary');
        expect(tagItem.classList).toContain(`is-${Sizes[key]}`);

        expect(tagItem.innerText).toBe(testContent);
    }
  }),
  test('check slot content',async() => {
    const testContent = 'Test Tag';

    const {container} = render(tag, {
      props:{},
      slots:{
        default:()=>testContent
      }
    });

    var tagItem = container.childNodes[0] as HTMLElement;

    expect(tagItem.classList).toContain('tag');
    expect(tagItem.classList).toContain('is-normal');
    expect(tagItem.classList).toContain('is-primary');

    expect(tagItem.innerText).toBe(testContent);
})
});