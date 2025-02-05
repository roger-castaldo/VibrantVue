import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import animation from '../../../components/common/animation.vue';
import { AnimationSpeeds,AnimationTypes } from '../../../enums';

describe('Animation', () => {
    test('check accessibility',async() => {
      const {container} = render(animation, {
        props:{
            incoming:AnimationTypes.bounceIn,
            outgoing:AnimationTypes.bounceOut
        },
        slots:{
            default: () => 'test animation content'
        }
      });
  
      const accessibilityScanResults =  await axe.run(container);
  
      expect(accessibilityScanResults.violations).toEqual([]);
    }),
    test('check content',async() => {
        const contentMessage = 'test animation content';

        const {container} = render(animation, {
          props:{
              incoming:AnimationTypes.bounceIn,
              outgoing:AnimationTypes.bounceOut
          },
          slots:{
              default: () => contentMessage
          }
        });
    
        expect(container.innerText).toBe(contentMessage);
    }),
    test('check enter animations',async() => {
        for (const key in AnimationTypes) {
            const { container } = render(animation, {
              props: {
                incoming:AnimationTypes[key]
              },
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.getAttribute('enteractiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('enteractiveclass')).toContain('animate__slow');
            expect(animationblock.getAttribute('enteractiveclass')).toContain(`animate__${AnimationTypes[key]}`);
        }
    }),
    test('check exit animations',async() => {
        for (const key in AnimationTypes) {
            const { container } = render(animation, {
              props: {
                outgoing:AnimationTypes[key]
              },
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.getAttribute('leaveactiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('leaveactiveclass')).toContain('animate__slow');
            expect(animationblock.getAttribute('leaveactiveclass')).toContain(`animate__${AnimationTypes[key]}`);
        }
    }),
    test('check inout animations',async() => {
        for (const key in AnimationTypes) {
            const { container } = render(animation, {
              props: {
                inout:AnimationTypes[key]
              },
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.getAttribute('leaveactiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('leaveactiveclass')).toContain('animate__slow');
            expect(animationblock.getAttribute('leaveactiveclass')).toContain(`animate__${AnimationTypes[key]}`);
            expect(animationblock.getAttribute('enteractiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('enteractiveclass')).toContain('animate__slow');
            expect(animationblock.getAttribute('enteractiveclass')).toContain(`animate__${AnimationTypes[key]}`);
        }
    }),
    test('check enter speeds',async() => {
        for (const key in AnimationSpeeds) {
            const { container } = render(animation, {
              props: {
                speedIn:AnimationSpeeds[key]
              },
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.getAttribute('enteractiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('enteractiveclass')).toContain(`animate__${AnimationSpeeds[key]}`);
        }
    }),
    test('check exit speeds',async() => {
        for (const key in AnimationSpeeds) {
            const { container } = render(animation, {
              props: {
                speedOut:AnimationSpeeds[key]
              },
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.getAttribute('leaveactiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('leaveactiveclass')).toContain(`animate__${AnimationSpeeds[key]}`);
        }
    }),
    test('check inout speeds',async() => {
        for (const key in AnimationSpeeds) {
            const { container } = render(animation, {
              props: {
                speed:AnimationSpeeds[key]
              },
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.getAttribute('enteractiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('enteractiveclass')).toContain(`animate__${AnimationSpeeds[key]}`);
            expect(animationblock.getAttribute('leaveactiveclass')).toContain('animate__animated');
            expect(animationblock.getAttribute('leaveactiveclass')).toContain(`animate__${AnimationSpeeds[key]}`);
        }
    }),
    test('check repeating animation types',async() => {
        const contentMessage = 'test animation content';

        for (const key in AnimationTypes) {
            const { container } = render(animation, {
              props: {
                repeating:AnimationTypes[key]
              },
              slots:{
                default:()=>contentMessage
              }
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.innerText).toBe(contentMessage);
            expect(animationblock.classList).toContain('animate__animated');
            expect(animationblock.classList).toContain('animate__infinite');
            expect(animationblock.classList).toContain('animate__slow');
            expect(animationblock.classList).toContain(`animate__${AnimationTypes[key]}`);
        }
    }),
    test('check repeating animation speeds',async() => {
        const contentMessage = 'test animation content';

        for (const key in AnimationSpeeds) {
            const { container } = render(animation, {
              props: {
                speed:AnimationSpeeds[key],
                repeating:AnimationTypes.bounce
              },
              slots:{
                default:()=>contentMessage
              }
            });
      
            const animationblock = container.childNodes[0] as HTMLElement;
            
            expect(animationblock.innerText).toBe(contentMessage);
            expect(animationblock.classList).toContain('animate__animated');
            expect(animationblock.classList).toContain('animate__infinite');
            expect(animationblock.classList).toContain(`animate__${AnimationSpeeds[key]}`);
            expect(animationblock.classList).toContain('animate__bounce');
        }
    })
});