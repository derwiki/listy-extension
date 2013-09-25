function listener(id, info, tab) {
  if (tab.url.toLowerCase().indexOf("apartmentlist.com") !== -1) {
    chrome.pageAction.show(tab.id);
  }
}
chrome.tabs.onUpdated.addListener(listener);
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { "file": "ldp.js" });
});
