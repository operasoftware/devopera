Title: MenuEvent.isEditable
----
Date: 2012-08-24 07:10:02
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

<p>The <code>isEditable</code> attribute is <code>true</code> if the activated element is editable (i.e. if it is a text input or text area), otherwise its value is <code>false</code> (default).</p>

<h2>Syntax:</h2>

<p><code>readonly Boolean isEditable</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for editable elements only. When the menu item is clicked, a message is shown in the console after a further check that the element is editable.</p>

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
    title: &#39;Context menu example&#39;,
    onclick: function(event) {
      if (event.isEditable) {
        console.log(&#39;This is an editable element&#39;);
      }
    }
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
