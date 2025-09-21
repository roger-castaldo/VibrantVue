import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import message from '../../../components/common/message.vue';
import { stripCommentNodes } from '../../common';
import { ColorTypes, Sizes } from '../../../enums';

describe('Message', () => {
    test('check accessibility',async() => {
      const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
        const {container} = render(message, {
          props:{
              message:'test message',
              title:'test title'
          }
        });
        return container;
      });

      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check with title',async() => {
        const testTitle = 'Testing title';

        const {container} = render(message, {
          props:{
              title:testTitle
          }
        });
    
        const messageElement = container.childNodes[0] as HTMLElement;

        expect(messageElement.classList).toContain('message');
        expect(messageElement.classList).toContain('is-primary');

        expect(messageElement.childNodes.length).toBe(2);

        const titleContainer = messageElement.childNodes[0] as HTMLElement;
        const bodyContainer = messageElement.childNodes[1] as HTMLElement;

        expect(titleContainer.classList).toContain('message-header');
        expect(stripCommentNodes(titleContainer).length).toBe(1);
        expect(titleContainer.innerText).toBe(testTitle);

        expect(bodyContainer.classList).toContain('message-body');
    }),
    test('check with message',async() => {
      const testMessage = 'Testing message to put inside';

      const {container} = render(message, {
        props:{
            message:testMessage
        }
      });
  
      const messageElement = container.childNodes[0] as HTMLElement;

      expect(messageElement.classList).toContain('message');
      expect(messageElement.classList).toContain('is-primary');

      const childElements = stripCommentNodes(messageElement);

      expect(childElements.length).toBe(1);

      const bodyContainer = childElements[0] as HTMLElement;

      expect(bodyContainer.classList).toContain('message-body');
      expect(stripCommentNodes(bodyContainer).length).toBe(1);
      expect(bodyContainer.innerText).toBe(testMessage);
  }),
  test('check with delete button',async() => {
    const {container} = render(message, {
      props:{
          has_delete:true,
          title:'required'
      }
    });

    const messageElement = container.childNodes[0] as HTMLElement;

    expect(messageElement.classList).toContain('message');
    expect(messageElement.classList).toContain('is-primary');

    expect(messageElement.childNodes.length).toBe(2);

    const titleContainer = messageElement.childNodes[0] as HTMLElement;
    const bodyContainer = messageElement.childNodes[1] as HTMLElement;

    expect(titleContainer.classList).toContain('message-header');
    expect(stripCommentNodes(titleContainer).length).toBe(2);

    const deleteButton = stripCommentNodes(titleContainer)[1] as HTMLElement;

    expect(deleteButton.tagName).toBe('BUTTON');
    expect(deleteButton.classList).toContain('delete');
    
    expect(bodyContainer.classList).toContain('message-body');
  }),
  test('check message types',async() => {
    for (const key in ColorTypes){
      const {container} = render(message, {
        props:{
            type:ColorTypes[key]
        }
      });  
      
      const messageElement = container.childNodes[0] as HTMLElement;

      expect(messageElement.classList).toContain('message');
      expect(messageElement.classList).toContain(`is-${ColorTypes[key]}`);
    }
  }),
  test('check message sizes',async() => {
    for (const key in Sizes){
      if (Sizes[key]!==Sizes.normal){
        const {container} = render(message, {
          props:{
              size:Sizes[key]
          }
        });  
        
        const messageElement = container.childNodes[0] as HTMLElement;

        expect(messageElement.classList).toContain('message');
        expect(messageElement.classList).toContain(`is-${Sizes[key]}`);
      }
    }
  })
});