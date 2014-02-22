---
title: 64-Bit Opera, and Out-of-Process Plug-Ins
authors:
- chris-mills
intro: 'Originally published just before Christmas 2011, and now updated with a new set of builds on February 9th 2012, Opera is proud to present a new labs release featuring 64-bit builds and out-of-process plug-ins.'
tags:
- 64-bit
- oopp
- opera-12
- plugins
- security
layout: article
---

**Update, November 22nd 2012**: Please note that Opera 12.00 final shipped with 64-bit and OOPP support, and that as of version 12.02, OOPP is disabled for Windows 32-bit.

**Update, February 9th 2012**: Article originally published just before Christmas 2011, and now updated with a new set of builds.

Thanks for all your great feedback so far. We’ve updated the [out-of-process plug-ins (OOPP) builds](#builds) to a newer version containing many fixes and updates. A lot of work has been done in the plugin backends on our various platforms. Keep testing with all the plugins you usually use, and remember to report back any issues to us!

## Known Issues

### All platforms

- Plugin crash reporting not working yet

### Linux/FreeBSD

- No Xt support
- Sun JDK might not work correctly: use IcedTea (OpenJDK) instead
- gecko-mediaplayer plugins are more prone to failure
- When hovering over a tab thumbnail that extends over the plugin area, the plugin animation is not restarted after hover out when compositing is off
- Typing in an auto-activated plugin is not working
- Opera may crash on exit

### Mac

- Hardware acceleration is off by default on the Mac
- No IME support
- Some content is invisible in transparent Flash
- System dialogs may open behind the browser window
- No context menu for Flash
- The Flip4Mac plug-in may not play videos
- You may get drawing artifacts while scrolling
- Hardware acceleration is disabled by default, due to drawing issues with plug-ins

### Windows

- You’ll experience choppy scrolling on pages with embedded Flash
- Scrolling inside windowed Flash is not working
- WMP player plugin controls get corrupted after scrolling
- Silverlight may have some issues
- Opera may crash on resizing the plugin window
- Minimal restart in Opera’s crashlog dialog works as a full restart
- You’ll experience a temporary freeze when deleting plugin data
- Some strings in 64bit Opera will suffer corrupted text substitutions
- The Shockwave Director plugin is not detected under 64bit Opera

Original text follows

## Introduction

As the snow settles on the ground, and the elves draw close to finishing construction of all their toy orders, it may not surprise you to learn that Opera’s little helpers have also been very busy, adding exciting new innovations to our desktop browser!

As a last release before Christmas, we are bringing you a new labs release featuring two exquisitely wrapped presents:

- 64-bit builds
- Out-of-process plug-ins

Let’s look at these features in more detail.

## Out-of-process plug-ins

We monitor our built-in crash logger carefully to see what is still causing browser crashes, post release. One very common source of instability is one that we unfortunately can’t fix ourselves: browser plug-ins. We fixed this problem for Opera on Linux and FreeBSD a long time ago by running plug-ins in a separate process. This allows us to control exactly what communication takes place between Opera and running plug-ins, improving security and stability in the process. If a plug-in accidentally crashes under this system, Opera will keep on running, and a simple page reload will correct the plug-in.

This architecture is now coming to a Windows or Mac machine near you! This labs release provides an early preview of the new rewritten version for Mac/Win/Linux/FreeBSD, constructed to allow our code to work across all platforms.

## 64-bit builds

Bringing the out-of-process plug-in architecture across to Windows and Mac also brings another advantage: the ability to run plug-ins compiled for Intel 32-bit architecture from within a 64-bit Opera process. And 64-bit Opera is the other delightful gift we’re giving you at Opera Labs this Christmas!

64-bit Windows and Mac have been in the works for a while, but we didn’t want to release them until we had a way of running all plug-ins that’s completely transparent to the user: This is now possible with the out-of-process plug-in architecture, so here we are! The 64-bit versions of Opera offer performance improvements in some specific areas and allow Opera to have more freedom in allocating memory.

## Download Builds! {#builds}

- [Windows 32-bit][2]
- [Windows 64-bit][3]
- [Mac 32/64-bit][4]
- [Linux/FreeBSD builds directory][5]

[2]: http://snapshot.opera.com/labs/OOPP/Opera-Labs-OOPP-12.00-1293.i386.exe
[3]: http://snapshot.opera.com/labs/OOPP/Opera-Labs-OOPP-12.00-1293.x64.exe
[4]: http://snapshot.opera.com/labs/OOPP/Opera-Labs-OOPP-12.00-1293.dmg
[5]: http://snapshot.opera.com/labs/OOPP/Linux-FreeBSD/

## Release notes and known issues

Original issues removed as they are no longer relevant.

Note on bug reporting: This build is based on Opera 12 (Wahoo) therefore it includes all the features from recent Opera Next snapshots, including hardware acceleration. When reporting plug-in bugs in this build, it’s always interesting to know if hardware acceleration is on or off, and if toggling it makes a difference. You can turn off hardware acceleration by setting [opera:config#UserPrefs|EnableHardwareAcceleration][6] to `0` and restarting the browser.

[6]: opera:config#UserPrefs|EnableHardwareAcceleration

## Read more… {#readmore}

- [The Opera plug-in interface][7]

[7]: /articles/the-opera-plug-in-interface/