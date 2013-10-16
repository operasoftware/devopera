Title: opera.extension.tabs.create()
----
Date: 2012-04-25 05:58:14
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

<p>The <code>create()</code> method provides a way to create a new browser tab, either globally or within the context window or context tab group. The value returned is based on the following algorithm:</p>

<ol>
    <li>If this is the global tab manager, run the algorithm to create a tab using properties and before as the arguments, if provided.</li>
    <li>If this is a window tab manager, run the algorithm to create a tab within the context window using properties and before as the arguments, if provided.</li>
    <li>If this is a group tab manager, run the algorithm to create a tab within the context tab group using properties and before as the arguments, if provided.</li>
</ol>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>properties</code>: The properties of the new tab, such as its url or whether it&#39;s private.</li>
        <li><code>before</code>: The tab or tab group that the new tab should be inserted before, usually to the left.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>BrowserTab create (optional BrowserTabProperties properties, optional BrowserTabGroup before)</code></p>
<p><code>BrowserTab create (optional BrowserTabProperties properties, optional BrowserTab before)</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a tab is created with the specified URL.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Create a tab with the specified URL
    var tab = opera.extension.tabs.create({url: &#39;http://dev.opera.com/&#39;});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

