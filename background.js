chrome.pageAction.onClicked.addListener(function() {
  runtime.sendMessage();
});
