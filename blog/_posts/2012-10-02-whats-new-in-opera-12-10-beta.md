---
title: What’s New in Opera 12.10 Beta
authors:
- bruce-lawson
tags:
- spdy
- html5
- standards
- opera
- icc
- extensions
- prefixes
- odin
license: cc-by-3.0
---

[Opera 12.10 beta](http://www.opera.com/browser/next/) streamlines and speeds up browsing for end-users, makes images more beautiful, and includes functionality that allows web developers to add user-friendly features to their pages and extensions.

Previously, snapshots were versioned as “Opera 12.50”, but we’ve reduced the version number to Opera 12.10.

## Operating System Integration

You use your operating system all the time, and need your browser to feel part of it. Opera 12.10 for Mac supports a number of new Mac OS X Mountain Lion features such as Notification Center and built-in sharing of content to social networks, and even comes with Retina Display support. Windows users aren’t left out; as part of our continuing work on Windows 8 integration, Opera 12.10 beta has inertia scrolling and pinch-to-zoom on Windows 7 and Windows 8.

Opera 12.10 beta now supports [International Color Consortium (ICC) profile v4](http://www.color.org/version4html.xalter), which will make photographs more vibrant and colorful, displaying them exactly as the photographer intended.

## SPDY support

Opera has always been about speed, so the new release incorporates the new [SPDY protocol](http://en.wikipedia.org/wiki/SPDY), which makes web pages load faster on SPDY-enabled sites such as Twitter, Gmail, WordPress and (soon) Facebook. For consumers, things will just work faster, but developers wishing to see which sites have SPDY support can download a [SPDY indicator extension](https://addons.opera.com/de/extensions/details/spdy-indicator/).

## Extensions

Talking of extensions, we’ve added several new APIs to give more power to developers. The most notable of these is the [Context Menu API](https://dev.opera.com/articles/view/extensions-api-contextmenu/) that allows an extension to add options to the user’s right-click menu. Other improvements include the [Resource Loader API](https://dev.opera.com/articles/view/extensions-api-resourceloader/), the [Screenshot API](https://dev.opera.com/articles/view/extensions-api-screenshot/) and an update to our [URL Filter API](https://dev.opera.com/articles/view/extensions-api-urlfilter/).

In order to ensure security for end-users, by default [only extensions that are hosted by Opera may be installed](http://my.opera.com/desktopteam/blog/2012/09/06/increased-security-when-installing-extensions), as these have been rigorously tested to ensure they’re safe and don’t harm a user’s machine or data.

## HTML5 and Web Standards

Opera is the browser that [began the HTML5 specification](https://html.spec.whatwg.org/multipage/introduction.html#history-1) that is transforming the web, so it’s only natural that we’d be adding more support for the latest standards.

Opera 12.10 beta adds partial support for the Fullscreen API that allows video, games or web pages to use the whole screen to remove distractions like browser chrome that can divert your attention from skateboarding kittens or shooting aliens. (We say "partial" because new "HTML5 the living-on-the-edge standard" specs chop and change. This beta implements the [Fullscreen API editors’ draft 7 February 2012](http://dvcs.w3.org/hg/fullscreen/raw-file/529a67b8d9f3/Overview.html), while the standard has now mutated in the latest [July 2012 version](http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html).)

There’s also partial support for the [Page Visibility API](http://www.w3.org/TR/page-visibility/) that allows a tab to know if it isn’t visible so, for example, it could suspend resource-hungry animations or pause HTML5 audio/video until the tab returns to view.

Now that security concerns with the Web Sockets spec are addressed, we’ve turned on this functionality by default in Opera 12.10 beta.

## User-Agent string changes

Opera 12.10 will ship with a simplified UA string. Firstly, we have dropped the "`U;`" token, which signified that the browser provides crypto support that is stronger than what the "international" builds of Netscape offered circa 1995. The second change is removal of the language indicator. As an example, while the UA string for Opera 12.02 on Windows 7 is currently

	Opera/9.80 (Windows NT 6.1; WOW64; U; en) Presto/2.10.289 Version/12.02

Today’s snapshot for Opera 12.10 on Windows shows:

	Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.10

In a [corresponding Mozilla bug report](https://bugzilla.mozilla.org/show_bug.cgi?id=572656#c0), Henri Sivonen explains why this matters. If you’re interested in figuring out the user’s locale, you should be looking at the `Accept-Language` header instead.

Both these changes correspond to similar changes in the IE, Firefox, Chrome and Safari browsers’ UA strings.

## CSS and Site Compatibility

Opera 12.10 beta now supports unprefixed CSS transitions, transforms, gradients and animations. For a transitional period, we’ll also support transitions, transforms and gradients (but not animations) with an -o- prefix, but these will be phased out in order to promote site compatibility and leaner code.

This beta also introduces support for certain -webkit- prefixes on sites that don’t correctly use unprefixed versions of stable CSS properties.

Broadly speaking, where developers haven’t coded for cross-browser compatibility, Opera will treat -webkit- rules as if they were unprefixed and therefore render the sites properly so users aren’t penalised.

Of course, this also has an effect on any related JavaScript events and properties – so things like the `oTransitionEnd` event will be dropped in favour of the unprefixed (and lowercased, as per spec) `transitionend` event.

If you’re interested in the absolute minutiae, here is a handy cut-out-and-keep chart you can keep in your anorak pocket.

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

“Old syntax” refers to the previous syntax of specifying “bottom left” for a linear gradient as opposed to the standardised syntax “to top right”, which is supported without a prefix. `-o-` prefixed linear gradients used to support a ‘semi-new’ syntax accepting the `to` keyword which has now been removed. In Opera 12.02 `-o-linear-gradient(bottom, red, green)` and `-o-linear-gradient(to top, red, green)` both worked, while in Opera 12.10+ and SDK 3.5+ only `-o-linear-gradient(bottom, red, green)` works.

“Deprecated” means that we will remove support for the `-o-` prefix in a future version of Opera.

The general rule is: use the finalised syntax in your CSS, add an unprefixed property/value to your code and you’ll be fine.
