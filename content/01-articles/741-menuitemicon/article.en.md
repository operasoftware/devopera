Title: MenuItem.icon
----
Date: 2012-08-24 03:10:26
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

<p>The <code>icon</code> attribute is a relative URL pointing to an internal image, or an absolute URL pointing to an external image. The allowed image formats are <strong>bmp</strong>, <strong>gif</strong> (not animated), <strong>ico</strong>, <strong>jpg</strong>, <strong>png</strong> and <strong>webp</strong>. For best results, the icon should be square and small &#x2014; 16 pixels x 16 pixels is ideal.</p>

<h2>Syntax:</h2>

<p><code>DOMString contexts</code></p>

<h2>Example:</h2>

<p>The following example creates an item with an icon in the context menu to open links in private tabs. In other words, the item will appear only when a link is right-/<kbd>Ctrl</kbd>-clicked.</p>

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
    title: &#39;Open link in private tab&#39;,
    contexts: [&#39;link&#39;],
    icon: &#39;images/private.png&#39;,
    onclick: function(event) {
      // Create a tab properties object
      var tabProps = {
        url: event.linkURL,
        private: true
      };

      // Create a tab with the specified properties
      var tab = opera.extension.tabs.create(tabProps);
    }
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
