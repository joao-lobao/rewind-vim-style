chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Send a message to the active tab
    if (changeInfo.status === "complete" && tab.active) {
      chrome.tabs.sendMessage(tabId, { message: "loaded_tab" });
    }
});
