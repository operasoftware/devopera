---
title: Introducing Mobile Browser Automation
authors:
- andreas-tolfsen
intro: 'Opera Mobile brings the Web to millions of people through their mobile phones and other non-desktop devices. Opera believes in giving people access to the full Web, and not making the distinction of a “mobile web”. To help automated mobile testing, we’ve updated the Opera Mobile Emulator so it can talk to our browser automation library, OperaPrestoDriver.'
license: cc-by-3.0
---

**Update:** If you’re looking for the web driver for modern Opera releases (i.e. Opera v15+), then refer to [the OperaChromiumDriver project](https://github.com/operasoftware/operachromiumdriver) instead.

Opera Mobile brings the Web to millions of people through their mobile phones and other non-desktop devices. Opera believes in giving people access to the full Web, and not making the distinction of a “mobile web”. Testing on mobile devices has always been hard for developers, though. That’s why we introduced the [Opera Mobile Emulator](https://www.opera.com/developer/tools/mobile/), which is our mobile browser packaged for installation on Windows, Mac and Linux desktops.

To help automated mobile testing, we’ve updated the Opera Mobile Emulator so it can talk to our browser automation library, OperaPrestoDriver. OperaPrestoDriver is an implementation of the [W3C WebDriver specification](http://dvcs.w3.org/hg/webdriver/raw-file/tip/webdriver-spec.html) and part of the free software web testing framework [Selenium](http://seleniumhq.org/). Selenium provides a lightweight and elegant way of testing web apps by emulating user interaction with actual web browsers.

## Requirements

Since support for OperaPrestoDriver in Opera Mobile is fresh out of the lab, you’ll need to use a set of custom builds we’ve prepared:

* [Windows](https://www.opera.com/download/get.pl?id=34969&sub=true&nothanks=yes&location=360)
* [Mac](https://www.opera.com/download/get.pl?id=34970&sub=true&nothanks=yes&location=360)
* [DEB](https://www.opera.com/download/get.pl?id=34967&sub=true&nothanks=yes&location=360)/[tarball](https://www.opera.com/download/get.pl?id=34968&sub=true&nothanks=yes&location=360) for Linux 64-bit
* [DEB](https://www.opera.com/download/get.pl?id=34965&sub=true&nothanks=yes&location=360)/[tarball](https://www.opera.com/download/get.pl?id=34966&sub=true&nothanks=yes&location=360) Linux 32-bit

To play with this you also need to fetch a [fresh release of OperaPrestoDriver (0.16 or later)](https://github.com/operasoftware/operaprestodriver/downloads) because it hasn’t landed in any Selenium release yet. Built-in support for Opera Mobile should be available onwards from Selenium version 2.26, though.

## Setting it up

Using WebDriver with Opera Mobile is not very different from using it with Opera Desktop. Since OperaPrestoDriver uses the [Scope debug protocol](http://dragonfly.opera.com/app/scope-interface/) to communicate with all the different products Opera offers, you can even reuse the same interfaces as you’d use for the Desktop product. The only difference is that you must tell it which product to use, as shown here with the Java bindings:

	DesiredCapabilities c = DesiredCapabilities.opera();
	c.setCapability("opera.product", OperaProduct.MOBILE);
	c.setCapability("opera.binary", "/path/to/my/custom/opera-mobile-build");

	WebDriver driver = new OperaDriver(c);
	driver.get("bostonglobe.com");

If you don’t specify which binary to use it will start the Opera Mobile Emulator you already have installed in a default location. Since we require a special build, either set the `opera.binary` capability or the `OPERA_PATH` environmental variable for this example to work.

Depending on your platform and specific preferences, the binary can be in any number of locations. However, here is a list of the most common:

* Linux: `/usr/bin/operamobile`
* Mac: `/Applications/Opera Mobile Emulator.app`
* Windows: `C:\Program Files\Opera Mobile Emulator\OperaMobileEmu.exe`

You can learn more on how to use WebDriver from [Selenium’s excellent documentation](http://seleniumhq.org/docs/03_webdriver.html), or you can [explore WebDriver’s API documentation](http://selenium.googlecode.com/svn/trunk/docs/api/java/index.html) on your own to learn more about which functionality is available.

## Emulating a specific device

The [Opera Mobile Emulator](https://www.opera.com/developer/tools/mobile/) combined with [Opera Dragonfly](https://www.opera.com/dragonfly/) lets you have a proper environment for mobile web development on your desktop. One of the exciting features is that you can tell it to emulate Opera on a specific device based on a list of ready-made profiles. This enables you to change the resolution of the screen, the pixel density, the UI, and to modify the user agent string.

For example, to use a tablet UI with a greater resolution you could do the following:

	DesiredCapabilities c = DesiredCapabilities.opera();
	c.setCapability("opera.product", OperaProduct.MOBILE);
	c.setCapability("opera.binary", "/path/to/my/custom/opera-mobile-build");

	// Use the tablet UI and a display of 860x600 pixels
	c.setCapability("opera.arguments", "-tabletui -displaysize 860x600");

	WebDriver driver = new OperaDriver(c);
	driver.get("vimeo.com");

Note that changing these settings will likely be made easier at a later stage, perhaps by closer integration with the capabilities system.

## Mobile-specific functionality

With this release we’ve also introduced a new entry-point class, `OperaMobileDriver`, which offers a few additional mobile specific roles, such as [`Rotatable`](http://selenium.googlecode.com/svn/trunk/docs/api/java/org/openqa/selenium/Rotatable.html) and [`TouchScreen`](http://selenium.googlecode.com/svn/trunk/docs/api/java/org/openqa/selenium/TouchScreen.html), but not all of these have been fully implemented yet by `OperaMobileDriver`.

For example, `Rotatable` will allow you to check the screen orientation of the emulator:

	DesiredCapabilities c = DesiredCapabilities.opera();
	c.setCapability("opera.binary", "/path/to/my/custom/opera-mobile-build");

	OperaMobileDriver driver = new OperaMobileDriver(c);
	System.out.println(driver.getOrientation());

## Known issues

Opera Mobile support in OperaDriver is very much a prototype, but it should allow you to start exploring automated testing of the mobile web. A few things to be aware of:

* There are issues with key combinations, such as when using modifier keys in action chains

* Using “special” keys, like arrow left or right, will not work due to the nature of the mobile browser

* Large portions of `TouchScreen` and `Rotatable` have not been fully implemented yet

* There is no support for testing Opera Mobile on real devices yet, but we expect that to follow soon

If you have any bugs to report, please do so in the [issue tracker](https://github.com/operasoftware/operaprestodriver/issues).

## When will it be ready?

OperaDriver 0.16 has already landed in Selenium’s trunk and support for Opera Mobile should be available in the standalone JARs as of 2.26.  This will allow you to use other languages, such as Python or Ruby, to control Opera Mobile.

Controlling Opera Mobile on real Android devices still needs some further polishing before it’s ready, so stay tuned!
