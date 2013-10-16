Title: Remote debugging of widgets on mobile devices
----
Date: 2010-02-09 16:37:48
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


<p>Table of contents:</p>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#s60">Configuring Opera Dragonfly on S60 and Windows Mobile</a></li>
<li><a href="#start">Getting started with debugging</a></li>
</ol>


<h2 id="intro">Introduction</h2>

<p>This article shows you how to debug widgets running on your mobile phone. For some background, take a look at the following articles:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/opera-dragonfly-architecture/">Opera Dragonfly architecture</a></li>
<li><a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">Remote debugging with Opera Dragonfly</a></li>
<li><a href="http://dev.opera.com/articles/view/debugging-widgets-using-opera-dragonfly/">Debugging widgets using Opera Dragonfly and the Widget Emulator</a>.</li>
</ul>

<p>In essence, you need to run an instance of Opera Dragonfly (inside your desktop browser) then configure the Widget manager on the device to communicate with this instance. You can then view, stop and step into code in widgets running on the device from the desktop instance.</p>

<p>First of all, configure Opera Dragonfly to accept remote debugging connections and which port to use, as described in the <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">article on remote debugging</a>.</p>

<p>The S60 and Windows Mobile Widget manager application is a separate application from the Opera Mobile browser, which means that the manager and the browser don’t share settings directly. To debug widgets run from the Widget manager, you need to configure access to Opera Dragonfly in a dialog in the manager. In this dialog, you set the IP and port of the desktop computer the device should connect to.</p>

<p class="note">If using Windows, you may need to open the port in your Windows Firewall.</p>

<p class="note">Both the desktop computer and the device must be connected to the same WLAN to be able to connect.</p>

<h2 id="s60">Configuring Opera Dragonfly on S60 and Windows Mobile</h2>

<p>Open the Widget manager menu and choose the <em>Settings</em> option. Select <em>Developer tools</em> then <em>Remote access</em>. This will open the dialog for configuring access to the debugger (see Figure 1). Into the dialog, enter the IP address of the desktop computer and the port you configured in the desktop instance, and hit “Connect”.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/337-remote-debugging-of-widgets-on-mobile-devices/s60_wm_menu.png" title="The Dragonfly menu item on S60" alt="The Dragonfly menu item on S60" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/337-remote-debugging-of-widgets-on-mobile-devices/s60_dragonfly_configure.png" title="The Dragonfly configuration dialogue on S60" alt="The Dragonfly configuration dialogue on S60" /><br />
Figure 1: Configuring Opera Dragonfly on S60</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/337-remote-debugging-of-widgets-on-mobile-devices/wm_wm_menu.png" title="The Widget manager on Windows Mobile" alt="The Widget manager on Windows Mobile" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/337-remote-debugging-of-widgets-on-mobile-devices/wm_dragonfly_configure.png" title="The Dragonfly configuration dialogue on Windows Mobile" alt="The Dragonfly configuration dialogue on Windows Mobile" /><br />
Figure 2: Configuring Opera Dragonfly on Windows Mobile</p>

<h2 id="start">Getting started with debugging</h2>

<p>Once you’ve configured your instances, you should get a message confirming you are connected. Run the widget you want to debug from the Widget manager on the device, then find your widget in the drop-down box in your Opera Dragonfly instance on the desktop and get debugging!</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
