Title: MenuItem.documentURLPatterns
----
Date: 2012-08-24 03:08:35
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

<p>The <code>documentURLPatterns</code> attribute is an array of rules specifying which domains a menu item should be visible on. If this attribute is null (default) or an empty array then the menu item will appear on all domains. Note that <code>*</code> can be used as a wildcard.</p>

<h2>Syntax:</h2>

<p><code>DOMString[] documentURLPatterns</code></p>

<h2>Example:</h2>

<p>The following example creates an item in the context menu only for pages in the opera.com domain.</p>

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
    title: &#39;Translate this page&#39;,
    documentURLPatterns: [
      &#39;http://opera.com/*&#39;,
      &#39;https://opera.com/*&#39;,
      &#39;http://*.opera.com/*&#39;,
      &#39;https://*.opera.com/*&#39;
    ],
    onclick: function(event) {
      doTranslate(event.pageURL);
    }
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
