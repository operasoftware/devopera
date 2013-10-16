Title: Opera extensions: buttons, badges and popups
----
Date: 2010-10-21 09:09:05
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

<p>This article explains the ins and outs of how to create and manage toolbar buttons, and their various components. All toolbar items have to be defined and manipulated as part of the background process. They cannot be defined or manipulated directly in the injected script or popup window. Buttons, badges and popups are controlled by <code>opera.contexts.toolbar</code>, the details of which can be found in the <a href="http://dev.opera.com/articles/view/extensions-api-browser-toolbar/">Button &amp; Badge API Guide</a>. </p>

<h2>Contents</h2>
<ul>
<li><a href="#toolbar_buttons">Toolbar buttons</a></li>
<li><a href="#create_buttons">Creating buttons</a></li>
<li><a href="#adding_button">Adding the button to the toolbar</a></li>
<li><a href="#removing_button">Removing the button from the toolbar</a></li>
<li><a href="#create_popup">Creating a popup</a></li>
<li><a href="#popup_contents">Popup contents</a></li>
<li><a href="#popup_dimensions">Popup dimensions</a></li>
<li><a href="#creating_badge">Creating a badge</a></li>
<li><a href="#display_badge">Display a badge</a></li>
<li><a href="#example">Examples</a></li>
<li><a href="#api">API reference</a></li>

</ul>

<h2 id="toolbar_buttons">Toolbar buttons</h2>

<p>An extension is allowed to place one button on the Opera toolbar, to the right of the search field. This button can include an 18×18 pixel icon, a tooltip (displayed on hover), a status badge, and a popup overlay.</p>


<h2 id="create_buttons">Creating buttons</h2>

<p>The code for creating a button should be added to the script element of the <code>index.html</code> document. In this example we are running the code when the load event is fired.</p>

<p>The first step is to define the properties of the button. This is done in the <code>ToolbarUIItemProperties</code> object. Here is an example:</p>

<pre><code>
var ToolbarUIItemProperties = {
          disabled: false,
          title: &quot;Button Example&quot;,
          icon: &quot;icons/button.png&quot;
 }
</code></pre>
<p>Once you have defined the button properties in <code>ToolbarUIItemProperties</code>, you need to create the actual button with the <code>createItem</code> method:</p>

<pre><code>var theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);</code></pre>

<p>There are five properties which we can pass to the <code>ToolbarUIItemProperties</code>. The five properties are as follows:</p>

<h3>disabled</h3>

<p>This specifies if the button is enabled. It is true (disabled) by default and accepts a boolean value. You can disable the button as follows:</p>

<pre><code>theButton.disabled = true;</code></pre>

<h3>title</h3>

<p>The title property sets the tooltip that is shown when the user hovers over the button.</p>

<pre><code>theButton.title = &quot;This is a tooltip&quot;;</code></pre>

<h3>icon</h3>

<p>The icon property sets the icon used on the button. If you supply a size other than 18×18 pixels it will scale the image to fit that size.</p>

<pre><code>theButton.icon = &quot;icons/beautiful-toobar-icon.png&quot;;</code></pre>

<h3>onclick</h3>

<p>The function to execute when a user clicks on the button and a <code>click</code> event is fired.</p>

<pre><code>theButton.onclick = function(){ /* do something */ };</code></pre>

<h3>onremove</h3>

<p>The function to execute when the button is removed from the <code>ToolbarContext</code> and a <code>remove</code> event is fired.</p>

<pre><code>theButton.onremove = function(){ /* do something */ };</code></pre>

<h2 id="adding_button">Adding the button to the toolbar</h2>

<p>The newly created button then needs to be added to Opera’s toolbar. This is done with the <code>addItem</code> method:</p>

<pre><code>opera.contexts.toolbar.addItem(theButton);</code></pre>

<p>Try running the <a href="example-button.oex">button example</a>. It will not do much yet, as you’ve not defined any actions on the button.</p>

<h2 id="remove_button">Removing the button from the toolbar</h2>

<p>A button can be removed from the toolbar using the <code>removeItem</code> method:</p>

<pre><code>opera.contexts.toolbar.removeItem(theButton);</code></pre>

<h2 id="create_popup">Creating a popup</h2>

<p>Now you have a button, you want to do something with it. Popups can be displayed when the user clicks on the button. A popup is an overlay window with a specified width and height. You can point to a page on the web or a page packaged with your extension to display within the popup.</p>

<p>To create a popup you can define the properties of the <code>Popup</code> object within the <code>ToolbarUIItemProperties</code> object:</p>

<pre><code>
var ToolbarUIItemProperties = {
          disabled: false,
          title: &quot;Button Example&quot;,
          icon: &quot;icons/button.png&quot;,
	  popup: {
            	href: &quot;popup.html&quot;,
            	width: 400,
            	height: 200
          }

 }
</code></pre>

<p>Keep in mind that by default, the width and height of a popup window would be 300 by 300 units. To change it, you will need to explicitly define the width and height of the popup like the above example.</p>

<h2 id="popup_contents">Popup contents</h2>

<p>You point to the contents of the popup using the <code>href</code> property. You can point to any page on the web using its absolute URL:</p>

<pre><code>theButton.popup.href = http://www.opera.com/&quot;;</code></pre>

<p>You can access a locally stored web page by specifying a relative address:</p>

<pre><code>theButton.popup.href = &quot;popup.html&quot;;</code></pre>

<p>The web page can be a regular HTML page. Nothing special is required. Be aware that if you change the <code>href</code> property while the popup is open then the popup will close.</p>

<h2 id="popup_dimensions">Popup dimensions</h2>

<p>The dimensions of a popup are specified in pixels using the <code>width</code> and <code>height</code> properties:</p>

<p>Width:</p>
<pre><code>theButton.popup.width = 300;</code></pre>

<p>Height:</p>
<pre><code>theButton.popup.height = 300;</code></pre>

<p>The popup will be created along with the button when calling the <code>createItem</code> method.</p>

<p>Try the <a href="example-button-popup.oex">button with popup example</a>. If you worked through the <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Opera extensions hello world example</a>, you will notice this extension is very similar</p>

<h2 id="creating_badge">Creating a badge</h2>

<p>A badge is an overlay over the icon with some textual content. They are often used to display a count of items, such as unread mails or messages. To create a badge you can define the properties of the <code>Badge</code> object within the <code>ToolbarUIItemProperties</code> object:</p>

<pre><code>
var ToolbarUIItemProperties = {
          disabled: false,
          title: &quot;Button Example&quot;,
          icon: &quot;icons/button.png&quot;,
	  badge: {
            	display: &quot;block&quot;,
            	textContent: &quot;12&quot;,
            	color: &quot;white&quot;,
                backgroundColor: &quot;rgba(211, 0, 4, 1)&quot;
          }
 }
</code></pre>


<p>A badge has four properties that can be customised:</p>

<h2 id="display_badge">Displaying a badge</h2>

<p>The <code>display</code> property shows and hides the badge. Valid values are <code>block</code> and <code>none</code>. The default value is <code>none</code>. A badge can be set to be visible as follows:</p>

<pre><code>theButton.badge.display = &quot;block&quot;;</code></pre>

<h3>textContent</h3>

<p>The badge&#39;s label can be set using the <code>textContent</code> property. Badges only have a limited space to display text, so try to be concise. </p>

<pre><code>theButton.badge.textContent = &quot;12&quot;;</code></pre>

<h3>color and backgroundColor</h3>

<p>The <code>color</code> and <code>backgroundColor</code> properties set the foreground (text) and background colour of the badge. They accept hexadecimal, RGBA and named colors.</p>

<pre><code>theButton.badge.color = &quot;white&quot;;</code></pre>

<pre><code>theButton.badge.backgroundColor: = &quot;rgba(211, 0, 4, 1)&quot;;</code></pre>

<p>You can try the <a href="button-badge-popup.oex">button with badge example</a> and play with the various ways to create and manipulate the Opera extensions&#39; UI items.</p>

<p>You can also refer to the <a href="http://dev.opera.com/addons/extensions/#apireference">Opera extensions API documentation</a> for a complete overview of the various objects and methods.</p>

