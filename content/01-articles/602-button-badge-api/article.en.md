Title: Button & Badge API
----
Date: 2011-12-06 07:17:16
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
   <dt><a href="/articles/view/extensions-api-toolbar-createItem">opera.contexts.toolbar.createItem()</a></dt>
   <dd>Creates a button that can be added to the browser toolbar.</dd>

   <dt><a href="/articles/view/extensions-api-toolbar-addItem">opera.contexts.toolbar.addItem()</a></dt>
   <dd>Adds a button to the toolbar in the browser. To create a button see the createItem() method.</dd>

   <dt><a href="/articles/view/extensions-api-toolbar-removeItem">opera.contexts.toolbar.removeItem()</a></dt>
   <dd>Removes a given button from the toolbar in the browser.</dd>
   
   <dt><a href="/articles/view/extensions-api-toolbar-length">opera.contexts.toolbar.length</a></dt>
   <dd>The number of buttons that exist in the toolbar for this extension (0 or 1).</dd>
   
   <dt><a href="/articles/view/extensions-api-button-badge">Button.badge</a></dt>
   <dd>A read-only property representing the badge for a button.</dd>
   
   <dt><a href="/articles/view/extensions-api-button-disabled">Button.disabled</a></dt>
   <dd>A read-only property indicating whether a button is disabled. Set to false by default (meaning the item is enabled).</dd>
   
   <dt><a href="/articles/view/extensions-api-button-icon">Button.icon</a></dt>
   <dd>A read-only representation of the icon for a button.</dd>
   
   <dt><a href="/articles/view/extensions-api-button-onclick">Button.onclick</a></dt>
   <dd>Represents the function executed when the button is clicked.</dd>
   
   <dt><a href="/articles/view/extensions-api-button-popup">Button.popup</a></dt>
   <dd>A read-only property representing the popup file path for a button.</dd>
   
   <dt><a href="/articles/view/extensions-api-button-title">Button.title</a></dt>
   <dd>The title of a button which is exposed to the user (e.g., as a tooltip when hovering over the item with a mouse).</dd>
   
   <dt><a href="/articles/view/extensions-api-button-addEventListener">Button.addEventListener()</a></dt>
   <dd>Listen for events dispatched on a button.</dd>
   
   <dt><a href="/articles/view/extensions-api-button-removeEventListener">Button.removeEventListener()</a></dt>
   <dd>Removes a listener from receiving an event.</dd>
   
   <dt><a href="/articles/view/extensions-api-badge-backgroundColor">Badge.backgroundColor</a></dt>
   <dd>The background color for a badge.</dd>
   
   <dt><a href="/articles/view/extensions-api-badge-color">Badge.color</a></dt>
   <dd>The text color of a badge.</dd>
   
   <dt><a href="/articles/view/extensions-api-badge-display">Badge.display</a></dt>
   <dd>Determines whether a badge should be displayed.</dd>
   
   <dt><a href="/articles/view/extensions-api-badge-textContent">Badge.textContent</a></dt>
   <dd>The text that will be shown in a badge.</dd>
</dl>

<h2>Overview</h2>

<p class="separator clear">The browser toolbar API is part of the background process API. This part deals with the browser toolbar context, which allows the creation and manipulation of buttons, badges, and popup windows.
    </p>

<h2>Example</h2>

<p>Below is a simple example that adds a button to the browser toolbar. It will show a popup window when clicked (showing the local file &#39;popup.html&#39;) and update the badge to reflect how many times the button has been clicked.</p>

<pre><code>//
// The background process (e.g. index.html)
//

var properties = {
  disabled: false,
  title: &quot;My Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
  popup: {
    href: &#39;popup.html&#39;, 
    width: 100, 
    height: 100 
  },
  badge: {
    display: &#39;block&#39;,
    backgroundColor: &#39;#5566ff&#39;,
    color: &#39;#ffffff&#39;,
    textContent: &#39;0&#39;
  }
};	

// Create and add the button to the toolbar
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Update the button badge on button click
var i = 1; 
button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  // If clicked more than five times, show &#39;5+&#39; in the badge
  var badgeText = (i &gt; 5) ? &#39;5+&#39; : i;

  // Update badge text
  button.badge.textContent = badgeText;

  // Update the button title
  button.title = &quot;You&#39;ve clicked the button &quot; + i + &quot; time(s)&quot;; 

i++;
}</code></pre>	
