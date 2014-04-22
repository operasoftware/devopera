---
title: Opera Widgets Go Mobile
authors:
- andreas-bovens
intro: 'Over the last couple of months, we’ve been working hard to improve our Mobile Widgets Manager — we basically rebuilt it from scratch, using the cross-platform UI framework that is also used in Opera Mobile and Opera Mini.'
tags:
- widgets
- opera-mobile
- labs
license: os-asa
layout: post
---

**Update April 22, 2010:** updated builds for S60 and Windows Mobile with various  UI  and performance improvements, as well as many bug fixes. Also check out [our latest Labs post][1] announcing the Opera Widgets Mobile Emulator and Opera Mobile developer tools for Mac and PC.

[1]: http://labs.opera.com/news/2010/04/22/

Over the last couple of months, we’ve been working hard to improve our Opera Widgets manager application for mobile phones — we basically rebuilt it from scratch, using the [cross-platform UI framework][2] that is also used in Opera Mobile and Opera Mini, and we have added a number of new features, providing a better and unified user experience across multiple mobile platforms.

[2]: http://www.opera.com/press/releases/2009/12/10_2/

Widgets can best be understood as applications that are built with Web standards, such as HTML, CSS, JavaScript and SVG. This means that the barrier to development is very low, and common approaches and libraries used in classic Web development can be deployed, flattening the learning curve and drastically speeding up development time.

Besides the standards supported in our Opera Presto 2.4 engine, we’ve also provided a number of hooks to further empower widget developers: OAuth support, a notification mechanism, multiple icon sizes, live icons, and more.

Using these technologies, developers can create compelling mobile applications that run on Windows Mobile as well as on S60 phones, with more platforms to come in the next few months. Most importantly, all this is possible without the need to recode these mobile applications and adjust them for every platform — no need to learn a new programming language or otherwise deal with restricted deployment environments!

Be sure to try it out and [let us know what you think][3] .

[3]: http://my.opera.com/community/forums/forum.dml?id=15948&days=999&z=1

###  Downloads:

- [Windows Mobile][4]
- [Symbian Series 60][5]

[4]: http://www.opera.com/download/get.pl?sub=++++&id=32824&location=270&nothanks=yes
[5]: http://www.opera.com/download/get.pl?sub=++++&id=32825&location=270&nothanks=yes

These builds can be used by developers to start creating and testing their mobile applications on the most important mobile platforms. More platforms will be announced soon.

###  Under the hood

- [Opera Presto 2.4][6] powers Opera Widgets, bringing the latest Web technology to mobile phones. Note that Vega accelerated rendering is not enabled, so certain advanced background & borders features and CSS transitions are not supported.
- By default, links are opened in the default browser of the platform. However, a widget may invoke a limited browser for authentication purposes (OAuth). Any URL loaded by calling `window.open(url)` will be opened inside the Widget Manager application. The preinstalled Facebook widget uses this feature.
- By default, the Widget Manager uses a virtual cursor that is moved by the arrow keys of the keyboard. If, for example, a game widget listens to key events and does not need a virtual cursor, the latter can be turned off by setting the `cursor` CSS property to `none`.
- Widgets can send notifications to the Widget Manager by calling `widget.showNotification(text)`.
- A widget’s author may use one or more [static icons][8]. The Widget Manager will use the icons with the most appropriate size.
- When a widget is minimized, [`docked` mode][9] is invoked, which is a mode wherein the widget renders and displays in a minimized state with a smaller viewport, resulting in a so called “live icon”.
- Widgets can be [debugged remotely][10] via the Opera Dragonfly developer tools.

[6]: http://www.opera.com/docs/specs/presto24/
[8]: /articles/opera-widgets-specification-fourth-ed/#xml_icon
[9]: /articles/opera-widgets-specification-fourth-ed/#widget_modes
[10]: /articles/remote-debugging-with-opera-dragonfly/
