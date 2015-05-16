---
title: A Hot Opera 12.50 Summer-Time Snapshot
authors:
- patrick-lauke
tags:
- opera-presto
license: cc-by-3.0
---

<p>Summer is usually a quiet time in the Opera offices, but looking at the latest <a href="http://my.opera.com/desktopteam/blog/2012/08/03/summer-core-update">Opera 12.50 snapshot</a>, you&#39;d be forgiven for thinking that our developers have never heard of vacation time.</p>

<p>In among a giant list of bug fixes and tweaks, there are some interesting stand-out features worth highlighting:</p>

<h2>Unprefixing stable CSS properties</h2>
<p>A wise man (well, our man Bruce Lawson) once said &quot;One of the best ways to have no troubles with prefixes [from a browser&#39;s point of view] is not to use them&quot;. In this snapshot we&#39;re removing the <code>-o-</code> prefixes from our implementation of <a href="http://www.w3.org/TR/css3-transitions/">Transitions</a>, <a href="http://www.w3.org/TR/css3-animations/">Animations</a> and <a href="http://www.w3.org/TR/css3-transforms/">Transforms</a>.</p>

<p>If you&#39;ve been using <code>-o-</code> prefixed versions like <code>-o-transform</code> or <code>-o-transition</code> in your stylesheets, make sure that you&#39;re also including the unprefixed versions, as the old prefixed properties will be dropped in 12.50.</p>

<p>Of course, this also has an effect on any related JavaScript events and properties – so things like the <code>oTransitionEnd</code> event will be dropped in favour of the unprefixed (and lowercased, as per spec) <code>transitionend</code> event.</p>

<h2>WebSockets</h2>

<p>Although the current stable release of Opera already has sockets support, it has been disabled by default because it was using an older version of the spec. This snapshot brings our implementation up to the latest <a href="https://tools.ietf.org/html/rfc6455">WebSockets protocol RFC-6455</a> and it is now enabled by default.</p>

<h2>New Opera extension APIs</h2>
<p>A few months ago, we released a special <a href="https://dev.opera.com/articles/view/new-extension-apis-screenshot-resource-loader-url-filter/">Opera Labs</a> build with the new Screenshot and Resource Loader APIs and an improved URL Filter API (including whitelisting, 3rd-party blocking, and a new filter syntax) for extensions. We&#39;ve had some great feedback from developers on these features, and with today&#39;s release of the Opera 12.50 snapshot we are now &quot;promoting&quot; these new and improved APIs out of the labs and putting them on track for our next stable release.</p>

<h2>User-Agent string changes</h2>
<p>Opera 12.50 will ship with a simplified UA string. Firstly, we have dropped the &quot;<code>U;</code>&quot; token, which signified that the browser provides crypto support that is stronger than what the &quot;international&quot; builds of Netscape offered circa 1995. The second change is removal of the language indicator. As an example, while the UA string for Opera 12.01 on Mac is currently</p>

<pre><code>Opera/9.80 (Macintosh; Intel Mac OS X 10.8.0; <strong>U; en</strong>) Presto/2.10.289 Version/12.01</code></pre>

<p>today&#39;s snapshot for Opera 12.50 on Mac shows</p>

<pre><code>Opera/9.80 (Macintosh; Intel Mac OS X 10.8.0) Presto/2.12.363 Version/12.50</code></pre>

<p>In a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=572656#c0">corresponding Mozilla bug report</a>, Henri Sivonen explains why this matters. If you&#39;re interested in figuring out the user&#39;s locale, you should be looking at the <code>Accept-Language</code> header instead.</p>
<p>Both these changes correspond to similar changes in the IE, Firefox, Chrome and Safari browsers&#39; UA strings. We&#39;re not aware of site compatibility issues caused by this change, except for one: at the moment, Google+ shows a browser warning when accessed with Opera builds sporting this new streamlined UA string, due to overly strict string parsing. <a href="http://productforums.google.com/d/topic/google-plus-discuss/w617dQsAaUc/discussion">We have informed Google about this</a>, and are looking forward to a fix. *nudge*</p>
