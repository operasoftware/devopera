---
title: Origin of Opera Mini for Android
authors:
- chris-mills
intro: 'This article takes a look at one of Opera’s latest and greatest projects - the creation of an Opera Mini version that will run on Google’s Android open mobile development platform. Over the course of the article, we’ll explain why we created it, how, challenges we faced, and how you can try it out for yourself. We’d like to encourage you to try it out, and give us as much feedback as you possibly can. Enjoy!'
tags:
- opera-mini
- android
license: os-asa
---

## 12th January 2012: This article is obsolete

This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. You can download the latest version of Opera Mini for Android, and find documentation and technical specs, at our [Opera for Android][1] page.

[1]: http://www.opera.com/mobile/android/

This article takes a look at one of Opera’s latest and greatest projects - the creation of an Opera Mini version that will run on Google’s Android open mobile development platform. Over the course of the article, we’ll explain why we created it, how, challenges we faced, and how you can try it out for yourself. We’d like to encourage you to try it out, and give us as much feedback as you possibly can. Enjoy!

## Why did we do it?

When we first heard about Google Android, we were very excited about the possibilities it presents, and thought it would be very cool to make Opera Mini available on it, plus it would give mobile developers a better choice of browsers to make available on handsets. But it goes beyond just cool factor - one of Opera’s central doctrines is providing the best internet experience on any device - the Android platform is another missing piece of the puzzle for us to fill in.

There are also practical reasons — the Opera Mini browser renders web pages that have been transcoded to the binary OBML format, meaning much smaller downloads and a faster browsing experience on mobiles, than would be provided by other browsers (the Android WebKit-based browser component has a switch in the public API allowing the use of a transcoding proxy that transcodes web pages to a simpler form of HTML. Whether this is as small and fast as Opera Mini’s OBML remains to be seen.)

## How did we do it?

How did we do it? We decided to use the existing Opera Mini code base (even the binary package) instead of creating a separate port, to save on resourses. We created a special wrapper that translates Java ME (mostly MIDP) API calls into Android API calls. The tool used was [MicroEmulator][2] - this is an open source (LGPL) implementation of Java ME that runs on top of Java SE. The lead Opera Mini Android developer is also the lead developer of MicroEmulator, so it was an inspired choice! The Android platform is similar to Java SE, with the exception of several libraries normally included in Java SE (like AWT/Swing - these are excluded because they would likely be too heavy to fit into the embedded environment.) It is therefore fairly simple to port MicroEmulator to run inside Android environment. The only major task was to replace the AWT/Swing graphics backend of MicroEmulator with Android specific APIs.

[2]: http://www.microemu.org/

## Issues we faced

This section details the issues we faced when making the Opera Mini port over to Android:

1. First, the Android platform is a comparitively fresh set of APIs. There was not much information available on the web when we were doing the original development, and the community around Android was just forming, so sometimes it was difficult to find an answer if something during development was proving difficult.
2. Android was not a finished product during the original development, and there was no hardware available that would run Android at that time.
3. Integration between the Eclipse IDE and the Android SDK is seamless, making for a nice coding experience. The Android emulator however runs inside QEMU, which is a bit to slow even on fast desktops.
