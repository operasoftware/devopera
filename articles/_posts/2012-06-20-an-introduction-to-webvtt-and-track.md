---
title: An Introduction to WebVTT and `<track>`
authors:
- ian-devlin
intro: 'The HTML5 specification includes two features for improving media accessibility — the WebVTT format, for marking up external text tracks such as subtitles and captions, and the `<track>` element, for applying those text tracks alongside HTML5 `<video>` and `<audio>`. This article provides a detailed introduction to both features, showing how you can make use of them in your projects today.'
tags:
- accessibility
- audio
- captions
- html5
- polyfill
- subtitles
- text
- track
- tracks
- video
- webvtt
license: cc-by-3.0
---

## Introduction

Web Video Text Tracks, more commonly known as WebVTT, is a file format that allows us to mark up external text tracks. Using it in conjunction with HTML5’s `<track>` element means we can associate information such as subtitles, captions and descriptions for a media resource such as audio or video, and display them synchronised with the media resource.

Being able to add textual information in this way allows us to make our media content more accessible to those who are perhaps unable to listen to a video’s dialogue due to an auditory impairment or simply because the dialogue is in a language that the listener doesn’t understand.

This article introduces the WebVTT file format, the various options available, and how it can be used with the `<track>` element to add subtitles to a video.

## File Format

A WebVTT file is a simple text file, encoded as UTF-8, with a `.vtt` file extension. It follows a specific format as defined by the [specification][1]. It may sound stressful having to learn a new file format, but don’t worry — the VTT file format has been kept deliberately very simple.

[1]: http://dev.w3.org/html5/webvtt/#the-webvtt-file-format

Note: to use WebVTT files on your server, you may have to make the content type explicitly known, for example with an .htaccess file on an Apache server you could do:

	<Files mysubtitle.vtt>
		ForceType text/vtt;charset=utf-8
	</Files>

A WebVTT file begins with the following, in this order:

1. An optional BOM character
2. The string: _WEBVTT_
3. A space or tab character followed by any number of characters that are not a line feed or carriage return
4. <span id="webvtt-line-terminator>Two or more “WEBVTT line terminators” (a carriage return, a line feed, or both a carriage return and a line feed)</span>

An example of this is as follows:

	WEBVTT

	Cue-1
	00:00:15.000 --> 00:00:18.000
	At the left we can see...

What comes next actually defines the textual content and is the important bit.

### WebVTT Cues

The content of a WebVTT file consists of zero or more “WebVTT cues”, each of which is separated by two or more [WebVTT line terminators](#webvtt-line-terminator).

A WebVTT cue allows you to specify some text for a particular part of a media file (e.g. a subtitle) and the timestamp range of the media file that the text in question applies to. You can also assign a unique identifier to a WebVTT cue, which is a simple string that cannot contain the substring: `-->`, nor any of the [WebVTT line terminators](#webvtt-line-terminator). Each cue takes the following form:

	[idstring]
	[hh:]mm:ss.msmsms --> [hh:]mm:ss.msmsms
	Text string

Since idstrings are optional, you may not want to include them in your code, to cut down on verbosity. However, they can also be useful for file organization, and manipulating WebVTT with script.

The timestamp follows a standard format, where the hour part `[hh:]` is optional, and where the milliseconds are separated from the seconds by a dot `.` rather than a colon `:`. The second part of the timestamp range must be greater than the first part of the timestamp range. Timestamps for different cues can overlap, if you want, but you can’t have two subsequent line terminators or the string `-->` in cue data..

The actual text string associated with the timestamp can be a single line of text, or multiple lines. Any text following the specified timestamp will be associated with that timestamp until either a new cue is found or the file ends.

Here are some _WebVTT_ cue examples:

	Cue-8
	00:00:52.000 --> 00:00:54.000
	I don’t think so. You?

	Cue-9
	00:00:55.167 --> 00:00:57.042
	I’m Ok.

It is also possible to specify some settings on a cue by cue basis using WebVTT cue settings — we will look at these next.

### WebVTT Cue Settings

There are a number of settings that can be set per cue, and these are specified after the timestamp range value:

	[idstring]
	[hh:]mm:ss.msmsms --> [hh:]mm:ss.msmsms [cue settings]
	Text string

These cue settings allow you to specify the position and alignment of the cue text, and the following options are available:

<table>
<thead>
<tr>
	<th>Setting</th>
	<th>Value(s)</th>
	<th>Function</th>
</tr>
</thead>
<tbody>
<tr id="vertical-setting">
	<td>vertical</td>
	<td>rl || lr</td>
	<td markdown="span">Aligns text vertically to the left `lr` or right `rl` (e.g. for Japanese subtitles)</td>
</tr>
<tr id="line-setting">
	<td>line</td>
	<td>[-][0 or more]</td>
	<td>References a particular line number that the cue is to be displayed on. Line numbers are based on the size of the first line of the cue. A negative number counts from the bottom of the frame, positive numbers from the top</td>
</tr>
<tr>
	<td></td>
	<td>[0-100]%</td>
	<td>Percentage value indicating the position relative to the top of the frame</td>
</tr>
<tr id="position-setting">
	<td>position</td>
	<td>[0-100]%</td>
	<td>Percentage value indicating the position relative to the edge of the frame where the text begins (e.g. the left edge in English)</td>
</tr>
<tr id="size-setting">
	<td>size</td>
	<td>[0-100]%</td>
	<td>Percentage value indicating the size of the cue box. The value is given as a percentage of the width of the frame</td>
</tr>
<tr id="align-setting">
	<td>align</td>
	<td>start || middle || end</td>
	<td>Specifies the alignment of the text within the cue. The keywords are relative to the text direction</td>
</tr>
</tbody>
</table>

Note: if no cue settings are set, the positioning default to the middle, at the bottom of the frame.

Let’s look at a quick example of how some of these might be used:

	Cue-8
	00:00:52.000 --> 00:00:54.000 align:start size:15%
	I don’t think so. You?

	Cue-9
	00:00:55.167 --> 00:00:57.042 align:end line:10%
	I’m Ok.

In this short example, the cue for `Cue-8` is aligned to the start of the line, with the cue box size set to 15%, whilst the cue for `Cue-9` is aligned to the end of the line, and positioned vertically 10% from the top of the frame.

### _WebVTT_ Cue Components

In addition to all this, you can use “WebVTT cue components” to add further information to the actual cue text itself. These components are similar to HTML elements, and can be used to add semantics and styling to the actual text strings. A list of the different components available is given below:

<table>
<thead>
<tr>
	<th>Value</th>
	<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr id="class-label">
	<td>c</td>
	<td markdown="span">Specifies a CSS class, which follows the `c`, e.g. `<c.className>Cue text</c>`</td>
</tr>
<tr id="italic-label">
	<td>i</td>
	<td>Specifies italic text</td>
</tr>
<tr id="bold-label">
	<td>b</td>
	<td>Specifies bold text</td>
</tr>
<tr id="underline-label">
	<td>u</td>
	<td>Specifies underlined text</td>
</tr>
<tr id="ruby-label">
	<td>ruby</td>
	<td markdown="span">Specifies something similar to HTML5’s [`<ruby>` element](http://dev.w3.org/html5/spec/the-ruby-element.html#the-ruby-element). Within this component, one or more occurrences of a `<rt>` element are allowed. ([The HTML5 `<ruby>` element in words of one syllable or less](http://my.opera.com/tagawa/blog/the-html5-ruby-element-in-words-of-one-syllable-or-less))</td>
</tr>
<tr id="voice-label">
	<td>v</td>
	<td markdown="span">Specifies a voice label (if provided) that the cue text is being “spoken in”, e.g. `<v Ian>This is useful for adding subtitles</v>`. Note that the voice label won’t be displayed. It’s just there as a styling hook.
</td>
</tr>
</tbody>
</table>

An example of some of the components in action can be seen below:

	Cue-8
	00:00:52.000 --> 00:00:54.000 align:start size:15%
	<v Emo>I don’t think so. <c.question>You?</c></v>

	Cue-9
	00:00:55.167 --> 00:00:57.042 align:end line:10%
	<v Proog>I’m Ok.</v>

This example specifies two different voices for the cue text, _Emo_ and _Proog_ respectively. In addition, a CSS class of `question` is specified in the first cue text, which can then be used for styling purposes. A class such as this can be styled in the usual way via CSS attached or defined in the calling HTML page.

Note that to style cue text in CSS, you need to use a special pseudo-element selector, for example:

	video::cue(v[voice="Emo"]) { color:lime }

It is also possible to add timestamps to cue text, indicating that different parts occur at different times. An example of this is shown below:

	Cue-8
	00:00:52.000 --> 00:00:54.000
	<c>I don’t think so.</c> <00:00:53.500><c>You?</c>

This will cause all the text to be displayed at the same time, but do note that in supporting browsers you will be able to use the `:past` and `:future` pseudo classes to style text differently depending if it is in the future or past. For example:

	video::cue(c:past) { color:yellow }

So as you can see, the WebVTT file provides you with many options, allowing you a lot of control over how any text (especially video subtitles) might appear. But how can you actually make your text tracks appear alongside your media, and what else can you do with it? We’ll look at this next.

Note: There is a [Live WebVTT validator][6] available, for when you want to check whether your WebVTT files are written correctly.

[6]: http://quuz.org/webvtt/

## Using the `<track>` element

HTML5’s `<track>` element allows you to link external track files with a particular resource. The `<track>` element takes a number of attributes, which are listed below:

<table>
<thead>
<tr>
	<td>Name</td>
	<td>Value(s)</td>
	<td>Description</td>
</tr>
</thead>
<tbody>
<tr>
	<td>kind</td>
	<td>subtitles</td>
	<td>Indicates that the resource specified by <code>src</code> is to be used as subtitles.</td>
</tr>
<tr>
	<td></td>
	<td>captions</td>
	<td>Indicates that the resource specified by <code>src</code> is to be used as captions. Captions contain more than just dialogue, they can also contain musical queues, sound effects and other audio information.</td>
</tr>
<tr>
	<td></td>
	<td>descriptions</td>
	<td>Indicates that the resource specified by <code>src</code> is to be used as descriptions. These contain textual descriptions intended for audio when the visual component is unavailable.</td>
</tr>
<tr>
	<td></td>
	<td>chapters</td>
	<td>Indicates that the resource specified by <code>src</code> is to be used as chapter navigation.</td>
</tr>
<tr>
	<td></td>
	<td>metadata</td>
	<td>Indicates that the resource specified by <code>src</code> is to be used as metadata.</td>
</tr>
<tr>
	<td>src</td>
	<td><abbr title="Universal Resource Locator">URL</abbr></td>
	<td>Specifies the resource to use</td>
</tr>
<tr>
	<td>srclang</td>
	<td>Language code</td>
	<td>Specifies the language of the resource contained in the <code>src</code> attribute</td>
</tr>
<tr>
	<td>label</td>
	<td>Free text</td>
	<td>Specifies a unique label for this element</td>
</tr>
<tr>
	<td>default</td>
	<td>n/a</td>
	<td>If present, indicates that this element is enabled by default if the user’s settings do not specify anything else</td>
</tr>
</tbody>
</table>

The `<track>` element is specified as a child of an `<audio>` or `<video>` element, and there can of course be more than one `<track>` element defined: each one may provide subtitles for different languages and/or different kinds of text tracks. An example of a video that has subtitles and chapters defined for it in both English and German is given below:

	<video controls>
		<source src="elephants-dream.mp4" type="video/mp4">
		<source src="elephants-dream.webm" type="video/webm">
		<track label="English subtitles" kind="subtitles" srclang="en"
			 src="elephants-dream-subtitles-en.vtt" default>
		<track label="Deutsche Untertitel" kind="subtitles" srclang="de"
			 src="elephants-dream-subtitles-de.vtt">
		<track label="English chapters" kind="chapters" srclang="en"
			 src="elephants-dream-chapters-en.vtt">
	</video>

## Browser Support

Unfortunately at the moment browser support for WebVTT and the `<track>` element is poor: it is currently only supported by Internet Explorer 10 and Chrome 16+.

You can enable parsing of the `track` element in Chrome (via `chrome:flags` and "enable `<track>` element"), which enables your WebVTT subtitles to be rendered, although no choosing between languages is allowed when multiple `track` elements (with `kind="subtitles"`) exist. The one which has the `default` attribute is chosen, although this is not mandatory.

Internet Explorer 10 [supports WebVTT and the `<track>` element][7], but it is only in beta mode and available on Windows 8 only.

[7]: http://ie.microsoft.com/testdrive/Graphics/VideoCaptions/Default.html

For now the only way to get cross browser support is to use a JavaScript polyfill.

## Polyfills

There are a number of `<track>` polyfills available at the moment, but many of them don’t support WebVTT — they support the older WebSRT format, the precursor to WebVTT. Listed below are some polyfills that _do_ support WebVTT:

	* [Playr][8] by [Julien Villetorte][9] — supports subtitles, captions, and chapters
	* [Captionator][10] by [Christopher Giffard][11] — supports subtitles
	* [MediaElementJS][12] by [John Dyer][13] — supports subtitles

[8]: http://www.delphiki.com/html5/playr/
[9]: https://twitter.com/delphiki
[10]: http://captionatorjs.com/
[11]: https://twitter.com/cgiffard
[12]: http://mediaelementjs.com/
[13]: https://twitter.com/johndyer

All of these support HTML5 `<video>`, but not HTML5 `<audio>`, but I think that they could be easily adapted to do so in some way.

Personally I prefer to use Playr as it supports more than just subtitles, and it’s also one of the easier polyfills to use: let’s look at an example of how to implement it.

## WebVTT/`<track>` Polyfill Example

Playr is written by Julien “delphiki” Villetorte and is incredibly simple to use, once you have your WebVTT file(s) and video of course.

### Using Playr

There only a few steps required to get Playr up and running:

1. [Download Playr from Github][14]

[14]: https://github.com/delphiki/Playr/downloads

2. Include the JavaScript and CSS files in your webpage, like so:

	<link rel="stylesheet" href="playr/playr.css">
	<script src="playr/playr.js"></script>

3. Add the class `playr_video` to your `<video>` element

And that’s it! Playr will take over playing your video and parse any `<track>` elements that it contains. As mentioned earlier, Playr supports subtitles, chapters and captions (which get treated in the same way as subtitles). My [example code][15] adds English and German subtitles to a video, as well as navigational English chapters.

[15]: /articles/an-introduction-to-webvtt-and-track/webvtt-example.html

The `<video>` element in my example looks like this:

	<video preload="metadata" controls class="playr_video">
		<source src="elephants-dream.mp4" type="video/mp4">
		<source src="elephants-dream.webm" type="video/webm">
		<track label="English subtitles" kind="subtitles" srclang="en"
			src="elephants-dream-subtitles-en.vtt" default>
		<track label="Deutsch subtitles" kind="subtitles" srclang="de"
			src="elephants-dream-subtitles-de.vtt">
		<track label="English chapters" kind="chapters" srclang="en"
			src="elephants-dream-chapters-en.vtt">
	</video>

### Displaying a Transcript

In addition to supplying subtitles and chapters, I have also included a small JavaScript file, [`transcript.js`][16], which defines a function `loadTranscriptFile`. This takes a WebVTT subtitles (or captions) file as an argument, parses it (using code taken from Playr), and displays the text on screen, in an element with an id of `transcript`.

[16]: /articles/an-introduction-to-webvtt-and-track/transcript.js

If the WebVTT subtitle text contains the [“voice” tag](#voice-label), the name entered is also displayed alongside the text.

## Summary

The introduction of WebVTT and the HTML5 `<track>` element makes it much easier for web authors to make their video and audio more accessible to those who, for whatever reason, are unable to access the content in the way it is usually presented.

Whilst browser support is still nascent, a number of JavaScript polyfills allow us to make our media more accessible now, in a way that will be understood by browsers once support for WebVTT increases.

Accessibility is something that we, as web authors, should be thinking about when serving media content to our users. The more users who can access our content the better, right?
