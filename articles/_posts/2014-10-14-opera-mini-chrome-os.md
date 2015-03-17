---
title: 'Opera Mini on your Chromebook for fun and bandwidth'
authors:
- vlad-filippov
intro: 'Vlad Filippov found a way to run the Opera Mini Android application on Chrome OS.'
tags:
- opera-mini
license: cc-by-3.0
---

<figure block="figure">
	<img elem="media" src="{{ page.id }}/great-success.jpg" alt="Opera Mini running on a Chromebook">
	<figcaption elem="caption">Opera Mini running on a Chromebook</figcaption>
</figure>

<figure block="figure" mod="right-half">
	<img elem="media" src="{{ page.id }}/installing.jpg" alt="Opera Mini installing on Chrome OS">
	<figcaption elem="caption">Opera Mini installing on Chrome OS</figcaption>
</figure>

This summer Google previewed a way to run Android applications on Chromebooks using ARC — App Runtime for Chrome. At this time there are only a handful of applications that work on Chrome OS through official channels. However, there are tools and workarounds that allow users to run their favorite Android applications on Chromebooks. One of the applications that works well on Chrome OS is the Opera Mini browser.

It might sound a bit insane at first — why would you want to run a browser inside of a browser? Beside the mind-blowing “inception” factor, using Opera Mini on your Chromebook can actually help you save bandwidth when you are browsing using a cellular data plan. Developers can also utilize this Chromebook capability to easily test websites and see how well the web works with Opera Mini. Besides all that, it is a fun hack to play around with.

## Running Opera Mini on Chrome OS

Here’s the fastest way to get Opera Mini running on your Chromebook, using an Android device and a custom runtime called _ARChon_ (the difference in runtimes is explained later in the article):

<figure block="figure">
	<iframe src="https://www.youtube.com/embed/FA2UDyTB7lI" width="570" height="320" allowfullscreen elem="media"></iframe>
	<figcaption elem="caption">Quick demo of Opera Mini with ARC</figcaption>
</figure>

1. [Download Opera Mini](https://play.google.com/store/apps/details?id=com.opera.mini.android&hl=en) and [the ARChon Packager](https://play.google.com/store/apps/details?id=me.bpear.archonpackager&hl=en) onto your Android device from Google Play. (Alternatively, [the Opera Mini APK can be downloaded here](http://www.opera.com/mobile/download/versions/).)
2. [Download the appropriate ARChon runtime](https://github.com/vladikoff/chromeos-apk/blob/master/archon.md#instructions) to your Chromebook from GitHub.
3. Use the ARChon Packager on your Android device to convert Opera Mini for your Chromebook. This will generate a ZIP file. Transfer the ZIP file to your Chromebook. Use the “Tablet mode” and “Landscape” orientation when you are converting the application to get the best experience out of Opera Mini.
4. Unpack both ZIP files (the runtime and the application), navigate to
 `chrome://extensions/`, enable “Developer mode” and load the two unpacked directories as “Unpacked extensions”. Make sure to load the runtime first. After you load the two directories just press “Launch” in the Opera Mini extension. The application will also be added to your Chrome OS launcher.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/chrome-os-launcher.jpg" alt="Chrome OS launcher integration">
	<figcaption elem="caption">Chrome OS launcher integration</figcaption>
</figure>

If you already use the official Android applications on Chrome OS, [follow the instructions on GitHub](https://github.com/vladikoff/chromeos-apk#setup-for-chrome-os--app-conversion) to get Opera Mini working with the official runtime. At this time the official runtime can only run up to four applications on Chrome OS. If you do not have an Android device, then obtain the Opera Mini APK file and follow the instructions of the [`chromeos-apk`](https://github.com/vladikoff/chromeos-apk) project to get Opera Mini working using a Node.js conversion tool.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/opera-mini-web-page.jpg" alt="Opera Mini browsing in style">
	<figcaption elem="caption">Opera Mini browsing in style</figcaption>
</figure>

Most Opera Mini features, such as “Downloads” and “Find in page” work really well on Chrome OS. When you restart the application, your settings and history get saved. If you remove and reinstall the application, you get a fresh copy with all settings reset.

Most of the screenshots in this article are taken on a Chromebook Pixel. However, using the ARChon runtime for 32-bit and ARM devices you can try out Opera Mini on older hardware. This screenshot below is taken on a 32-bit Samsung Series 5 Chromebook from 2011:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/old-hardware.jpg" alt="Opera Mini on older Chromebooks">
	<figcaption elem="caption">Opera Mini on older Chromebooks</figcaption>
</figure>

## The Technology

The ARC (App Runtime for Chrome) is powered by the Native Client technology. This allows ARC to execute native compiled code in the browser. In this case, the Opera Mini application window is a basic HTML page with an embedded Native Client plugin component.

The runtime ships in three different flavors, for 64-bit, 32-bit and ARM processors. ARC consists of an ARM instructions translator, which allows Android applications to run in the plugin environment. There are also several libraries that emulate the Dalvik Virtual Machine and graphics hardware.

The custom runtime, called ARChon, is a forked version of ARC. ARChon is developed as part of the [`chromeos-apk` project](https://github.com/vladikoff/chromeos-apk/blob/master/archon.md) and allows running an unlimited number of Android applications on Chrome OS. ARChon also works on some Linux, Windows and OS X devices — this means you can try running Opera Mini on your desktop machine.

Currently it is not possible to run other complex browsers in these runtimes because of the native library requirement. Opera Mini does not have issues with native libraries and works outside of the box. It is also possible to tweak the application environment by editing the `manifest.json` file in the application directory. You can make the Opera Mini application window resizable or make the browser open files with different extensions. In addition, developers can turn on ADB (Android Debug Bridge) to take full control fo the sandboxed emulator for this specific application. The list of available runtime options is [documented on GitHub](https://github.com/vladikoff/chromeos-apk/blob/master/manifest.md).

## Useful Links

- The [`chromeos-apk` project](https://github.com/vladikoff/chromeos-apk/blob/master/archon.md), the original conversion tool for Android applications to run on Chrome OS.
- [ARChon runtime](https://github.com/vladikoff/chromeos-apk/blob/master/archon.md) documentation and the community developed [ARChon packager](https://play.google.com/store/apps/details?id=me.bpear.archonpackager&hl=en).
- [r/chromeapks](http://www.reddit.com/r/chromeapks) - the `chromeos-apk` Reddit community.

Happy hacking!
