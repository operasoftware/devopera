Title: BrowserWindow.close()
----
Date: 2012-04-25 05:37:06
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

<p>The <code>close()</code> method provides a way to close a browser tab group along with all browser tab groups and browser tabs within the associated tab group collection and tab collection, respectively.</p>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>void close ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the last focused window is detected and then closed.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the last focused window
    var win = opera.extension.windows.getLastFocused();
    
    // Close the window
    win.close();
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

