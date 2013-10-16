Title: Button.popup
----
Date: 2011-12-06 07:34:38
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

<p>This property represents the <code>Popup</code> for the <code>Button</code>. Calling <code>Button.popup</code> will return the popup object. You can also get and set the popup properties directly through the <code>Button</code> object (e.g. to set the popup width you can do &#39;<code>button.popup.width = 300</code>&#39;)</p>

<h2>Example:</h2>

<p>The below example shows a popup when the button is clicked. The content of the popup changes between one of three websites each time the popup is diplayed.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
  popup: {
    href: &#39;popup.html&#39;, 
    width: 300 
  }
};	

// Create the button and add it to the browser UI
var button = opera.contexts.toolbar.createItem(properties);
opera.contexts.toolbar.addItem(button);

// Get the popup object to set the height property
var popup = button.popup;
popup.height = 400; 

// Open a site randomly in the popup when the button is clicked
var randomSites = [&#39;http://touch.facebook.com&#39;, &#39;http://mobile.twitter.com&#39;, &#39;http://m.opera.com/&#39;];
var i = 1; 
button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick(){
  // Circle through the sites on each click
  button.popup.href = randomSites[i % 3];
  i++;
}</code></pre>


