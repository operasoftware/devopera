Title: opera.extension.tabs.getAll()
----
Date: 2012-04-25 05:59:07
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

<p>The <code>getAll()</code> method provides a way to obtain a tab collection. The value returned is based on the following algorithm:</p>

<ol>
    <li>If this is the global tab manager, return an array of BrowserTab objects representing each browser tab that is currently open.</li>
    <li>If this is a window tab manager, return an array of BrowserTab objects representing each browser tab that is currently open within the context window.</li>
    <li>If this is a group tab manager, return an array of BrowserTab objects representing each browser tab that is currently open within the context tab group.</li>
</ol>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>BrowserTab[] getAll ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the toolbar. When the button is clicked, the number of browser tabs currently open, including tab groups, is shown in the button&#39;s badge.</p>
    
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
  var tabs = opera.extension.tabs.getAll();
  button.badge.textContent = tabs.length;
}</code></pre>

