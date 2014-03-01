---
title: Media Capture in Mobile Browsers
authors:
- francesco-iovine
intro: 'Media Capture is one of the most interesting features in web applications, especially for mobile devices. Surprisingly capturing media on the spot is quite a new thing for browsers in general, until recently always being delegated to browser plugins such as Flash or Silverlight. In this article we will explore how to use the Media Capture APIs, their compatibility across mobile browsers and the current state of the W3C specifications that define them.'
license: cc-by-3.0
layout: article
---
<h2>Introduction</h2>

<p>Media Capture is one of the most interesting features in web applications, especially for mobile devices. Surprisingly capturing media on the spot is quite a new thing for browsers in general, until recently always being delegated to browser plugins such as Flash or Silverlight. In this article we will explore how to use the Media Capture APIs, their compatibility across mobile browsers and the current state of the W3C specifications that define them.</p>

<p>At the moment the <a href="http://www.w3.org/2009/dap/">W3C Device APIs Working Group</a> is working on two different Media Capture APIs:</p>
<ul>
<li>HTML Media Capture</li>
<li>Media Capture and Streams</li>
</ul>

<p>The <a href="http://www.w3.org/TR/2013/CR-html-media-capture-20130509/">HTML Media Capture specification</a> defines an HTML form extension, while the <a href="http://www.w3.org/TR/mediacapture-streams/">Media Capture and Streams specification</a> specification defines a set of JavaScript APIs.</p>

<h2>HTML Media Capture</h2>

<p>Since 9 May 2013, the <a href="http://www.w3.org/TR/2013/CR-html-media-capture-20130509/">HTML Media Capture specification</a> is a W3C Candidate Recommendation. It basically extends <code>&lt;input&gt;</code> elements with a <code>capture</code> attribute.</p>

<blockquote><p>The <code>capture</code> attribute is a <code>boolean</code> attribute that, if specified, indicates that the capture of media directly from the device's environment using a media capture mechanism is preferred.</p></blockquote>

<p>Here is the HTML for image capturing:</p>

<pre><code class="xml">&lt;input type="file" accept="image/*" capture&gt;</code></pre>

<p>Capturing video is quite similar; you just need to set the <code>accept</code> attribute accordingly.</p>

<pre><code class="xml">&lt;input type="file" accept="video/*" capture&gt;</code></pre>

<p>And the story is the same for capturing audio:</p>

<pre><code class="xml">&lt;input type="file" accept="audio/*" capture&gt;</code></pre>

<p>For example, if you want to take a photo using the device camera and upload the image using an HTML form, this is all the code you need.</p>

<pre><code class="xml">&lt;form action="upload.htm" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="file" accept="image/*" capture&gt;
  &lt;input type="submit" value="Upload"&gt;
&lt;/form&gt;</code></pre>

<p>Easy, isn't it?</p>

<p>Android OS 3.0 was the first platform to provide HTML Media Capture support, via its default Android Webkit browser. Now HTML Media Capture is also supported by:</p>

<ul>
<li>Safari and Chrome Mobile for iOS 6+</li>
<li>Chrome Mobile for Android OS 3+</li>
<li>Firefox Mobile for Android OS 3+</li>
<li>Opera 16 for Android OS 3+</li>
</ul>

<p>Nonetheless some of them only partially implement the specification or implement an <a href="http://www.w3.org/TR/2012/WD-html-media-capture-20120712/">older W3C specification</a>, that makes the code above slightly different:</p>

<pre><code>&lt;input type="file" accept="image/*" capture="camera"&gt;
&lt;input type="file" accept="video/*" capture="camcorder"&gt;
&lt;input type="file" accept="audio/*" capture="microphone"&gt;</code></pre>

<p>Check <a href="http://mobilehtml5.org/">mobilehtml5.org</a> for current compatibility information.</p>


<p>I have written a simple <a href="http://www.francesco.iovine.name/w3c/mediacapture/">HTML Media Capture demo</a>, which can be used to test and review HTML Media Capture on your favorite mobile browser. Here are some screenshots taken from Opera Mobile 16.</p>

<p>
	<a href="http://www.francesco.iovine.name/w3c/mediacapture/1.png"><img src="1.png" alt="1" style="width: 210px"></a>
	<a href="http://www.francesco.iovine.name/w3c/mediacapture/5.png"><img src="5.png" alt="5" style="width: 210px"></a><br>
	<a href="http://www.francesco.iovine.name/w3c/mediacapture/2.png"><img src="2.png" alt="2" style="width: 210px"></a>
	<a href="http://www.francesco.iovine.name/w3c/mediacapture/3.png"><img src="3.png" alt="3" style="width: 210px"></a>
	<a href="http://www.francesco.iovine.name/w3c/mediacapture/4.png"><img src="4.png" alt="4" style="width: 210px"></a>
</p>

<p>Here are some considerations, which I would hope to see changed in the future:</p>

<ul>
<li>First of all, I would expect different default labels from <i>Choose File</i> and <i>No file chosen</i>, and the possibility to customize them.</li>
<li>I would expect specifying the <code>capture</code> attribute to show the camera directly, rather than having to navigate through the dialog boxes above.</li>
<li>Actually, it seems that current implementations don’t rely on the <code>capture</code> attribute at all, but only on the <code>type</code> and <code>accept</code> attributes: the browser displays a dialog box in which the user can choose where the file has to be taken, and the <code>capture</code> attribute is not taken into consideration. For example, iOS Safari relies on the <code>accept</code> attribute (not <code>capture</code>) for images and videos (not audio). Even if you don't use the <code>accept</code> attribute, the browser will let you choose between "Take Photo or Video" and "Choose Existing" (thanks to <a href="https://twitter.com/firt">@firt</a> for pointing this out).</li>
<li>Audio capture does not trigger the sound recorder with Firefox Mobile (I tried versions 20 and 21 beta for Android OS 4) and with Safari and Chrome for iOS 6 (I tried version 26)</li>
</ul>

<p>Another interesting aspect to consider is that before releasing iOS 6 Safari didn’t support <code>type="file"</code> at all; that is, it did not allow access to the filesystem. It’s only with iOS 6, released in September 2012, that Apple decided to open the doors to filesystem and media capturing.</p>

<p>It's also worth mentioning that if the browser does not support media capture, it will ask the user to select a media object from the file system instead. Graceful degradation for the win!</p>

<h2>Media Capture and Streams</h2>

<p>The <a href="http://www.w3.org/TR/mediacapture-streams/">Media Capture and Streams specification</a> is a W3C Working Draft, a joint deliverable created by the WebRTC and Device APIs Working Groups. Many refer to this specification as <i>getUserMedia</i>. It is a pretty new feature, which is partially supported only by Opera Mobile Classic at the moment.</p>

<p>Using this technology, accessing multimedia streams (video, audio, or both) from local devices (video cameras, microphones, web cams) should now be possible without browser plugins, which will allow easy real time communication between anyone with a supporting web browser.</p>

<p>The code is quite easy to understand.</p>

<pre><code class="javascript">navigator.getUserMedia(
	constraints,
	successCallback,
	errorCallback
);</code></pre>

<p>The <code>getUserMedia</code> method takes 3 arguments:</p>

<ul>
<li><code>constraints</code>, a JavaScript object that defines the tracks to be used (audio, video)</li>
<li><code>successCallback</code>, the function called if the user allows access to the media input device requested by the web application. It takes a <code>LocalMediaStream</code> object as an argument, which represents streams of media data, and provides a <code>stop</code> method, used to stop the stream.</li>
<li><code>errorCallback</code>, the function that is invoked if the user denies permission or if there is a failure in finding valid tracks.</li>
</ul>

<p>After calling <code>navigator.getUserMedia</code> the user is asked for permission to let the browser access the camera or the microphone.</p>

<p>Now let’s look at a quite simple example in which the <code>stop()</code> method is used.</p>

<pre><code class="javascript">var constraints = {
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
);</code></pre>

<p>I simply added an event listener to a button inside the success callback, which activates the <code>stop()</code> method, providing an easy way to stop the stream.</p>

<h3>Taking a photo</h3>

<p>In the following example I have used <code>getUserMedia</code> to take a photo. To do this, I had to capture a video from the device’s camera, load the stream in an HTML5 <code>&lt;video&gt;</code> element, and then wire up a button with image capture functionality.</p>

<p>Let’s look at the code in detail. This is the HTML: there’s a <code>&lt;video&gt;</code> element with the <code>autoplay</code> attribute set, an empty <code>&lt;img&gt;</code> tag into which I will put the photo, a <code>&lt;canvas&gt;</code>, and the Capture button.</p>

<pre><code class="xml">&lt;video autoplay&gt;&lt;/video&gt;
&lt;img src=""&gt;
&lt;canvas style="display:none;"&gt;&lt;/canvas&gt;
&lt;button&gt;Capture&lt;/button&gt;
</code></pre>

<p>The <code>capture</code> function is called when the DOM is ready; its parameters are the JavaScript DOM objects of the tags defined above.</p>

<pre><code class="javascript">function capture(video, canvas, image, snapshotButton) {

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

}</code></pre>

<p>If the user grants access to the camera, a blob URL is created from the stream and used as the <code>src</code> attribute of the <code>&lt;video&gt;</code> element, so that the HTML5 video object starts reproducing the stream from the camera. By clicking on the <code>snapshotButton</code>, the <code>takePhoto</code> function is called, resulting in our <code>&lt;canvas&gt;</code> capturing a still image from the video. The image is then converted to a <code>dataUrl</code> in order to fill the <code>src</code> attribute of the <code>&lt;img&gt;</code> element and display the photo.</p>

<p>A <a href="http://www.francesco.iovine.name/w3c/mediacapture/">live demo of the Media Capture and Streams example</a> can be found on my web site. More advanced <code>getUserMedia</code> examples can be found at <a href="http://shinydemos.com/getusermedia/">shinydemos.com</a>.</p>

<p>In order to natively support the use case of <a href="https://dvcs.w3.org/hg/dap/raw-file/tip/media-stream-capture/scenarios.html#take-a-picture">taking a photo via JavaScript</a>, the <a href="http://www.w3.org/2009/dap/#mediacapture">W3C Media Capture Task Force</a> started approaching this scenario as follows:</p>

<blockquote>
<p>A common usage scenario of local device capture is to simply "take a picture". The hardware and optics of many camera-devices often support video in addition to photos, but can be set into a specific "camera mode" where the possible capture resolutions are significantly larger than their maximum video resolution.</p>
<p>The advantage to having a photo-mode is to be able to capture these very high-resolution images (versus the post-processing scenarios that are possible with still-frames from a video source).</p>
<p>Capturing a picture is strongly tied to the "video" capability because a video preview is often an important component to setting up the scene and getting the right shot.</p>
<p>Because photo capabilities are somewhat different from those of regular video capabilities, devices that support a specific "photo" mode, should likely provide their "photo" capabilities separately from their "video" capabilities.</p>
<p>Many of the considerations that apply to video capture also apply to taking a picture.</p>
<p>Issues</p>
<ul>
<li>What are the implications on the device mode switch on video captures that are in progress? Will there be a pause? Can this problem be avoided?</li>
<li>Should a "photo mode" be a type of user media that can be requested via getUserMedia?</li>
</ul>
</blockquote>

<p>In March 2012, a simple image capture API that extends <code>getUserMedia</code>’s functionality <a href="http://lists.w3.org/Archives/Public/public-media-capture/2012Mar/0008.html">was proposed</a>. In February 2013, an alternative proposal based on a new <code>ImageCapture</code> object <a href="http://lists.w3.org/Archives/Public/public-media-capture/2013Feb/0059.html">popped up</a> and in April, after some discussions, the need for a dedicated Image Capture specification has been recognized, which would allow us to take a picture without needing to use a video and a <code>&lt;canvas&gt;</code> element! On 9 July 2013 the W3C finally published the <a href="http://www.w3.org/TR/2013/WD-image-capture-20130709/">Mediastream Image Capture’s First Public Working Draft</a>.</p>

<p>This is how the code would appear.</p>

<pre><code class="javascript">function capture(captureButton, image) {

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
</code></pre>


<p>This way, it would be enough to instantiate an <code>ImageCapture</code> object and call the <code>takephoto</code> method on it. A <code>photo</code> event would be fired with a <code>BlobEvent</code> containing the captured image, so that my <code>showImage</code> function would create a URL directly from the blob object and display the image.</p>

<p>In the <a href="http://www.w3.org/2009/dap/#mediacapture">W3C Media Capture Task Force</a>, there’s also an interesting debate about photo settings which likely will be part of another article, along with the <a href="http://www.w3.org/TR/mediastream-recording/">MediaStream Recording API</a>.</p>

<p>One thing to bear in mind is that <strong>the syntax  is still under discussion</strong>, so it's likely to change in the near future.</p>

<h2>Summary</h2>

<p>Media Capture opens the door to a number of scenarios for web applications, especially for mobile devices. Think of capturing, adding effects and uploading media on the fly. Think of real-time communication, recording, surveillance. Think of augmented reality! There's still a lot of work to do with W3C specifications and mobile browser compatibility, but I'm sure we will see the light at the end of the tunnel very soon!</p>
