---
title: Opera Mini 11 for Android’s new compression mode
authors:
- bruce-lawson
intro: '[Opera Mini 11 for Android](http://blogs.opera.com/mobile/2015/09/choose-high-or-extreme-savings-new-opera-mini-android/) was released today with a new compression mode that preserves web fonts, layout and JavaScript. Learn more!'
tags:
- javascript
- opera-mini
license: cc-by-3.0
---

Today, we released [Opera Mini 11 for Android](http://blogs.opera.com/mobile/2015/09/choose-high-or-extreme-savings-new-opera-mini-android/). It has two modes. By default, it starts in Extreme-compression mode. This is the traditional Opera Mini compression that can reduce a site down to 10% of its original size, using the Opera Presto rendering engine on a proxy server.

As always, this means a trade-off between experience and speed. Some sites may render differently, and some JavaScript won’t function as you expect. (Read more about [Opera Mini and JavaScript](https://dev.opera.com/articles/opera-mini-and-javascript/) and [Making websites that work well on Opera Mini](https://dev.opera.com/articles/making-sites-work-opera-mini/).)

## High-compression mode

This release adds a new compression mode we’re calling “High-compression” that is fully web-compatible. (You can turn this on by tapping the red “O” and choosing “Savings mode” next to the Savingsometer.)

<figure block="figure">
	<iframe elem="media" width="560" height="315" src="https://www.youtube.com/embed/NHVz5KLqEnI" allowfullscreen></iframe>
</figure>

This new mode preserves layout and JavaScript. In High mode, you can expect about 30% to 50% compression (it can be a lot more than 50% depending on your browsing habits). This is accomplished by the power of Snowdoo, a Scandinavian form of voodoo. All page assets are proxied through our servers and “squished” before they’re sent to the device, resulting in a smaller — and therefore faster — download. HTTPS pages are not proxied in this way.

The actual rendering depends on the [WebView component](https://developer.chrome.com/multidevice/webview/overview) on the Android device. Older devices will have a WebView based on WebKit; more recent devices are Chromium-based, and from Android L, the WebView component is auto-updated.

## Modes in other Opera products

Other Opera products have user-selectable rendering modes. See [Opera Browsers, Modes & Engines](https://dev.opera.com/articles/browsers-modes-engines/) for more information.

## Fun fact

In beta versions of Opera Mini 11 for Android, High mode was on by default. We changed it after feedback that sites appeared “broken” because they didn’t render as people had come to expect from Opera Mini. It’s a good reminder that regardless of how you think your sites should look, your users know best; it’s their browser, and their choice.
