---
title: Opera 14 beta for Android is out
authors:
- andreas-bovens
tags:
- webkit
- browsers
- opera
- mobile
- android
intro: 'Yes, that’s right: 14. We think that the engine switch from Presto to WebKit that we announced a few weeks ago is such a big step that we decided to skip the 13 number altogether, and go straight to 14! But there’s more than just the engine to talk about: you’ll also notice a total overhaul of the UI in native code, making it fit well with the latest Android design guidelines. Go get the beta from Google Play or point your browser to [m.opera.com](http://m.opera.com), and give it a spin!'
layout: post
---

<figure>
	<img src="/blog/opera-14-beta-for-android-is-out/screenshot-o14-2.png">
</figure>

Yes, that’s right: **14**. We think that the [engine switch from Presto to WebKit][1] that we announced a few weeks ago is such a big step that we decided to skip the 13 number altogether, and go straight to 14! But there’s more than just the engine to talk about: you’ll also notice a **total overhaul of the UI** in native code, making it fit well with the latest Android design guidelines. Go get the beta [from Google Play][2] or point your browser to [m.opera.com][3], and give it a spin!

[1]: /blog/300-million-users-and-move-to-webkit
[2]: https://play.google.com/store/apps/details?id=com.opera.browser.beta (Opera for Android)
[3]: http://m.opera.com/

## Android 2.3 and up

Currently, we **support Android 2.3 and higher**. That’s important, as [45% of Android users are still on Gingerbread][4] — now they also can get top of the range features and performance!

[4]: http://developer.android.com/about/dashboards/index.html

At this point, we don’t have an Opera 14 build ready for tablets yet: we’re still working on various UI optimizations and this will be released later.

## A whole new engine

This first beta release is based on AppleWebKit/537.22 and Chrome/25.0.1364.123 — we plan to follow a fast development cycle, so it’s likely that the final Opera 14 product is based on an even more recent milestone.

The engine inside Opera is very closely in sync with the one included in Chrome Beta (which is also at AppleWebKit/537.22 and Chrome/25.0.1364.122 at the moment), but with some added standardsy goodness.

Opera 14 for Android has out-of-the-box support for:

- `input type=color`
- Microdata
- WebGL 3D context
- CSS3 `@supports`

Opera 14 for Android does not have support for:

- Custom search providers
- access to chrome://flags

We’ve also adjusted our UA string, so as to avoid old sniffing traps: it’s similar in format as the Chrome UA string, with, for this release, OPR/14.0.1025.52315 appended at the end. Of course, you shouldn’t be looking at this at all, and instead do feature detection, so forget we mentioned it.

## New UI and features

The first thing you’ll notice is the **new Discover feature**, which helps you find interesting online content. If you pan to the left, **Speed Dial** emerges, which now **also contains all your bookmarks**. You can combine bookmarks in one level-deep sets by dragging and dropping them on top of each other. And if you pan further to the left, you’ll find an overview of your browsing History. These 3 views give you a good place to dive right into browsing, or you can of course query for sites from the redesigned combined address+search bar.

The red O button has moved to the top right of the screen, just like in other Android applications, and it toggles a menu with advanced options, such as Sharing, Find in Page, Downloads, Settings, and more.

However, the one _special_ highlight here is **Off-Road mode**: when toggled on, pages are loaded via the Opera Mini servers, thereby reducing bandwidth and data cost. We thought: _Yo dawg, we heard you like browsing, so we put a browser in your browser!_. So, no more need to switch browser to get Opera Mini features: you get it all in one package.

Of course, there are many more details to talk about — the plus button, private tabs, browser.js — but we leave those up to you to discover. Enjoy, and let us know what you think!