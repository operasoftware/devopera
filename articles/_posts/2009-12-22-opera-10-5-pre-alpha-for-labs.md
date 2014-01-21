---
title: Opera 10.5 pre-alpha for Labs
authors:
- roberto-mateu
tags:
- opera-10.5
- obsolete
layout: article
---

We have just released Opera 10.5 pre-alpha for Labs. This pre-alpha is based on the Evenes branch and includes Windows, Mac, and UNIX builds (see below for download link).

As you may know, we don’t typically open new versions to user-testing this early in the development cycle. However, we are really excited about what the Desktop team is cooking up and want your feedback.

Many of you have been asking for a glimpse of Carakan, our new ECMAScript/JavaScript engine, and an update to our HTML `<video>` support. With this release you’ll be able to play with them and a few other new technologies that will hopefully be part of our next major release.

Some disclaimers: What you’re downloading today is a feature-incomplete and likely unstable development build. Please handle with care, backup your data before you install and do not run in hydroelectric power plants.

## What’s new: Inside

### Carakan

Carakan is our new JavaScript engine. It’s fast, more than 7x faster in [SunSpider][1] than Opera 10.10 with Futhark on Windows (Mac optimization is not as far along). You can read more gritty details regarding register-based bytecode, automatic object classification and native code generation in the [Opera Core blog][2].

[1]: http://www2.webkit.org/perf/sunspider-0.9/sunspider.html
[2]: http://my.opera.com/core/blog/2009/02/04/carakan

### SunSpider Javascript Benchmark (runs per minute)

<figure>
	<table>
	<tr>
		<td>Carakan</td>
		<td>144.93</td>
	</tr>
	<tr>
		<td>Futhark</td>
		<td>19.63</td>
	</tr>
	</table>
	<figcaption>Higher is better. Performed in Windows 7, Core2Duo 6550 2.33 GHz</figcaption>
</figure>

### `<video>`

This build features a long-awaited update to our support for the HTML5 `<video>` element, allowing native playback and control of video inside the browser. It has been much improved since our [first proof of concept][3] was released in 2007. Check out Philip Jägenstedt’s [(re-)Introducing <video>][4] article for all the details.

[3]: /articles/a-call-for-video-on-the-web-opera-vid/
[4]: http://my.opera.com/core/blog/2009/12/31/re-introducing-video

### Presto 2.5

We are now using Presto 2.5, which contains a huge numbers of improvements. It also includes support for [CSS3 transitions and transforms][5], and more HTML5 features like persistent storage.

[5]: http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/

### Vega

Vega is our [new graphics library][6]. It’s currently software-based and displays everything you see on-screen. Vega can be hardware accelerated, but as you can see from the complex graphics benchmark in Peacekeeper, we don’t seem to need it yet. (Note that Futuremarks’ Peacekeeper test does no include the results of their complex graphics tests in the overall score. We believe this is wrong in 2009 and will simply be silly if not changed in 2010.)

[6]: http://my.opera.com/core/blog/2009/02/04/vega (Opera Core Concerns - Vega - Opera’s vector graphics library)

### Peacekeeper Complex Graphic Benchmarks

<figure>
	<table>
	<tr>
		<td>Opera 10.5 (Vega)</td>
		<td>8513</td>
	</tr>
	<tr>
		<td>Opera 10.10</td>
		<td>2657</td>
	</tr>
	</table>
	<figcaption>Higher is better. Performed in Windows 7, Core2Duo 6550 2.33 GHz</figcaption>
</figure>

## What’s new: Outside

### Platform integration

- On Windows 7/Vista, you will notice a lot of visual changes and use of APIs, which allow the UI to display the Aero Glass effect. For Windows 7, we also added Aero Peek and Jump List support to help you easily access your Speed Dials, Tabs, etc. from the Taskbar.
- For Mac, a complete rewrite in Cocoa brings a Unified Toolbar, native buttons and scrollbars, multi-touch gestures (try 3-Finger Swipe Left/Right or Pinch to zoom) and a bunch of other small details. We also added [Growl][7] notification support.

[7]: http://growl.info/

### “Private tab” and “Private window”

You can open a new Private tab or Private window that forgets everything that happened on it once closed.

### Non-modal dialogs

Dialog boxes (JavaScript alerts, HTTP authentication, etc.) are now non-modal and are displayed as a page overlay. This allows you to switch tabs or windows while the dialog is still displayed. Similarly, the Password Manager dialog is now anchored at the top of the page won’t block any content as it loads a new page.

### Address field and Search field improvements

Both fields have been upgraded in looks and functionality. They can now remember searches, support removing items from history and show results in a better layout.

<figure>
	<a href="/articles/opera-10-5-pre-alpha-for-labs/win7-new-addressbar.jpg"><img src="/articles/opera-10-5-pre-alpha-for-labs/win7-new-addressbar-t.jpg" alt="Windows7 New Addressbar"></a>
	<a href="/articles/opera-10-5-pre-alpha-for-labs/win7-jumplist.jpg"><img src="/articles/opera-10-5-pre-alpha-for-labs/win7-jumplist-t.jpg" alt="Windows7 Jumplist"></a>
	<a href="/articles/opera-10-5-pre-alpha-for-labs/win7-private-tab.jpg"><img src="/articles/opera-10-5-pre-alpha-for-labs/win7-private-tab-t.jpg" alt="Windows7 Private Tab"></a>
	<a href="/articles/opera-10-5-pre-alpha-for-labs/mac-tab-collapsed.jpg"><img src="/articles/opera-10-5-pre-alpha-for-labs/mac-tab-collapsed-t.jpg" alt="Mac Tab Collapsed"></a>
</figure>

## Download

**Update:** Opera 10.50 is now part of normal release cycle. Please visit the [Opera Desktop Team blog][16] to download the latest version.

[16]: http://my.opera.com/desktopteam/blog/

To try it out, you can download the latest Labs build here:

- [Windows MSI][17]
- [Mac OS X (Intel)][18]
- [Unix/Linux][19]

[17]: http://snapshot.opera.com/windows/Opera_1050_3186_en.exe
[18]: http://snapshot.opera.com/mac/Opera_10.50_8174_Intel.dmg
[19]: http://snapshot.opera.com/unix/labs-6177/

Again, please remember that this is an unstable development build. There are known bugs, unimplemented UI elements and surprise crashes.

Some specific known issues:

- High memory usage
- No JIT (slow performance) on old processors without SSE2
- No printing for Mac build

## What’s next

We are very excited with this release, and we hope that with this sneak peek, you are too. From all of us at Opera we wish you a happy holiday and a great new year. We’ll be back soon with more exciting news.

Feel free to join the discussion at the [My Opera community][20] or visit the [Desktop Team Blog][21] for news and to leave a comment.

[20]: http://my.opera.com/community/forums/forum.dml?id=31
[21]: http://my.opera.com/desktopteam/blog/

## Resources

- [Opera 10.5 pre-alpha, What’s new][22] — Opera’s Developer Relations Team blog
- [Carakan Revisited][23] — Opera Core Concerns blog
- [Carakan][24] — Opera Core Concerns blog
- [Carakan F.A.Q.][25] — Opera’s Developer Relations Team blog
- [Vega, Opera’s vector graphics library][26] — Opera Core Concerns

[22]: http://my.opera.com/ODIN/blog/opera-10-5-pre-alpha-build-released-here-is-whats-new
[23]: http://my.opera.com/core/blog/2009/12/22/carakan-revisited
[24]: http://my.opera.com/core/blog/2009/02/04/carakan
[25]: http://my.opera.com/ODIN/blog/carakan-faq
[26]: http://my.opera.com/core/blog/2009/02/04/vega