Title: Badge.backgroundColor
----
Date: 2011-12-06 07:21:17
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

<p>The background color for the badge; accepts hexadecimal notation, RGBA, and color name values (e.g., #afafaf, (200, 200, 200, 0), blue).</p>

<h2>Example:</h2>

<pre><code>//
// The background process (index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Test Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
  badge: {
    backgroundColor: &#39;blue&#39;,
    color: &#39;#ffffff&#39;,
    textContent: &#39;42&#39;
  }
};	

// Add the button to the browser UI
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Change the background color of the badge with each button click
var i = 1; 
button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  var badgeColor = (i % 2) ? &#39;#5566ff&#39; : &#39;#cc5555&#39;;
  button.badge.backgroundColor = badgeColor;	
  i++;
}</code></pre>


