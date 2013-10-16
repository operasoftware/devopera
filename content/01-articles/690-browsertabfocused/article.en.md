Title: BrowserTab.focused
----
Date: 2012-04-26 02:57:35
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

<p>When specified as an item in a <code>BrowserTabProperties</code> object, the <code>focused</code> property indicates the desired focus state of a browser tab. The value <code>true</code> indicates that the tab should be focused, and <code>false</code> indicates that the focus state should not change.</p>

<p>When creating or updating a browser tab, if this property is not specified, the default behaviour is the same as specifying <code>false</code>.</p>

<p class="note">Note: The <code>focused</code> property is only a hint. Certain conditions and platform conventions might cause a tab and its context window to be focused or not, regardless of the specified value.</p>

<h2>Syntax:</h2>

<p><code>boolean focused</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a new tab is created with the specified URL and given focus.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Create a tab properties object
    tabProps = {
      url: &#39;http://www.operamail.com/&#39;,
      focused: true
    };
    
    // Create a tab with the specified properties
    var tab = opera.extension.tabs.create(tabProps);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

