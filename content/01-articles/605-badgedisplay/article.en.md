Title: Badge.display
----
Date: 2011-12-06 07:23:57
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

<p>Determines whether the badge should be displayed; allowed values: <code>&quot;block&quot;</code> and <code>&quot;none&quot;</code>; it is set to <code>&quot;none&quot;</code> by default.</p>

<h2>Example:</h2>

<pre><code>//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Test Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
  badge: {
    backgroundColor: &#39;#CC5555&#39;,
    color: &#39;white&#39;,
    textContent: &#39;!&#39;,
    display: &#39;none&#39;
  }
};	

// Add the button to the browser UI
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Listen for injected script messages
opera.extension.onmessage = function(event) {
  // Show the badge if we get a warning from the injected script
  if (event.data === &#39;warning&#39;) {
    button.badge.display = &#39;block&#39;;
  } else {
    button.badge.display = &#39;none&#39;;
  }
}</code></pre>


