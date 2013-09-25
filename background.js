function listener(id, info, tab) {
  if (tab.url.toLowerCase().indexOf("apartmentlist.com") === -1) {
    console.log('not here');
  } else {
    console.log('invoking pageAction');
    chrome.pageAction.show(tab.id);
    chrome.tabs.sendMessage();
  }
}

chrome.tabs.onUpdated.addListener(listener);
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.pageAction.show(tab.id);
});
