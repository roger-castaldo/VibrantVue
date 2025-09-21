import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import icon from '../../../components/common/icon.vue';
import { IconSizes } from '../../../enums';

describe('Icon', () => {
    test('check accessibility',async() => {
        const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
            const {container} = render(icon, {
            props:{
                icon:'edit'
            }
            });
            return container;
        });

        expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check basic icon styles',async() => {
        const {container} = render(icon, {
          props:{
              icon:'edit'
          }
        });
    
        const iconElement = container.childNodes[0] as HTMLElement;

        expect(iconElement.classList).toContain('fa-ico');
        expect(iconElement.classList).toContain('fa-solid');
        expect(iconElement.classList).toContain('fa-edit');
    }),
    test('Check icon sizes', async () => {
        for (const key in IconSizes) {
            if (IconSizes[key]!==IconSizes.normal){
                const { container } = render(icon, {
                    props: {
                        size:IconSizes[key],
                        icon:'edit'
                    },
                });
                
                const iconElement = container.childNodes[0] as HTMLElement;

                expect(iconElement.classList).toContain('fa-edit');
                expect(iconElement.classList).toContain(`fa-${IconSizes[key]}`);
            }
        }
    })
});