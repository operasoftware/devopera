Title: opera.extension.tabs.getSelected()
----
Date: 2012-04-25 06:00:10
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

<p>The <code>getSelected()</code> method provides a way to obtain the currently selected browser tab, either globally or within the context window or context tab group. The value returned is based on the following algorithm:</p>

<ol>
    <li>If this is the global tab manager, return a BrowserTab object representing the currently selected browser tab within the currently selected browser window, if any. Otherwise, return null.</li>
    <li>If this is a window tab manager, return a BrowserTab object representing the currently selected browser tab within the context window, if any. Otherwise, return null.</li>
    <li>If this is a group tab manager, return a BrowserTab object representing the currently selected browser tab within the context tab group, if any. Otherwise, return null.</li>
</ol>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>BrowserTab getSelected ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the current tab is detected and a tab is then created to the left of it.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the current tab as a BrowserTab object
    var thisTab = opera.extension.tabs.getSelected();
    
    // Create a tab with the specified URL
    var tab = opera.extension.tabs.create({url: &#39;http://dev.opera.com/&#39;}, thisTab);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

