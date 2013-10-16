Title: BrowserTabGroup.focus()
----
Date: 2012-04-25 05:50:55
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

<p>The <code>focus()</code> method provides a way to focus a browser tab group.</p>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>void focus ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a tab group is created containing two tabs and the tab group is given focus.</p>

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
    
    // Give the tab group focus
    tabGroup.focus();
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

