Title: MenuEvent.linkURL
----
Date: 2012-08-24 06:44:48
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

<p>The <code>linkURL</code> attribute is the URL of the link element on which this event was activated. If the activated element is not a link then this attribute will be null.</p>

<h2>Syntax:</h2>

<p><code>readonly DOMString linkURL</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for links only. When the menu item is clicked, the link&#39;s target page will open in a new private tab.</p>

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
    contexts: [&#39;link&#39;],
    title: &#39;Open in private tab&#39;,
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
