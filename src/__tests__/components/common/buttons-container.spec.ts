import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import buttonsContainer from '../../../components/common/buttons-container.vue';
import { ButtonAlignments, Sizes } from '../../../enums';
import { stripCommentNodes } from '../../common';

describe('ButtonsContainer', () => {
    test('check accessibility',async() => {
        const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
            const {container} = render(buttonsContainer, {});
            return container;
        });

        expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check slot content',async() => {
        const slotContent = 'This is test content';

        const {container, getByText} = render(buttonsContainer, {
            slots:{
                default: () => slotContent
              }
        });
    
        const buttonContainer = container.childNodes[0] as HTMLElement;

        expect(buttonContainer.innerText).toBe(slotContent);
    }),
    test('Check container sizes', async () => {
        for (const key in Sizes) {
            const { container } = render(buttonsContainer, {
                props: {
                    size:Sizes[key]
                },
            });
            const buttonContainer = container.childNodes[0] as HTMLElement;

            expect(stripCommentNodes(buttonContainer).length).toBe(0);
            expect(buttonContainer.classList).toContain('buttons');
            expect(buttonContainer.classList).toContain(`are-${Sizes[key]}`);
        }
    }),
    test('Check container alignments', async () => {
        for (const key in ButtonAlignments) {
            const { container } = render(buttonsContainer, {
                props: {
                    alignment:ButtonAlignments[key]
                },
            });
            const buttonContainer = container.childNodes[0] as HTMLElement;

            expect(stripCommentNodes(buttonContainer).length).toBe(0);
            expect(buttonContainer.classList).toContain('buttons');
            expect(buttonContainer.classList).toContain(`is-${ButtonAlignments[key]}`);
        }
    })
});