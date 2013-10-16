Title: opera.contexts.menu.removeItem() and MenuItem.removeItem()
----
Date: 2012-08-24 02:40:21
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

<p>This method removes a given <code>MenuItem</code> from the browser&#39;s context menu or a menu item.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>index</code>: The <code>index</code>th element in a MenuItem collection to be removed.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void removeItem (long index)</code></p>

<h2>Example:</h2>

<pre><code>&lt;!-- 
  The configuration file (&#39;config.xml&#39;).
--&gt;
&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
    ...
    &lt;feature name=&quot;opera:contextmenus&quot;/&gt;
    ...
&lt;/widget&gt;</code></pre>    

<pre><code>//
// The background process (e.g. index.html)
//

// Check the Context Menu API is supported
if (opera.contexts.menu) {
  var menu = opera.contexts.menu;
  // Create a menu item properties object
  var itemProps = {
    title: &#39;Context Menu Example&#39;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
  
  // Add a click event listener that removes the item from the context menu
  menu.onclick = function() {
    menu.removeItem(0);
  };  
}</code></pre>
