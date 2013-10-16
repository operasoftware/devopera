Title: MenuEvent.target
----
Date: 2012-08-24 09:32:22
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

<p>The <code>target</code> attribute is a <code>MenuItemProxy</code> object created from the <code>MenuItem</code> object on which the current event was fired. This can be used to access a menu item&#39;s attributes, such as <code>id</code>, <code>title</code>, etc.</p>

<h2>Syntax:</h2>

<p><code>readonly MenuItemProxy target</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for editable elements only. When the menu item is clicked, the menu item&#39;s ID (an email address) is then inserted into the editable element.</p>

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
// The background process (e.g. &#39;/background.js&#39;). 
//

if (opera.contexts.menu) {
  var menu = opera.contexts.menu;
  
  // Create a menu item properties object
  var itemProps = {
    contexts: [&#39;editable&#39;],
    title: &#39;Mail autofill&#39;,
    id: &#39;operafan@example.com&#39;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>

<pre><code>//
// An injected script (e.g. &#39;/includes/injected.js&#39;).
//

  // Insert the menu item&#39;s ID into the target element
  opera.contexts.menu.onclick = function(menuEvent) {
    menuEvent.srcElement.value = menuEvent.target.id;
  };
})();</code></pre>
