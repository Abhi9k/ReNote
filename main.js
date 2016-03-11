var selectedText = 'dummy text';

function searchGoogle(info) {
	var query = info.selectionText;
	selectedText = info.selectionText;
	chrome.windows.create({
		url:'index.html',
		width:400,
		height:400
	});
}
function setupContextMenus(){
	chrome.contextMenus.create({
		title: "NoteIt",
		contexts: ["selection"]
	});	
}

chrome.runtime.onInstalled.addListener(function() {
	setupContextMenus();
});

chrome.contextMenus.onClicked.addListener(searchGoogle);