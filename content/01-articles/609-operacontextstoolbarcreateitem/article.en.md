Title: opera.contexts.toolbar.createItem()
----
Date: 2011-12-06 07:29:31
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

<p>This method creates a <code>Button</code> from a given property object. <strong>Note:</strong> The item can only be used within the <code>ToolbarContext</code> that it is created in.</p>

<h2>Parameters:</h2>

<ul>
    <li><code>properties</code>: The <code>ButtonProperties</code> to use when creating the <code>Button</code>.</li>
</ul>

<p>The available properties include:</p>

<ul>
    <li><a href="/articles/view/extensions-api-button-badge">badge</a></li>
    <li><a href="/articles/view/extensions-api-button-disabled">disabled</a></li>
    <li><a href="/articles/view/extensions-api-button-icon">icon</a></li>
    <li><a href="/articles/view/extensions-api-button-onclick">onclick</a></li>
    <li><a href="/articles/view/extensions-api-button-popup">popup</a></li>
    <li><a href="/articles/view/extensions-api-button-title">title</a></li>
</ul>

<h2>Syntax:</h2>

<p><code>Button createItem (&lt;ButtonProperties&gt; properties)</code></p>

<h2>Example:</h2>

<p>The below button would include a badge (saying &#39;42&#39;) and display a popup window when clicked. </p>

<p>Note that buttons must be defined in the background process (e.g. in index.html) in order to work.</p>

<pre><code>//
// The background process (e.g. index.html)
//

var i = 0; // count the number of times the button get clicked

// The button properties
var properties = {
  disabled: false,
  title: &quot;My Extension&quot;,
  icon: &quot;icon.18x18.png&quot;,
  onclick: function() {
    i++; // counting how often the button is clicked
  },
  popup: {
    href: &#39;popup.html&#39;, 
    width: 100, 
    height: 100 
  },
  badge: {
    display: &#39;block&#39;,
    backgroundColor: &#39;#5566ff&#39;,
    color: &#39;#ffffff&#39;,
    textContent: &#39;42&#39;
  }
};

// Create the button
var button = opera.contexts.toolbar.createItem(properties);</code></pre>

<p>You can also define the properties on the fly when creating the button:</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Create a button
var button = opera.contexts.toolbar.createItem({
  title: &#39;Weather Extension&#39;,
  icon: &#39;yr.png&#39;
});</code></pre>


