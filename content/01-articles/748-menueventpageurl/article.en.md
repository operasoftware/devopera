Title: MenuEvent.pageURL
----
Date: 2012-08-24 06:41:39
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

<p>The <code>pageURL</code> attribute is the URL of the top-level document of the current web page. For URLs of a document within a frame, please use <a href="/articles/view/extensions-api-contextmenu-documentURL"><code>MenuEvent.documentURL</code></a>.</p>

<h2>Syntax:</h2>

<p><code>readonly DOMString pageURL</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu. When the menu item is clicked, the current page opens in a new private tab.</p>

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

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  // Check the Context Menu API is supported
  if (opera.contexts.menu) {
    var menu = opera.contexts.menu;
    // Create a menu item properties object
    var itemProps = {
      title: &#39;Privatize&#39;,
      onclick: function(event) {
        // Create a tab properties object
        var tabProps = {
          url: event.pageURL,
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
  } else {
      console.error(&#39;Context Menu API not supported.&#39;);
  }
}, false);</code></pre>
