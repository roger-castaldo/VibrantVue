import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import tags from '../../../components/common/tags.vue';
import { Sizes } from '../../../enums';

describe('Tags', () => {
    test('check default values',async() => {
        const testContent = 'Test Tag';

        const {container} = render(tags, {
          props:{},
          slots:{
            default:()=>testContent
          }
        });
    
        var tagsItem = container.childNodes[0] as HTMLElement;

        expect(tagsItem.classList).toContain('tags');

        expect(tagsItem.innerText).toBe(testContent);
    }),
    test('check style tweaks',async() => {
      const testContent = 'Test Tag';

        const {container} = render(tags, {
          props:{
            addons:true
          },
          slots:{
            default:()=>testContent
          }
        });
    
        var tagsItem = container.childNodes[0] as HTMLElement;

        expect(tagsItem.classList).toContain('tags');
        expect(tagsItem.classList).toContain('has-addons');

        expect(tagsItem.innerText).toBe(testContent);
  }),
  test('check sizes',async() => {
    const testContent = 'Test Tag';

    for (const key in Sizes) {
      const {container} = render(tags, {
        props:{
          size:Sizes[key]
        },
        slots:{
          default:()=>testContent
        }
      });
  
      var tagsItem = container.childNodes[0] as HTMLElement;

      expect(tagsItem.classList).toContain('tags');
      expect(tagsItem.classList).toContain(`are-${Sizes[key]}`);

      expect(tagsItem.innerText).toBe(testContent);
    }
  })
});