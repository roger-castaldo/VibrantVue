import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Media from '../../../components/layout/media.vue';
import { stripCommentNodes } from '../../common';
import {h} from 'vue';

const imageElement = h('img',{alt:'sample image',src:'data:image/png;base64,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'});


describe('Media', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(Media, {
        props: {},
        slots:{
          left_figure:()=>imageElement,
          content:()=>'This is media content',
          right_section:()=>'This is the right side'
        }
      });
      return container;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async() => {
    const leftContent = 'This is the left side';
    const content = 'This is media content';
    const rightContent = 'This is the right side';
    
    const {container} = render(Media, {
      props: {},
      slots:{
        left_figure:()=>leftContent,
        content:()=>content,
        right_section:()=>rightContent
      }
    });

    const media = container.childNodes[0] as HTMLElement;

    expect(media.className).toBe('media');
    expect(media.tagName).toBe('ARTICLE');

    const children = stripCommentNodes(media);

    expect(children).toHaveLength(3);

    const leftContainer = children[0] as HTMLElement;
    const contentContainer = children[1] as HTMLElement;
    const rightContainer = children[2] as HTMLElement;

    expect(leftContainer.className).toBe('media-left');
    expect(leftContainer.innerText).toBe(leftContent);

    expect(contentContainer.className).toBe('media-content');
    expect(contentContainer.innerText).toBe(content);

    expect(rightContainer.className).toBe('media-right');
    expect(rightContainer.innerText).toBe(rightContent);
  }),
  test('check without left',async() => {
    const content = 'This is media content';
    const rightContent = 'This is the right side';
    
    const {container} = render(Media, {
      props: {},
      slots:{
        content:()=>content,
        right_section:()=>rightContent
      }
    });

    const media = container.childNodes[0] as HTMLElement;

    expect(media.className).toBe('media');
    expect(media.tagName).toBe('ARTICLE');

    const children = stripCommentNodes(media);

    expect(children).toHaveLength(2);

    const contentContainer = children[0] as HTMLElement;
    const rightContainer = children[1] as HTMLElement;

    expect(contentContainer.className).toBe('media-content');
    expect(contentContainer.innerText).toBe(content);

    expect(rightContainer.className).toBe('media-right');
    expect(rightContainer.innerText).toBe(rightContent);
  }),
  test('check without right',async() => {
    const leftContent = 'This is the left side';
    const content = 'This is media content';
    
    const {container} = render(Media, {
      props: {},
      slots:{
        left_figure:()=>leftContent,
        content:()=>content
      }
    });

    const media = container.childNodes[0] as HTMLElement;

    expect(media.className).toBe('media');
    expect(media.tagName).toBe('ARTICLE');

    const children = stripCommentNodes(media);

    expect(children).toHaveLength(2);

    const leftContainer = children[0] as HTMLElement;
    const contentContainer = children[1] as HTMLElement;

    expect(leftContainer.className).toBe('media-left');
    expect(leftContainer.innerText).toBe(leftContent);

    expect(contentContainer.className).toBe('media-content');
    expect(contentContainer.innerText).toBe(content);

  })
});