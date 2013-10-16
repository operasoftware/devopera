Title: opera.extension.postMessage()
----
Date: 2011-12-06 06:15:16
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

<p>This method is used to post a message to the <code>BackgroundProcess</code> of the extension.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>data</code>: Data to be posted.</li>
    <li><code>ports</code>: An array of ports to be passed along to the <code>BackgroundProcess</code> (optional).</li>
</ul>

<h2>Syntax:</h2>

<p><code>void postMessage (&lt;object&gt; data, &lt;array&gt; ports)</code></p>

<h2>Example:</h2>

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
  badge: {}
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(UIItemProperties);
opera.contexts.toolbar.addItem(button);

// Check for incoming messages
opera.extension.onmessage = function(event) {
  button.badge.textContent = event.data;
};</code></pre>

<pre><code>//
// The popup script (e.g. &#39;/popup.js&#39;). 
//

// Set an integer and send it to the background process
var num = 42;
opera.extension.postMessage(num);
document.write(&#39;Message sent: &#39; + num);</code></pre>

void postMessage (
