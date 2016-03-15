---
title: 300 Million Users and Move to WebKit
authors:
- bruce-lawson
tags:
- webkit
license: cc-by-3.0
---

On the same day as announcing that Opera has 300 million users, we’re also announcing that for all new products Opera will use WebKit as its rendering engine and V8 as its JavaScript engine. It’s built using the open-source Chromium browser as one of its components. Of course, a browser is much more than just a renderer and a JS engine, so this is primarily an “under the hood” change. Consumers will initially notice better site compatibility, especially with mobile-facing sites — many of which have only been tested in WebKit browsers. The first product will be for Smartphones, which we’ll demonstrate at Mobile World Congress in Barcelona at the end of the month. Opera Desktop and other products will transition later.

### TL;DR

* This will require no changes to your web development practices: **keep coding to standards**!
* Opera Extensions that you’ve built aren’t obsolete
* Opera will contribute to the WebKit and Chromium projects
* Our work on web standards to advance the web continues

### What does this mean for web developers?

The short answer is that it shouldn’t affect your day-to-day work. Keep coding to the standards, not to individual rendering engines; test across browsers — Opera, Firefox, Chrome, Safari and Internet Explorer; use all vendor prefixes and an unprefixed form in your CSS and JavaScript. However, it remains important to keep the following in mind:

* Chromium, and therefore future versions of Opera, has built-in support for the WebM, Ogg Theora and Ogg Vorbis media codecs but does not natively support H.264 or MP3 media codecs (although if these are installed in a device’s operating system it will allow that to render media). The correct way to check support is with [HTML5 `canPlayType`](https://html.spec.whatwg.org/multipage/the-video-element.html#dom-navigator-canplaytype). The simplest method to ensure all modern browsers receive the correct codecs is to encode in both WebM and H.264 and provide two `<source>` elements or use `canPlayType` to check support (see [Introduction to HTML5 video](https://dev.opera.com/articles/view/introduction-html5-video/) for more information).
* The `window.opera` object will not exist in future versions of Opera. We continue to recommend that developers [SHOULD NOT](http://www.ietf.org/rfc/rfc2119.txt) use browser-sniffing; feature-detection - either using a 3rd party solution such as [Modernizr](http://modernizr.com/) or [hand-rolling](http://diveintohtml5.info/everything.html) your own — is better.

### What does this mean for extension developers?

Extensions have been the most successful Opera add-on and it’s of paramount importance to us that existing extensions continue working. We’ve been working on a conversion tool that will take existing OEX extensions and convert them into a format that can be used by Chromium-based Opera for computers. In addition, we’ll provide conversion tutorials and documentation, and we’ll provide assistance through our developer forums as well. In short, we stay totally committed to our enthusiastic community of extension developers and users, and we’ll do our best to make the transition as smooth as possible.

### Why is Opera switching?

When we first began, back in 1995, we had to roll our own rendering engine in order to compete against the Netscape and Internet Explorer to drive web standards, and thus the web forward. When we started the spec that is now called "HTML5", our goal was a specification that would greatly enhance interoperability across the web.

The WebKit project now has the kind of standards support that we could only dream of when our work began. Instead of tying up resources duplicating what’s already implemented in WebKit, we can focus on innovation to make a better browser. Opera innovations such as tabbed browsing, Speed Dial and data-saving compression that speeds up page-load, have been widely copied and improved the web for all.

We remain completely committed to improving the web through our standardisation work.  We have 18 years experience in standards and making browsers. Standards that began at Opera such as [HTML5](https://html.spec.whatwg.org/multipage/introduction.html#history-1), [native video](http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html) and [Media Queries](http://www.w3.org/People/howcome/p/cascade.html) are a vital part of the modern web.

We’ll continue to advance the Web by contributing to the WebKit and Chromium projects. We have great experience in making products that work everywhere. In our internal builds, we’ve experimented with adding support for some new standards and enhanced some features that were lacking compared with Presto (for example, [multi-column layout](https://bugs.webkit.org/show_bug.cgi?id=15553)).

In the last few weeks [we’ve contacted the Webkit project](https://lists.webkit.org/pipermail/webkit-dev/2013-February/023820.html), and contributing organisations, to discuss our intentions to work with them to make WebKit even better. By contributing patches back to WebKit, we’ll enhance standards compliance across a range of browsers, not just Opera.

So, this year, we’re sending two Valentine cards: our usual one to the open, interoperable web, and one to WebKit too.
