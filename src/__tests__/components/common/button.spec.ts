import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import Button from '../../../components/common/buttons/button.vue';
import ButtonAdd from '../../../components/common/buttons/button-add.vue';
import ButtonCancel from '../../../components/common/buttons/button-cancel.vue';
import ButtonDelete from '../../../components/common/buttons/button-delete.vue';
import buttonDisable from '../../../components/common/buttons/button-disable.vue';
import buttonDownload from '../../../components/common/buttons/button-download.vue';
import buttonEdit from '../../../components/common/buttons/button-edit.vue';
import buttonEnable from '../../../components/common/buttons/button-enable.vue';
import buttonOkay from '../../../components/common/buttons/button-okay.vue';
import buttonPrint from '../../../components/common/buttons/button-print.vue';
import buttonRefresh from '../../../components/common/buttons/button-refresh.vue';
import buttonSave from '../../../components/common/buttons/button-save.vue';
import buttonSubmit from '../../../components/common/buttons/button-submit.vue';
import buttonUpload from '../../../components/common/buttons/button-upload.vue';
import { ExecuteAccessibilityChecks, stripCommentNodes } from '../../common';
import { ColorTypes, Sizes } from '../../../enums';
import translate from '../../../messages/messages';
import { userEvent } from 'vitest/browser';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';

const extractIcon = function(button:HTMLElement, size?:Sizes):HTMLElement {
    const strippedChildren = stripCommentNodes(button);

    expect(strippedChildren.length).toBeGreaterThanOrEqual(1);

    const iconContainer = strippedChildren[0] as HTMLElement;

    expect(iconContainer.classList).toContain('icon');
    if (size!==undefined){
        switch(size){
            case Sizes.small:
                expect(iconContainer.classList).toContain('is-small');
                expect(iconContainer.classList).not.toContain('is-large');
                break;
            case Sizes.normal:
            case Sizes.medium:
                expect(iconContainer.classList).not.toContain('is-small');
                expect(iconContainer.classList).not.toContain('is-large');
                break;
            case Sizes.large:
                expect(iconContainer.classList).not.toContain('is-small');
                expect(iconContainer.classList).toContain('is-large');
                break;
        }
    }
    

    const strippedIconChildren = stripCommentNodes(iconContainer);

    expect(strippedIconChildren.length).toBe(1);

    return strippedIconChildren[0] as HTMLElement;
}

describe('Button', () => {
    test('check accessibility',async() => {
        const accessibilityScanResults =  await ExecuteAccessibilityChecks(async ()=>{
            let result : HTMLElement[] = [];
            for (const colorType of Object.values(ColorTypes)) {
                const renderResult1 = await render(Button, {
                    props: {
                        type:colorType,
                        title:'Sample Button',
                        is_loading:false
                    },
                });
                result.push(renderResult1.container);

                const renderResult2 = await render(Button, {
                    props: {
                        type:colorType,
                        title:'Sample Button',
                        is_outlined: true,
                        is_loading:false
                    },
                });
                result.push(renderResult2.container);
            }
            return result;
        });
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('renders a empty button', async () => {
        const { container } = await render(Button, {
            props: {
                is_loading:true
            },
        });

        const button = container.childNodes[0] as HTMLElement;

        expect(stripCommentNodes(button).length).toBe(0);
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
        expect(button.classList).toContain("is-skeleton");
    }),
    test('check loading setting',async() => {
        const props = {
            is_loading: ref(true)
        };

        const wrapper = mount(Button, {
            props: props,
        });

        let button = wrapper.element as HTMLElement;

        expect(stripCommentNodes(button).length).toBe(0);
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
        expect(button.classList).toContain("is-skeleton");

        props.is_loading.value = false;
        
        await nextTick();

        button = wrapper.element as HTMLElement;

        expect(stripCommentNodes(button).length).toBe(0);
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
        expect(button.classList).not.toContain("is-skeleton");
    }),
    test('renders a button with an icon', async () => {
        const iconName = 'file';

        const { container } = await render(Button, {
            props: {
                icon:'file'
            },
        });

        const button = container.childNodes[0] as HTMLElement;
        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-${iconName}`);
    }),
    test('renders a button with text', async () => {
        const textContent = 'Sample text';

        const { container,getByText } = await render(Button, {
            props: {
            title:textContent
            },
        });

        const button = container.childNodes[0] as HTMLElement;

        expect(getByText(textContent)).not.toBeNull();
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
    }),
    test('renders a button with hide modifiers', async () => {
        const textContent = 'Sample text';

        const { container,getByText } = await render(Button, {
            props: {
                title:textContent,
                hide_mobile:true,
                hide_tablet:true,
                hide_desktop:true
            },
        });

        const button = container.childNodes[0] as HTMLElement;

        expect(getByText(textContent)).not.toBeNull();
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
        expect(button.classList).toContain('is-hidden-mobile');
        expect(button.classList).toContain('is-hidden-tablet-only');
        expect(button.classList).toContain('is-hidden-desktop');
        expect(button.classList).toContain('is-hidden-widescreen');
    }),
    test('renders a rounded button', async () => {
        const textContent = 'Sample text';

        const { container,getByText } = await render(Button, {
            props: {
                title:textContent,
                is_rounded:true
            },
        });

        const button = container.childNodes[0] as HTMLElement;

        expect(getByText(textContent)).not.toBeNull();
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
        expect(button.classList).toContain('is-rounded');
    }),
    test('renders a disabled button', async () => {
        const textContent = 'Sample text';

        const { container,getByText } = await render(Button, {
            props: {
                title:textContent,
                disabled:true
            },
        });

        const button = container.childNodes[0] as HTMLElement;

        expect(getByText(textContent)).not.toBeNull();
        expect(button.hasAttribute('disabled')).toBeTruthy();
        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');
        expect(button.classList).toContain('disabled');
    }),
    test('renders a button of each color', async () => {
        for (const color of Object.values(ColorTypes)) {
            const { container } = await render(Button, {
                props: {
                    type:color
                },
            });
            const button = container.childNodes[0] as HTMLElement;

            expect(stripCommentNodes(button).length).toBe(0);
            expect(button.classList).toContain('button');
            expect(button.classList).toContain('is-normal');
            expect(button.classList).toContain(`is-${color}`);

        }
    }),
    test('renders a button of each size', async () => {
        for (const size of Object.values(Sizes)) {
            const { container } = await render(Button, {
                props: {
                    size,
                },
            });
            const button = container.childNodes[0] as HTMLElement;

            expect(stripCommentNodes(button).length).toBe(0);
            expect(button.classList).toContain('button');
            expect(button.classList).toContain('is-primary');
            expect(button.classList).toContain(`is-${size}`);

        }
    }),
    test('click a button', async () => {
        let clicked = false;

        const { container } = await render(Button, {
            props: {
                onClick:()=>{clicked=true;}
            },
        });

        const button = container.childNodes[0] as HTMLElement;

        await userEvent.click(button);

        expect(clicked).toBe(true);
    }),
    test('renders a Add button', async () => {
        const { container,getByText } = await render(ButtonAdd, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Add'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-plus`);
    }),
    test('renders a Cancel button', async () => {
        const { container,getByText } = await render(ButtonCancel, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Cancel'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-danger');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-window-close`);
    }),
    test('renders a Delete button', async () => {
        const { container,getByText } = await render(ButtonDelete, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Delete'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-danger');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-trash-alt`);
    }),
    test('renders a Disable button', async () => {
        const { container,getByText } = await render(buttonDisable, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Disable'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-danger');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-times-circle`);
    }),
    test('renders a Download button', async () => {
        const { container,getByText } = await render(buttonDownload, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Download'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-download`);
    }),
    test('renders a Edit button', async () => {
        const { container,getByText } = await render(buttonEdit, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Edit'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-edit`);
    }),
    test('renders a Enable button', async () => {
        const { container,getByText } = await render(buttonEnable, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Enable'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-check`);
    }),
    test('renders a Okay button', async () => {
        const { container,getByText } = await render(buttonOkay, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Okay'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-check`);
    }),
    test('renders a Print button', async () => {
        const { container,getByText } = await render(buttonPrint, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Print'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-print`);
    }),
    test('renders a Refresh button', async () => {
        const { container,getByText } = await render(buttonRefresh, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Refresh'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-sync`);
    }),
    test('renders a Save button', async () => {
        const { container,getByText } = await render(buttonSave, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Save'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-save`);
    }),
    test('renders a Submit button', async () => {
        const { container,getByText } = await render(buttonSubmit, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Submit'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-success');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-envelope-open-text`);
    }),
    test('renders a Upload button', async () => {
        const { container,getByText } = await render(buttonUpload, {
            props: {},
        });

        const button = container.childNodes[0] as HTMLElement;
        const strippedChildren = stripCommentNodes(button);

        expect(strippedChildren.length).toBe(2);
        
        expect(getByText(translate('Button.Upload'))).not.toBeNull();

        expect(button.classList).toContain('button');
        expect(button.classList).toContain('is-normal');
        expect(button.classList).toContain('is-primary');

        const icon = extractIcon(button);

        expect(icon.classList).toContain(`fa-upload`);
    })
});


