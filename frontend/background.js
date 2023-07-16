/* When the button with the id "play" is clicked, the sendMessageToBackground function in the content script will send a message to the background script. 
The background script will then execute the Python script using the chrome.scripting.executeScript method.*/

// Function to execute the Python script
function executePythonScript() {
  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    files: ['play.py'],
    function: handlePythonScriptOutput
  });
  console.log("background script working")
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'executeScript') {
    executePythonScript();
  }
});

// Function to handle the output from the Python script
function handlePythonScriptOutput(results) {
  // Extract the output from the results
  const output = results[0].result;

  // Send the output to the content script
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'pythonOutput', output });
  });
}