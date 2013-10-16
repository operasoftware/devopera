Title: BrowserTabGroup.closed
----
Date: 2012-04-25 05:54:25
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

<p>The readonly <code>closed</code> attribute exposes the closed state of the browser tab group. On getting, the closed attribute returns true if the browser tab group has been closed, otherwise, it returns false.</p>

<h2>Syntax:</h2>

<p><code>readonly boolean closed</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the closed state of the first tab group is detected. If it is not closed, the script closes the tab group.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  badge: {
    backgroundColor: &#39;#cc0000&#39;,
    color: &#39;#ffffff&#39;
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);

button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  // Get all tab groups in the current window
  var groups = opera.extension.tabGroups.getAll();
  
  // If the first group is not closed, close it
  if (groups[0].closed === false) {
    groups[0].close();
  }
}</code></pre>

