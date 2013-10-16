Title: MenuEvent.mediaType
----
Date: 2012-08-24 07:18:32
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

<p>The <code>mediaType</code> attribute shows the type of media element on which this event was activated. The value of this attribute can be <strong><code>image</code></strong>, <strong><code>video</code></strong> or <strong><code>audio</code></strong>. The default value for non-media elements is <code>null</code>.</p>

<h2>Syntax:</h2>

<p><code>readonly DOMString mediaType</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for media elements only. When the menu item is clicked, a message is displayed in the console showing what type of media element was chosen.</p>

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
    contexts: [&#39;image&#39;, &#39;audio&#39;, &#39;video&#39;],
    title: &#39;Context menu example&#39;,
    onclick: function(event) {
      console.log(&#39;Your chosen element: &#39; + event.mediaType);
    }
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
