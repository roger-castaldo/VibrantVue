import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import image from '../../../components/common/image.vue';
import { ImageSizes } from '../../../enums';
import { ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';

describe('Image', () => {
    test('check default values',async() => {
        const alt = 'Test Alt';
        const src = 'https://placehold.co/48x48'

        const {container} = render(image, {
          props:{
            alt:alt,
            src:src
          }
        });
    
        const figure = container.childNodes[0] as HTMLElement;

        expect(figure.tagName).toBe('FIGURE');

        expect(figure.classList).toContain('image');
        expect(figure.classList).toContain('is-48x48');
        expect(figure.classList).toContain('is-skeleton');

        expect(figure.childNodes).toHaveLength(1);

        const img = figure.childNodes[0] as HTMLElement;

        expect(img.tagName).toBe('IMG');

        expect(img.getAttribute('alt')).toBe(alt);
        expect(img.getAttribute('src')).toBe(src);
    }),
    test('check loading setting',async() => {
        const alt = 'Test Alt';
        const src = 'https://placehold.co/48x48'

        const props = {
          alt:alt,
          src:src,
          is_loading:ref(true)
        }

        const wrapper = mount(image, {
          props:props
        });
    
        let figure = wrapper.element as HTMLElement;

        expect(figure.tagName).toBe('FIGURE');

        expect(figure.classList).toContain('image');
        expect(figure.classList).toContain('is-48x48');
        expect(figure.classList).toContain('is-skeleton');

        expect(figure.childNodes).toHaveLength(1);

        const img = figure.childNodes[0] as HTMLElement;

        expect(img.tagName).toBe('IMG');

        expect(img.getAttribute('alt')).toBe(alt);
        expect(img.getAttribute('src')).toBe(src);

        props.is_loading.value = false;

        await nextTick();

        figure = wrapper.element as HTMLElement;

        expect(figure.classList).not.toContain('is-skeleton');
    }),
    test('check sizes',async() => {
        const alt = 'Test Alt';
        const src = 'https://placehold.co/48x48'

        for(const key in ImageSizes){

          const {container} = render(image, {
            props:{
              alt:alt,
              src:src,
              size:ImageSizes[key]
            }
          });
      
          const figure = container.childNodes[0] as HTMLElement;

          expect(figure.tagName).toBe('FIGURE');

          expect(figure.classList).toContain('image');
          expect(figure.classList).toContain(`${ImageSizes[key]}`);
          expect(figure.classList).toContain('is-skeleton');

          expect(figure.childNodes).toHaveLength(1);

          const img = figure.childNodes[0] as HTMLElement;

          expect(img.tagName).toBe('IMG');

          expect(img.getAttribute('alt')).toBe(alt);
          expect(img.getAttribute('src')).toBe(src);
        }
    })
});