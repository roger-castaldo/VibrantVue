import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import pagination from '../../../components/common/pagination.vue';
import { stripCommentNodes } from '../../common';
import translate from '../../../messages/messages';

describe('Pagination', () => {
    test('check accessibility',async() => {
      const {container} = render(pagination, {
        props:{
            current_page:5,
            total_pages:10
        }
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check using Next/Previous',async() => {
        const {container,getByText} = render(pagination, {
          props:{
              use_next:true,
              has_more:true,
              has_previous:true
          }
        });
    
        const pager = container.childNodes[0] as HTMLElement;

        expect(pager.classList).toContain('pagination');
        expect(pager.classList).toContain('is-centered');
        expect(pager.classList).toContain('is-small');

        const children = stripCommentNodes(pager);

        expect(children).toHaveLength(2);

        const prev = children[0] as HTMLElement;
        
        expect(prev.classList).toContain('pagination-previous');
        expect(prev.innerText).toBe(translate('Pagination.Previous'));
        expect(prev.getAttribute('title')).toBe(translate('Pagination.Previous'));
        expect(prev.childNodes).toHaveLength(2);

        const prevIcon = prev.childNodes[0] as HTMLElement;

        expect(prevIcon.classList).toContain('fa-backward');
        expect(prevIcon.classList).toContain('mr-1');

        const next = children[1] as HTMLElement;

        expect(next.classList).toContain('pagination-next');
        expect(next.innerText).toBe(translate('Pagination.Next'));
        expect(next.getAttribute('title')).toBe(translate('Pagination.Next'));
        expect(next.childNodes).toHaveLength(2);

        const nextIcon = next.childNodes[1] as HTMLElement;

        expect(nextIcon.classList).toContain('fa-forward');
        expect(nextIcon.classList).toContain('ml-1');
    }),
    test('check using Newer/Older',async() => {
        const {container,getByText} = render(pagination, {
          props:{
              use_next:false,
              has_more:true,
              has_previous:true
          }
        });
    
        const pager = container.childNodes[0] as HTMLElement;

        expect(pager.classList).toContain('pagination');
        expect(pager.classList).toContain('is-centered');
        expect(pager.classList).toContain('is-small');

        const children = stripCommentNodes(pager);

        expect(children).toHaveLength(2);

        const prev = children[0] as HTMLElement;
        
        expect(prev.classList).toContain('pagination-previous');
        expect(prev.innerText).toBe(translate('Pagination.Older'));
        expect(prev.getAttribute('title')).toBe(translate('Pagination.Older'));
        expect(prev.childNodes).toHaveLength(2);

        const prevIcon = prev.childNodes[0] as HTMLElement;

        expect(prevIcon.classList).toContain('fa-backward');
        expect(prevIcon.classList).toContain('mr-1');

        const next = children[1] as HTMLElement;

        expect(next.classList).toContain('pagination-next');
        expect(next.innerText).toBe(translate('Pagination.Newer'));
        expect(next.getAttribute('title')).toBe(translate('Pagination.Newer'));
        expect(next.childNodes).toHaveLength(2);

        const nextIcon = next.childNodes[1] as HTMLElement;

        expect(nextIcon.classList).toContain('fa-forward');
        expect(nextIcon.classList).toContain('ml-1');
    }),
    test('check using total pages more than 5',async() => {
        const {container,getByText} = render(pagination, {
          props:{
            current_page:5,
            total_pages:10
          }
        });
    
        const pager = container.childNodes[0] as HTMLElement;

        expect(pager.classList).toContain('pagination');
        expect(pager.classList).toContain('is-centered');
        expect(pager.classList).toContain('is-small');

        const children = stripCommentNodes(pager);

        expect(children).toHaveLength(3);

        const prev = children[0] as HTMLElement;
        
        expect(prev.classList).toContain('pagination-previous');
        expect(prev.innerText).toBe(translate('Pagination.Previous'));
        expect(prev.getAttribute('title')).toBe(translate('Pagination.Previous'));
        expect(prev.childNodes).toHaveLength(2);

        const prevIcon = prev.childNodes[0] as HTMLElement;

        expect(prevIcon.classList).toContain('fa-backward');
        expect(prevIcon.classList).toContain('mr-1');

        const next = children[1] as HTMLElement;

        expect(next.classList).toContain('pagination-next');
        expect(next.innerText).toBe(translate('Pagination.Next'));
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
    }),
    test('check using total pages less than 5',async() => {
      const {container,getByText} = render(pagination, {
        props:{
          current_page:2,
          total_pages:4,
          zero_page_index:false
        }
      });
  
      const pager = container.childNodes[0] as HTMLElement;

      expect(pager.classList).toContain('pagination');
      expect(pager.classList).toContain('is-centered');
      expect(pager.classList).toContain('is-small');

      const children = stripCommentNodes(pager);

      expect(children).toHaveLength(3);

      const prev = children[0] as HTMLElement;
      
      expect(prev.classList).toContain('pagination-previous');
      expect(prev.innerText).toBe(translate('Pagination.Previous'));
      expect(prev.getAttribute('title')).toBe(translate('Pagination.Previous'));
      expect(prev.childNodes).toHaveLength(2);

      const prevIcon = prev.childNodes[0] as HTMLElement;

      expect(prevIcon.classList).toContain('fa-backward');
      expect(prevIcon.classList).toContain('mr-1');

      const next = children[1] as HTMLElement;

      expect(next.classList).toContain('pagination-next');
      expect(next.innerText).toBe(translate('Pagination.Next'));
      expect(next.getAttribute('title')).toBe(translate('Pagination.Next'));
      expect(next.childNodes).toHaveLength(2);

      const nextIcon = next.childNodes[1] as HTMLElement;

      expect(nextIcon.classList).toContain('fa-forward');
      expect(nextIcon.classList).toContain('ml-1');

      const numberList = children[2] as HTMLElement;

      expect(numberList.classList).toContain('pagination-list');

      const pageNumbers = stripCommentNodes(numberList).map(nl=>nl as HTMLElement);

      expect(pageNumbers).toHaveLength(4);
      const expectedContent = ['1','2','3','4'];

      for(let x=0;x<pageNumbers.length;x++){
          const children = stripCommentNodes(pageNumbers[x]);
          expect(children).toHaveLength(1);

          const lnk = children[0] as HTMLElement;

          expect(lnk.innerText).toBe(expectedContent[x]);
          expect(lnk.classList).toContain('pagination-link');
          if (x===1){
              expect(lnk.classList).toContain('is-current');
          }
      }
    }),
    test('check interaction callbacks with page numbers',async() => {
      let pageAssigned = -1;
      const current_page = 5;

      const {container,getByText} = render(pagination, {
        props:{
          current_page:current_page,
          total_pages:10,
          zero_page_index:false,
          onGoToPage:(page)=>{
            pageAssigned=page;
          }
        }
      });
  
      const pager = container.childNodes[0] as HTMLElement;

      expect(pager.classList).toContain('pagination');
      expect(pager.classList).toContain('is-centered');
      expect(pager.classList).toContain('is-small');

      const children = stripCommentNodes(pager);

      expect(children).toHaveLength(3);

      const prev = children[0] as HTMLElement;

      prev.click();

      expect(pageAssigned).toBe(current_page-1);

      const next = children[1] as HTMLElement;

      next.click();

      expect(pageAssigned).toBe(current_page+1);

      const numberList = children[2] as HTMLElement;

      const pageNumbers = stripCommentNodes(numberList).map(nl=>nl as HTMLElement);

      pageNumbers[2].click();

      expect(pageAssigned).toBe(6);
  })
});