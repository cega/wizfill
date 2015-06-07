
function call() {
  var lines = $('#form_data').val().split('\n');
  var start = $('#start').val();
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {lines: lines, start:start}, function(response) {});  
  });
}

function inject() {
        //var lines = $('#form_data').val().split('\n');
  chrome.tabs.executeScript(null, {file: "content_script.js", allFrames: false});
  console.log("[wizfill] code injected");
  //console.log( "Handler for .click() called. value=" + $('#ew_data').val());
    
}

document.addEventListener('DOMContentLoaded', function() {
  inject();
  var checkPageButton = document.getElementById('submit_data');
  checkPageButton.addEventListener('click', function() {
    call();
    console.log("[wizfill] button clicked");
  }, false);
}, false);
