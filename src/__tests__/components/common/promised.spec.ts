import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import promised from '../../../components/common/Promised.vue';
import { sleep, stripCommentNodes } from '../../common';

describe('Promised', () => {
    test('check defaults',async() => {
        let resolveFunc: (value: string) => void;
        let rejectFunc: (reason?: any) => void;
        const resolveMessage = 'This is a test';
        
        const mockPromise = new Promise<string>((resolve, reject) => {
            resolveFunc = resolve;
            rejectFunc = reject;
        });

        const {container} = render(promised, {
          props:{
            promise: mockPromise
          },
          slots:{
            default:({response})=>{
                return response;
            }
          }
        });
    
        await sleep(200);

        const content = stripCommentNodes(container);

        expect(content).toHaveLength(1);

        const pending = content[0] as HTMLElement;

        expect(pending.nodeName).toBe('PROGRESS');

        resolveFunc!(resolveMessage);

        await sleep(200);

        expect(container.innerText).toBe(resolveMessage);
    }),
    test('check custom pending',async() => {
        let resolveFunc: (value: string) => void;
        let rejectFunc: (reason?: any) => void;
        const resolveMessage = 'This is a test';
        const pendingMessage = 'This is pending';
        
        const mockPromise = new Promise<string>((resolve, reject) => {
            resolveFunc = resolve;
            rejectFunc = reject;
        });

        const {container} = render(promised, {
          props:{
            promise: mockPromise
          },
          slots:{
            default:({response})=>{
                return response;
            },
            pending:()=>{return pendingMessage;}
          }
        });
    
        await sleep(200);

        expect(container.innerText).toBe(pendingMessage);

        resolveFunc!(resolveMessage);

        await sleep(200);

        expect(container.innerText).toBe(resolveMessage);
    }),
    test('check error',async() => {
        let resolveFunc: (value: string) => void;
        let rejectFunc: (reason?: any) => void;
        const errorMessage = 'This is a test';
        
        const {container} = render(promised, {
          props:{
            promise: new Promise<string>((resolve, reject) => {
                resolveFunc = resolve;
                rejectFunc = reject;
            })
          }
        });
    
        await sleep(200);

        const content = stripCommentNodes(container);

        expect(content).toHaveLength(1);

        const pending = content[0] as HTMLElement;

        expect(pending.nodeName).toBe('PROGRESS');

        rejectFunc!(errorMessage);

        await sleep(200);

        const noticeContent = stripCommentNodes(container);

        expect(noticeContent).toHaveLength(1);

        const notice = noticeContent[0] as HTMLElement;

        expect(notice.classList).toContain('notification');
        expect(notice.innerText).toBe(`Error: ${errorMessage}`);

    })
});