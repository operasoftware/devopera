Title: Opera Widget support notes
----
Date: 2010-02-09 18:46:02
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

<h1>Support notes</h1>

<ol>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#general">General notes</a></li>
<li><a href="#features">Features</a></li>
<li><a href="#configdotxml">config.xml</a>
<ol>
<li><a href="#widgetelement">widget element</a></li>
</ol>
</li>
<li><a href="#javascriptapis">JavaScript APIs</a>
<ol>
<li><a href="#widgetobject">widget object</a></li>
<li><a href="#windowobject">window object</a></li>
<li><a href="#events">Events</a></li>
</ol>
</li>
</ol>

<h2 id="intro">Introduction</h2>

<p>This article describes which parts of the features of Opera Widgets are supported on different devices. Note that this document is not meant to be a complete set of comparisons. Different devices use different versions of the Opera browser, although most of the functionality is the same across all of them.</p>

<p>Bugs may occur on specific platforms.</p>

<h2 id="general">General notes</h2>

<p>Anything present but marked as X for all platforms is currently not available in any public builds of Opera.</p>

<h2 id="features">Features</h2>

<table class="bordered static" style="border: 1px solid #333333;">
<tr>
<th style="border-right: 1px solid #333333;">Release/Feature</th>
<th style="border-right: 1px solid #333333;">9.27</th>
<th style="border-right: 1px solid #333333;">9.64</th>
<th style="border-right: 1px solid #333333;">10.10+</th>
<th style="border-right: 1px solid #333333;">9.5 for UIQ</th>
<th style="border-right: 1px solid #333333;">9.7b for WM</th>
</tr>
<tr>
<td>Opera Dragonfly support</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>File I/O</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>Functional buttons</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>Widget icons</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>widget URL protocol</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td colspan="6">Widget modes</td>
</tr>
<tr>
<td>widget mode</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn1" title="widget mode is effectively fullscreen on mobile. This will probably change to fullscreen becoming default on mobile.">1</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>docked mode</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>fullscreen mode</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /><sup class="footnote"><a href="#fn1" title="widget mode is effectively fullscreen on mobile. This will probably change to fullscreen becoming default on mobile.">1</a></sup></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /><sup class="footnote"><a href="#fn1" title="widget mode is effectively fullscreen on mobile. This will probably change to fullscreen becoming default on mobile.">1</a></sup></td>
</tr>
<tr>
<td>application mode</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>Default mode</td>
<td>widget</td>
<td>widget</td>
<td>widget</td>
<td>widget</td>
<td>widget</td>
</tr>
</table>

<p class="footnote" id="fn1"><sup>1</sup> widget mode is effectively fullscreen on mobile. This will probably change to fullscreen becoming default on mobile.</p>

<h2 id="configdotxml">config.xml</h2>

<h3 id="widgetelement">widget element</h3>

<table class="bordered" style="border: 1px solid #333333;">
<tr>
<th style="border-right: 1px solid #333333;">Release/Feature</th>
<th style="border-right: 1px solid #333333;">9.27</th>
<th style="border-right: 1px solid #333333;">9.64</th>
<th style="border-right: 1px solid #333333;">10.10+</th>
<th style="border-right: 1px solid #333333;">9.5 for UIQ</th>
<th style="border-right: 1px solid #333333;">9.7b for WM</th>
</tr>
<tr>
<td>defaultMode</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>dockable</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>transparent</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
</table>

<h2 id="javascriptapis">JavaScript APIs</h2>

<h3 id="widgetobject">widget object</h3>

<table class="bordered" style="border: 1px solid #333333;">
<tr>
<th style="border-right: 1px solid #333333;">Release/Feature</th>
<th style="border-right: 1px solid #333333;">9.27</th>
<th style="border-right: 1px solid #333333;">9.64</th>
<th style="border-right: 1px solid #333333;">10.10+</th>
<th style="border-right: 1px solid #333333;">9.5 for UIQ</th>
<th style="border-right: 1px solid #333333;">9.7b for WM</th>
</tr>
<tr>
<td>widgetMode</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>identifier</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>originURL</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>openURL()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>preferenceForKey()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>setPreferenceForKey()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>showNotification()</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>getAttention()</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>onhide</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>onshow</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>show()</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>hide()</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
</table>

<h3 id="window object">window object</h3>

<table class="bordered" style="border: 1px solid #333333;">
<tr>
<th style="border-right: 1px solid #333333;">Release/Feature</th>
<th style="border-right: 1px solid #333333;">9.27</th>
<th style="border-right: 1px solid #333333;">9.64</th>
<th style="border-right: 1px solid #333333;">10.10+</th>
<th style="border-right: 1px solid #333333;">9.5 for UIQ</th>
<th style="border-right: 1px solid #333333;">9.7b for WM</th>
</tr>
<tr>
<td>defaultStatus</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn2" title="Settable, but ignored.">2</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>status</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn2" title="Settable, but ignored.">2</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
</tr>
<tr>
<td>resizeTo()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
</tr>
<tr>
<td>resizeBy()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
</tr>
<tr>
<td>moveTo()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
</tr>
<tr>
<td>moveBy()</td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /><sup class="footnote"><a href="#fn3" title="Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.">3</a></sup></td>
</tr>
</table>

<p class="footnote" id="fn2"><sup>2</sup> Settable, but ignored.</p>

<p class="footnote" id="fn3"><sup>3</sup> Note that calling resizeTo(), resizeBy(), moveTo() and moveBy() has no effect when in a fullscreen mode or on mobile.</p>

<h3 id="events">Events</h3>

<table class="bordered" style="border: 1px solid #333333;">
<tr>
<th style="border-right: 1px solid #333333;">Feature</th>
<th style="border-right: 1px solid #333333;">9.27</th>
<th style="border-right: 1px solid #333333;">9.64</th>
<th style="border-right: 1px solid #333333;">10.10+</th>
<th style="border-right: 1px solid #333333;">9.5 for UIQ</th>
<th style="border-right: 1px solid #333333;">9.7b for WM</th>
</tr>
<tr>
<td>resolution</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
<tr>
<td>widgetmodechange</td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="no"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/no.png" alt="feature is not supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
<td class="yes"><img src="http://forum-test.oslo.osa/kirby/content/articles/120-opera-widget-support-notes/ok.png" alt="feature is supported" /></td>
</tr>
</table>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
              
Settable, but ignored.
