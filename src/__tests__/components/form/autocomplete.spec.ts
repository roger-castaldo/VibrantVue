import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import AutoComplete from '../../../components/form/autocomplete.vue';
import { sleep } from '../../common';
import { ValueChangedEvent } from '../../../components';

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
  })
})