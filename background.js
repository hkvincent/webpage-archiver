chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
  console.log("chrome.bookmarks.onCreated.addListener")
  // Check if the bookmark is a webpage
  if (bookmark.url) {
    chrome.windows.getCurrent(w => {
      // Use the chrome.tabs API to get the details of the current tab
      chrome.tabs.query({ active: true, windowId: w.id }, function (tabs) {
        console.log(tabs); // Check what's being returned here.
        let activeTab = tabs[0];
        if (!activeTab) {
          console.error('No active tab found');
          return;
        }
        if (activeTab.url === bookmark.url) {
          // Use fetch API or XMLHttpRequest to get the page content
          fetch(activeTab.url)
            .then(response => response.text())
            .then(content => {
              // Save the content to Chrome's local storage or to a file
              // You might need to handle file permissions and storage.
              chrome.storage.local.set({ [bookmark.url]: content }, function () {
                console.log('Page saved for offline use.');
              });
            });
        }
      });
    });


  }
});