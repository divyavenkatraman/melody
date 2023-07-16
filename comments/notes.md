To access an HTML element, JavaScript can use the document.getElementById(id) method.
You can give an id to an HTML element by including id="name" in the properties


Make a python script run when a button is clicked in a chrome extension:
1) Create a JavaScript file (script.js) with a function that will handle the button click event and send a message to the background script (background.js) to execute the Python script.
2) create a listener in the background script
3) create a function in the background script that does what you want
2) update manifest.json to include content script and background script

Relay information from the python script back to the front end:
1) Add a function in background.js to capture the output from the python script and send it back to the content script 
2) Add the corresponding function property to executeScript function in the background.js