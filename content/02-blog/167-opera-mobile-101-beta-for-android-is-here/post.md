Title: Opera Mobile 10.1 beta for Android is here
----
Date: 2010-11-09 06:00:00
----
Author: 
----
Text:

<img src="http://forum-test.oslo.osa/kirby/content/blog/167-opera-mobile-101-beta-for-android-is-here/scrn-android.png" style="float: right; margin: 0 0 3px 10px; width: 240px;" /> 
<p>We&#39;ve just released our first version of Opera Mobile for Android — you can get it from <a href="http://m.opera.com/">m.opera.com</a>. It comes packed with features and standards support, with more things under way. A quick overview.</p>
<h3>Pinch zoom and text wrap</h3>
<p>Unlike earlier Opera Mobile versions for other platforms, this release has support for pinch zoom, and a handy automatic text-wrap feature to go with it. The latter allows us to preserve the layout of the page upon initial display, while focusing on readability upon zooming in: no need to scroll from left to right to read long sentences. Be sure to play around with the various text-wrap settings (default is &quot;on tap&quot;), and let us know what works best for you.</p>
<h3>Vega and Carakan</h3>
<p>Opera Mobile 10.1 for Android has <a href="http://my.opera.com/core/blog/2009/02/04/vega?id=2953968">Vega</a> and <a href="http://my.opera.com/core/blog/2009/12/22/carakan-revisited">Carakan</a> (without <abbr title="Just-in-time compilation">JIT</abbr>) support, which means it has support for CSS3 features such as <code>border-radius</code>, <code>box-shadow</code> and 2D transforms, as well as fast JavaScript.</p>
<h3>Touch events and viewport</h3>
<p>We&#39;ve added support for <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html">touch events</a>, and have revisited our <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html">meta viewport</a> implementation to make it more robust. One of the improvements is that if you use a viewport value such as e.g. <code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code> (our <a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/#viewport">recommended setting</a> for cross-device compatibility), the page content will automatically fit inside the available screen width at any zoom level setting (e.g. 160% by default on my HTC Desire).</p>
<h3>SVG, Geolocation and more</h3>
<p>Opera Mobile 10.1 beta for Android has <a href="http://www.opera.com/docs/specs/presto25/#supporttables_collapsed">extensive support for SVG</a> — in fact, it is the first browser on the Android Store to do so —, the <a href="http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/">Geolocation API</a>, and more. Web fonts support is currently disabled, but we expect to enable it for the final release, and hope to add support for things like Web Storage, Application Cache, and so on.</p>
<h3>User agent string</h3>
<p>The UA string for this release is as follows:</p>
<p><strong>Opera/9.80 (Android; Linux; Opera Mobi/ADR-1011081433; U; en) Presto/2.5.28 Version/10.1</strong></p>
<p>As always, browser sniffing comes with a <a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/#strategy-2">number of caveats</a>, as it is likely to exclude certain platforms and models, so only use it if really necessary. We recommend using a combined approach of feature detection and progressive enhancement instead.</p>
<h3>Debugging</h3>
<p>Hot on the heels of this release for Android, we&#39;ll be releasing an update to the <a href="http://www.opera.com/developer/tools/">Opera Mobile emulator</a>, so you can run and test in the same browser from the comfort of your PC or Mac. Expect more about this in the weeks to come!</p>
<p>And for those who haven&#39;t tried out Opera Dragonfly&#39;s <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">remote debugging</a> capabilities with Opera Mobile: be sure to give it a spin with this Android release. The <a href="http://dragonfly.opera.com/app/scope-interface/">Scope protocol version</a> inside this Opera Mobile release has been upgraded to STP-1, so debugging is much faster than in previous Opera Mobile versions.</p>
<p>So, that&#39;s a wrap. Let us know what you think!</p>
