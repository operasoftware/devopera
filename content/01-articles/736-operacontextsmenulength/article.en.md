Title: opera.contexts.menu.length
----
Date: 2012-08-24 02:41:32
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

<p>This attribute contains the number of items held by the <code>MenuContext</code>. 

<p class="note"><strong>Note:</strong> This is the menu length for the extension only and doesn&#39;t include the browser&#39;s other existing menu items.</p>

<h2>Example:</h2>

<p>This example gets the context menu length to confirm that an item was successfully created and added to the menu.</p>

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
    title: &#39;Context Menu Example&#39;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
  
  // Check the length of the menu
  if (menu.length &gt; 0) {
    console.log(&#39;Menu item successfully created and added.&#39;);
  }
}</code></pre></p>
