Title: opera.extension.addEventListener()
----
Date: 2011-12-06 06:16:06
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

<p>Registers a listener for an event specific to the popup window. The listener needs to use the standard <code>EventListener</code> interface - a function with an <code>Event</code> object as its first argument (e.g., <code>var myListener = function(event){alert(event.type)}</code>.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>type</code>: The type of event to listen to.</li>
    <li><code>listener</code>: The function that will be called</li>
    <li><code>useCapture</code>: If true, the event listener is only added for the capture phase and target</li>
</ul>

<h2>Syntax:</h2>

<p><code>void addEventListener (&lt;DOMString&gt; type, &lt;EventListener&gt; listener, UseCapture)</code></p>

<h2>Example:</h2>

<p>Listen for an incoming message from the background process. The source event is a <code>messagePort</code> to the connecting environment.</p>

<pre><code>//
// The background process (e.g. &#39;/background.js&#39;). 
//

// Set options for the button
var UIItemProperties = {
  disabled: false,
  title: &#39;Opera Extension&#39;,
  icon: &#39;images/icon_18.png&#39;,
  popup: {
    href: &#39;popup.html&#39;,
    width: 500,
    height: 400
  },
  onclick: function() {
    opera.extension.broadcastMessage();
  }
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(UIItemProperties);
opera.contexts.toolbar.addItem(button);
</code></pre>

<pre><code>//
// The popup script (e.g. &#39;/popup.js&#39;). 
//

// Note the &quot;on&quot; is removed from &quot;onmessage&quot; here
opera.extension.addEventListener(&#39;message&#39;, function(event) {
  document.write(&#39;Message received: &#39; + event.data);
}, false);</code></pre>

<p>Note that this event listener can also be written using <code>onmessage</code>, as below.</p>

<pre><code>// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(UIItemProperties);
opera.contexts.toolbar.addItem(button);

//
// The popup script (e.g. &#39;/popup.js&#39;). 
//

opera.extension.onmessage = function(event) {
  document.write(&#39;Message received: &#39; + event.data); 
};</code></pre>

h2
