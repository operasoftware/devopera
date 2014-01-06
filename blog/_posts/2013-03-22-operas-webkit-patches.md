---
title: "Opera’s WebKit patches"
author:
- bruce-lawson
tags:
- webkit
- open-source
- css
- opera
- multi-column
- media-queries
intro: "About five weeks ago, we announced that Opera's products would transition to using WebKit. We said “Opera will contribute to the WebKit and Chromium projects. Our work on web standards to advance the web continues.”"
layout: post
---

About five weeks ago, we [announced][1] that Opera's products would transition to using WebKit. We said "Opera will contribute to the WebKit and Chromium projects. Our work on web standards to advance the web continues."

[1]: http://my.opera.com/ODIN/blog/300-million-users-and-move-to-webkit

Obviously, replacing a rendering engine is a huge engineering change, so we've been working flat out, hooking up the new rendering engine, rewriting the UI, integrating new features and testing everything so that you can actually see products. (Have you tried [Opera 14 beta for Android 2.3][2] and above yet?)

[2]: http://my.opera.com/ODIN/blog/2013/03/05/opera-14-beta-for-android-is-out

But we haven't forgotten our commitment to contributing back. Here are the patches we've submitted to enhance any WebKit-based browser so that they better support CSS:

- [Bug 15553 - WebKit ignores column-rules wider than column-gap][3] - This patches a bug reported in 2007, and brings WebKit's multi-column support closer to the level of Presto that's in shipping versions of Opera
- [Bug 112986 - Incorrect error handling for Media Queries][4] - WebKit fails to do correct error recovery for media queries a lot of cases. Not able to balance parentheses and brackets, not able to see valid media queries after an invalid one, and does not return 'not all' for invalid queries
- [Bug 112549 - monochrome media feature does not accept integer values][5] - The monochrome media feature should accept non-negative integers as specified in the Media Queries spec.

[3]: https://bugs.webkit.org/show_bug.cgi?id=15553
[4]: https://bugs.webkit.org/show_bug.cgi?id=112986
[5]: https://bugs.webkit.org/show_bug.cgi?id=112549

There are also a number of house-keeping patches submitted by Morten to tidy up some WebKit code: [Bug 112442][6], [110123][7], and [110121][8].

[6]: https://bugs.webkit.org/show_bug.cgi?id=112442
[7]: https://bugs.webkit.org/show_bug.cgi?id=110123
[8]: https://bugs.webkit.org/show_bug.cgi?id=110121

Morten's currently looking at [implementing CSS `object-fit`][9] and [further CSS multi-column improvements][10]. So don't disturb him until those patches land!

[9]: https://bugs.webkit.org/show_bug.cgi?id=52040
[10]: https://bugs.webkit.org/show_bug.cgi?id=103597

As products start to ship, we'll bring you more news of enhancements we're offering back.