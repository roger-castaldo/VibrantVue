import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import { ExecuteAccessibilityChecks } from '../../common';
import pageNotification from '../../../components/common/page-notification.vue';
import { stripCommentNodes } from '../../common';
import { NoticeTypes } from '../../../enums';
import { userEvent } from '@vitest/browser/context';

describe('Page Notification', () => {
    test('check accessibility',async() => {
      const accessibilityScanResults =  await ExecuteAccessibilityChecks(()=>{
        const {container} = render(pageNotification, {
          props:{
              visible:true,
              message:'test message'
          }
        });
        return container;
      });

      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check basic content',async() => {
      const testMessage = 'test message';

      const {container} = render(pageNotification, {
        props:{
            visible:true,
            message:testMessage
        }
      });
  
      const notificationElement = container.childNodes[0] as HTMLElement;

      expect(notificationElement.className).toBe('');

      const children = stripCommentNodes(notificationElement);

      expect(children).toHaveLength(1);

      const animationContainer = children[0] as HTMLElement;

      expect(animationContainer.getAttribute('enteractiveclass')).toContain('animate__fadeIn');
      expect(animationContainer.getAttribute('leaveactiveclass')).toContain('animate__fadeOut');

      const animationChildren = stripCommentNodes(animationContainer);

      expect(animationChildren).toHaveLength(1);

      const notificationContainer = animationChildren[0] as HTMLElement;

      expect(notificationContainer.classList).toContain('is-page-notification-container');
      expect(notificationContainer.classList).toContain('is-info');
      expect(notificationContainer.classList).toContain('has-no-close');

      const notificationContainerChildren = stripCommentNodes(notificationContainer);

      expect(notificationContainerChildren).toHaveLength(2);

      const notificationIcon = notificationContainerChildren[0] as HTMLElement;
      const messageContainer = notificationContainerChildren[1] as HTMLElement;

      expect(notificationIcon.classList).toContain('fa-circle-info');
      expect(notificationIcon.classList).toContain('fa-2xl');

      expect(messageContainer.classList).toContain('block');
      expect(messageContainer.innerText).toBe(testMessage);
    }),
    test('check user blocking',async() => {
      const testMessage = 'test message';

      const {container} = render(pageNotification, {
        props:{
            visible:true,
            block_user:true,
            message:testMessage
        }
      });
  
      const notificationElement = container.childNodes[0] as HTMLElement;

      expect(notificationElement.classList).toContain('modal');
      expect(notificationElement.classList).toContain('is-active');

      const children = stripCommentNodes(notificationElement);

      expect(children).toHaveLength(2);

      const modal = children[0] as HTMLElement;
      const animationContainer = children[1] as HTMLElement;

      expect(modal.classList).toContain('modal-background');
      expect(modal.innerHTML).toBe('');

      expect(animationContainer.getAttribute('enteractiveclass')).toContain('animate__fadeIn');
      expect(animationContainer.getAttribute('leaveactiveclass')).toContain('animate__fadeOut');

      const animationChildren = stripCommentNodes(animationContainer);

      expect(animationChildren).toHaveLength(1);

      const notificationContainer = animationChildren[0] as HTMLElement;

      expect(notificationContainer.classList).toContain('is-page-notification-container');
      expect(notificationContainer.classList).toContain('is-info');
      expect(notificationContainer.classList).toContain('has-no-close');

      const notificationContainerChildren = stripCommentNodes(notificationContainer);

      expect(notificationContainerChildren).toHaveLength(2);

      const notificationIcon = notificationContainerChildren[0] as HTMLElement;
      const messageContainer = notificationContainerChildren[1] as HTMLElement;

      expect(notificationIcon.classList).toContain('fa-circle-info');
      expect(notificationIcon.classList).toContain('fa-2xl');

      expect(messageContainer.classList).toContain('block');
      expect(messageContainer.innerText).toBe(testMessage);
    }),
    test('check light mode',async() => {
      const testMessage = 'test message';

      const {container} = render(pageNotification, {
        props:{
            visible:true,
            is_light:true,
            message:testMessage
        }
      });
  
      const notificationElement = container.childNodes[0] as HTMLElement;

      expect(notificationElement.className).toBe('');

      const children = stripCommentNodes(notificationElement);

      expect(children).toHaveLength(1);

      const animationContainer = children[0] as HTMLElement;

      expect(animationContainer.getAttribute('enteractiveclass')).toContain('animate__fadeIn');
      expect(animationContainer.getAttribute('leaveactiveclass')).toContain('animate__fadeOut');

      const animationChildren = stripCommentNodes(animationContainer);

      expect(animationChildren).toHaveLength(1);

      const notificationContainer = animationChildren[0] as HTMLElement;

      expect(notificationContainer.classList).toContain('is-page-notification-container');
      expect(notificationContainer.classList).toContain('is-info');
      expect(notificationContainer.classList).toContain('is-light-mode');
      expect(notificationContainer.classList).toContain('has-no-close');
    }),
    test('check Notice types',async() => {
      const testMessage = 'test message';
      for (const key in NoticeTypes){
        const {container} = render(pageNotification, {
          props:{
              visible:true,
              message:testMessage,
              type:NoticeTypes[key]
          }
        });
    
        const notificationElement = container.childNodes[0] as HTMLElement;

        expect(notificationElement.className).toBe('');

        const children = stripCommentNodes(notificationElement);

        expect(children).toHaveLength(1);

        const animationContainer = children[0] as HTMLElement;

        expect(animationContainer.getAttribute('enteractiveclass')).toContain('animate__fadeIn');
        expect(animationContainer.getAttribute('leaveactiveclass')).toContain('animate__fadeOut');

        const animationChildren = stripCommentNodes(animationContainer);

        expect(animationChildren).toHaveLength(1);

        const notificationContainer = animationChildren[0] as HTMLElement;

        expect(notificationContainer.classList).toContain('is-page-notification-container');
        expect(notificationContainer.classList).toContain(`is-${NoticeTypes[key]}`);
        expect(notificationContainer.classList).toContain('has-no-close');

        const notificationContainerChildren = stripCommentNodes(notificationContainer);

        expect(notificationContainerChildren).toHaveLength(2);

        const notificationIcon = notificationContainerChildren[0] as HTMLElement;
        const messageContainer = notificationContainerChildren[1] as HTMLElement;

        expect(notificationIcon.classList).toContain('fa-2xl');
        switch(NoticeTypes[key]){
          case NoticeTypes.info:
                expect(notificationIcon.classList).toContain('fa-circle-info');
                break;
            case NoticeTypes.success:
                expect(notificationIcon.classList).toContain('fa-circle-check');
                break;
            case NoticeTypes.danger:
                expect(notificationIcon.classList).toContain('fa-bug');
                break;
            case NoticeTypes.warning:
                expect(notificationIcon.classList).toContain('fa-circle-exclamation');
                break;
        }

        expect(messageContainer.classList).toContain('block');
        expect(messageContainer.innerText).toBe(testMessage);
      }
    }),
    test('check close action',async() => {
      const testMessage = 'test message';
      let closed=false;

      const {container} = render(pageNotification, {
        props:{
            visible:true,
            message:testMessage,
            has_close:true,
            onClose:()=>{closed=true;}
        }
      });
  
      const notificationElement = container.childNodes[0] as HTMLElement;

      expect(notificationElement.className).toBe('');

      const children = stripCommentNodes(notificationElement);

      expect(children).toHaveLength(1);

      const animationContainer = children[0] as HTMLElement;

      expect(animationContainer.getAttribute('enteractiveclass')).toContain('animate__fadeIn');
      expect(animationContainer.getAttribute('leaveactiveclass')).toContain('animate__fadeOut');

      const animationChildren = stripCommentNodes(animationContainer);

      expect(animationChildren).toHaveLength(1);

      const notificationContainer = animationChildren[0] as HTMLElement;

      expect(notificationContainer.classList).toContain('is-page-notification-container');
      expect(notificationContainer.classList).toContain('is-info');

      const notificationContainerChildren = stripCommentNodes(notificationContainer);

      expect(notificationContainerChildren).toHaveLength(3);

      const notificationIcon = notificationContainerChildren[0] as HTMLElement;
      const messageContainer = notificationContainerChildren[1] as HTMLElement;
      const closeIcon = notificationContainerChildren[2] as HTMLElement;

      expect(notificationIcon.classList).toContain('fa-circle-info');
      expect(notificationIcon.classList).toContain('fa-2xl');

      expect(messageContainer.classList).toContain('block');
      expect(messageContainer.innerText).toBe(testMessage);

      expect(closeIcon.classList).toContain('fa-circle-xmark');
      expect(closeIcon.classList).toContain('fa-lg');

      await userEvent.click(closeIcon);

      expect(closed).toBe(true);
    })
});