Title: BrowserTab.position
----
Date: 2012-04-25 06:10:58
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

<p>The readonly <code>position</code> attribute exposes the current tab position. On getting, the tab position is only returned if the browser tab is open, otherwise <code>NaN</code> is returned.</p>

<h2>Syntax:</h2>

<p><code>readonly unsigned long position</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the position of the currently selected tab is displayed in the button&#39;s badge.</p>

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
  // Get the currently selected tab
  var thisTab = opera.extension.tabs.getSelected();
  
  // Display the tab&#39;s position in the button&#39;s badge
  button.badge.textContent = thisTab.position;
}</code></pre>

