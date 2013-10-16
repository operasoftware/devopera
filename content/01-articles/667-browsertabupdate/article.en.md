Title: BrowserTab.update()
----
Date: 2012-04-25 06:03:03
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

<p>The <code>update()</code> method provides a way to update the properties of a browser tab.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>properties</code>: The new properties to use for updating the tab.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void update (BrowserTabProperties properties)</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the current tab is detected and is then locked (pinned).</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Detect the currently selected tab
    var thisTab = opera.extension.tabs.getSelected();
    
    // Make the current tab locked (pinned)
    thisTab.update({locked: true});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

