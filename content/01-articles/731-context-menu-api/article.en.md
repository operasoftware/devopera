Title: Context Menu API
----
Date: 2012-08-24 02:24:53
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

<dl class="apicontents">
    <dt><a href="/articles/view/extensions-api-contextmenu-createItem">opera.contexts.menu.createItem()</a></dt>
    <dd>Creates a new MenuItem available for use in the context menu.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-addItem">opera.contexts.menu.addItem()</a></dt>
    <dd>Add a specified MenuItem to the context menu.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-item">opera.contexts.menu.item()</a></dt>
    <dd>Returns the specified node in a collection of MenuItem objects.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-removeItem">opera.contexts.menu.removeItem()</a></dt>
    <dd>Remove a specified MenuItem from the context menu.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-length">opera.contexts.menu.length</a></dt>
    <dd>A read-only property representing the number of MenuItem objects in a collection.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-onclick">opera.contexts.menu.onclick</a></dt>
    <dd>A click event handler for the context menu, containing a MenuEvent.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-addItem">MenuItem.addItem()</a></dt>
    <dd>Add a specified MenuItem to an existing MenuItem.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-item">MenuItem.item()</a></dt>
    <dd>Returns the specified node in a collection of MenuItem objects.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-removeItem">MenuItem.removeItem()</a></dt>
    <dd>Remove a specified MenuItem from an existing MenuItem.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-contexts">MenuItem.contexts</a></dt>
    <dd>An attribute defining the contexts in which a MenuItem should appear, e.g. &quot;page&quot;, &quot;link&quot;, &quot;image&quot;, etc.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-disabled">MenuItem.disabled</a></dt>
    <dd>An attribute defining whether a button is disabled. Set to false by default (meaning the item is enabled).</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-documentURLPatterns">MenuItem.documentURLPatterns</a></dt>
    <dd>An attribute defining which domains a MenuItem should be activated for.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-icon">MenuItem.icon</a></dt>
    <dd>The URL of the MenuItem&#39;s icon.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-id">MenuItem.id</a></dt>
    <dd>A property representing the id of the MenuItem.</dd>
    
    <!--<dt><a href="/articles/view/extensions-api-contextmenu-">MenuItem.length</a></dt>
    <dd></dd>-->
    
    <dt><a href="/articles/view/extensions-api-contextmenu-onclick">MenuItem.onclick</a></dt>
    <dd>A click event handler for a MenuItem, containing a MenuEvent.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-parent">MenuItem.parent</a></dt>
    <dd>A read-only property representing the parent object of the MenuItem, set to null by default.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-targetURLPatterns">MenuItem.targetURLPatterns</a></dt>
    <dd>An attribute defining which hyperlink target domains a MenuItem should be activated for.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-title">MenuItem.title</a></dt>
    <dd>The title of the MenuItem shown to the user.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-type">MenuItem.type</a></dt>
    <dd>A property representing the type of the MenuItem.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-documentURL">MenuEvent.documentURL</a></dt>
    <dd>The containing frame URL of the element on which a MenuEvent was activated.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-isEditable">MenuEvent.isEditable</a></dt>
    <dd>Whether the element on which a MenuEvent was activated is editable or not.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-linkURL">MenuEvent.linkURL</a></dt>
    <dd>The link URL of the element on which a MenuEvent was activated.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-mediaType">MenuEvent.mediaType</a></dt>
    <dd>The type of media on which a MenuEvent was activated.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-pageURL">MenuEvent.pageURL</a></dt>
    <dd>The URL of the top-level document of the current web page.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-selectionText">MenuEvent.selectionText</a></dt>
    <dd>The run of text selected by the user.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-source">MenuEvent.source</a></dt>
    <dd>A <code>MessagePort</code> to the tab in which a MenuEvent was fired.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-srcElement">MenuEvent.srcElement</a></dt>
    <dd>The in-page <code>DOMNode</code> object on which a MenuEvent was fired.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-srcURL">MenuEvent.srcURL</a></dt>
    <dd>The value of an element&#39;s <code>src</code> attribute on which a MenuEvent was activated.</dd>
    
    <dt><a href="/articles/view/extensions-api-contextmenu-target">MenuEvent.target</a></dt>
    <dd>A MenuItemProxy object created from the MenuItem object on which the event was fired.</dd>
</dl>


<h2>Overview</h2>

<p>The Context Menu API enables an extension to add an item to the context menu, otherwise known as the right-click menu. An extension may only add one item to the context menu, but this item may contain various layers of sub-items, similar to a folder/sub-folder structure. You can specify whether a context menu item should only appear on certain domains or on certain types of element, e.g. links only, images only, etc. When a context menu item is clicked, it is possible to get data such as the URL of the current element or any text the user has selected.</p>

<p>Menu items can only be created within an extension&#39;s background process, but the <code>opera.contexts.menu</code> object is also accessible from injected scripts, for example using a click event listener. It&#39;s also possible to pass messages between a <code>MenuItem</code> and an injected script using the <a href="/articles/view/extensions-api-contextmenu-source"><code>MenuEvent</code>&#39;s <code>source</code> attribute</a>. See the examples below and in the individual method/attribute pages.</p>

<p class="note">To enable the context menu, the <code>opera:contextmenus</code> feature needs to be added as a feature element to the extension&#39;s config.xml file.</p>

<h2>Examples</h2>

<p>What follows are some examples designed to make clear the major use cases of the Context Menu API.</p>

<h3>Example 1: Background process only</h3>

<p>In this example, a menu item is added to the context menu for any domain. When the menu item is clicked, the current page opens in a new private tab.</p>

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

<h3>Example 2: Background process and injected script</h3>

<p>In this example, a menu item is added to the context menu for editable elements only. When the menu item is clicked, a message is sent to the current tab&#39;s injected script. The message data (an email address) is then inserted into the editable element.</p>

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
    var mail = &#39;operafan@example.com&#39;;

    // Create a menu item properties object
    var itemProps = {
      contexts: [&#39;editable&#39;],
      title: &#39;Mail autofill&#39;,
      onclick: function(event) {
        // Send a message to the injected script in the originating tab
        event.source.postMessage({message: mail});
      }
    }

    // Create a menu item with the specified properties
    var item = menu.createItem(itemProps);
    // Add the menu item to the context menu
    menu.addItem(item);
  }
}, false);</code></pre>

<pre><code>//
// An injected script (e.g. &#39;/includes/injected.js&#39;).
//

(function() {
  // Listen for the context menu being clicked
  opera.contexts.menu.onclick = function(menuEvent) {

    // Listen for a message from the background process
    opera.extension.addEventListener(&#39;message&#39;, function(event) {
      // Insert message from the event.data object into the source element
      menuEvent.srcElement.value = event.data.message;
    }, false);
  };
})();</code></pre>
