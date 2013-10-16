Title: Popup API
----
Date: 2011-12-06 06:05:20
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

<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-popup-height">Popup.height</a></dt>
   <dd>The height of the popup window.</dd>
   
   <dt><a href="/articles/view/extensions-api-popup-href">Popup.href</a></dt>
   <dd>A URL reference to the page to pop up; this page will pop up when the user clicks on an <code>ExtensionUIItem</code>, e.g. a button.</dd>
   
   <dt><a href="/articles/view/extensions-api-popup-width">Popup.width</a></dt>
   <dd>The width of the popup window.</dd>
   
   <dt><a href="/articles/view/extensions-api-popup-onmessage">opera.extension.onmessage</a></dt>
   <dd>This event is fired when a message is received from the <code>BackgroundProcess</code>.</dd>
   
   <dt><a href="/articles/view/extensions-api-popup-postMessage">opera.extension.postMessage()</a></dt>
   <dd>This method is used to post a message to the <code>BackgroundProcess</code> of the extension.</dd>
   
   <dt><a href="/articles/view/extensions-api-popup-addEventListener">opera.extension.addEventListener()</a></dt>
   <dd>Registers a listener for an event specific to the popup window.</dd>
   
   <dt><a href="/articles/view/extensions-api-popup-removeEventListener">opera.extension.removeEventListener()</a></dt>
   <dd>Removes an existing listener from an event.</dd>
</dl>


<h2>Overview</h2>

<p>An extension&#39;s toolbar button can easily be programmed to open a popup window. This popup window displays the contents of an HTML file and is closed by the user clicking again on the toolbar button. There are a few attributes and methods specific to this popup, detailed below. <b>Note:</b> Although messaging can be used to communicate with the background process, you will probably find it easier to use the <code>bgProcess</code> object.</p>

<h2>Example</h2>

<p>Add a button to the toolbar. When the button is clicked, popup.html opens in a popup window and sends a message to the extension&#39;s background script. When the message is received, a badge appears within the toolbar button.</p>
    
<pre><code>//
// The background process (e.g. &#39;/background.js&#39;). 
//

// Set options for the button
var UIItemProperties = {
  disabled: false,
  title: &#39;Opera Extension&#39;,
  icon: &#39;images/icon_18.png&#39;,
  popup: {
    href: &#39;popup.html&#39;,
    width: 500,
    height: 400
  },
  badge: {}
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(UIItemProperties);
opera.contexts.toolbar.addItem(button);

// Check for incoming messages
opera.extension.onmessage = function(event) {
  button.badge.textContent = &#39;+&#39;;
};</code></pre>

<pre><code>//
// The popup script (e.g. &#39;/popup.js&#39;). 
//

window.addEventListener(&#39;DOMContentLoaded&#39;, function() { 
  opera.extension.postMessage(&#39;Message from popup.&#39;);
  document.write(&#39;Message sent from popup&#39;);
}, false);</code></pre>
opera.extension.onmessage
