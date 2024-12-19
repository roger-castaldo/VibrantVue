import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import ModalCard from '../../../components/layout/modal-card.vue';
import { stripCommentNodes } from '../../common';


describe('ModalCard', () => {
  test('check accessibility',async() => {
    const {container} = render(ModalCard, {
      props: {
        icon:'person',
        show:true
      },
      slots:{
        header:()=>'Test Header',
        content:()=>'Test Content',
        footer:()=>'Test Footer'
      }
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async()=>{
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(ModalCard, {
      props: {
        show:true
      },
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');
    expect(modal.classList).toContain('is-active');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(3);

    const header = children[0];
    const body = children[1];
    const footer = children[2];

    expect(header.classList).toContain('modal-card-head');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('modal-card-body');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('modal-card-foot');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check full settings',async()=>{
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(ModalCard, {
      props: {
        full_height:true,
        full_width:true,
        max_width:true,
        max_height:true
      },
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');
    expect(card.classList).toContain('is-fullwidth');
    expect(card.classList).toContain('is-fullheight');
    expect(card.classList).toContain('is-maxwidth');
    expect(card.classList).toContain('is-maxheight');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(3);

    const header = children[0];
    const body = children[1];
    const footer = children[2];

    expect(header.classList).toContain('modal-card-head');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('modal-card-body');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('modal-card-foot');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check header only',async()=>{
    const headerContent = 'Test Header';
    
    const {container} = render(ModalCard, {
      props: {},
      slots:{
        header:()=>headerContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(1);

    const header = children[0];
    
    expect(header.classList).toContain('modal-card-head');
    expect(header.innerText).toBe(headerContent);
  }),
  test('check content only',async()=>{
    const bodyContent = 'Test Content';
    
    const {container} = render(ModalCard, {
      props: {},
      slots:{
        content:()=>bodyContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(1);

    const body = children[0];

    expect(body.classList).toContain('modal-card-body');
    expect(body.innerText).toBe(bodyContent);
  }),
  test('check footer only',async()=>{
    const footerContent = 'Test Footer';

    const {container} = render(ModalCard, {
      props: {},
      slots:{
        footer:()=>footerContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(1);

    const footer = children[0];

    expect(footer.classList).toContain('modal-card-foot');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check icon',async()=>{
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(ModalCard, {
      props: {
        icon:'person'
      },
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(4);

    const iconContainer = children[0];
    const header = children[1];
    const body = children[2];
    const footer = children[3];

    expect(iconContainer.classList).toContain('card-icon');

    const iconChildren = stripCommentNodes(iconContainer);

    expect(iconChildren).toHaveLength(1);

    const iconWrapper = iconChildren[0] as HTMLElement;

    expect(iconWrapper.classList).toContain('card-icon-wrapper');

    const iconWrapperChildren = stripCommentNodes(iconWrapper);

    expect(iconWrapperChildren).toHaveLength(1);

    const icon = iconWrapperChildren[0] as HTMLElement;

    expect(icon.classList).toContain('fa-person');
    expect(icon.classList).toContain('fa-2xl');

    expect(header.classList).toContain('modal-card-head');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('modal-card-body');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('modal-card-foot');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check slot props',async()=>{
    const {container} = render(ModalCard, {
      props: {},
      slots:{
        header:(props)=>JSON.stringify(props),
        footer:(props)=>JSON.stringify(props)
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(2);

    const header = children[0];
    const footer = children[1];

    expect(header.classList).toContain('modal-card-head');
    
    const headerProps = JSON.parse(header.innerText);

    expect(headerProps['header_class']).toBe('modal-card-title has-text-centered');
    expect(headerProps['addon_class']).toBe('card-header-icon');
    
    expect(footer.classList).toContain('modal-card-foot');
    
    const footerProps = JSON.parse(footer.innerText);

    expect(footerProps['addon_class']).toBe('card-footer-item');

  }),
  test('check close',async()=>{
    let hasClosed=false;
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(ModalCard, {
      props: {
        show:true,
        has_close:true,
        onClose:()=>hasClosed=true
      },
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const modal = container.childNodes[0] as HTMLElement;

    expect(modal.classList).toContain('modal');
    expect(modal.classList).toContain('is-active');

    const modalChildren = stripCommentNodes(modal);

    expect(modalChildren).toHaveLength(2);

    expect((modalChildren[0] as HTMLElement).className).toBe('modal-background');

    const card = modalChildren[1] as HTMLElement;

    expect(card.classList).toContain('modal-card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(3);

    const header = children[0];
    const body = children[1];
    const footer = children[2];

    expect(header.classList).toContain('modal-card-head');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('modal-card-body');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('modal-card-foot');
    expect(footer.innerText).toBe(footerContent);

    const headerChildren = stripCommentNodes(header);

    expect(headerChildren).toHaveLength(2);

    const closeIcon = headerChildren[1] as HTMLElement;

    expect(closeIcon.className).toBe('delete');

    closeIcon.click();

    expect(hasClosed).toBe(true);

  })
});