Title: BrowserTab.private
----
Date: 2012-04-25 08:50:35
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

<p>The readonly <code>private</code> attribute exposes the privacy mode of the browser tab. On getting, the private attribute returns <code>true</code> if the privacy mode of the browser tab is private, otherwise it returns <code>false</code>.</p>

<h3>Property</h3>

<p>When specified as an item in a <code>BrowserTabProperties</code> object, the <code>private</code> property indicates the desired privacy mode of a browser tab. The value <code>true</code> indicates that the tab should be private, whereas the value <code>false</code> indicates that the tab&#39;s privacy mode should be normal.</p>

<p>When <b>creating</b> a browser tab, if this property is not specified, the default behaviour is to inherit the privacy mode of the context window.</p>

<p>When <b>updating</b> a browser tab, this property has no effect, whether specified or not. The privacy mode remains unchanged.</p>

<h2>Syntax:</h2>

<h3>Attribute</h3>

<p><code>readonly boolean private</code></p>

<h3>Property</h3>

<p><code>boolean private</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a private tab is created with the specified URL.</p>

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
    var tabProps = {
      url: &#39;http://www.operamail.com/&#39;,
      private: true
    };
    
    // Create a tab with the specified properties
    var tab = opera.extension.tabs.create(tabProps);
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

