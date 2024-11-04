export const stripCommentNodes = function(element: HTMLElement): ChildNode[] {
    return Array.from(element.childNodes)
    .filter(n=>n.nodeType!==Node.COMMENT_NODE)
    .filter(n=>n.nodeType!==Node.TEXT_NODE || 
        (n.nodeType===Node.TEXT_NODE && n.nodeValue?.trim()!==''));
}