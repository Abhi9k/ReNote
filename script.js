function setHtml() {
	var backgroundData = chrome.runtime.getBackgroundPage(function(bg) {
		document.getElementById('data').textContent = bg.selectedText;
	});
}

document.addEventListener('DOMContentLoaded', setHtml);