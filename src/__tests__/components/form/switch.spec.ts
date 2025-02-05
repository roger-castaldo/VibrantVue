import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Switch from '../../../components/form/switch.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';

describe('Switch',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Switch,{
            props:{
                name:'switch',
                disabled:false,
                label:'Switch',
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

        expect(valueChanged!.name).toBe('switch');
        expect(valueChanged!.value).toBe(true);
    }),
    test('check structure',async()=>{
        const wrapper = mount(Switch,{
            props:{
                name:'switch',
                disabled:false,
                label:'Switch'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('field');

        const children = stripCommentNodes(root);

        expect(children).toHaveLength(2);

        const input = children[0] as HTMLElement;

        expect(input.classList).toContain('switch');
        expect(input.classList).toContain('is-rounded');
        expect(input.getAttribute('type')).toBe('checkbox');
        expect(input.getAttribute('disabled')).toBeNull();

        const label = children[1] as HTMLElement;

        expect(label.innerText.trim()).toBe('Switch');
    }),
    test('check disabled',async()=>{
        const wrapper = mount(Switch,{
            props:{
                name:'switch',
                disabled:true,
                label:'Switch'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('field');

        const children = stripCommentNodes(root);

        expect(children).toHaveLength(2);

        const input = children[0] as HTMLElement;

        expect(input.classList).toContain('switch');
        expect(input.classList).toContain('is-rounded');
        expect(input.getAttribute('type')).toBe('checkbox');
        expect(input.getAttribute('disabled')).not.toBeNull();

        const label = children[1] as HTMLElement;

        const labelChildren = stripCommentNodes(label);

        expect(labelChildren).toHaveLength(1);

        const text = labelChildren[0] as ChildNode;

        expect(text.textContent?.trim()).toBe('Switch');
    }),
    test('check required',async()=>{
        const wrapper = mount(Switch,{
            props:{
                name:'switch',
                disabled:false,
                label:'Switch',
                required:true
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('field');

        const children = stripCommentNodes(root);

        expect(children).toHaveLength(2);

        const input = children[0] as HTMLElement;

        expect(input.classList).toContain('switch');
        expect(input.classList).toContain('is-rounded');
        expect(input.getAttribute('type')).toBe('checkbox');

        const label = children[1] as HTMLElement;

        const labelChildren = stripCommentNodes(label);

        expect(labelChildren).toHaveLength(2);

        const text = labelChildren[0] as ChildNode;

        expect(text.textContent?.trim()).toBe('Switch');

        const required = labelChildren[1] as HTMLElement;

        expect(required.classList).toContain('help');
        expect(required.classList).toContain('is-danger');
        expect(required.innerText).toBe('*');
    })
});