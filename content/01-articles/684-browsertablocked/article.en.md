Title: BrowserTab.locked
----
Date: 2012-04-25 08:39:08
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

<p>The readonly <code>locked</code> attribute exposes the locked state of the browser tab. On getting, the locked attribute returns <code>true</code> if the tab is locked, otherwise it returns <code>false</code>.</p>

<h3>Property</h3>

<p>When specified as an item in a <code>BrowserTabProperties</code> object, the <code>locked</code> property indicates the desired locked state of a browser tab. The value <code>true</code> indicates that the tab should be locked, whereas the value <code>false</code> indicates that the tab should be unlocked.</p>

<p>When <b>creating</b> a browser tab, if this property is not specified, the default behaviour is the same as specifying <code>false</code>.</p>

<p>When <b>updating</b> a browser tab, if this property is not specified, the default behaviour is to leave the locked state unchanged.</p>

<h2>Syntax:</h2>

<h3>Attribute</h3>

<p><code>readonly boolean locked</code></p>

<h3>Property</h3>

<p><code>boolean locked</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the current tab is detected and is then locked (pinned).</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Detect the currently selected tab
    var thisTab = opera.extension.tabs.getSelected();
    
    // Make the current tab locked (pinned)
    thisTab.update({locked: true});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

