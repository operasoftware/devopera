Title: BrowserTabGroup.insert()
----
Date: 2012-04-25 05:51:49
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

<p>The <code>insert()</code> method provides a way to insert a browser tab into this browser tab group, before the specified child, if provided.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>tab</code>: The tab to insert.</li>
        <li><code>child (optional)</code>: The tab before which the specified tab should be inserted.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void insert (BrowserTab tab, optional BrowserTab child)</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a tab group is created containing two tabs. Then the currently selected tab is inserted into the new tab group, before the second tab.</p>

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
    
    // Insert the currently selected tab into the middle of the new tab group
    var tab3 = opera.extension.tabs.getSelected();
    tabGroup.insert(tab3, tab2);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

