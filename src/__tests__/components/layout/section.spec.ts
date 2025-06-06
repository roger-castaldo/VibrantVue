import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Section from '../../../components/layout/section.vue';
import { stripCommentNodes } from '../../common';
import { SectionSizes } from '../../../enums';


describe('Section', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(Section, {
        props: {},
        slots:{
          default:()=>'Test Content'
        }
      });
      return container;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults', async () => {
    const textContent = 'Sample text';

    const { container,getByText } = render(Section, {
      props: {},
      slots:{
        default:()=>textContent
      }
    });

    const box = container.childNodes[0] as HTMLElement;

    expect(box.classList).toContain('section');

    const children = stripCommentNodes(box);

    expect(children).toHaveLength(1);
    expect(box.innerText).toBe(textContent);
  }),
  test('check sizes', async () => {
    const textContent = 'Sample text';

    for(const key in SectionSizes){
      const { container } = render(Section, {
        props: {
          size:SectionSizes[key]
        },
        slots:{
          default:()=>textContent
        }
      });

      const box = container.childNodes[0] as HTMLElement;

      expect(box.classList).toContain('section');
      expect(box.classList).toContain(`is-${SectionSizes[key]}`);

      const children = stripCommentNodes(box);

      expect(children).toHaveLength(1);
      expect(box.innerText).toBe(textContent);
    }
  })
});