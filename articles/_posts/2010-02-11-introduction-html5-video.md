---
title: Introduction to HTML5 Video
authors:
- patrick-lauke
- bruce-lawson
intro: 'This article gives you an introduction to `<video>` and some of its associated APIs. We look at why native video support in browsers is important, give an overview of the element’s markup, and outline the most important ways in which video can be controlled via JavaScript.'
tags:
- accessibility
- canvas
- css
- html5
- multimedia
- open-web
- opera-10
- video
cover: jpg
license: cc-by-nc-sa-3.0
---

Update history:

- 1 July 2010 — replaced download links to our experiment.webm-enabled builds with links to Opera 10.60 (final).
- 14 May 2010 — some minor changes made; information on codecs added to mention the VP8 codec Google have made available and the experimental [VP8-supporting Opera Labs build][1].
- 31 July 2012 — a late update that merges the original article with an extended version that was written subsequently for an external magazine. This update includes a more in-depth scripting section, a new section that shows how to swap video sources, and replaces the outdated information on the `autobuffer` attribute with `preload`.
- 14 January 2012 — amended to focus on webM and H.264, with only a side-note on Ogg Theora.

[1]: http://labs.opera.com/news/2010/05/19/

## Introduction

A long time ago, in a galaxy that feels a very long way away, multimedia on the Web was limited to tinkling MIDI tunes and animated GIFs. As bandwidth got faster and compression technologies improved, MP3 music supplanted MIDI and real video began to gain ground. All sorts of proprietary players battled it out — Real Player, Windows Media Player, etc. — until one emerged as the victor in 2005: Adobe Flash. This was largely because of the ubiquity of its plugin and the fact that it was the delivery mechanism of choice for YouTube; Flash has become the de-facto standard for delivering video on the web.

One of the most exciting new features of HTML5 is the inclusion of the `<video>` element, which allows developers to include video directly in their pages without the need for any plugin-based solution.

This article gives you an introduction to `<video>` and some of its associated APIs. We look at why native video support in browsers is important, give an overview of the element’s markup, and outline the most important ways in which video can be controlled via JavaScript.

- [Why do we need a `<video>` element?](#why)
- [Anatomy of the `<video>` element](#anatomy)
- [Codecs — the fly in the ointment](#codecs)
- [No longer a second-class citizen on the Web](#first-class)
	- [Keyboard accessibility out-of-the-box](#keyboard-access)
	- [`<video>` plays well with the rest of the page](#playwell)
		- [Styling `<video>` with CSS](#css)
		- [Combining `<video>` and `<canvas>`](#canvas)
- [Scripting your own controls](#scripting)
- [Swapping media sources](#swapping)
- [Read more](#more)

## Why do we need a `<video>` element?

Until now, if you wanted to include video in a web page, you had to wrangle some fairly cryptic markup. Here’s an example, taken directly from YouTube:

	<object width="425" height="344">
		<param name="movie" value="https://www.youtube.com/v/9sEI1AUFJKw&hl=en_GB&fs=1&"></param>
		<param name="allowFullScreen" value="true"></param>
		<param name="allowscriptaccess" value="always"></param>
		<embed src="https://www.youtube.com/v/9sEI1AUFJKw&hl=en_GB&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed>
	</object>

First of all, we have an `<object>` element — a generic container for foreign objects — to include the Flash movie in. To work around browser inconsistencies, we also include an `<embed>` element as fallback content and duplicate most of the `<object>`’s parameters. The resulting code is ungainly and not very readable, and it has other problems — the plugin content does not play very nicely with the other technologies on the page, and it has inherent accessibility problems (more on those later).

## Anatomy of the `<video>` element

Compared to the convoluted construct necessary to include Flash in your page, the basic markup necessary for `<video>` in HTML5 is refreshingly straightforward:

	<video src=myVideo.webm
		width=320
		height=240
		controls
		poster=image.jpg>
	</video>

Note that in our example we’re taking advantage of HTML5’s more relaxed syntax — you don’t have to put quotes around attribute values, and you can use simple boolean attributes such as `autoplay` as single words. If you prefer, you can of course also stick to the XHTML syntax `controls="controls"` and quote all your attribute values. It obviously makes sense to choose the coding style that suits you best and stick with it, for consistency and maintainability. In XHTML5, you **must** use XHTML syntax (and you must also serve your pages as XML with the correct MIME type, which currently won’t work in Internet Explorer).

The `<video>` element attributes we’ve used in our sample code are quite self-explanatory:

- `src` The source of the element, providing the URL of your video file.
- `width` and `height` As with `img` elements, you can explicitly set the dimensions of your video — otherwise, the element will simply default to the intrinsic width and height of the video file itself. If you specify one but not the other, the browser will adjust the size of the unspecified dimension to preserve the video’s aspect ratio.
- `controls` If this boolean attribute is present, the browser will display its native video controls for playback and volume. If you omit this, the user will only see the first frame (or the specified `poster` image) and won’t be able to play the video, unless you trigger the movie from somewhere in your JavaScript or create your own custom controls, as we’ll demonstrate later in this article.
- `poster` The `poster` attribute points to an image that the browser will use while the video is downloading, or until the user tells the video to play. If this is not included, the first frame of the video will be used instead.

For Web browsers that do not currently support `<video>`, it’s possible to include alternative content — at the very least, this could include some text and a link to the video file itself, so that users can download it and play it in a media player application:

	<video src=myVideo.webm
		width=320
		height=240
		controls
		poster=image.jpg>
		Download my awesome video in <a href=myVideo.webm>WebM</a> or <a href=myVideo.mp4>MP4</a> format
	</video>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/opera-standard-video-controls.jpg" alt="Default video element with standard Opera controls">
	<figcaption elem="caption" markdown="span">A `<video>` element with native browser controls in Opera</figcaption>
</figure>

There are more attributes we’re not covering in our examples. They are:

- `autoplay` This instructs the browser to start playback of the video automatically. Use this attribute with care, as this can be highly annoying, if not downright problematic, particularly for users with assistive technologies such as screen readers or those on low-bandwidth connections (such as on a mobile device).
- `preload` This attribute suggests to the browser whether or not it should try to preload the video. It can take the values of `none` (the browser shouldn’t download anything until the playback has started), `metadata` (only grab enough of the video file to work out the metadata, such as intrinsic dimensions and duration), and `auto` (whatever the browser does by default - for instance, on a mobile device, it’s likely that the browser will be set not to download anything unless explicitly needed, mirroring the `none` behaviour, while a desktop browser may start to at least grab the `metadata`).
- `loop` The `loop` attribute is another boolean attribute. As you would imagine, it loops the video.

## Codecs — the fly in the ointment

Unfortunately, when it comes to the types of video that browsers can handle, the landscape is currently fragmented. Although the HTML5 specification clearly defines the new `<video>` element and its associated APIs, it does not mandate any particular video codec that browsers should support as a baseline. Opera and Mozilla Firefox chose to include native support for [webM][14] – a high-quality, open video format for the web that’s free for use and distribution without licensing and royalty fees. Safari and Internet Explorer 9, on the other hand, opted for the [H.264 codec][15] – a royalty-encumbered format licensed by an organisation called MPEG-LA. Google Chrome included supports for both of these formats. IE will support.webm if it is separately installed on the user’s system.

[14]: http://www.webmproject.org/
[15]: http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC

(Chrome, Opera and Firefox also include support for a royalty-free codec called Ogg Theora, but this is superseded by.webm, so we don’t discuss it further.)

What this means at the moment, though, is that we need to encode our videos twice if we want it to work in all current browsers: once as webM and once as H.264. Fortunately, the new `<video>` element allows us to specifiy different versions of our movies: if we add alternative `<source>` elements with appropriate `type` attributes to the video, the browser will choose and download the format that it can display. Note that in this case we do not provide a `src` attribute in the `<video>` element itself:

	<video width=320 height=240 controls poster=image.jpg>
		<source src=myVideo.webm type=video.webm>
		<source src=myVideo.mp4 type=video/mp4>
		Download my awesome video in <a href=myVideo.webm>WebM</a> or <a href=myVideo.mp4>MP4</a> format
	</video>

And interestingly, after we do this double-encoding step we’re also halfway to supporting older browsers: Flash can load and play MP4-formatted movie files, so these can be used in combination as a fallback for Internet Explorer, for instance . See Kroc Camen’s nifty implementation of this technique in his article [Video for Everybody!][16], in which he squeezes the `object` and `embed` of old into the alternative content part of the `<video>` element.

[16]: http://camendesign.com/code/video_for_everybody

Of course, if the browsers that don’t support the `<video>` element fall back to using Quicktime or Flash plugins, we’re really back where we started, and we won’t be able to take advantage of any of the new features and improvements we’re about to outline below. _What’s the point then?_, you may ask. We would say that this is a transitional solution, until native video support hits all major browsers. It’s a case of graceful degradation – users may receive a slightly cut-down version of your page, but at least they’re able to see your movies.

## No longer a second-class citizen on the Web

So, we’ve seen that the markup for the new HTML5 `<video>` element is an order of magnitude more readable and understandable compared to what we currently have to do in order to get Flash movies into our markup. But regardless of how horrid the old way of coding is, in most cases it works, doesn’t it? So why would we want to move away from this approach of handing over the display of video to a third-party plugin such as Flash?

The major advantage of the HTML5 `<video>` element is that finally video is a fully-fledged citizen on the Web, rather than being shunted off to the hinterland of `object` or the non-validating `embed` element (although that now validates in HTML5). Let’s expand on some of the advantages.

### Keyboard accessibility out-of-the-box

One of the great unresolved problems of using Flash is keyboard accessibility. With the exception of Internet Explorer on Windows, there is usually no way for a keyboard user to Tab or otherwise move their focus into a Flash movie. And even if these users somehow manage to get their focus into the movie (using additional assistive technologies), there is no easy way for them to Tab back out of it (unless additional ActionScript code is added to the movie to programmatically set the browser focus back out of the plugin and onto the page). In contrast, as the browser is directly responsible for the `<video>` element, it can handle the movie’s controls as if they were regular buttons on a web page and include them in its normal tabbing order.

Keyboard support for native video has not currently been implemented across all browsers...however, it works fine in Opera out of the box.

### `<video>` plays well with the rest of the page

In simple terms, whenever you include a plugin in your pages, you’re reserving a certain drawing area that the browser delegates to the plugin. As far as the browser is concerned, the plugin’s area remains a black box — the browser does not process or interpret anything that is happening there.

Normally, this is not a problem, but issues can arise when your layout overlaps the plugin’s drawing area. Imagine for instance a site that contains a Flash movie, but also has JavaScript or CSS-based dropdown menus that need to unfold over the movie. By default, the plugin’s drawing area sits on top of the webpage, meaning that these menus will strangely appear behind the movie. A similar unsightly effect happens in cases where your page uses lightboxes — any Flash movie would still appear to float on top of the dimmed page overlay. This is why most ready-made lightbox scripts tend to hack around the issue by first removing any plugin objects from the page before triggering the overlay itself, and reintroducing them once the overlay is closed.

In the specific case of Flash plugins, developers can fix this display issue by adding the `wmode="opaque"` attribute to their `<object>` element and the equivalent `<param name="wmode" value="opaque">` to their `<embed>` element. However, this also causes the plugin to become completely inaccessible to users with screen readers, and is therefore best avoided.

Problems and quirks can also arise if your page undergoes dynamic layout changes. If the dimensions of the plugin’s drawing area are resized, this can sometimes have unforeseen effects — a movie playing in the plugin may not resize, but instead simply be cropped or display extra white space.

With the native `<video>` element, it’s the browser itself that is taking care of the rendering. As such, `<video>` behaves no differently from any other element in your page layout. It can be positioned, floated, overlapped or dynamically resized, with no additional hacks required. It is even possible to achieve interesting effects such as semi-transparent video simply by setting the opacity for the element via CSS.

#### Styling video with CSS

Now video is part of the Open Web set of technologies, we can use CSS to style the element reliably. As a simple demonstration of what can now be achieved, we’ll apply [CSS transitions to a video][17] to change its dimensions once we `:hover` or `:focus` on it. (Read our [CSS3 transitions and 2D transforms tutorial][18].)

[17]: {{ page.id }}/transitions/
[18]: https://dev.opera.com/articles/css3-transitions-and-2d-transforms/

#### Combining video and canvas

As the browser is taking care of laying out and rendering video, we can easily overlap and combine other elements on top of it. In this example, a [`<canvas>` is superimposed over the video][19]. (Warning: this video has potentially upsetting images of a handsome Opera employee and his children being menaced by a gigantic mouse pointer.)

[19]: {{ page.id }}/video-canvas/

Note that the `<canvas>` does not completely cover the video. We’ve made the canvas 40 pixels shorter than the video height, so that the area of the video where the controls appear is not covered. This ensures that, if the user mouses over the bottom of the video, there is enough of the `<video>` element poking out behind the canvas to receive the `hover` event and cause it to expose the controls. Keyboard access to the controls should work regardless of covering elements, however keyboard support currently varies across browsers.

## Scripting your own controls

`<video>` and `<audio>` (which we will cover in a future article) are instances of the new HTML5 DOM [media elements][20], which exposes a powerful API giving developers control over movie playback through a whole host of new JavaScript methods and properties. Let’s have a look at some of the most relevant ones to build ourselves a simple custom controller:

[20]: http://www.w3.org/TR/html5/the-iframe-element.html#media-element

- `play()` and `pause()` Quite obviously, these methods start and pause video playback. `play()` will always start the video from the current playback position. When a movie is first loaded, this will be the first frame of the movie. Note that there is no `stop()` method — if you want to stop playback and rewind to the start of the movie, you will have to `pause()` and programmatically change the current playback position yourself.
- `volume` This attribute can be used to get or set the volume of the video’s audio track, taking a `float` value ranging from 0.0 (silent) to 1.0 (loudest).
- `muted` Regardless of `volume`, a video can be muted.
- `currentTime` When read, this attribute returns the current playback position in seconds, again expressed as a `float`. Setting this attribute will — if possible — move the playback position to the specified time index.

All we need is a reference to our `<video>` object and we can control it directly via JavaScript:

	<video width=320 height=240 controls poster=image.jpg id=videoPlayer>
		…
	</video>

	<script>
		var v = document.getElementById('videoPlayer');
		v.volume = 0.5;
		v.play();
	</script>

In addition, media elements also fire a range of events as part of their processing model, which we can listen for and hook into. For our example, we will only look at a few of these:

- `loadeddata` The browser has loaded enough video data to begin playback at the current position. `play` and `pause` Playback was started or paused. If we’re controlling the video from JavaScript, we want to listen out for these to ensure that calling the `play()` and `pause()` methods actually return succesfully.
- `timeupdate` The current playback position has changed because the movie is playing, a script changed it programmatically, or the user has decided to jump to a different point in the video.
- `ended` We’ve reached the end of the movie, and the `<video>` element is not set to `loop` or play backwards (not covered in this article).

Here’s a simple example of hooking into the `timeupdate` event to display the `currentTime` (in seconds, remember) of the video:

	<video width=320 height=240 controls poster=image.jpg id=videoPlayer>
		…
	</video>
	<p> Current time is: <span id=timeDisplay></span></p>

	<script>
		var v = document.getElementById('videoPlayer');
		v.addEventListener('timeupdate',updateTimeDisplay,true);

		function updateTimeDisplay(e) {
			document.getElementById('timeDisplay').innerHTML = e.target.currentTime;
		}
	</script>

Now we have all the basic building blocks needed to create a simple controller. We’ll keep things very spartan to demonstrate the new API methods and events. As this is quite a small example, I’m also keeping the JavaScript inline and simply adding a few anonymous functions – in a production environment, this would obviously look a lot more complex.

	<video src=myVideo.webm width=320 height=240 controls id=videoPlayer>
		…
	</video>

	<div>
		<button id=buttonPlay>Play</button>
		<button id=buttonPause>Pause</button>
		Current time is: <span id="timeDisplay"></span>
	</div>

	<script>
		/* use global variable for ease */
		var v = document.getElementById('videoPlayer');
		/* play button */
		document.getElementById('buttonPlay').addEventListener('click',function(e){ v.play(); },true);
		/* pause button */
		document.getElementById('buttonPause').addEventListener('click',function(e){ v.pause(); },true);
		/* current time display (rounded to nearest second) */
		v.addEventListener('timeupdate',function(e){ document.getElementById('timeDisplay').innerHTML = Math.floor(e.target.currentTime); },true);
	</script>

[Example 1: basic video controls with JavaScript][21].

[21]: {{ page.id }}/basic-controls/

This certainly won’t win any design awards, and the page doesn’t really degrade gracefully…if a user happens to come along without JavaScript enabled, they’ll see a bunch of `<button>`s that don’t do anything. However, all it now takes is a bit of CSS and JavaScript finessing (first testing for actual video support in the browser, generating the controls themselves programmatically, styling everything up to look a lot more refined). For a – still fairly straightforward – example of what can be achieved, have a look at this example [Example 2: fancy video controls with JavaScript][22].

[22]: {{ page.id }}/fancy-controls/

<figure block="figure">
	<img elem="media" src="{{ page.id }}/fancy-javascript-controls.jpg" alt="Custom video controls">
	<figcaption elem="caption" markdown="span">Custom `<video>` controls, using nothing more than HTML, CSS and JavaScript</figcaption>
</figure>

The JavaScript has become a lot more verbose, and would benefit from a bit of a clean-up and refactoring but it hopefully gives a glimpse of the new powerful possibilities that HTML5 video opens up: with just a bit of web standards knowledge, it’s now easy for web developers to create custom video controls that perfectly complement their site designs, without the need to create bespoke Flash video players.

## Swapping media sources

Remember all those classic scripts we used to use to dynamically swap out images when a user hovered a mouse over them, or to create simple slideshow galleries? Changing images via JavaScript, at its core, simply required you to modify the `src` attribute of your `<img>` element, and the browser would then load and display the new image. Well, guess what? With the new native media elements in HTML5, the process is similarly easy to achieve for videos as well.

Let’s start with the simple case: a `<video>` with a single `src` attribute. This attribute can be modified programmatically to point to a different video file, but to get the browser to actually swap out the video, we need to take an additional step and invoke a new method:

- `load()` Resets the `<video>` element and starts selecting and loading a new media resource from scratch

Here’s an example with some hardcoded filenames and quite rough scripting (which also uses custom data attributes, another new feature of HTML5, to associate these filenames with the individual `<button>` elements and make our scripts a little easier). At first, there’s no video present – or rather, the `<video>` element is there, but is lacking an actual `src` attribute. Pressing any of the buttons will load the respective video into the player.

	<video width=320 height=240 controls id=videoPlayer></video>

	<button data-file=video1.webm>Video 1</button>
	<button data-file=video2.webm>Video 2</button>
	<button data-file=video3.webm>Video 3</button>

	<script>
		/* use global variable for ease */
		var v = document.getElementById('videoPlayer');
		/* grab all buttons and attach click events */
		var b = document.getElementsByTagName('button');
		for(i = 0; i<b.length; i++) {
			b[i].addEventListener('click',swapVideo,true);
		}

		function swapVideo(e) {
			/* change the video src attribute based on the data-file attribute of the pressed button */
			v.src = e.target.getAttribute('data-file');
			v.load();
		}
	</script>

As we’ve seen previously, though, there’s no single video container format and codec that will be understood equally by all browsers. To make native video work in Chrome, Firefox, Opera _and_ Safari, we’ve seen that we need to use a series of `<source>` elements, offering the browser at least a choice between.webm and MP4. So, the naive – but still quite workable – approach here would be to not just swap out `src`, but rather to generate these separate `<source>`s programmatically. For simplicity, we’ll assume that both the webM and MP4 versions of each video are in the same location and have the exact same filename, with just the file extension (`.webm` and `.mp4`) being different. We’ll also disregard any fallback content that we should really provide inside the `<video>` as well.

	<video width=320 height=240 controls id=videoPlayer></video>

	<button data-file=video1>Video 1</button>
	<button data-file=video2>Video 2</button>
	<button data-file=video3>Video 3</button>

	<script>
		/* use global variable for ease */
		var v = document.getElementById('videoPlayer');
		/* grab all buttons and attach click events */
		var b = document.getElementsByTagName('button');
		for(i = 0; i<b.length; i++) {
			b[i].addEventListener('click',swapVideo,true);
		}

		function swapVideo(e) {
			/* insert two source elements inside the video — one for WebM, one for MP4 */
			v.innerHTML = '<source src='+e.target.getAttribute('data-file')+'.webm type=video.webm>';
			v.innerHTML += '<source src='+e.target.getAttribute('data-file')+'.mp4 type=video/mp4>';
			v.load();
		}
	</script>

Although this works just fine, I’d say that we’re missing a trick here. When writing static HTML, we include the separate `<source>` elements in there to give the browser a set of options to choose from, based on its internal algorithms and its built-in understanding of which types of files it can natively play back. But as we’re already working in JavaScript in this case, we can tap into that same internal logic to let our script work out what the browser supports, and then only update the `<video>` with the most suitable format/codec.

- `canPlayType(type)` This method returns either an empty string (a negative response), `maybe` or `probably`, to indicate how confident the browser is that it can play a file of that particular `type`

Looking past the slightly strange return values of this method, we can see how, with just a small modification to our previous code, we go back to just using a single `src` attribute, which we populate with the type of file that is likely to work the best in the current browser.

	<video width=320 height=240 controls id=videoPlayer></video>

	<button data-file=video1>Video 1</button>
	<button data-file=video2>Video 2</button>
	<button data-file=video3>Video 3</button>

	<script>
		/* use global variable for ease */
		var v = document.getElementById('videoPlayer');
		/* grab all buttons and attach click events */
		var b = document.getElementsByTagName('button');
		for(i = 0; i<b.length; i++) {
			b[i].addEventListener('click',swapVideo,true);
		}

		function swapVideo(e) {
			/* change the video src attribute based on the data-file attribute of the pressed button, selecting the most appropriate of either WebM or MP4 */
			if (v.canPlayType("video.webm") == 'maybe' || v.canPlayType("video.webm") == 'probably') {
				v.src = e.target.getAttribute('data-file')+'.webm';
			} else if (v.canPlayType("video/mp4") == 'maybe' || v.canPlayType("video/mp4") == 'probably') {
				v.src = e.target.getAttribute('data-file')+'.mp4';
			}
			v.load();
		}
	</script>

[Example 3: basic video swap][24].

[24]: {{ page.id }}/basic-swap/

If we now combine this approach (and keep in mind that this is only a very simplified example – there are many more elegant ways to solve this particular problem) with our more visually appealing custom controller, we already have the basis for a rather nifty video player…all put together with nothing more than pure web standards and the power of the new HTML5 native video support.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/fancy-swap.jpg" alt="A basic video gallery">
	<figcaption elem="caption" markdown="span">A basic video gallery/playlist using the `<video>` element</figcaption>
</figure>

[Example 4: fancy video swap][26].

[26]: {{ page.id }}/fancy-swap/

Does this spell the end for plugin-based video solutions of old? In the short term, it may still be a bit too early to start throwing out our Flash players. There is still a sizeable number of users out there who don’t have a browser capable of displaying native video, and the issue around different formats and codec is still causing a few headaches for those who rightly wish to take advantage of HTML5 `<video>` in **all** modern browsers. But now, for the first time, we as developers have an alternative tool at our disposal. And having choice is always a good thing.

## Read more

- [Everything you need to know about HTML5 video and audio][27] - and it really is _everything_!
- [`<video>` specification][28]
- [How `<video>` is implemented in Opera][29]
- [Accessible HTML5 Video with JavaScripted captions][30]

[27]: http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2
[28]: https://html.spec.whatwg.org/multipage/the-video-element.html#video
[29]: http://my.opera.com/core/blog/2009/12/31/re-introducing-video
[30]: https://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/
