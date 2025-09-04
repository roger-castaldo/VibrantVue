import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Banner from '../../../components/layout/banner.vue';
import { stripCommentNodes } from '../../common';
import { ColorTypes } from '../../../enums';


describe('Banner', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      let result : HTMLElement[] = [];
      for( const key in ColorTypes){
        const renderResult = render(Banner,{
          props: {
            title:'Sample text',
            type:ColorTypes[key]
          },
        });
        result.push(renderResult.container);
      }
      return result;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults', async () => {
    const textContent = 'Sample text';

    const { container,getByText } = render(Banner, {
      props: {
        title:textContent
      },
    });

    const banner = container.childNodes[0] as HTMLElement;

    expect(banner.classList).toContain('hero');
    expect(banner.classList).toContain('is-small');
    expect(banner.classList).toContain('has-text-centered');

    const bannerChildren = stripCommentNodes(banner);

    expect(bannerChildren).toHaveLength(1);

    const bannerBody = bannerChildren[0] as HTMLElement;

    expect(bannerBody.classList).toContain('hero-body');

    const bodyChildren = stripCommentNodes(bannerBody);

    expect(bodyChildren).toHaveLength(1);

    const bannerTitle = bodyChildren[0] as HTMLElement;

    expect(bannerTitle.classList).toContain('title');
    expect(bannerTitle.innerHTML).toBe(textContent);
  }),
  test('check with subtitle', async () => {
    const textContent = 'Sample text';
    const textSubtitle = 'Sample subtitle';

    const { container,getByText } = render(Banner, {
      props: {
        title:textContent,
        subtitle:textSubtitle
      },
    });

    const banner = container.childNodes[0] as HTMLElement;

    expect(banner.classList).toContain('hero');
    expect(banner.classList).toContain('is-small');
    expect(banner.classList).toContain('has-text-centered');

    const bannerChildren = stripCommentNodes(banner);

    expect(bannerChildren).toHaveLength(1);

    const bannerBody = bannerChildren[0] as HTMLElement;

    expect(bannerBody.classList).toContain('hero-body');

    const bodyChildren = stripCommentNodes(bannerBody);

    expect(bodyChildren).toHaveLength(2);

    const bannerTitle = bodyChildren[0] as HTMLElement;

    expect(bannerTitle.classList).toContain('title');
    expect(bannerTitle.innerHTML).toBe(textContent);

    const bannerSubtitle = bodyChildren[1] as HTMLElement;

    expect(bannerSubtitle.classList).toContain('subtitle');
    expect(bannerSubtitle.innerText).toBe(textSubtitle);
  }),
  test('check types', async () => {
    const textContent = 'Sample text';

    for (const key in ColorTypes) {
      const { container,getByText } = render(Banner, {
        props: {
          title:textContent,
          type:ColorTypes[key]
        },
      });

      const banner = container.childNodes[0] as HTMLElement;

      expect(banner.classList).toContain('hero');
      expect(banner.classList).toContain('is-small');
      expect(banner.classList).toContain('has-text-centered');
      expect(banner.classList).toContain(`is-${ColorTypes[key]}`);

      const bannerChildren = stripCommentNodes(banner);

      expect(bannerChildren).toHaveLength(1);

      const bannerBody = bannerChildren[0] as HTMLElement;

      expect(bannerBody.classList).toContain('hero-body');

      const bodyChildren = stripCommentNodes(bannerBody);

      expect(bodyChildren).toHaveLength(1);

      const bannerTitle = bodyChildren[0] as HTMLElement;

      expect(bannerTitle.classList).toContain('title');
      expect(bannerTitle.innerHTML).toBe(textContent);
    }
  })
});