Title: Windows & Tabs API
----
Date: 2012-04-25 05:23:26
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

<h2 id="windows">Windows</h2>
<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-windows-create">opera.extension.windows.create()</a></dt>
   <dd>Creates a new browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-windows-getAll">opera.extension.windows.getAll()</a></dt>
   <dd>Obtains a group of windows (window collection).</dd>
   
   <dt><a href="/articles/view/extensions-api-windows-getLastFocused">opera.extension.windows.getLastFocused()</a></dt>
   <dd>Obtains the currently selected browser window, if any.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-insert">BrowserWindow.insert()</a></dt>
   <dd>Inserts a tab or tab group into a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-close">BrowserWindow.close()</a></dt>
   <dd>Closes a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-focus">BrowserWindow.focus()</a></dt>
   <dd>Gives focus to a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-update">BrowserWindow.update()</a></dt>
   <dd>Updates the properties of a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-id">BrowserWindow.id</a></dt>
   <dd>A unique identifier for the browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-closed">BrowserWindow.closed</a></dt>
   <dd>Gets the closed state of the browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-focused">BrowserWindow.focused</a></dt>
   <dd>Gets and sets the focused state of the browser window.</dd>
   
   <!--<dt><a href="/articles/view/extensions-api-window-parent">BrowserWindow.parent</a></dt>
   <dd>Gets the parent window, if any.</dd>-->
   
   <dt><a href="/articles/view/extensions-api-window-private">BrowserWindow.private</a></dt>
   <dd>Gets and sets the private state of the browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-tabGroups">BrowserWindow.tabGroups</a></dt>
   <dd>Gets a window tab group manager.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-tabs">BrowserWindow.tabs</a></dt>
   <dd>Gets a window tab manager.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-height">BrowserWindow.height</a></dt>
   <dd>Sets the height of a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-width">BrowserWindow.width</a></dt>
   <dd>Sets the width of a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-top">BrowserWindow.top</a></dt>
   <dd>Sets the top offset of a browser window.</dd>
   
   <dt><a href="/articles/view/extensions-api-window-left">BrowserWindow.left</a></dt>
   <dd>Sets the left offset of a browser window.</dd>
</dl>
    
<h2 id="tabgroups">Tab Groups</h2>
<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-tabGroups-create">opera.extension.tabGroups.create()</a></dt>
   <dd>Creates a new tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroups-getAll">opera.extension.tabGroups.getAll()</a></dt>
   <dd>Obtains a group of tab groups (tab group collection).</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-close">BrowserTabGroup.close()</a></dt>
   <dd>Closes a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-focus">BrowserTabGroup.focus()</a></dt>
   <dd>Gives focus to a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-insert">BrowserTabGroup.insert()</a></dt>
   <dd>Inserts a tab into a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-update">BrowserTabGroup.update()</a></dt>
   <dd>Updates the properties of a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-id">BrowserTabGroup.id</a></dt>
   <dd>Gets a unique identifier for a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-closed">BrowserTabGroup.closed</a></dt>
   <dd>Gets the closed state of a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-collapsed">BrowserTabGroup.collapsed</a></dt>
   <dd>Gets or sets the collapsed state of a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-browserWindow">BrowserTabGroup.browserWindow</a></dt>
   <dd>Gets a tab group&#39;s context window.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-tabs">BrowserTabGroup.tabs</a></dt>
   <dd>Gets all open tabs within a tab group.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabGroup-position">BrowserTabGroup.position</a></dt>
   <dd>Gets the position of a tab group.</dd>
</dl>
    
<h2 id="tabs">Tabs</h2>
<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-tabs-create">opera.extension.tabs.create()</a></dt>
   <dd>Creates a new tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tabs-getAll">opera.extension.tabs.getAll()</a></dt>
   <dd>Obtains a group of tabs (tab collection).</dd>
   
   <dt>opera.extension.tabs.getFocused()</dt>
   <dd>An alias for <a href="/articles/view/extensions-api-tabs-getSelected">opera.extension.tabs.getSelected()</a></dd>
   
   <dt><a href="/articles/view/extensions-api-tabs-getSelected">opera.extension.tabs.getSelected()</a></dt>
   <dd>Obtains the currently selected tab, if any.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-close">BrowserTab.close()</a></dt>
   <dd>Closes a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-focus">BrowserTab.focus()</a></dt>
   <dd>Gives focus to a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-update">BrowserTab.update()</a></dt>
   <dd>Updates the properties of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-id">BrowserTab.id</a></dt>
   <dd>Gets a unique identifier for a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-closed">BrowserTab.closed</a></dt>
   <dd>Gets the closed state of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-locked">BrowserTab.locked</a></dt>
   <dd>Gets and sets the locked state of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-private">BrowserTab.private</a></dt>
   <dd>Gets and sets the privacy mode of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-selected">BrowserTab.selected</a></dt>
   <dd>Gets the selected state of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-readyState">BrowserTab.readyState</a></dt>
   <dd>Gets the <a href="http://www.w3.org/TR/html5/dom.html#current-document-readiness">current document readiness</a> of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-faviconUrl">BrowserTab.faviconUrl</a></dt>
   <dd>Gets the URL of a tab&#39;s favicon.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-title">BrowserTab.title</a></dt>
   <dd>Gets the title of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-url">BrowserTab.url</a></dt>
   <dd>Gets and sets the url of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-browserWindow">BrowserTab.browserWindow</a></dt>
   <dd>Gets a tab&#39;s context window.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-tabGroup">BrowserTab.tabGroup</a></dt>
   <dd>Gets the tab group for a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-position">BrowserTab.position</a></dt>
   <dd>Gets the position of a tab.</dd>
   
   <dt><a href="/articles/view/extensions-api-tab-focused">BrowserTab.focused</a></dt>
   <dd>Sets the focused state of a tab.</dd>
</dl>

<h2>Overview</h2>

<p>A <b>browser window</b> is a graphical user-interface component that can contain zero or more browser tabs or browser tab groups. Each browser window has an associated tab collection and tab group collection. A browser window is the context window of each browser tab and browser tab group within its associated tab collection and tab group collection, respectively. A collection of browser windows is referred to as a window collection.</p>

<p>A <b>browser tab group</b> is a graphical user-interface component contained within a browser window that can contain zero or more browser tabs. Each browser tab group has an associated tab collection and is associated with a context window. A browser tab group is the context tab group of each browser tab within its associated tab collection. A collection of browser tab groups is referred to as the tab group collection.</p>

<p>A <b>browser tab</b> is a graphical user-interface component that represents a single page contained within a browser window. Each browser tab is associated with a browser window and might be associated with a browser tab group. A user can switch between browser tabs to access different pages. Selecting a browser tab brings that page into focus. A collection of browser tabs is referred to as the tab collection.</p>

<h2>Example</h2>

<p>The following example adds a button the browser toolbar. Clicking the button creates a tab group in a collapsed state containing two tabs. Each tab has a specified URL and one of them is a private tab.</p>

<pre><code>&lt;!-- 
  The configuration file (&#39;config.xml&#39;).
--&gt;
&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/testextension&quot; defaultlocale=&quot;en&quot;&gt;
&lt;name&gt;Windows &amp; Tabs test extension&lt;/name&gt;
  &lt;description&gt;A test extension that opens a tab group containing two tabs.&lt;/description&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt;
  &lt;icon src=&quot;images/icon_18.png&quot;/&gt;
&lt;/widget&gt;</code></pre>    

<pre><code>//
// The background process (e.g. index.html)
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Tab creation test&quot;,
  icon: &quot;images/icon_18.png&quot;,
  onclick: function() {
    // Create two tabs with specified URLs
    var tab1 = opera.extension.tabs.create({url: &#39;http://dev.opera.com/&#39;});
    var tab2 = opera.extension.tabs.create({url: &#39;http://www.operamail.com/&#39;, private: true});
    
    // Create a tab group containing the above two tabs
    var tabGroup = opera.extension.tabGroups.create([tab1, tab2], {collapsed: true});
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );    
opera.contexts.toolbar.addItem(button);</code></pre>

