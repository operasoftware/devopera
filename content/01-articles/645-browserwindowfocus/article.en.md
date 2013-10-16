Title: BrowserWindow.focus()
----
Date: 2012-04-25 05:38:23
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

<p>The <code>focus()</code> method provides a way to focus a browser window.</p>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>void focus ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, a new, empty browser window is created and then given focus.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Window creation test&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Open a new browser window
    var win = opera.extension.windows.create();
    
    // Give the new window focus
    win.focus();
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

