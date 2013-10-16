Title: MenuItem.type
----
Date: 2012-08-24 03:26:27
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

<p>The <code>type</code> attribute is used to define the type of a menu item. The list of valid <code>type</code> values includes <strong><code>entry</code></strong>, <strong><code>folder</code></strong> and <strong><code>line</code></strong>. This attribute defaults to a value of <code>entry</code>.</p>

<h2>Syntax:</h2>

<p><code>DOMString type</code></p>

<h2>Example:</h2>

<p>The following example creates an item with type <code>folder</code>in the context menu. This is not clickable &#x2014; instead, sub-menu items will appear when hovered over or otherwise activated. These sub-menu items have the default type which is <code>entry</code>, and so they are clickable.</p>

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

if (opera.contexts.menu) {
  var menu = opera.contexts.menu;
  
  // Create menu item properties objects
  var itemProps = {
    title: &#39;Translate this page&#39;,
    type: &#39;folder&#39;
  }
  var itemPropsEnglish = {
    title: &#39;English&#39;,
    onclick: function(event) {
      doTranslate(event.pageURL, &#39;English&#39;);
    }
  };
  var itemPropsJapanese = {
    title: &#39;Japanese&#39;,
    onclick: function(event) {
      doTranslate(event.pageURL, &#39;Japanese&#39;);
    }
  };

  // Create menu items with the specified properties
  var item = menu.createItem(itemProps);
  var itemEnglish = menu.createItem(itemPropsEnglish);
  var itemJapanese = menu.createItem(itemPropsJapanese);
  
  // Add the menu item to the context menu
  menu.addItem(item);
  // Add the sub-menu items to the main menu item
  item.addItem(itemEnglish);
  item.addItem(itemJapanese);
}</code></pre>
