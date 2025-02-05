import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Grid from '../../../components/extended/grid.vue';
import { mount } from '@vue/test-utils';
import { stripCommentNodes } from '../../common';
import { CellData, GridColumn, GridSort } from '../../../components/extended/typeDefinitions';
import translate from '../../../messages/messages.js';
import { ColorTypes } from '../../../enums';
import { userEvent } from '@vitest/browser/context';
import { h } from 'vue';

describe('Grid', () => {
    test('check accessibility',async() => {
      const {container} = render(Grid, {
        props:{
          total_pages:20,
          current_page:10,
          columns:[
            [
                {id:'col1',title:'Column 1',propertyName:'prop1'},
                {id:'col2',title:'Column 2',propertyName:'prop2'},
                {id:'col3',title:'Column 3',propertyName:'prop3'}
            ]
          ],
          data:[
            {prop1:'Item 1 Prop 1',prop2:'Item 1 Prop 2',prop3:'Item 1 Prop 3'},
            {prop1:'Item 2 Prop 1',prop2:'Item 2 Prop 2',prop3:'Item 2 Prop 3'},
            {prop1:'Item 3 Prop 1',prop2:'Item 3 Prop 2',prop3:'Item 3 Prop 3'}
          ],
          has_filter:true
        }
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check structure',async()=>{
        const columns: GridColumn[][] = [
            [
                {id:'col1',title:'Column 1',propertyName:'prop1',canSort:true},
                {id:'col2',propertyName:'prop2'},
                {id:'col3',title:'Column 3',propertyName:'prop3'}
            ]
        ];

        const data: any[] = [
            {prop1:'Item 1 Prop 1',prop2:'Item 1 Prop 2',prop3:'Item 1 Prop 3'},
            {prop1:'Item 2 Prop 1',prop2:'Item 2 Prop 2',prop3:'Item 2 Prop 3'},
            {prop1:'Item 3 Prop 1',prop2:'Item 3 Prop 2',prop3:'Item 3 Prop 3'}
        ];

        const slots = {
            'head-col2':()=>'Column 2',
            'body-col3':(inputs:any)=>JSON.stringify({rowIndex:inputs.rowIndex,data:inputs.data,row:inputs.row})
        };

        const current_sort:GridSort = {
            column:'col1',
            ascending:true
        };

        const wrapper = mount(Grid, {
            props:{
              total_pages:10,
              current_page:5,
              columns:columns,
              data:data,
              has_filter:true,
              current_sort:current_sort
            },
            slots:slots
        });

        const tableContainer = wrapper.element as HTMLElement;

        expect(tableContainer.className).toBe('');
        expect(tableContainer.childNodes).toHaveLength(1);
    
        const table = tableContainer.childNodes[0] as HTMLElement;
    
        expect(table.classList).toContain('table');
        expect(table.classList).toContain('is-striped');
        expect(table.classList).toContain('is-hoverable');
    
        const tableChildren = stripCommentNodes(table);
    
        expect(tableChildren).toHaveLength(3);
    
        const thead = tableChildren[0] as HTMLElement;
        const tbody = tableChildren[1] as HTMLElement;
        const tfoot = tableChildren[2] as HTMLElement;

        const theadRows = stripCommentNodes(thead).map(x=>x as HTMLElement);

        expect(theadRows).toHaveLength(2);

        const filterRow = theadRows[0];

        expect(filterRow.childNodes).toHaveLength(1);

        expect((filterRow.childNodes[0] as HTMLElement).getAttribute('colspan')).toBe('100%');
        checkFilter(filterRow.childNodes[0] as HTMLElement);

        checkGridHeaders(theadRows.slice(1),columns,slots,current_sort);

        checkGridData(tbody,columns,data,slots);

        const footChildren = stripCommentNodes(tfoot).map(x=>x as HTMLElement);

        expect(footChildren).toHaveLength(1);

        checkPaginationRow(footChildren[0]);
    }),
    test('check goToPage,cellClicked,sort and filter events',async()=>{
        const searchValue:string = 'Find me';

        const columns: GridColumn[][] = [
            [
                {id:'col1',title:'Column 1',propertyName:'prop1',canSort:true},
                {id:'col2',propertyName:'prop2'},
                {id:'col3',title:'Column 3',propertyName:'prop3'}
            ]
        ];

        const data: any[] = [
            {prop1:'Item 1 Prop 1',prop2:'Item 1 Prop 2',prop3:'Item 1 Prop 3'},
            {prop1:'Item 2 Prop 1',prop2:'Item 2 Prop 2',prop3:'Item 2 Prop 3'},
            {prop1:'Item 3 Prop 1',prop2:'Item 3 Prop 2',prop3:'Item 3 Prop 3'}
        ];

        const slots = {
            'head-col2':()=>'Column 2',
            'body-col3':(inputs:any)=>JSON.stringify({rowIndex:inputs.rowIndex,data:inputs.data,row:inputs.row})
        };

        const current_sort:GridSort = {
            column:'col1',
            ascending:true
        };

        const current_page:number = 5;

        let currentPage:number|null = null;
        let clickedCell:CellData|null = null;
        let changedSort:GridSort|null = null;
        let filterValue:string|null = null;

        const { container,getByRole } = render(Grid, {
            props:{
              total_pages:10,
              current_page:current_page,
              columns:columns,
              data:data,
              has_filter:true,
              current_sort:current_sort,
              onGoToPage:(page)=>currentPage=page,
              onCellClicked:(cell)=>clickedCell=cell,
              onSort:(by)=>changedSort=by,
              onFilter:(filter)=>filterValue=filter
            },
            slots:slots
        });

        const tableContainer = container.childNodes[0] as HTMLElement;

        expect(tableContainer.className).toBe('');
        expect(tableContainer.childNodes).toHaveLength(1);
    
        const table = tableContainer.childNodes[0] as HTMLElement;
    
        expect(table.classList).toContain('table');
        expect(table.classList).toContain('is-striped');
        expect(table.classList).toContain('is-hoverable');
    
        const tableChildren = stripCommentNodes(table);
    
        expect(tableChildren).toHaveLength(3);
    
        const thead = tableChildren[0] as HTMLElement;
        const tbody = tableChildren[1] as HTMLElement;
        const tfoot = tableChildren[2] as HTMLElement;

        const theadRows = stripCommentNodes(thead).map(x=>x as HTMLElement);

        expect(theadRows).toHaveLength(2);

        const filterRow = theadRows[0];

        expect(filterRow.childNodes).toHaveLength(1);

        expect((filterRow.childNodes[0] as HTMLElement).getAttribute('colspan')).toBe('100%');
        checkFilter(filterRow.childNodes[0] as HTMLElement);

        const filterInput = getByRole('searchbox');

        expect(filterValue).toBeNull();

        await userEvent.type(filterInput,`${searchValue}{enter}`);

        expect(filterValue).toBe(searchValue);

        checkGridHeaders(theadRows.slice(1),columns,slots,current_sort);

        await userEvent.click((stripCommentNodes(theadRows[1])[0] as HTMLElement));

        expect(changedSort).not.toBeNull();
        expect(changedSort!.ascending).toBe(!current_sort.ascending);
        expect(changedSort!.column).toBe(current_sort.column);

        checkGridData(tbody,columns,data,slots);

        const tr = stripCommentNodes(tbody)[1] as HTMLElement;

        await userEvent.click((stripCommentNodes(tr)[1] as HTMLElement));

        expect(clickedCell).not.toBeNull();
        expect(clickedCell!.rowIndex).toBe(1);
        expect(clickedCell!.data).toBe(data[1].prop2);
        expect(clickedCell!.row).toStrictEqual(data[1]);

        const footChildren = stripCommentNodes(tfoot).map(x=>x as HTMLElement);

        expect(footChildren).toHaveLength(1);

        checkPaginationRow(footChildren[0]);

        const navTd = stripCommentNodes(footChildren[0])[0] as HTMLElement;

        const navContainer = stripCommentNodes(navTd)[0] as HTMLElement;

        const navChildren = stripCommentNodes(navContainer).map(x=>x as HTMLElement);

        await userEvent.click(navChildren[1]);

        expect(currentPage).not.toBeNull();
        expect(currentPage).toBe(current_page+1);
    }),
    test('check moveForward and moveBackward',async()=>{
        const columns: GridColumn[][] = [
            [
                {id:'col1',title:'Column 1',propertyName:'prop1',canSort:true},
                {id:'col2',propertyName:'prop2'},
                {id:'col3',title:'Column 3',propertyName:'prop3'}
            ]
        ];

        const data: any[] = [
            {prop1:'Item 1 Prop 1',prop2:'Item 1 Prop 2',prop3:'Item 1 Prop 3'},
            {prop1:'Item 2 Prop 1',prop2:'Item 2 Prop 2',prop3:'Item 2 Prop 3'},
            {prop1:'Item 3 Prop 1',prop2:'Item 3 Prop 2',prop3:'Item 3 Prop 3'}
        ];

        const slots = {
            'head-col2':()=>'Column 2',
            'body-col3':(inputs:any)=>JSON.stringify({rowIndex:inputs.rowIndex,data:inputs.data,row:inputs.row})
        };

        const current_sort:GridSort = {
            column:'col1',
            ascending:true
        };

        let movedForward:boolean = false;
        let movedBack:boolean = false;

        const { container,getByRole } = render(Grid, {
            props:{
              has_more:true,
              has_previous:true,
              columns:columns,
              data:data,
              has_filter:true,
              current_sort:current_sort,
              onMoveForward:()=>movedForward=true,
              onMoveBack:()=>movedBack=true
            },
            slots:slots
        });

        const tableContainer = container.childNodes[0] as HTMLElement;

        expect(tableContainer.className).toBe('');
        expect(tableContainer.childNodes).toHaveLength(1);
    
        const table = tableContainer.childNodes[0] as HTMLElement;
    
        expect(table.classList).toContain('table');
        expect(table.classList).toContain('is-striped');
        expect(table.classList).toContain('is-hoverable');
    
        const tableChildren = stripCommentNodes(table);
    
        expect(tableChildren).toHaveLength(3);
    
        const thead = tableChildren[0] as HTMLElement;
        const tbody = tableChildren[1] as HTMLElement;
        const tfoot = tableChildren[2] as HTMLElement;

        const theadRows = stripCommentNodes(thead).map(x=>x as HTMLElement);

        expect(theadRows).toHaveLength(2);

        const filterRow = theadRows[0];

        expect(filterRow.childNodes).toHaveLength(1);

        expect((filterRow.childNodes[0] as HTMLElement).getAttribute('colspan')).toBe('100%');
        checkFilter(filterRow.childNodes[0] as HTMLElement);

        checkGridHeaders(theadRows.slice(1),columns,slots,current_sort);

        checkGridData(tbody,columns,data,slots);

        const footChildren = stripCommentNodes(tfoot).map(x=>x as HTMLElement);

        expect(footChildren).toHaveLength(1);

        const navTd = stripCommentNodes(footChildren[0])[0] as HTMLElement;

        const navContainer = stripCommentNodes(navTd)[0] as HTMLElement;

        const navChildren = stripCommentNodes(navContainer).map(x=>x as HTMLElement);

        await userEvent.click(navChildren[0]);

        expect(movedBack).toBe(true);
        expect(movedForward).toBe(false);

        movedBack=false;

        await userEvent.click(navChildren[1]);

        expect(movedBack).toBe(false);
        expect(movedForward).toBe(true);
    }),
    test('check tfoot slots',async()=>{
        const columns: GridColumn[][] = [
            [
                {id:'col1',title:'Column 1',propertyName:'prop1',canSort:true},
                {id:'col2',propertyName:'prop2'},
                {id:'col3',title:'Column 3',propertyName:'prop3'}
            ]
        ];

        const data: any[] = [
            {prop1:'Item 1 Prop 1',prop2:'Item 1 Prop 2',prop3:'Item 1 Prop 3'},
            {prop1:'Item 2 Prop 1',prop2:'Item 2 Prop 2',prop3:'Item 2 Prop 3'},
            {prop1:'Item 3 Prop 1',prop2:'Item 3 Prop 2',prop3:'Item 3 Prop 3'}
        ];

        const tfootHeadContent = 'TFOOT HEAD';
        const tfootBottomContent = 'TFOOT BOTTOM';


        const slots = {
            'head-col2':()=>'Column 2',
            'body-col3':(inputs:any)=>JSON.stringify({rowIndex:inputs.rowIndex,data:inputs.data,row:inputs.row}),
            'tfoot_head':()=>h('tr',null,h('td',null,tfootHeadContent)),
            'tfoot_bottom':()=>h('tr',null,h('td',null,tfootBottomContent))
        };

        const current_sort:GridSort = {
            column:'col1',
            ascending:true
        };

        const wrapper = mount(Grid, {
            props:{
              total_pages:10,
              current_page:5,
              columns:columns,
              data:data,
              has_filter:true,
              current_sort:current_sort
            },
            slots:slots
        });

        const tableContainer = wrapper.element as HTMLElement;

        expect(tableContainer.className).toBe('');
        expect(tableContainer.childNodes).toHaveLength(1);
    
        const table = tableContainer.childNodes[0] as HTMLElement;
    
        expect(table.classList).toContain('table');
        expect(table.classList).toContain('is-striped');
        expect(table.classList).toContain('is-hoverable');
    
        const tableChildren = stripCommentNodes(table);
    
        expect(tableChildren).toHaveLength(3);
    
        const thead = tableChildren[0] as HTMLElement;
        const tbody = tableChildren[1] as HTMLElement;
        const tfoot = tableChildren[2] as HTMLElement;

        const theadRows = stripCommentNodes(thead).map(x=>x as HTMLElement);

        expect(theadRows).toHaveLength(2);

        const filterRow = theadRows[0];

        expect(filterRow.childNodes).toHaveLength(1);

        expect((filterRow.childNodes[0] as HTMLElement).getAttribute('colspan')).toBe('100%');
        checkFilter(filterRow.childNodes[0] as HTMLElement);

        checkGridHeaders(theadRows.slice(1),columns,slots,current_sort);

        checkGridData(tbody,columns,data,slots);

        const footChildren = stripCommentNodes(tfoot).map(x=>x as HTMLElement);

        expect(footChildren).toHaveLength(3);

        checkPaginationRow(footChildren[1]);

        const headChildren = stripCommentNodes(footChildren[0]).map(x=>x as HTMLElement);

        expect(headChildren).toHaveLength(1);
        expect(headChildren[0].innerText).toBe(tfootHeadContent);

        const bottomChildren = stripCommentNodes(footChildren[2]).map(x=>x as HTMLElement);

        expect(bottomChildren).toHaveLength(1);
        expect(bottomChildren[0].innerText).toBe(tfootBottomContent);
    })
});

function checkFilter(container: HTMLElement) {
    const filterContainer = container.childNodes[0] as HTMLElement;

    expect(filterContainer.className).toBe('field');
    
    const controlContainer = stripCommentNodes(filterContainer).map(x=>x as HTMLElement)[0];

    expect(controlContainer.classList).toContain('control');
    expect(controlContainer.classList).toContain('has-icons-left');

    const controlContainerChildren = stripCommentNodes(controlContainer);
    
    expect(controlContainerChildren).toHaveLength(2);

    const filterInput = controlContainerChildren[0] as HTMLElement;

    expect(filterInput.getAttribute('type')).toBe('text');
    expect(filterInput.classList).toContain('input');
    expect(filterInput.classList).toContain('is-expanded');
    expect(filterInput.classList).toContain('is-rounded');
    expect(filterInput.getAttribute('placeholder')).toBe(translate('Filter.Filter'));

    const filterIconContainer = controlContainerChildren[1] as HTMLElement;

    expect(filterIconContainer.classList).toContain('is-left');
    expect(stripCommentNodes(filterIconContainer).length).toBe(1);

    const filterIcon = stripCommentNodes(filterIconContainer)[0] as HTMLElement;

    expect(filterIcon.classList).toContain('fa-filter');
    expect(filterIcon.classList).toContain('fa-sm');
}
function checkGridHeaders(rows: HTMLElement[], columns: GridColumn[][], slots: any, current_sort?: GridSort) {
    expect(rows.length).toBe(columns.length);

    for(let x=0;x<rows.length;x++){
        const headers = stripCommentNodes(rows[x]).map(x=>x as HTMLElement);

        expect(headers.length).toBe(columns[x].length);

        for(let y=0;y<headers.length;y++){
            const th = headers[y];

            expect(th.getAttribute('colspan')).toBe(columns[x][y].headerColspan??null);
            expect(th.getAttribute('rowspan')).toBe(columns[x][y].headerRowspan??null);
            expect(th.className).toBe(columns[x][y].headerClass??'');

            if (slots[`head-${columns[x][y].id}`]!==undefined){
                expect(th.innerText).toBe(slots[`head-${columns[x][y].id}`]());
            }else if (current_sort!==undefined && current_sort!==null && (columns[x][y].canSort??false) && columns[x][y].id === current_sort.column){
                const cellChildren = stripCommentNodes(th).map(x=>x as HTMLElement);
                expect(cellChildren).toHaveLength(1);
                expect(cellChildren[0].classList).toContain('icon-text');
                expect(cellChildren[0].classList).toContain('is-clickable');

                const iconChildren = stripCommentNodes(cellChildren[0]).map(x=>x as HTMLElement);
                expect(iconChildren).toHaveLength(2);

                expect(iconChildren[0].className).toBe('icon');

                const icons = stripCommentNodes(iconChildren[0]).map(x=>x as HTMLElement);

                expect(icons).toHaveLength(1);
                expect(icons[0].classList).toContain(`fa-${(current_sort.ascending ? 'arrow-up' : 'arrow-down')}`);

                expect(iconChildren[1].innerText).toBe(columns[x][y].title);
            }else{
                expect(th.innerText).toBe(columns[x][y].title);
            }
        }
    }
}
function checkGridData(tbody: HTMLElement,columns:GridColumn[][],data:any[],slots:any,
    getRowColor?:(rowIndex:number,row:any)=>ColorTypes|null|undefined
){
    const rows = stripCommentNodes(tbody).map(x=>x as HTMLElement);
    const cols = columns.filter(row=>row.some(c=>!(c.headerOnly??false)))
    .map(row=>row.filter(c=>!(c.headerOnly??false)));

    let rindex:number = 0;
    
    for(let index=0;index<data?.length;index++){
        const drow = data[index];
        
        for(let cindex=0;cindex<cols.length;cindex++){
            const tr = rows[rindex];
            if (getRowColor!==undefined){
                let color = getRowColor(index,drow);
                if (color){
                    expect(tr.className).toBe(`is=${color}`);
                }
            }
            const cells = stripCommentNodes(tr).map(n=>n as HTMLElement);

            expect(cells).toHaveLength(cols[cindex].length);
            for(let i=0;i<cols[cindex].length;i++){
                const td = cells[i];
                const col = cols[cindex][i];

                expect(td.getAttribute('colspan')).toBe(col.dataColspan??null);
                expect(td.getAttribute('rowspan')).toBe(col.dataRowspan??null);

                let classes : string[] = [];
                if(col.cellClass){
                    classes.push(col.cellClass!.toString());
                }
                if (col.getCellColor){
                    let color = col.getCellColor(index,drow,(col.propertyName?drow[col.propertyName] : undefined));
                    if (color){
                        classes.push(`is-${color}`);
                    }
                }
                expect(td.className).toBe(classes.join(' '));

                if(slots[`body-${col.id}`]){
                    expect(td.innerText).toBe(slots[`body-${col.id}`]({rowIndex:index,data:(col.propertyName?drow[col.propertyName] : null),row:drow}));
                }else{
                    expect(td.innerText).toBe((col.propertyName?drow[col.propertyName] : null));
                }
            }
            rindex++;
        }
    }

    expect(rows).toHaveLength(rindex);
}
function checkPaginationRow(tr: HTMLElement){
    const cells = stripCommentNodes(tr).map(x=>x as HTMLElement);

    expect(cells).toHaveLength(1);
    expect(cells[0].getAttribute('colspan')).toBe('100%');

    const cellContent = stripCommentNodes(cells[0]).map(x=>x as HTMLElement);

    expect(cellContent).toHaveLength(1);

    const pager = cellContent[0];

    expect(pager.classList).toContain('pagination');
    expect(pager.classList).toContain('is-centered');
    expect(pager.classList).toContain('is-small');

    const children = stripCommentNodes(pager);

    expect(children).toHaveLength(3);

    const prev = children[0] as HTMLElement;
    
    expect(prev.classList).toContain('pagination-previous');
    expect(prev.innerText.trim()).toBe(translate('Pagination.Previous'));
    expect(prev.getAttribute('title')).toBe(translate('Pagination.Previous'));
    expect(prev.childNodes).toHaveLength(2);

    const prevIcon = prev.childNodes[0] as HTMLElement;

    expect(prevIcon.classList).toContain('fa-backward');
    expect(prevIcon.classList).toContain('mr-1');

    const next = children[1] as HTMLElement;

    expect(next.classList).toContain('pagination-next');
    expect(next.innerText.trim()).toBe(translate('Pagination.Next'));
    expect(next.getAttribute('title')).toBe(translate('Pagination.Next'));
    expect(next.childNodes).toHaveLength(2);

    const nextIcon = next.childNodes[1] as HTMLElement;

    expect(nextIcon.classList).toContain('fa-forward');
    expect(nextIcon.classList).toContain('ml-1');

    const numberList = children[2] as HTMLElement;

    expect(numberList.classList).toContain('pagination-list');

    const pageNumbers = stripCommentNodes(numberList).map(nl=>nl as HTMLElement);

    expect(pageNumbers).toHaveLength(7);
    const expectedContent = ['1','…','5','6','7','…','10'];

    for(let x=0;x<pageNumbers.length;x++){
        const children = stripCommentNodes(pageNumbers[x]);
        expect(children).toHaveLength(1);

        const lnk = children[0] as HTMLElement;

        expect(lnk.innerText).toBe(expectedContent[x]);
        if (x===1 || x===5){
            expect(lnk.classList).toContain('pagination-ellipsis');
        }else{
            expect(lnk.classList).toContain('pagination-link');
            if (x===3){
                expect(lnk.classList).toContain('is-current');
            }
        }
    }
}

