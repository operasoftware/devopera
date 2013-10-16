Title: opera.extension.onconnect
----
Date: 2011-12-06 06:23:37
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

<p>This event listener is invoked when an injected script, popup, or preferences environment is created that enables communication. The event&#39;s source (<code>event.source</code>) is a <code>messagePort</code> to the connecting environment. The following function will execute when a preferences page is opened, for example.</p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

opera.extension.onconnect = function(event)  {
  var connected = true;
};</code></pre>

/p
