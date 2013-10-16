Title: Opera extension code examples
----
Date: 2010-10-29 12:22:54
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Contents</h2>
<ul>
	<li><a href="#intro">Introduction</a></li>
	<li><a href="#overview">Opera extension overview</a></li>
	<li><a href="#examples">Get to the code already!</a></li>
	<ul>
		<li><a href="#make-a-button">Example 1: Make a button</a></li>
		<li><a href="#make-a-popup">Example 2: Make the button open popup window</a></li>
		<li><a href="#add-a-badge">Example 3: Add a badge to a button</a></li>
		<li><a href="#add-a-badge-messaging">Example 4: Add a badge that reflects a page action</a></li>
                <li><a href="#run-injected-script">Example 5: Make a button that executes page-related code</a></li>
	</ul>
	<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2 id="intro">Introduction</h2>
<p>Many people find it easier to learn by example, so here are some snippets of code that create Opera extensions with basic functionality. Depending on what you&#39;d like to create, you can choose one or more of these examples to use as the basis for your own extension.</p>

<h2 id="overview">Opera extension overview</h2>
<p>We have more in-depth articles that <a href="http://dev.opera.com/articles/view/introduction-to-opera-extensions/">introduce Opera extensions</a> and <a href="http://dev.opera.com/articles/view/opera-extension-architecture/">explain their structure</a>, but here&#39;s a quick refresher.</p>
<p>As proponents for open web standards, it&#39;s only natural that we chose an existing W3C specification for Opera extensions&#x2014;the Widget Packaging specification. This consists of web files (HTML, JavaScript, CSS, etc.) together with a <code>config.xml</code> file, all compressed as a zip file. The only difference is that widgets are renamed with a <code>.wgt</code> extension and Opera extensions are renamed with a <code>.oex</code> extension.</p>
<p>Opera extensions can do two things:</p>
	<ol>
		<li>Extend the browser UI and functionality</li>
		<li>Read and locally edit web pages</li>
	</ol>
<p>Consequently an Opera extension can be thought of as having two parts, as seen in the diagram below:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/391-opera-extension-code-examples/opera-extension-structure.png" width="446" height="313" alt="The two basic parts of an Opera extension and how they communicate." /><div class="comment">The two basic parts of an Opera extension and how they communicate.</div></p>
<p>Browser-related code does things such as adding a button to the toolbar or creating a popup window. Page-related code, kept inside an <code>includes</code> directory, is used for reading or changing web pages that the user is viewing. The two types of code can communicate with each other using <code>postMessage()</code> methods and <code>onmessage</code> events.</p>
<h2 id="examples">Get to the code already!</h2>
<p class="note">Please note that all the examples below have a similar <code>config.xml</code> file and <code>index.html</code> file that just calls a <code>background.js</code> script. If you&#39;d like to examine these, please download and unzip each example extension.</p>

<h3 id="make-a-button">Example 1: Make a button</h3>
<p>Firstly, a very basic example that simply adds a button to Opera&#39;s toolbar. When you click on the button, a message is printed in the browser&#39;s error console.</p>
<pre><code>// background.js
// Add a button to Opera&#39;s toolbar when the extension loads.
window.addEventListener(&quot;load&quot;, function() {
  // Buttons are members of the UIItem family.
  // Firstly we set some properties to apply to the button.
  var UIItemProperties = {
    disabled: false, // The button is enabled.
    title: &quot;Button example&quot;, // The tooltip title.
    icon: &quot;icon_18.png&quot;, // The icon (18x18) to use for the button.
    onclick: function() {
      // Let&#39;s output a message to the error console.
      window.opera.postError(&#39;&quot;Button example&quot; clicked.&#39;);
    }
  };

  // Next, we create the button and apply the above properties.
  var button = opera.contexts.toolbar.createItem(UIItemProperties);
  // Finally, we add the button to the toolbar.
  opera.contexts.toolbar.addItem(button);
}, false);</code></pre>
<p><a href="make-a-button.oex">Download this example extension.</a></p>

<h3 id="make-a-popup">Example 2: Make the button open popup window</h3>
<p>As well as the <code>background.js</code> script, we need an HTML file which will be displayed in the popup window.</p>
<pre><code>// background.js
// Add a button to Opera&#39;s toolbar when the extension loads.
window.addEventListener(&quot;load&quot;, function() {
  // Buttons are members of the UIItem family.
  // Firstly we set some properties to apply to the button.
  var UIItemProperties = {
    disabled: false, // The button is enabled.
    title: &quot;Popup example&quot;, // The tooltip title.
    icon: &quot;icon_18.png&quot;, // The icon (18x18) to use for the button.
    popup: {
      href: &quot;popup.html&quot;,
      width: &quot;500px&quot;,
      height: &quot;500px&quot;
    }
  };

  // Next, we create the button and apply the above properties.
  var button = opera.contexts.toolbar.createItem(UIItemProperties);
  // Finally, we add the button to the toolbar.
  opera.contexts.toolbar.addItem(button);
}, false);</code></pre>
<pre><code>&lt;!-- popup.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Popup example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hey, whassup! I&#39;m a popup.&lt;/h1&gt;
  &lt;div&gt;Congratulations, this extension is working.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p><a href="make-a-button-open-a-popup.oex">Download this example extension.</a></p>

<h3 id="add-a-badge">Example 3: Add a badge to a button</h3>
<p>A badge is a useful feature that can dynamically display text in your extension&#39;s button. You could use it for, e.g. displaying the number of unread Tweets or blog posts since the user last checked. In this example, we&#39;ll add a function that increases the number shown on the badge every time its button is clicked.</p>
<pre><code>// background.js
// Add a button to Opera&#39;s toolbar when the extension loads.
window.addEventListener(&quot;load&quot;, function() {
  // Buttons are members of the UIItem family.
  // Firstly we set some properties to apply to the button.
  var UIItemProperties = {
    disabled: false, // The button is enabled.
    title: &quot;Button badge example&quot;, // The tooltip title.
    icon: &quot;icon_18.png&quot;, // The icon (18x18) to use for the button.
    onclick: updateBadge,
    badge: {
      textContent: &#39;0&#39;,
      backgroundColor: &#39;#006&#39;,
      color: &#39;#ff6&#39;,
      display: &#39;block&#39;
    }
  };

  // Next, we create the button and apply the above properties.
  var button = opera.contexts.toolbar.createItem(UIItemProperties);
  // Finally, we add the button to the toolbar.
  opera.contexts.toolbar.addItem(button);
    
  // Increase the number on the badge by one
  function updateBadge() {
    button.badge.textContent = parseInt(button.badge.textContent) + 1;
  }
}, false);</code></pre>
<p><a href="add-a-badge-to-a-button.oex">Download this example extension.</a></p>

<h3 id="add-a-badge-messaging">Example 4: Add a badge that reflects a page action</h3>
<p>Next, we&#39;ll use the messaging system between browser-related code and page-related code. To set this up, we need a directory named <code>includes</code> in which we create a JavaScript file&#x2014;<code>base.js</code> in this case but it could be named anything. Incidentally, this file is known as an injected script because it affects pages in the user&#39;s environment but not on the web server.</p>
<pre><code>// background.js
// Add a button to Opera&#39;s toolbar when the extension loads.
window.addEventListener(&#39;load&#39;, function() {
  // Buttons are members of the UIItem family.
  // Firstly we set some properties to apply to the button.
  var UIItemProperties = {
    disabled: false, // The button is enabled.
    title: &#39;Page interaction example&#39;, // The tooltip title.
    icon: &#39;icon_18.png&#39;, // The icon (18x18) to use for the button.
    badge: {
      textContent: &#39;0&#39;,
      backgroundColor: &#39;#006&#39;,
      color: &#39;#ff6&#39;,
      display: &#39;block&#39;
    }
  };

  // Next, we create the button and apply the above properties.
  var button = opera.contexts.toolbar.createItem(UIItemProperties);
  // Finally, we add the button to the toolbar.
  opera.contexts.toolbar.addItem(button);
    
  // Listen for messages from the UserJS.
  opera.extension.onmessage = function(event){
    window.opera.postError(&#39;Received message from base.js&#39;);
    if (event.data === &#39;LOAD&#39;) {
      button.badge.textContent = parseInt(button.badge.textContent) + 1;
    }
  }
}, false);</code></pre>
<pre><code>// includes/base.js
// Background scripts can&#39;t directly interact with web pages.
// To solve this, we create this UserJS to send messages to the background script.
window.addEventListener(&#39;load&#39;, function(){
  window.opera.postError(&#39;Sending message to background.js&#39;);
  opera.extension.postMessage(&#39;LOAD&#39;);
}, false);</code></pre>
<p><a href="add-a-badge-that-reflects-a-page-action.oex">Download this example extension.</a></p>

<h3 id="run-injected-script">Example 5: Make a button that executes page-related code</h3>
<p>Finally we&#39;ll add an action to our button so that page-related code is only executed when the button is clicked. In this case, text within the page&#39;s body will increase in size. This example also uses messaging but in the opposite direction to the previous example.</p>
<pre><code>// Add a button to Opera&#39;s toolbar when the extension loads.
window.addEventListener(&quot;load&quot;, function() {
  // Buttons are members of the UIItem family.
  // Firstly we set some properties to apply to the button.
  var UIItemProperties = {
    disabled: true, // The button is disabled.
    title: &quot;Button &amp; injected script example&quot;, // The tooltip title.
    icon: &quot;icon_18.png&quot;, // The icon (18x18) to use for the button.
    onclick: function() {
      // Send a message to the currently-selected tab.
      var tab = opera.extension.tabs.getFocused();
      if (tab) { // Null if the focused tab is not accessible by this extension
        tab.postMessage(&#39;go&#39;);
      }
    }
  };

  // Next, we create the button and apply the above properties.
  var button = opera.contexts.toolbar.createItem(UIItemProperties);
  // Finally, we add the button to the toolbar.
  opera.contexts.toolbar.addItem(button);
    
  function enableButton() {
    var tab = opera.extension.tabs.getFocused();
    if (tab) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
	
  // Enable the button when a tab is ready.
  opera.extension.onconnect = enableButton;
  opera.extension.tabs.onfocus = enableButton;
  opera.extension.tabs.onblur = enableButton;
}, false);</code></pre>
<pre><code>// This script is only executed once the page has loaded.
window.addEventListener(&#39;load&#39;, function(event) {
  // Set a toggle so we can switch the style change on and off.
  var toggle = false;

  // Get the body&#39;s current style object and the property we want to edit.
  var body_style = (window.document.body) ? window.document.body.style : false;
  var original = (body_style) ? body_style.fontSize : &#39;1em&#39;;

  // Execute this when a message is received from the background script.
  opera.extension.onmessage = function(event) {
    if (!toggle &amp;&amp; body_style) {
      body_style.fontSize = &#39;1.4em&#39;;
      toggle = true;
    } else if (body_style) {
      body_style.fontSize = original;
      toggle = false;
    }
  };
}, false);</code></pre>
<p><a href="make-a-button-run-injected-script.oex">Download this example extension.</a></p>

<h2 id="conclusion">Conclusion</h2>
<p>Hopefully these examples provide a good foundation for you to build on. Of course, there may be different ways of achieving the same result so feel free to develop extensions using the method most appropriate for you and your users. Lastly, if you&#39;re stuck for ideas for your extension, have a look at the <a href="http://my.opera.com/community/forums/topic.dml?id=776842">Opera extensions wishlist</a> for inspiration.</p>
