import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Box from '../../../components/layout/box.vue';
import { stripCommentNodes } from '../../common';


describe('Box', () => {
  test('check accessibility',async() => {
    const {container} = render(Box, {
      props: {},
      slots:{
        default:()=>'Test Content'
      }
    });

    const accessibilityScanResults =  await axe.run(container);

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