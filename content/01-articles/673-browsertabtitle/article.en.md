Title: BrowserTab.title
----
Date: 2012-04-25 06:08:16
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

<p>The readonly <code>title</code> attribute exposes the title of the current document within the browser tab. On getting, the browser only returns the title if the tab is open, otherwise an empty string is returned.</p>

<h2>Syntax:</h2>

<p><code>readonly string title // maps to document.title</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, the title of the current tab is retrieved. Then a search is performed in a new tab, using the title as the search query.</p>

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
    
    // Get the title of the tab&#39;s document and encode special characters
    var title = encodeURIComponent(thisTab.title);
    
    // Create a tab searching DuckDuckGo for the specified title
    var tabProps = {
      url: &#39;http://duckduckgo.com/?q=&#39; + title
    }
    opera.extension.tabs.create(tabProps);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

