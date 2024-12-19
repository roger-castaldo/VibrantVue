import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Level from '../../../components/layout/level.vue';
import { stripCommentNodes } from '../../common';


describe('Level', () => {
  test('check accessibility',async() => {
    const {container} = render(Level, {
      props: {
        left_slots:['left'],
        right_slots:['right'],
        slots:['slot']
      },
      slots:{
        left:()=>'This is left',
        right:()=>'This is right',
        slot:()=>'This is middle'
      }
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('left slots',async()=>{
    const slotContent = 'This is a test slot';

    const {container} = render(Level,{
      props:{
        left_slots:['slot1','slot2']
      },
      slots:{
        slot1:()=>slotContent
      }
    });

    const levelContainer = container.childNodes[0] as HTMLElement;

    expect(levelContainer.classList).toContain('level');
    expect(levelContainer.tagName).toBe('NAV');

    const children = stripCommentNodes(levelContainer);

    expect(children).toHaveLength(1);
    
    const leftContainer = children[0] as HTMLElement;

    expect(leftContainer.classList).toContain('level-left');

    const leftContent = stripCommentNodes(leftContainer);

    expect(leftContent).toHaveLength(1);

    const slot = leftContent[0] as HTMLElement;

    expect(slot.classList).toContain('level-item');
    expect(slot.innerText).toBe(slotContent);
  }),
  test('right slots',async()=>{
    const slotContent = 'This is a test slot';

    const {container} = render(Level,{
      props:{
        right_slots:['slot1','slot2']
      },
      slots:{
        slot1:()=>slotContent
      }
    });

    const levelContainer = container.childNodes[0] as HTMLElement;

    expect(levelContainer.classList).toContain('level');
    expect(levelContainer.tagName).toBe('NAV');

    const children = stripCommentNodes(levelContainer);

    expect(children).toHaveLength(1);
    
    const rightContainer = children[0] as HTMLElement;

    expect(rightContainer.classList).toContain('level-right');

    const rightContent = stripCommentNodes(rightContainer);

    expect(rightContent).toHaveLength(1);

    const slot = rightContent[0] as HTMLElement;

    expect(slot.classList).toContain('level-item');
    expect(slot.innerText).toBe(slotContent);
  }),
  test('slots',async()=>{
    const slotContent = 'This is a test slot';

    const {container} = render(Level,{
      props:{
        slots:['slot1','slot2']
      },
      slots:{
        slot1:()=>slotContent
      }
    });

    const levelContainer = container.childNodes[0] as HTMLElement;

    expect(levelContainer.classList).toContain('level');
    expect(levelContainer.tagName).toBe('NAV');

    const children = stripCommentNodes(levelContainer);

    expect(children).toHaveLength(1);
    
    const slot = children[0] as HTMLElement;

    expect(slot.classList).toContain('level-item');
    expect(slot.innerText).toBe(slotContent);
  })
});