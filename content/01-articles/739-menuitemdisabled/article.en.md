Title: MenuItem.disabled
----
Date: 2012-08-24 03:04:21
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

<p>The <code>disabled</code> attribute represents whether a menu item is visible in a context menu. If the value is <code>false</code> (default), the menu item will be displayed and is clickable, whereas if the value is <code>true</code> the item will not be displayed in the context menu.</p>

<h2>Syntax:</h2>

<p><code>Boolean false</code></p>

<h2>Example:</h2>

<p>In the following example, a menu item is created for translating the web page into English. The menu item is disabled (not visible) if the user&#39;s browser language is not set to English.</p>

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
    title: &#39;Translate page into English&#39;,
    onclick: function(event) {
      doTranslate(event.pageURL);
    }
  }
  
  if (window.navigator.browserLanguage.indexOf(&#39;en&#39;) != 0) {
    itemProps.disabled = true;
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
}</code></pre>
