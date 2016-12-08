var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false)
while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue
      .replace(/he/g, 'it')
      .replace(/He/g, 'It')
      .replace(/she/g, 'it')
      .replace(/She/g, 'It')
      .replace(/him/g, 'they')
      .replace(/Him/g, 'They')
      .replace(/her/g, 'they')
      .replace(/Her/g, 'They')
}
