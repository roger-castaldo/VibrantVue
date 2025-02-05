import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import AutoComplete from '../../../components/form/autocomplete.vue';
import { sleep, stripCommentNodes } from '../../common';
import { ValueChangedEvent } from '../../../components';
import translate from '../../../messages/messages';

describe('AutoComplete',()=>{
  test('check set/get value',async()=>{
      let valueChanged : ValueChangedEvent|null = null;

      const wrapper = mount(AutoComplete,{
        props:{
          name:'autocomplete',
          disabled:false,
          title:'autocomplete',
          values:[
              {id:'1',name:'one'},
              {id:'2',name:'two'},
              {id:'3',name:'three'},
              {id:'4',name:'four'}
          ],
          onValueChanged:(val)=>valueChanged=val
        }
      });

      expect(wrapper.vm.getValue()).toBeNull();
  
      wrapper.vm.setValue(['one','two']);

      await sleep(100);

      expect(valueChanged).not.toBeNull();
      expect(valueChanged!.name).toBe('autocomplete');

      const result = wrapper.vm.getValue();

      expect(result).toStrictEqual(valueChanged!.value);
  }),
  test('check limit',async()=>{
      const wrapper = mount(AutoComplete,{
        props:{
          name:'autocomplete',
          disabled:false,
          limit:2,
          title:'autocomplete',
          values:[
              {id:'1',name:'one'},
              {id:'2',name:'two'},
              {id:'3',name:'three'},
              {id:'4',name:'four'}
          ]
        }
      });

      expect(wrapper.vm.getValue()).toBeNull();
  
      wrapper.vm.setValue(['one','two','three']);

      await sleep(100);

      const result = wrapper.vm.getValue();

      expect(result).toStrictEqual([{id:'1',name:'one'},{id:'2',name:'two'}]);
  }),
  test('check limit of 1',async()=>{
      const wrapper = mount(AutoComplete,{
        props:{
          name:'autocomplete',
          disabled:false,
          title:'autocomplete',
          limit:1,
          values:[
              {id:'1',name:'one'},
              {id:'2',name:'two'},
              {id:'3',name:'three'},
              {id:'4',name:'four'}
          ]
        }
      });

      expect(wrapper.vm.getValue()).toBeNull();
  
      wrapper.vm.setValue(['one','two']);

      await sleep(100);

      const result = wrapper.vm.getValue();

      expect(result).toStrictEqual({id:'1',name:'one'});
  }),
  test('check disabled',async()=>{
      const wrapper = mount(AutoComplete,{
        props:{
          name:'autocomplete',
          disabled:true,
          title:'autocomplete',
          limit:1,
          values:[
              {id:'1',name:'one'},
              {id:'2',name:'two'},
              {id:'3',name:'three'},
              {id:'4',name:'four'}
          ]
        }
      });

      expect((wrapper.element.childNodes[0] as HTMLElement).classList).toContain('is-disabled');
  }),
  test('check basic classes and structure',async()=>{
      const wrapper = mount(AutoComplete,{
        props:{
          name:'autocomplete',
          disabled:false,
          title:'autocomplete',
          values:[
              {id:'1',name:'one'},
              {id:'2',name:'two'},
              {id:'3',name:'three'},
              {id:'4',name:'four'}
          ]
        }
      });

      await wrapper.vm.setValue([{id:'1',name:'one',readonly:true},{id:'2',name:'two'}]);

      const root = wrapper.element as HTMLElement;

      expect(root.classList).toContain('control');
      expect(root.classList).toContain('autocomplete');

      const children = stripCommentNodes(root);

      expect(children).toHaveLength(2);

      const tagsContainer = children[0] as HTMLElement;

      expect(tagsContainer.classList).toContain('tagsfield');
      expect(tagsContainer.classList).toContain('field');
      expect(tagsContainer.classList).toContain('input');
      expect(tagsContainer.classList).toContain('is-grouped');
      expect(tagsContainer.classList).toContain('is-grouped-multiline');

      const tags = stripCommentNodes(tagsContainer);

      expect(tags).toHaveLength(3);

      const tag1 = tags[0] as HTMLElement;

      expect(tag1.className).toBe('control');

      const tag1Tags = stripCommentNodes(tag1).map(n=>n as HTMLElement);

      expect(tag1Tags).toHaveLength(1);

      expect(tag1Tags[0].classList).toContain('tags');
      expect(tag1Tags[0].classList).toContain('has-addons');

      const tag1TagParts = stripCommentNodes(tag1Tags[0]).map(n=>n as HTMLElement);

      expect(tag1TagParts).toHaveLength(1);

      expect(tag1TagParts[0].classList).toContain('tag');
      expect(tag1TagParts[0].classList).toContain('is-link');
      expect(tag1TagParts[0].innerText).toBe('one');

      const tag2 = tags[1] as HTMLElement;

      expect(tag2.className).toBe('control');

      const tag2Tags = stripCommentNodes(tag2).map(n=>n as HTMLElement);

      expect(tag2Tags).toHaveLength(1);

      expect(tag2Tags[0].classList).toContain('tags');
      expect(tag2Tags[0].classList).toContain('has-addons');

      const tag2TagParts = stripCommentNodes(tag2Tags[0]).map(n=>n as HTMLElement);

      expect(tag2TagParts).toHaveLength(2);

      expect(tag2TagParts[0].classList).toContain('tag');
      expect(tag2TagParts[0].classList).toContain('is-link');
      expect(tag2TagParts[0].innerText).toBe('two');

      expect(tag2TagParts[1].classList).toContain('tag');
      expect(tag2TagParts[1].classList).toContain('is-delete');

      tag2TagParts[1].click();

      const input = tags[2] as HTMLElement;

      const inputParts = stripCommentNodes(input);

      expect(inputParts).toHaveLength(1);

      const dropDown = children[1] as HTMLElement;

      expect(dropDown.classList).toContain('dropdown');
      expect(dropDown.classList).not.toContain('is-active');

      const dropDownChildren = stripCommentNodes(dropDown).map(n=>n as HTMLElement);

      expect(dropDownChildren).toHaveLength(1);

      expect(dropDownChildren[0].className).toBe('dropdown-menu');

      const dropDownMenuChildren = stripCommentNodes(dropDownChildren[0]).map(n=>n as HTMLElement);

      expect(dropDownMenuChildren).toHaveLength(1);

      expect(dropDownMenuChildren[0].className).toBe('dropdown-content');

      const dropDownContentChildren = stripCommentNodes(dropDownMenuChildren[0]).map(n=>n as HTMLElement);

      expect(dropDownContentChildren).toHaveLength(1);

      expect(dropDownContentChildren[0].className).toBe('dropdown-item');

      expect(dropDownContentChildren[0].innerText).toBe(translate('Form.AutoComplete.NoResults'));
  })
})