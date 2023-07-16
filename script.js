function sendMessageToBackground() {
  chrome.runtime.sendMessage({ action: 'executeScript' });
}

// Add a click event listener to the button
document.getElementById('play').addEventListener('click', sendMessageToBackground);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'pythonOutput') {
    handlePythonOutput(request);
  }
});

// Function to handle the Python script output
function handlePythonOutput(message) {
  // Update the HTML with the output
  const outputElement = document.getElementById('output');
  outputElement.textContent = message.output;
}
