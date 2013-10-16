Title: MenuItem.parent
----
Date: 2012-08-24 03:20:38
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

<p>The read-only <code>parent</code> attribute is the parent object on which the current context menu item resides. By default, and on object creation, this attribute is set to <code>null</code>.</p>

<h2>Syntax:</h2>

<p><code>readonly MenuContext parent</code></p>

<h2>Example:</h2>

<p>The following example creates a main menu item and two sub-menu items. The sub-menu items refer to the <code>parent</code> object to set their icons.</p>

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
    icon: &#39;images/translate.png&#39;,
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
  // Add the sub-menu items to the main menu item, with the same icon
  item.addItem(itemEnglish);
  item.addItem(itemJapanese);
  itemEnglish.icon = itemEnglish.parent.icon;
  itemJapanese.icon = itemJapanese.parent.icon;
}</code></pre>
