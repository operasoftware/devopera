Title: Messaging API
----
Date: 2011-12-06 06:21:00
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

<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-messaging-bgProcess">opera.extension.bgProcess</a></dt>
   <dd>A reference to the <code>window</code> object of the background process.</dd>
   
   <dt><a href="/articles/view/extensions-api-messaging-onconnect">opera.extension.onconnect</a></dt>
   <dd>An event listener invoked when an injected script, popup, or options environment is created that enables communication.</dd>
   
   <dt><a href="/articles/view/extensions-api-messaging-ondisconnect">opera.extension.ondisconnect</a></dt>
   <dd>An event listener invoked when an injected script, popup or options environment is destroyed and communication is disabled.</dd>
   
   <dt><a href="/articles/view/extensions-api-messaging-onmessage">opera.extension.onmessage</a></dt>
   <dd>An event listener invoked when a message is received from an injected script, popup or preference page.</dd>
   
   <dt><a href="/articles/view/extensions-api-messaging-addEventListener">opera.extension.addEventListener()</a></dt>
   <dd>A method for listening for events being dispatched.</dd>
   
   <dt><a href="/articles/view/extensions-api-messaging-removeEventListener">opera.extension.removeEventListener()</a></dt>
   <dd>A method that removes a listener from receiving an event.</dd>
   
   <dt><a href="/articles/view/extensions-api-messaging-broadcastMessage">opera.extension.broadcastMessage()</a></dt>
   <dd>A method used to broadcast data to all connected injected script and popup environments associated with the extension.</dd>
</dl>

<h2>Overview</h2>

<p>Communicating between different parts of an extension is done by using either the background process or the messaging API.</p>

<p>The background script and <a href="#none">injected scripts</a> are isolated from each other and must therefore use the messaging API to communicate. For more information read our article on <a href="http://dev.opera.com/articles/view/opera-extensions-messaging/">Opera extensions: messaging</a></p>

<p>Other parts of an extension, e.g. <a href="#none">popup windows</a> and preference pages, can also access the background script by using the messaging API but it&#39;s much easier to use the <code>bgProcess</code> object&#x2014;a common object that refers to the background script&#39;s <code>window</code> object.</p>

<p>The background process, as the name suggests, is a process constantly running in the background for the lifetime of an extension. It is responsible for browser UI elements (for example the <a href="#none">toolbar button</a> and <a href="#none">popup windows</a>) and browser actions (opening and closing a tab, etc.).</p>

<h2>Examples</h2>
    
<p>The two code snippets below send a message, in this case a URL, between an injected script and the background process</p>

<pre><code>//
// The injected script (&#39;/includes/injectedScript.js&#39;)
//

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {    	
  // send message to background script telling it what URL we are visiting
  opera.extension.postMessage(document.URL);
}, false);</code></pre>

<p>The injected script (above) sends its message using <code>opera.extension.postMessage(message)</code> which is received by the background process using the event handler <code>opera.extension.onmessage</code></p>
    
<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

// Listen for injected script messages (i.e. for image tags)
opera.extension.onmessage = function(event) {
  // got the URL from the injected script
  url = event.data;	
};</code></pre>
	    

