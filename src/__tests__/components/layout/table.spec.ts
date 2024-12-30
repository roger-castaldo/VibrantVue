import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Table from '../../../components/layout/table.vue';
import { stripCommentNodes } from '../../common';
import {h} from 'vue';

const headerContent = 'header content';
const bodyContent = 'body content';
const footerContent = 'footer cell';

const headerCell = h('th',null,headerContent);
const bodyCell = h('td',null,bodyContent);
const footerCell = h('td',null,footerContent);

const headerRow = h('tr',null,[headerCell]);
const bodyRow = h('tr',null,[bodyCell]);
const footerRow = h('tr',null,[footerCell]);

describe('Table', () => {
  test('check accessibility',async() => {
    const {container} = render(Table, {
      props: {},
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check defaults',async() => {
    const {container} = render(Table, {
      props: {},
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
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

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check without thead',async() => {
    const {container} = render(Table, {
      props: {},
      slots:{
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(2);

    const tbody = tableChildren[0] as HTMLElement;
    const tfoot = tableChildren[1] as HTMLElement;

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check without body',async() => {
    const {container} = render(Table, {
      props: {},
      slots:{
        thead:()=>headerRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(2);

    const thead = tableChildren[0] as HTMLElement;
    const tfoot = tableChildren[1] as HTMLElement;

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check without tfoot',async() => {
    const {container} = render(Table, {
      props: {},
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(2);

    const thead = tableChildren[0] as HTMLElement;
    const tbody = tableChildren[1] as HTMLElement;

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);
  }),
  test('check full width',async() => {
    const {container} = render(Table, {
      props: {
        full_width:true
      },
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');
    expect(table.classList).toContain('is-fullwidth');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(3);

    const thead = tableChildren[0] as HTMLElement;
    const tbody = tableChildren[1] as HTMLElement;
    const tfoot = tableChildren[2] as HTMLElement;

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check scrollable',async() => {
    const {container} = render(Table, {
      props: {
        scrollable:true
      },
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('table-container');
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

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check narrow',async() => {
    const {container} = render(Table, {
      props: {
        narrow:true
      },
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');
    expect(table.classList).toContain('is-narrow');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(3);

    const thead = tableChildren[0] as HTMLElement;
    const tbody = tableChildren[1] as HTMLElement;
    const tfoot = tableChildren[2] as HTMLElement;

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check fixed header',async() => {
    const {container} = render(Table, {
      props: {
        fixed_header:true
      },
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('is-fixed');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');
    expect(table.classList).toContain('is-fixed');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(3);

    const thead = tableChildren[0] as HTMLElement;
    const tbody = tableChildren[1] as HTMLElement;
    const tfoot = tableChildren[2] as HTMLElement;

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  }),
  test('check fixed and scrollable',async() => {
    const {container} = render(Table, {
      props: {
        scrollable:true,
        fixed_header:true
      },
      slots:{
        thead:()=>headerRow,
        tbody:()=>bodyRow,
        tfoot:()=>footerRow
      }
    });

    const tableContainer = container.childNodes[0] as HTMLElement;

    expect(tableContainer.className).toBe('table-container');
    expect(tableContainer.childNodes).toHaveLength(1);

    const table = tableContainer.childNodes[0] as HTMLElement;

    expect(table.classList).toContain('table');
    expect(table.classList).toContain('is-striped');
    expect(table.classList).toContain('is-hoverable');
    expect(table.classList).not.toContain('is-fixed');

    const tableChildren = stripCommentNodes(table);

    expect(tableChildren).toHaveLength(3);

    const thead = tableChildren[0] as HTMLElement;
    const tbody = tableChildren[1] as HTMLElement;
    const tfoot = tableChildren[2] as HTMLElement;

    expect(stripCommentNodes(thead)).toHaveLength(1);
    expect(thead.innerText.trim()).toBe(headerContent);

    expect(stripCommentNodes(tbody)).toHaveLength(1);
    expect(tbody.innerText.trim()).toBe(bodyContent);

    expect(stripCommentNodes(tfoot)).toHaveLength(1);
    expect(tfoot.innerText.trim()).toBe(footerContent);
  })
});