Title: The Opera Widgets Mobile Emulator
----
Date: 2010-07-12 05:15:56
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


<p>Making sure that your widget looks great and works exactly as it should on mobile devices can often be a tedious process. With Opera Mobile 10 for Windows, Linux and Mac we&#39;ve included the Opera Widgets Mobile Emulator &#x2014; a native application that can be run directly from your desktop machine, meaning developing mobile-optimized widgets has never been easier.</p>

<ul>
<li><a href="#widgetsemulator">Opera Widgets Mobile Emulator overview</a></li>
<li><a href="#widgetssettings">Widgets settings</a></li>
<li><a href="#widgetinstall">Installing widgets</a></li>
<li><a href="#debugging">&quot;Local&quot; remote debugging</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<p class="note">Download <a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile 10 including the Widgets Emulator for Windows, Linux and Mac</a> - make sure you get an <strong>Opera Mobile 10</strong> build and not 10.1, which only includes the browser.</p>


<h2 id="widgetsemulator">Opera Widgets Mobile Emulator overview</h2>

<p>Opera Widgets provides a complete runtime environment for widgets on mobile devices.</p>

<div>
<img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/4-opera-widgets-notification.png" alt="Opera Widgets and its Notifications window" width="640" height="492" />
<p class="comment">Figure 1: Opera Widgets and its <cite>Notifications</cite> window</p>
</div>

<p>This includes the ability found in most common widget platforms to run minimised applications in the background (with a live updating icon, to provide things like status information) and having a separate notification area (which background widgets can use to send information to the user). <a href="http://labs.opera.com/news/2010/02/18/">Opera Widgets is available for mobile phones as a separate download</a>, and is included in Opera Mobile 10 for Windows, Linux and Mac for easy testing and debugging of mobile widgets in a phone-like environment.</p>

<h2 id="widgetssettings">Widgets settings</h2>

<div>
<img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/5-opera-widgets-settings.png" alt="Opera Widgets settings for Privacy and Developer tools" width="612" height="314" />
<p class="comment">Figure 2: Opera Widgets settings for <cite>Privacy</cite> and <cite>Developer tools</cite></p>
</div>

<p>The <cite>Settings</cite> dialog for Opera Widgets provides access to the <cite>Privacy</cite> options (related to the built-in password manager) and the emulator&#39;s <cite>Developer tools</cite>.</p>

<h2 id="widgetinstall">Installing widgets</h2>

<p>As on a mobile device, there are two ways to install widgets.</p>

<div>
<img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/6-opera-widgets-add.png" alt="Add widgets from widgets.opera.com" width="640" height="585" />
<p class="comment">Figure 3: Add widgets from <a href="http://widgets.opera.com/">widgets.opera.com</a></p>
</div>

<p>Selecting the <cite>Add widgets</cite> button on the main interface loads our <a href="http://widgets.opera.com/">Opera Widgets online repository</a>.</p>
<p>Of more interest to developers, though, is the ability to install widgets directly from their machine. In contrast to our old <a href="http://dev.opera.com/articles/view/widget-emulator/"><cite>Widget Emulator</cite></a>, this allows for more accurate testing and debugging in an environment that closely matches an actual mobile device.</p>

<div>
<img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/7-opera-widgets-install-local.png" alt="Installing a widget file" width="640" height="587" />
<p class="comment">Figure 4: Installing a <code>wgt</code> widget file</p>
</div>

<p><cite>Settings</cite> &gt; <cite>Developer tools</cite> &gt; <cite>Install widget</cite> allows you to browse folders on your local filesystem, locate the <code>wgt</code> widget file, and install it.</p>

<p class="note">The specific &quot;root&quot; folder used by the emulator will vary depending on your operating system. For instance, on Linux this will be the current user&#39;s <code>/home/[username]/</code> folder.</p>
<p class="note">For more information on widget development, see our series of articles for the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/"><cite>Opera Widgets <abbr title="Software Development Kit">SDK</abbr></cite></a>.</p>

<h2 id="debugging">&quot;Local&quot; remote debugging</h2>

<p>With <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> you can check pages running in Opera Mobile 10 directly from within your main browser, giving you access to the full power of our debugging tool.</p>

<div>
<img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/8-opera-mobile-10-debugging.png" alt="Opera Dragonfly (undocked in a separate window) debugging a Web page in Opera Mobile 10" width="640" height="450" />
<p class="comment">Figure 5: Remote debugging with Opera Dragonfly (undocked in a separate window)</p>
</div>

<p>As demonstrated in Daniel&#39;s blog post (with added video goodness) <a href="http://my.opera.com/ODIN/blog/opera-mobile-10-and-its-remote-debugging-party-trick"><cite>Opera Mobile 10 and its remote debugging party trick</cite></a>, the process involves:</p>

<ul>
<li>Setting Opera Dragonfly to listen for remote connections.</li>
<li>Establishing a connection from Opera Mobile 10 to Opera Dragonfly by going to the <code>opera:debug</code> internal address.</li>
</ul>

<div>
<img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/9-opera-widgets-dragonfly.png" alt="Opera Dragonfly (undocked in a separate window) debugging a widget running in the Opera Widgets Mobile Emulator" width="640" height="394" />
<p class="comment">Figure 6: Remotely debugging a widget with Opera Dragonfly</p>
</div>

<p>Debugging widgets running in the Opera Widgets Mobile Emulator is similarly easy. Once Opera Dragonfly is set to listen for remote connections, simply go to the <cite>Settings</cite> &gt; <cite>Developer tools</cite> &gt; <cite>Remote access</cite> dialog to establish the connection, as outlined in our previous <a href="http://dev.opera.com/articles/view/remote-debugging-of-widgets-on-mobile-devices/"><cite>Remote debugging of widgets on mobile devices</cite></a> article.</p>

<p>As Opera Mobile 10 for desktop and the Opera Widgets Mobile Emulator both run on the same machine as Opera Dragonfly, there&#39;s no messing around with IP-addresses and port numbers — the default loopback/localhost address of <var>127.0.0.1</var> and standard port of <var>7001</var> should always work fine.</p>

<h2 id="conclusion">Conclusion</h2>

<p>We hope that with <a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile 10 for Windows, Linux and Mac</a> and the included Opera Widgets Mobile Emulator we&#39;ve made it easy and straightforward for developers to optimise their sites and widgets for mobile delivery. So what are you waiting for? Happy testing and debugging!</p>p
