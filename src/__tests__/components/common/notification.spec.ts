import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks, sleep } from '../../common';
import notification from '../../../components/common/notification.vue';
import { stripCommentNodes } from '../../common';
import { NoticeTypes } from '../../../enums';
import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';

describe('Notification', () => {
    test('check accessibility',async() => {
      const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
        let result : HTMLElement[] = [];
          for (const key in NoticeTypes) {
            const renderResult1 = render(notification, {
              props:{
                  message:'test message',
                  type: NoticeTypes[key],
              }
            });
            result.push(renderResult1.container);
            const renderResult2 = render(notification, {
              props:{
                  message:'test message',
                  type: NoticeTypes[key],
                  light:true
              }
            });
            result.push(renderResult2.container);
          }
          return result;
      });

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
      expect(notificationElement.classList).toContain('is-skeleton');

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
    test('check loading setting',async() => {
      const testMessage = 'test message';

      const props = {
        message: testMessage,
        is_loading: ref(true)
      };

      const wrapper = mount(notification, {
        props:props
      });
  
      let notificationElement = wrapper.element as HTMLElement;

      expect(notificationElement.classList).toContain('notification');
      expect(notificationElement.classList).toContain('is-info');
      expect(notificationElement.classList).toContain('is-skeleton');

      const content = stripCommentNodes(notificationElement);

      expect(content).toHaveLength(1);
      expect(content[0].textContent).toBe(testMessage);

      props.is_loading.value = false;

      await nextTick();

      notificationElement = wrapper.element as HTMLElement;

      expect(notificationElement.classList).not.toContain('is-skeleton');
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