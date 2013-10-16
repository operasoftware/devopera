Title: opera.extension.windows.getAll()
----
Date: 2012-04-25 05:32:57
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

<p>The <code>getAll()</code> method provides a way to obtain a window collection. When the <code>getAll()</code> method is invoked, the implementation must return an array of BrowserWindow objects representing each browser window that is currently open.</p>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>BrowserWindow[] getAll ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the toolbar. When the button is clicked, the number of browser windows currently open is shown in the button&#39;s badge.</p>
    
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
  var windows = opera.extension.windows.getAll();
  button.badge.textContent = windows.length;
}</code></pre>
    
