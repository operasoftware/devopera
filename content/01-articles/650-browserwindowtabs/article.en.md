Title: BrowserWindow.tabs
----
Date: 2012-04-25 05:46:10
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

<p>The readonly <code>tabs</code> attribute exposes a window tab manager. The window tab manager is an object that implements the BrowserTabManager interface and manages all browser tabs that are currently open within the context window.</p>

<h2>Syntax:</h2>

<p><code>readonly BrowserTabManager tabs</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, the last focused window is detected. The number of tabs in the window, including any tab groups, is then displayed in the button&#39;s badge.</p>

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
  
  // Get all tabs in the window
  var groups = win.tabs.getAll();
  
  // Display the number of tabs in the button&#39;s badge
  button.badge.textContent = groups.length;
}</code></pre>

