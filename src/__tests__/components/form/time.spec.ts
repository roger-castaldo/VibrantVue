import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Time from '../../../components/form/time.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep } from '../../common';

describe('Time',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Time,{
            props:{
                name:'time',
                disabled:false,
                label:'Time',
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue('10:00 PM');

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBe('22:00:00');

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('time');
        expect(valueChanged!.value).toBe('22:00:00');

        wrapper.vm.setValue('');
        
        expect(wrapper.vm.getValue()).toBeNull();

        wrapper.vm.setValue(null);
        
        expect(wrapper.vm.getValue()).toBeNull();
    }),
    test('check structure',async()=>{
        const wrapper = mount(Time,{
            props:{
                name:'time',
                disabled:false,
                label:'Time'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('control');
        expect(root.childNodes).toHaveLength(1);

        const input = root.childNodes[0] as HTMLElement;
        
        expect(input.classList).toContain('input');
        expect(input.classList).toContain('is-time');
        expect(input.getAttribute('disabled')).toBeNull();
        expect(input.getAttribute('type')).toBe('time');
        expect(input.getAttribute('style')).not.toBe('');
    }),
    test('check disabled',async()=>{
        const wrapper = mount(Time,{
            props:{
                name:'time',
                disabled:true,
                label:'Time'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('control');
        expect(root.childNodes).toHaveLength(1);

        const input = root.childNodes[0] as HTMLElement;
        
        expect(input.classList).toContain('input');
        expect(input.classList).toContain('is-time');
        expect(input.getAttribute('disabled')).not.toBeNull();
        expect(input.getAttribute('type')).toBe('time');
        expect(input.getAttribute('style')).not.toBe('');
    })
});