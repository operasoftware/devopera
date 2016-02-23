---
title: Start of the Opera Developer Stream
authors:
- andreas-bovens
tags:
- flags
- opera
license: cc-by-3.0
---

As announced [on the Desktop Team Blog](http://my.opera.com/desktopteam/blog/opera-features-and-release-cycle) a while back, we’ve now switched to a fast release cycle with three different streams: Stable, Next and Developer.

![Opera Developer logo]({{ page.id }}/opera-developer.png)

Today marks the **release of our first Opera Developer build ([Mac](https://www.opera.com/download/get/?partner=www&opsys=MacOS&product=Opera%20Developer), [Windows](https://www.opera.com/download/get/?partner=www&opsys=Windows&product=Opera%20Developer))**. If you’re a web or extension developer, we recommend you to install this build, which will be auto-updated frequently from now on, and gives a peek at what we have in the pipeline, including but not limited to fresh web standards support.

What is the difference between Next and Developer? Opera Next is a preview of what will be in the next stable version of Opera, which at present is v16. Opera Developer on the other hand is more experimental: this build includes stuff that you may see in v17 or later, but possibly also features that never make it to stable.

To give a better feeling of this, here are some of the differences between the current Opera Next and this first Opera Developer build:

* the current Opera Next version number is 16.0.1196.29, and it runs on Chrome 29; Opera Developer has 17.0.1224.1 as version number, and runs on Chrome 30.
* in this first Opera Developer build, we’ve brought back Opera 12’s **tab pinning** functionality, as well as **rocker gestures** (just enable mouse gestures if you haven’t done so already)
* more extension API support: bookmarks, commands, omnibox, webNavigation — we’re still working on documentation for those
* if you go to opera:settings in this build, you’ll see 3 **“On startup” options**, giving you the choice between continuing from where you left off, opening a start page or opening a set of pages.
* another `opera:settings` option allows you to set **custom search engines** and trigger them with a keyword
* in `opera:flags`, you’ll find a whole bunch of extra, more experimental settings. Some of this is Chromium stuff that you’ll also find in Chrome Canary, while other bits are Opera-only flags. A selection:

		* **Media capture** gives you microphone and camera support, which you can try out with [Web Audio Playground](http://webaudioplayground.appspot.com) and [Webcam Toy](http://webcamtoy.com).
		* **Extension action context menu** adds a right-click menu to extension buttons, allowing for easy uninstalling of extensions and hiding of buttons.
		* **Enable lazy session loading** allows you to start the browser quickly with multiple tabs, but it will only load those tabs when they are activated.
		* **Theme installation** allows you to install themes from our [addons catalog](https://addons.opera.com/themes/). In a first phase, we’re supporting a subset of the old theme format; we’re working on an updated theme format where you can use a different background image for Speed Dial, Downloads, Settings, etc.

Give it a spin, and let us know what you think!
