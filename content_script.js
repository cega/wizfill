function fill_form(lines, start) {
    $( "input" ).slice(start).val(function( index, value ) {
        if (index<lines.length) {
            return lines[index];
        } else {
            return value;
        }
    }); 
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    fill_form(request.lines, request.start);
  }
);

// chrome.runtime.onConnect.addListener(function(port) {
//   var tab = port.sender.tab;
//   console.log("connected: " + port)

//   // This will get called by the content script we execute in
//   // the tab as a result of the user pressing the browser action.
//   port.onMessage.addListener(function(info) {
//     console.log("received message: " + info)
//   });
// });

console.log("injection")
