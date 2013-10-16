Title: Button.badge
----
Date: 2011-12-06 07:39:44
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

<p>This property represents the <code>Badge</code> for the button.</p>

<h2>Example:</h2>

<p>You can reference and update the badge properties directly from the button object (e.g. <code>button.badge.textContent = 42</code>) or through the badge object.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Create a button
var button = opera.contexts.toolbar.createItem({
  title:&#39;My Extension&#39;,
  icon:&#39;icon.18x18.png&#39;,
  badge: {}
});

// Add it to the browser UI
opera.contexts.toolbar.addItem(button);

// Set the badge and the font colors
var badge = button.badge; 
badge.backgroundColor = &#39;#5566ff&#39;;
badge.color = &quot;#ffffff&quot;;

// Update badge properties directly through the button object
button.badge.textContent = 42;

// Get the background color?
var badgeColor = button.badge.backgroundColor; // this was set to &#39;#5566ff&#39; above</code></pre>


