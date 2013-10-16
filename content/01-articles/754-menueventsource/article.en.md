Title: MenuEvent.source
----
Date: 2012-08-24 07:21:03
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

<p>The <code>source</code> attribute is a <code>MessagePort</code> to the current <a href="/articles/view/extensions-api-windows-tabs/#tabs"><code>BrowserTab</code> object</a> in which the current event was fired. If the event was fired in an injected script this attribute will be null (default).</p>

<h2>Syntax:</h2>

<p><code>readonly MessagePort source</code></p>

<h2>Example:</h2>

<p>In this example, a menu item is added to the context menu for selected text only. When the menu item is clicked, the selected text is sent to an injected script in the current tab. The selected text is then reversed and shown in a popup alert box.</p>

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
    contexts: [&#39;selection&#39;],
    title: &#39;Reverse text&#39;,
    onclick: function(event) {
      // Send the selected text to the originating tab
      event.source.postMessage({query: event.selectionText});
    }
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
  // Source: http://4umi.com/web/javascript/reverse.php
  String.prototype.reverse = function() {return this.split(&#39;&#39;).reverse().join(&#39;&#39;);};

  // Listen for a message from the background process
  opera.extension.addEventListener(&#39;message&#39;, function(event) {
    // Get the selected text from the event&#39;s data object
    alert(event.data.query.reverse());
  }, false);
})();</code></pre>
