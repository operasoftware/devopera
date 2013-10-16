Title: BrowserTabGroup.close()
----
Date: 2012-04-25 05:50:01
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

<p>The <code>close()</code> method provides a way to close a browser tab group along with all browser tabs within the associated tab collection.</p>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>void close ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the collapsed state of all tab groups is checked and any collapsed groups are closed.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    try {
      // Get all the tab groups
      var groups = opera.extension.tabGroups.getAll();
      
      // Loop through the groups
      for (var i = 0, len = groups.length; i &lt; len; i++) {
        // If a group is collapsed, close it
        if (groups[i].collapsed === true) {
          groups[i].close();
        }
      }
      
    } catch(e) {}
    
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

