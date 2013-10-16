Title: opera.contexts.speeddial.title
----
Date: 2011-12-06 06:01:45
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

<p>Represents the human-readable title given to a Speed Dial cell. If not specified, the default value is the extension&#39;s name (specified in the <code>config.xml</code>&#39;s <code>name</code> element).</p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;).
//

// First check the opera.contexts.speeddial object is available
if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial;
  
  // Set the Speed Dial&#39;s visible title
  sd.title = &quot;Opera&quot;;
}</code></pre>

