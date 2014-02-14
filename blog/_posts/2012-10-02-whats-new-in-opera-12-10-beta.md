---
title: What's new in Opera 12.10 beta
authors:
- bruce-lawson
tags:
- spdy
- HTML5
- Standards
- Opera
- icc
- extensions
- prefixes
- blog
layout: article
---
<p><a href="http://www.opera.com/browser/next/">Opera 12.10 beta</a> streamlines and speeds up browsing for end-users, makes images more beautiful, and includes functionality that allows web developers to add user-friendly features to their pages and extensions.</p>
<p>Previously, snapshots were versioned as &quot;Opera 12.50&quot;, but we&#39;ve reduced the version number to Opera 12.10.</p>

<h2>Operating System Integration</h2>

<p>You use your operating system all the time, and need your browser to feel part of it. Opera 12.10 for Mac supports a number of new Mac OS X Mountain Lion features such as Notification Center and built-in sharing of content to social networks, and even comes with Retina Display support. Windows users aren&#39;t left out; as part of our continuing work on Windows 8 integration, Opera 12.10 beta has inertia scrolling and pinch-to-zoom on Windows 7 and Windows 8.</p>

<p>Opera 12.10 beta now supports <a href="http://www.color.org/version4html.xalter">International Color Consortium (ICC) profile v4</a>, which will make photographs more vibrant and colorful, displaying them exactly as the photographer intended.</p>

<h2>SPDY support</h2>

<p>Opera has always been about speed, so the new release incorporates the new <a href="http://en.wikipedia.org/wiki/SPDY">SPDY protocol</a>, which makes web pages load faster on SPDY-enabled sites such as Twitter, Gmail, WordPress and (soon) Facebook. For consumers, things will just work faster, but developers wishing to see which sites have SPDY support can download a <a href="https://addons.opera.com/de/extensions/details/spdy-indicator/">SPDY indicator extension</a>.</p>

<h2>Extensions</h2>

<p>Talking of extensions, we&#39;ve added several new APIs to give more power to developers. The most notable of these is the <a href="http://dev.opera.com/articles/view/extensions-api-contextmenu/">Context Menu API</a> that allows an extension to add options to the user&#39;s right-click menu. Other improvements include the <a href="http://dev.opera.com/articles/view/extensions-api-resourceloader/">Resource Loader API</a>, the <a href="http://dev.opera.com/articles/view/extensions-api-screenshot/">Screenshot API</a> and an update to our <a href="http://dev.opera.com/articles/view/extensions-api-urlfilter/">URL Filter API</a>.</p>

<p>In order to ensure security for end-users, by default <a href="http://my.opera.com/desktopteam/blog/2012/09/06/increased-security-when-installing-extensions">only extensions that are hosted by Opera may be installed</a>, as these have been rigorously tested to ensure they&#39;re safe and don&#39;t harm a user&#39;s machine or data.</p>

<h2>HTML5 and Web Standards</h2>

<p>Opera is the browser that <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/introduction.html#history-1">began the HTML5 specification</a> that is transforming the web, so it&#39;s only natural that we&#39;d be adding more support for the latest standards.</p>

<p>Opera 12.10 beta adds partial support for the Fullscreen API that allows video, games or web pages to use the whole screen to remove distractions like browser chrome that can divert your attention from skateboarding kittens or shooting aliens. (We say &quot;partial&quot; because new &quot;HTML5 the living-on-the-edge standard&quot; specs chop and change. This beta implements the <a href="http://dvcs.w3.org/hg/fullscreen/raw-file/529a67b8d9f3/Overview.html" rel="nofollow">Fullscreen API editors&#39; draft 7 February 2012</a>, while the standard has now mutated in the latest <a href="http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html" rel="nofollow">July 2012 version</a>.)</p>

<p>There&#39;s also partial support for the <a href="http://www.w3.org/TR/page-visibility/">Page Visibility API</a> that allows a tab to know if it isn&#39;t visible so, for example, it could suspend resource-hungry animations or pause HTML5 audio/video until the tab returns to view.</p>

<p>Now that security concerns with the Web Sockets spec are addressed, we&#39;ve turned on this functionality by default in Opera 12.10 beta.</p>

 <h2>User-Agent string changes</h2>
<p>Opera 12.10 will ship with a simplified UA string. Firstly, we have dropped the &quot;<code>U;</code>&quot; token, which signified that the browser provides crypto support that is stronger than what the &quot;international&quot; builds of Netscape offered circa 1995. The second change is removal of the language indicator. As an example, while the UA string for Opera 12.02 on Windows 7 is currently</p>

<pre><code>Opera/9.80 (Windows NT 6.1; WOW64; U; en) Presto/2.10.289 Version/12.02</code></pre>

<p>today&#39;s snapshot for Opera 12.10 on Windows shows</p>

<pre><code>Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.10</code></pre>

<p>In a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=572656#c0">corresponding Mozilla bug report</a>, Henri Sivonen explains why this matters. If you&#39;re interested in figuring out the user&#39;s locale, you should be looking at the <code>Accept-Language</code> header instead.</p>
<p>Both these changes correspond to similar changes in the IE, Firefox, Chrome and Safari browsers&#39; UA strings.</p>
<h2 id="prefixes">CSS and Site Compatibility</h2>

<p>Opera 12.10 beta now supports unprefixed CSS transitions, transforms, gradients and animations. For a transitional period, we&#39;ll also support transitions, transforms and gradients (but not animations) with an -o- prefix, but these will be phased out in order to promote site compatibility and leaner code.</p>

<p>This beta also introduces support for certain -webkit- prefixes on sites that don&#39;t correctly use unprefixed versions of stable CSS properties.</p>
<p class="note">Broadly speaking, where developers haven&#39;t coded for cross-browser compatibility, Opera will treat -webkit- rules as if they were unprefixed and therefore render the sites properly so users aren&#39;t penalised.</p>

<p>Of course, this also has an effect on any related JavaScript events and properties – so things like the <code>oTransitionEnd</code> event will be dropped in favour of the unprefixed (and lowercased, as per spec) <code>transitionend</code> event.</p>

<p>If you&#39;re interested in the absolute minutiae, here is a handy cut-out-and-keep chart you can keep in your anorak pocket.</p>

<table>
 <thead>
  <tr>
   <th></th>
   <th id="prefixesColHdr2">-o-</th>
   <th id="prefixesColHdr3">-webkit-</th>
   <th id="prefixesColHdr4">unprefixed (standardised)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th id="prefixesRowHdr2">linear-gradient</th>
   <td headers="prefixesColHdr2 prefixesRowHdr2">yes; old syntax</td>
   <td headers="prefixesColHdr3 prefixesRowHdr2">yes; old syntax</td>
   <td headers="prefixesColHdr4 prefixesRowHdr2">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr2">repeating-linear-gradient</th>
   <td headers="prefixesColHdr2 prefixesRowHdr2">no</td>
   <td headers="prefixesColHdr3 prefixesRowHdr2">no</td>
   <td headers="prefixesColHdr4 prefixesRowHdr2">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr2">radial-gradient</th>
   <td headers="prefixesColHdr2 prefixesRowHdr2">no</td>
   <td headers="prefixesColHdr3 prefixesRowHdr2">no</td>
   <td headers="prefixesColHdr4 prefixesRowHdr2">yes</td>
  </tr>
    <tr>
   <th id="prefixesRowHdr2">repeating-radial-gradient</th>
   <td headers="prefixesColHdr2 prefixesRowHdr2">no</td>
   <td headers="prefixesColHdr3 prefixesRowHdr2">no</td>
   <td headers="prefixesColHdr4 prefixesRowHdr2">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr3">animation</th>
   <td headers="prefixesColHdr2 prefixesRowHdr3">no</td>
   <td headers="prefixesColHdr3 prefixesRowHdr3">no</td>
   <td headers="prefixesColHdr4 prefixesRowHdr3">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr4">transform</th>
   <td headers="prefixesColHdr2 prefixesRowHdr4">yes (deprecated)</td>
   <td headers="prefixesColHdr3 prefixesRowHdr4">yes</td>
   <td headers="prefixesColHdr4 prefixesRowHdr4">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr5">transition</th>
   <td headers="prefixesColHdr2 prefixesRowHdr5">yes (deprecated)</td>
   <td headers="prefixesColHdr3 prefixesRowHdr5">yes</td>
   <td headers="prefixesColHdr4 prefixesRowHdr5">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr6">border-radius</th>
   <td headers="prefixesColHdr2 prefixesRowHdr6">never existed</td>
   <td headers="prefixesColHdr3 prefixesRowHdr6">yes</td>
   <td headers="prefixesColHdr4 prefixesRowHdr6">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr7">background-size</th>
   <td headers="prefixesColHdr2 prefixesRowHdr7">no</td>
   <td headers="prefixesColHdr3 prefixesRowHdr7">yes</td>
   <td headers="prefixesColHdr4 prefixesRowHdr7">yes</td>
  </tr>
  <tr>
   <th id="prefixesRowHdr8">box-shadow</th>
   <td headers="prefixesColHdr2 prefixesRowHdr8">never existed</td>
   <td headers="prefixesColHdr3 prefixesRowHdr8">yes</td>
   <td headers="prefixesColHdr4 prefixesRowHdr8">yes</td>
  </tr>
 </tbody>
</table>
<p>&quot;Old syntax&quot; refers to the previous syntax of specifying &quot;bottom left&quot; for a linear gradient as opposed to the standardised syntax &quot;to top right&quot;, which is supported without a prefix. <code>-o-</code> prefixed linear gradients used to support a &#39;semi-new&#39; syntax accepting the &quot;to&quot; keyword which has now been removed. In Opera 12.02 <code>-o-linear-gradient(bottom, red, green)</code> and <code>-o-linear-gradient(to top, red, green)</code> both worked, while in Opera 12.10+ and SDK 3.5+ only <code>-o-linear-gradient(bottom, red, green)</code> works.</p>
<p>&quot;Deprecated&quot; means that we will remove support for the <code>-o-</code> prefix in a future version of Opera.</p>

<p class="note">The general rule is: use the finalised syntax in your CSS, add an unprefixed property/value to your code and you&#39;ll be fine.</p>
