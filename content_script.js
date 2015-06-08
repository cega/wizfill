var wizfill_selector='input[type^="text"],input[type^="number"],input:not([type])'

function fill_form(lines, start) {
    $(wizfill_selector).slice(start).val(function( index, value ) {
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

$(wizfill_selector).css('backgroundColor', 'red');
$(wizfill_selector).attr('title', function(index) { return "wizfill field: " + (index); });
console.log("[wizfill] injection completed")
