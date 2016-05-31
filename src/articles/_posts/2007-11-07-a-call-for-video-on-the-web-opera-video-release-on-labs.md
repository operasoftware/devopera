---
title: A Call for Video on the Web — Opera `<video>` Release on Labs
authors:
- odevrel
intro: 'To really make a splash on the Web, video needs an open solution that can easily be integrated into web pages without the need for proprietary plugins. The HTML5 `<video>` element and Ogg Theora can provide this, and Opera is proud to announce an experimental build that supports it. So read this article, and download and play with it today.'
tags:
- video
- html5
- javascript
license: cc-by-nc-sa-2.5
---

## Introduction

Video is one of the hottest things on the Web today, with several solutions available to create video effects and embed it in your web pages (for example Flash and QuickTime,) and much improved hardware available — these days we web users have web-enabled video cameras in our pockets and the bandwidth available to transfer more clips and streams than we can watch.

Something however is still not quite there about web video. The video solutions mentioned above are proprietary closed solutions that rely on plugins to display in a web page — what we need to make video a first-class web citizen is an easy, open solution to integrate video into web pages, and native support for video in browsers.

In short, we need a `<video>` element in HTML, and we must also agree on a baseline video format that will be universally supported, just like the GIF, JPEG and PNG image formats are universally supported for images. It’s important that the video format we choose can be supported by a wide range of devices and that it’s royalty-free (RF). RF is a well-established principle for W3C standards. The Ogg Theora format is a promising candidate, which has been chosen by Wikipedia.

## The good news

The `<video>` element has already been proposed in the [HTML5 working draft][1], and here at Opera, we have created an experimental build of our browser for Windows, Mac and Linux with (amongst other things) support for the `<video>` element/Ogg Theora built in. Even better is that we have made it downloadable for you to play with:

[1]: https://html.spec.whatwg.org/#video

- [Opera 9.52 preview for Linux/UNIX][2]
- [Opera 9.52 preview for Windows][3] (MSI installer)
- [Opera 9.52 preview for Windows][4] (Classic installer)
- [Opera 9.52 preview for Mac][5]

[2]: http://snapshot.opera.com/unix/snapshot_io_video_3d-2069/
[3]: http://snapshot.opera.com/windows/o952s_io_video_3d_10093m.exe
[4]: http://snapshot.opera.com/windows/o952s_io_video_3d_10093.exe
[5]: http://snapshot.opera.com/mac/o952s_io_video_3d_4899.dmg

We have included several examples for you to check out below.

This build of Opera also supports video in SVG, File I/O and the 3d `<canvas>` — these topics deserve their own articles, which we hope to publish soon, although some of the examples below include SVG.

The Opera video build is currently at a very experimental stage, so not widely supported as of yet. But this is a start — We’re inviting you to start playing with it and passing the message on to others about how powerful this is!

## How does it work?

The simplest `<video>` element just uses a `src` attribute to point at the video you want to display, and a `controls` attribute, a boolean that specifies whether the user-agent should provide controls for the video player (present,) or whether it shouldn’t, as that will be handled by the web developer creating the site (absent):

	<video controls src="demo.ogg"></video>

You can expand it slightly to include some text to display if the decoder isn’t available, and an `id` with which to manipulate the video:

	<video controls src="demo.ogg" id="myVideo">Theora decoder not found</video>

From here on in it’s just a matter of using the CSS, SVG and JavaScript that you already know to create working controls and other interface items for your video player — you can even create effects like filters and reflections.

It’s just as easy as Flash, but using an open standard and running right in the browser. Check out the source code of the examples below for more inspiration, and let us know what you come up with!

## Examples

Here are some pages using the video element:

- [native controls][7]
- [scripted controls][8]
- [scripted with opacity][9]
- [Wikipedia-based demo on parrots][10]
- [Wikipedia-based demo on octopus][11]

[7]: http://people.opera.com/howcome/2007/video/controls.html
[8]: http://people.opera.com/howcome/2007/video/simple.html
[9]: http://people.opera.com/howcome/2007/video/opacity.html
[10]: http://people.opera.com/howcome/2007/video/wikipedia/macaw.html
[11]: http://people.opera.com/howcome/2007/video/wikipedia/octopus.html

Here are some pages using the video element in SVG:

- [clip-move][12]
- [video-reflect][13]
- [video-filter][14]

[12]: http://people.opera.com/howcome/2007/video/svg/clip-move.svg
[13]: http://people.opera.com/howcome/2007/video/svg/video-reflect.svg
[14]: http://people.opera.com/howcome/2007/video/svg/video-filter.svg
