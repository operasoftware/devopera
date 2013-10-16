Title: MenuItem.targetURLPatterns
----
Date: 2012-08-24 03:23:02
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

<p>The <code>targetURLPatterns</code> attribute is an array of rules specifying which link target domains a menu item should be visible for. This attribute is only effective when the context menu is activated on a link, in other words, only when the item&#39;s <code>contexts</code> array contains <code>link</code> or <code>all</code>. If this attribute is null (default) or an empty array then the menu item will appear for all target domains. Note that <code>*</code> can be used as a wildcard.</p>

<h2>Syntax:</h2>

<p><code>DOMString[] targetURLPatterns</code></p>

<h2>Example:</h2>

<p>The following example creates an item in the context menu only for links that link to the opera.com domain.</p>

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
    title: &#39;Translate this link&#39;,
    contexts: [&#39;link&#39;],
    targetURLPatterns: [
      &#39;http://opera.com/*&#39;,
      &#39;https://opera.com/*&#39;,
      &#39;http://*.opera.com/*&#39;,
      &#39;https://*.opera.com/*&#39;
    ],
    onclick: function(event) {
      doTranslate(event.linkURL);
    }
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
