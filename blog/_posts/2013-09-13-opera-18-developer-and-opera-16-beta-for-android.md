---
title: Opera 18 Developer and Opera 16 Beta for Android
authors:
- andreas-bovens
tags:
- Opera
- opera developer
- android
- off-road
- blog
layout: article
---
<p>On Wednesday, we&#39;ve <a href="http://my.opera.com/desktopteam/blog/2013/09/11/opera-18-developer-stream">announced</a> our first Opera 18 build in the Developer Stream — it comes with a lot of <a href="https://files.myopera.com/bkazmierczak/files/Opera_initial_18_dev_changelog.txt">bug fixes</a>, and showcases some of the features we&#39;re working on: themes support, quick access bar, improved tab handling (you can now drag tabs between browser windows), and under the hood you&#39;ll find Chromium 31. If you have Opera Developer installed, the update will be applied automatically: check opera:about if you want to double check.</p>
<p>On the mobile front, things are moving as well: this morning, we&#39;ve released an update to our <a href="https://play.google.com/store/apps/details?id=com.opera.browser.beta">Opera for Android beta</a> channel, sporting many bug fixes, an engine upgrade to Chromium 29, and most importantly, a new Off-Road mode, which we invite you to test out and give feedback on.</p>
<p>Unlike the Off-Road mode in the current Opera for Android builds, which is powered by Mini servers, the Off-Road mode in this build is more like the one you find in Opera for Windows and Mac: we compress images, http requests etc. on the server and SPDY-ify everything, but the rendering happens on the client-side by the browser. This improves site compatibility (JavaScript works just fine!), while still giving you the advantage of data compression.</p>
