Title: MenuItem.contexts
----
Date: 2012-08-24 02:59:47
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

<p>The <code>contexts</code> attribute is used to define the list of contexts that this context menu item will appear in. The list of valid context values for this attribute include <strong><code>all</code></strong>, <strong><code>page</code></strong>, <strong><code>frame</code></strong>, <strong><code>selection</code></strong>, <strong><code>link</code></strong>, <strong><code>editable</code></strong>, <strong><code>image</code></strong>, <strong><code>video</code></strong> and <strong><code>audio</code></strong>. The default value is an array with a single entry of <code>page</code>.</p>

<h2>Syntax:</h2>

<p><code>DOMString[] contexts</code></p>

<h2>Example:</h2>

<p>The following example creates an item in the context menu to open links in private tabs. In other words, the &quot;Open link in private tab&quot; item will appear only when a link is right-/<kbd>Ctrl</kbd>-clicked.</p>

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
