// This script runs in the context of the extension.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.content) {
    // Now you have the content, you can store it
    chrome.storage.local.set({ 'savedContent': request.content }, function () {
      console.log('Content saved.');
    });
  }
});
