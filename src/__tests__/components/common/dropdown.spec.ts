import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import dropdown from '../../../components/common/dropdown.vue';
import { stripCommentNodes } from '../../common';
import { DropDownItem } from '../../../components';
import { userEvent } from '@vitest/browser/context'

describe('DropDown', () => {
  test('check accessibility',async() => {
    const {container} = render(dropdown, {
      props: {
        title:'testing',
        items:[]
      },
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check basic dropdown with no items',async() => {
    const testTitle = 'Sample title';

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[]
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(0);
  }),
  test('check dropdown as hoverable',async() => {
    const testTitle = 'Sample title';

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[],
        is_hoverable:true
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.classList).toContain('is-hoverable');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(0);
  }),
  test('check dropdown as right align',async() => {
    const testTitle = 'Sample title';

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[],
        is_right_align:true
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.classList).toContain('is-right');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(0);
  }),
  test('check dropdown as drop up',async() => {
    const testTitle = 'Sample title';

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[],
        drops_up:true
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.classList).toContain('is-up');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(0);
  }),
  test('check basic dropdown with single string child',async() => {
    const testTitle = 'Sample title';
    const testChild = 'Sample Child'

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[
          testChild
        ]
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(1);

    const childBlock = stripCommentNodes(dropDownMenu)[0] as HTMLElement;

    expect(childBlock.classList).toContain('dropdown-content');
    expect(stripCommentNodes(childBlock).length).toBe(1);

    const childMenuEntry = stripCommentNodes(childBlock)[0] as HTMLElement;

    expect(childMenuEntry.tagName).toBe('DIV');
    expect(childMenuEntry.classList).toContain('dropdown-item');
    expect(childMenuEntry.getAttribute('href')).toBeNull();
    expect(stripCommentNodes(childMenuEntry).length).toBe(1);

    const childTextEntry = stripCommentNodes(childMenuEntry)[0] as HTMLElement;

    expect(childTextEntry.tagName).toBe('P');
    expect(childTextEntry.innerText?.trim()).toBe(testChild);

  }),
  test('check basic dropdown with single DropDownItem child',async() => {
    const testTitle = 'Sample title';
    const testChild : DropDownItem = {
      title:'Test Child',
      href:'http://test.com/test',
      active:true
    }

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[
          testChild
        ]
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(1);

    const childBlock = stripCommentNodes(dropDownMenu)[0] as HTMLElement;

    expect(childBlock.classList).toContain('dropdown-content');
    expect(stripCommentNodes(childBlock).length).toBe(1);

    const childMenuEntry = stripCommentNodes(childBlock)[0] as HTMLElement;

    expect(childMenuEntry.tagName).toBe('A');
    expect(childMenuEntry.classList).toContain('dropdown-item');
    expect(childMenuEntry.classList).toContain('is-active');
    expect(childMenuEntry.getAttribute('href')).toBe(testChild.href);
    expect(stripCommentNodes(childMenuEntry).length).toBe(1);

    expect(childMenuEntry.innerText?.trim()).toBe(testChild.title);

  }),
  test('check basic dropdown with single DropDownItem with onclick',async() => {
    const testTitle = 'Sample title';
    let testValue=0;
    const newTestValue = 1;
    const testChild : DropDownItem = {
      title:'Test Child',
      onClick:()=>testValue=newTestValue
    }

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[
          testChild
        ]
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(stripCommentNodes(dropDownTitle).length).toBe(1);
    expect(stripCommentNodes(dropDownMenu).length).toBe(1);

    const activateButton = stripCommentNodes(dropDownTitle)[0] as HTMLElement;
    const childBlock = stripCommentNodes(dropDownMenu)[0] as HTMLElement;

    expect(stripCommentNodes(childBlock).length).toBe(1);

    const childMenuEntry = stripCommentNodes(childBlock)[0] as HTMLElement;

    await userEvent.click(activateButton);

    expect(dropDown.classList).toContain('is-active');

    await userEvent.click(childMenuEntry);

    expect(testValue).toBe(newTestValue);

  }),
  test('check dropdown with 2 children blocks',async() => {
    const testTitle = 'Sample title';
    const testChild = 'Sample Child'
    const testChild2 = 'Sample Child 2';

    const { container,getByText } = render(dropdown, {
      props: {
        title:testTitle,
        items:[[testChild],[testChild2]]
      },
    });

    const dropDown = container.childNodes[0] as HTMLElement;

    expect(dropDown.classList).toContain('dropdown');
    expect(dropDown.childNodes.length).toBe(2);

    const dropDownTitle = dropDown.childNodes[0] as HTMLElement;
    const dropDownMenu = dropDown.childNodes[1] as HTMLElement;

    expect(dropDownTitle.classList).toContain('dropdown-trigger');
    expect(dropDownTitle.innerText).toContain(testTitle);
    expect(dropDownMenu.classList).toContain('dropdown-menu');
    expect(stripCommentNodes(dropDownMenu).length).toBe(2);

    const childBlock1 = stripCommentNodes(dropDownMenu)[0] as HTMLElement;

    expect(childBlock1.classList).toContain('dropdown-content');
    expect(stripCommentNodes(childBlock1).length).toBe(1);

    const childMenuEntry1 = stripCommentNodes(childBlock1)[0] as HTMLElement;

    expect(childMenuEntry1.tagName).toBe('DIV');
    expect(childMenuEntry1.classList).toContain('dropdown-item');
    expect(childMenuEntry1.getAttribute('href')).toBeNull();
    expect(stripCommentNodes(childMenuEntry1).length).toBe(1);

    const childTextEntry1 = stripCommentNodes(childMenuEntry1)[0] as HTMLElement;

    expect(childTextEntry1.tagName).toBe('P');
    expect(childTextEntry1.innerText?.trim()).toBe(testChild);

    const childBlock2 = stripCommentNodes(dropDownMenu)[1] as HTMLElement;

    expect(childBlock2.classList).toContain('dropdown-content');
    expect(stripCommentNodes(childBlock2).length).toBe(2);

    const childMenuSeperator = stripCommentNodes(childBlock2)[0] as HTMLElement;

    expect(childMenuSeperator.tagName).toBe('HR');
    expect(childMenuSeperator.classList).toContain('dropdown-divider');

    const childMenuEntry2 = stripCommentNodes(childBlock2)[1] as HTMLElement;

    expect(childMenuEntry2.tagName).toBe('DIV');
    expect(childMenuEntry2.classList).toContain('dropdown-item');
    expect(childMenuEntry2.getAttribute('href')).toBeNull();
    expect(stripCommentNodes(childMenuEntry2).length).toBe(1);

    const childTextEntry2 = stripCommentNodes(childMenuEntry2)[0] as HTMLElement;

    expect(childTextEntry2.tagName).toBe('P');
    expect(childTextEntry2.innerText?.trim()).toBe(testChild2);
  })
});