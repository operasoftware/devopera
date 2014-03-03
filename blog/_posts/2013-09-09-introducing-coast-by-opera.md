---
title: Introducing Coast by Opera
authors:
- bruce-lawson
tags:
- coast
- opera
- apps
- ipad
- browser
- odin
license: cc-by-3.0
layout: post
---

<p>Today, we&#39;re launching a new iPad product called <a href="http://coastbyopera.com">Coast by Opera</a>. Primarily designed for leisure surfing, the goal is invisible technology; the browser treats websites as apps, using gestures for navigation so that nothing gets in the way of an intuitive, full-screen experience.</p>

<p>Since Mosaic, browsers have sported back buttons, menus, icons (many of which have barely changed in 20 years). Coast dispenses with most of these; &quot;back&quot; is a left swipe; adding to speed dial is a single drag of a site&#39;s icon; reload is a drag downwards. The only buttons that remain are a home button and a &quot;recent sites&quot; button.</p>
<p>We want Coast to help close the user experience gap between traditional web browsers rendering web pages, and apps. We don&#39;t want native apps to beat the web — we want the web to win.</p>

<object width="640" height="360">
<param name="movie" value="http://www.youtube.com/v/PY23b1X9mAM" />
<param name="allowFullScreen" value="true" />
<param name="allowscriptaccess" value="never" />
<embed src="http://www.youtube.com/v/PY23b1X9mAM" type="application/x-shockwave-flash" allowfullscreen="true" width="640" height="360" allowscriptaccess="never" />
</object>

<h2>For developers</h2>

<p>Coast by Opera &quot;appifies&quot; websites (sorry for the nasty neologism!). Therefore, Coast should <i>Just Work</i>&#x2122; if you&#39;re making sites that already work well across devices and browsers, with big hit areas for fat fingers, that listen out for touch events (maybe with <a href="https://handjs.codeplex.com">HandJS</a>, a polyfill for W3C Pointer Events to abstract away listening for mouse and touch).</p>

<h3>Coast icon size</h3>
<p>Coast treats sites as apps, so the icon you provide is vital to users being able to identify your site.</p>
<p>In general, icon references and domain names are used to group pages into the same web app on Coast&#39;s home screen or in search results. You should include the same icons and icon-reference markup for pages you want grouped together.</p>

<p>For the best image fidelity, Coast prefers a web-app image size of 228 x 228px —  larger than Microsoft tile images and Apple touch icons (144 x 144px). The following markup in your &lt;head&gt; element denotes an icon optimized for Coast:</p>
<pre>
<code>
&lt;link rel=&quot;icon&quot; href=&quot;$URL&quot; sizes=&quot;228x228&quot;&gt;
</code>
</pre>

<p>This won&#39;t conflict with any other icons and tiles you already have assigned for Windows 8, Android or iOS. If you don&#39;t supply an 228x228 icon, Coast uses <a href="http://coastbyopera.com/developer">heuristics to derive its icon</a>.</p>

<h3>Web Standards support</h3>

<p>Coast uses Apple&#39;s UIWebView embedded in iOS. This is based on WebKit.</p>

<h3>Get Coast</h3>

<p>Coast is available in the App Store. We think it&#39;s the browser that the iPad should have shipped with. We&#39;re excited to know what you think of it.</p>
