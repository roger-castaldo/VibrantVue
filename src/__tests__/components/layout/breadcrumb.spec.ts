import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import Breadcrumbs from '../../../components/layout/breadcrumbs.vue';
import { stripCommentNodes } from '../../common';
import { BreadCrumb } from '../../../components/layout/interfaces';
import { BreadCrumbAlignments, BreadCrumbSeperators, Sizes } from '../../../enums';


describe('Breadcrumbs', () => {
  test('check accessibility',async() => {
    const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
      const {container} = render(Breadcrumbs, {
        props: {
          breadCrumbs:[
            {
              active:true,
              title:'test breadcrumb'
            }
          ]
        }
      });
      return container;
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check single item with defaults',async()=>{
    const crumbs : BreadCrumb[] = [
      {
        active:true,
        title:'first'
      }
    ];

    const {container} = render(Breadcrumbs,{
      props:{
        breadCrumbs:crumbs
      }
    });

    const crumbContainer = container.childNodes[0] as HTMLElement;

    validateBreadcrumbsStructure(crumbContainer,crumbs);
  }),
  test('check multiple items with icons and defaults',async()=>{
    const crumbs : BreadCrumb[] = [
      {
        active:false,
        title:'first',
        icon:'edit'
      },
      {
        active:false,
        title:'second',
        icon:'add'
      },
      {
        active:true,
        title:'third',
        icon:'cancel'
      }
    ];

    const {container} = render(Breadcrumbs,{
      props:{
        breadCrumbs:crumbs
      }
    });

    const crumbContainer = container.childNodes[0] as HTMLElement;

    validateBreadcrumbsStructure(crumbContainer,crumbs);
  }),
  test('check alignments',async()=>{
    const crumbs : BreadCrumb[] = [
      {
        active:true,
        title:'first'
      }
    ];

    for (const key in BreadCrumbAlignments){
      const {container} = render(Breadcrumbs,{
        props:{
          breadCrumbs:crumbs,
          alignment:BreadCrumbAlignments[key]
        }
      });

      const crumbContainer = container.childNodes[0] as HTMLElement;

      validateBreadcrumbsStructure(crumbContainer,crumbs);

      if (BreadCrumbAlignments[key]!==BreadCrumbAlignments.left){
        expect(crumbContainer.classList).toContain(`is-${BreadCrumbAlignments[key]}`);
      }

    }
  }),
  test('check sizes',async()=>{
    const crumbs : BreadCrumb[] = [
      {
        active:true,
        title:'first'
      }
    ];

    for (const key in Sizes){
      const {container} = render(Breadcrumbs,{
        props:{
          breadCrumbs:crumbs,
          size:Sizes[key]
        }
      });

      const crumbContainer = container.childNodes[0] as HTMLElement;

      validateBreadcrumbsStructure(crumbContainer,crumbs);

      if (Sizes[key]!==Sizes.normal){
        expect(crumbContainer.classList).toContain(`is-${Sizes[key]}`);
      }

    }
  }),
  test('check seperators',async()=>{
    const crumbs : BreadCrumb[] = [
      {
        active:true,
        title:'first'
      }
    ];

    for (const key in BreadCrumbSeperators){
      const {container} = render(Breadcrumbs,{
        props:{
          breadCrumbs:crumbs,
          seperator:BreadCrumbSeperators[key]
        }
      });

      const crumbContainer = container.childNodes[0] as HTMLElement;

      validateBreadcrumbsStructure(crumbContainer,crumbs);

      expect(crumbContainer.classList).toContain(`has-${BreadCrumbSeperators[key]}-seperator`);

    }
  }),
  test('check item click',async()=>{
    let clicked=false;

    const crumbs : BreadCrumb[] = [
      {
        active:true,
        title:'first',
        onClick:()=>{clicked=true;},
        icon:'edit'
      }
    ];

    const {container} = render(Breadcrumbs,{
      props:{
        breadCrumbs:crumbs
      }
    });

    const crumbContainer = container.childNodes[0] as HTMLElement;

    validateBreadcrumbsStructure(crumbContainer,crumbs);   

    const lnk = stripCommentNodes(stripCommentNodes(
      stripCommentNodes(crumbContainer)[0] as HTMLElement
    )[0] as HTMLElement)[0] as HTMLElement;

    expect(lnk).not.toBeNull();

    lnk.click();
    
    expect(clicked).toBe(true);
  })
});

function validateBreadcrumbsStructure(crumbContainer: HTMLElement, crumbs: BreadCrumb[]) {
  expect(crumbContainer.classList).toContain('breadcrumb');
  expect(crumbContainer.tagName).toBe('NAV');
  expect(crumbContainer.getAttribute('aria-label')).toBe('breadcrumbs');
  expect(crumbContainer.childNodes).toHaveLength(1);

  const crumbList = crumbContainer.childNodes[0] as HTMLElement;

  const renderedCrumbs = stripCommentNodes(crumbList).map(n=>n as HTMLElement);

  expect(renderedCrumbs.length).toBe(crumbs.length);

  for(let x=0;x<renderedCrumbs.length;x++){
    if (crumbs[x].active){
      expect(renderedCrumbs[x].classList).toContain('is-active');
    }

    expect(renderedCrumbs[x].childNodes).toHaveLength(1);

    const crumbLink = renderedCrumbs[x].childNodes[0] as HTMLElement;

    expect(crumbLink.tagName).toBe('A');

    const linkParts = stripCommentNodes(crumbLink);

    expect(linkParts).toHaveLength(crumbs[x].icon ? 2 : 1);
    if (crumbs[x].icon){
      const iconContainer = linkParts[0] as HTMLElement;
      
      expect(iconContainer.classList).toContain('icon');
      if (crumbs[x].onClick){
        expect(iconContainer.classList).toContain('is-clickable');
      }

      const icon = iconContainer.childNodes[0] as HTMLElement;

      expect(icon.classList).toContain(`fa-${crumbs[x].icon}`);
    }
    expect(crumbLink.innerText).toBe(crumbs[x].title);
  }
}
