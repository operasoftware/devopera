Title: Opera Widgets Style Guide
----
Date: 2010-03-01 23:04:56
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<h2>Introduction</h2>

<p>Since their inception, Opera widgets have steadily evolved to become more powerful and easier to create. While their structure and concept is essentially unchanged, there are important differences in the widget runtime of Opera 10.20 and above that developers should be aware of. Here we outline some of the key points to help you make the most of this technology by either developing new widgets or updating existing ones.</p>

<h2>Naming your widget</h2>

<p>While there are no length restrictions for the name of your widget, it&#39;s best to use something short and easy to remember. Widget names may be truncated when displayed in the device&#39;s widget manager or operating system&#39;s taskbar. A one or two-word title is recommended, ideally between 12-14 characters in total to avoid truncation on mobile devices. For maximum portability, please avoid using the word &quot;Opera&quot; in the title (unless, of course, it relates specifically to the Opera browser or to the musical form of opera).</p>

<h2>Widget icons</h2>

<p>If you do not provide icons for your widget, the default cogwheel icon will be displayed. To avoid this and help your widget stand from the crowd, we recommend creating your own. Widget icons can appear in a user&#39;s dock or desktop, application menu, taskbar, widget manager and on <a href="http://widgets.opera.com/">widgets.opera.com</a> so at least four sizes of icon are needed: 128x128, 64x64, 32x32, 16x16. The icons should be listed in this order in your config.xml file to ensure the largest, highest-quality icon is given priority when possible. 256x256 and 512x512 sizes are also supported in desktop environments but should be left out if your widget is just for mobile users. For some guidance in creating widget icons, please see our <a href="http://dev.opera.com/articles/view/custom-opera-widget-icons/">widget icon tutorial</a>.</p>

<h2>Settings</h2>

<p>For better usability, we recommend not having a settings screen but rather making any configurable elements editable if possible. If you do intend to use a single settings button, please try not to use the cogwheel icon as it is used as a default for widgets with no icon. There are some good settings icons to choose from in the <a href="http://openiconlibrary.sourceforge.net/">Open Icon Library</a>, one of which is <a href="http://openiconlibrary.sourceforge.net/gallery2/?./Icons/actions//configure-4.png">this spanner icon</a>. Alternatively, if you are combining settings with an information page we suggest <a href="http://openiconlibrary.sourceforge.net/gallery2/?./Icons/actions/help-about-2.png">this &quot;i&quot; icon</a>.

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/19-opera-widgets-style-guide/configure-4.png" width="128" height="128" alt="Settings icon" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/19-opera-widgets-style-guide/help-about-2.png" width="128" height="128" alt="Help/about icon" /></p>
<p class="comment">Figure 1: These icons from the <a href="http://www.oxygen-icons.org/">Oxygen icon set</a> are available under a <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike license</a>.</p>

<h2>Control buttons</h2>

<p>And now for some good news! You no longer need to include a close or minimize button or function in your widget. Whether you create a widget in widget mode or application mode, a set of control buttons including close and minimize will be added automatically by the widget runtime or operating system. If you want to include functionality to reduce the size of your widget in addition to minimize, use a button design different to the default minimize icon. In widget mode, you should also be aware of the location of the control buttons if your widget uses transparency and ensure the buttons are displayed close to the widget&#39;s visible area. You may disable the control buttons in widget mode and create their equivalent yourself, but be aware that it may not be possible to reproduce their functionality (e.g. minimize) exactly. Disabling the control buttons is done easily in <code>config.xml</code> by adding the following feature element:</p>

<pre>
<code>
&lt;widget&gt;
  ...
  &lt;feature name=&quot;http://xmlns.opera.com/wcb&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;widgetcontrolbuttons&quot; value=&quot;false&quot; /&gt;
  &lt;/feature&gt;
  ...
&lt;/widget&gt;</code>
</pre>

<h2>Widget mode and application mode</h2>

<p>In general, it&#39;s likely that you will find application mode more appropriate for widgets as this makes them resizeable and similar in appearance to native applications. However, there are cases when widget mode is the better choice:</p>

<ul>
  <li>When the widget is decorative, doesn&#39;t take up too much screen space and requires little interaction, for example a clock or calendar.</li>
  <li>When the widget has links that will open in the browser.</li>
</ul>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/19-opera-widgets-style-guide/svg-edit.png" width="626" height="476" alt="The SVG Edit widget, built in application mode" /></p>
<p class="comment">Figure 2: The <a href="http://widgets.opera.com/widget/15321/">SVG Edit</a> widget, built in application mode.</p>

<h2>Widget content</h2>

<p>Because of the large number of widgets to choose from, you need to capture the user&#39;s attention as soon as they start the widget to prevent them from running away and trying something else. Your main screen should contain interesting content and it should be immediately clear to the user what they have to do. The quicker the user can access the heart of your widget, the more likely they are to continue using it and recommend it to others.</p>

<h2>Summary and checklist</h2>

<p>For developers short on time, here&#39;s a handy stick-it-on-your-fridge checklist for easy widget creation:</p>

<ol>
  <li>Does your widget have the word &quot;Opera&quot; in its title? If so, remove it, unless it relates to Opera.</li>
  <li>Is your widget icon available in four sizes? If not, create 128x128, 64x64, 32x32 and 16x16 versions.</li>
  <li>Are you using the cogwheel icon for a settings button? If so, choose an alternative design.</li>
  <li>Have you made a close or minimize button? If so, remove them and rely on the default control buttons.</li>
  <li>Does your widget use transparency? If so, ensure the control buttons are close to the visible part of your widget.</li>
  <li>Would you like your widget to look like a native application? If so, add <code>defaultmode=&quot;application&quot;</code> to the <code>widget</code> element of <code>config.xml</code>.</li>
  <li>Do users know what to do when they open your widget? If not, make required actions obvious and make content more easily accessible.</li>
  <li>Is your widget decorative or does it open links in the browser? If so, you should create it it widget mode.</li>
</ol>

<p>These suggestions and guidelines will hopefully make life a little easier for widget developers. On final thing to note is that loading <code>config.xml</code> in Opera does not start Opera Dragonfly automatically and widget debugging should be done using Opera Dragonfly&#39;s remote debugging feature. As always, we&#39;re very keen to see your new and improved widgets uploaded to <a href="http://widgets.opera.com/">widgets.opera.com</a>.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul></p>
