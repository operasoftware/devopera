Title: Button.title
----
Date: 2011-12-06 07:32:41
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

<p>This property represents the <code>title</code> of the button (which is also visible as a tooltip when hovering over the button with a mouse).</p>

<h2>Example:</h2>

<p>Change the title of the button on each click.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Extension&quot;,
  icon: &quot;icon.18x18.png&quot;
};	

// Add the button to the browser UI
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Update the button title each time the button is clicked
var i = 1; 
button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  button.title = &quot;You&#39;ve clicked the button &quot; + i + &quot; time(s)&quot;; 
  i++;
}</code></pre>


