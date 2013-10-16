Title: BrowserWindow.update()
----
Date: 2012-04-25 05:39:57
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

<p>The <code>update()</code> method provides a way to update the properties of a browser window.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>properties</code>: The new properties to use for updating the window.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void update (BrowserWindowProperties properties)</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, the last focused window is detected and the width is changed to 320 pixels.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Window creation test&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the last focused browser window
    var thisWin = opera.extension.windows.getLastFocused();
    
    // Change the window&#39;s width to 320 pixels
    thisWin.update({width: 320});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

