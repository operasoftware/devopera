---
title: 'Opera Mobile 12.1: With SPDY, WebSockets, Flexbox and More'
authors:
- andreas-bovens
tags:
- opera-mobile
- web-sockets
- flexbox
- spdy
- standards
license: cc-by-3.0
---

Today marks the release of [Opera Mobile 12.1 for Android phones](https://play.google.com/store/apps/details?id=com.opera.browser) — from Android 1.6 (Donut) to 4.1 (Jelly Bean), we’ve got you covered with a mean and lean browsing machine!

This is mostly an engine upgrade, so you won’t notice any particular new UI features or the like. However, there’s lots of new stuff under the hood. Let’s have a look!

## SPDY, WebSockets, Flexbox and more

Opera has always been about speed, and just like Opera 12.10 beta on desktop, this release incorporates the new SPDY protocol, which makes web pages load faster on [SPDY-enabled sites](http://en.wikipedia.org/wiki/SPDY#Server_support_and_usage).

Another change you know from our recent desktop 12.10 beta release is WebSockets support, which we’ve turned on by default, now that security concerns with the WebSockets spec are addressed.

Furthermore, we’ve also added support for [contenteditable](http://html5doctor.com/the-contenteditable-attribute/)/[designMode](http://www.tinymce.com/tryit/full.php), [Drag and Drop](https://dev.opera.com/articles/drag-and-drop/), the [Clipboard API](http://dev.w3.org/2006/webapi/clipops/), [Page Visibility API](http://www.w3.org/TR/page-visibility/) and [CSS Animations](https://dev.opera.com/articles/css3-animations/).

And last, but certainly not least, we have support for the [CSS Flexible Box Layout Module](http://www.w3.org/TR/css3-flexbox/), aka Flexbox. For your enjoyment, Chris has prepared a [Flexbox introductory Dev.Opera article](https://dev.opera.com/articles/view/flexbox-basics/). It’s worth noting that we have implemented the recent spec without CSS prefix, but in addition, we’re also aliasing the older Flexbox specification with a -webkit- prefix, for compatibility purposes. More info about this [below](#csssitecompat).

## User-Agent string related changes

Just like its desktop counterpart, Opera Mobile 12.1 ships with a simplified UA string, without the `U;` token and without language indicator. As an example, this is what the UA string of Opera Mobile 12.1 running on my HTC One S looks like:

    Opera/9.80 (Android 4.0.4; Linux; Opera Mobi/ADR-1210081231) Presto/2.11.355 Version/12.10`</pre>

If you’re interested in figuring out the user’s locale, you should be looking at the `Accept-Language` header instead. Both these changes correspond to similar changes in the IE, Firefox, Chrome and Safari browsers’ UA strings.

As [Tiffany explained yesterday on this blog](https://dev.opera.com/blog/introducing-device-stock-ua/), we’ve also added a new header, called `Device-Stock-UA`, which includes the UA string of the default browser on the device. In case of the HTC One S, this is:

	Mozilla/5.0 (Linux; U; Android 4.0.4; en-no; HTC One S Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30

As you can see, this stock browser UA string, unlike Opera Mobile’s, contains device info, which is useful for sites that use server-side user agent detection – using solutions such as WURFL or DeviceAtlas – for content negotiation (typically image optimization). To be clear, we don’t advocate you rely on this too much, but it is a simple reality in today’s web landscape that is being used by many sites. In the long run, we hope the responsive images proposal will reduce the need for this kind of content negotiation.

Another change under the hood is that this version of Opera Mobile comes with more powerful spoofing options. As a developer, you won’t notice anything new in the browser’s Settings relating to this change, but behind the scenes this enables us — the Developer Relations and Site Compatibility team — to set the browser to mask as Mobile Safari or Chrome on sites that are borked, and fix the experience for end users. An example of this is [Amazon.com](http://www.amazon.com/): it has a pretty mobile-optimized site, but somehow manages to mangle the JavaScript it serves to Opera Mobile, making it impossible to remove an item from the shopping cart. When we spoof as Mobile Chrome on `www.amazon.com`, this problem disappears, so that’s what we’ve started doing until Amazon fixes the issue on their end.

## CSS and Site Compatibility

Opera Mobile 12.1 now supports unprefixed CSS transitions, transforms, gradients, animations, and flexbox. For a transitional period, we’ll also support transitions, transforms and gradients (but not animations nor flexbox) with an -o- prefix, but these will be phased out in order to promote site compatibility and leaner code.

This mobile release also introduces support for certain -webkit- prefixes on sites that don’t correctly use unprefixed versions of stable CSS properties.

Broadly speaking, where developers haven’t coded for cross-browser compatibility, Opera will treat -webkit- rules as if they were unprefixed and therefore render the sites properly so users aren’t penalized.

Of course, this also has an effect on any related JavaScript events and properties – so things like the `oTransitionEnd` event will be dropped in favor of the unprefixed (and lowercased, as per spec) `transitionend` event.

If you’re interested in the absolute minutiae, here is a handy cut-out-and-keep chart you can put in your anorak pocket (dixit Bruce).

<figure block="figure">
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
</figure>

For linear gradients, “old syntax” refers to the previous syntax of specifying “bottom left” for a linear gradient as opposed to the standardized syntax “to top right”, which is supported without a prefix.

For flexbox, “old syntax” refers to the previous `box-flex` syntax, as opposed to the more recent `flex` syntax.

“Deprecated” means that we will remove support for the `-o-` prefix in a future version of Opera.

The general rule is: use the finalized syntax in your CSS, add an unprefixed property/value to your code and you’ll be fine.

We hope you enjoy this update, and you can expect an update of the Opera Mobile Emulator in the next few weeks as well. Let us know what you think!
