Title: MenuItem.id
----
Date: 2012-08-24 03:15:35
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

<p>The <code>id</code> attribute is a settable attribute that can be used to identify the source of a click event if necessary. This attribute defaults to an empty string.</p>

<h2>Syntax:</h2>

<p><code>DOMString id</code></p>

<h2>Example:</h2>

<p>The following example creates an item in the context menu with a specified ID. When the item is clicked, its ID is shown in the console.</p>

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
    id: &#39;context001&#39;,
    title: &#39;Context Menu Example&#39;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
  
  item.onclick = function(event) {
    // Show the ID of the menu item
    console.log(&#39;Item ID: &#39; + event.target.id);
  };
}</code></pre>
