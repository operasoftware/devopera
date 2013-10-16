Title: BrowserTabGroup.tabs
----
Date: 2012-04-25 05:56:19
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

<p>The readonly <code>tabs</code> attribute exposes a tab manager. The tab manager is an object that implements the BrowserTabManager interface and manages all browser tabs that are currently open within the context tab group.</p>

<h2>Syntax:</h2>

<p><code>readonly BrowserTabManager tabs</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, the first tab group is detected and all the URLs of its tabs are collected. Then, a new tab group is created and populated with private tabs with the same URLs.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    try {
      // Get the first tab group
      var group = opera.extension.tabGroups.getAll()[0];
      
      // Get all tabs within the tab group
      var tabs = group.tabs.getAll();
      
      // Create an empty array and add new tabs to it with the same URLs
      var newTab;
      var newTabs = [];
      for (var i = 0, len = tabs.length; i &lt; len; i++) {
        if (tabs[i].url != undefined) {
          // Create each new tabs as a private tab
          newTab = opera.extension.tabs.create({url: tabs[i].url, private: true});
          newTabs.push(newTab);
        }
      }
      
      // Create a tab group containing the new tabs
      var tabGroup = opera.extension.tabGroups.create(newTabs);
      
    } catch(e) {}
    
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);</code></pre>

