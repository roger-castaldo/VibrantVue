import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Number from '../../../components/form/number.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';

describe('Number',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Number,{
            props:{
                name:'number',
                disabled:false,
                label:'Number',
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue(10);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBe(10);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('number');
        expect(valueChanged!.value).toBe(10);

        wrapper.vm.setValue('');
        
        expect(wrapper.vm.getValue()).toBeNull();

        wrapper.vm.setValue(null);
        
        expect(wrapper.vm.getValue()).toBeNull();
    }),
    test('check structure',async()=>{
        const wrapper = mount(Number,{
            props:{
                name:'number',
                disabled:false,
                label:'Number'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('input');
        expect(root.getAttribute('type')).toBe('number');
        expect(root.getAttribute('disabled')).toBeNull();
    }),
    test('check min/max/step',async()=>{
        const wrapper = mount(Number,{
            props:{
                name:'number',
                disabled:false,
                label:'Number',
                min:0,
                max:10,
                step:1
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('min')).toBe('0');
        expect(root.getAttribute('max')).toBe('10');
        expect(root.getAttribute('step')).toBe('1');

        wrapper.vm.setValue('-1');

        expect(wrapper.vm.getValue()).toBeNull();

        wrapper.vm.setValue('11');
        
        expect(wrapper.vm.getValue()).toBeNull();

        wrapper.vm.setValue('5');

        expect(wrapper.vm.getValue()).toBe(5);
    }),
    test('check disabled',async()=>{
        const wrapper = mount(Number,{
            props:{
                name:'number',
                disabled:true,
                label:'Number'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('disabled')).not.toBeNull();
    })
});