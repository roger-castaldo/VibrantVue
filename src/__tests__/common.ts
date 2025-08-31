import axe from 'axe-core';
import {SkinTypes} from '../enums';

const AVAIABLE_SKINS:string[] = Object.values(SkinTypes)
    .filter((value,index,array) => array.indexOf(value)===index);

export const stripCommentNodes = function(element: HTMLElement): ChildNode[] {
    return Array.from(element.childNodes)
    .filter(n=>n.nodeType!==Node.COMMENT_NODE)
    .filter(n=>n.nodeType!==Node.TEXT_NODE || 
        (n.nodeType===Node.TEXT_NODE && n.nodeValue?.trim()!==''));
}

export const sleep = async function(ms:number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

const blockedSkins : string[] = ['morph','vapor'];

export const ExecuteAccessibilityChecks = async function(renderElement: ()=>HTMLElement|HTMLElement[], sleepMS?:number) : Promise<axe.AxeResults> {
    
    const container = document.createElement('div');

    for(let x=0;x<AVAIABLE_SKINS.length;x++){

        if (blockedSkins.indexOf(AVAIABLE_SKINS[x])<0){
        // Create the wrapper div
        const themeWrapper = document.createElement('div')
        themeWrapper.className = `theme-${AVAIABLE_SKINS[x]}`;

        const contentWrapper = document.createElement('div');
        contentWrapper.style.background = 'var(--bulma-scheme-main)';

        // Move the rendered component into the wrapper
        const element = renderElement();
        if (element instanceof HTMLElement){
            contentWrapper.append(FixAriaLabel(element as HTMLElement, AVAIABLE_SKINS[x]));
        }else{
            const elements = element as HTMLElement[];
            for(let y=0;y<elements.length;y++){
                contentWrapper.appendChild(FixAriaLabel(elements[y], AVAIABLE_SKINS[x]));
            }
        }

        themeWrapper.append(contentWrapper);
        container.append(themeWrapper);
    
        }
    }

    if (sleepMS!=undefined){
        await sleep(sleepMS);
    }

    document.body.append(container);

    const accessibilityScanResults =  await axe.run(container);

    document.body.removeChild(container);

    return accessibilityScanResults;
}

function FixAriaLabel(element: HTMLElement, skinName: string): HTMLElement {
    if (element.getAttribute("aria-label")!==null){
        element.setAttribute("aria-label",`${element.getAttribute("aria-label")}-${skinName}`);
    }
    for(let x=0;x<element.childNodes.length;x++){
        if (element.childNodes.item(x) instanceof HTMLElement){
            element.replaceChild(element.childNodes.item(x),FixAriaLabel(element.childNodes.item(x) as HTMLElement,skinName));
        }
    }
    return element;
}
