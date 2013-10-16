Title: opera.extension.broadcastMessage()
----
Date: 2011-12-06 06:29:21
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

<p>This method is used to broadcast data from the background process to all connected environments associated with the extension, such as the preferences page, popup window and injected scripts.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>data</code>: Data to be broadcasted.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void broadcastMessage (&lt;DOMString&gt; data)</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

// Broadcast a message to all extension environments (i.e. injected scripts, the popup window etc). 
if (url === &#39;http://www.opera.com/&#39;) {
  opera.extension.broadcastMessage(&#39;rejoice&#39;);	
}
	
//
// An extension environment (e.g. &#39;/popup.js&#39;)
//

// Receive the message using the onmessage handler
opera.extension.onmessage = function(event) {
  var message = event.data;
  if (message === &#39;rejoice&#39;) {
    initConfettiSequence();
  }
};</code></pre>


