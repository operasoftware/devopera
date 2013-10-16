Title: Opera Widgets - core DOM reference
----
Date: 2008-05-21 07:23:17
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<h2>Introduction</h2>

<p>This document describes the widget object and extensions to the window object that are available to a widget through JavaScript. This API allows you to communicate with the underlying widget runtime. The runtime offers some services such as showing and hiding the widget, storing preferences for the widget and getting information about the running widget.</p>

<p>The methods and properties in this API, the widget object and the extensions to the standard window object are only available if the code is running inside a widget, i.e. if it is inside a package or directory containing a <code>config.xml</code> and opened as a widget in the Opera browser. Unless otherwise stated, all objects are available in the JavaScript global scope.</p>

<h2>Widget identity and origin</h2>

<p>When you install a widget, the browser will give it a unique id, which you can use to refer to it later. This is exposed in the <a href="/libraries/widgetobject/docs/widget.dml#identifier">widget.identifier</a> property and can be used with among other things the widget URL protocol.</p>

<p>Furthermore, the URL where the widget was downloaded from is exposed on <a href="/libraries/widgetobject/docs/widget.dml#originURL">widget.originURL</a>. One use of this is to supply users with a link to find out more information about the widget, or updates to it.</p>


<h2>The widget URL protocol</h2>

<p>You can access resources within the widget, or potentially other widgets by using the widget URL protocol. Such URLs are of the form:</p>

<pre><code>widget://[widget identifier]/[path]</code></pre>

<p>Use <code>widget.identifier</code> to get the identifier part. One use of this is loading translation files in the widget:</p>

<h2 id="widgetfile">Use a different start file: The <code>widgetfile</code> element</h2>
 
<p>By default, the widget runtime will try to load <code>index.html</code> inside the widget package. You can change this to another file by adding a <code>widgetfile</code> element to the <code>config.xml</code> of the widget:</p>

<pre><code>&lt;widget&gt;
    ...
  &lt;widgetfile&gt;start.html&lt;/widgetfile&gt;
    ...
&lt;/widget&gt;</code></pre>

<h2>Working with preferences</h2>

<p>Widgets may store preferences in a persistent manner. When stored, they will be available if you reload or close and reopen the widget.
They are deleted when the widget is deleted. See <a href="/libraries/widgetobject/docs/widget.dml#setPreferenceForKey">widget.setPreferenceForKey()</a> and <a href="/libraries/widgetobject/docs/widget.dml#preferenceForKey">widget.preferenceForKey()</a> for details.</p>

<pre><code><span class="comment">//Store the value &#39;gautamc&#39; for the key &#39;username&#39;</span>
widget.setPreferenceForKey( &#39;gautamc&#39;, &#39;username&#39; );
<span class="comment">//... close and reopen the widget ...</span>
var username = widget.preferenceForKey(&#39;username&#39;);
<span class="comment">//Retrieve the value again</span>
</code></pre>

<p>If you store <code>null</code> for a given key, any previous value for that key will be unset.</p>

<pre><code><span class="comment">//Store the value &#39;gautamc&#39; for the key &#39;username&#39;</span>
widget.setPreferenceForKey( &#39;gautamc&#39;, &#39;username&#39; ); 
<span class="comment">//... do some work ...</span>
if ( logout )
{
  widget.setPreferenceForKey( null, &#39;username&#39; );
}
</code></pre>

<h2>Working with widget modes</h2>

<p>A widget can be displayed in different modes. The current modes are:</p>

<dl>
<dt>widget</dt>
<dd>This is the default mode on desktop. The widget has no chrome and is transparent by default.</dd>
<dt>docked</dt>
<dd>The widget is displayed in a small mode, suitable in a widget dock or on the idle screen of a mobile.</dd>
<dt>application</dt>
<dd>This mode gives the widget a window chrome as decided by the platform. This chrome controls resizing and closing the widget like a normal platform window.</dd>
<dt>fullscreen</dt>
<dd>Like application mode, allthough maximized. The widget will cover all the available screen space.</dd>
</dl>

<p>You can request a default mode by giving the <code>defaultmode</code> attribute of the <code>widget</code> element in your <code>config.xml</code> file a value equal to the name of the desired widget.</p>

<p>In order to inform the widget runtime that you support a docked mode, you must give the <code>dockable</code> attribute of the <code>widget</code> element in your <code>config.xml</code> file a value of <code>true</code>.</p>

<p>Which mode is used is decided by the widget runtime.</p>

<p>You can use the <a href="/libraries/widgetobject/docs/widget.dml#widgetMode">widget.widgetMode</a> property to check the current mode of the widget.</p>

<p>When the mode changes, a <code>widgetmodechange</code> will be fired on the <code>widget</code> object. You can listen for it like this:</p>

<pre><code>widget.addEventListener(&#39;widgetmodechange&#39;, handleModeChange, false);</code></pre>

<p>The event has a <code>mode</code> property which contains the mode the widget is switching to:</p>

<pre><code>function handleMode(e)
{
  switch (e.mode)
  {
    <span class="comment">//Handle widget mode</span>
    case &#39;widget&#39;:
    <span class="comment">//Handle docked mode</span>
    case &#39;docked&#39;:
    <span class="comment">//Handle application mode</span>
    case &#39;application&#39;:
    <span class="comment">//Handle fullscreen mode</span>
    case &#39;fullscreen&#39;:
  }
}</code></pre>

<p>You can also use the media query extension <code>-o-widget-mode</code> to deal with mode changes right in your CSS. The <code>-o-widget-mode</code> feature can take a widget name as a value and apply a style only when the widget is in the given mode:</p>

<pre><code>@media all and (-o-widget-mode: application) {
  .fakeChrome {
    display: none;
  }
}</code></pre>

<p>You can test if the platform supports widget modes at all by checking if the property itself is true:</p>

<pre><code>@media all and (-o-widget-mode) {
  div.friendlyMessage {
    content: &quot;I will be displayed if I am a modern widget&quot;;
  }
}</code></pre>

<h2 id="resolution">Handling changes in screen size</h2>

 <p>If the resolution of the screen changes, for example when a phone is switched from portrait to landscape mode, a <code>resolution</code> event will be fired on the <code>widget</code> object:</p>
 
 <pre><code>widget.addEventListener(&#39;resolution&#39;, handleResolutionChange, false);</code></pre>

<p>You can now change the appearance of the widget.</p>

<h2>Displaying a status message</h2>

<p>Widgets support setting a status message that may be displayed in the widget panel or on some status bar:</p>

<pre><code>var updateInterval = setInterval( function () { window.status = &#39;Feed last updated &#39; + new Date (); }, 120000 );</code></pre>

<p>If you set the <a href="/libraries/widgetobject/docs/window.dml#status">window.status</a> property to null, it defaults back to the value of <a href="/libraries/widgetobject/docs/window.dml#defaultStatus">window.defaultStatus</a>, which is also settable.</p>

<h2>Hiding, showing and closing widgets</h2>

<p>Widgets may be hidden in such a way that they do not appear as a window or in the user&#39;s task bar. The widget will continue to run in the background. The methods
<a href="/libraries/widgetobject/docs/widget.dml#hide">widget.hide()</a> and <a href="/libraries/widgetobject/docs/widget.dml#show">widget.show()</a> can be used to control this:</p>

<pre><code>hideButton.addEventListener( &#39;click&#39;, function () { widget.hide(); }, false );
<span class="comment">//...</span>
if ( newItems )
{
  widget.show();
}</code></pre>

<p>You can use <code>window.close()</code> to close a widget too.</p>

<pre><code>closeButton.addEventListener( &#39;click&#39;, function () { 
  window.close(); 
}, false );</code></pre>

<p class="note">Hiding and closing widgets programatically is not possible on mobile.</p>


<h2>Getting the user&#39;s attention</h2>

<p>You can use the <a href="/libraries/widgetobject/docs/widget.dml#getAttention">widget.getAttention()</a> and <a href="/libraries/widgetobject/docs/widget.dml#showNotification">widget.showNotification()</a> methods to notify the user that something has happened in a widget they have installed.</p>

<p>On desktop, <a href="/libraries/widgetobject/docs/widget.dml#getAttention">widget.getAttention()</a> will blink the widget icon in the taskbar or similar.</p>

<pre><code>if ( requestReceived )
{
  widget.getAttention();
}</code></pre>

<p>On desktop, <a href="/libraries/widgetobject/docs/widget.dml#showNotification">widget.showNotification()</a> will pop up a notification dialog from the Opera icon in the system tray. The method takes as arguments a message to display, and a callback to call if the user clicks the notification:</p>

<pre><code>if ( itemsReceived )
{
  widget.showNotification( num + &#39; items received&#39;, clickCallkback );
}</code></pre>

<p>This can be used to bring the widget out of hiding for example.</p>

<p class="note">These functions currently do nothing on mobile.</p>


<h2>Moving and resizing widgets</h2>

<p>Widgets can be moved around and resized beyond the size specified in their <code>config.xml</code>. Use <a href="/libraries/widgetobject/docs/window.dml#moveTo">window.moveTo()</a>, <a href="/libraries/widgetobject/docs/window.dml#moveBy">window.moveBy()</a>, <a href="/libraries/widgetobject/docs/window.dml#resizeTo">window.resizeTo()</a> and <a href="/libraries/widgetobject/docs/window.dml#resizeBy">window.resizeBy()</a>. This means you may for example put your widget into a compact mode and have the user expand it when necessary.</p>

<p>Calling <code>resizeTo</code> will simply change the widget to the given width and height. Calling <code>moveTo</code> will move it to the given x and y coordinates. The following example will move the widget to the top left corner of the screen and make it as large as the screen space allows:</p>

<pre><code>window.moveTo( 0, 0 );
window.resizeTo( screen.availWidth, screen.availHeight );
</code></pre>

<p><code>resizeBy</code> will expand or shrink the widget by the given width and height.</p>

<pre><code><span class="comment">//Increase the size by 200 pixels in both directions</span>
window.resizeBy(200,200);</code></pre>

<p><code>moveBy</code> will move the widget the distance given as <code>delta_x</code> and <code>delta_y</code>.</p>

<pre><code><span class="comment">//Move the widget 100 pixels in both directions</span>
window.moveBy(100,100);</code></pre>

<p class="note">Moving and resizing widgets is not possible on devices that only show one widget at a time.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
