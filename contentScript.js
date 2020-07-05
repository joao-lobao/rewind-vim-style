chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "loaded_tab") {
    const video = document.getElementsByTagName("video");
    document.addEventListener("keypress", function (event) {
      if (video && video[0] && event.key === "h") {
        video[0].currentTime -= 10;
      }
    });
  }
});
