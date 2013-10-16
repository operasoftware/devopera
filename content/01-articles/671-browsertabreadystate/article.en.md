Title: BrowserTab.readyState
----
Date: 2012-04-25 06:06:33
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

<p>The readonly <code>readyState</code> attribute exposes the <a href="http://www.w3.org/TR/html5/dom.html#current-document-readiness">current document readiness</a> of the page within the browser tab.</p>

<p>An HTML or XML file has its current document readiness set to <code>loading</code> when it is created, and <code>complete</code> when the file has finished loading. When the value is set by the browser or other user agent, a simple event called <code>readystatechange</code> is fired on the <code>Document</code> object.</p>

<h2>Syntax:</h2>

<p><code>readonly DOMString readyState // maps to document.readyState</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. Then, a new tab is created and given focus. When the tab&#39;s page has finished loading, the button&#39;s badge turns green.</p>

<pre><code>//
// The background process (e.g. index.html) 
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;,
  badge: {
    backgroundColor: &#39;#cc0000&#39;,
    color: &#39;#ffffff&#39;,
    textContent: &#39;-&#39;
  }
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);

// Create a new tab and give it focus
var tab = opera.extension.tabs.create({url: &#39;http://dev.opera.com/&#39;, focused: true});

// Start a timed loop
var loop = setInterval(function() {
    
  // When the page has finished loading, turn the badge green
  if (tab.readyState === &#39;complete&#39;) {
    button.badge.backgroundColor = &#39;#00cc00&#39;;
    button.badge.textContent = &#39;✓&#39;;
    
    // Don&#39;t forget to stop the loop
    clearInterval(loop);
  }
}, 100);</code></pre>

