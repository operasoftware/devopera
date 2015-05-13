---
title: Opera 18 Developer and Opera 16 Beta for Android
authors:
- andreas-bovens
intro: 'On Wednesday, we’ve [announced](http://my.opera.com/desktopteam/blog/2013/09/11/opera-18-developer-stream) our first Opera 18 build in the Developer Stream — it comes with a lot of [bug fixes](/blog/opera-18-developer-and-opera-16-beta-for-android/Opera_initial_18_dev_changelog.txt), and showcases some of the features we’re working on: themes support, quick access bar, improved tab handling (you can now drag tabs between browser windows), and under the hood you’ll find Chromium 31. If you have Opera Developer installed, the update will be applied automatically: check opera:about if you want to double check.'
tags:
- opera
- android
- off-road
license: cc-by-3.0
---

On Wednesday, we’ve [announced][1] our first Opera 18 build in the Developer Stream — it comes with a lot of [bug fixes][2], and showcases some of the features we’re working on: themes support, quick access bar, improved tab handling (you can now drag tabs between browser windows), and under the hood you’ll find Chromium 31. If you have Opera Developer installed, the update will be applied automatically: check opera:about if you want to double check.

[1]: http://my.opera.com/desktopteam/blog/2013/09/11/opera-18-developer-stream
[2]: /blog/opera-18-developer-and-opera-16-beta-for-android/Opera_initial_18_dev_changelog.txt

On the mobile front, things are moving as well: this morning, we’ve released an update to our [Opera for Android beta][3] channel, sporting many bug fixes, an engine upgrade to Chromium 29, and most importantly, a new Off-Road mode, which we invite you to test out and give feedback on.

[3]: https://play.google.com/store/apps/details?id=com.opera.browser.beta

Unlike the Off-Road mode in the current Opera for Android builds, which is powered by Mini servers, the Off-Road mode in this build is more like the one you find in Opera for Windows and Mac: we compress images, HTTP requests etc. on the server and SPDY-ify everything, but the rendering happens on the client-side by the browser. This improves site compatibility (JavaScript works just fine!), while still giving you the advantage of data compression.
