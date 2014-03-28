---
title: Introducing Coast by Opera
authors:
- bruce-lawson
tags:
- coast
- opera
- apps
- ipad
- browser
- odin
license: cc-by-3.0
layout: post
---

Today, we’re launching a new iPad product called [Coast by Opera][1]. Primarily designed for leisure surfing, the goal is invisible technology; the browser treats websites as apps, using gestures for navigation so that nothing gets in the way of an intuitive, full-screen experience.

[1]: http://coastbyopera.com

Since Mosaic, browsers have sported back buttons, menus, icons (many of which have barely changed in 20 years). Coast dispenses with most of these; “back” is a left swipe; adding to speed dial is a single drag of a site’s icon; reload is a drag downwards. The only buttons that remain are a home button and a “recent sites” button.

We want Coast to help close the user experience gap between traditional web browsers rendering web pages, and apps. We don’t want native apps to beat the web — we want the web to win.

<iframe width="560" height="315" src="//www.youtube.com/embed/PY23b1X9mAM" frameborder="0" allowfullscreen></iframe>

## For developers

Coast by Opera “appifies” websites (sorry for the nasty neologism!). Therefore, Coast should _Just Work_™ if you’re making sites that already work well across devices and browsers, with big hit areas for fat fingers, that listen out for touch events (maybe with [HandJS][2], a polyfill for W3C Pointer Events to abstract away listening for mouse and touch).

[2]: https://handjs.codeplex.com

### Coast icon size

Coast treats sites as apps, so the icon you provide is vital to users being able to identify your site.

In general, icon references and domain names are used to group pages into the same web app on Coast’s home screen or in search results. You should include the same icons and icon-reference markup for pages you want grouped together.

For the best image fidelity, Coast prefers a web-app image size of 228×228px — larger than Microsoft tile images and Apple touch icons (144×144px). The following markup in your <head> element denotes an icon optimized for Coast:

	<link rel="icon" href="$URL" sizes="228x228">

This won’t conflict with any other icons and tiles you already have assigned for Windows 8, Android or iOS. If you don’t supply an 228×228 icon, Coast uses [heuristics to derive its icon][3].

[3]: http://coastbyopera.com/developer

### Web Standards support

Coast uses Apple’s UIWebView embedded in iOS. This is based on WebKit.

### Get Coast

Coast is available in the App Store. We think it’s the browser that the iPad should have shipped with. We’re excited to know what you think of it.
