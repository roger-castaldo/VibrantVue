import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Badge from '../../../components/common/badge.vue';
import { BadgePositions,ColorTypes } from '../../../enums';

describe('Badge', () => {
  test('check accessibility',async() => {
    const {container} = render(Badge, {
      props: {
        text:'Sample text'
      },
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('renders a badge with text', async () => {
    const textContent = 'Sample text';

    const { container,getByText } = render(Badge, {
      props: {
        text:textContent
      },
    });

    const badge = container.childNodes[0] as HTMLElement;

    expect(getByText(textContent)).not.toBeNull();
    expect(badge.classList).toContain('badge');
    expect(badge.classList).toContain('is-top-right');
  }),
  test('renders a badge with slot content', async () => {

    const slotContent = 'This is test content';

    const { container,getByText } = render(Badge, {
      slots:{
        default: () => slotContent
      }
    });

    const badge = container.childNodes[0] as HTMLElement;

    expect(getByText(slotContent)).not.toBeNull();
    expect(badge.classList).toContain('badge');
    expect(badge.classList).toContain('is-top-right');
  }),
  test('renders a badge in each position', async () => {

    for (const key in BadgePositions) {
      const { container } = render(Badge, {
        props: {
          position:BadgePositions[key]
        },
      });

      const badge = container.childNodes[0] as HTMLElement;
      
      expect(badge.classList).toContain('badge');
      expect(badge.classList).toContain(`is-${BadgePositions[key]}`);
    }
  }),
  test('renders a badge in with each color', async () => {

    for (const key in ColorTypes) {
      const { container } = render(Badge, {
        props: {
          type:ColorTypes[key]
        },
      });

      const badge = container.childNodes[0] as HTMLElement;
      
      expect(badge.classList).toContain('badge');
      expect(badge.classList).toContain(`is-${ColorTypes[key]}`);
      expect(badge.classList).toContain('is-top-right');
    }
  })
});