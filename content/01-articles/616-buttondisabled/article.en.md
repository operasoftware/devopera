Title: Button.disabled
----
Date: 2011-12-06 07:38:54
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

<p>This property indicates if the <code>Button</code> is disabled. By default, it is set to <code>false</code> (meaning the button is enabled).</p>

<h2>Example:</h2>

<p>Create a button that gets disabled for a short while when clicked.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Create a button
var button = opera.contexts.toolbar.createItem({
  title: &#39;My Extension&#39;,
  icon: &#39;icon.18x18.png&#39;,
  onclick: disableButton // disable when clicked
});

// Add it to the browser UI
opera.contexts.toolbar.addItem(button);

function disableButton() {
  // Disable the button
  button.disabled = true;
  setTimeout(function() {
    button.disabled = false;
  }, 500); // re-enable after timeout
}</code></pre>

