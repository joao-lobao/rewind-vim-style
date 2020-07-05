// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    const video = document.getElementsByTagName("video");
    document.addEventListener("keypress", function (event) {
      if (video && video[0] && event.key === "h") {
        video[0].currentTime -= 5;
      }
    });

    // var firstHref = $("a[href^='http']").eq(0).attr("href");
    // console.log(firstHref);
  }
});
