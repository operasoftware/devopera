Title: opera.extension.ondisconnect
----
Date: 2011-12-06 06:24:54
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

<p>This event listener is invoked when an injected script, popup or preferences environment is destroyed and communication is disabled. The event&#39;s source is a <code>messagePort</code> to the disconnecting environment, used only for comparative purposes. The port itself may be closed. The following function will execute when a preferences page is opened, for example.</p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

opera.extension.ondisconnect = function(event)  {
  var connected = false;
};</code></pre>


