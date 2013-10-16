Title: MenuEvent.srcElement
----
Date: 2012-08-24 07:22:30
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

<p>The <code>srcElement</code> attribute is the in-page <code>DOMNode</code> object on which the current event was fired. If the event was fired in a background process this attribute will be null.</p>

<h2>Syntax:</h2>

<p><code>readonly DOMNode srcElement</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for images only. When the menu item is clicked, the image will be opened in a new tab.</p>

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
    contexts: [&#39;editable&#39;],
    title: &#39;User agent&#39;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>

<pre><code>//
// An injected script (e.g. &#39;/includes/injected.js&#39;).
//

(function() {
  // Listen for the context menu being clicked
  opera.contexts.menu.onclick = function(menuEvent) {
    // Insert the browser user agent string into the editable element
    menuEvent.srcElement.value = window.navigator.userAgent;
  };
})();</code></pre>
