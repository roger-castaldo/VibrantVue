import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Tabs from '../../../components/layout/tabs.vue';
import { sleep, stripCommentNodes } from '../../common';
import { Tab } from '../../../components/layout/interfaces';
import { TabStyles,TabAlignments } from '../../../enums';
import { userEvent } from '@vitest/browser/context';

describe('Tabs', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(Tabs, {
        props: {
          tabs:[
            {active:true,title:'Tab1',icon:'person'},
            {title:'Tab2'},
            {title:'Tab3'}
          ]
        }
      });
      return container;
    }, 100);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check basics',async() => {
    const tabs:Tab[] = [
      {title:'Tab1'},
      {title:'Tab2'}
    ];

    const {container} = render(Tabs, {
      props: {
        tabs:tabs
      }
    });

    await sleep(100);

    const tabContainer = container.childNodes[0] as HTMLElement;

    expect(tabContainer.classList).toContain('tabs');
    expect(tabContainer.classList).toContain('is-left');
    expect(tabContainer.childNodes).toHaveLength(1);

    const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

    expect(tabListContainer.tagName).toBe('UL');

    checkTabs(tabs,tabListContainer);
  }),
  test('check with active',async() => {
    const tabs:Tab[] = [
      {title:'Tab1',active:true},
      {title:'Tab2'}
    ];

    const {container} = render(Tabs, {
      props: {
        tabs:tabs
      }
    });

    await sleep(100);

    const tabContainer = container.childNodes[0] as HTMLElement;

    expect(tabContainer.classList).toContain('tabs');
    expect(tabContainer.classList).toContain('is-left');
    expect(tabContainer.childNodes).toHaveLength(1);

    const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

    expect(tabListContainer.tagName).toBe('UL');

    checkTabs(tabs,tabListContainer);
  }),
  test('check with icon',async() => {
    const tabs:Tab[] = [
      {title:'Tab1',icon:'person'},
      {title:'Tab2'}
    ];

    const {container} = render(Tabs, {
      props: {
        tabs:tabs
      }
    });

    await sleep(100);

    const tabContainer = container.childNodes[0] as HTMLElement;

    expect(tabContainer.classList).toContain('tabs');
    expect(tabContainer.classList).toContain('is-left');
    expect(tabContainer.childNodes).toHaveLength(1);

    const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

    expect(tabListContainer.tagName).toBe('UL');

    checkTabs(tabs,tabListContainer);
  }),
  test('check with href',async() => {
    const tabs:Tab[] = [
      {title:'Tab1',href:'http://localhost/'},
      {title:'Tab2'}
    ];

    const {container} = render(Tabs, {
      props: {
        tabs:tabs
      }
    });

    await sleep(100);

    const tabContainer = container.childNodes[0] as HTMLElement;

    expect(tabContainer.classList).toContain('tabs');
    expect(tabContainer.classList).toContain('is-left');
    expect(tabContainer.childNodes).toHaveLength(1);

    const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

    expect(tabListContainer.tagName).toBe('UL');

    checkTabs(tabs,tabListContainer);
  }),
  test('check with modifiers',async() => {
    const tabs:Tab[] = [
      {title:'Tab1'},
      {title:'Tab2'}
    ];

    const {container} = render(Tabs, {
      props: {
        tabs:tabs,
        full_width:true
      }
    });

    await sleep(100);

    const tabContainer = container.childNodes[0] as HTMLElement;

    expect(tabContainer.classList).toContain('tabs');
    expect(tabContainer.classList).toContain('is-left');
    expect(tabContainer.classList).toContain('is-fullwidth');
    expect(tabContainer.childNodes).toHaveLength(1);

    const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

    expect(tabListContainer.tagName).toBe('UL');

    checkTabs(tabs,tabListContainer);
  }),
  test('check alignments',async() => {
    const tabs:Tab[] = [
      {title:'Tab1'},
      {title:'Tab2'}
    ];

    for(const key in TabAlignments){
      const {container} = render(Tabs, {
        props: {
          tabs:tabs,
          alignment:TabAlignments[key]
        }
      });

      await sleep(100);

      const tabContainer = container.childNodes[0] as HTMLElement;

      expect(tabContainer.classList).toContain('tabs');
      expect(tabContainer.classList).toContain(`is-${TabAlignments[key]}`);
      expect(tabContainer.childNodes).toHaveLength(1);

      const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

      expect(tabListContainer.tagName).toBe('UL');

      checkTabs(tabs,tabListContainer);
    }
  }),
  test('check types',async() => {
    const tabs:Tab[] = [
      {title:'Tab1'},
      {title:'Tab2'}
    ];

    for(const key in TabStyles){
      const {container} = render(Tabs, {
        props: {
          tabs:tabs,
          type:TabStyles[key]
        }
      });

      await sleep(100);

      const tabContainer = container.childNodes[0] as HTMLElement;

      expect(tabContainer.classList).toContain('tabs');
      expect(tabContainer.classList).toContain('is-left');
      expect(tabContainer.classList).toContain(`is-${TabStyles[key]}`);
      expect(tabContainer.childNodes).toHaveLength(1);

      const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

      expect(tabListContainer.tagName).toBe('UL');

      checkTabs(tabs,tabListContainer);
    }
  }),
  test('check click',async() => {
    let clicked=false;

    const tabs:Tab[] = [
      {title:'Tab1',onClick:()=>clicked=true},
      {title:'Tab2'}
    ];

    const {container} = render(Tabs, {
      props: {
        tabs:tabs
      }
    });

    await sleep(100);

    const tabContainer = container.childNodes[0] as HTMLElement;

    expect(tabContainer.classList).toContain('tabs');
    expect(tabContainer.classList).toContain('is-left');
    expect(tabContainer.childNodes).toHaveLength(1);

    const tabListContainer = tabContainer.childNodes[0] as HTMLElement;

    expect(tabListContainer.tagName).toBe('UL');

    checkTabs(tabs,tabListContainer);

    const li = (stripCommentNodes(tabListContainer)[0] as HTMLElement);

    await userEvent.click(li.childNodes[0] as HTMLElement);

    expect(clicked).toBe(true);
  })
});

function checkTabs(tabs: Tab[], tabListContainer: HTMLElement) {
  const renderedTabs = stripCommentNodes(tabListContainer).map(n=>n as HTMLElement);

  expect(renderedTabs).toHaveLength(tabs.length);

  for(let x=0;x<tabs.length;x++){
    expect(renderedTabs[x].tagName).toBe('LI');
    expect(renderedTabs[x].className).toBe((tabs[x].active ? 'is-active' : ''));
    
    expect(renderedTabs[x].childNodes).toHaveLength(1);

    const lnk = renderedTabs[x].childNodes[0] as HTMLElement;

    if (tabs[x].href){
      expect(lnk.getAttribute('href')).toBe(tabs[x].href);
    }

    const lnkContent = stripCommentNodes(lnk).map(n=>n as HTMLElement);

    if (tabs[x].icon){
      expect(lnkContent).toHaveLength(2);

      expect(lnkContent[0].classList).toContain('icon');
      expect(lnkContent[0].classList).toContain('is-small');
      expect(lnkContent[0].childNodes).toHaveLength(1);
      expect((lnkContent[0].childNodes[0] as HTMLElement).classList).toContain(`fa-${tabs[x].icon}`);

      expect(lnkContent[1].innerText).toBe(tabs[x].title);
    }else{
      expect(lnkContent).toHaveLength(1);

      expect(lnkContent[0].innerText).toBe(tabs[x].title);
    }
  }
}
