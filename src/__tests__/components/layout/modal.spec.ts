import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Modal from '../../../components/layout/modal.vue';
import { stripCommentNodes } from '../../common';


describe('Modal', () => {
  test('check defaults',async()=>{
    const testContent = 'Test Modal Content';
    
    const {container} = render(Modal, {
      props: {},
      slots:{
        default:()=>testContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');
    expect(modal.classList).toContain('is-active');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');
    
    const contentContainer = modalChildren[1] as HTMLElement;

    expect(contentContainer.className).toBe('modal-content');
    expect(contentContainer.innerText).toBe(testContent);

  }),
  test('check close',async()=>{
    let hasClosed=false;
    const testContent = 'Test Modal Content';
    
    const {container} = render(Modal, {
      props: {
        has_close:true,
        onClose:()=>hasClosed=true
      },
      slots:{
        default:()=>testContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');
    expect(modal.classList).toContain('is-active');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(3);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');
    
    const contentContainer = modalChildren[1] as HTMLElement;

    expect(contentContainer.className).toBe('modal-content');
    expect(contentContainer.innerText).toBe(testContent);

    const closeButton = modalChildren[2] as HTMLElement;

    expect(closeButton.className).toBe('modal-close is-large');

    closeButton.click();

    expect(hasClosed).toBe(true);
  }),
  test('check z-index',async()=>{
    const testContent = 'Test Modal Content';
    
    const {container} = render(Modal, {
      props: {
        z_index:1000
      },
      slots:{
        default:()=>testContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');
    expect(modal.classList).toContain('is-active');
    expect(modal.style.zIndex).toBe('1000');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');
    
    const contentContainer = modalChildren[1] as HTMLElement;

    expect(contentContainer.className).toBe('modal-content');
    expect(contentContainer.innerText).toBe(testContent);

  })
});