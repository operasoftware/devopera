---
title: HTML5 Audio and Video Support in Opera TV Store Applications
authors:
- patrick-lauke
intro: 'The Opera TV Store browser comes with built-in support for the HTML5 `<audio>` and `<video>` elements, allowing developers to include multimedia content in their applications without any need for plugin-based solutions.'
license: cc-by-3.0
---

Update history:

- Article updated on 30 March 2012 to suggest explicit `<source>` workaround.
- Article updated on 18 April 2012 to include MPEG-1/MPEG-2 Audio Layer 3 audio codec for video and clarification on limitation of single `<audio>` or `<video>` element playback on some of the current devices.
- Article updated on 13 August 2014 to include information about supported Adaptive Bitrate Streaming and DRM formats
- Article updated on 7 October 2014 to cover subtitles support

## Introduction

The Opera TV Store browser comes with built-in support for the HTML5 `<audio>` and `<video>` elements, allowing developers to include multimedia content in their applications without any need for plugin-based solutions.

At its simplest, this means that multimedia elements can be included in a TV Store application by simply using markup such as:

	<video src="/path/to/video.mp4"></video>
	<audio src="/path/to/audio.mp3"></audio>

For more on the basics of HTML5 `<audio>` and `<video>`, read [Introduction to HTML5 video][3].

Due to limitations in how multimedia content is handled on certain current devices, there are situations in which the type of audio/video content being used is not automatically inferred by file extensions or MIME types. For this reason, we suggest to use the more explicit, though slightly more wordy, variant:

	<video>
		<source src="/path/to/video.mp4" type="video/mp4"></source>
	</video>
	<audio>
		<source src="/path/to/audio.mp3" type="audio/mp3"></source>
	</audio>

In contrast to the desktop version of Opera — where multimedia decoding and playback is handled directly by the browser) — the specifics of which codecs are supported on devices can vary considerably, as this depends on the underlying platform and integration work carried out by device manufacturers, as well as the specific version of the Opera TV Store that may be running on the device.

Additionally, due to the way some of the current devices have integrated audio and video support on their platform via an external media playback framework, it may not be possible to guarantee simultaneous playback of more than a single `<audio>` or `<video>` element.

Whenever you switch to the next audio/video source with JavaScript, make sure to destroy the current audio/video element, and create a new one. Without this some devices may have problems playing the new audio/video source, especially if the format is different than the one previously played.

We recommend using bitrates from 2Mbps (lowest to get minimum video quality) to 4Mbps (highest limited by network bandwidth users usually have) in your videos.

## Audio and video codecs

At the time of publication, the following container formats and codecs are supported for Opera TV Store applications:


<table border="1">
<thead>
<tr>
	<th width="50%">Audio or video codec</th>
	<th>Supported in the<br>Opera TV Store</th>
	<th>Supported in the<br>Opera TV Emulator</th>
</tr>
</thead>
<tbody>
<tr>
	<th width="50%">h.264</th>
	<td align="center">Yes</td>
	<td align="center">Yes</td>
</tr>
<tr>
	<th width="50%">MP3</th>
	<td align="center">Yes</td>
	<td align="center">Yes</td>
</tr>
<tr>
	<th width="50%">AAC-LC</th>
	<td align="center">Yes</td>
	<td align="center">Yes</td>
</tr>
<tr>
	<th width="50%">HE-AAC</th>
	<td align="center">Yes</td>
	<td align="center">Yes</td>
</tr>
</tbody>
</table>


### Using MPEG-4 AVC (H.264) video
- Main and High Profiles, 
- Up to Level 4 (inclusive),
- With audio codecs: MP3, AAC-LC or HE-AAC,
- Container format is MP4,
- Source type set to `video/mp4`,
- Example player code:

	<video>
		<source src="/path/to/video.mp4" type="video/mp4"></source>
	</video>

### Using MPEG-1/MPEG-2 Audio Layer 3 (MP3) audio
- Mono or Stereo options, 
- 32kHz/44.1kHz/48kHz frequencies,
- 16kbps-10Mbps bitrate (2Mbps-4Mbps is recommended to be used),
- Container format is MP3,
- Source type set to `audio/mp3` or `audio/mpeg`,
- Example player code:

	<audio>
		<source src="/path/to/audio.mp3" type="audio/mp3"></source>
	</audio>

### Using AAC-LC and HE-AAC audio 
- Mono or Stereo options,
- 32kHz/44.1kHz/48kHz frequencies,
- 16kbps-10Mbps bitrate (2Mbps-4Mbps is recommended to be used),
- Container format is MP4,
- Source type set to `audio/mp4`,
- Example player code:

	<audio>
		<source src="/path/to/audio.mp4" type="audio/mp4"></source>
	</audio>				
		
## Adaptive Bitrate Streaming and DRM

When dealing with premium multimedia content, you'll encounter technologies like adaptive bitrate streaming (ABR), which allows for smooth video playback by dynamically adjusting the bitrate, and digital rights management (DRM).

Below you can find the list of supported ABR formats and their combinations with DRM, together with simple examples how to correctly use such videos into your application. Please note that the actual support may slightly differ, depending on specific video stream parameters, firmware versions and device generations. It is also important that not all devices TV Store runs at support ABD and DRM.

<table border="1">
<thead>
<tr>
	<th width="50%">Adaptive Bitrate Format</th>
	<th>Supported in the<br>Opera TV Store</th>
	<th>Supported in the<br>Opera TV Emulator</th>
</tr>
</thead>
<tbody>
<tr>
	<th width="50%">HTTP Live Streaming (HLS) v3<br>Live and VOD profiles</th>
	<td align="center">Yes</td>
	<td align="center">No</td>
</tr>
<tr>
	<th width="50%">Microsoft Smooth Streaming (MSS) v1<br>Live and VOD profiles</th>
	<td align="center">Yes</td>
	<td align="center">No</td>
</tr>
<tr>
	<th width="50%">MPEG-DASH Live profile only</th>
	<td align="center">Yes</td>
	<td align="center">No</td>
</tr>
</tbody>
</table>

<table border="1">
<thead>
<tr>
	<th width="50%">DRM Format</th>
	<th>Supported in the<br>Opera TV Store</th>
	<th>Supported in the<br> Opera TV Emulator</th>
</tr>
</thead>
<tbody>
<tr>
	<th width="50%">Microsoft PlayReady 1.2</th>
	<td align="center">Yes</td>
	<td align="center">No</td>
</tr>
</tbody>
</table>

Note: Microsoft PlayReady is supported in combination with the Microsoft Smooth Streaming (recommended) or MPEG-DASH only. It is not supported in combination with the HLS.
 
### Using HTTP Live Streaming (HLS)

- VOD and Live profiles are supported, 
- HLS version 3 specification up to and including Panthos 06, 
- With or without AES 128 bit encryption,
- MPEG2TS as a container,
- Source pointing to a m3u8 playlist,
- Source type set to `application/vnd.apple.mpegurl`,
- At some devices HLS playback may be terminated if HLS stream is broken,
- Example player code:

	<video controls="">
		<source type="application/vnd.apple.mpegurl" 
			src="http://example.com/videofile.m3u8"></source>
	</video>

### Using Microsoft Smooth Streaming (MSS)

- VOD and Live profiles are supported,
- Version 1.0 of the specification,
- MP4 as a container,
- Source pointing to the MSS manifest file,
- Source type set to `application/vnd.ms-sstr+xml`,
- PlayReady protected content can be supported here,
	- Such content can be embedded with the ProtectionHeader inside the MSS manifest,
	- Some device may not support Security Levels (content with any security level required is played),
	- DRM errors are signaled by the MediaError element of the video tag,
- Example player code:

	<video controls="">
		<source type="application/vnd.ms-sstr+xml" 
			src="http://example.com/videofile.ssm/Manifest"></source>
	</video>

### Using MPEG-DASH

- Only Live profile is supported. VOD functionality can be still achieved by using Live profile,
- MP4 as a continer,
- Source pointing to the MPD manifest,
- Source type set to `application/dash+xml`,
- PlayReady protected content will be supported here by future devices,
	- Such content can be embeded with the ContentProtection element as defined by the reactive licence acquisition method,
	- Some device may not support Security Levels (content with any security level required is played),
	- DRM errors are signaled by the MediaError element of the video tag,
- Example player code:

	<video controls="">
		<source type="application/dash+xml" 
			src="http://example.com/videofile.isml/videofile.mpd"></source>
	</video>

## Subtitles

<table border="1">
<thead>
<tr>
	<th width="50%">Format</th>
	<th>Supported in the<br>Opera TV Store</th>
	<th>Supported in the<br>Opera TV Emulator</th>
</tr>
</thead>
<tbody>
<tr>
	<th width="50%">Out-of-band WebVTT</th>
	<td align="center">Yes</td>
	<td align="center">Yes</td>
</tr>
</tbody>
</table>

Opera TV Store supports out-of-band subtitles through HTML5's `<track>` tag and a WebVTT (Web Video Text Tracks) file format. Out-of-band means subtitles are delivered in addition to the media file. 

Example:

	<video controls="">
  		<source type="video/mp4" src="http://example.com/video.mp4"></source>
  		<track src="http://example.com/subtitles.vtt" srclang="en" label="English"></track>
	</video>

WebVTT subtitles can be also used together with all ABR or DRM formats mentioned in this article just by adding the `<track>` tag.

More information about using the WebVTT format can be found in [this article][5].

In-band subtitles (included inside the media container e.g. MP4) are supported at subset of devices only. In addition platforms are fragmented so we recommend using out-of-band subtitles with the WebVTT format only.

## Testing

[Opera TV Emulator][1] supports the above audio and video formats, including subtitles but without ABR and DRM formats. You can test H.264 streaming or audio playback in your application with it. Please note that — because of licensing reasons — the H.264 codecs are not installed by default. See the [emulator’s user guide][2] for information of how to install these codecs.

Since the [Opera TV Emulator][1] doesn't support any ABR no DRM formats, the only way to test such streams in your application is to use a retail device. We recommend to use Sony Blue-ray Disc Players 2013 or 2014 models e.g. BDP-S1100 or BDP-S1200. For more info on how to test your app inside the Opera TV Store see [our article][4] about it.
 
[1]: http://www.operasoftware.com/products/tv-emulator
[2]: http://dev.opera.com/tv/opera-tv-emulator/#h264-codec
[3]: http://dev.opera.com/articles/view/introduction-html5-video/
[4]: http://dev.opera.com/tv/testing-your-app-inside-opera-tv-store/
[5]: http://dev.opera.com/articles/an-introduction-to-webvtt-and-track/





