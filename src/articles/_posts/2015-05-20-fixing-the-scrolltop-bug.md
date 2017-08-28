---
title: Fixing the `scrollTop` bug
authors:
- simon-pieters
intro: 'Which element scrolls the viewport when using `scrollTop`? This article explains what “the `scrollTop` bug” is and what we need to do to get it fixed. Your help is needed!'
tags:
- compatibility
- css
- javascript
license: cc-by-3.0
---

The [CSSOM View](http://dev.w3.org/csswg/cssom-view/) specification has a handful of widely-implemented properties on the `Element` interface related to scrolling: `scrollTop`, `scrollLeft`, `scrollWidth`, `scrollHeight`. These give the current scroll position of the element, and the size of the scrolling area. `scrollTop` and `scrollLeft` can also be set to cause a scroll. When these are used on the root element, they instead reflect the scroll position and scroll area of the viewport. The `clientWidth` and `clientHeight` properties similarly reflect the viewport dimensions instead of the element’s dimensions for the root element.

However, [WebKit](https://bugs.webkit.org/show_bug.cgi?id=5991) (Safari), EdgeHTML and, previously, [Chromium](https://code.google.com/p/chromium/issues/detail?id=157855) (Chrome before 61, Opera before 48) do not behave this way. They make the `body` element reflect the viewport instead, and the root element returns `0` and does nothing on setting. IE11 and Firefox follow the specification. This is an interoperability problem that Web developers have to work around in some way, possibly by UA sniffing.

This bug has now been fixed in Chromium, but **we still need your help** to fix sites that rely on the bug based on UA sniffing.

## Problematic cases

The problem is code that expects `document.body` to be the "scrolling element", either for all browsers or in certain browsers:

* Directly using `document.body.scrollTop` or `document.body.scrollLeft`. This will already be broken (except in [quirks mode](https://hsivonen.fi/doctype/)) in Firefox, as well as Chrome 61 and later and Opera 48 and later.
* User Agent-sniffing to decide between `document.body` or `document.documentElement`. This will likely be broken in Chrome 61 and later and Opera 48 and later, and will possibly break in Safari and Edge in the future.

## Recommendation

Use [`document.scrollingElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement) if supported, and fall back to the current code.

For example, if the current (problematic) code is something like:

	function bodyOrHtml() => {
		if (navigator.userAgent.indexOf('WebKit') != -1) {
			return document.body;
		}
		return document.documentElement;
	}
	...
	bodyOrHtml().scrollTop = 100;

Then do something like this instead:

	function bodyOrHtml() => {
		if ('scrollingElement' in document) {
			return document.scrollingElement;
		}
		// Fallback for legacy browsers
		if (navigator.userAgent.indexOf('WebKit') != -1) {
			return document.body;
		}
		return document.documentElement;
	}
	...
	bodyOrHtml().scrollTop = 100;

## Reporting issues

If you notice that a JS library uses UA sniffing to get “the scrolling element”, please file an issue in [Chromium’s bug tracker](https://code.google.com/p/chromium/issues/list). Include “ScrollTopLeftInterop” in the summary. Thank you!
