Title: BrowserTab.focus()
----
Date: 2012-04-25 06:02:06
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

<p>The <code>focus()</code> method provides a way to focus a browser tab.</p>

<h2>Parameters:</h2>

<p>None</p>

<h2>Syntax:</h2>

<p><code>void focus ()</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a tab is created with the specified URL and is given focus.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Create a tab with the specified URL
    var tab = opera.extension.tabs.create({url: &#39;http://dev.opera.com/&#39;});
    
    // Give focus to the new tab
    tab.focus();
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

