---
title: Opera Desktop 18 Released
authors:
- bruce-lawson
intro: '[Opera Desktop 18 for Mac and Windows](http://www.opera.com/computer) is out, based on Chromium 31. ([See features and download](http://www.opera.com/computer))'
tags:
- getusermedia
- webrtc
- opera-18
- themes
- extensions
- odin
license: cc-by-3.0
layout: post
---

[Opera Desktop 18 for Mac and Windows][1] is out, based on Chromium 31. ([See features and download][1])

[1]: http://www.opera.com/computer

### getUserMedia and WebRTC

Developers will be glad to know that access to the camera and microphone with `getUserMedia` is now enabled. Try using your head to control a game with [FaceKat][2], which uses gUM and the open-source [headtrackr][3] JavaScript by Opera’s Audun Mathias Øygard. Also try Paul Neave’s [Webcam Toy][4] which uses WebGL to manipulate the video stream.

[2]: http://shinydemos.com/facekat
[3]: https://github.com/auduno/headtrackr
[4]: http://webcamtoy.com

Note how the tab that’s accessing your video or audio has a pulsing red beacon to remind you that you’re broadcasting, even if you’re reading another tab, so you’re not accidentally recorded picking your nose while reading Slashdot.

`getUserMedia` is part of [WebRTC][5], a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple Javascript APIs. Try it out by inviting up to seven friends to a video chat room on [appear.in][6], a great simple videoconferencing system using WebRTC. What’s particularly nice about (Oslo-based!) [appear.in][6] is that it’s very webby — no plugins are used (that’s the point of webRTC) and it uses the web’s basic architectural principle: you just share a link to invite friends using Opera, Chrome or Firefox to connect with a simple UI.

[5]: http://www.webrtc.org
[6]: http://www.appear.in/

<figure class="figure">
	<img src="{{ page.id }}/webcam.jpg" class="figure__media">
	<figcaption class="figure__caption" markdown="span">[Read more about the technology behind appear.in][8]</figcaption>
</figure>

[8]: http://comoyo.github.io/blog/2013/08/05/video-meetings-in-the-browser-using-webrtc-and-angularjs/

### More Extension APIs

Opera 18 adds the following APIs to extensions:

- [chrome.permissions][9] ([tutorial][10])
- [chrome.browsingData][11] ([tutorial][12])
- [chrome.contentSettings][13] ([tutorial][14])
- [chrome.devtools.inspectedWindow][15]
- [chrome.devtools.network][16]
- [chrome.devtools.panels][17]
- [chrome.omnibox][18] ([tutorial][19])
- [chrome.pageCapture][20]
- [chrome.privacy][21] ([tutorial][22])
- [chrome.types][23]
- [Opera Off-Road Mode extension API (available through chrome.types)][24]

[9]: http://dev.opera.com/extension-docs/permissions.html
[10]: http://dev.opera.com/extension-docs/tut_optional_permissions.html
[11]: http://dev.opera.com/extension-docs/browsingData.html
[12]: http://dev.opera.com/extension-docs/tut_removing_browsingdata.html
[13]: http://dev.opera.com/extension-docs/contentSettings.html
[14]: http://dev.opera.com/extension-docs/tut_contentsettings.html
[15]: http://dev.opera.com/extension-docs/devtools.inspectedWindow.html
[16]: http://dev.opera.com/extension-docs/devtools.network.html
[17]: http://dev.opera.com/extension-docs/devtools.panels.html
[18]: http://dev.opera.com/extension-docs/omnibox.html
[19]: http://dev.opera.com/extension-docs/tut_omnibox.html
[20]: http://dev.opera.com/extension-docs/pageCapture.html
[21]: http://dev.opera.com/extension-docs/privacy.html
[22]: http://dev.opera.com/extension-docs/tut_privacy.html
[23]: http://dev.opera.com/extension-docs/types.html
[24]: http://dev.opera.com/extension-docs/tut_offroad.html

See our [Opera 15+ extensions documentation][25] for in-depth discussion of these APIs.

[25]: http://dev.opera.com/extension-docs/index.html

Also, a big shout-out to Martin Kadlec (BS-Harou) who [suggested][26] an Off-Road Mode API with a concrete use-case. Thanks, Martin!

[26]: http://my.opera.com/desktopteam/blog/2013/08/08/opera-17-first-developer-stream-preview?startidx=650#comment111142002

### Themes, and what’s next

Opera 18 can be themed. Making themes is very easy — read [Themes in Opera 18+][27] and upload to [addons.opera.com/en/themes/][28] to share with the world.

[27]: http://dev.opera.com/articles/themes-in-opera-18-and-higher/
[28]: https://addons.opera.com/en/themes/

In the next two weeks, we’ll promote the experimental [Opera developer stream][29] to feature-complete [Opera.Next][30] so you can try out new standards and features. Keep an eye on the [Opera desktop team blog][31] for documentation about forthcoming releases and full changelogs.

[29]: http://opera.com/developer
[30]: http://opera.com/next
[31]: http://blogs.opera.com/desktop/
