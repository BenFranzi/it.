//based off the Drumpf chrome Extension
//https://chrome.google.com/webstore/detail/drumpfinator/hcimhbfpiofdihhdnofbdlhjcmjopilp

walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 1000);

function walk(node)
{
	var child, next;
	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bhe\b/g, 'it')
  v = v.replace(/\bHe\b/g, 'It')
  v = v.replace(/\bshe\b/g, 'it')
  v = v.replace(/\bShe\b/g, 'It')
  v = v.replace(/\bhim\b/g, 'them')
  v = v.replace(/\bHim\b/g, 'Them')
  v = v.replace(/\bher\b/g, 'them')
  v = v.replace(/\bHer\b/g, 'Them')
  v = v.replace(/\bhis\b/g, 'their')
  v = v.replace(/\bHis\b/g, 'Their')
  v = v.replace(/\bhers\b/g, 'their')
  v = v.replace(/\bHers\b/g, 'Their')
  v = v.replace(/\bmale\b/g, 'it')
  v = v.replace(/\bMale\b/g, 'It')
  v = v.replace(/\bfemale\b/g, 'It')
  v = v.replace(/\bFemale\b/g, 'It')

	textNode.nodeValue = v;
}
