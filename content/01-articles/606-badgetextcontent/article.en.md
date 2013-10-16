Title: Badge.textContent
----
Date: 2011-12-06 07:24:54
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

<p>The text that will be shown in the badge; this may overflow the visual space provided which is usually around four characters.</p>

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
    backgroundColor: &#39;#5566FF&#39;,
    color: &#39;white&#39;,
    textContent: &#39;0&#39;
  }
};	

// Add the button to the browser UI
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Set the button&#39;s click handler
var i = 1; 
button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  // If clicked more than five times, show &#39;5+&#39; in the badge
  var badgeText = (i &gt; 5) ? &#39;5+&#39; : i;

  // Update the badge text
  button.badge.textContent = badgeText;

  // Update the button title
  button.title = &quot;You&#39;ve clicked the button &quot; + i + &quot; time(s)&quot;; 

  i++;
}</code></pre>
//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: 
