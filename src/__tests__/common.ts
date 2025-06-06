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

export const ExecuteAccessibilityChecks = async function(renderElement: ()=>HTMLElement, sleepMS?:number) : Promise<axe.AxeResults> {
    
    const container = document.createElement('div');

    for(let x=0;x<AVAIABLE_SKINS.length;x++){
        // Create the wrapper div
        const wrapper = document.createElement('div')
        wrapper.className = `theme-${AVAIABLE_SKINS[x]}`;

        // Move the rendered component into the wrapper
        wrapper.appendChild(renderElement())

        container.append(wrapper);
    }

    document.body.append(container);

    if (sleepMS!=undefined){
        await sleep(sleepMS);
    }

    const accessibilityScanResults =  await axe.run(container);

    document.body.removeChild(container);

    return accessibilityScanResults;
}