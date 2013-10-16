Title: opera.extension.removeEventListener()
----
Date: 2011-12-06 06:28:25
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

<p>This method removes a listener from receiving an event.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>type</code>: This is the type of event; allowed values are: <code>&#39;message&#39;</code>, <code>&#39;disconnect&#39;</code>, and <code>&#39;connect&#39;</code>.</li>
    <li><code>eventListener</code>: This is the function to be removed.</li>
    <li><code>useCapture</code>: This is boolean, keep <code>false</code> for now; <i>note, this value currently has no purpose</i>.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void removeEventListener (&lt;DOMString&gt; type, eventListerner, &lt;boolean&gt; useCapture)</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

// Add event listener for the &#39;message&#39; event
opera.extension.addEventListener(&#39;message&#39;, function(event) {
  var message = event.data;
}, false);

// Remove the event listener
opera.extension.removeEventListener(&#39;message&#39;, function() {}, false);</code></pre>


