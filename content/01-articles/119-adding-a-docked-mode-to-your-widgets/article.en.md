Title: Adding a docked mode to your widgets
----
Date: 2010-02-09 18:57:19
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


<p>Table of contents:</p>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#markup">HTML markup</a></li>
<li><a href="#config">Config.xml alterations</a></li>
<li><a href="#js">JavaScript</a></li>
<li><a href="#summary">Summary</a></li>
</ol>

<h2 id="intro">Introduction</h2>

<p>Opera Widgets are required to be run on various devices under differing UI constraints. In some cases, the UI needs to be interactive and in others only informative. To support this, Opera Widgets can be viewed in different modes, each mode giving the widget a slightly different environment to render in.</p>

<p>The default mode is the <code>widget</code> mode, which will display the widget as a separate window without chrome. There is also a <code>docked</code> mode, also known as micro mode, which is the minimized version of your widget. This version will typically be visible on the idle screen of a mobile phone, or in a panel in the desktop browser.</p>

<p>A docked widget takes the form of a non-interactive clipping of the widget from the top-left corner of the widget window. You can control how your widget looks when it gets docked by listening to JavaScript events dispatched by the device.</p>

<p class="note">Note that widgets in docked mode are still actively running widgets. It is up to you to make sure the widget is not draining resources while in docked mode.</p>

<p>Various use cases apply to the docked mode, including:</p>

<ul>
<li>Showing the number of unread items in a news feed</li>
<li>Showing weather information for your current location</li>
<li>Showing notifications or friend requests from social-networking sites</li>
</ul>

<p>In this article we will create an example Hello World widget with a docked mode, to show you how it is done. The docked mode will display “Hello Docked World”. The HTML structure, CSS rules, and JavaScript for the widget are essentially the same as they would have been without the docked mode.</p>

<h2 id="markup">HTML markup</h2>

<p>For our example, we choose to have two separate DOM elements representing the <code>widget</code> and <code>docked</code> modes. This is done only for keeping the code simple, and is in no way a definitive implementation.</p>

<pre>
<code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;container&quot;&gt;
      &lt;div id=&quot;widget&quot;&gt;
        Hello World!
      &lt;/div&gt;
      &lt;div id=&quot;docked&quot;&gt;
        Hello Docked World!
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code>
</pre>

<h2 id="config">Config.xml alterations</h2>

<p>Most widget implementations will simply display your widget’s icon and title in place of the docked mode, if your widget does not support it. This is why it is important for the implementation to know whether your widget supports <code>docked</code> mode. To let it know, we need to add an attribute of <code>dockable</code> to the <code>widget</code> element in the widget’s <code>config.xml</code>:</p>

<pre>
<code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;widget dockable=&quot;yes&quot;&gt;
  &lt;widgetname&gt;New Feed reader&lt;/widgetname&gt;
  &lt;description&gt;A news feed reader with a docked widget.&lt;/description&gt;
  &lt;width&gt;240&lt;/width&gt;
  &lt;height&gt;320&lt;/height&gt;
&lt;/widget&gt;</code>
</pre>

<h2 id="js">JavaScript</h2>

<p>Now that the widget implementation is aware that your widget supports the <code>docked</code> mode, and the HTML markup has dummy content for your docked widget, it is time to bring in JavaScript event listeners to control everything.</p>

<p>To know whether you are changing the widget mode from <code>widget</code> to <code>docked</code> or vice versa, the application must listen to the <code>widgetmodechange</code> event on the <code>widget</code> object. The following event listener handles this:</p>

<pre>
<code>widget.addEventListener( &#39;widgetmodechange&#39;, handleModeChange, false);</code>
</pre>

<p>You can access the new mode through the <code>widgetMode</code> property of the event. In this case, we need to handle the transition to and from docked mode, so the <code>handleModeChange()</code> function is created as follows:</p>

<pre>
<code>function handleModeChange(e)
{
    switch ( e.widgetMode )
    {
        case &#39;docked&#39;:
            handleDockedMode();
            break;
        case &#39;widget&#39;:
            handleWidgetMode();
            break;
    }
}</code>
</pre>

<p>In the case of either mode, we want to get rid of the DOM which makes up one mode and replace it with markup for the other mode. The best way for managing DOM elements and populating the DOM Tree is explained in our article about <a href="/articles/view/cross-device-development-techniques-for/"> cross-device development of widgets</a>.</p>

<p>For our example, we can simply use <code>display: none</code> and <code>display: block</code> on the two elements:</p>

<pre>
<code>function handleDockedMode()
{
    document.getElementById(&#39;widget&#39;).style.display = &quot;none&quot;;
    document.getElementById(&#39;docked&#39;).style.display = &quot;block&quot;;
}</code>
</pre>

<h2 id="summary">Summary</h2>

<p>In this article we have shown a simple example that demonstrates how to give a widget a docked mode. In some cases, you may not need to hide any data at all. In others a complete UI change might be necessary. It is recommended that you investigate the best mechanism to show and hide data when transitioning between modes.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>  
