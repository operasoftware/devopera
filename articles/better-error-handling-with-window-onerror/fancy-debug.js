var fancyerror = function(message, url, linenumber) {
  var errorbox = document.createElement("div");
  errorbox.className = 'fancyerror';
  errorbox.innerHTML = '<div class="errmsg">' + message.replace('<', '&lt;').replace('>', '&gt;') + '</div><br>Line number: ' + linenumber + '<br>Located at: ' + url;
  document.body.appendChild(errorbox);
  return false;
}

window.onerror = function(message, url, linenumber) {
  return fancyerror(message, url, linenumber);
}