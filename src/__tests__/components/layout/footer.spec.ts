import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Footer from '../../../components/layout/footer.vue';
import { stripCommentNodes } from '../../common';


describe('Footer', () => {
  test('check accessibility',async() => {
    const {container} = render(Footer, {
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

    const { container,getByText } = render(Footer, {
      props: {},
      slots:{
        default:()=>textContent
      }
    });

    const footer = container.childNodes[0] as HTMLElement;

    expect(footer.classList).toContain('footer');

    const children = stripCommentNodes(footer);

    expect(children).toHaveLength(1);
    expect(footer.innerText).toBe(textContent);
  })
});