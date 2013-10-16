Title: Opera 14 beta for Android is out
----
Date: 2013-03-05 00:47:56
----
Author: 
----
Text:

<img src="http://forum-test.oslo.osa/kirby/content/blog/297-opera-14-beta-for-android-is-out/screenshot-o14-2.png" alt="screenshot" title="Opera for Android screenshot" style="float: right; margin: 0 0 10px 16px; box-shadow: #555 0 0 5px;" />

<p>Yes, that&#39;s right: <strong>14</strong>. We think that the <a href="http://my.opera.com/ODIN/blog/300-million-users-and-move-to-webkit">engine switch from Presto to WebKit</a> that we announced a few weeks ago is such a big step that we decided to skip the 13 number altogether, and go straight to 14! But there&#39;s more than just the engine to talk about: you&#39;ll also notice a <strong>total overhaul of the UI</strong> in native code, making it fit well with the latest Android design guidelines. Go get the beta <a href="https://play.google.com/store/apps/details?id=com.opera.browser.beta" title="Opera for Android">from Google Play</a> or point your browser to <a href="http://m.opera.com/">m.opera.com</a>, and give it a spin!</p>

<h2>Android 2.3 and up</h2>
<p>Currently, we <strong>support Android 2.3 and higher</strong>. That&#39;s important, as <a href="http://developer.android.com/about/dashboards/index.html">45% of Android users are still on Gingerbread</a> — now they also can get top of the range features and performance!</p>
<p>At this point, we don&#39;t have an Opera 14 build ready for tablets yet: we&#39;re still working on various UI optimizations and this will be released later.</p>

<h2>A whole new engine</h2>
<p>This first beta release is based on AppleWebKit/537.22 and Chrome/25.0.1364.123 — we plan to follow a fast development cycle, so it&#39;s likely that the final Opera 14 product is based on an even more recent milestone.</p>
<p>The engine inside Opera is very closely in sync with the one included in Chrome Beta (which is also at AppleWebKit/537.22 and Chrome/25.0.1364.122 at the moment), but with some added standardsy goodness.</p>

<p>Opera 14 for Android has out-of-the-box support for:</p>
<ul>
<li><code>input type=color</code></li>
<li>Microdata</li>
<li>WebGL 3D context</li>
<li>CSS3 <code>@supports</code></li>
</ul>

<p>Opera 14 for Android does not have support for:</p>
<ul>
<li>Custom search providers</li>
<li>access to chrome://flags</li>
</ul>

<p>We&#39;ve also adjusted our <abbr title="user agent">UA</abbr> string, so as to avoid old sniffing traps: it&#39;s similar in format as the Chrome UA string, with, for this release, OPR/14.0.1025.52315 appended at the end. Of course, you shouldn&#39;t be looking at this at all, and instead do feature detection, so forget we mentioned it.</p>

<h2>New UI and features</h2>
<p>The first thing you&#39;ll notice is the <strong>new Discover feature</strong>, which helps you find interesting online content. If you pan to the left, <strong>Speed Dial</strong> emerges, which now <strong>also contains all your bookmarks</strong>. You can combine bookmarks in one level-deep sets by dragging and dropping them on top of each other. And if you pan further to the left, you&#39;ll find an overview of your browsing History. These 3 views give you a good place to dive right into browsing, or you can of course query for sites from the redesigned combined address+search bar.</p>
<p>The red O button has moved to the top right of the screen, just like in other Android applications, and it toggles a menu with advanced options, such as Sharing, Find in Page, Downloads, Settings, and more.</p>
<p>However, the one <em>special</em> highlight here is <strong>Off-Road mode</strong>: when toggled on, pages are loaded via the Opera Mini servers, thereby reducing bandwidth and data cost. We thought: <em>Yo dawg, we heard you like browsing, so we put a browser in your browser!</em>. So, no more need to switch browser to get Opera Mini features: you get it all in one package.</p>

<p>Of course, there are many more details to talk about — the plus button, private tabs, browser.js — but we leave those up to you to discover. Enjoy, and let us know what you think!</p>

