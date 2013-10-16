Title: opera.extension.windows.create()
----
Date: 2012-04-25 05:31:24
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

<p>The <code>create()</code> method provides a way to create a new browser window. When the <code>create()</code> method is invoked, the implementation must run the algorithm to create a window using tabs and properties as the argument, if provided.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>tabs (optional)</code>: The tab, tab group or tab properties of the new window.</li>
        <li><code>properties (optional)</code>: The properties of the new window, such as its position/dimensions or whether it&#39;s private.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>BrowserWindow create (optional Object[] tabs, optional BrowserWindowProperties properties)</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, a new, empty browser window is created.</p>

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
    opera.extension.windows.create();
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>
