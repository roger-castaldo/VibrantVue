import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import ColumnContainer from '../../../components/layout/column-container.vue';
import { stripCommentNodes } from '../../common';
import { BorderTypes, ColumnContainerModifiers, ColumnOffsetSizes, ColumnSizes } from '../../../enums';
import { Column } from '../../../components/layout/typeDefinitions';

describe('ColumnContainer', () => {
    test('check empty container', async () => {
        const { container,getByText } = render(ColumnContainer, {
          props: {
            columns:[]
          },
        });

        const columnContainer = container.childNodes[0] as HTMLElement;

        expect(columnContainer.classList).toContain('columns');

        expect(stripCommentNodes(columnContainer)).toHaveLength(0);
    }),
    test('check modifiers', async () => {
        for(const key in ColumnContainerModifiers){
            const { container,getByText } = render(ColumnContainer, {
            props: {
                columns:[],
                modifiers:[ColumnContainerModifiers[key]]
            },
            });

            const columnContainer = container.childNodes[0] as HTMLElement;

            expect(columnContainer.classList).toContain('columns');
            expect(columnContainer.classList).toContain(`is-${ColumnContainerModifiers[key]}`);

            expect(stripCommentNodes(columnContainer)).toHaveLength(0);
        }
    }),
    test('check sizes', async () => {
        const testContent = 'Test Content';

        for(const key in ColumnSizes){
            const { container } = render(ColumnContainer, {
                props: {
                    columns:[{name:'test',size:ColumnSizes[key]}]
                },
                slots:{
                    test:()=>testContent
                }
            });

            const columnContainer = container.childNodes[0] as HTMLElement;

            expect(columnContainer.classList).toContain('columns');

            const children = stripCommentNodes(columnContainer);

            expect(children).toHaveLength(1);

            const column = children[0] as HTMLElement;

            expect(column.classList).toContain('column');
            expect(column.classList).toContain(`is-${ColumnSizes[key]}`);
            expect(column.innerText).toBe(testContent);
        }
    }),
    test('check offsets', async () => {
        const testContent = 'Test Content';

        for(const key in ColumnOffsetSizes){
            const { container } = render(ColumnContainer, {
                props: {
                    columns:[{name:'test',offset:ColumnOffsetSizes[key]}]
                },
                slots:{
                    test:()=>testContent
                }
            });

            const columnContainer = container.childNodes[0] as HTMLElement;

            expect(columnContainer.classList).toContain('columns');

            const children = stripCommentNodes(columnContainer);

            expect(children).toHaveLength(1);

            const column = children[0] as HTMLElement;

            expect(column.classList).toContain('column');
            expect(column.classList).toContain(`is-offset-${ColumnOffsetSizes[key]}`);
            expect(column.innerText).toBe(testContent);
        }
    }),
    test('check borders', async () => {
        const testContent = 'Test Content';

        for(const key in BorderTypes){
            const { container } = render(ColumnContainer, {
                props: {
                    columns:[{name:'test',border:[BorderTypes[key]]}]
                },
                slots:{
                    test:()=>testContent
                }
            });

            const columnContainer = container.childNodes[0] as HTMLElement;

            expect(columnContainer.classList).toContain('columns');

            const children = stripCommentNodes(columnContainer);

            expect(children).toHaveLength(1);

            const column = children[0] as HTMLElement;

            expect(column.classList).toContain('column');
            if (BorderTypes[key] === BorderTypes.all){
                expect(column.classList).toContain('is-bordered');
            }else{
                expect(column.classList).toContain(`is-bordered-${BorderTypes[key]}`);
            }
            expect(column.innerText).toBe(testContent);
        }
    }),
    test('check complex container', async () => {
        const { container,getByText } = render(ColumnContainer, {
          props: {
            columns:[
                {name:'test',class:'addon_class'},
                {border:[BorderTypes.all,BorderTypes.bottom]},
                {size:ColumnSizes.six}
            ]
          },
          slots:{
            test:()=>"Test Slot",
            'col-1':()=>"Bordered"
          }
        });

        const columnContainer = container.childNodes[0] as HTMLElement;

        expect(columnContainer.classList).toContain('columns');

        const columns = stripCommentNodes(columnContainer).map(n=>n as HTMLElement);

        expect(columns).toHaveLength(2);

        expect(columns[0].classList).toContain('addon_class');
        expect(columns[0].innerText).toBe('Test Slot');

        expect(columns[1].classList).toContain('is-bordered');
        expect(columns[1].classList).not.toContain('is-bordered-bottom');
        expect(columns[1].innerText).toBe('Bordered');
    })
});