import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Slideout from '../../../components/layout/slideout.vue';
import { stripCommentNodes } from '../../common';
import { ColorTypes } from '../../../enums';


describe('Slideout', () => {
  test('check accessibility',async() => {
    const {container} = render(Slideout, {
      props: {
        show:true,
        not_animated:true
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
  test('check defaults', async () => {
    const testHeader = 'Test Header';
    const testContent = 'Test Content';
    const testFooter = 'Test Footer'

    const { container,getByText } = render(Slideout, {
      props: {
        show:true
      },
      slots:{
        header:()=>testHeader,
        content:()=>testContent,
        footer:()=>testFooter
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).toContain('is-active');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(3);

    const header = contentChildren[0] as HTMLElement;
    const body = contentChildren[1] as HTMLElement;
    const footer = contentChildren[2] as HTMLElement;

    expect(header.className).toBe('slideout-head');
    expect(header.innerText).toBe(testHeader);

    expect(body.className).toBe('slideout-body');
    expect(body.innerText).toBe(testContent);

    expect(footer.className).toBe('slideout-foot');
    expect(footer.innerText).toBe(testFooter);
  }),
  test('check modifiers', async () => {
    const testHeader = 'Test Header';
    const testContent = 'Test Content';
    const testFooter = 'Test Footer'

    const { container,getByText } = render(Slideout, {
      props: {
        show:false,
        not_animated:true,
        full_width:true
      },
      slots:{
        header:()=>testHeader,
        content:()=>testContent,
        footer:()=>testFooter
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).not.toContain('is-active');
    expect(slideout.classList).toContain('no-animation');
    expect(slideout.classList).toContain('is-fullwidth');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(3);

    const header = contentChildren[0] as HTMLElement;
    const body = contentChildren[1] as HTMLElement;
    const footer = contentChildren[2] as HTMLElement;

    expect(header.className).toBe('slideout-head');
    expect(header.innerText).toBe(testHeader);

    expect(body.className).toBe('slideout-body');
    expect(body.innerText).toBe(testContent);

    expect(footer.className).toBe('slideout-foot');
    expect(footer.innerText).toBe(testFooter);
  }),
  test('check without header', async () => {
    const testContent = 'Test Content';
    const testFooter = 'Test Footer'

    const { container,getByText } = render(Slideout, {
      props: {
        show:true
      },
      slots:{
        content:()=>testContent,
        footer:()=>testFooter
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).toContain('is-active');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(2);

    const body = contentChildren[0] as HTMLElement;
    const footer = contentChildren[1] as HTMLElement;

    expect(body.className).toBe('slideout-body');
    expect(body.innerText).toBe(testContent);

    expect(footer.className).toBe('slideout-foot');
    expect(footer.innerText).toBe(testFooter);
  }),
  test('check without footer', async () => {
    const testHeader = 'Test Header';
    const testContent = 'Test Content';

    const { container,getByText } = render(Slideout, {
      props: {
        show:true
      },
      slots:{
        header:()=>testHeader,
        content:()=>testContent
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).toContain('is-active');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(2);

    const header = contentChildren[0] as HTMLElement;
    const body = contentChildren[1] as HTMLElement;

    expect(header.className).toBe('slideout-head');
    expect(header.innerText).toBe(testHeader);

    expect(body.className).toBe('slideout-body');
    expect(body.innerText).toBe(testContent);
  }),
  test('check with default instead of content', async () => {
    const testHeader = 'Test Header';
    const testContent = 'Test Content';
    const testFooter = 'Test Footer'

    const { container,getByText } = render(Slideout, {
      props: {
        show:true
      },
      slots:{
        header:()=>testHeader,
        default:()=>testContent,
        footer:()=>testFooter
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).toContain('is-active');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(3);

    const header = contentChildren[0] as HTMLElement;
    const body = contentChildren[1] as HTMLElement;
    const footer = contentChildren[2] as HTMLElement;

    expect(header.className).toBe('slideout-head');
    expect(header.innerText).toBe(testHeader);

    expect(body.className).toBe('slideout-body');
    expect(body.innerText).toBe(testContent);

    expect(footer.className).toBe('slideout-foot');
    expect(footer.innerText).toBe(testFooter);
  }),
  test('check colors', async () => {
    const testHeader = 'Test Header';
    const testContent = 'Test Content';
    const testFooter = 'Test Footer'

    for(const key in ColorTypes){
      const { container,getByText } = render(Slideout, {
        props: {
          show:true,
          type:ColorTypes[key]
        },
        slots:{
          header:()=>testHeader,
          content:()=>testContent,
          footer:()=>testFooter
        }
      });

      const slideout = container.childNodes[0] as HTMLElement;

      expect(slideout.classList).toContain('slideout');
      expect(slideout.classList).toContain('is-active');
      expect(slideout.classList).toContain(`is-${ColorTypes[key]}`);
      
      const slideoutChildren = stripCommentNodes(slideout);

      expect(slideoutChildren).toHaveLength(2);

      const slideoutBackground = slideoutChildren[0] as HTMLElement;
      const slideoutContent = slideoutChildren[1] as HTMLElement;

      expect(slideoutBackground.className).toBe('slideout-background');

      expect(slideoutContent.className).toBe('slideout-content');

      const contentChildren = stripCommentNodes(slideoutContent);

      expect(contentChildren).toHaveLength(3);

      const header = contentChildren[0] as HTMLElement;
      const body = contentChildren[1] as HTMLElement;
      const footer = contentChildren[2] as HTMLElement;

      expect(header.className).toBe('slideout-head');
      expect(header.innerText).toBe(testHeader);

      expect(body.className).toBe('slideout-body');
      expect(body.innerText).toBe(testContent);

      expect(footer.className).toBe('slideout-foot');
      expect(footer.innerText).toBe(testFooter);

    }
  }),
  test('check header and footer slot arguments', async () => {
    const { container,getByText } = render(Slideout, {
      props: {
        show:true
      },
      slots:{
        header:(props)=>JSON.stringify(props),
        content:()=>'test',
        footer:(props)=>JSON.stringify(props)
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).toContain('is-active');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(3);

    const header = contentChildren[0] as HTMLElement;
    const body = contentChildren[1] as HTMLElement;
    const footer = contentChildren[2] as HTMLElement;

    expect(header.className).toBe('slideout-head');
    expect(body.className).toBe('slideout-body');
    expect(footer.className).toBe('slideout-foot');

    const headerProps = JSON.parse(header.innerText);

    expect(headerProps['header_class']).toBe('slideout-title has-text-centered');
    expect(headerProps['addon_class']).toBe('');

    const footerProps = JSON.parse(footer.innerText);
    expect(footerProps['addon_class']).toBe('');
  }),
  test('check with close', async () => {
    const testHeader = 'Test Header';
    const testContent = 'Test Content';
    const testFooter = 'Test Footer'

    let hasClosed=false;

    const { container,getByText } = render(Slideout, {
      props: {
        show:true,
        has_close:true,
        onClose:()=>hasClosed=true
      },
      slots:{
        header:()=>testHeader,
        content:()=>testContent,
        footer:()=>testFooter
      }
    });

    const slideout = container.childNodes[0] as HTMLElement;

    expect(slideout.classList).toContain('slideout');
    expect(slideout.classList).toContain('is-active');
    
    const slideoutChildren = stripCommentNodes(slideout);

    expect(slideoutChildren).toHaveLength(2);

    const slideoutBackground = slideoutChildren[0] as HTMLElement;
    const slideoutContent = slideoutChildren[1] as HTMLElement;

    expect(slideoutBackground.className).toBe('slideout-background');

    expect(slideoutContent.className).toBe('slideout-content');

    const contentChildren = stripCommentNodes(slideoutContent);

    expect(contentChildren).toHaveLength(4);

    const closeButton = contentChildren[0] as HTMLElement;
    const header = contentChildren[1] as HTMLElement;
    const body = contentChildren[2] as HTMLElement;
    const footer = contentChildren[3] as HTMLElement;

    expect(header.className).toBe('slideout-head');
    expect(header.innerText).toBe(testHeader);

    expect(body.className).toBe('slideout-body');
    expect(body.innerText).toBe(testContent);

    expect(footer.className).toBe('slideout-foot');
    expect(footer.innerText).toBe(testFooter);

    slideoutBackground.click();

    expect(hasClosed).toBe(true);

    hasClosed=false;

    expect(closeButton.className).toBe('delete');

    closeButton.click();

    expect(hasClosed).toBe(true);
  })
});