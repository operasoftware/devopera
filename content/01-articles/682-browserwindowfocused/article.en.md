Title: BrowserWindow.focused
----
Date: 2012-04-25 08:05:59
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

<h3>Attribute</h3>

<p>The readonly <code>focused</code> attribute exposes the focused state of the browser window. On getting, the focused attribute returns <code>true</code> if the browser window is focused, otherwise it returns <code>false</code>.</p>

<h3>Property</h3>

<p>When specified as an item in a <code>BrowserWindowProperties</code> object, the <code>focused</code> property indicates the desired focus state of a browser window. The value <code>true</code> indicates that the window should be focused, and <code>false</code> indicates that the focus state should not change.</p>

<p>When creating or updating a browser window, if this property is not specified, the default behaviour is the same as specifying <code>false</code>.</p>

<p class="note">Note: The <code>focused</code> property is only a hint. Certain conditions and platform conventions might cause a window to be focused or not regardless of the specified value.</p>

<p />

<h2>Syntax:</h2>

<h3>Attribute</h3>

<p><code>readonly boolean focused</code></p>

<h3>Property</h3>

<p><code>boolean focused</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, a new, empty browser window is created and is then give focus.</p>

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
    
    // Update the window to give it focus
    win.update({focused: true});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

