import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import Header from '../../../components/form/header.vue';

describe('Form Header',()=>{
    test('default structure',async()=>{
        const label = 'Test Header';

        const wrapper = mount(Header,{
            props:{
                name:'header',
                label:label
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.tagName).toBe('H1');
        expect(root.innerText).toBe(label);
    }),
    test('default specific subtype',async()=>{
        const label = 'Test Header';

        const wrapper = mount(Header,{
            props:{
                name:'header',
                label:label,
                subtype:'h3'
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.tagName).toBe('H3');
        expect(root.innerText).toBe(label);
    })
});