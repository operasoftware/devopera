Title: BrowserWindow.insert()
----
Date: 2012-04-25 05:36:02
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

<p>The <code>insert()</code> method provides a way to insert a specified browser tab group or browser tab into this browser window, before the specified child, if provided.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>tab / tabGroup</code>: The tab or tab group to insert.</li>
        <li><code>child (optional)</code>: The tab or tab group before which the specified tab or tab group should be inserted.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void insert (BrowserTabGroup tabGroup, optional BrowserTabGroup child)</code></p>
<p><code>void insert (BrowserTab tab, optional BrowserTabGroup child)</code></p>
<p><code>void insert (BrowserTab tab, optional BrowserTab child)</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, the currently selected tab is detected. Then, a new browser window is created and the tab is inserted into it.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Window creation test&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the currently selected tab
    var thisTab = opera.extension.tabs.getSelected();
    
    // Open a new browser window
    var win = opera.extension.windows.create();
    
    // Insert the tab into the new window
    win.insert(thisTab);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

