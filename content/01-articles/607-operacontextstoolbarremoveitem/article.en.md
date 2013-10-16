Title: opera.contexts.toolbar.removeItem()
----
Date: 2011-12-06 07:27:21
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

<p>This method removes a given <code>Button</code> from the toolbar in the browser.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>item</code>: The <code>Button</code> to be removed.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void removeItem (&lt;Button&gt; item)</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (e.g. index.html)
//

// Create a button
var button = opera.contexts.toolbar.createItem({
  title: &#39;Weather Extension&#39;,
  icon: &#39;yr.png&#39;
});

// Add it to the browser toolbar
opera.contexts.toolbar.addItem( button );

// Remove the button for a few seconds when someone clicks it
button.addEventListener(&#39;click&#39;, handleClick, false);
function handleClick() {
  // Remove the button
  opera.contexts.toolbar.removeItem(button);

  // but add it back after a short while
  setTimeout(function() {	
    opera.contexts.toolbar.addItem(button);			
  }, 500);
}</code></pre>


