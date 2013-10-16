Title: opera.extension.onmessage
----
Date: 2011-12-06 06:25:58
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Description:</h2>

<p>This event listener is invoked when a message is received from an injected script, popup or preferences page. The event&#39;s source is a <code>messagePort</code> to the connecting environment.</p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

opera.extension.onmessage = function(event) {
  // Get the message content from the event&#39;s data property
  var message = event.data;
};</code></pre>


