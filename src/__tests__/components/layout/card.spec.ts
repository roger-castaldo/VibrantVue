import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Card from '../../../components/layout/card.vue';
import { stripCommentNodes } from '../../common';


describe('Card', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(Card, {
        props: {
          icon:'person'
        },
        slots:{
          header:()=>'Test Header',
          content:()=>'Test Content',
          footer:()=>'Test Footer'
        }
      });
      return container;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async()=>{
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(Card, {
      props: {},
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(3);

    const header = children[0];
    const body = children[1];
    const footer = children[2];

    expect(header.classList).toContain('card-header');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('card-content');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('card-footer');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check full settings',async()=>{
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(Card, {
      props: {
        full_height:true,
        full_width:true
      },
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');
    expect(card.classList).toContain('is-fullwidth');
    expect(card.classList).toContain('is-fullheight');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(3);

    const header = children[0];
    const body = children[1];
    const footer = children[2];

    expect(header.classList).toContain('card-header');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('card-content');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('card-footer');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check header only',async()=>{
    const headerContent = 'Test Header';
    
    const {container} = render(Card, {
      props: {},
      slots:{
        header:()=>headerContent
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(1);

    const header = children[0];
    
    expect(header.classList).toContain('card-header');
    expect(header.innerText).toBe(headerContent);
  }),
  test('check content only',async()=>{
    const bodyContent = 'Test Content';
    
    const {container} = render(Card, {
      props: {},
      slots:{
        content:()=>bodyContent
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(1);

    const body = children[0];

    expect(body.classList).toContain('card-content');
    expect(body.innerText).toBe(bodyContent);
  }),
  test('check footer only',async()=>{
    const footerContent = 'Test Footer';

    const {container} = render(Card, {
      props: {},
      slots:{
        footer:()=>footerContent
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(1);

    const footer = children[0];

    expect(footer.classList).toContain('card-footer');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check icon',async()=>{
    const headerContent = 'Test Header';
    const bodyContent = 'Test Content';
    const footerContent = 'Test Footer';

    const {container} = render(Card, {
      props: {
        icon:'person'
      },
      slots:{
        header:()=>headerContent,
        content:()=>bodyContent,
        footer:()=>footerContent
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');

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

    expect(header.classList).toContain('card-header');
    expect(header.innerText).toBe(headerContent);

    expect(body.classList).toContain('card-content');
    expect(body.innerText).toBe(bodyContent);

    expect(footer.classList).toContain('card-footer');
    expect(footer.innerText).toBe(footerContent);

  }),
  test('check defaults',async()=>{
    const {container} = render(Card, {
      props: {},
      slots:{
        header:(props)=>JSON.stringify(props),
        footer:(props)=>JSON.stringify(props)
      }
    });

    const card = container.childNodes[0] as HTMLElement;

    expect(card.classList).toContain('card');

    const children = stripCommentNodes(card).map(n=>n as HTMLElement);

    expect(children).toHaveLength(2);

    const header = children[0];
    const footer = children[1];

    expect(header.classList).toContain('card-header');
    
    const headerProps = JSON.parse(header.innerText);

    expect(headerProps['header_class']).toBe('card-header-title has-text-centered');
    expect(headerProps['addon_class']).toBe('card-header-icon');
    
    expect(footer.classList).toContain('card-footer');
    
    const footerProps = JSON.parse(footer.innerText);

    expect(footerProps['addon_class']).toBe('card-footer-item');

  })
});