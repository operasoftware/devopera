---
title: Remotely Debugging Opera for Android
author: Chris Mills
layout: default
---
<h2>Introduction</h2>

Now that Opera for Android is out, you'll sometimes need to debug it, as there are differences in Standards support between Opera and Chrome for Android and Chrome on Android 4+ (<code>&lt;input type=color&gt;</code>, <code>@supports</code>, etc,).

Because current and future Opera for Android releases are based on Chromium, we can't use Presto-based Opera desktop releases to connect to them (wait for Chromium-based Opera desktop releases for that). So here's how to connect Opera for Android to another Chromium-based desktop browser for remote debugging.

<h2>Preparing your desktop</h2>

You'll be remotely debugging your phone from your desktop, so let's get the desktop ready.

<h3>Install Android SDK</h3>

The first thing you'll need is the <a href="http://developer.android.com/sdk/index.html#download">Android SDK — download it</a> and then put the kettle on; it's a 400MB file. 

Extract the files to a memorable location, such as <samp>/Users/<em>your-user-name</em>/adt</samp> or <samp>c:android/adt</samp>. If you choose something else, use that in the example steps below.

<p class="note">Windows users may need to <a href="http://developer.android.com/tools/extras/oem-usb.html ">install Device drivers</a>. Linux and Mac users shouldn't need to.

<h3>Install a Chromium-based browser</h3>

You'll need a Chromium-based desktop browser. Until Chromium-based Opera desktop releases are available, we suggest Google Chrome, Chromium, or the Yandex browser.

<h3>Preparing your device</h3>

Ensure that you have a USB cable available to connect your Android device to your computer (the USB power cable should be fine) and <a href="https://play.google.com/store/apps/details?id=com.opera.browser">Opera for Android</a> installed on it (see the <a href="http://www.opera.com/help/mobile">Opera for Android user guide</a> for installation help, if needed.) Keep the phone disconnected from your computer just for now.

<p class="note">Note that you can't remotely debug Opera Mini from desktop, as the rendering is done on our Mini servers and only displayed on the device. (<a href="http://www.opera.com/help/mini/faq">Opera Mini FAQs</a>) 

Next, you need to <a href="http://developer.android.com/tools/device.html">enable USB debugging on your device</a>. Check the "USB debugging" checkbox in Developer Options. 
<ul>
<li>On Android 2.3, the option is under Settings &gt; Applications &gt; Development</li>
<li>On Android 4.0 and newer, it's in Settings &gt; Developer options</li>
<li>On Android 4.2 and newer, go to Settings &gt; About phone and tap Build number seven times to get a message that says "congratulations! you are now a developer". Returning to the previous screen shows previously-hidden developer options.</li>
</ul>

On Android 4.2.2 and higher, you'll see a dialog asking whether to accept an RSA key. This is a security mechanism; accept the dialog.

<p class="note">When doing mobile debugging on Android it is also useful to check the "stay awake" option that you'll find in the same place as the "USB debugging" option, so the device stays on while plugged into USB, but this isn't mandatory.

<img src=stay-awake.png alt="Android developer options with 'Stay Awake' option checked">

Before moving on, connect your phone to your computer via the USB cable. If it was already connected, try disconnecting and reconnecting it, just to make sure the computer recognises the phone properly. You should see a message on the phone along the lines of "USB debugging connected" to indicate that things are proceeding successfully.

<h2>Connect desktop to device</h2>

Start Opera for Android, and enable debugging by entering <samp>opera:debug</samp> in your address bar and checking the "enable" checkbox in the resulting page, as seen below.

<img src=opera-debug.png alt="opera:debug page and 'enable' checkbox">

Now let's get the debugger started:

<ul>
  <li>In your computer's terminal, navigate to the directory into which you extracted the Android SDK. Once there, navigate to sdk &gt; platform-tools. Inside there you should see an executable called <samp>adb</samp>, which is an acronym for Android Debugging Bridge.</li>
 <li>To start the debugging bridge, Type in the following terminal command:
<pre><code>adb forward tcp:9222 localabstract:opera_devtools_remote</code></pre></li>

 <li>You should see a message output along the lines of the following:

<pre><code>* daemon not running. starting it now on port 5037*
* daemon started successfully *</code></pre></li>
</ul>

<div class="note">
If you are using Linux or Mac OSX, you will have to add ./ at the start of the terminal command above, to tell terminal to look for adb inside the current directory, and not your Path. To avoid having to do this every time, you could add a path to adb in your actual path. You can do this by placing a line in your <samp>~/.profile</samp> or <samp>~/.bash_profile</samp> like so:

<code>export PATH=/Users/your-username/path-to-adk-folder/adt/sdk/platform-tools/:$PATH</code>

You'll then need to restart the Terminal, or open a new tab.
</div>

<h2>Debug!</h2>

Your device and desktop browser should now be connected and able to send information to each other across the debugging bridge. To begin debugging, go to <samp>localhost:9222</samp> in your desktop browser. You'll see a list of inspectable tabs (note that if you open a new tab on the device, you'll need to refresh the Inspectable Tabs page):

<img src=inspectable-tabs.png alt="localhost:9222 list of inspectable tabs">

<p class="note">If you instead get a message saying that the server sent no data, or similar, you might have typed in the Terminal command incorrectly. Go back to the Terminal, check it, and try again. There is a very small chance that, if it didn't work, the bridge isn't running, but its process still is. If you still have a problem upon retrying the Terminal command, you might have kill the process directly. This can be done by first typing the command <code>ps -A</code> to bring up a list of running processes, finding the right process ID (the one with "adb fork-server server" in the CMD column), and then killing it with <code>kill <em>your-process-id</em></code>.

Clicking on one of the inspectable tabs brings up the web inspector full-screen, allowing you to debug, change the page, and <a href="https://docs.google.com/presentation/d/1DNljLkRpe9LIDfcqcpHzdLvEOyuVH4d1y9dtAJBr1I8/preview#slide=id.p19">all sorts of amazing things</a>:

<img src="web-inspector.gif" alt="web inspector showing page, changing a heading">

and the changes are immediately visible on your device:

<img src="android-debugging.png" alt="changes happen on the device instantly">

<h2>What about Opera Dragonfly?</h2>

The current version of Opera Dragonfly (which is Presto-based) won't work with Chromium, hence using the Web Inspector for now. If you'd like to work on future incarnations of Opera Dragonfly, <a href="http://business.opera.com/company/jobs/opening/372/">we're hiring</a>!

<p class="note">Cover image by <a href="http://www.flickr.com/photos/sleepingcatbeads/3872894835/">sleepingcatbeads</a>.