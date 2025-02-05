import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import CheckBox from '../../../components/form/checkbox.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';

describe('Checkbox',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(CheckBox,{
            props:{
                name:'checkbox',
                disabled:false,
                label:'Checkbox',
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(false);

        wrapper.vm.setValue(true);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBe(true);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('checkbox');
        expect(valueChanged!.value).toBe(true);
    }),
    test('check structure',async()=>{
        const wrapper = mount(CheckBox,{
            props:{
                name:'checkbox',
                disabled:false,
                label:'Checkbox'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('checkbox');

        const children = stripCommentNodes(root);

        expect(children).toHaveLength(2);

        const input = children[0] as HTMLElement;

        expect(input.className).toBe('checkbox');
        expect(input.getAttribute('type')).toBe('checkbox');
        expect(input.getAttribute('disabled')).toBeNull();

        const text = children[1] as ChildNode;

        expect(text.textContent?.trim()).toBe('Checkbox');
    }),
    test('check required',async()=>{
        const wrapper = mount(CheckBox,{
            props:{
                name:'checkbox',
                disabled:false,
                label:'Checkbox',
                required:true
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('checkbox');

        const children = stripCommentNodes(root);

        expect(children).toHaveLength(3);

        const input = children[0] as HTMLElement;

        expect(input.className).toBe('checkbox');
        expect(input.getAttribute('type')).toBe('checkbox');
        expect(input.getAttribute('disabled')).toBeNull();

        const text = children[1] as ChildNode;

        expect(text.textContent?.trim()).toBe('Checkbox');

        const required = children[2] as HTMLElement;

        expect(required.classList).toContain('help');
        expect(required.classList).toContain('is-danger');
    }),
    test('check disabled',async()=>{
        const wrapper = mount(CheckBox,{
            props:{
                name:'checkbox',
                disabled:true,
                label:'Checkbox'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('checkbox');

        const children = stripCommentNodes(root);

        expect(children).toHaveLength(2);

        const input = children[0] as HTMLElement;

        expect(input.className).toBe('checkbox');
        expect(input.getAttribute('type')).toBe('checkbox');
        expect(input.getAttribute('disabled')).not.toBeNull();

        const text = children[1] as ChildNode;

        expect(text.textContent?.trim()).toBe('Checkbox');
    })
});