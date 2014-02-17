---
title: 'Opera Mobile 12.1: with SPDY, WebSockets, Flexbox and more'
authors:
- andreas-bovens
tags:
- opera-mobile
- web-sockets
- flexbox
- spdy
- standards
- odin
layout: article
---
<p>Today marks the release of <a href="https://play.google.com/store/apps/details?id=com.opera.browser">Opera Mobile 12.1 for Android phones</a> — from Android 1.6 (Donut) to 4.1 (Jelly Bean), we&#39;ve got you covered with a mean and lean browsing machine!</p>

<p>This is mostly an engine upgrade, so you won&#39;t notice any particular new UI features or the like. However, there&#39;s lots of new stuff under the hood. Let&#39;s have a look!</p>

<h2>SPDY, WebSockets, Flexbox and more</h2>

<p>Opera has always been about speed, and just like Opera 12.10 beta on desktop, this release incorporates the new SPDY protocol, which makes web pages load faster on <a href="http://en.wikipedia.org/wiki/SPDY#Server_support_and_usage">SPDY-enabled sites</a>.</p>

<p>Another change you know from our recent desktop 12.10 beta release is WebSockets support, which we&#39;ve turned on by default, now that security concerns with the WebSockets spec are addressed.</p>

<p>Furthermore, we&#39;ve also added support for <a href="http://html5doctor.com/the-contenteditable-attribute/">contenteditable</a>/<a href="http://www.tinymce.com/tryit/full.php">designMode</a>, <a href="http://dev.opera.com/articles/view/drag-and-drop/">Drag and Drop</a>, the <a href="http://dev.w3.org/2006/webapi/clipops/">Clipboard API</a>, <a href="http://www.w3.org/TR/page-visibility/">Page Visibility API</a> and <a href="http://dev.opera.com/articles/view/css3-animations/">CSS Animations</a>.</p>

<p>And last, but certainly not least, we have support for the <a href="http://www.w3.org/TR/css3-flexbox/">CSS Flexible Box Layout Module</a>, aka Flexbox. For your enjoyment, Chris has prepared a <a href="http://dev.opera.com/articles/view/flexbox-basics/">Flexbox introductory Dev.Opera article</a>. It&#39;s worth noting that we have implemented the recent spec without CSS prefix, but in addition, we&#39;re also aliasing the older Flexbox specification with a -webkit- prefix, for compatibility purposes. More info about this <a href="#csssitecompat">below</a>.</p>

<h2>User-Agent string related changes</h2>

<p>Just like its desktop counterpart, Opera Mobile 12.1 ships with a simplified UA string, without the &quot;<code>U;</code>&quot; token and without language indicator. As an example, this is what the UA string of Opera Mobile 12.1 running on my HTC One S looks like:</p>

<pre><code>Opera/9.80 (Android 4.0.4; Linux; Opera Mobi/ADR-1210081231) Presto/2.11.355 Version/12.10</code></pre>

<p>If you&#39;re interested in figuring out the user&#39;s locale, you should be looking at the <code>Accept-Language</code> header instead. Both these changes correspond to similar changes in the IE, Firefox, Chrome and Safari browsers&#39; UA strings.</p>

<p>As <a href="http://my.opera.com/ODIN/blog/2012/10/08/introducing-device-stock-ua">Tiffany explained yesterday on this blog</a>, we&#39;ve also added a new header, called <code>Device-Stock-UA</code>, which includes the UA string of the default browser on the device. In case of the HTC One S, this is:

<pre><code>Mozilla/5.0 (Linux; U; Android 4.0.4; en-no; HTC One S Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30</code></pre>

<p>As you can see, this stock browser UA string, unlike Opera Mobile&#39;s, contains device info, which is useful for sites that use server-side user agent detection – using solutions such as WURFL or DeviceAtlas – for content negotiation (typically image optimization). To be clear, we don&#39;t advocate you rely on this too much, but it is a simple reality in today&#39;s web landscape that is being used by many sites. In the long run, we hope the responsive images proposal will reduce the need for this kind of content negotiation.</p>

<p>Another change under the hood is that this version of Opera Mobile comes with more powerful spoofing options. As a developer, you won&#39;t notice anything new in the browser&#39;s Settings relating to this change, but behind the scenes this enables us — the Developer Relations and Site Compatibility team — to set the browser to mask as Mobile Safari or Chrome on sites that are borked, and fix the experience for end users. An example of this is <a href="http://www.amazon.com/">Amazon.com</a>: it has a pretty mobile-optimized site, but somehow manages to mangle the JavaScript it serves to Opera Mobile, making it impossible to remove an item from the shopping cart. When we spoof as Mobile Chrome on <code>www.amazon.com</code>, this problem disappears, so that&#39;s what we&#39;ve started doing until Amazon fixes the issue on their end.</p>

<h2 id="csssitecompat">CSS and Site Compatibility</h2>

<p>Opera Mobile 12.1 now supports unprefixed CSS transitions, transforms, gradients, animations, and flexbox. For a transitional period, we&#39;ll also support transitions, transforms and gradients (but not animations nor flexbox) with an -o- prefix, but these will be phased out in order to promote site compatibility and leaner code.</p>

<p>This mobile release also introduces support for certain -webkit- prefixes on sites that don&#39;t correctly use unprefixed versions of stable CSS properties.</p>
<p class="note">Broadly speaking, where developers haven&#39;t coded for cross-browser compatibility, Opera will treat -webkit- rules as if they were unprefixed and therefore render the sites properly so users aren&#39;t penalized.</p>

<p>Of course, this also has an effect on any related JavaScript events and properties – so things like the <code>oTransitionEnd</code> event will be dropped in favor of the unprefixed (and lowercased, as per spec) <code>transitionend</code> event.</p>

<p>If you&#39;re interested in the absolute minutiae, here is a handy cut-out-and-keep chart you can put in your anorak pocket (dixit Bruce).</p>

<table id="prefixes">
 <thead>
  <tr>
   <th></th>
   <th id="prefixesColHdr2">-o-</th>
   <th id="prefixesColHdr3">-webkit-</th>
   <th id="prefixesColHdr4">unprefixed (standardized)</th>
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
    <tr>
   <th id="prefixesRowHdr8">flexbox related properties</th>
   <td headers="prefixesColHdr2 prefixesRowHdr9">never existed</td>
   <td headers="prefixesColHdr3 prefixesRowHdr9">yes; old syntax</td>
   <td headers="prefixesColHdr4 prefixesRowHdr9">yes</td>
  </tr>
 </tbody>
</table>

<p>For linear gradients, &quot;old syntax&quot; refers to the previous syntax of specifying &quot;bottom left&quot; for a linear gradient as opposed to the standardized syntax &quot;to top right&quot;, which is supported without a prefix.</p>
<p>For flexbox, &quot;old syntax&quot; refers to the previous &quot;box-flex&quot; syntax, as opposed to the more recent &quot;flex&quot; syntax.</p>

<p>&quot;Deprecated&quot; means that we will remove support for the <code>-o-</code> prefix in a future version of Opera.</p>

<p class="note">The general rule is: use the finalized syntax in your CSS, add an unprefixed property/value to your code and you&#39;ll be fine.</p>

<p>We hope you enjoy this update, and you can expect an update of the Opera Mobile Emulator in the next few weeks as well. Let us know what you think!</p></p>
