Title: Widget control buttons
----
Date: 2010-02-09 09:44:51
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

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>Widget control buttons ensure that a consistent set of basic controls – Move, context menu, Minimize and Close – are available in all widgets in “Widget” mode. See the top-right of Figure 1 for an idea of what they look like.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/335-widget-control-buttons/widget_control_buttons.png" title="Screenshot of the Twitter widget with Widget control buttons" alt="Screenshot of the Twitter widget with Widget control buttons" />
<p class="comment">Figure 1: Screenshot of the Twitter widget with Widget control buttons</p>

<p>The buttons are only displayed in “Widget” mode, and appear when you move the mouser cursor over the widget. When you move the cursor out of the widget, they will disappear after a few seconds.</p>

<p>The “cog” button, opens the context menu which is otherwise available through a right-click on the widget.</p>

<h2>Disabling the buttons</h2>

<p>The widget control buttons are on by default when the widget is in “Widget” mode. Add a <code>feature</code> element to the <code>widget</code> element of the <code>config.xml</code> file of your widget to disable them:</p>

<pre>
<code>
&lt;widget&gt;
  ...
  &lt;feature name=&quot;http://xmlns.opera.com/wcb&quot; required=&quot;false&quot;&gt; 
    &lt;param name=&quot;widgetcontrolbuttons&quot; value=&quot;false&quot; /&gt; 
  &lt;/feature&gt;
  ...
&lt;/widget&gt;
</code>
</pre>

<h2>Style advice</h2>

<p>From 10.20 and onwards, you should not include your own chrome for the same features as the buttons provide. This means not adding your own Move, Close or Minimize buttons. This deprecates the previous advice in the Opera Widgets Style Guide.</p>

<p>For settings, you should use a different icon than cog.</p>

<h2>Implementation and availability</h2>

<p>This feature is only available in the Opera 10.20 Alpha release for Desktop and upwards.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>     
            
