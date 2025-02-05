import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Button from '../../../components/form/button.vue';
import { ColorTypes } from '../../../enums';

describe('Form Button',()=>{
  test('check clicked event',async()=>{
      let buttonName : string|null = null;

      const wrapper = mount(Button,{
        props:{
          name:'button',
          disabled:false,
          label:'Button',
          onButtonClicked:(evnt)=>buttonName=evnt
        }
      });

      (wrapper.element as HTMLElement).click();

      expect(buttonName).toBe('button');
  }),
  test('check button structure',async()=>{
    const wrapper = mount(Button,{
      props:{
        name:'button',
        disabled:true,
        label:'Button',
        sstyle:ColorTypes.black,
        icon:'person'
      }
    });

    const root = wrapper.element as HTMLElement;

    expect(root.classList).toContain('is-black');
    expect(root.getAttribute('disabled')).toBe('');
    expect(root.innerHTML).toContain('fa-person');
    expect(root.innerText).toBe('Button');
  })
})