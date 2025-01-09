import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Text from '../../../components/form/text.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';

describe('Text',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Text,{
            props:{
                name:'text',
                disabled:false,
                label:'Text',
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue('test');

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBe('test');

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('text');
        expect(valueChanged!.value).toBe('test');

        wrapper.vm.setValue(null);
        
        expect(wrapper.vm.getValue()).toBeNull();
    }),
    test('check structure',async()=>{
        const wrapper = mount(Text,{
            props:{
                name:'text',
                disabled:false,
                label:'Text'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('input');
        expect(root.getAttribute('type')).toBe('text');
        expect(root.getAttribute('disabled')).toBeNull();
        expect(root.className).toBe('input');
    }),
    test('check maxLength',async()=>{
        const wrapper = mount(Text,{
            props:{
                name:'text',
                disabled:false,
                label:'Text',
                maxlength:10
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('maxlength')).toBe('10');
    }),
    test('check disabled',async()=>{
        const wrapper = mount(Text,{
            props:{
                name:'text',
                disabled:true,
                label:'Text'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('disabled')).not.toBeNull();
    }),
    test('check subtype',async()=>{
        const wrapper = mount(Text,{
            props:{
                name:'text',
                disabled:false,
                label:'Text',
                subtype:'password'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('type')).toBe('password');
    })
});