Title: MenuEvent.documentURL
----
Date: 2012-08-24 06:39:47
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

<p>The <code>documentURL</code> attribute is the URL of the containing frame for the element that was clicked. If the element is not within a frame, this attribute will be set to the URL of the top-level document of the current web page, which is equivalent to <a href="/articles/view/extensions-api-contextmenu-pageURL"><code>MenuEvent.pageURL</code></a>.</p>

<h2>Syntax:</h2>

<p><code>readonly DOMString documentURL</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for any domain and any element. When the menu item is clicked, the current element&#39;s containing frame will open in a new tab. If there is no containing frame, the current page will open in a new tab.</p>

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
    contexts: [&#39;all&#39;],
    title: &#39;Open frame in new tab&#39;,
    onclick: function(event) {
      // Create a tab properties object
      var tabProps = {
        url: event.documentURL
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
