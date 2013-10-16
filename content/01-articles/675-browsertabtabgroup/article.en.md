Title: BrowserTab.tabGroup
----
Date: 2012-04-25 06:10:03
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

<p>The readonly <code>tabGroup</code> attribute exposes the context tab group. On getting, the tabGroup attribute returns a BrowserTabGroup object representing the context tab group.</p>

<h2>Syntax:</h2>

<p><code>readonly BrowserTabGroup tabGroup</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the tab group for the current tab&#x2014;if there is one&#x2014;either expands or collapses.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the currently selected tab
    var thisTab = opera.extension.tabs.getSelected();
    
    // Get the tab group the tab belongs to, if any
    try {
      var thisGroup = thisTab.tabGroup;
      
      // If the group is collapsed, expand it, or the other way round
      var expand = (thisGroup.collapsed === false) ? true : false;    
      thisGroup.update({collapsed: expand});
    } catch(e) {}    
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

