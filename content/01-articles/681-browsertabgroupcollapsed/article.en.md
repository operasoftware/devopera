Title: BrowserTabGroup.collapsed
----
Date: 2012-04-25 06:52:15
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

<p>The readonly <code>collapsed</code> attribute exposes the collapsed state of the browser tab group. On getting, the attribute returns true if the browser tab group is collapsed, otherwise it returns false.</p>

<h3>Property</h3>

<p>When specified as an item in a <code>BrowserTabGroupProperties</code> object, the <code>collapsed</code> property indicates the desired collapsed state of a browser tab group. The value <code>true</code> indicates that the tab group should be collapsed, and <code>false</code> indicates the tab group should be expanded.</p>

<p>When <b>creating</b> a browser tab group, if this property is not specified the default behaviour is the same as specifying <code>false</code>.</p>

<p>When <b>updating</b> a browser tab group, if this property is not specified, the default behaviour is to leave the collapsed state unchanged.</p>

<h2>Syntax:</h2>

<h3>Attribute</h3>

<p><code>readonly boolean collapsed</code></p>

<h3>Property</h3>

<p><code>boolean collapsed</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a tab group is created containing two tabs. Then the new tab group is collapsed.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Create two tabs with specified URLs
    var tab1 = opera.extension.tabs.create({url: &#39;http://www.reddit.com/&#39;});
    var tab2 = opera.extension.tabs.create({url: &#39;http://www.digg.com/&#39;});
    
    // Create a tab group containing the above two tabs
    var tabGroup = opera.extension.tabGroups.create([tab1, tab2]);
    
    // Collapse the new tab group
    tabGroup.update({collapsed: true});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

