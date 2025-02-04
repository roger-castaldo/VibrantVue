import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils';
import DateInput from '../../../components/form/date.vue';
import { ValueChangedEvent } from '../../../components/form/typeDefinitions';
import { sleep, stripCommentNodes } from '../../common';
import translate from '../../../messages/messages.js';
import { format } from '../../../components/form/dates';

describe('Date',()=>{
    test('check get/set value',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        const date = new Date();
        date.setSeconds(0);
        date.setMilliseconds(0);
        
        const wrapper = mount(DateInput,{
            props:{
                name:'date',
                disabled:false,
                label:'Date',
                includeTime:true,
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue(date);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toStrictEqual(date);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('date');
        expect(valueChanged!.value).toStrictEqual(date);

        wrapper.vm.setValue(null);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBeNull();
    }),
    test('check structure ',async()=>{
        const currentDate = new Date();

        const wrapper = mount(DateInput,{
            props:{
                name:'date',
                disabled:false,
                label:'Date',
                includeTime:true
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('');

        const mainChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(mainChildren).toHaveLength(2);

        const inputContainer = mainChildren[0];

        expect(inputContainer.classList).toContain('control');
        expect(inputContainer.classList).toContain('has-icons-left');
        expect(inputContainer.classList).toContain('has-icons-right');

        const inputChildren = stripCommentNodes(inputContainer).map(n=>n as HTMLElement);

        expect(inputChildren).toHaveLength(3);

        const input = inputChildren[0];

        expect(input.classList).toContain('input');
        expect(input.classList).toContain('is-expanded');
        expect(input.tagName).toBe('INPUT');
        expect(input.getAttribute('type')).toBe('text');

        const calendarIconContainer = inputChildren[1];

        expect(calendarIconContainer.classList).toContain('icon');
        expect(calendarIconContainer.classList).toContain('is-small');
        expect(calendarIconContainer.classList).toContain('is-left');
        expect(calendarIconContainer.classList).toContain('is-clickable');

        expect(calendarIconContainer.childNodes).toHaveLength(1);
        expect((calendarIconContainer.childNodes[0] as HTMLElement).classList).toContain('fa-calendar-alt');

        const clearIconContainer = inputChildren[2];

        expect(clearIconContainer.classList).toContain('icon');
        expect(clearIconContainer.classList).toContain('is-small');
        expect(clearIconContainer.classList).toContain('is-right');
        expect(clearIconContainer.classList).toContain('is-clickable');

        expect(clearIconContainer.childNodes).toHaveLength(1);
        expect((clearIconContainer.childNodes[0] as HTMLElement).classList).toContain('fa-window-close');

        const modalContainer = mainChildren[1] as HTMLElement;
      
        expect(modalContainer.classList).toContain('modal');
        expect(modalContainer.classList).not.toContain('is-active');

        const modalChildren = stripCommentNodes(modalContainer).map(n=>n as HTMLElement);

        expect(modalChildren).toHaveLength(2);

        expect(modalChildren[0].className).toBe('modal-background');
        expect(modalChildren[1].className).toBe('modal-card');

        const cardChildren = stripCommentNodes(modalChildren[1]).map(n=>n as HTMLElement);

        expect(cardChildren).toHaveLength(4);

        expect(cardChildren[0].className).toBe('card-icon');
        expect(cardChildren[0].childNodes).toHaveLength(1);
        expect((cardChildren[0].childNodes[0] as HTMLElement).className).toBe('card-icon-wrapper');
        expect((cardChildren[0].childNodes[0] as HTMLElement).childNodes).toHaveLength(1);
        expect(((cardChildren[0].childNodes[0] as HTMLElement).childNodes[0] as HTMLElement).classList).toContain('fa-calendar-alt');

        const headerChildren = stripCommentNodes(cardChildren[1]).map(x=>x as HTMLElement);

        expect(headerChildren).toHaveLength(1);
        expect(headerChildren[0].classList).toContain('columns');

        const headerColumns = stripCommentNodes(headerChildren[0]).map(x=>x as HTMLElement);

        expect(headerColumns).toHaveLength(3);

        const headerColumn1Children = stripCommentNodes(headerColumns[0]).map(x=>x as HTMLElement);

        expect(headerColumn1Children).toHaveLength(1);
        expect(headerColumn1Children[0].classList).toContain('fa-arrow-circle-left');
        expect(headerColumn1Children[0].classList).toContain('is-clickable');

        expect(headerColumns[1].classList).toContain('has-text-centered');
        expect(headerColumns[1].innerText).toBe(`${format(currentDate,undefined,'MMMM')} ${currentDate.getFullYear()}`)        

        expect(headerColumns[2].classList).toContain('has-text-right');

        const headerColumn3Children = stripCommentNodes(headerColumns[2]).map(x=>x as HTMLElement);

        expect(headerColumn3Children).toHaveLength(1);
        expect(headerColumn3Children[0].classList).toContain('fa-arrow-circle-right');
        expect(headerColumn3Children[0].classList).toContain('is-clickable');

        const bodyChildren = stripCommentNodes(cardChildren[2]).map(x=>x as HTMLElement);

        expect(bodyChildren).toHaveLength(1);

        const datesTable = stripCommentNodes(bodyChildren[0]).map(x=>x as HTMLElement)[0];

        expect(datesTable.classList).toContain('is-fullwidth');

        const tablesChildren = stripCommentNodes(datesTable).map(x=>x as HTMLElement);

        expect(tablesChildren).toHaveLength(3);

        const headChildren = stripCommentNodes(tablesChildren[0]).map(x=>x as HTMLElement);

        expect(headChildren).toHaveLength(1);

        const headRowChildren = stripCommentNodes(headChildren[0]).map(x=>x as HTMLElement);

        expect(headRowChildren).toHaveLength(7);

        expect(headRowChildren[0].innerText).toBe(translate('Date.Weekdays.Sun'));
        expect(headRowChildren[1].innerText).toBe(translate('Date.Weekdays.Mon'));
        expect(headRowChildren[2].innerText).toBe(translate('Date.Weekdays.Tue'));
        expect(headRowChildren[3].innerText).toBe(translate('Date.Weekdays.Wed'));
        expect(headRowChildren[4].innerText).toBe(translate('Date.Weekdays.Thu'));
        expect(headRowChildren[5].innerText).toBe(translate('Date.Weekdays.Fri'));
        expect(headRowChildren[6].innerText).toBe(translate('Date.Weekdays.Sat'));

        const bodyRows = stripCommentNodes(tablesChildren[1]).map(x=>x as HTMLElement);

        expect(bodyRows.length).toBeGreaterThanOrEqual(4);

        const bodyCells = bodyRows.map(r=>stripCommentNodes(r).map(x=>x as HTMLElement)).flat();

        expect(bodyCells.some(c=>!c.classList.contains('is-unselectable'))).toBe(false);
        expect(bodyCells.some(c=>!c.classList.contains('has-text-centered'))).toBe(false);
        expect(bodyCells.some(c=>c.classList.contains('is-clickable'))).toBe(true);

        const currentDateCells = bodyCells.filter(c=>c.classList.contains('has-background-primary-dark')
        && c.classList.contains('has-text-primary-light'));
        
        expect(currentDateCells).toHaveLength(1);
        expect(currentDateCells[0].innerText).toBe(currentDate.getDate().toString());

        const footRows = stripCommentNodes(tablesChildren[2]).map(x=>x as HTMLElement);

        expect(footRows).toHaveLength(1);

        const footCells = stripCommentNodes(footRows[0]).map(x=>x as HTMLElement);

        expect(footCells).toHaveLength(1);
        expect(footCells[0].className).toBe('has-text-centered');
        expect(footCells[0].getAttribute('colspan')).toBe('100%');

        const timeWrapper = stripCommentNodes(footCells[0]).map(x=>x as HTMLElement)[0];

        expect(timeWrapper.className).toBe('control');

        const timeInput = stripCommentNodes(timeWrapper).map(x=>x as HTMLElement)[0];

        expect(timeInput.classList).toContain('is-time');
        expect(timeInput.getAttribute('type')).toBe('time');
        
        const footerChildren = stripCommentNodes(cardChildren[3]).map(x=>x as HTMLElement);

        expect(footerChildren).toHaveLength(2);
        expect(footerChildren[0].tagName).toBe('BUTTON');
        expect(footerChildren[0].classList).toContain('is-primary');
        expect(footerChildren[0].innerText).toBe(translate('Button.Okay'));

        expect(footerChildren[1].tagName).toBe('BUTTON');
        expect(footerChildren[1].classList).toContain('is-danger');
        expect(footerChildren[1].innerText).toBe(translate('Button.Cancel'));
        
    }),
    test('check value clear button',async()=>{
        let valueChanged : ValueChangedEvent|null = null;
        const date = new Date();
        date.setSeconds(0);
        date.setMilliseconds(0);
        
        const wrapper = mount(DateInput,{
            props:{
                name:'date',
                disabled:false,
                label:'Date',
                includeTime:true,
                onValueChanged:(val)=>valueChanged=val
            }
        });

        let curValue = wrapper.vm.getValue();

        expect(curValue).toBe(null);

        wrapper.vm.setValue(date);

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toStrictEqual(date);

        expect(valueChanged).not.toBeNull();

        expect(valueChanged!.name).toBe('date');
        expect(valueChanged!.value).toStrictEqual(date);

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('');

        const mainChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(mainChildren).toHaveLength(2);

        const inputContainer = mainChildren[0];

        expect(inputContainer.classList).toContain('control');
        expect(inputContainer.classList).toContain('has-icons-left');
        expect(inputContainer.classList).toContain('has-icons-right');

        const inputChildren = stripCommentNodes(inputContainer).map(n=>n as HTMLElement);

        expect(inputChildren).toHaveLength(3);

        inputChildren[2].click();

        await sleep(100);

        curValue = wrapper.vm.getValue();

        expect(curValue).toBeNull();
    }),
    test('check calendar load button',async()=>{
        const wrapper = mount(DateInput,{
            props:{
                name:'date',
                disabled:false,
                label:'Date',
                includeTime:true
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('');

        const mainChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(mainChildren).toHaveLength(2);

        const inputContainer = mainChildren[0];

        expect(inputContainer.classList).toContain('control');
        expect(inputContainer.classList).toContain('has-icons-left');
        expect(inputContainer.classList).toContain('has-icons-right');

        const inputChildren = stripCommentNodes(inputContainer).map(n=>n as HTMLElement);

        expect(inputChildren).toHaveLength(3);

        inputChildren[1].click();

        await sleep(100);
        
        const modalContainer = mainChildren[1] as HTMLElement;
      
        expect(modalContainer.classList).toContain('modal');
        expect(modalContainer.classList).toContain('is-active');
        
    }),
    test('check calendar interactivity',async()=>{
        let currentDate = new Date();

        const wrapper = mount(DateInput,{
            props:{
                name:'date',
                disabled:false,
                label:'Date',
                includeTime:false
            }
        });

        const root = wrapper.element as HTMLElement;

        expect(root.className).toBe('');

        const mainChildren = stripCommentNodes(root).map(n=>n as HTMLElement);

        expect(mainChildren).toHaveLength(2);

        const inputContainer = mainChildren[0];

        expect(inputContainer.classList).toContain('control');
        expect(inputContainer.classList).toContain('has-icons-left');
        expect(inputContainer.classList).toContain('has-icons-right');

        const inputChildren = stripCommentNodes(inputContainer).map(n=>n as HTMLElement);

        expect(inputChildren).toHaveLength(3);

        inputChildren[1].click();

        await sleep(100);
        
        const modalContainer = mainChildren[1] as HTMLElement;
      
        expect(modalContainer.classList).toContain('modal');
        expect(modalContainer.classList).toContain('is-active');

        const modalChildren = stripCommentNodes(modalContainer).map(n=>n as HTMLElement);

        expect(modalChildren).toHaveLength(2);

        expect(modalChildren[0].className).toBe('modal-background');
        expect(modalChildren[1].className).toBe('modal-card');

        const cardChildren = stripCommentNodes(modalChildren[1]).map(n=>n as HTMLElement);

        expect(cardChildren).toHaveLength(4);

        expect(cardChildren[0].className).toBe('card-icon');
        expect(cardChildren[0].childNodes).toHaveLength(1);
        expect((cardChildren[0].childNodes[0] as HTMLElement).className).toBe('card-icon-wrapper');
        expect((cardChildren[0].childNodes[0] as HTMLElement).childNodes).toHaveLength(1);
        expect(((cardChildren[0].childNodes[0] as HTMLElement).childNodes[0] as HTMLElement).classList).toContain('fa-calendar-alt');

        const headerChildren = stripCommentNodes(cardChildren[1]).map(x=>x as HTMLElement);

        expect(headerChildren).toHaveLength(1);
        expect(headerChildren[0].classList).toContain('columns');

        const headerColumns = stripCommentNodes(headerChildren[0]).map(x=>x as HTMLElement);

        expect(headerColumns).toHaveLength(3);

        const headerColumn1Children = stripCommentNodes(headerColumns[0]).map(x=>x as HTMLElement);

        expect(headerColumn1Children).toHaveLength(1);
        expect(headerColumn1Children[0].classList).toContain('fa-arrow-circle-left');
        expect(headerColumn1Children[0].classList).toContain('is-clickable');

        expect(headerColumns[1].classList).toContain('has-text-centered');
        expect(headerColumns[1].innerText).toBe(`${format(currentDate,undefined,'MMMM')} ${currentDate.getFullYear()}`)        

        expect(headerColumns[2].classList).toContain('has-text-right');

        const headerColumn3Children = stripCommentNodes(headerColumns[2]).map(x=>x as HTMLElement);

        expect(headerColumn3Children).toHaveLength(1);
        expect(headerColumn3Children[0].classList).toContain('fa-arrow-circle-right');
        expect(headerColumn3Children[0].classList).toContain('is-clickable');

        headerColumn1Children[0].click();

        await sleep(100);

        if (currentDate.getMonth()==0){
            currentDate.setMonth(11);
            currentDate.setFullYear(currentDate.getFullYear()-1);
        }else {
            currentDate.setMonth(currentDate.getMonth()-1);
        }

        expect(headerColumns[1].innerText).toBe(`${format(currentDate,undefined,'MMMM')} ${currentDate.getFullYear()}`);        

        headerColumn3Children[0].click();
        await sleep(100);
        headerColumn3Children[0].click();
        await sleep(100);
        
        if (currentDate.getMonth()==10){
            currentDate.setMonth(0);
            currentDate.setFullYear(currentDate.getFullYear()+1);
        }else if (currentDate.getMonth()==11){
            currentDate.setMonth(1);
            currentDate.setFullYear(currentDate.getFullYear()+1);
        }else {
            currentDate.setMonth(currentDate.getMonth()+2);
        }

        expect(headerColumns[1].innerText).toBe(`${format(currentDate,undefined,'MMMM')} ${currentDate.getFullYear()}`);

        const bodyChildren = stripCommentNodes(cardChildren[2]).map(x=>x as HTMLElement);

        expect(bodyChildren).toHaveLength(1);

        const datesTable = stripCommentNodes(bodyChildren[0]).map(x=>x as HTMLElement)[0];

        const tablesChildren = stripCommentNodes(datesTable).map(x=>x as HTMLElement);

        expect(tablesChildren).toHaveLength(2);

        const bodyRows = stripCommentNodes(tablesChildren[1]).map(x=>x as HTMLElement);

        expect(bodyRows.length).toBeGreaterThanOrEqual(4);

        const bodyCells = bodyRows.map(r=>stripCommentNodes(r).map(x=>x as HTMLElement)).flat();

        const selectableCell = bodyCells.find(c=>c.innerText==='20');

        expect(selectableCell).not.toBeNull();
        expect(selectableCell?.classList).toContain('is-clickable');

        selectableCell?.click();

        await sleep(100);

        const footerChildren = stripCommentNodes(cardChildren[3]).map(x=>x as HTMLElement);

        footerChildren[0].click();

        await sleep(100);

        currentDate.setDate(20);

        let curValue = wrapper.vm.getValue();
        
        expect(curValue).not.toBeNull();
        expect(format(curValue!,undefined,'dd-MM-yyyy')).toBe(format(currentDate,undefined,'dd-MM-yyyy'));

        inputChildren[1].click();

        await sleep(100);

        footerChildren[1].click();

        await sleep(100);

        curValue = wrapper.vm.getValue();
        
        expect(curValue).not.toBeNull();
        expect(format(curValue!,undefined,'dd-MM-yyyy')).toBe(format(currentDate,undefined,'dd-MM-yyyy'));
    })
});