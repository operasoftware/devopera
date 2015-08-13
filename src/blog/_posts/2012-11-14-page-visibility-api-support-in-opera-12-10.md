---
title: Page Visibility API Support in Opera 12.10
authors:
- tiffany-brown
tags:
- page-visibility
- html5
- opera-presto
license: cc-by-3.0
---

Our recent [Opera 12.10 release](http://www.opera.com/browser/download/) added partial support for the [Page Visibility API](http://www.w3.org/TR/page-visibility/). It’s a simple API, but a mighty one because it allows developers to specify what a document should do when it becomes hidden. If you’ve ever been embarrassed at the office while trying to determine which of your 200 tabs is playing unexpected sound, you’ll appreciate the utility of the Page Visibility API.

## How it works

The Page Visibility API adds two attributes — `hidden` and `visibilityState` — and a `visibilitychange` event to the [HTML5 `Document` interface](http://www.w3.org/TR/html5/dom.html#document). When the document’s window or tab isn’t visible, the value of `document.hidden` is `true`, otherwise it’s `false`.

The `document.visibilityState` attribute simply reveals the particular state of a document: `hidden` or `visible`. Two other values — `prerender` and `unloaded` are outlined in the specification, but not yet supported.

When the visibility state of a document changes, Opera fires a `visibilitychange` event. This is where it gets interesting. When the document is not visible, your `visibilitychange` handler can pause media or animations. When the document becomes visible again, the handler can play the media, or resume the animation. It’s particularly useful for memory-intensive applications such as games. This [demo](http://people.opera.com/tiffanyb/2012/pagevis/index.html "A demonstration of the Page Visibility API") shows an example using video. A small word of warning: the video plays automatically any time the tab is in the foreground.

## Limitations

Some parts of this implementation don’t quite work as you might expect. For example, switching from Opera to another application will not fire a `visibilitychange` event. Neither will minimizing the browser window.

Because it’s document-specific, you also can’t use the Page Visibility API to determine which tab or window is active. It is possible to determine whether your document is visible, and therefore active. But it is not possible to determine which of the other tabs or windows currently has focus.

## Other browsers

Opera is not the only browser to support this API. It _is_, however, the only one to use un-prefixed properties at this time. Corresponding properties in other browsers are as follows.

* **Chrome / WebKit:** `document.webkitVisibilityState` and `document.webkitHidden`
* **Firefox:** `document.mozVisibilityState` and `document.mozHidden`
* **Internet Explorer:** `document.msVisibilityState` and `document.msHidden`

You will also need to listen for the `webkitvisibilitychange`, `mozvisibilitychange`, and `msvisibilitychange` events.
