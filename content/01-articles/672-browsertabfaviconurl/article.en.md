Title: BrowserTab.faviconUrl
----
Date: 2012-04-25 06:07:19
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

<p>The readonly <code>faviconUrl</code> attribute exposes the current favicon for the browser tab. On getting, the browser returns the URL of the favicon for the current document if an icon exists and if the browser tab is not closed. Otherwise, an empty string is returned.</p>

<h2>Syntax:</h2>

<p><code>readonly string faviconUrl // maps to document.readyState</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the URL of the current tab&#39;s favicon is retrieved. Then a new tab is opened containing the favicon.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the currently selected tab
    var thisTab = opera.extension.tabs.getSelected();
    
    // Get the URL of its favicon
    var favicon = thisTab.faviconUrl;
    
    // Create a new tab containing the favicon
    opera.extension.tabs.create({url: favicon});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

