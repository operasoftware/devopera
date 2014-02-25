---
title: First weekly build now live
authors:
- david-storey
tags:
- developer-tools
- weekly
- dragonfly
layout: post
---
<p>We have just released our first weekly build of Opera Dragonfly today.  These are development snap shots and are not guaranteed to be stable, or even work at all.  The weekly builds are released to get feedback and testing of the latest changes.  If you&#39;d like to report issues please go to the <a href="http://www.opera.com/products/dragonfly/feedback/">Opera Dragonfly feedback page</a>. </p>

<p>Weekly snap shots will appear on the URL <a href="https://dragonfly.opera.com/app/weekly">https://dragonfly.opera.com/app/weekly</a> and should automatically update when a new version comes out.  The snapshots can be downloaded at <a href="http://dragonfly.opera.com/app/weekly/zips/">http://dragonfly.opera.com/app/weekly/zips/</a>.  The regular shipped url will update when official releases are updated.</p>

<p>There have been a number of bug fixes since the first alpha.  A list can be found in the <a href="http://dragonfly.opera.com/app/weekly/zips/protocol-3/changelog-Opera-08-05-22-14-41.txt">change logs</a>.  The most notable new features are Command Line completion and the Object Inspector.  If you press the <kbd>tab</kbd> key when using the Command Line, it will auto-complete the first match.  Pressing tab again will cycle through the matches.  If you enter a command that returns a Object, you will be able to click on it and inspect the Object in the Object Inspector.  This is located in a tab next to the Frame Inspector.  Developing this functionality highlighted bugs in recent builds of the Opera Browser, so there are known issues with these features.  Entries in the Object Inspector will not expand for example.</p>

<p>Progress is still on course for a second alpha release in the not too distant future.  A desktop build will also be released soon that will fix the issues with Opera Dragonfly not working in offline mode, due to a bug with persistent cache not working over HTTPS.  We&#39;re looking forward to you trying out this and subsequent weekly builds, and any feedback or bug reports that you send.</p>

<p>In somewhat related news, Opera also announced the launch of the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/">Opera Widgets SDK</a> this week.  Opera Widgets can be debugged using Opera Dragonfly, and the SDK includes a useful <a href="http://dev.opera.com/articles/view/widget-emulator/">Widgets Emulator</a> for emulating how Widgets will look on different types of devices.  Widgets currently work on devices such as the Nintendo Wii and ARCHOS, and upcoming UIQ 3.3 mobile phones.  Widgets are currently Opera only, but we are standardising the spec at the W3C and will change our implementation to match the spec when it is finalised.  We are also standardising the <a href="http://dev.opera.com/articles/view/file-i-o-api-for-widgets/">File I/O</a> API spec at the W3C.  This is a new API we have developed to access the file system, and is very useful for Widgets.</p>
