Title: Popup.height
----
Date: 2011-12-06 06:07:24
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

<p>The height of the popup window; by default, the height is 300px. Note that this attribute is set in the background script as part of the ToolbarUIItemProperties object. See the <a href="/articles/view/extensions-api-browser-toolbar">Browser Toolbar guide</a>.	</p>

<h2>Syntax:</h2>

<p><code>Number height</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (e.g. &#39;/background.js&#39;). 
//

// Set options for the button
var UIItemProperties = {
  disabled: false,
  title: &#39;Opera Extension&#39;,
  icon: &#39;images/icon_18.png&#39;,
  popup: {
    href: &#39;popup.html&#39;
  }
};

// Set the popup&#39;s height to 480 pixels
UIItemProperties.popup.height = 480;

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(UIItemProperties);
opera.contexts.toolbar.addItem(button);</code></pre>


