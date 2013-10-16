Title: opera.contexts.toolbar.addItem()
----
Date: 2011-12-06 07:30:15
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

<p>This method adds a <code>Button</code> to the toolbar in the browser. To create a <code>Button</code> see the <a href="/articles/view/extensions-api-toolbar-createItem"><code>createItem</code> method</a>.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>item</code>: The <code>Button</code> to be added.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void addItem (&lt;Button&gt; item)</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (e.g. index.html)
//

// Create a button
var button = opera.contexts.toolbar.createItem({
  title: &#39;Weather Extension&#39;,
  icon: &#39;yr.png&#39;
});

// Add it to the browser UI
opera.contexts.toolbar.addItem(button);</code></pre>


