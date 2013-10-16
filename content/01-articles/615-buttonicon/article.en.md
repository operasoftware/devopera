Title: Button.icon
----
Date: 2011-12-06 07:38:05
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

<h2>Description</h2>

<p>This property represents the icon for the <code>Button</code>. It can reference the relative path to a data URI, an image located inside the package, or it can point to an external URL.</p>

<h2>Example:</h2>

<p>The below example changes the button icon on each click.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Create a button and add it to the browser UI
var properties = {
  title: &quot;My Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
};	
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Track how many times the button has been clicked
var i = 1;

// Handle button clicks
button.addEventListener(&#39;click&#39;, handleClick, false);

// Change the icon to &#39;icon2&#39; every time the click count is an even number
function handleClick() {
  if (i % 2 == 1) {
    button.icon = &quot;icon2.18x18.png&quot;;
  } else {
    button.icon = &quot;icon.18x18.png&quot;;
  }

  // Increase the click count
  i++;						
}</code></pre>


