Title: opera.extension.addEventListener()
----
Date: 2011-12-06 06:27:08
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

<p>This method is used to listen for events being dispatched. For <code>opera.extension</code>, this inlcudes <code>&#39;connect&#39;</code>, <code>&#39;message&#39;</code>, and <code>&#39;disconnect&#39;</code>.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>type</code>: Type of event; allowed values are: <code>&quot;message&quot;</code>, <code>&quot;disconnect&quot;</code>, and <code>&quot;connect&quot;</code>.</li>
    <li><code>eventListener</code>: The function to be executed when the event occurs.</li>
    <li><code>useCapture</code>: Boolean, keep false for now; <i>note: this value currently has no purpose</i>.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void addEventListener (&lt;DOMString&gt; type, eventListerner, &lt;boolean&gt; useCapture)</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

// Listen for a new environment being created (like the popup window) 
opera.extension.addEventListener(&#39;connect&#39;, function(event) {
  var connected = true;
}, false);

// Listen for messages being sent
opera.extension.addEventListener(&#39;message&#39;, function(event) {
  var message = event.data;
}, false);

// Listen for environments being destroyed (and communication disabled)
opera.extension.addEventListener(&#39;disconnect&#39;, function(event) {
  var connected = false;
}, false);</code></pre>


