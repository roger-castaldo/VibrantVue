import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Hidden from '../../../components/form/hidden.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';

describe('Hidden',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Hidden,{
            props:{
                name:'hidden',
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

        expect(valueChanged!.name).toBe('hidden');
        expect(valueChanged!.value).toBe('test');
    }),
    test('check structure',async()=>{
        const wrapper = mount(Hidden,{
            props:{
                name:'hidden'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.tagName).toBe('INPUT');
        expect(root.getAttribute('type')).toBe('hidden');
    })
});