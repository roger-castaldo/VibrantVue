import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Paragprah from '../../../components/form/paragraph.vue';

describe('Hidden',()=>{
    test('check structure',async()=>{
        const wrapper = mount(Paragprah,{
            props:{
                name:'paragraph',
                label:'Test'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.tagName).toBe('P');
        expect(root.innerText).toBe('Test');
    }),
    test('check null',async()=>{
        const wrapper = mount(Paragprah,{
            props:{
                name:'paragraph'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.tagName).toBe('P');
        expect(root.innerText).toBe('');
    })
});