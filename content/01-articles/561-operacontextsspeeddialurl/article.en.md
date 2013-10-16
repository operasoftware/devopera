Title: opera.contexts.speeddial.url
----
Date: 2011-12-06 06:02:49
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

<p>Represents the target URL of the Speed Dial cell when clicked or otherwise activated. This can be either an external page or a local file within the extension. If not specified, the default value is the feature request&#39;s <code>param</code> element whose <code>name</code> attribute is <code>url</code> (specified in the extension&#39;s <code>config.xml</code> file).</p>

<h2>Example:</h2>

<pre><code>//
// The background process (&#39;/background.js&#39;).
//

// First check the opera.contexts.speeddial object is available
if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial;
  
  // Set the Speed Dial target to a local file
  sd.url = &quot;about.html&quot;;
}</code></pre>

