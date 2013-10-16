Title: opera.contexts.menu.onclick and MenuItem.onclick
----
Date: 2012-08-24 02:44:36
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

<p>This property represents the function executed when a context menu item is clicked. This callback function will contain one argument of type <code>MenuEvent</code>.</p>

<h2>Example:</h2>

<p>The below example opens a new tab when the extension&#39;s menu item is clicked.</p>

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
  
  // Create a menu item properties object
  var itemProps = {
    title: &#39;Context Menu Example&#39;,
    type: &#39;folder&#39;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
  
  // Open a new tab when clicked
  item.onclick = function(event) {
    var tab = opera.extension.tabs.create();
  };
}</code></pre>
