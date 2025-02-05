import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import checkMark from '../../../components/common/check-mark.vue';
import { IconSizes } from '../../../enums';

describe('CheckMark', () => {
    test('check accessibility',async() => {
        const {container} = render(checkMark, {});
    
        const accessibilityScanResults =  await axe.run(container);
    
        expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check default',async() => {
        const {container} = render(checkMark, {
        });
    
        const check = container.childNodes[0] as HTMLElement;

        expect(check.classList).toContain('fa-square-check');
    }),
    test('check when checked',async() => {
        const {container} = render(checkMark, {
            props:{
                checked:true
            }
        });
    
        const check = container.childNodes[0] as HTMLElement;

        expect(check.classList).toContain('fa-square-check');
    }),
    test('check when unchecked',async() => {
        const {container} = render(checkMark, {
            props:{
                checked:false
            }
        });
    
        const check = container.childNodes[0] as HTMLElement;

        expect(check.classList).toContain('fa-square-xmark');
    }),
    test('Check icon sizes', async () => {
        for (const key in IconSizes) {
            if (IconSizes[key]!==IconSizes.normal){
                const { container } = render(checkMark, {
                    props: {
                        size:IconSizes[key]
                    },
                });
                const check = container.childNodes[0] as HTMLElement;

                expect(check.classList).toContain('fa-square-check');
                expect(check.classList).toContain(`fa-${IconSizes[key]}`);
            }
        }
    })
});