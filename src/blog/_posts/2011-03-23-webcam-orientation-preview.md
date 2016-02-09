---
title: Native Webcam Support and Orientation Events — Technology Preview
authors:
- rich-tibbett
tags:
- getusermedia
- mobile
- html
- whatwg
- w3c
- orientation
- device
- coreblog
license: cc-by-3.0
---

**Update:** We have released newer experimental builds with webcam support for both Opera Desktop on Mac/Linux/Windows and Opera Mobile on Android. You can get more information and download these builds [here][1].

Last week we wrote a blog post discussing our internal prototyping of [web camera streaming in the browser][2]. On the very same day, the proposed standard interface on which that was built [changed considerably][3].

This week we are pleased to announce the release an updated preview build of [Opera Mobile for Android][4] enabling web developers to access and interact natively with a device’s webcam via JavaScript. This build has been entirely re-based on the new standards proposal introduced last week so it’s goodbye to the <device> element and a big warm hello to the getUserMedia JavaScript API.

[1]: https://dev.opera.com/articles/view/labs-more-fun-using-the-web-with-getusermedia-and-native-pages/
[2]: http://my.opera.com/core/blog/2011/03/14/web-meet-device
[3]: http://html5.org/tools/web-apps-tracker?from=5944&to=5945
[4]: https://www.opera.com/mobile/

In addition to web camera streaming, Opera is also previewing support for the draft [W3C Orientation Events][5] specification. These capabilities open up some exciting possibilities for the future of the web itself.

[5]: http://dev.w3.org/geo/api/spec-source-orientation.html

To get started, grab the [Android build][6] and follow the installation instructions below:

[6]: http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk

1. Go to the Android settings and ensure that “Unknown sources” (Allow install of non-Market application) is allowed.
2. Download the build (.apk) from the [provided location][7]. Alternatively, you can download the build with a desktop browser, save it on a device, and install it using any available file manager.
3. To launch this technology preview, find the installed Android application called “Opera Mobile — Device/Orientation demo”.

[7]: http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk

To navigate back to this blog post, we added a camera icon on the Opera Speed Dial that will direct you back to this URL as a jumping off point for exploring [more demos][8].

[8]: http://people.opera.com/richt/release/demos

This build will not replace the standard version of Opera Mobile installed on your Android device. Furthermore, this build supports remote debugging via [Opera Dragonfly][9]; please refer to [Dev.Opera][10] for more instructions.

[9]: https://www.opera.com/dragonfly/
[10]: https://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/

## Interacting with the camera

Developers are able to request a real-time video stream of the device’s back-facing camera. The resulting camera stream may be displayed in any web page by assigning the success callback’s return parameter to a HTML <video> element.

The simple example below demonstrates how this technology can be used to display the web camera in a web page:

	<!DOCTYPE html>
	<h1>Simple web camera display demo</h1>
	<video autoplay></video>
	<script>
		var video = document.getElementsByTagName('video')[0],
			heading = document.getElementsByTagName('h1')[0];

		if(navigator.getUserMedia) {
			navigator.getUserMedia('video', successCallback, errorCallback);
			function successCallback( stream ) {
				video.src = stream;
			}
			function errorCallback( error ) {
				heading.textContent =
					'An error occurred: [CODE ' + error.code + ']';
			}
		} else {
			heading.textContent =
				'Native web camera streaming is not supported in this browser!';
		}
	</script>


([live demo][11])

[11]: http://people.opera.com/richt/release/demos/device

The code above will render as follows:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/coreconcerns-device1.png" alt="">
</figure>

More simple live web camera demos are available [here][13].

[13]: http://people.opera.com/richt/release/demos/device

## Opera’s implementation

We have simplified the proposed GeneratedStream interface by not implementing its proposed methods and attributes. The Stream object returned in the success callback should be assigned directly to a video element’s src attribute. When a video element’s src parameter has been assigned a Stream object and that attribute is subsequently queried the attribute returns the reserved, though unresolvable, URI of about:streamurl.

We are currently in the process of considering different user experiences to ensure that the user can opt-in and authorize the sharing of their web camera with a web page. In the absence of this user opt-in functionality, we have currently chosen to disable access to any Stream pixel data via a HTML `<canvas>` element in this preview build. Developers can, however, override this restriction for prototyping purposes by entering `opera:config` in the URL bar, selecting “Security Prefs” and then checking the option to “Allow Camera to Canvas Copy” followed by “Save”.

## Interacting with device orientation

Here’s an example of using orientation events to create a simple compass:

	<!DOCTYPE html>
	<h1>Simple compass demo</h1>
	<canvas id="arrow" width="480" height="480"></canvas>
	<p id="orient"></p>
	<script>
		function update(evt){
			var arrow = document.getElementById('arrow');
			var ctx = arrow.getContext('2d');
			ctx.clearRect(0,0,480,480);

			alpha = Math.PI *(evt.alpha/180.0);

			var x1 = 240 + Math.round(240.0 * Math.sin(alpha));
			var y1 = 240 - Math.round(240.0 * Math.cos(alpha));
			var x2 = 240 + Math.round(10.0 * Math.sin(alpha - Math.PI/2));
			var y2 = 240 - Math.round(10.0 * Math.cos(alpha - Math.PI/2));
			var x3 = 240 + Math.round(10.0 * Math.sin(alpha + Math.PI/2));
			var y3 = 240 - Math.round(10.0 * Math.cos(alpha + Math.PI/2));

			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.lineTo(x3,y3);
			ctx.closePath();
			ctx.fill();

			var orient = document.getElementById('orient');
			orient.innerHTML = '(' + evt.alpha + ', ' + evt.beta + ', ' + evt.gamma + ')';
		}
		window.addEventListener('deviceorientation', update, true);
	</script>

([live demo][14])

[14]: http://people.opera.com/richt/release/demos/orientation/basic/orientation_compass.html

The code above will render as follows:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/coreconcerns-device2.png" alt="">
</figure>

We have also created a few other [live orientation demos][16] that you should check out.

[16]: http://people.opera.com/richt/release/demos/orientation

## Next steps

It is likely that the standards around web camera access and streaming (and to a lesser extent, orientation events) will continue to evolve before this technology can become ubiquitous on the web. That’s what happens [when you’re on the bleeding edge of technology][17]. It’s where we like to be.

[17]: http://my.opera.com/haavard/blog/2011/03/16/scrapped

We plan to:

- Add support for other major mobile and desktop platforms.
- Continue to actively participate in the related standards process to ensure this functionality becomes ubiquitous across the whole web and available in all browsers and web runtimes.
- Support microphone streams and allow assignment of those streams to  elements.
- Build user interfaces, both on desktop and mobile, that enable the user to explicitly opt-in to web camera sharing and opt-out or modify their web camera sharing once initial authorization has been provided to a web page.
- Continue prototyping towards enabling peer-to-peer audio and video communications in open web technologies.
- Prototype on how we can expose other aspects of the local device (e.g. mounted file systems) to end users in a privacy-secure way.

Our current prototyping demonstrates one well-known method for web camera access although the methods used to access device functionality (and to a lesser extent, orientation events) _will_ change significantly before they are adopted as ubiquitous web standards.

**Disclaimer:** This build is of pre-production quality and, therefore, might contain defects including, but not limited to, instabilities and crashes. In fact, it may not work at all. The features included in this build might be different from any final standards implementation.

Give us your feedback in the comments below. We look forward to hearing about the great demos and services you come up with!
