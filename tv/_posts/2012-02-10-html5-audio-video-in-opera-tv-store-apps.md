---
title: HTML5 Audio and Video Support in Opera TV Store Applications
authors:
- patrick-lauke
intro: 'The Opera TV Store browser comes with built-in support for the HTML5 `<audio>` and `<video>` elements, allowing developers to include multimedia content in their applications without any need for plugin-based solutions.'
license: cc-by-3.0
layout: article
---

Update history:

- Article updated on 30 March 2012 to suggest explicit `<source>` workaround.
- Article updated on 18 April 2012 to include MPEG-1/MPEG-2 Audio Layer 3 audio codec for video and clarification on limitation of single `<audio>` or `<video>` element playback on some of the current devices.

The Opera TV Store browser comes with built-in support for the HTML5 `<audio>` and `<video>` elements, allowing developers to include multimedia content in their applications without any need for plugin-based solutions.

At its simplest, this means that multimedia elements can be included in a TV Store application by simply using markup such as:

	<video src="/path/to/video.mp4"></video>
	<audio src="/path/to/audio.mp3"></audio>

Due to limitations in how multimedia content is handled on certain current devices, there are situations in which the type of audio/video content being used is not automatically inferred by file extensions or MIME types. For this reason, we suggest to use the more explicit, though slightly more wordy, variant:

	<video>
		<source src="/path/to/video.mp4" type="video/mp4">
	</video>
	<audio>
		<source src="/path/to/audio.mp3" type="audio/mp3">
	</audio>

In contrast to the desktop version of Opera — where multimedia decoding and playback is handled directly by the browser) — the specifics of which codecs are supported on devices can vary considerably, as this depends on the underlying platform and integration work carried out by device manufacturers, as well as the specific version of the Opera TV Store that may be running on the device.

Additionally, due to the way some of the current devices have integrated audio and video support on their platform via an external media playback framework, it may not be possible to guarantee simultaneous playback of more than a single `<audio>` or `<video>` element.

At the time of publication, the following container formats and codecs are supported for Opera TV Store applications:

<table border="1">
<thead>
<tr>
	<th>Type</th>
	<th>Media</th>
	<th>MIME</th>
	<th>Container</th>
	<th>Video codec</th>
	<th>Audio codec</th>
</tr>
</thead>
<tbody>
<tr>
	<th rowspan="3">Video</th>
	<td rowspan="3">AVC</td>
	<td rowspan="3">video/mp4</td>
	<td rowspan="3">MP4</td>
	<td rowspan="3">
		MPEG-4 AVC(H.264)<br>
		Main and High Profiles<br>
		Up to Level 4(inclusive)
	</td>
	<td>
		MPEG-1/MPEG-2<br>
		Audio Layer 3<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>
		AAC-LC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>
		HE-AAC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<th rowspan="4">Audio</th>
	<td rowspan="2">MP3</td>
	<td>audio/mp3</td>
	<td rowspan="2">MP3</td>
	<td rowspan="2"></td>
	<td rowspan="2">
		MPEG-1/MPEG-2<br>
		Audio Layer 3<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>audio/mpeg</td>
</tr>
<tr>
	<td>AAC-LC</td>
	<td>audio/mp4</td>
	<td>MP4</td>
	<td></td>
	<td>
		AAC-LC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>HE-AAC</td>
	<td>audio/mp4</td>
	<td>MP4</td>
	<td></td>
	<td>
		HE-AAC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
</tbody>
</table>

If you are testing your applications in the Opera TV Emulator, please note that — because of licensing reasons — the H.264 codecs are not installed by default. See the emulator’s user guide for information of how to install these codecs separately.

For more on the basics of HTML5 `<audio>` and `<video>`, read [Introduction to HTML5 video][1].

[1]: http://dev.opera.com/articles/view/introduction-html5-video/
