Title: Badge.color
----
Date: 2011-12-06 07:22:15
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

<p>The color of the text of the badge; accepts hexadecimal notation, RGBA and color name values (e.g., <code>#afafaf</code>, <code>(200, 200, 200, 0)</code>, <code>blue</code>).</p>

<h2>Example:</h2>

<pre><code>//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Test Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
  badge: {
    backgroundColor: &#39;#5566ff&#39;,
    color: &#39;white&#39;,
    textContent: &#39;42&#39;
  }
};	

// Add the button to the browser UI
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Change the badge&#39;s font color each time the button is clicked
var i = 1; 
button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  var fontColor = (i % 2) ? &#39;#ffffff&#39; : &#39;#000000&#39;;
  button.badge.color = fontColor;
  i++;
}</code></pre>


