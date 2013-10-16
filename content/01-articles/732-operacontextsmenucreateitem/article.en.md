Title: opera.contexts.menu.createItem()
----
Date: 2012-08-24 02:27:57
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

<p>This method creates a <code>MenuItem</code> from a given property object. <strong>Note:</strong> The item can only be used within the <code>MenuContext</code> that it is created in.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>properties</code>: The <code>MenuItemProperties</code> to use when creating the <code>MenuItem</code>.</li>
</ul>

<p>The available properties include:</p>

<ul>
    <li><a href="/articles/view/extensions-api-contextmenu-contexts">contexts</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-disabled">disabled</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-documentURLPatterns">documentURLPatterns</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-icon">icon</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-id">id</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-onclick">onclick</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-targetURLPatterns">targetURLPatterns</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-title">title</a></li>
    <li><a href="/articles/view/extensions-api-contextmenu-type">type</a></li>
</ul>

<h2>Syntax:</h2>

<p><code>MenuItem createItem (&lt;MenuItemProperties&gt; properties)</code></p>

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
