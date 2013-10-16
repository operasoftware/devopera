Title: BrowserWindow.tabGroups
----
Date: 2012-04-25 05:44:55
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

<p>The readonly <code>tabGroups</code> attribute exposes a window tab group manager. The tab group manager is an object that implements the BrowserTabGroupManager interface and manages all browser tab groups that are currently open within the context window.</p>

<h2>Syntax:</h2>

<p><code>readonly BrowserTabGroupManager tabGroups</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, the last focused window is detected. The number of tab groups in the window is then displayed in the button&#39;s badge.</p>

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
  // Get the last focused window
  var win = opera.extension.windows.getLastFocused();
  
  // Get all groups in the window
  var groups = win.tabGroups.getAll();
  
  // Display the number of groups in the button&#39;s badge
  button.badge.textContent = groups.length;
}</code></pre>

