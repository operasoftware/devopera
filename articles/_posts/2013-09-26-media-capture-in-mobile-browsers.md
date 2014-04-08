---
title: Media Capture in Mobile Browsers
authors:
- francesco-iovine
intro: 'Media Capture is one of the most interesting features in web applications, especially for mobile devices. Surprisingly capturing media on the spot is quite a new thing for browsers in general, until recently always being delegated to browser plugins such as Flash or Silverlight. In this article we will explore how to use the Media Capture APIs, their compatibility across mobile browsers and the current state of the W3C specifications that define them.'
tags:
- devices
- getusermedia
- html5
- javascript
- mobile
- w3c
license: cc-by-3.0
layout: article
---

## Introduction

Media Capture is one of the most interesting features in web applications, especially for mobile devices. Surprisingly capturing media on the spot is quite a new thing for browsers in general, until recently always being delegated to browser plugins such as Flash or Silverlight. In this article we will explore how to use the Media Capture APIs, their compatibility across mobile browsers and the current state of the W3C specifications that define them.

At the moment the [W3C Device APIs Working Group][1] is working on two different Media Capture APIs:

[1]: http://www.w3.org/2009/dap/

- HTML Media Capture
- Media Capture and Streams

The [HTML Media Capture specification][2] defines an HTML form extension, while the [Media Capture and Streams specification][3] specification defines a set of JavaScript APIs.

[2]: http://www.w3.org/TR/2013/CR-html-media-capture-20130509/
[3]: http://www.w3.org/TR/mediacapture-streams/

## HTML Media Capture

Since 9 May 2013, the [HTML Media Capture specification][4] is a W3C Candidate Recommendation. It basically extends `<input>` elements with a `capture` attribute.

[4]: http://www.w3.org/TR/2013/CR-html-media-capture-20130509/

> The `capture` attribute is a `boolean` attribute that, if specified, indicates that the capture of media directly from the device’s environment using a media capture mechanism is preferred.

Here is the HTML for image capturing:

	<input type="file" accept="image/*" capture>

Capturing video is quite similar; you just need to set the `accept` attribute accordingly.

	<input type="file" accept="video/*" capture>

And the story is the same for capturing audio:

	<input type="file" accept="audio/*" capture>

For example, if you want to take a photo using the device camera and upload the image using an HTML form, this is all the code you need.

	<form action="upload.htm" method="post" enctype="multipart/form-data">
		<input type="file" accept="image/*" capture>
		<input type="submit" value="Upload">
	</form>

Easy, isn’t it?

Android OS 3.0 was the first platform to provide HTML Media Capture support, via its default Android Webkit browser. Now HTML Media Capture is also supported by:

- Safari and Chrome Mobile for iOS 6+
- Chrome Mobile for Android OS 3+
- Firefox Mobile for Android OS 3+
- Opera 16 for Android OS 3+

Nonetheless some of them only partially implement the specification or implement an [older W3C specification][5], that makes the code above slightly different:

[5]: http://www.w3.org/TR/2012/WD-html-media-capture-20120712/

	<input type="file" accept="image/*" capture="camera">
	<input type="file" accept="video/*" capture="camcorder">
	<input type="file" accept="audio/*" capture="microphone">

Check [mobilehtml5.org][6] for current compatibility information.

[6]: http://mobilehtml5.org/

I have written a simple [HTML Media Capture demo][7], which can be used to test and review HTML Media Capture on your favorite mobile browser. Here are some screenshots taken from Opera Mobile 16.

[7]: /articles/media-capture-in-mobile-browsers/demo/

<figure class="figure">
	<a href="{{ page.id }}/1.png"><img src="{{ page.id }}/1--thumb.png" class="figure__media" alt=""></a>
	<a href="{{ page.id }}/2.png"><img src="{{ page.id }}/2--thumb.png" class="figure__media" alt=""></a>
	<a href="{{ page.id }}/3.png"><img src="{{ page.id }}/3--thumb.png" class="figure__media" alt=""></a>
	<a href="{{ page.id }}/4.png"><img src="{{ page.id }}/4--thumb.png" class="figure__media" alt=""></a>
	<a href="{{ page.id }}/5.png"><img src="{{ page.id }}/5--thumb.png" class="figure__media" alt=""></a>
</figure>

Here are some considerations, which I would hope to see changed in the future:

- First of all, I would expect different default labels from _Choose File_ and _No file chosen_, and the possibility to customize them.
- I would expect specifying the `capture` attribute to show the camera directly, rather than having to navigate through the dialog boxes above.
- Actually, it seems that current implementations don’t rely on the `capture` attribute at all, but only on the `type` and `accept` attributes: the browser displays a dialog box in which the user can choose where the file has to be taken, and the `capture` attribute is not taken into consideration. For example, iOS Safari relies on the `accept` attribute (not `capture`) for images and videos (not audio). Even if you don’t use the `accept` attribute, the browser will let you choose between “Take Photo or Video” and “Choose Existing” (thanks to [@firt][18] for pointing this out).
- Audio capture does not trigger the sound recorder with Firefox Mobile (I tried versions 20 and 21 beta for Android OS 4) and with Safari and Chrome for iOS 6 (I tried version 26)

[18]: https://twitter.com/firt

Another interesting aspect to consider is that before releasing iOS 6 Safari didn’t support `type="file"` at all; that is, it did not allow access to the filesystem. It’s only with iOS 6, released in September 2012, that Apple decided to open the doors to filesystem and media capturing.

It’s also worth mentioning that if the browser does not support media capture, it will ask the user to select a media object from the file system instead. Graceful degradation for the win!

## Media Capture and Streams

The [Media Capture and Streams specification][19] is a W3C Working Draft, a joint deliverable created by the WebRTC and Device APIs Working Groups. Many refer to this specification as _getUserMedia_. It is a pretty new feature, which is partially supported only by Opera Mobile Classic at the moment.

[19]: http://www.w3.org/TR/mediacapture-streams/

Using this technology, accessing multimedia streams (video, audio, or both) from local devices (video cameras, microphones, web cams) should now be possible without browser plugins, which will allow easy real time communication between anyone with a supporting web browser.

The code is quite easy to understand.

	navigator.getUserMedia(
		constraints,
		successCallback,
		errorCallback
	);

The `getUserMedia` method takes 3 arguments:

- `constraints`, a JavaScript object that defines the tracks to be used (audio, video)
- `successCallback`, the function called if the user allows access to the media input device requested by the web application. It takes a `LocalMediaStream` object as an argument, which represents streams of media data, and provides a `stop` method, used to stop the stream.
- `errorCallback`, the function that is invoked if the user denies permission or if there is a failure in finding valid tracks.

After calling `navigator.getUserMedia` the user is asked for permission to let the browser access the camera or the microphone.

Now let’s look at a quite simple example in which the `stop()` method is used.

	var constraints = {
		video: true,
		audio: true
	}

	var successCallback = function(mediaStream) {
		var button = document.querySelector('button');
		button.addEventListener('click', function() {
			mediaStream.stop();
		}, false);
	};

	var errorCallback = function() {
		console.log('failure to get media');
	};

	navigator.getUserMedia(
		constraints,
		successCallback,
		errorCallback
	);

I simply added an event listener to a button inside the success callback, which activates the `stop()` method, providing an easy way to stop the stream.

### Taking a photo

In the following example I have used `getUserMedia` to take a photo. To do this, I had to capture a video from the device’s camera, load the stream in an HTML5 `<video>` element, and then wire up a button with image capture functionality.

Let’s look at the code in detail. This is the HTML: there’s a `<video>` element with the `autoplay` attribute set, an empty `<img>` tag into which I will put the photo, a `<canvas>`, and the Capture button.

	<video autoplay></video>
	<img src="">
	<canvas style="display:none"></canvas>
	<button>Capture</button>


The `capture` function is called when the DOM is ready; its parameters are the JavaScript DOM objects of the tags defined above.

	function capture(video, canvas, image, snapshotButton) {

		var constraints = {
			video: true
		}

		var successCallback = function(mediaStream) {
			video.src = window.URL.createObjectURL(mediaStream);
			video.addEventListener("loadedmetadata", function(e) {
				snapshotButton.onclick = function() {
					takePhoto();
				}

			}
		};

		var errorCallback = function() {
			console.log('failure to get media');
		};

		var takePhoto = function () {
			var ctx = canvas.getContext('2d');
			ctx.drawImage(video,0,0);
			showImage();
		};

		var showImage = function () {
			image.src = canvas.toDataURL('image/webp');
		};

		navigator.getUserMedia(constraints, successCallback, errorCallback);

	}

If the user grants access to the camera, a blob URL is created from the stream and used as the `src` attribute of the `<video>` element, so that the HTML5 video object starts reproducing the stream from the camera. By clicking on the `snapshotButton`, the `takePhoto` function is called, resulting in our `<canvas>` capturing a still image from the video. The image is then converted to a `dataUrl` in order to fill the `src` attribute of the `<img>` element and display the photo.

A [live demo of the Media Capture and Streams example][20] can be found on my web site. More advanced `getUserMedia` examples can be found at [shinydemos.com][21].

[20]: /articles/media-capture-in-mobile-browsers/demo/
[21]: http://shinydemos.com/getusermedia/

In order to natively support the use case of [taking a photo via JavaScript][22], the [W3C Media Capture Task Force][23] started approaching this scenario as follows:

[22]: https://dvcs.w3.org/hg/dap/raw-file/tip/media-stream-capture/scenarios.html#take-a-picture
[23]: http://www.w3.org/2009/dap/#mediacapture

> A common usage scenario of local device capture is to simply “take a picture”. The hardware and optics of many camera-devices often support video in addition to photos, but can be set into a specific “camera mode” where the possible capture resolutions are significantly larger than their maximum video resolution.
>
> The advantage to having a photo-mode is to be able to capture these very high-resolution images (versus the post-processing scenarios that are possible with still-frames from a video source).
>
> Capturing a picture is strongly tied to the “video” capability because a video preview is often an important component to setting up the scene and getting the right shot.
>
> Because photo capabilities are somewhat different from those of regular video capabilities, devices that support a specific “photo” mode, should likely provide their “photo” capabilities separately from their “video” capabilities.
>
> Many of the considerations that apply to video capture also apply to taking a picture.
>
> Issues
>
> - What are the implications on the device mode switch on video captures that are in progress? Will there be a pause? Can this problem be avoided?
> - Should a “photo mode” be a type of user media that can be requested via getUserMedia?

In March 2012, a simple image capture API that extends `getUserMedia`’s functionality [was proposed][24]. In February 2013, an alternative proposal based on a new `ImageCapture` object [popped up][25] and in April, after some discussions, the need for a dedicated Image Capture specification has been recognized, which would allow us to take a picture without needing to use a video and a `<canvas>` element! On 9 July 2013 the W3C finally published the [Mediastream Image Capture’s First Public Working Draft][26].

[24]: http://lists.w3.org/Archives/Public/public-media-capture/2012Mar/0008.html
[25]: http://lists.w3.org/Archives/Public/public-media-capture/2013Feb/0059.html
[26]: http://www.w3.org/TR/2013/WD-image-capture-20130709/

This is how the code would appear.

	function capture(captureButton, image) {

		var constraints = {
			video: true
		}

		var successCallback = function(mediaStream) {
			var videoStreamTrack = mediastream.getTrackByID()[0];
			var imageCapture = new ImageCapture(videoDevice);

			captureButton.onclick = function() {
				imageCapture.takePhoto();
			}

			pictureDevice.onphoto = showImage;
			pictureDevice.onphotoerror = photoError;
		};

		var errorCallback = function() {
			console.log('failure to get media');
		};

		var showImage = function (blobevent) {
			image.src = URL.createObjectURL(blobevent.data);
		};

		var photoError = function() {
			console.log('failure to take photo');
		};

		navigator.getUserMedia(constraints, successCallback, errorCallback);
	}

This way, it would be enough to instantiate an `ImageCapture` object and call the `takephoto` method on it. A `photo` event would be fired with a `BlobEvent` containing the captured image, so that my `showImage` function would create a URL directly from the blob object and display the image.

In the [W3C Media Capture Task Force][27], there’s also an interesting debate about photo settings which likely will be part of another article, along with the [MediaStream Recording API][28].

[27]: http://www.w3.org/2009/dap/#mediacapture
[28]: http://www.w3.org/TR/mediastream-recording/

One thing to bear in mind is that **the syntax is still under discussion**, so it’s likely to change in the near future.

## Summary

Media Capture opens the door to a number of scenarios for web applications, especially for mobile devices. Think of capturing, adding effects and uploading media on the fly. Think of real-time communication, recording, surveillance. Think of augmented reality! There’s still a lot of work to do with W3C specifications and mobile browser compatibility, but I’m sure we will see the light at the end of the tunnel very soon!
