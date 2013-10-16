Title: BrowserTab.url
----
Date: 2012-04-26 02:48:45
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

<h3>Attribute</h3>

<p>The readonly <code>url</code> attribute exposes the document URL of the browser tab. On getting, the implementation returns the URL of the current document if the tab is open, otherwise it returns an empty string.</p>

<h3>Property</h3>

<p>When specified as an item in a <code>BrowserTabProperties</code> object, the <code>url</code> property specifies the location for a browser tab as a URL.</p>

<p>When <b>creating</b> a browser tab, if this property is not specified the browser will use its default URL.</p>

<p>When <b>updating</b> a browser tab, if this property is not specified the default behaviour is to leave the URL unchanged.</p>

<h2>Syntax:</h2>

<h3>Attribute</h3>

<p><code>readonly string url</code></p>

<h3>Property</h3>

<p><code>DOMString url</code></p>

<h2>Example:</h2>

<p>The following example creates a button in the browser toolbar. When the button is clicked, the last focused window is detected. A new tab is then created with different URL depending on whether the window is private or not.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Window creation test&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Get the last focused window
    var thisWin = opera.extension.windows.getLastFocused();
    
    // Create an empty tab properties object
    var tabProps = {};
    
    // Add a tab URL depending on whether the window is private or not
    if (thisWin.private) {
        tabProps.url = &#39;http://www.facebook.com/&#39;;
    } else {
        tabProps.url = &#39;http://www.wikipedia.org/&#39;;
    }
    
    // Open a new tab with the relevant URL
    opera.extension.tabs.create(tabProps);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

