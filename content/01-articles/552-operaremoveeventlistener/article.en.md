Title: opera.removeEventListener()
----
Date: 2011-12-06 05:42:26
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

<p>Removes an existing listener from an event.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>type</code>: The type of event. See addEventListener for the list of possible event types.</li>
        <li><code>listener </code>: The object that the listener was attached to.</li>
        <li><code>useCapture</code>: Which phase the listener was assigned to.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void removeEventListener (&lt;DOMString&gt; type, &lt;EventListener&gt; listener, UseCapture)</code></p>

<h2>Example:</h2>

<pre><code>var myFunc = function(userJSEvent) {
  userJSEvent.element.text = userJSEvent.element.text.replace(/function\s+window\.onload\(/g, &#39;window.onload = function(&#39;);
};
opera.removeEventListener(&#39;BeforeScript&#39;, myFunc, false);</code></pre>


