---
title: Accessible HTML5 Video with JavaScripted captions
authors:
- bruce-lawson
tags:
- captions
- html5
- multimedia
- open-web
- opera-10
- accessibility
- video
layout: article
---

NOTE, September 22nd 2011: There is a new and shiny way to add subtitles to HTML5 video using the new [`<track>`][1] element, but this isn’t yet implemented. The hacky technique discussed below works now, but it isn’t the "right" way to do it.

[1]: http://developers.whatwg.org/the-iframe-element.html#the-track-element

## Accessibility of video

It’s great that HTML5 allows us to embed video into web pages that can then be displayed directly by browsers, without having to rely on third-party plugins. (For more information on the true power of HTML5 video, see [Introduction to HTML5 video][2].)

[2]: http://dev.opera.com/articles/introduction-html5-video/

The elephant in the corner regarding all video — whether it be HTML5 or proprietary — is accessibility. What are conscientious developers to do to provide textual alternatives for those who can’t access the contents of the video? In HTML5 there isn’t an `alt` attribute on the `video` element as there is on `img`, but you can add "fallback content" between the tags like this:

	<video>
		Your browser doesn’t support the open Ogg Theora codec.
		Please <a href="video.ogg">download the video</a>
		and view offline.
	</video>

However, the [spec says][3]:

[3]: http://dev.w3.org/html5/spec/video.html#video

> …this content is not intended to address accessibility concerns. To make video content accessible to the blind, deaf, and those with other physical or cognitive disabilities, authors are expected to provide alternative media streams and/or to embed accessibility aids (such as caption or subtitle tracks) into their media streams.

In theory, video files should carry their own captions — not burned onto the images, but in a textual format in a separate file, packaged in the wrapper along with the actual video. That way, the author of the content, who knows it best, writes it once and anyone embedding the video in their page gets the captions/transcript for free.

However, in practice, nobody knows how to do that and no browser knows how to get at that data or present it to a user. So we need some kind of hack that fills the gap. Here’s a proof of concept I came up with that stores a transcript as plain text on the page, wrapped in a `<div id="transcript">` element. If a user comes to the page with JavaScript turned off, they simply see a video with browser controls and a heading "transcript" following it, with the transcription.

For those with JavaScript enabled, I want to show individual lines of the transcript overlaid on top of the video as captions. They will still be plain text, so assistive technologies can access the captions, as well as being viewable on screen, and these will be synchronised with the video.

Here’s a silly sample video that shows the technique: [Example captioned video — How to Leverage a Synergy][4]. (You need to be using an [Ogg video-enabled browser][5].)

[4]: http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html
[5]: http://www.opera.com/browser/next/

This proof-of-concept doesn’t work in Safari. That’s because Safari doesn’t support the open Ogg codec that Opera, Firefox and Chrome support. If you wish to encode the video for Safari too, and use multiple [`source` elements][6] (one for Ogg, one for MP4), the demo will work. Internet Explorer currently does not support the `video` element.

[6]: http://dev.w3.org/html5/spec/video.html#the-source-element

If you view source, you’ll see that the transcript is marked up semantically into paragraphs, but each blob of content to be overlaid on the video is wrapped in a `span` because the division of what is displayed when is based not on meaning but on timing and presentational concerns (such as not filling the screen with text).

In order for the script to know when to display each span, I’ve timestamped each one. Rather than add these inside the text, I’m using a new feature of HTML5 that allows any element to have [custom `data-` attributes][7] to pass data to scripts. You can choose any name you like, but they must start with "data-" For this example, I’m calling them `data-begin` and `data-end`, as those match the names in the [ W3C Timed Text specification][8] and [SVG/SMIL animation specification][9]s.

[7]: http://dev.w3.org/html5/spec/dom.html#embedding-custom-non-visible-data
[8]: http://www.w3.org/TR/2009/CR-ttaf1-dfxp-20090924/#timing-attribute-vocabulary
[9]: http://www.w3.org/TR/SVG/animate.html#TimingAttributes

I set the `data-begin` attribute to the time offset (from the start of the video) that I want the `span` to appear. The `data-end` attribute is set to the time that the caption should disappear. So

	<span data-begin=1 data-end=6>
		Hi, my name’s Dr Archimedes Einstein…
	</span>

causes the caption to appear 1 second from the beginning of the video, and disappear 6 seconds from the beginning of the video (therefore, in view for 5 seconds in total).

The script then hides the `div` that houses the plain transcript (I’m using JavaScript to write a CSS rule to set it to `display:none`). It grabs each `span` (but not the heading) from the hidden `div` thus:

	var nodes = document.querySelectorAll('#transcript span');

We need to position these on top of the video at the correct time. Overlaying the text is easy; I simply absolutely position another `div` (with an `id` of captions) over the top of the video. To increase the chance of legibility with white text on a light background, I will also add some text shadow using CSS:

	text-shadow: black 1px 1px 3px;

To determine when to overlay each `span`, the script uses the `ontimeupdate` event (which the video fires every 250ms or so in Opera) to interrogate the video API and find out how long it has been playing:

	var v = document.querySelector('video');
	var now = v.currentTime;

and then loops around the `span` elements in the transcript until it finds one with a `data-begin` and `data-end` time that encompasses the current time.

In this example, I’m using CSS-generated content to insert the timestamps into the non-JavaScript transcript:

	#transcript [data-begin]:before {
		content: ' [' attr(data-begin) 's-'
		attr(data-end)'s] ';
		font-size:80%;
		}

and formatting it using CSS tables. Both of these are entirely optional.

As I said above, this is a hack. It requires lots of developer work (although to make any kind of captioning file you’ll need to transcribe the audio and note the timings, which is in itself a lot of work).

A couple of problems remain with the script. Firstly, if I mark up abbreviations in the transcript with `abbr`, or foreign languages with `span lang=`, it won’t make it through to the synchronised captions (although it’s unlikely to matter). I haven’t tried including any WAI-ARIA information such as `aria-describedby` (and would welcome feedback on how this should work with ARIA).

Also, in production-ready code the user should be given the option of seeing the transcript rather than captions, even if they are running JavaScript — perhaps they’re using a mobile phone and don’t want to download the whole video, but want to see the contents as plain text.

The code is released with a creative commons license, so please feel free to amend it--and please leave a link or [tweet me][10] if you do.

[10]: https://twitter.com/brucel

Also see Daniel Davis’ [multilingual example][11] that allows you to choose between English and Japanese, even while the video is running.

[11]: http://people.opera.com/brucel/demo/video/multilingual-synergy.html

## Read more

- [Everything you need to know about HTML5 video and audio][12] (and it really is _everything_!)
- [`video` specification][13]
- [How `video` is implemented in Opera][14]

[12]: http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2
[13]: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#video
[14]: http://my.opera.com/core/blog/2009/12/31/re-introducing-video

## Acknowledgments

Thanks to [Philip Jagenstedt][15] for coding the JavaScript in the demo, David Storey for invaluable suggestions, and my daughter Marina for standing on her bed to film the video while I commandeered her homework desk.

[15]: https://twitter.com/foolip