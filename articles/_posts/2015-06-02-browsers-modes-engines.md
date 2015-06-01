---
title: Opera Browsers, Modes & Engines
authors:
- andreas-bovens
intro: 'The Opera browser is available on a wide range of platforms, in a number of flavors with different modes, engines and levels of standards support. As things can get somewhat confusing, we decided to create a simple product overview that details some of these technical differences.'
tags:
- browsers
- compatibility
- opera
license: cc-by-3.0
---

The Opera browser is available on a wide range of platforms, in a number of flavors with different modes, engines and levels of standards support. As things can get somewhat confusing — did you know that Opera Mini on iOS comes with three rendering modes, one of which is powered by UIWebView & Opera Turbo? — we decided to create a simple product overview that details some of these technical differences.

We’ll keep this table as up-to-date as possible, so be sure to bookmark this page for later reference!

<figure block="figure">

<table>
<tr>
	<th>OS</th>
	<th>Browser</th>
	<th>Mode</th>
	<th>Engine</th>
	<th>Proxy</th>
	<th>Standards</th>
</tr>
<tr>
	<td rowspan="3">Android</td>
	<td rowspan="2"><a href="https://play.google.com/store/apps/details?id=com.opera.browser">Opera</a></td>
	<td>Normal</td>
	<td>Chromium</td>
	<td>No</td>
	<td>Full</td>
</tr>
<tr>
	<td>Opera Turbo</td>
	<td>Chromium</td>
	<td>Yes</td>
	<td>Full</td>
</tr>
<tr>
	<td><a href="https://play.google.com/store/apps/details?id=com.opera.mini.native">Opera Mini</a></td>
	<td>Opera Mini</td>
	<td>Presto, server-side</td>
	<td>Yes</td>
	<td>Limited</td>
</tr>
<tr>
	<td rowspan="5">iOS</td>
	<td rowspan="3"><a href="https://itunes.apple.com/app/id363729560">Opera Mini</a></td>
	<td>Normal</td>
	<td>WebKit, system</td>
	<td>No</td>
	<td>Full</td>
</tr>
<tr>
	<td>Opera Turbo *</td>
	<td>WebKit, system</td>
	<td>Yes</td>
	<td>Full</td>
</tr>
<tr>
	<td>Opera Mini</td>
	<td>Presto, server-side</td>
	<td>Yes</td>
	<td>Limited</td>
</tr>
<tr>
	<td rowspan="2"><a href="https://itunes.apple.com/app/id674024845">Coast</a></td>
	<td>Normal</td>
	<td>WebKit, system</td>
	<td>No</td>
	<td>Full</td>
</tr>
<tr>
	<td>Opera Turbo *</td>
	<td>WebKit, system</td>
	<td>Yes</td>
	<td>Full</td>
</tr>
<tr>
	<td>J2ME</td>
	<td><a href="http://www.opera.com/mobile/mini/other">Opera Mini</a></td>
	<td>Opera Mini</td>
	<td>Presto, server-side</td>
	<td>Yes</td>
	<td>Limited</td>
</tr>
<tr>
	<td>Windows Phone</td>
	<td><a href="http://www.windowsphone.com/en-us/store/app/opera-mini-beta/b3bf000a-e004-4ecb-a8fb-9fc817cdab90">Opera Mini</a></td>
	<td>Opera Mini</td>
	<td>Presto, server-side</td>
	<td>Yes</td>
	<td>Limited</td>
</tr>
<tr>
	<td rowspan="2">Desktop</td>
	<td rowspan="2"><a href="http://www.opera.com/computer">Opera</a></td>
	<td>Normal</td>
	<td>Chromium</td>
	<td>No</td>
	<td>Full</td>
</tr>
<tr>
	<td>Opera Turbo</td>
	<td>Chromium</td>
	<td>Yes</td>
	<td>Full</td>
</tr>
</table>

</figure>

Notes:

- Opera Turbo mode compresses data up to 80%. Opera Mini mode compresses data up to 90%.
- Opera Turbo marked with asterisk also has a [Video Boost](http://blogs.opera.com/mobile/2014/11/new-opera-mini-for-iphone-ipad-less-buffering-free-download-appstore/) compression option.
- If you’re doing IP-based geo-detection, you should always check if there is an `X-Forwarded-For` header. That way, you can also correctly locate browser users using proxy functionality, powered by Opera Mini and Opera Turbo.
- Opera Mini comes with “limited” standards support: this means that advanced JavaScript, CSS and other dynamic elements might not work as expected, due to the peculiarities of server-side rendering and limited client capabilities.
- Older Presto-powered Opera products that are no longer under active development, such as Opera 12 for computers, Opera Mobile Classic, etc. are not listed here.
