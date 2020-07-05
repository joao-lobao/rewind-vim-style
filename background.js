// chrome.runtime.onInstalled.addListener(function () {
//   console.log("sfsadfkljsadf");
//   const body = document.getElementsByTagName("body");
//   console.log(body);
//   body.onclick = function (element) {
//     const video = document.getElementsByTagName("video");
//     if (video && video[0]) {
//       video[0].currentTime -= 5;
//     }
//   };
//   body.onclick = function (element) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.executeScript(tabs[0].id, {
//         code:
//           'console.log("The color is green.");document.getElementsByTagName("video")[0].currentTime -= 5;',
//       });
//     });
//   };
// });

// background.js

// Called when the user clicks on the browser action.
// chrome.runtime.onStartup.addListener(function (tab) {
//   console.log("QWERTY");
//   // Send a message to the active tab
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {
//       message: "clicked_browser_action",
//     });
//   });
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Send a message to the active tab
    if (changeInfo.status === "complete" && tab.active) {
      chrome.tabs.sendMessage(tabId, { message: "clicked_browser_action" });
    }
});
