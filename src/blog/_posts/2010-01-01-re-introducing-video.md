---
title: (Re-)Introducing `<video>`
authors:
- philip-jagenstedt
tags:
- html5
- opera
- video
- xiph
- gstreamer
- vorbis
- theora
- coreblog
license: cc-by-3.0
---

Today the desktop team released a [new years pre-alpha of Opera 10.50](http://my.opera.com/desktopteam/blog/happy-new-year) which includes the first public preview of our new HTML5 `<video>` implementation. It was Opera that first [proposed](http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html) `<video>` and made the first [proof-of-concept build](http://people.opera.com/howcome/2007/video/) way back in 2007. In this post I will talk about what we've done since then, the decisions we've made and where we hope to go next.

### Codecs

From the very beginning, one of the most important questions has been which audio and video formats should be used with HTML5. The issue has been debated heavily in the web standards community, but no consensus has been reached yet. We believe that the web platform must be built on open standards and will therefore continue to support the Ogg formats: the [Vorbis](http://www.vorbis.com/) audio codec and the [Theora](http://theora.org/) video codec. These, in addition to plain WAVE PCM audio, are our "core codecs" which we will support on all desktop platforms.

### Features

While the core codec support remains the same, almost everything else has changed. The [specification](https://html.spec.whatwg.org/multipage/video.html) has evolved a lot since `<video>` was first added, and we try to follow the spec to the letter. This is a non-exhaustive list of what we consider more or less done:

* Native controls (the `controls` attribute)
* Scripted controls (e.g. using `play()`, `.currentTime` and `ontimeupdate`)
* Poster image (the `poster` attribute)
* Painting `<video>` frames on `<canvas>`
* Selecting source depending on codec and environment (e.g. `<source src="video-720p.ogv" type="video/ogg" media="(min-device-height: 720px)">`)
* Scripted codec detection (e.g. `canPlayType('video/ogg; codecs=vorbis,theora')`)

<figure block="figure" id="figure-1">
	<img elem="media" src="{{ page.id }}/html5-video-spec-length.png" alt="HTML5 video section then and now (rotated 90°; scale 1:73)">
	<figcaption elem="caption" markdown="span">HTML5 `<video>` section then and now (rotated 90°; scale 1:73)</figcaption>
</figure>

As this is a pre-alpha, there are also some parts that are not finished. Most importantly, we don't support seeking at all yet. As a side effect we don't have the duration of files until we have played through to the end, so the seekbar isn't very useful right now. This is at the top of our list of things to fix before a final release. We are also working on improving bandwidth management so that we will be able to honor (the absence of) the `autobuffer` attribute.

### Implementation

In our original `<video>` demo, we were using the libogg, libvorbis and libtheora libraries. For this release those libraries are still included, but we have adopted the [GStreamer](http://gstreamer.freedesktop.org/) media framework as an extra layer between the browser core and the raw decoding. Among other things, this allows processing to take place in a separate thread, which has improved responsiveness and audio quality.

For platforms where GStreamer is natively available, we are simply using the system-installed version. Thus, if you are using Linux or FreeBSD, make sure to install at least the GStreamer "base" and "good" plugins, otherwise `<video>` won't work at all. (**Update:** on Debian/Ubuntu the package names are gstreamer0.10-plugins-base and gstreamer0.10-plugins-good.) Having done this, Opera will be able to play anything that GStreamer can handle, which fortunately includes our core codecs. We also try to detect a number of GStreamer plugins so that we can give truthful answers to scripts that ask e.g. `canPlayType('audio/flac')` or `canPlayType('video/x-msvideo')`. We hope you have fun playing with this, but stick to Ogg for anything serious that should work cross-platform and cross-browser.

On Windows we have made a minimal GStreamer configuration which keeps only the features necessary to decode the above mentioned core codecs. As required by the GStreamer license (LGPL), our [modified source code](http://sourcecode.opera.com/gstreamer/) is available. Unfortunately we don't have a Mac version of GStreamer ready for today's release, so `<video>` is not available on Mac just yet.

Many thanks to the developers of the GStreamer and Xiph projects, for excellent software and the occasional bit of advice on IRC.

<figure block="figure" id="figure-2">
	<img elem="media" src="{{ page.id }}/video-controls.png" alt="Native controls in Opera 10.50 pre-alpha">
	<figcaption elem="caption">Native controls in Opera 10.50 pre-alpha</figcaption>
</figure>

### The future

In the coming year, we hope that adoption of `<video>` continues and that we will see exciting new applications made possible by having audio and video as integral parts of the web platform. We will work hard to help realize this potential both by improving our own implementation and by contributing to the development of HTML and other specifications. A few things we think are important right now:

* Fullscreen video playback is a must-have feature.
* Subtitles/captions (static as well as scripted).
* [Media Fragment URIs](http://www.w3.org/TR/media-frags/) will enable users to link to a specific point in time of a video and more.
* More CSS to make `<video>` and the whole web even more awesome.
* Let us not forget SVG's own `<audio>` and `<video>` elements.
* Security, performance and stability (this is always important).

(No promises on when any specific feature will be done.)

### Demos

If you have read this far, you deserve to see some demos!

* [Wikipedia's article on Gulliver's Travels](http://en.wikipedia.org/w/index.php?title=Gulliver%27s_Travels_(film)&direction=next&oldid=329469376#History) includes an excerpt from the film
* [Video and Canvas performance demo](http://people.freedesktop.org/~company/stuff/video-demo.html)
* [9elements HTML5 Canvas and Audio Experiment](http://9elements.com/io/projects/html5/canvas/) (see also the [blog post](http://9elements.com/io/?p=153))
* [YouTube HTML5 demo](https://www.youtube.com/html5) (uses MPEG-4 - only works on Linux/FreeBSD with the appropriate codecs installed)
* [TinyVid - an experimental Ogg video uploading site](http://tinyvid.tv/)
* [Metavid - Open Video Archive of the US Congress](http://metavid.org/)
* [“Video For Everybody” Test Page](http://camendesign.com/code/files/video_for_everybody/test.html)
* [HTML5and Audio() Support Tester](http://www.happyworm.com/jquery/jplayer/HTML5.Audio.Support/)
* [Opera's original call for video on the web](https://dev.opera.com/articles/view/a-call-for-video-on-the-web-opera-vid/) (for the nostalgic)

With this I wish everyone a happy new year, may there be an abundance of `<video>` for all!
