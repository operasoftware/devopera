---
title: A Treat for Nokia N9 Users — an Official Opera Mobile 11.5 Labs Release
authors:
- mostyn-bramley
intro: 'Since our previous releases of Opera Mobile for MeeGo, we have noticed that a lot of our users have been hanging out for an official Opera Mobile build for the Nokia N9 and N950 Harmattan phones. Well, today is your lucky day – we’re happy to announce that a Labs release of Opera Mobile 11.5 for Harmattan is available for download now.'
tags:
- meego
- nokia
- opera-mobile
license: cc-by-3.0
---

Since our previous releases of Opera Mobile for MeeGo, we have noticed that a lot of our users have been hanging out for an official Opera Mobile build for the Nokia N9 and N950 Harmattan phones. Well, today is your lucky day — we’re happy to announce that a Labs release of Opera Mobile 11.5 for Harmattan is [available for download][1] now.

[1]: http://store.ovi.com/content/255196

Some of the updates since the [Opera Mobile 11 MeeGo ARM developer preview][2] build include:

[2]: /articles/opera-mobile-labs-11.5-meego-netbooks-tablets/

- Upgrade to Opera Mobile 11.5
- Autorotation support (in all four orientations — prepare to get dizzy)
- Buttons near the bottom edge of the screen behave properly (those of you who modified the Opera Mobile 11 developer preview build may have noticed some issues with touches on the edges of the screen, since this older build was not designed to work with Nokia’s Swipe UI. Thanks to Gustav “thumbs of death” Tiger for figuring out how to reproduce these problems!)
- The internet connection dialog will be opened if you attempt to browse the web while not connected to the internet.

You can [download and install Opera Mobile 11.5][3] using your phone’s default browser. However, if you prefer not to use Ovi store, you should enable this setting: _Settings → Applications → Installations → Allow installations from non-Store sources_, and then download the [deb package from our server][4].

[3]: http://store.ovi.com/content/255196
[4]: https://www.opera.com/download/get.pl?sub=++++&id=34409&location=270&nothanks=yes

## Known issues

- This build (like the previous Opera Mobile 11 MeeGo ARM developer preview) is not optimised to conserve power — if you load a webpage with animations and leave Opera running, your battery will continue to drain, even when Opera Mobile is running in the background and/or the screen is turned off.
- The system on-screen keyboard is not supported.
- Adobe Flash and other plugins are not supported.
- HTML5 video is not supported.
- Haptic feedback/vibration is not supported.

Thanks to Fredrik Öhrn for helping merge some Maemo-specific tricks from our [N900 builds][5].

[5]: http://maemo.org/downloads/product/Maemo5/opera-mobile/

**Note:** if you have an Intel Atom based MeeGo netbook or tablet, try the [Opera Mobile Labs 11.5 for MeeGo netbooks and tablets][6] build instead.

[6]: /articles/opera-mobile-labs-11.5-meego-netbooks-tablets/
