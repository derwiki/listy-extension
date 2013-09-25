// determine if button should be displayed
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if (tab.url.toLowerCase().indexOf("apartmentlist.com") !== -1) {
    chrome.pageAction.show(tab.id);
  }
});

// action after button click
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { "file": "ldp.js" });
});
