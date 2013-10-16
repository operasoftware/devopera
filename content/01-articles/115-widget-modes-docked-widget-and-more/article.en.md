Title: Widget modes: docked, widget, and more
----
Date: 2010-02-09 18:47:24
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<h2 id="intro">Introduction</h2>

<p>On some platforms, the Opera Widgets runtime supports more than one mode for the widget to run in, for instance a mobile phone may support modes to show widgets one at a time in fullscreen mode, and to show multiple widgets, with each widget displayed in a separate slot on the screen.</p>

<p>The widget runtime will tell the widget what mode it should run in. The runtime has a fallback solution in case the widget does not support the requested mode. The widget may request a default mode.</p>

<h2 id="modes">Widget modes defined</h2>

<p>The Opera Widget runtime is available on many platforms, including mobile phones, game consoles, media players, set top boxes and desktop computers. The widget runtime has been integrated into the device to best support the device’s characteristics. Widgets may be requested by the runtime to display in one of four different modes:</p>

<ul>
<li><a href="#modes-widget">Widget mode</a></li>
<li><a href="#modes-docked">Docked mode</a></li>
<li><a href="#modes-application">Application mode</a></li>
<li><a href="#modes-fullscreen">Fullscreen mode</a></li>
</ul>

<p>The default mode of the widget is determined by the <code>defaultmode</code> attribute of the <code>widget</code> element in the widget’s <code>config.xml</code> file. The Widget runtime may request the widget to switch between the modes, eg from docked to widget and back. Docked mode may for instance be used to show widgets on the phone idle screen.</p>

<h3 id="modes-widget">Widget mode</h3>

<p>The widget mode is the default mode and how widgets traditionally have been displayed. Each widget is rendered in its own window, separate from the browser and without any chrome. The size of the widget is determined by <code>config.xml</code>. The widget author needs to supply mechanisms for resizing and moving the widget if this is desired. This is the default mode if nothing else is specified in the widget’s <code>config.xml</code> file.</p>

<h3 id="modes-application">Application mode</h3>

<p>Like the widget mode, widgets in application mode are rendered in their own window. Unlike the widget mode, windows of widgets in application mode have system chrome. This means widgets in this mode look more native to the platform they are running on. The widget can be moved and resized as a normal window. You can set application mode to be the default mode by setting the <code>defaultmode</code> attribute of the <code>widget</code> element to ‘application’ in the widget’s <code>config.xml</code> file.</p>

<p class="note">Application mode is supported on Opera 10.2+ on Desktop. Widget mode is the default mode.</p>

<p class="note">We recommend developers start using application mode as this makes widget look more native to the platform they are running on. As chrome buttons aren’t required for widget mode either, this will reduce the amount of code the developer will have to write and maintain.</p>

<p>Application mode is the default on the T-Mobile Web’n’Walk platform. Widget mode is not supported on this platform.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/115-widget-modes-docked-widget-and-more/widget_chrome.png" title="Application widget with chrome" alt="Application widget with chrome" />
<p class="comment">Figure 1. Application widget with chrome</p>

<h3 id="modes-fullscreen">Fullscreen mode</h3>

<p>Fullscreen mode looks like application mode except that the widget is rendered as an otherwise maximized native application. You can set fullscreen mode to be the default mode by setting the <code>defaultmode</code> attribute of the <code>widget</code> element to ‘fullscreen’ in the widget’s <code>config.xml</code> file.</p>

<p><img width="225" src="http://forum-test.oslo.osa/kirby/content/articles/115-widget-modes-docked-widget-and-more/full_widget.jpg" alt="Fullscreen widget" height="400" /></p>
<p class="comment">Figure 2: A Widget in fullscreen mode</p>

<h3 id="modes-docked">Docked mode</h3>

<p>The docked mode, also known as <em>micro widget</em> mode, is a minimized version of the widget, typically docked into a panel – it will generally show summary information, a status icon, or similar. An example is a small news ticker where news items move across a small horizontal bar, or a traffic light to signify the health of a monitored device. A widget is not dockable by default – in order to make it dockable you need to set the <code>dockable</code> property of the <code>widget</code> element to ‘yes’ in the widget’s <code>config.xml</code> file.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/115-widget-modes-docked-widget-and-more/3_docked_widgets.jpg" alt="3 docked widgets" width="240" height="400" /></p>
<p class="comment">Figure 3: Widgets in docked mode</p>

<p>Docked mode is currently supported on Opera Mobile 9.5 for S60 and Vodafone and the T-Mobile Web’n’Walk platforms.</p>

<h2 id="adapting">Using CSS to adapt to the current widget mode: The -o-widget-mode media query</h2>

<p>You may style a widget differently for each mode by using a new media query property called <code>-o-widget-mode</code>. Possible values for the property is ‘widget’, ‘application’, ‘fullscreen’ and ‘docked’. You can use it as part of a media query like this:</p>

<pre>
<code>@media all and (-o-widget-mode:application) {
  /* We don&#39;t need to display our own user chrome controls, since
     real chrome is provided */
  .fakeChrome { display: none; }
}</code>
</pre>

<p>By doing a query for the <code>-o-widget-mode</code> property without a value, you can determine if the platform supports widget modes at all:</p>

<pre>
<code>@media all and (-o-widget-mode) {
  div.friendlyMessage {
    content: &quot;I will be displayed if I am a modern widget&quot;;
  }
}</code>
</pre>

<h2 id="event-widgetmode">Adapting to different widget modes: WidgetModeChangeEvent</h2>

<p>When the widget mode changes, a <code>WidgetModeChangeEvent</code> is fired on the <code>widget</code> object. By catching these events, you can programatically adapt the widget to its new state. An example is changing the DOM of the widget when it goes in and out of docked mode:</p>

<pre>
<code>widget.addEventListener( &#39;widgetmodechange&#39;, function (e)
{
    //Change the DOM to show minimal status information
}, false );</code>
</pre>

<p>This event does not bubble.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/opera-widgets-specification-fourth-ed/">Opera Widgets Specification 1.0, fourth edition</a></li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
