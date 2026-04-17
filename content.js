// content.js
const script = document.createElement('script');
script.src = chrome.runtime.getURL('inject.js');

// Append to the document to execute the script in the main world
(document.head || document.documentElement).appendChild(script);

// Clean up the tag after execution to keep the DOM tidy
script.onload = function() {
    script.remove();
};