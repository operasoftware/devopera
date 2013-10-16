Title: opera.extension.tabGroups.getAll()
----
Date: 2012-04-25 05:49:04
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

<p>The <code>getAll()</code> method provides a way to obtain a tab group collection. The value returned is based on the following algorithm:</p>

<ol>
    <li>If this is the global tab group manager, return an array of BrowserTabGroup objects representing each browser tab group that is currently open.</li>
    <li>If this is a window tab group manager, return an array of BrowserTabGroup objects representing each browser tab group that is currently open within the context window.</li>
</ol>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>BrowserTabGroup[] getAll ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the toolbar. When the button is clicked, the number of browser tab groups currently open is shown in the button&#39;s badge.</p>
    
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
  var groups = opera.extension.tabGroups.getAll();
  button.badge.textContent = groups.length;
}</code></pre>

