---
title: Opera Mobile Emulator 12.1 Is Out
authors:
- andreas-bovens
tags:
- opera-mobile
- emulator
- mobile
license: cc-by-3.0
---

Opera Mobile Emulator is a fine tool for creating and testing responsive web designs, as explained in my recent [Smashing Magazine article](http://mobile.smashingmagazine.com/2012/08/30/responsive-designs-opera-mobile-emulator/). So it’s my pleasure to announce that, today, we’ve released version 12.1 of our [Opera Mobile Emulator](http://www.opera.com/developer/tools/mobile/) for Mac, Windows and Linux!

This release brings the emulator in sync with our [Opera Mobile 12.1 for Android release](https://play.google.com/store/apps/details?id=com.opera.browser&hl=en) in early October: the same [standards support](http://www.opera.com/docs/specs/productspecs/) and feature set of course, but there is more:

* A wide selection of new profile presets in the Profile Selector, representing a selection of common Android phones.
* The Profile Selector now comes with a UA string dropdown, allowing you to set a UA string before launching the browser.
* The Window Scale dropdown allows you to launch an Opera Mobile instance at e.g. 50% of its original size: this makes sure the instance fits comfortably inside your laptop monitor, while at the same time preserving reported screen height, width and `devicePixelRatio`.
* Opera Mobile Emulator can now also talk to our browser automation library, OperaDriver. OperaDriver is an implementation of the [W3C WebDriver specification](http://dvcs.w3.org/hg/webdriver/raw-file/tip/webdriver-spec.html) and part of the free software web testing framework [Selenium](http://seleniumhq.org/). Support for OperaDriver was first introduced in a [Labs release of the Opera Mobile Emulator](https://dev.opera.com/articles/view/introducing-mobile-browser-automation/) back in August, but this is now part of the 12.1 release.

Also note that you can use all the [recent additions to Opera Dragonfly](http://my.opera.com/dragonfly/blog/) with Opera Mobile Emulator, by activating Opera Dragonfly’s [remote debugging feature](http://www.opera.com/dragonfly/documentation/remote/), opening `opera:debug` in Opera Mobile Emulator and clicking the Connect button.

![Debugging Opera Mobile Emulator with Opera Dragonfly]({{ page.id }}/debugging.png)

For a full overview of all input modes, launch arguments, shortcuts and other power user settings, check out our [extensive guide on Dev.Opera](https://dev.opera.com/articles/view/opera-mobile-emulator/).
