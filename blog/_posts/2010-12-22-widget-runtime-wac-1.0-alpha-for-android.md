---
title: 'Widget Runtime: WAC 1.0-Supporting Alpha for Android'
authors:
- pavel-fokin
intro: 'Howdy folks, in these short days of the year – “vintersolverv” in Norwegian – Opera Software has prepared something to lighten things up: the alpha release of our mobile widget manager for Android with support for WAC 1.0 APIs!'
tags:
- wac
- widgets
- android
- labs
license: os-asa
layout: article
---

Howdy folks, in these short days of the year — “vintersolverv” in Norwegian — Opera Software has prepared something to lighten things up: the alpha release of our mobile widget manager for Android with support for WAC 1.0 APIs!

This build can be run on any Android 2.1+ device, and it allows widgets to access and use device features, such as accelerometer, GPS, camera and more.

To get started, grab the [Android build][1]. The build comes with the following widgets preinstalled:

[1]: http://www.opera.com/download/get.pl?sub=++++&id=33389&location=270&nothanks=yes

- Chicken Quake (WAC 1.0, Accelerometer API)
- Level Tool (WAC 1.0, Accelerometer API)
- Sun & Moon
- River IQ Game
- Google Translator

For widget developers, we have prepared two articles that explain how to build a WAC 1.0 widget and make it independent from the device’s screen resolution, so it looks good on any device:

- [Introduction to Widget Handset APIs in WAC 1.0][2]
- [Building a spirit level widget using WAC 1.0][3]

[2]: http://dev.opera.com/articles/view/widget-handset-apis-wac
[3]: http://dev.opera.com/articles/view/building-a-widget-with-wac/

There are demo widgets created by Opera for each WAC 1.0 API group. Each widget demonstrates the basic functionality, displays returned values in real time and provides short introduction how to use respective APIs. Refer to installation instructions on how/where to get them.

For more details on how to develop WAC 1.0 widgets, we refer to the [WAC 1.0 specification][4].

[4]: http://www.wacapps.net/

This build supports remote debugging via [Opera Dragonfly][5] ; please refer to [Dev.Opera][6] for more instructions.

[5]: http://www.opera.com/dragonfly/
[6]: http://dev.opera.com/articles/view/remote-debugging-of-widgets-on-mobile-devices/

Play with the build, try to create your own WAC 1.0 widgets and let us know what you think on the [Opera Widgets forum][7].

[7]: http://my.opera.com/community/forums/forum.dml?id=1296

Please note that this build is just alpha quality, meaning there are known issues. Some of them are as serious as crashes and freezes, so please read the disclaimer in the installation document before you work with it.

Also, we’d like to share our intended roadmap with you: we plan to release a build of better quality in January 2011, and a WAC 1.0 emulator for desktop computers with support for WAC APIs, so widget developers will have more handy tools. Stay tuned!

There is a press release available as well: [Opera releases WAC-ready widget runtime for Android][8]

[8]: http://www.opera.com/press/releases/2010/12/22/

Finally, we’d like to thank all the Opera teams who contributed to this release — you guys rock!
