import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import notification from '../../../components/common/notification.vue';
import { stripCommentNodes } from '../../common';
import { NoticeTypes } from '../../../enums';

describe('Notification', () => {
    test('check accessibility',async() => {
      const {container} = render(notification, {
        props:{
            message:'test message'
        }
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check basic content',async() => {
      const testMessage = 'test message';

      const {container} = render(notification, {
        props:{
            message:testMessage
        }
      });
  
      const notificationElement = container.childNodes[0] as HTMLElement;

      expect(notificationElement.classList).toContain('notification');
      expect(notificationElement.classList).toContain('is-info');

      const content = stripCommentNodes(notificationElement);

      expect(content).toHaveLength(1);
      expect(content[0].textContent).toBe(testMessage);
    }),
    test('check light setting',async() => {
      const testMessage = 'test message';

      const {container} = render(notification, {
        props:{
            message:testMessage,
            light:true
        }
      });
  
      const notificationElement = container.childNodes[0] as HTMLElement;

      expect(notificationElement.classList).toContain('notification');
      expect(notificationElement.classList).toContain('is-info');
      expect(notificationElement.classList).toContain('is-light');

      const content = stripCommentNodes(notificationElement);

      expect(content).toHaveLength(1);
      expect(content[0].textContent).toBe(testMessage);
    }),
    test('check notice types',async() => {
      for (const key in NoticeTypes){
        const {container} = render(notification, {
          props:{
            message:'test message',
              type:NoticeTypes[key]
          }
        });  
        
        const notificationElement = container.childNodes[0] as HTMLElement;
  
        expect(notificationElement.classList).toContain('notification');
        expect(notificationElement.classList).toContain(`is-${NoticeTypes[key]}`);
      }
    })
});