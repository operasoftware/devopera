Title: Opera 14 for Android is out!
----
Date: 2013-05-21 05:00:00
----
Author: 
----
Text:

<p><strong>Yay, and — dare I say it — w00t! Opera 14 for Android is released!</strong></p>

<p>Opera 14 for Android is built on top of <a href="http://www.chromium.org/">Chromium 26</a>, with a <strong>total overhaul of the UI</strong> in native code, making it fit well with the latest Android design guidelines. Go <a href="https://play.google.com/store/apps/details?id=com.opera.browser" title="Opera for Android">get the build from Google Play</a> or point your browser to <a href="http://m.opera.com/">m.opera.com</a>, and give it a spin!</p>

<h2>A great browser for Android 2.3 and up</h2>

<p>Currently, we support Android 2.3 and higher. That&#39;s important, as <a href="http://developer.android.com/about/dashboards/index.html">38.5% of Android users are still on Gingerbread</a> — now they can get top of the range features and performance, just like users on newer Android versions!</p>

<p>Note that we don&#39;t have an Opera 14 build ready for tablets yet: we&#39;re still working on various tablet-specific UI optimizations, and this will be released later on.</p>

<h2>A whole new engine</h2>

<img src="http://forum-test.oslo.osa/kirby/content/blog/299-opera-14-for-android-is-out/opera-audio-handling-300.png" alt="screenshot" title="Audio handling in Opera for Android" style="float: right; margin: 0 0 10px 22px; box-shadow: #555 0 0 5px;" />

<p>Opera 14 is based on Chromium 26, which does not include <a href="http://www.chromium.org/blink">Blink</a> just yet. However, as we plan to stay closely in sync with the Chromium development cycle, doing frequent updates, you can expect it in a future release. In the meantime, we&#39;ve added/enabled some extra standardsy goodness already for you to use:</p>

<ul>
<li><code>&lt;input type=color&gt;</code> support: try it with <a href="http://jsbin.com/oxomam/1/">this simple demo</a></li>
<li><a href="http://dev.opera.com/articles/view/an-introduction-to-webgl/">WebGL 3D context</a> is enabled: you can try out <a href="http://operasoftware.github.io/Odin/mobile/">our Odin demo</a>, for instance, or why not <a href="http://dev.opera.com/articles/view/an-introduction-to-webgl/">try building something with WebGL</a> yourself?</li>
<li><a href="http://dev.opera.com/articles/view/native-css-feature-detection-via-the-supports-rule/">CSS3 <code>@supports</code></a>, which allow you to do simple feature detection using CSS.</li>
</ul>

<p>We&#39;ve also done something cool with how we handle HTML5 audio: if you start playing e.g. <a href="http://m.soundcloud.com/jamie-van-dyck/ugonnas-song-july-7th-8th-2012">this excellent song on SoundCloud</a>, you&#39;ll see that a pause button appears in the Android notification area. You can now switch tabs, or even open other apps while the song is playing, and easily control playback from the notification area.</p>

<p>Note: some things we don&#39;t support in this first release include custom search providers and access to about://flags.</p>

<p>We&#39;ve also adjusted our <abbr title="user agent">UA</abbr> string, so as to avoid old sniffing traps: it&#39;s similar in format to the Chrome UA string, with, for this release, OPR/14.0.1074.57453 appended at the end. Of course, you shouldn&#39;t be looking at this at all, and instead do feature detection, so forget we mentioned it.</p>

<h2>New UI and features</h2>

<p>When opening Opera for Android, you&#39;re greeted by our overhauled <strong>Speed Dial</strong>, which now combines favorite sites with bookmarks into one view. You can group bookmarks in one level-deep sets by dragging and dropping them on top of each other. A swipe away to the left (rather than hidden away in a submenu somewhere), you find your browsing <strong>History</strong>, and towards the right, there is our new <strong>Discover</strong> page, which helps you find interesting online content to jump straight into browsing — ideal to kill those 10 minutes waiting for the bus to arrive.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/blog/299-opera-14-for-android-is-out/top3.png" alt="screenshot" title="Opera for Android with navigation bar on top" style="float: left; margin: 0 15px 10px 5px; box-shadow: #555 0 0 5px;" />
<img src="http://forum-test.oslo.osa/kirby/content/blog/299-opera-14-for-android-is-out/bottom3.png" alt="screenshot" title="Opera for Android with navigation bar on bottom" style="float: left; margin: 0 0 10px 0; box-shadow: #555 0 0 5px;" /></p>

<p>You can of course also query for sites from the redesigned navigation bar on top. And we&#39;ve made some adjustments here since the beta release: in the Settings menu, you find an option to move the navigation bar to the bottom. It costs you a bit of screen real estate, but makes for a more relaxed single-handed browsing experience.</p>

<p>The red O button has moved to the top right of the screen (unless you put the Navigation bar at the bottom), just like in other Android applications, and it toggles a menu with <a href="http://www.opera.com/help/mobile">advanced options</a> such as Sharing, Find in Page, Downloads, Settings, and more.</p>

<p>If you miss an Exit button or want to go back more than one page in the tab&#39;s History, long-press the back button. To save a page to read off-line, hit the + icon at the left of the address bar.</p>

<h2>Off-Road mode</h2>

<p>A <em>special</em> mention for Off-Road mode, available from the red O menu: when toggled on (also subtly indicated by a thin red line on top of the browser), pages are loaded via the Opera Mini servers, thereby reducing bandwidth and data cost. So, no more need to switch browser to get Opera Mini&#39;s data compression features: you get it all in one package.</p>

<p>To learn more about optimizing for Opera Mini and Off-Road mode, read our <a href="http://dev.opera.com/articles/view/opera-mini-and-javascript/">Opera Mini and JavaScript</a> article.</p>

<p>Keep in mind that users can set their own preference of Off-Road-specific image quality: they can increase or decrease image quality, or even opt to receive no images at all (a good option to have, since <a href="http://httparchive.org/interesting.php#bytesperpage">images account for more than 50% of page size</a>). As my colleague Bruce points out: be sure to use alternative text with images, and remember — it&#39;s not just for the visually impaired!</p>

<h2>Automatic text wrap</h2>

<img src="http://forum-test.oslo.osa/kirby/content/blog/299-opera-14-for-android-is-out/text-wrap.png" alt="screenshot" title="Text wrap example" style="float: right; margin: 0 0 10px 22px; box-shadow: #555 0 0 5px;" />

<p>By default, Opera for Android uses the same text autosizing (aka FontBoosting) mechanism that can be found in Chrome for Android. E.g. if you visit <a href="http://en.wikipedia.org/w/index.php?title=Artichokes&amp;mobileaction=toggle_view_desktop">this desktop-specific Wikipedia page about artichokes</a>, you see that some of the text is displayed bigger, making it readable without having to zoom in. However, as FontBoosting is only applied selectively and interferes with author-defined text size differences, we&#39;ve made it possible to turn this off in Settings, and choose for automatic text wrap instead. Turning on text wrap instructs Opera for Android to wrap lines no matter how much you zoom into a page so there&#39;s no need for horizontal scrolling.</p>

<h2>Remote debugging</h2>

<p>Of course, there will be times as a developer when you&#39;ll need to debug sites running on Opera 14 for Android. This can be done from Windows, Mac and Linux desktops — see our article about <a href="http://dev.opera.com/articles/view/remotely-debugging-opera-for-android/">remote debugging Opera for Android</a>.</p>

<h2>Made to discover</h2>

<p>Of course, there are many more details to talk about — offline pages, private tabs, browser.js — but we&#39;ll leave those for you to discover. Enjoy, and let us know what you think!</p>
