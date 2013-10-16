Title: opera.contexts.menu.addItem() and MenuItem.addItem()
----
Date: 2012-08-24 02:36:31
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

<p>This method adds a <code>MenuItem</code> to the context menu or a context menu item. The optional <code>before</code> parameter can be specified to indicate where in the menu the item should be added. To create a <code>MenuItem</code> see the <a href="/articles/view/extensions-api-contextmenu-createItem"><code>createItem()</code> method</a>.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>item</code>: The <code>MenuItem</code> to be added.</li>
    <li><code>before (optional)</code>: The item before which the new <code>MenuItem</code> should be added.</li>
</ul>

<h2>Syntax:</h2>

<p><code>void addItem (&lt;MenuItem&gt; item, optional &lt;MenuItem&gt; before)</code></p>
<p><code>void addItem (&lt;MenuItem&gt; item, optional long before)</code></p>

<h2>Example:</h2>

<p>The example below creates and adds an item to the context menu. When it&#39;s clicked, the current page&#39;s URL is shown in the console.</p>

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
    title: &#39;Context Menu Example&#39;,
    onclick: function(event) {
      console.log(&#39;Menu item clicked on &#39; + event.pageURL);
    }
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
