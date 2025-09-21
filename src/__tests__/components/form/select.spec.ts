import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Select from '../../../components/form/select.vue';
import { ListItemValue, ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';
import { readonly, ref } from 'vue';
import translate from '../../../messages/messages.js';

describe('Select',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
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

        wrapper.vm.setValue(1);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBe(1);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('select');
        expect(valueChanged!.value).toBe(1);
    }),
    test('check get/set value with multiple',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                onValueChanged:(val)=>valueChanged=val,
                multiple:true,
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

        expect(valueChanged!.name).toBe('select');
        expect(valueChanged!.value).toStrictEqual([1,2]);
    }),
    test('check structure',async()=>{
        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBe('1');
        expect(selectChildren[0].innerText).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check structure with multiple',async()=>{
        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                multiple:true,
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toContain('select');
        expect(root.className).toContain('is-multiple');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('is-multiple');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBe('1');
        expect(selectChildren[0].innerText).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check structure with optgroup',async()=>{
        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:[
                    {label:'one',value:1,values:[
                        {label:'three',value:3},
                        {label:'four',value:4}
                    ]},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBeNull();
        expect(selectChildren[0].getAttribute('label')).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).toBeNull();

        const optgroupchildren = stripCommentNodes(selectChildren[0]).map(n=>n as HTMLElement);

        expect(optgroupchildren).toHaveLength(2);

        expect(optgroupchildren[0].getAttribute('value')).toBe('3');
        expect(optgroupchildren[0].innerText).toBe('three');
        expect(optgroupchildren[0].getAttribute('disabled')).toBeNull();

        expect(optgroupchildren[1].getAttribute('value')).toBe('4');
        expect(optgroupchildren[1].innerText).toBe('four');
        expect(optgroupchildren[1].getAttribute('disabled')).toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check disabled value',async()=>{
        const wrapper = mount(Select,{
            global:{
                provide:{
                    DisabledFields:readonly(ref(['select.1']))
                }
            },
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBe('1');
        expect(selectChildren[0].innerText).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).not.toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check disabled value with optgroup',async()=>{
        const wrapper = mount(Select,{
            global:{
                provide:{
                    DisabledFields:readonly(ref(['select.1','select.3']))
                }
            },
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:[
                    {label:'one',value:1,values:[
                        {label:'three',value:3},
                        {label:'four',value:4}
                    ]},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBeNull();
        expect(selectChildren[0].getAttribute('label')).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).not.toBeNull();

        const optgroupchildren = stripCommentNodes(selectChildren[0]).map(n=>n as HTMLElement);

        expect(optgroupchildren).toHaveLength(2);

        expect(optgroupchildren[0].getAttribute('value')).toBe('3');
        expect(optgroupchildren[0].innerText).toBe('three');
        expect(optgroupchildren[0].getAttribute('disabled')).not.toBeNull();

        expect(optgroupchildren[1].getAttribute('value')).toBe('4');
        expect(optgroupchildren[1].innerText).toBe('four');
        expect(optgroupchildren[1].getAttribute('disabled')).toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check hidden value',async()=>{
        const wrapper = mount(Select,{
            global:{
                provide:{
                    HiddenFields:readonly(ref(['select.1']))
                }
            },
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:[
                    {label:'one',value:1},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBe('1');
        expect(selectChildren[0].innerText).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).toBeNull();
        expect(selectChildren[0].checkVisibility()).toBe(false);

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check hidden value with optgroup',async()=>{
        const wrapper = mount(Select,{
            global:{
                provide:{
                    HiddenFields:readonly(ref(['select.2','select.3']))
                }
            },
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:[
                    {label:'one',value:1,values:[
                        {label:'three',value:3},
                        {label:'four',value:4}
                    ]},
                    {label:'two',value:2}
                ]
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBeNull();
        expect(selectChildren[0].getAttribute('label')).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).toBeNull();

        const optgroupchildren = stripCommentNodes(selectChildren[0]).map(n=>n as HTMLElement);

        expect(optgroupchildren).toHaveLength(2);

        expect(optgroupchildren[0].getAttribute('value')).toBe('3');
        expect(optgroupchildren[0].innerText).toBe('three');
        expect(optgroupchildren[0].getAttribute('disabled')).toBeNull();
        expect(optgroupchildren[0].checkVisibility()).toBe(false);

        expect(optgroupchildren[1].getAttribute('value')).toBe('4');
        expect(optgroupchildren[1].innerText).toBe('four');
        expect(optgroupchildren[1].getAttribute('disabled')).toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
        expect(selectChildren[1].checkVisibility()).toBe(false);
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

        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:mockPromise
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

        const promiseChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(promiseChildren).toHaveLength(1);

        expect(promiseChildren[0].tagName).toBe('PROGRESS');

        resolveFunc!(listItems);

        await sleep(300);

        const rootChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(rootChildren).toHaveLength(1);

        const select = rootChildren[0] as HTMLElement;

        expect(select.className).toBe('');

        const selectChildren = stripCommentNodes(select).map(n=>n as HTMLElement);

        expect(selectChildren).toHaveLength(2);

        expect(selectChildren[0].getAttribute('value')).toBe('1');
        expect(selectChildren[0].innerText).toBe('one');
        expect(selectChildren[0].getAttribute('disabled')).toBeNull();

        expect(selectChildren[1].getAttribute('value')).toBe('2');
        expect(selectChildren[1].innerText).toBe('two');
        expect(selectChildren[1].getAttribute('disabled')).toBeNull();
    }),
    test('check promise with error',async()=>{
        let resolveFunc: (value: ListItemValue[]) => void;
        let rejectFunc: (reason?: any) => void;
        
        const mockPromise = new Promise<ListItemValue[]>((resolve, reject) => {
            resolveFunc = resolve;
            rejectFunc = reject;
        });

        const wrapper = mount(Select,{
            props:{
                name:'select',
                disabled:false,
                label:'Select',
                values:mockPromise
            }
        });

        const root = wrapper.element as HTMLElement;

        await sleep(100);

        expect(root.className).toBe('select');

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
    })
});