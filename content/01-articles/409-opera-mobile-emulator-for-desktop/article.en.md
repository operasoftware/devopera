Title: Opera Mobile Emulator for desktop
----
Date: 2011-05-25 07:04:29
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

<div class="right"><img src="http://forum-test.oslo.osa/kirby/content/articles/409-opera-mobile-emulator-for-desktop/opera-emulator.jpg" alt="Opera Mobile Emulator" /><p class="comment">Figure 1: Opera Mobile Emulator running on Mac.</p></div>

<h2>Introduction</h2>

<p>Making sure that your site looks great and works exactly as it should in mobile and tablet browsers can often be a tedious process &#x2014; you typically need one or more physical devices, or some form of virtual machine emulating the whole operating system, and that’s just the start.</p>

<p>Our <a href="http://www.opera.com/developer/tools/mobile/">Opera Mobile Emulator</a> for Windows, Linux and Mac makes things a whole lot easier.</p>

<p>It’s a small, native application that’s easy to install on your desktop machine and runs exactly the same code as its mobile phone version — that way, you can be assured that what you’re seeing on your test environment is practically identical to the experience your end users will get.</p>
	 
<h2 id="profileselector">The Profile Selector</h2>

<p>When you first open the Opera Mobile Emulator, you’re presented with the Profile Selector — see Figure 2. This Profile Selector allows you to spawn different instances of Opera Mobile on your desktop to accurately test different phone configurations, as seen in Figure 3. Here we will discuss the different options available in the Profile Selector.</p>

<h3 id="profiles">Profiles</h3>

<p>The Profile Selector comes preconfigured with a series of popular phone and tablet device profiles, such as <em>Samsung Galaxy S III</em>, <em>Samsung Galaxy Tab 10.1</em> and <em>HTC One X</em>. You can then start an Opera Mobile instance using the selected profile by clicking on the <em>Launch</em> button.</p>

<p>If you want to create a new profile, select the <em>Custom</em> option from the profile list and set the relevant options for <em>Resolution</em>, <em>Pixel Density</em>, <em>User Interface</em>, <em>User Agent String</em>, <em>Window Scale</em>, and <em>Arguments</em>. When you&#39;re all set, select the <em>Add</em> button under the profile selection box, choose a name for the new profile, and save it to the list. Note that you can also tweak existing profiles via the <em>Save/save as...</em> button appearing below the selected profile, or delete them using the <em>Remove</em> button.</p>

<div><img src="http://forum-test.oslo.osa/kirby/content/articles/409-opera-mobile-emulator-for-desktop/launcher.jpg" alt="The Opera Mobile Emulator’s Profile Selector" /><p class="comment">Figure 2: The Opera Mobile Emulator’s Profile Selector.</p></div>

<h3 id="screensizes">Resolution</h3>

<p>Mobile phones and tablets come in varying shapes and sizes. The screen resolution can be changed by choosing between the different options in the <em>Resolution</em> dropdown menu. You can also create your own custom resolutions using the <em>Add</em> button, and delete the existing ones using the <em>Remove</em> button.</p>

<h3 id="pixel">Pixel Density</h3>

<p>In the same manner as screen resolution, you can choose the pixel density — which affects Opera Mobile&#39;s default zoom factor and <code>devicePixelRatio</code> — using the dropdown menu in the <em>Pixel Density</em> section. As above, you can select options from the menu, add your own custom ones, and remove options as you see fit.</p>

<h3 id="ui" style="clear: both;">User Interface</h3>

<p>The <em>User Interface</em> section of the Profile Selector contains a dropdown menu with three options to choose from: <em>Touch</em>, <em>Keypad</em> and <em>Tablet</em>. The <em>Touch</em> option will give you our touch-screen phone <abbr title="user interface">UI</abbr>, whereas choosing <em>Keypad</em> will result in our UI for phones with only keypad input. The <em>Tablet</em> option enables Opera Mobile’s tablet-optimized touch UI. To learn more about the differences between these UIs and input modes they trigger, see the <a href="#inputmodes">input modes</a> section below.</p>

<div><img src="http://forum-test.oslo.osa/kirby/content/articles/409-opera-mobile-emulator-for-desktop/multiple-instances.jpg" alt="Multiple instances of Opera Mobile Emulator" /><p class="comment">Figure 3: Multiple instances of the Opera Mobile Emulator with different screen sizes, orientations, and UIs.</p></div>

<h3 id="uastring">User Agent String</h3>

<p>This option allows you to set a custom User Agent before launching an Opera Mobile instance. Available options are <em>Default</em> (<code>Opera Mobi</code> on Win/Mac/Linux), <em>Android</em> (<code>Opera Mobi</code> on Android), <em>MeeGo</em> (<code>Opera Mobi</code> on MeeGo), <em>Desktop</em> (Opera Desktop).</p>

<p>When running in tablet mode, the <abbr title="User Agent">UA</abbr> string is slightly different: <code>Opera Mobi</code> is replaced with <code>Opera Tablet</code>, so as to avoid that sites that use browser-sniffing send a mobile/small-screen optimised version to a large-screen tablet device.</p>

<p>If you need to set a totally custom <abbr title="User Agent">UA</abbr> string, then this can be done as well: launch Opera Mobile with any UA string setting, open <code>opera:config</code>, search for the <em>Custom User-Agent</em> property in the <em>User Prefs</em> section, give it your preferred <abbr title="User Agent">UA</abbr> string value and save. To revert to the default value, simply click the <em>Default</em> or <em>Reset</em> button.</p>

<h3 id="windowscale">Window Scale</h3>

<p><em>Window Scale</em> allows you to display the full browser window at a percentage of its original size. This is useful when the spawned Opera Mobile instance has a larger height than the height of your computer screen and you want to make it fit inside: e.g. the HTC One X profile triggers Opera Mobile to have a size of 720×1280px in portrait orientation, which is too tall to fit on my Dell monitor. The <em>Profile Selector</em> knows this and therefor launches the HTC One X Opera Mobile instance at 50% of its original size, while preserving the reported width, height, and <code>devicePixelRatio</code> values.</p> 

<p>If you want to change the <em>Window Scale</em> value after launching, you can do this as well through the dropdown menu in the bottom right corner of the Opera Mobile instance.</p>

<h3 id="arguments">Arguments</h3>            

<p>The <em>Arguments</em> field allows you to add various command line options to the Opera Mobile instance you’re launching. You can find an overview of the available arguments by clicking <em>Help</em> on the Profile Selector.</p>
<p>Some example arguments:</p>
<ul>
	<li><code>-displayzoom <var>percentage</var></code>: this allows you set any arbitrary window scale factor.</li>
	<li><code>-delaycorethread <var>delay</var></code>: this allows you to delay each message in the Presto thread by a certain amount of ms, so as to emulate a slow device.</li>
	<li><code>-url <var>url</var></code>: define a URL to open on startup.</li>
</ul>

<h3>Full browser reset on startup</h3>

<p>Checking this box will reset all browser settings when Opera Mobile is launched, including cache, cookies, and so on.</p>

<h2 id="commandline">Launching Opera Mobile instances from the command line</h2>

<p>Depending on your workflow, you may want to start Opera Mobile instances from the command line, bypassing the Profile Selector. That is entirely possible, with various configuration options to boot. The most important ones are:</p>

<ul>
	<li><code>-displaysize <var>width</var>x<var>height</var></code>: set the window size</li>
	<li><code>-ppi <var>ppi</var></code>: set the pixel density you want to use</li>
	<li><code>-notouch</code>: start Opera Mobile with Keypad UI</li>
	<li><code>-user-agent-string <var>uastring</var>: set the user agent option to the specified value. Options are: Default, Android, MeeGo, Desktop.</code></li>
	<li><code>-notouchwithtouchevents</code>: same as <code>-notouch</code>, but it’s still possible to use the mouse for easier debugging</li>
	<li><code>-tabletui</code>: switch to the tablet UI</li>
</ul>

<p class="note">Note: For a full list of command-line arguments, see the application’s help text with <code>operamobile --help</code>.</p>

<p>So, if we wanted to run Opera Mobile as a keypad device with an FWVGA-sized screen in portrait orientation, we’d use the following commands:</p>
  
<ul>
	<li>On Windows: <code>OperaMobileEmu.exe -displaysize 854x480 -notouch</code></li>  
	<li>On Linux: <code>operamobile -displaysize 854x480 -notouch</code></li> 
	<li>On Mac: <code>./Opera\ Mobile -displaysize 854x480 -notouch</code></li>
</ul>
  
<p>The default location of the Opera Mobile Emulator&#39;s executable will depend on your operating system. By default, you should find it here:</p>
  
<ul>
	<li>Windows: <code>C:\Program Files\Opera Mobile Emulator\</code></li>
	<li>Linux: <code>/usr/bin/</code></li>
	<li>Mac: <code>/Applications/Opera Mobile Emulator.app/Contents/Resources/Opera Mobile.app/Contents/MacOS/</code></li>
</ul>
  
<h2 id="inputmodes">Input modes: touch, keypad and tablet</h2>
  
<p>In the <em>Touch</em> and <em>Tablet</em> User Interface, you use the mouse as if it was a finger on an actual touch-screen device. A short click activates links and controls, double-click zooms in and out of a page, while clicking for more than a second (<q>tap-and-hold</q>) brings up the context menu. Scrolling is achieved by clicking and dragging.</p>
	
<p>Any text entry field (such as form elements in a web page, or the browser&#39;s own address bar) will trigger an emulated on-screen keyboard, but you can of course use your regular keyboard for convenience. If you’d like to suppress the virtual keyboard (to simulate a mobile device with its own physical keyboard), use <kbd>F6</kbd> to toggle it on/off.</p>

<p>Emulating pinch zoom is also possible: simply scroll the mouse-wheel while holding <kbd>CTRL</kbd> (Windows and Linux) or <kbd>⌘</kbd> (Mac). On Mac OS X 10.6 and above, you can even use the pinch zoom gesture on the trackpad.</p>
  
<p>In <em>Keypad</em> input mode, the primary controls are:</p>
<ul>
	<li>Cursor keys can be used for spatial navigation around the Speed Dial, address bar and search field. On a web page, the cursor keys move the virtual mouse pointer.</li>
	<li><kbd>F1</kbd> and <kbd>F2</kbd> map to the top left and right soft keys, which activate the functions at the bottom of the screen.</li>
	<li><kbd>Enter</kbd> can be used to activate a control, zoom into the page, etc.</li>
</ul>

<p>For your debugging convenience, the <em>Keypad</em> input mode comes with mouse interaction enabled by default (in other words, <code>-notouchwithtouchevents</code> is the default), allowing you to click on the different UI and page elements. If you prefer the emulator to just respond to keyboard input, you can add a <code>-notouch</code> argument when initiating an Opera Mobile instance from the Profile Selector.</p>
  
<p>In all input modes, <kbd>ALT</kbd> / <kbd>⌥</kbd> + <kbd>R</kbd> is used to simulate a device rotation (or you can click the <em>Rotate screen</em> button in the info bar at the bottom), switching between portrait and landscape mode. <kbd>F5</kbd> or <kbd>CTRL</kbd> / <kbd>⌘</kbd> + <kbd>R</kbd> on the other hand reload the current page.</p>

<p>Also note that in all modes you can perform select all, cut, copy and paste actions using the standard OS clipboard and shortcut keys. In addition, <kbd>CTRL</kbd> / <kbd>⌘</kbd> + <kbd>E</kbd> allows you to open the last string copied to the clipboard as a URL in a new tab. You can also use <kbd>TAB</kbd> and <kbd>SHIFT</kbd>+<kbd>TAB</kbd> to navigate between form elements and <kbd>backspace</kbd> to go to the previous page.</p>
  
<h2 id="featuressettings">Features and settings of the browser</h2>
  
<p>In general usage, Opera Mobile Emulator offers the same functionality available on mobile phones and tablets, including integration of <a href="http://www.opera.com/browser/turbo/">Opera Turbo</a> and <a href="http://www.opera.com/link/">Opera Link</a>, which allows you to sync your bookmarks with our Opera Link servers and other Opera instances.</p>
  
<div><img src="http://forum-test.oslo.osa/kirby/content/articles/409-opera-mobile-emulator-for-desktop/settings.jpg" alt="Settings, Privacy and opera:config" width="640" /><p class="comment">Figure 4: Changing settings in the Opera Mobile Emulator.</p></div>
  
<p>As with <a href="http://www.opera.com/mobile/">Opera Mobile</a> running on devices, the <em>Settings</em> (Figure 4) give quick access to toggle various features and, under <em>Privacy</em>, to clear the history, passwords, cookies, cache and shared locations.</p>
  
<p>Power-users can enter <code>opera:config</code> into the address bar for complete access to all configuration options.</p>

<h2 id="debugging">Remote debugging and browser automation</h2>

<p>Using <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a>’s remote debugging functionality, you can analyze and debug pages running in the Opera Mobile Emulator — see Figure 5.</p>

<div><img src="http://forum-test.oslo.osa/kirby/content/articles/409-opera-mobile-emulator-for-desktop/debugging.jpg" alt="Opera Dragonfly debugging a Web page in Opera Mobile Emulator" />
<p class="comment">Figure 5: Remote debugging with Opera Dragonfly</p></div>

<p>Setting this up is a simple three-step process, which is explained in great detail in our <a href="http://www.opera.com/dragonfly/documentation/remote/">Opera Dragonfly documentation</a>.</p>

<p>Opera Mobile Emulator 12.1 is also able to talk to our browser automation library, OperaDriver. OperaDriver is an implementation of the <a href="http://dvcs.w3.org/hg/webdriver/raw-file/tip/webdriver-spec.html">W3C WebDriver specification</a> and part of the free software web testing framework <a href="http://seleniumhq.org/">Selenium</a>. Selenium provides a lightweight and elegant way of testing web apps by emulating user interaction with actual web browsers. For details on how to use this, see our <a href="http://dev.opera.com/articles/view/introducing-mobile-browser-automation/">introducing mobile browser automation</a> Labs article.</p>
 
<h2 id="conclusion">Conclusion</h2>
<p>We hope that with this release of the <a href="http://www.opera.com/developer/tools/mobile/">Opera Mobile Emulator</a> we’ve made it even easier to develop, optimize and debug on mobile and tablets. Happy developing!</p>
