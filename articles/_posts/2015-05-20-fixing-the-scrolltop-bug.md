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

However, [WebKit](https://bugs.webkit.org/show_bug.cgi?id=5991) (Safari) and [Blink](https://code.google.com/p/chromium/issues/detail?id=157855) (Chrome and Opera) do not behave this way. They make the `body` element reflect the viewport instead, and the root element returns `0` and does nothing on setting. IE11 and Firefox follow the specification. This is an interoperability problem that Web developers have to work around in some way, possibly by UA sniffing.

We want to fix this bug, but **we need your help** to fix sites that rely on the bug based on UA sniffing.

## What’s bad about the WebKit/Blink behavior?

In general, we want to avoid special-casing the `body` element and just let the root element be “the viewport element”. Also, the `body` element can be independently scrollable from the viewport, by setting the `overflow` property on both `html` and `body` to something other than `visible`. In WebKit and Blink, the scrolling APIs on `body` in this case still reflect the viewport, rather than the `body` element itself.

Both WebKit and Blink have previously tried to fix this bug, but had to revert because there were Web pages that expected the buggy behavior when the browser identified as “WebKit”.

### Project Spartan / Edge

Microsoft’s latest browser engine, codenamed [Project Spartan](http://blogs.windows.com/bloggingwindows/2015/03/30/introducing-project-spartan-the-new-browser-built-for-windows-10/) and used in the upcoming Edge browser, also identifies as “WebKit”, like WebKit and Blink, and so they have to copy WebKit/Blink’s bugs in order to be compatible with the Web.

## Quirks mode

[Quirks mode](https://hsivonen.fi/doctype/) is the mode that browsers use for documents without a doctype or an “old” doctype, to be more compatible with the behavior of old browsers. In quirks mode, all browsers use the `body` element to reflect the viewport for the scrolling APIs. This is also specified in the CSSOM View specification. (However, contrary to the behavior of current WebKit and Blink, if the `body` is independently scrollable, the scrolling APIs will reflect the element itself instead of the viewport.)

## Typical workarounds

There are several strategies for dealing with this interoperability problem, but they are all problematic in one way or another.

### Using APIs on `window` instead

`scrollX`/`scrollY` or `pageXOffset`/`pageYOffset` give the viewport’s scroll position and `window.scrollTo(x, y)` scrolls the viewport. This is what e.g. [jQuery](https://github.com/jquery/jquery/blob/002240a6eb1cee2fcd886d5cf44893eb67f246f1/src/offset.js#L169-L192) does.

Problem: `scrollX`, `scrollY`, `pageXOffset`, and `pageYOffset` are not supported in IE8 and below.

### Using both elements

For example, for getting:

	var y = document.documentElement.scrollTop || document.body.scrollTop;

or

	var y = document.documentElement.scrollTop + document.body.scrollTop;

and setting:

	document.documentElement.scrollTop = y;
	document.body.scrollTop = y;

Problem: it is annoying to have to use both elements.

### Setting `offsetTop` on `document.body` and checking if it caused scrolling, then reverting the scroll position

This is what e.g. [@mathiasbynens’ jquery-smooth-scrolling script](https://github.com/mathiasbynens/jquery-smooth-scrolling/blob/da4e3636000a37c96f96b9a5ae93923d00179ac0/jquery.smoothscroll.js#L4-L21) does.

Problem: This is expensive and can cause a visual flash.

### Comparing `scrollHeight` to determine the scrolling element

This is what e.g. [@dperini’s `getScrollingElement` script](https://gist.github.com/dperini/ac3d921d6a08f10fd10e) does.

Problem: This doesn’t work if the document is not scrollable.

### Determining the scrolling element in an `iframe`

This is what [@mathiasbynens’ `scrollingElement` polyfill](https://github.com/mathiasbynens/document.scrollingElement/blob/b936f521b86e01512922ac3f51ca9773bea1f1ee/scrollingelement.js#L50-L59) does. It works regardless of the document itself since it checks in an `iframe`.

Problem: It is complex/expensive.

### UA sniffing

This is what e.g. [Closure](https://github.com/google/closure-library/blob/32365aba43acb36c5d693256ef5d4dbe3bddddfe/closure/goog/dom/dom.js#L632) currently does.

Problem: This prevents browsers from fixing the bug. We need to fix this!

## How do I know if my site is affected?

1. Is your page in quirks mode? Check `document.compatMode` in the console in the browser’s web developer tools. If it says `BackCompat`, you’re not affected (but you [should not use quirks mode](https://hsivonen.fi/doctype/#choosing)!).
2. Run Chrome or Opera with this runtime flag: `--enable-blink-features=ScrollTopLeftInterop`. See [Run Chromium with flags](http://www.chromium.org/developers/how-tos/run-chromium-with-flags) for instructions for your OS. This makes Chrome/Opera use `html` as the scrolling element (in standards mode).
3. See if your site still works. If something is now broken, possibly your site is using UA sniffing to determine `html` vs `body` for scrolling APIs.

## Towards a fix: `document.scrollingElement`

In order to have a reliable alternative to UA sniffing, we are introducing a new API to get the right element for scrolling the viewport.

- Use [the `document.scrollingElement` polyfill](https://github.com/mathiasbynens/document.scrollingElement) and switch from `document.documentElement` or `document.body` to `document.scrollingElement` when using e.g. `scrollTop` to scroll the viewport.
- Feature-check for `scrollingElement` support and fall back to your current workaround (falling back to a UA check is OK).

## Testing

1. Use [Chrome Canary](https://www.google.com/chrome/browser/canary.html), or [Opera developer](http://www.opera.com/en/developer), based on Chromium 44 or later, or [Microsoft Edge](http://windows.microsoft.com/en-us/windows/preview-download). These browsers have native `document.scrollingElement` support.
2. Check that your site still works.

## Reporting issues

If you notice that a JS library uses UA sniffing to get “the scrolling element”, or that a site is broken with `chrome://flags/#scroll-top-left-interop` enabled in Chrome or Opera, please file an issue in [Chromium’s bug tracker](https://code.google.com/p/chromium/issues/list). Include “ScrollTopLeftInterop” in the summary. Thank you!

## Summary

Browsers disagree on whether `html` or `body` reflects the viewport for `scrollTop` et al. Some sites are using UA sniffing to decide which to use. Browsers want to align and use `html` (in standards mode), so sites that UA sniff need to be changed. Use the `document.scrollingElement` API if available, and fall back to a polyfill or UA sniffing. If you notice any problems, let us know!
