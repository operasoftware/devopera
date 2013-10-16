Title: Opera Mobile 10 and the Opera Widgets Mobile Emulator on your desktop
----
Date: 2010-04-22 10:59:35
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

<p class="note">DEPRECATED: This article is deprecated, and a newer article with updated information is available at <a href="http://dev.opera.com/articles/view/opera-mobile-emulator/">Opera mobile emulator for desktop</a>. You should read this one if you want updated information.</p>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/1-opera-mobile-10.png" alt="Opera Mobile 10" width="336" height="518" />
<p class="comment">Figure 1: Opera Mobile 10 on Windows</p>
</div>

<p>Making sure that your site looks great and works exactly as it should in mobile browsers can often be a tedious process.</p>

<p>Previously, if you wanted to test and debug your mobile-friendly sites in Opera Mobile, you either needed a physical phone or some form of virtual machine emulating the whole mobile operating system. With <a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile 10 for Windows, Linux and Mac </a> we hope to provide you with the simplest solution: a small, native application that&#39;s easy to install on your desktop machine, which runs exactly the same code as its mobile phone version — so you can be assured that what you&#39;re seeing on your test environment closely relates to the experience your end users will get.</p>

<p>In addition to the Web browser, our package also includes the Opera Widgets Mobile Emulator, a desktop version of our <a href="http://labs.opera.com/news/2010/02/18/">Opera Widgets manager</a> for Symbian and Windows Mobile.</p>

<p>This article covers:</p>
<ul>
<li><a href="#screensizes">Screen sizes</a></li>
<li><a href="#controls">Controls</a></li>
<li><a href="#featuressettingsbrowser">Features and settings of the browser</a></li>
<li><a href="#uastring">User Agent string</a></li>
<li><a href="#widgetsemulator">Opera Widgets Mobile Emulator overview</a></li>
<li><a href="#widgetssettings">Widgets settings</a></li>
<li><a href="#widgetinstall">Installing widgets</a></li>
<li><a href="#debugging">&quot;Local&quot; remote debugging</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<p class="note">Download <a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile 10 for Windows, Linux and Mac</a></p>

<h2 id="screensizes">Screen sizes</h2>

<p>Mobile phones come in varying shapes and sizes. By default, the Opera Mobile 10 emulator will start in touchscreen mode at a resolution of 480x800 (the most common portrait WVGA screen size on modern smartphones). The size and input mode can be changed by starting the application from the command-line, using various configuration options. The most important are:</p>

<ul>
  <li><code>-geometry <var>width</var>x<var>height</var></code></li>
  <li><code>-notouch</code> — disables touchscreen mode and switches to keypad</li>
  <li><code>-notouchwithtouchevents</code> — same as <code>-notouch</code> (the interface switches to keypad mode), but it&#39;s still possible to use the mouse for easier debugging</li>
  <li><code>-widgetmanager</code> — starts Opera Widgets</li>
</ul>

<p>So, if we wanted to run Opera Mobile 10 as a keypad device with FWVGA (Full-WVGA with 16:9 aspect ratio) in portrait orientation, we&#39;d use the following commands:</p>

<p>On Windows:</p>
<pre><code>OperaMobile.exe -geometry 854x480 -notouch</code></pre>

<p>On Linux and Mac:</p>
<pre><code>./operamobile -geometry 854x480 -notouch</code></pre>

<p>The default location where you can find the <code>operamobile</code> executable will depend on your operating system. By default, you should find it in</p>

<ul>
<li>Windows: <code>C:\Program Files\Opera Mobile 10\</code></li>
<li>Linux: <code>/usr/bin/</code></li>
<li>Mac: <code>/Applications/Opera Mobile.app/Contents/MacOS/</code></li>
</ul>

<p class="note">On Windows, there are ready-made shortcuts in the <cite>Start</cite> menu that launch the application in full-, half- and quarter-VGA, with the various permutations of portrait/landscape and touchscreen/keypad.</p>

<p>By design, it&#39;s also possible to run multiple standalone instances of the program for quick testing on different mobile phone screen dimensions, orientations and input modes.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/2-multiple-opera-mobile-10s.png" alt="Multiple Opera Mobile 10" width="640" height="606" />
<p class="comment">Figure 2: Multiple instances of Opera Mobile 10 with different screen sizes and input modes</p>
</div>

<p class="note">There are further options that let you tweak the behaviour of the application. For a full list of command-line arguments, <!-- Placeholder: see our documentation or --> see the application&#39;s help text with <code>operamobile --help</code>.</p>

<h2 id="controls">Controls</h2>

<p>In touch mode, you use the mouse as if it was a finger on an actual touchscreen device. A short click activates links and controls, double-click zooms in and out of a page, while clicking for more than a second (<q>tap-and-hold</q>) brings up the context menu. Scrolling is achieved by clicking and dragging. Any text entry (for instance typing a URL into the address bar) will bring up the touchscreen keyboard, but you can of course use your regular keyboard. If you&#39;d like to suppress the virtual keyboard (to simulate a mobile device with its own physical keyboard), use <kbd>F6</kbd> to toggle it on/off.</p>

<p>In keypad mode, the primary controls are:</p>

<ul>
<li>Cursor keys for spatial navigation around the Speed Dial, address bar and search field. On a Web page, the cursor keys move the virtual mouse pointer.</li>
<li><kbd>F1</kbd> and <kbd>F2</kbd> mapped to top left and right soft keys, which activate the functions at the bottom of the screen (such as <cite>Menu</cite> and <cite>Exit</cite>).</li>
<li><kbd>Enter</kbd> and <kbd>F5</kbd> to activate a control, zoom into the page, etc. (there is actually a subtle distinction between the functionality of the two keys — in general usage they&#39;re equivalent, but <kbd>Enter</kbd> is also used for newline/linebreak characters, such as when entering information into a <code>textarea</code> field).</li>
</ul>

<p class="note">If you started the application with the <code>-notouchwithtouchevents</code>, you&#39;ll still be able to use your mouse for all these functions, which can make testing on your desktop machine more efficient but will give you a different experience from using the &quot;proper&quot; keypad controls.</p>

<p>In both modes, <kbd>CTRL+R</kbd> is used to simulate a device rotation, switching between portrait and landscape mode.</p>

<p>Although at its core Opera Mobile 10 on desktop contains exactly the same code as its mobile phone version, it behaves like any other native application. As a result, you can cut, copy and paste using the standard OS clipboard and shortcut keys (such as <kbd>CTRL+X</kbd>, <kbd>CTRL+C</kbd>, <kbd>CTRL+V</kbd>). As an additional time saver, if you have a URL copied to your clipboard, you can &quot;paste and go&quot; in one swift action by using <kbd>CTRL+E</kbd>.</p>
<p class="note">Currently, the copy/paste functionality is not working on the Mac version of Opera Mobile 10. This will be resolved in a future release of the package.</p>

<!-- Placeholder: for a full list of keyboard shortcuts, see the documentation -->

<h2 id="featuressettingsbrowser">Features and settings of the browser</h2>

<p>In general usage, the desktop version of the Opera Mobile 10  Web browser offers developers the same functionality available on mobile phones, including integration of <a href="http://www.opera.com/browser/turbo/">Opera Turbo</a> — our transparent compression proxy — and <a href="http://www.opera.com/link/">Opera Link</a> — synchronisation of bookmarks, Speed Dials and settings between different Opera browsers. See our overview of <a href="http://www.opera.com/mobile/features/">Opera Mobile&#39;s user experience and features</a> and our recent <a href="http://dev.opera.com/articles/view/opera-mobile-10-developers-introduction/"><cite>Opera Mobile 10 developer&#39;s introduction</cite></a>.</p>

<p class="note">Although of limited use for testing, Opera Mobile 10 for Windows, Linux and Mac retains the ability to download files and save pages in <a href="http://en.wikipedia.org/wiki/MHTML">MHTML</a> archive format. The default location where these files are saved will vary depending on your OS.<!-- Placeholder: see the FAQ --></p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/3-opera-mobile-10-browser-settings2.png" alt="Settings, Privacy and User Agent dialog windows" width="612" height="314" />
<p class="comment">Figure 3: Changing settings in Opera Mobile 10</p>
</div>

<p>As with <a href="http://www.opera.com/mobile/">Opera Mobile 10</a> on mobile phones, the <cite>Settings</cite> dialog gives quick access to toggle certain features (like <cite>Mobile view</cite>, which reflows a page&#39;s layout to a single column) and, under <cite>Privacy</cite>, to clear the history, passwords, cookies and the cache.</p>

<p>Power-users can enter the <code>opera:config</code> internal URL into the address bar for complete access to all configuration options.</p>

<h2 id="uastring">User Agent string</h2>

<p>The default <abbr title="User Agent">UA</abbr> strings for Opera Mobile 10 on Windows, Linux and Mac are:</p>

<pre><code>Opera/9.80 (Windows NT 6.0; Opera Mobi/[BUILD_NR]; U; en) Presto/2.4.18 Version/10.00
Opera/9.80 (Linux i686; Opera Mobi/[BUILD_NR]; U; en) Presto/2.4.18 Version/10.00
Opera/9.80 (Macintosh; Intel Mac OS X; Opera Mobi/[BUILD_NR]; U; en) Presto/2.4.18 Version/10.00
</code></pre>

<p>Unique to the desktop version is the ability to modify this in the <cite>User Agent</cite> settings dialog to mimic the Nokia/S60, Windows Mobile and Android versions of the browser:</p>

<pre><code>Opera/9.80 (S60; SymbOS; Opera Mobi/[BUILD_NR]; U; en-GB) Presto/2.4.18 Version/10.00
Opera/9.80 (Windows Mobile; WCE; Opera Mobi/[BUILD_NR]; U; en) Presto/2.4.18 Version/10.00
Opera/9.80 (Android; Linux; Opera Mobi/[BUILD_NR]; U; en) Presto/2.4.18 Version/10.00</code></pre>

<h2 id="widgetsemulator">Opera Widgets Mobile Emulator overview</h2>

<p>Opera Widgets provides a complete runtime environment for widgets on mobile devices.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/4-opera-widgets-notification.png" alt="Opera Widgets and its Notifications window" width="640" height="492" />
<p class="comment">Figure 4: Opera Widgets and its <cite>Notifications</cite> window</p>
</div>

<p>This includes the ability found in most common widget platforms to run minimised applications in the background (with a live updating icon, to provide things like status information) and having a separate notification area (which background widgets can use to send information to the user). <a href="http://labs.opera.com/news/2010/02/18/">Opera Widgets is available for mobile phones as a separate download</a>, and is included in Opera Mobile 10 for Windows, Linux and Mac for easy testing and debugging of mobile widgets in a phone-like environment.</p>

<h2 id="widgetssettings">Widgets settings</h2>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/5-opera-widgets-settings.png" alt="Opera Widgets settings for Privacy and Developer tools" width="612" height="314" />
<p class="comment">Figure 5: Opera Widgets settings for <cite>Privacy</cite> and <cite>Developer tools</cite></p>
</div>

<p>The <cite>Settings</cite> dialog for Opera Widgets provides access to the <cite>Privacy</cite> options (related to the built-in password manager) and the emulator&#39;s <cite>Developer tools</cite>.</p>

<h2 id="widgetinstall">Installing widgets</h2>

<p>As on a mobile device, there are two ways to install widgets.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/6-opera-widgets-add.png" alt="Add widgets from widgets.opera.com" width="640" height="585" />
<p class="comment">Figure 6: Add widgets from <a href="http://widgets.opera.com/">widgets.opera.com</a></p>
</div>

<p>Selecting the <cite>Add widgets</cite> button on the main interface loads our <a href="http://widgets.opera.com/">Opera Widgets online repository</a>.</p>
<p>Of more interest to developers, though, is the ability to install widgets directly from their machine. In contrast to our old <a href="http://dev.opera.com/articles/view/widget-emulator/"><cite>Widget Emulator</cite></a>, this allows for more accurate testing and debugging in an environment that closely matches an actual mobile device.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/7-opera-widgets-install-local.png" alt="Installing a widget file" width="640" height="587" />
<p class="comment">Figure 7: Installing a <code>wgt</code> widget file</p>
</div>

<p><cite>Settings</cite> &gt; <cite>Developer tools</cite> &gt; <cite>Install widget</cite> allows you to browse folders on your local filesystem, locate the <code>wgt</code> widget file, and install it.</p>

<p class="note">The specific &quot;root&quot; folder used by the emulator will vary depending on your operating system. For instance, on Linux this will be the current user&#39;s <code>/home/[username]/</code> folder.</p>
<p class="note">For more information on widget development, see our series of articles for the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/"><cite>Opera Widgets <abbr title="Software Development Kit">SDK</abbr></cite></a>.</p>


<h2 id="debugging">&quot;Local&quot; remote debugging</h2>

<p>With <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> you can check pages running in Opera Mobile 10 directly from within your main browser, giving you access to the full power of our debugging tool.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/8-opera-mobile-10-debugging.png" alt="Opera Dragonfly (undocked in a separate window) debugging a Web page in Opera Mobile 10" width="640" height="450" />
<p class="comment">Figure 8: Remote debugging with Opera Dragonfly (undocked in a separate window)</p>
</div>

<p>As demonstrated in Daniel&#39;s blog post (with added video goodness) <a href="http://my.opera.com/ODIN/blog/opera-mobile-10-and-its-remote-debugging-party-trick"><cite>Opera Mobile 10 and its remote debugging party trick</cite></a>, the process involves:</p>

<ul>
<li>Setting Opera Dragonfly to listen for remote connections.</li>
<li>Establishing a connection from Opera Mobile 10 to Opera Dragonfly by going to the <code>opera:debug</code> internal address.</li>
</ul>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/348-opera-mobile-10-and-the-opera-widgets-mobile-emulator-on-your-desktop/9-opera-widgets-dragonfly.png" alt="Opera Dragonfly (undocked in a separate window) debugging a widget running in the Opera Widgets Mobile Emulator" width="640" height="394" />
<p class="comment">Figure 9: Remotely debugging a widget with Opera Dragonfly</p>
</div>

<p>Debugging widgets running in the Opera Widgets Mobile Emulator is similarly easy. Once Opera Dragonfly is set to listen for remote connections, simply go to the <cite>Settings</cite> &gt; <cite>Developer tools</cite> &gt; <cite>Remote access</cite> dialog to establish the connection, as outlined in our previous <a href="http://dev.opera.com/articles/view/remote-debugging-of-widgets-on-mobile-devices/"><cite>Remote debugging of widgets on mobile devices</cite></a> article.</p>

<p>As Opera Mobile 10 for desktop and the Opera Widgets Mobile Emulator both run on the same machine as Opera Dragonfly, there&#39;s no messing around with IP-addresses and port numbers — the default loopback/localhost address of <var>127.0.0.1</var> and standard port of <var>7001</var> should always work fine.</p>

<h2 id="conclusion">Conclusion</h2>

<p>We hope that with <a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile 10 for Windows, Linux and Mac</a> and the Opera Widgets Mobile Emulator we&#39;ve made it easy and straightforward for developers to optimise their sites and widgets for mobile delivery. So what are you waiting for? Happy testing and debugging!</p>
