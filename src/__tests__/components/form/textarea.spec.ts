import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import TextArea from '../../../components/form/textarea.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep } from '../../common';

describe('TextArea',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        
        const testValue = 'testing 123'

        const wrapper = mount(TextArea,{
            props:{
                name:'textarea',
                disabled:false,
                label:'TextArea',
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue(testValue);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBe(testValue);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('textarea');
        expect(valueChanged!.value).toBe(testValue);

       wrapper.vm.setValue(null);
        
        expect(wrapper.vm.getValue()).toBeNull();
    }),
    test('check structure',async()=>{
        const wrapper = mount(TextArea,{
            props:{
                name:'textarea',
                disabled:false,
                label:'TextArea'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('textarea');
        expect(root.className).toBe('textarea');
        expect(root.getAttribute('disabled')).toBeNull();
    }),
    test('check rows/cols/maxLength',async()=>{
        const wrapper = mount(TextArea,{
            props:{
                name:'textarea',
                disabled:false,
                label:'TextArea',
                rows:10,
                cols:20,
                maxlength:30
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('rows')).toBe('10');
        expect(root.getAttribute('cols')).toBe('20');
        expect(root.getAttribute('maxLength')).toBe('30');
    }),
    test('check disabled',async()=>{
        const wrapper = mount(TextArea,{
            props:{
                name:'textarea',
                disabled:true,
                label:'TextArea'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.getAttribute('disabled')).not.toBeNull();
    }),
    test('check tab actions',async()=>{
        const tabKeyCode = 9;
        const tab = String.fromCharCode(tabKeyCode);
        const newLine = String.fromCharCode(10);

        const wrapper = mount(TextArea,{
            props:{
                name:'textarea',
                disabled:false,
                supportsTab:true,
                label:'TextArea'
            }
        });

        wrapper.vm.setValue('This is a Test');

        wrapper.trigger('keydown', { keyCode: tabKeyCode, selectionStart:0,selectionEnd:15 });

        expect(wrapper.vm.getValue()).toBe(`${tab}This is a Test`);

        wrapper.trigger('keydown', { keyCode: tabKeyCode, selectionStart:0,selectionEnd:16,shiftKey:true});

        expect(wrapper.vm.getValue()).toBe('This is a Test');

        wrapper.trigger('keydown', { keyCode: tabKeyCode, selectionStart:15,selectionEnd:15 });

        expect(wrapper.vm.getValue()).toBe(`This is a Test${tab}`);

        wrapper.trigger('keydown', { keyCode: tabKeyCode, selectionStart:0,selectionEnd:16,shiftKey:true});

        expect(wrapper.vm.getValue()).toBe(`This is a Test${tab}`);

        wrapper.vm.setValue(`This is a Test${newLine}This is also a test${newLine}`);

        wrapper.trigger('keydown', { keyCode: tabKeyCode, selectionStart:0,selectionEnd:44});

        expect(wrapper.vm.getValue()).toBe(`${tab}This is a Test${newLine}${tab}This is also a test${newLine}`);

        wrapper.trigger('keydown', { keyCode: tabKeyCode, selectionStart:0,selectionEnd:46,shiftKey:true});

        expect(wrapper.vm.getValue()).toBe(`This is a Test${newLine}This is also a test${newLine}`);
    })
});