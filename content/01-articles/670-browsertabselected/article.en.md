Title: BrowserTab.selected
----
Date: 2012-04-25 06:05:44
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

<p>The readonly <code>selected</code> attribute exposes the selected state of the browser tab. On getting, the selected attribute returns true if the browser tab is currently selected, otherwise, it returns false.</p>

<h2>Syntax:</h2>

<p><code>readonly boolean selected</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the script loops through all open tabs and closes all tabs that are not currently selected.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get all tabs in the current window
    var tabs = opera.extension.tabs.getAll();
    
    // Loop through all the tabs
    for (var i = 0, len = tabs.length; i &lt; len; i++) {
        
      // Close tabs that are not currently selected
      if (tabs[i].selected === false) {
        tabs[i].close();
      }
      
    }
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

