Title: opera.extension.tabGroups.create()
----
Date: 2012-04-25 05:47:53
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

<p>The <code>create()</code> method provides a way to create a new browser tab group, either globally or within the context window. When the <code>create()</code> method is invoked, the following happens:</p>

<ol>
    <li>If this is the global tab group manager, a tab group is created using tabs, properties and before as the arguments, if provided.</li>
    <li>If this is a window tab group manager, a tab group is created within the context window using tabs, properties and before as the arguments, if provided.</li>
</ol>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>tabs</code>: The tabs to add to the new tab group.</li>
        <li><code>properties</code>: The properties of the new tab group, such as whether it&#39;s collapsed.</li>
        <li><code>before</code>: The tab or tab group that the new tab group should be inserted before, usually to the left.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>BrowserTabGroup create (Array[] tabs, optional BrowserTabGroupProperties properties, optional BrowserTabGroup before)</code></p>
<p><code>BrowserTabGroup create (Array[] tabs, optional BrowserTabGroupProperties properties, optional BrowserTab before)</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a tab group is created containing two tabs with the specified URLs.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Create two tabs with specified URLs
    var tab1 = opera.extension.tabs.create({url: &#39;http://www.reddit.com/&#39;});
    var tab2 = opera.extension.tabs.create({url: &#39;http://www.digg.com/&#39;});
    
    // Create a tab group containing the above two tabs
    var tabGroup = opera.extension.tabGroups.create([tab1, tab2]);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

