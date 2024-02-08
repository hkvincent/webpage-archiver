console.log('getElementById.');
document.getElementById('savePage').addEventListener('click', function () {
  console.log('Page saved for offline use.');
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    fetch(activeTab.url)
      .then(response => response.text())
      .then(content => {
        // Similar saving logic as above
        console.log('Page saved for offline use.', content);
      });
  });
});