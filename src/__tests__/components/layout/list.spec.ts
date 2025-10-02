import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import List from '../../../components/layout/list.vue';
import { stripCommentNodes } from '../../common';
import { ColorTypes } from '../../../enums';
import { h } from 'vue'

describe('List', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      let result : HTMLElement[] = [];
      for( const key in ColorTypes){
        const renderResult = render(List, {
          props: {
            items:[
              {
                icon:'person',
                name:'item1'
              },
              {
                name:'item2',
              }
            ],
            type:ColorTypes[key] 
          },
          slots:{
            item1:()=>'Item 1',
            item2:()=>'Item 2'
          }
        });
        result.push(renderResult.container);
        const renderHighlightResult = render(List, {
          props: {
            items:[
              {
                icon:'person',
                name:'item1'
              },
              {
                name:'item2'
              }
            ],
            type:ColorTypes[key],
            highlighted:true 
          },
          slots:{
            item1:()=>'Item 1',
            item2:()=>'Item 2'
          }
        });
        result.push(renderHighlightResult.container);
        const renderOutlinedResult = render(List, {
          props: {
            items:[
              {
                icon:'person',
                name:'item1'
              },
              {
                name:'item2'
              }
            ],
            type:ColorTypes[key],
            outlined:true 
          },
          slots:{
            item1:()=>'Item 1',
            item2:()=>'Item 2'
          }
        });
        result.push(renderOutlinedResult.container);
      }
      return result;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async()=>{
    const itemContent = 'Test Item Content';

    const {container} = render(List,{
      props:{
        items:[
          {
            name:'item1'
          }
        ]
      },
      slots:{
        item1:()=>itemContent
      }
    });

    const list = container.childNodes[0] as HTMLElement;

    expect(list.classList).toContain('block-list');
    expect(list.classList).toContain('has-radius');
    expect(list.classList).toContain('is-primary');
    expect(list.tagName).toBe('UL');

    const items = stripCommentNodes(list).map(n=>n as HTMLElement);

    expect(items).toHaveLength(1);

    expect(items[0].className).toBe('');
    expect(items[0].innerText).toBe(itemContent);
    expect(stripCommentNodes(items[0])).toHaveLength(1);
  }),
  test('check numbered',async()=>{
    const itemContent = 'Test Item Content';

    const {container} = render(List,{
      props:{
        numbered:true,
        items:[
          {
            name:'item1'
          }
        ]
      },
      slots:{
        item1:()=>itemContent
      }
    });

    const list = container.childNodes[0] as HTMLElement;

    expect(list.classList).toContain('block-list');
    expect(list.classList).toContain('has-radius');
    expect(list.classList).toContain('is-primary');
    expect(list.tagName).toBe('OL');

    const items = stripCommentNodes(list).map(n=>n as HTMLElement);

    expect(items).toHaveLength(1);

    expect(items[0].className).toBe('');
    expect(items[0].innerText).toBe(itemContent);
    expect(stripCommentNodes(items[0])).toHaveLength(1);
  }),
  test('check icon',async()=>{
    const itemContent = 'Test Item Content';

    const {container} = render(List,{
      props:{
        items:[
          {
            name:'item1',
            icon:'person'
          }
        ]
      },
      slots:{
        item1:()=>itemContent
      }
    });

    const list = container.childNodes[0] as HTMLElement;

    expect(list.classList).toContain('block-list');
    expect(list.classList).toContain('has-radius');
    expect(list.classList).toContain('is-primary');
    expect(list.tagName).toBe('UL');

    const items = stripCommentNodes(list).map(n=>n as HTMLElement);

    expect(items).toHaveLength(1);

    expect(items[0].classList).toContain('has-icon');
    expect(items[0].innerText).toBe(itemContent);

    const itemChildren = stripCommentNodes(items[0]);

    expect(itemChildren).toHaveLength(2);

    const iconSpan = itemChildren[0] as HTMLElement;

    expect(iconSpan.classList).toContain('icon')
    
    const iconSpanChildren = stripCommentNodes(iconSpan);

    expect(iconSpanChildren).toHaveLength(1);
    expect((iconSpanChildren[0] as HTMLElement).classList).toContain('fa-person');
  }),
  test('check modifiers',async()=>{
    const itemContent = 'Test Item Content';

    const {container} = render(List,{
      props:{
        compact:true,
        outlined:true,
        highlighted:true,
        items:[
          {
            name:'item1',
            outlined:true,
            highlighted:true
          }
        ]
      },
      slots:{
        item1:()=>itemContent
      }
    });

    const list = container.childNodes[0] as HTMLElement;

    expect(list.classList).toContain('block-list');
    expect(list.classList).toContain('has-radius');
    expect(list.classList).toContain('is-primary');
    expect(list.classList).toContain('is-small');
    expect(list.classList).toContain('is-outlined');
    expect(list.classList).toContain('is-highlighted');
    expect(list.tagName).toBe('UL');

    const items = stripCommentNodes(list).map(n=>n as HTMLElement);

    expect(items).toHaveLength(1);

    expect(items[0].classList).toContain('is-outlined');
    expect(items[0].classList).toContain('is-highlighted');
    expect(items[0].innerText).toBe(itemContent);
    expect(stripCommentNodes(items[0])).toHaveLength(1);
  }),
  test('check types',async()=>{
    const itemContent = 'Test Item Content';

    for(const key in ColorTypes){
      const {container} = render(List,{
        props:{
          type:ColorTypes[key],
          items:[
            {
              name:'item1',
              type:ColorTypes[key]
            }
          ]
        },
        slots:{
          item1:()=>itemContent
        }
      });

      const list = container.childNodes[0] as HTMLElement;

      expect(list.classList).toContain('block-list');
      expect(list.classList).toContain('has-radius');
      expect(list.classList).toContain(`is-${ColorTypes[key]}`);
      expect(list.tagName).toBe('UL');

      const items = stripCommentNodes(list).map(n=>n as HTMLElement);

      expect(items).toHaveLength(1);

      expect(items[0].classList).toContain(`is-${ColorTypes[key]}`);
      expect(items[0].innerText).toBe(itemContent);
      expect(stripCommentNodes(items[0])).toHaveLength(1);
    }
  }),
  test('check click',async()=>{
    const itemContent = 'Test Item Content';
    let clicked=false;

    const {container} = render(List,{
      props:{
        items:[
          {
            name:'item1',
            onClick:()=>{clicked=true;}
          }
        ]
      },
      slots:{
        item1:()=>itemContent
      }
    });

    const list = container.childNodes[0] as HTMLElement;

    expect(list.classList).toContain('block-list');
    expect(list.classList).toContain('has-radius');
    expect(list.classList).toContain('is-primary');
    expect(list.tagName).toBe('UL');

    const items = stripCommentNodes(list).map(n=>n as HTMLElement);

    expect(items).toHaveLength(1);

    expect(items[0].classList).toContain('is-clickable');
    expect(items[0].innerText).toBe(itemContent);
    expect(stripCommentNodes(items[0])).toHaveLength(1);

    items[0].click();

    expect(clicked).toBe(true);
  }),
  test('check empty list',async()=>{
    const itemContent = 'Test Item Content';

    const {container} = render(List,{
      props:{},
      slots:{
        default:()=>h('li',null,itemContent)
      }
    });

    const list = container.childNodes[0] as HTMLElement;

    expect(list.classList).toContain('block-list');
    expect(list.classList).toContain('has-radius');
    expect(list.classList).toContain('is-primary');
    expect(list.tagName).toBe('UL');

    const items = stripCommentNodes(list).map(n=>n as HTMLElement);

    expect(items).toHaveLength(1);

    expect(items[0].className).toBe('');
    expect(items[0].innerText).toBe(itemContent);
    expect(stripCommentNodes(items[0])).toHaveLength(1);
  })
});