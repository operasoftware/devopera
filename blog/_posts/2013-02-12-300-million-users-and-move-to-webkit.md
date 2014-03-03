---
title: 300 Million Users and Move to WebKit
authors:
- bruce-lawson
tags:
- webkit
- odin
license: cc-by-3.0
layout: post
---

<p>On the same day as announcing that Opera has 300 million users, we&#39;re also announcing that for all new products Opera will use WebKit as its rendering engine and V8 as its JavaScript engine. It&#39;s built using the open-source Chromium browser as one of its components. Of course, a browser is much more than just a renderer and a JS engine, so this is primarily an &quot;under the hood&quot; change. Consumers will initially notice better site compatibilty, especially with mobile-facing sites - many of which have only been tested in WebKit browsers. The first product will be for Smartphones, which we&#39;ll demonstrate at Mobile World Congress in Barcelona at the end of the month. Opera Desktop and other products will transition later.</p>

<h3>TL;DR</h3>
<ul>
 <li>This will require no changes to your web development practices: <strong>keep coding to standards</strong>!</li>
 <li>Opera Extensions that you&#39;ve built aren&#39;t obsolete</li>
 <li>Opera will contribute to the WebKit and Chromium projects</li>
 <li>Our work on web standards to advance the web continues</li>
</ul>

<h3>What does this mean for web developers?</h3>


<p>The short answer is that it shouldn&#39;t affect your day-to-day work. Keep coding to the standards, not to individual rendering engines; test across browsers - Opera, Firefox, Chrome, Safari and Internet Explorer; use all vendor prefixes and an unprefixed form in your CSS and JavaScript. However, it remains important to keep the following in mind:</p>
<ul>
<li>Chromium, and therefore future versions of Opera, has built-in support for the WebM, Ogg Theora and Ogg Vorbis media codecs but does not natively support H.264 or MP3 media codecs (although if these are installed in a device&#39;s operating system it will allow that to render media). The correct way to check support is with <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#dom-navigator-canplaytype">HTML5 <code>canPlayType</code></a>. The simplest method to ensure all modern browsers receive the correct codecs is to encode in both WebM and H.264 and provide two <code>&lt;source&gt;</code> elements or use <code>canPlayType</code> to check support (see <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> for more information).</li>
<li>The <code>window.opera</code> object will not exist in future versions of Opera. We continue to recommend that developers <a href="http://www.ietf.org/rfc/rfc2119.txt">SHOULD NOT</a> use browser-sniffing; feature-detection - either using a 3rd party solution such as <a href="http://modernizr.com/">Modernizr</a> or <a href="http://diveintohtml5.info/everything.html">hand-rolling</a> your own - is better.</li>
</ul>

<h3>What does this mean for extension developers?</h3>

<p>Extensions have been the most successful Opera add-on and it&#39;s of paramount importance to us that existing extensions continue working. We&#39;ve been working on a conversion tool that will take existing OEX extensions and convert them into a format that can be used by Chromium-based Opera for computers. In addition, we&#39;ll provide conversion tutorials and documentation, and we&#39;ll provide assistance through our developer forums as well. In short, we stay totally committed to our enthusiastic community of extension developers and users, and we&#39;ll do our best to make the transition as smooth as possible.</p>

<h3>Why is Opera switching?</h3>

<p>When we first began, back in 1995, we had to roll our own rendering engine in order to compete against the Netscape and Internet Explorer to drive web standards, and thus the web forward. When we started the spec that is now called &quot;HTML5&quot;, our goal was a specification that would greatly enhance interoperability across the web.

<p>The WebKit project now has the kind of standards support that we could only dream of when our work began. Instead of tying up resources duplicating what&#39;s already implemented in WebKit, we can focus on innovation to make a better browser. Opera innovations such as tabbed browsing, Speed Dial and data-saving compression that speeds up page-load, have been widely copied and improved the web for all.</p>

<p>We remain completely committed to improving the web through our standardisation work.  We have 18 years experience in standards and making browsers. Standards that began at Opera such as <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/introduction.html#history-1">HTML5</a>, <a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html">native video</a> and <a href="http://www.w3.org/People/howcome/p/cascade.html">Media Queries</a> are a vital part of the modern web.</p>

<p>We&#39;ll continue to advance the Web by contributing to the WebKit and Chromium projects. We have great experience in making products that work everywhere. In our internal builds, we&#39;ve experimented with adding support for some new standards and enhanced some features that were lacking compared with Presto (for example, <a href="https://bugs.webkit.org/show_bug.cgi?id=15553">multi-column layout</a>).</p>
<p>In the last few weeks <a href="https://lists.webkit.org/pipermail/webkit-dev/2013-February/023820.html" target="_blank">we&#39;ve contacted the Webkit project</a>, and contributing organisations, to discuss our intentions to work with them to make WebKit even better. By contributing patches back to WebKit, we&#39;ll enhance standards compliance across a range of browsers, not just Opera.</p>

<p>So, this year, we&#39;re sending two Valentine cards: our usual one to the open, interoperable web, and one to WebKit too.</p></p>
