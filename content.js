// This script runs in the context of web pages.
const pageContent = document.documentElement.innerHTML; // or other DOM operations

// Send the content to the background script
chrome.runtime.sendMessage({ content: pageContent });
