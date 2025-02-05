import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import CheckBoxGroup from '../../../components/form/checkbox-group.vue';
import { ListItemValue, ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';
import { readonly, ref } from 'vue';
import translate from '../../../messages/messages.js';

describe('Checkbox Group',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(CheckBoxGroup,{
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                onValueChanged:(val)=>valueChanged=val,
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2},
                    {label:'three',value:3},
                    {label:'four',value:4}
                ]
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue([1,2]);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toStrictEqual([1,2]);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('checkbox-group');
        expect(valueChanged!.value).toStrictEqual([1,2]);
    }),
    test('check structure',async()=>{
        const wrapper = mount(CheckBoxGroup,{
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('');

        const children = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(children).toHaveLength(2);

        expect(children[0].classList).toContain('checkbox');
        expect(children[0].classList).toContain('is-block');
        expect(children[0].innerText.trim()).toBe('one');
        
        const checkbox1 = children[0].childNodes[0] as HTMLElement;

        expect(checkbox1.getAttribute('value')).toBe('1');
        expect(checkbox1.getAttribute('disabled')).toBeNull();

        expect(children[1].classList).toContain('checkbox');
        expect(children[1].classList).toContain('is-block');
        expect(children[1].innerText.trim()).toBe('two');

        const checkbox2 = children[1].childNodes[0] as HTMLElement;

        expect(checkbox2.getAttribute('value')).toBe('2');
        expect(checkbox2.getAttribute('disabled')).toBeNull();
    }),
    test('check disabled value',async()=>{
        const wrapper = mount(CheckBoxGroup,{
            global:{
                provide:{
                    DisabledFields:readonly(ref(['checkbox-group.1']))
                }
            },
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('');

        const children = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(children).toHaveLength(2);

        expect(children[0].classList).toContain('checkbox');
        expect(children[0].classList).toContain('is-block');
        expect(children[0].innerText.trim()).toBe('one');
        
        const checkbox1 = children[0].childNodes[0] as HTMLElement;

        expect(checkbox1.getAttribute('value')).toBe('1');
        expect(checkbox1.getAttribute('disabled')).not.toBeNull();

        expect(children[1].classList).toContain('checkbox');
        expect(children[1].classList).toContain('is-block');
        expect(children[1].innerText.trim()).toBe('two');

        const checkbox2 = children[1].childNodes[0] as HTMLElement;

        expect(checkbox2.getAttribute('value')).toBe('2');
        expect(checkbox2.getAttribute('disabled')).toBeNull();
    }),
    test('check hidden value',async()=>{
        const wrapper = mount(CheckBoxGroup,{
            global:{
                provide:{
                    HiddenFields:readonly(ref(['checkbox-group.1']))
                }
            },
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('');

        const children = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(children).toHaveLength(2);

        expect(children[0].classList).toContain('checkbox');
        expect(children[0].classList).toContain('is-block');
        expect(children[0].innerText.trim()).toBe('one');
        expect(children[0].checkVisibility()).toBe(false);
        
        const checkbox1 = children[0].childNodes[0] as HTMLElement;

        expect(checkbox1.getAttribute('value')).toBe('1');
        expect(checkbox1.getAttribute('disabled')).toBeNull();

        expect(children[1].classList).toContain('checkbox');
        expect(children[1].classList).toContain('is-block');
        expect(children[1].innerText.trim()).toBe('two');

        const checkbox2 = children[1].childNodes[0] as HTMLElement;

        expect(checkbox2.getAttribute('value')).toBe('2');
        expect(checkbox2.getAttribute('disabled')).toBeNull();
    }),
    test('check promise based values',async()=>{
        let resolveFunc: (value: ListItemValue[]) => void;
        let rejectFunc: (reason?: any) => void;
        const listItems : ListItemValue[] = [
            {label:'one',value:1},
            {label:'two',value:2}
        ];
        
        const mockPromise = new Promise<ListItemValue[]>((resolve, reject) => {
            resolveFunc = resolve;
            rejectFunc = reject;
        });

        const wrapper = mount(CheckBoxGroup,{
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                values:mockPromise
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('');

        const promiseChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(promiseChildren).toHaveLength(1);

        expect(promiseChildren[0].tagName).toBe('PROGRESS');

        resolveFunc!(listItems);

        await sleep(300);

        const children = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(children).toHaveLength(2);

        expect(children[0].classList).toContain('checkbox');
        expect(children[0].classList).toContain('is-block');
        expect(children[0].innerText.trim()).toBe('one');
        
        const checkbox1 = children[0].childNodes[0] as HTMLElement;

        expect(checkbox1.getAttribute('value')).toBe('1');
        expect(checkbox1.getAttribute('disabled')).toBeNull();

        expect(children[1].classList).toContain('checkbox');
        expect(children[1].classList).toContain('is-block');
        expect(children[1].innerText.trim()).toBe('two');

        const checkbox2 = children[1].childNodes[0] as HTMLElement;

        expect(checkbox2.getAttribute('value')).toBe('2');
        expect(checkbox2.getAttribute('disabled')).toBeNull();
    }),
    test('check promise with error',async()=>{
        let resolveFunc: (value: ListItemValue[]) => void;
        let rejectFunc: (reason?: any) => void;
        
        const mockPromise = new Promise<ListItemValue[]>((resolve, reject) => {
            resolveFunc = resolve;
            rejectFunc = reject;
        });

        const wrapper = mount(CheckBoxGroup,{
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                values:mockPromise
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('');

        const promiseChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(promiseChildren).toHaveLength(1);

        expect(promiseChildren[0].tagName).toBe('PROGRESS');

        rejectFunc!();

        await sleep(300);

        const children = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(children).toHaveLength(1);

        expect(children[0].classList).toContain('notification');
        expect(children[0].classList).toContain('is-danger');
        expect(children[0].innerText).toBe(translate('Form.Error'));
    }),
    test('check null values',async()=>{
        const wrapper = mount(CheckBoxGroup,{
            props:{
                name:'checkbox-group',
                disabled:false,
                label:'Checkbox Group',
                values:null
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('');

        const children = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(children).toHaveLength(0);
    })
});