import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Panel from '../../../components/layout/panel.vue';
import { stripCommentNodes } from '../../common';
import { ColorTypes } from '../../../enums';


describe('Panel', () => {
  test('check accessibility',async() => {
    const {container} = render(Panel, {
      props: {},
      slots:{
        header:()=>'Test Header',
        tabs:()=>'Test Tabs',
        default:()=>'Test Panel Block'
      }
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async()=>{
    const headerContent = 'Test Header';
    const tabContent = 'Test Tabs';
    const blockContent = 'Test Panel Block';

    const {container} = render(Panel, {
      props: {},
      slots:{
        header:()=>headerContent,
        tabs:()=>tabContent,
        default:()=>blockContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(3);

    const header = children[0] as HTMLElement;
    const tabs = children[1] as HTMLElement;
    const block = children[2] as HTMLElement;

    expect(header.classList).toContain('panel-heading');
    expect(header.innerText).toBe(headerContent);

    expect(tabs.classList).toContain('panel-tabs');
    expect(tabs.innerText).toBe(tabContent);

    expect(block.classList).toContain('panel-block');
    expect(block.innerText).toBe(blockContent);
  }),
  test('check without header',async()=>{
    const tabContent = 'Test Tabs';
    const blockContent = 'Test Panel Block';

    const {container} = render(Panel, {
      props: {},
      slots:{
        tabs:()=>tabContent,
        default:()=>blockContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(2);

    const tabs = children[0] as HTMLElement;
    const block = children[1] as HTMLElement;

    expect(tabs.classList).toContain('panel-tabs');
    expect(tabs.innerText).toBe(tabContent);

    expect(block.classList).toContain('panel-block');
    expect(block.innerText).toBe(blockContent);
  }),
  test('check without tabs',async()=>{
    const headerContent = 'Test Header';
    const blockContent = 'Test Panel Block';

    const {container} = render(Panel, {
      props: {},
      slots:{
        header:()=>headerContent,
        default:()=>blockContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(2);

    const header = children[0] as HTMLElement;
    const block = children[1] as HTMLElement;

    expect(header.classList).toContain('panel-heading');
    expect(header.innerText).toBe(headerContent);

    expect(block.classList).toContain('panel-block');
    expect(block.innerText).toBe(blockContent);
  }),
  test('check without default block',async()=>{
    const headerContent = 'Test Header';
    const tabContent = 'Test Tabs';

    const {container} = render(Panel, {
      props: {},
      slots:{
        header:()=>headerContent,
        tabs:()=>tabContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(2);

    const header = children[0] as HTMLElement;
    const tabs = children[1] as HTMLElement;

    expect(header.classList).toContain('panel-heading');
    expect(header.innerText).toBe(headerContent);

    expect(tabs.classList).toContain('panel-tabs');
    expect(tabs.innerText).toBe(tabContent);
  }),
  test('check with named blocks',async()=>{
    
    const firstBlockContent = 'First Panel Block';
    const secondBlockContent = 'Second Panel Block';

    const {container} = render(Panel, {
      props: {
        block_names:['first','second']
      },
      slots:{
        first:()=>firstBlockContent,
        second:()=>secondBlockContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(2);

    const firstBlock = children[0] as HTMLElement;
    const secondBlock = children[1] as HTMLElement;

    expect(firstBlock.classList).toContain('panel-block');
    expect(firstBlock.innerText).toBe(firstBlockContent);

    expect(secondBlock.classList).toContain('panel-block');
    expect(secondBlock.innerText).toBe(secondBlockContent);
  }),
  test('check with modifiers',async()=>{
    const headerContent = 'Test Header';
    const tabContent = 'Test Tabs';
    const blockContent = 'Test Panel Block';

    const {container} = render(Panel, {
      props: {
        full_height:true,
        full_width:true
      },
      slots:{
        header:()=>headerContent,
        tabs:()=>tabContent,
        default:()=>blockContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');
    expect(panel.classList).toContain('is-fullwidth');
    expect(panel.classList).toContain('is-fullheight');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(3);

    const header = children[0] as HTMLElement;
    const tabs = children[1] as HTMLElement;
    const block = children[2] as HTMLElement;

    expect(header.classList).toContain('panel-heading');
    expect(header.innerText).toBe(headerContent);

    expect(tabs.classList).toContain('panel-tabs');
    expect(tabs.innerText).toBe(tabContent);

    expect(block.classList).toContain('panel-block');
    expect(block.innerText).toBe(blockContent);
  }),
  test('check types',async()=>{
    const headerContent = 'Test Header';
    const tabContent = 'Test Tabs';
    const blockContent = 'Test Panel Block';

    for(const key in ColorTypes){
      const {container} = render(Panel, {
        props: {
          type:ColorTypes[key]
        },
        slots:{
          header:()=>headerContent,
          tabs:()=>tabContent,
          default:()=>blockContent
        }
      });

      const panel = container.childNodes[0] as HTMLElement;

      expect(panel.classList).toContain('panel');
      expect(panel.classList).toContain(`is-${ColorTypes[key]}`);

      const children = stripCommentNodes(panel);

      expect(children).toHaveLength(3);

      const header = children[0] as HTMLElement;
      const tabs = children[1] as HTMLElement;
      const block = children[2] as HTMLElement;

      expect(header.classList).toContain('panel-heading');
      expect(header.innerText).toBe(headerContent);

      expect(tabs.classList).toContain('panel-tabs');
      expect(tabs.innerText).toBe(tabContent);

      expect(block.classList).toContain('panel-block');
      expect(block.innerText).toBe(blockContent);
    }
  }),
  test('check hidden sections',async()=>{
    const headerContent = 'Test Header';
    const tabContent = 'Test Tabs';
    const blockContent = 'Test Panel Block';

    const {container} = render(Panel, {
      props: {
        hidden_sections:['header','tabs','default']
      },
      slots:{
        header:()=>headerContent,
        tabs:()=>tabContent,
        default:()=>blockContent
      }
    });

    const panel = container.childNodes[0] as HTMLElement;

    expect(panel.classList).toContain('panel');

    const children = stripCommentNodes(panel);

    expect(children).toHaveLength(3);

    const header = children[0] as HTMLElement;
    const tabs = children[1] as HTMLElement;
    const block = children[2] as HTMLElement;

    expect(header.classList).toContain('panel-heading');
    expect(header.style.display).toBe('none');
    expect(header.innerText).toBe(headerContent);

    expect(tabs.classList).toContain('panel-tabs');
    expect(tabs.style.display).toBe('none');
    expect(tabs.innerText).toBe(tabContent);

    expect(block.classList).toContain('panel-block');
    expect(block.style.display).toBe('none');
    expect(block.innerText).toBe(blockContent);
  })
});