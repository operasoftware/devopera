Title: opera.extension.onmessage
----
Date: 2011-12-06 06:13:56
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

<p>This event is fired when a message is received from the <code>BackgroundProcess</code>. The source is a <code>messagePort</code> to the connecting environment.</p>

<h2>Example:</h2>

<pre><code>// Both the following are valid ways of using onmessage
opera.extension.onmessage = function(event) {
  opera.postError(&#39;Message received: &#39; + event.data); 
};

// Note the &quot;on&quot; is removed from &quot;onmessage&quot; here
opera.extension.addEventListener(&#39;message&#39;, function(event) {
  opera.postError(&#39;Message received: &#39; + event.data); 
}, false);</code></pre>


