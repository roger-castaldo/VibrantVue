import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import title from '../../../components/common/title.vue';
import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';

describe('Title', () => {
    test('check default values',async() => {
        const testContent = 'Test Title';

        const {container} = render(title, {
          props:{
            text:testContent
          }
        });
    
        var titleItem = container.childNodes[0] as HTMLElement;

        expect(titleItem.tagName).toBe('H1');

        expect(titleItem.classList).toContain('title');
        expect(titleItem.classList).toContain('is-1');
        expect(titleItem.classList).toContain('is-skeleton');

        expect(titleItem.innerText).toBe(testContent);
    }),
    test('check loading setting',async() => {
        const testContent = 'Test Title';

        const props = {
          text:testContent,
          is_loading: ref(true)
        }

        const wrapper = mount(title, {
          props:props
        });
    
        let titleItem = wrapper.element as HTMLElement;

        expect(titleItem.tagName).toBe('H1');

        expect(titleItem.classList).toContain('title');
        expect(titleItem.classList).toContain('is-1');
        expect(titleItem.classList).toContain('is-skeleton');

        expect(titleItem.innerText).toBe(testContent);

        props.is_loading.value = false;
        
        await nextTick();

        titleItem = wrapper.element as HTMLElement;

        expect(titleItem.tagName).toBe('H1');

        expect(titleItem.classList).toContain('title');
        expect(titleItem.classList).toContain('is-1');
        expect(titleItem.classList).not.toContain('is-skeleton');

        expect(titleItem.innerText).toBe(testContent);
    }),
    test('check sizes',async() => {
      const testContent = 'Test Title';

      for(let x=1;x<7;x++){
        const {container} = render(title, {
          props:{
            text:testContent,
            level:x
          }
        });
    
        var titleItem = container.childNodes[0] as HTMLElement;

        expect(titleItem.tagName).toBe(`H${x}`);

        expect(titleItem.classList).toContain('title');
        expect(titleItem.classList).toContain(`is-${x}`);
        expect(titleItem.classList).toContain('is-skeleton');

        expect(titleItem.innerText).toBe(testContent);
      }
  }),
  test('check level error',async() => {
        const testContent = 'Test Title';
        let tooLow=false;
        let tooHigh=false;

        try{
          const {container} = render(title, {
            props:{
              text:testContent,
              level:0
            }
          });
        }catch{
          tooLow=true;
        }

        try{
          const {container} = render(title, {
            props:{
              text:testContent,
              level:7
            }
          });
        }catch{
          tooHigh=true;
        }
    
        expect(tooLow).toBe(true);
        expect(tooHigh).toBe(true);
    })
});