import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Box from '../../../components/layout/box.vue';
import { stripCommentNodes } from '../../common';


describe('Box', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(Box, {
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

    const { container,getByText } = render(Box, {
      props: {},
      slots:{
        default:()=>textContent
      }
    });

    const box = container.childNodes[0] as HTMLElement;

    expect(box.classList).toContain('box');

    const children = stripCommentNodes(box);

    expect(children).toHaveLength(1);
    expect(box.innerText).toBe(textContent);
  })
});