Title: BrowserWindow.height
----
Date: 2012-04-26 03:07:14
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

<p>When specified as an item in a <code>BrowserWindowProperties</code> object, the <code>height</code> property specifies the desired height of a browser window.</p>

<p>When <b>creating</b> a browser window, if this property is not specified the browser&#39;s default height is used.</p>

<p>When <b>updating</b> a browser window, if this property is not specified the default behaviour is to leave the height unchanged.</p>

<h2>Syntax:</h2>

<p><code>unsigned long height</code></p>

<h2>Example:</h2>

<p>The following example creates a button on the browser toolbar. When the button is clicked, a new window is created with the specified height, width, top offset and left offset.</p>

<pre><code>//
// The background process (e.g. index.html)
//

// Specify the properties of the button before creating it.
var UIItemProperties = {
  disabled: false,
  title: &quot;Example extension&quot;,
  icon: &quot;images/icon_18.png&quot;
};

// Create the button and add it to the toolbar.
var button = opera.contexts.toolbar.createItem( UIItemProperties );  
opera.contexts.toolbar.addItem(button);

button.addEventListener(&#39;click&#39;, handleClick, false);

function handleClick() {
  // Set the properties for the window
  var windowProps = {
    height: 600,
    width: 400,
    top: 50,
    left: 100
  }
  
  // Create a new window using the specified properties
  opera.extension.windows.create({}, windowProps);
}</code></pre>

