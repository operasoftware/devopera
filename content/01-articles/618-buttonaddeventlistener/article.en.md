Title: Button.addEventListener()
----
Date: 2011-12-06 07:41:07
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

<p>This method is used to listen for events being dispatched.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>type</code>: Type of event; allowed values are: <code>click</code> and <code>remove</code>.</li>
    <li><code>eventListener</code>: The function that is executed when the event occurs.</li>
    <li><code>useCapture</code>: Boolean, and should be kept as <code>false</code> for now. <strong>Note:</strong> this value currently has no purpose.</li>
</ul>
    
<h2>Syntax:</h2>

<p><code>void addEventListener(&lt;DOMString&gt; type, eventListener, &lt;boolean&gt; useCapture)</code></p>

<h2>Example:</h2>

<pre><code>//
// The background process (e.g. index.html)
//

// Set the button&#39;s properties
var properties = {
  disabled: false,
  title: &quot;My Test Extension&quot;,
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
}
</code></pre>
