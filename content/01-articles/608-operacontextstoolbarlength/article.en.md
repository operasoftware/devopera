Title: opera.contexts.toolbar.length
----
Date: 2011-12-06 07:28:36
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

<h2>Description</h2>

<p>This attribute contains the number of UI items held by the <code>ToolbarContext</code>. <strong>Note:</strong> The <code>ToolbarContext</code> is currently restricted to a maximum of <i>one</i> UI item, so this will be either 1 or 0.</p>

<h2>Example:</h2>

<p>This attribute is useful for checking whether a button is being displayed in the toolbar or not.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Is there a button in the toolbar?
if (opera.contexts.toolbar.length) {
  var buttonExists = true;
} else {
  var buttonExists = false;
}</code></pre>


