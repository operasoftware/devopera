---
title: "Opera 14 for Android is out!"
author: "Andreas Bovens"
tags: chromium opera html5 mobile android off-road
intro: "Opera 14 for Android is built on top of Chromium 26, with a total overhaul of the UI in native code, making it fit well with the latest Android design guidelines. Go get the build from Google Play or point your browser to m.opera.com, and give it a spin!"
layout: post
---

**Yay, and — dare I say it — w00t! Opera 14 for Android is released!**

Opera 14 for Android is built on top of [Chromium 26][1], with a **total overhaul of the UI** in native code, making it fit well with the latest Android design guidelines. Go [get the build from Google Play][2] or point your browser to [m.opera.com][3], and give it a spin!

[1]: http://www.chromium.org/
[2]: https://play.google.com/store/apps/details?id=com.opera.browser (Opera for Android)
[3]: http://m.opera.com/

## A great browser for Android 2.3 and up

Currently, we support Android 2.3 and higher. That's important, as [38.5% of Android users are still on Gingerbread][4] — now they can get top of the range features and performance, just like users on newer Android versions!

[4]: http://developer.android.com/about/dashboards/index.html

Note that we don't have an Opera 14 build ready for tablets yet: we're still working on various tablet-specific UI optimizations, and this will be released later on.

## A whole new engine

![](opera-audio-handling-300.png)

Opera 14 is based on Chromium 26, which does not include [Blink][5] just yet. However, as we plan to stay closely in sync with the Chromium development cycle, doing frequent updates, you can expect it in a future release. In the meantime, we've added/enabled some extra standardsy goodness already for you to use:

[5]: http://www.chromium.org/blink

- `<input type=color>` support: try it with [this simple demo][6]
- [WebGL 3D context][7] is enabled: you can try out [our Odin demo][8], for instance, or why not [try building something with WebGL][7] yourself?
- [CSS3 `@supports`][9], which allow you to do simple feature detection using CSS.

[6]: http://jsbin.com/oxomam/1/
[7]: http://dev.opera.com/articles/view/an-introduction-to-webgl/
[8]: http://operasoftware.github.io/Odin/mobile/
[9]: http://dev.opera.com/articles/view/native-css-feature-detection-via-the-supports-rule/

We've also done something cool with how we handle HTML5 audio: if you start playing e.g. [this excellent song on SoundCloud][10], you'll see that a pause button appears in the Android notification area. You can now switch tabs, or even open other apps while the song is playing, and easily control playback from the notification area.

[10]: http://m.soundcloud.com/jamie-van-dyck/ugonnas-song-july-7th-8th-2012

Note: some things we don't support in this first release include custom search providers and access to about://flags.

We've also adjusted our UA string, so as to avoid old sniffing traps: it's similar in format to the Chrome UA string, with, for this release, OPR/14.0.1074.57453 appended at the end. Of course, you shouldn't be looking at this at all, and instead do feature detection, so forget we mentioned it.

## New UI and features

When opening Opera for Android, you're greeted by our overhauled **Speed Dial**, which now combines favorite sites with bookmarks into one view. You can group bookmarks in one level-deep sets by dragging and dropping them on top of each other. A swipe away to the left (rather than hidden away in a submenu somewhere), you find your browsing **History**, and towards the right, there is our new **Discover** page, which helps you find interesting online content to jump straight into browsing — ideal to kill those 10 minutes waiting for the bus to arrive.

![](top3.png) ![](bottom3.png)

You can of course also query for sites from the redesigned navigation bar on top. And we've made some adjustments here since the beta release: in the Settings menu, you find an option to move the navigation bar to the bottom. It costs you a bit of screen real estate, but makes for a more relaxed single-handed browsing experience.

The red O button has moved to the top right of the screen (unless you put the Navigation bar at the bottom), just like in other Android applications, and it toggles a menu with [advanced options][11] such as Sharing, Find in Page, Downloads, Settings, and more.

[11]: http://www.opera.com/help/mobile

If you miss an Exit button or want to go back more than one page in the tab's History, long-press the back button. To save a page to read off-line, hit the + icon at the left of the address bar.

## Off-Road mode

A _special_ mention for Off-Road mode, available from the red O menu: when toggled on (also subtly indicated by a thin red line on top of the browser), pages are loaded via the Opera Mini servers, thereby reducing bandwidth and data cost. So, no more need to switch browser to get Opera Mini's data compression features: you get it all in one package.

To learn more about optimizing for Opera Mini and Off-Road mode, read our [Opera Mini and JavaScript][12] article.

[12]: http://dev.opera.com/articles/view/opera-mini-and-javascript/

Keep in mind that users can set their own preference of Off-Road-specific image quality: they can increase or decrease image quality, or even opt to receive no images at all (a good option to have, since [images account for more than 50% of page size][13]). As my colleague Bruce points out: be sure to use alternative text with images, and remember — it's not just for the visually impaired!

[13]: http://httparchive.org/interesting.php#bytesperpage

## Automatic text wrap

![](text-wrap.png)

By default, Opera for Android uses the same text autosizing (aka FontBoosting) mechanism that can be found in Chrome for Android. E.g. if you visit [this desktop-specific Wikipedia page about artichokes][14], you see that some of the text is displayed bigger, making it readable without having to zoom in. However, as FontBoosting is only applied selectively and interferes with author-defined text size differences, we've made it possible to turn this off in Settings, and choose for automatic text wrap instead. Turning on text wrap instructs Opera for Android to wrap lines no matter how much you zoom into a page so there's no need for horizontal scrolling.

[14]: http://en.wikipedia.org/w/index.php?title=Artichokes&mobileaction=toggle_view_desktop

## Remote debugging

Of course, there will be times as a developer when you'll need to debug sites running on Opera 14 for Android. This can be done from Windows, Mac and Linux desktops — see our article about [remote debugging Opera for Android][15].

[15]: http://dev.opera.com/articles/view/remotely-debugging-opera-for-android/

## Made to discover

Of course, there are many more details to talk about — offline pages, private tabs, browser.js — but we'll leave those for you to discover. Enjoy, and let us know what you think!