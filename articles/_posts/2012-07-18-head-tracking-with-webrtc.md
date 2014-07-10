---
title: Head Tracking With WebRTC
authors:
- audun-oygard
intro: 'The WebRTC standard allows supporting browsers to stream video and audio content directly from native devices such as a webcam. One rather exciting use case for WebRTC is head tracking — detecting the movement of your head (or other appendages) in relation to a webcam — which in turn allows us to create gesture-based controls. This article looks in depth at how head tracking can be implemented.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>The <a href="http://www.w3.org/TR/webrtc/">WebRTC standard</a> allows supporting browsers to stream video and audio content directly from native devices such as a webcam. One rather exciting use case for WebRTC is <em>head tracking</em> — detecting the movement of your head (or other appendages) in relation to a webcam — which in turn allows us to create gesture-based controls. We created a demo employing head tracking to coincide with the <a href="http://www.opera.com/browser/">Opera 12</a> release (this marked the first desktop browser to support camera access via the <code>getUserMedia</code> API) — <a href="http://www.shinydemos.com/facekat/">FaceKat</a>.  Please try it out if you haven't done so already!</p>

<p><img src="head-tracking-demo.jpg" alt="an image of the headtracking video demonstration in action - user using their head to move around a 3D object on screen"></p>
<p class="caption">Figure 1: head tracking video demonstration <a href="http://player.vimeo.com/video/44049736" title="Head tracking video demonstration">(see the video)</a>.</p>

<p>The demo in the video above (Figure 1) can be found on the <a href="http://auduno.github.com/headtrackr/examples/targets.html">headtrackr Github repo</a>, though note that this needs WebGL support as well. Headtrackr and FaceKat work best if your camera is mounted over your screen (like internal webcams on most laptops) and when your face is evenly lit. And of course you have to have <a href="http://caniuse.com/stream">a browser that supports <code>getUserMedia</code></a> and a computer with a webcam.</p>

<p>In this article I'll look at how the head tracking implementation works.</p>

<h2>Head tracking — the basic ingredients</h2>

<p>The JavaScript library I made to handle the face tracking in the above demos is available freely on Github — see <a href="http://github.com/auduno/headtrackr/">headtrackr.js</a>. My implementation of head tracking consists of four main parts (see Figure 2):</p>

<ul>
<li>a face detector</li>
<li>a tracking mechanism</li>
<li>a smoother</li>
<li>the head position calculation</li>
</ul>


<p><img src="figure3d.png" alt="how the head tracking process works - the textual explanation below explains this in detail"></p>
<p class="caption">Figure 2: How the head tracking process works.</p>

<p>For the face detection, we use an existing JavaScript library called <a href="https://github.com/liuliu/ccv">ccv</a>. This library uses a <a href="http://en.wikipedia.org/wiki/Viola%E2%80%93Jones_object_detection_framework">Viola-Jones type</a> algorithm (with <a href="http://liuliu.me/eyes/javascript-face-detection-explained/">some modifications</a>) for detecting the face, which is a pretty fast and reasonably precise face detection algorithm. However, it's not fast enough to detect the face in realtime. Another problem is that it's also not able to detect the face in all positions, for instance if the head is tilted or turned slightly away from the camera.</p>

<p>We therefore also use a more lightweight object tracking algorithm called <em>camshift</em>, which we initialize with the position of the face we detected. The camshift algorithm tracks any object in an image (or video) based on its colour histogram and the colour histogram of the surrounding elements — see <a href="http://www.cognotics.com/opencv/servo_2007_series/part_3/sidebar.html">How OpenCV's Face Tracker Works</a> for details. Our JavaScript implementation was ported from an <a href="http://www.libspark.org/browser/as3/FaceIt/trunk/src/org/libspark/faceit/camshift?rev=2813">ActionScript library called FaceIt</a>, with some modifications. You can <a href="http://auduno.github.com/headtrackr/examples/camshift.html">test the standalone camshift algorithm here</a>.</p>

<p>Though the camshift algorithm is pretty fast, it&#8217;s also a bit imprecise and tends to jump around a bit, which can cause annoying jittering of the face tracking. Therefore, we wanted to find a way to smooth out the movements of the tracking. Typically, a <a href="http://en.wikipedia.org/wiki/Kalman_filter">Kalman filter</a> would be used for this purpose, but any smoother will do; in our case we used <a href="http://en.wikipedia.org/wiki/Double_exponential_smoothing#Double_exponential_smoothing">double exponential smoothing</a> since it's faster to calculate. This roughly calculates the current position by a weighted average of the previous positions. Since the position at any time is then based on previous positions and not the current one, the smoother <em>will</em> introduce some lag to the movements, but this will generally only be noticeable for very sudden movements.</p>

<p>At this point, we now know the approximate position and size of the face in the image. In order to calculate the position of the head, we need to know one more thing — the field of view of the camera. Webcams have widely differing angles of &#8220;field of view&#8221;, which will affect the size and position of the face in the video (see Figure 3 for an illustration). To get around this, we estimate the &#8220;field of view&#8221; of the current camera by assuming that the user is sitting around 60 cms away from the camera at first initialization (which is a comfortable distance from the screen, at least for laptop displays), and then seeing how big a proportion of the image the face fills. This estimated &#8220;field of view&#8221; is then used for the rest of the head tracking session.</p>

<p><img src="fov_56_70.png" alt="An illustration of how different fields of view affect head position in face tracking"></p>
<p class="caption">Figure 3: An illustration of how different fields of view affect head position in face tracking (image courtesy of <a href="http://www.flickr.com/photos/freeparking/507248108/">D Flam</a>.)</p>

<p>Using this &#8220;field of view&#8221; estimate — and some assumptions about the average size of a person&#8217;s face — we can calculate the distance of the head from the camera by way of some trigonometry. The calculations are a bit convoluted, so I'll leave the details for <a href="#footnote-1">the footnotes</a>, but here's a figure to illustrate the gist of it.</p>

<p><img src="trig03.png" alt="a simple trigonometry illustration to show how we calculate the head-camera distance"></p>
<p class="caption">Figure 4: A simple trigonometry illustration to show how we calculate the head-camera distance.</p>

<p>Calculating the x- and y-position relative to the camera is a similar exercise. At this point we have the position of the head in relation to the camera. In the <a href="http://www.shinydemos.com/facekat/">FaceKat demo</a> we just used these positions as the input to a mouseEvent-type controller (since that's what the original demo, FastKat, used), which again controlled the camera in our model:</p>

<pre><code class="javascript">// this event listener picks up head tracking events and sets some variables
document.addEventListener("headtrackingEvent", function(e) {
  mouseX = e.x*20;
  mouseY = -e.y*20;
}, false);

... snip ...

// these variables are then used in the rendering loop to control the camera
camera.position.x += ( (mouseX/windowHalfX)*700 - camera.position.x ) * .08;
camera.position.y += ( -(mouseY/windowHalfY)*600 - camera.position.y ) * .08;

... snip ...</code></pre>

<h2>Going further to create head-coupled perspective</h2>

<p>If we want to go further to create the <a href="http://en.wikipedia.org/wiki/Head-coupled_perspective"><em>head-coupled perspective</em></a> seen in the Headtrackr example, we have to use the head positions to directly control the camera inside a 3D model. To get the completely correct perspective we also have to use an off-axis view (aka <em>asymmetric frustum</em>). This is because we want to counteract the distortion that arises when the user is looking at the screen from an angle, perhaps best explained by Figure 5.</p>

<p><img src="offaxisFigure.png" alt="diagram showing the concept of off-axis view"></p>
<p class="caption">Figure 5: The concept of off-axis view.</p>

<p>For our 3D-model, we used the excellent JavaScript library <a href="https://github.com/mrdoob/three.js/">three.js</a>, which allows us to set up a 3D model in the browser pretty fast without handling the low-level WebGL stuff. The library also includes the interface <em>camera.setViewOffset</em> for setting up displays spanning several monitors. What this actually does is serve up an off-axis view for each of the monitors separately, which means we can abuse this interface for our purposes. I'm sure there's cleaner ways to do this, but I didn't want to dig too deep into the internal workings of <em>three.js</em>. For the implementation details, take a look at <a href="https://github.com/auduno/headtrackr/blob/master/src/controllers.js">controller.js in the github repo</a>. For some more info on <em>three.js</em>, check out some of the excellent online tutorials, such as <a href="http://aerotwist.com/tutorials/getting-started-with-three-js/">Getting Started with three.js</a>.</p>

<p>Overall, the finished result works decently — at least if you have a good camera and even lighting. Note that the effect looks much more convincing on video, as in that case we have no visual cue as to the depth of the other objects in the scene; in real life our eyes are not so easily fooled.</p>

<h2>Webcam quality</h2>

<p>One of the problems I stumbled upon while working on this demo was that the quality of webcams varies widely. Regular webcams often have a lot of chromatic aberration on the edges of the field of view due to cheap lenses, which dramatically affects the tracking effectiveness outside the immediate centre of the video. In my experience the built-in cameras on Apple MacBooks had very little such distortion.</p>

<p>Most webcams also adjust brightness and white balance automatically, which in our case is not very helpful as it messes up the camshift tracking. Often the first thing that happens when video starts streaming is the camera starts to adjust white balance, which means that we have to check that the colours are stable before doing any sort of face detection. If the camera adjusts the brightness a lot after we&#8217;ve started tracking the face, there&#8217;s not much we can do except reinitialize the face detection.</p>

<h2>Summary</h2>

<p>Although head-coupled perspective might not be ready for any type of generic interaction via the webcam <em>yet</em>, it works fine with simple games like <a href="http://www.shinydemos.com/facekat/">FaceKat</a>. I&#8217;m sure there are many improvements that can make it more precise and fail-proof: the library and demos were patched together pretty fast, and there are several improvements that I didn&#8217;t get time to test out, such as:</p>

<ul>
<li>Tweaking the settings of the camshift algorithm</li>
<li>Using other tracking algorithms, such as <a href="http://www.robinhewitt.com/pubs/BayesShiftTracker.pdf">bayesian mean shift</a>, which also uses information about the background immediately surrounding the face</li>
<li>Using edge detection to further demarcate the edges of the face (though this might be a bit heavy on processing)</li>
<li>Using <code>requestAnimationFrame</code> instead of <code>setInterval</code>s</li>
<li>Using HSV components for the camshift algorithm (which the original camshift paper suggests) instead of RGB</li>
</ul>

<p>If you feel like implementing any of these, feel free to <a href="https://github.com/auduno/headtrackr">grab a fork</a>! Meanwhile, I&#8217;m pretty sure we&#8217;ll see many more exciting things turn up once WebRTC becomes supported across more browsers, check out <a href="https://vimeo.com/41666669">Eye Track Three Dee</a> for instance&#8230;</p>

<p>To give credit where credit is due, the inspiration for this demo was <a href="http://www.youtube.com/embed/Jd3-eiid-Uw">Head Tracking for Desktop VR Displays using the WiiRemote</a>. In this video, Johnny Chung Lee hacks a Wii remote to capture the motions of the user. Later on, some French researchers decided to try out the same thing without the Wii remote: see <a href="http://iihm.imag.fr/en/demo/hcpmobile/">3D displays on mobile devices: HCP</a>. Instead of motion sensors they used the front-facing camera of the iPad to detect and track the rough position of the head, with pretty convincing results. The result is available as an iPad app — <a href="http://iihm.imag.fr/francone/i3D/">i3D</a> — and can be seen in Figure 6:</p>

<p><img src="i3D-demo.jpg" alt="i3D is an iPad app that uses head tracking to pan around a 3D environment"></p>
<p class="caption">Figure 6: i3D is an iPad app that uses head tracking to pan around a 3D environment <a href="http://www.youtube.com/embed/19XZJa15hOs" title="i3D iPad app">(watch the video)</a>.</p>

<h3>Footnotes</h3>

<p id="footnote-1">[1]</p>

<p>The width of the field the camera captures is relative to how far away any object is, more precisely:</p>

<p><a href="mathml.html"><img src="mathml1.png"></a></p>

<p>which gives us:</p>

<p><a href="mathml.html"><img src="mathml2.png"></a></p>

<p>So what's the view width at the point where the face is? We know that the proportion of the screen the face will fill is given by:</p>

<p><a href="mathml.html"><img src="mathml3.png"></a></p>

<p>However, this is the same for pixels, so:</p>

<p><a href="mathml.html"><img src="mathml4.png"></a></p>

<p>And this gives us:</p>

<p><a href="mathml.html"><img src="mathml5.png"></a></p>

<p>Inserting this, we get:</p>

<p><a href="mathml.html"><img src="mathml6.png"></a></p>

<p>In our case viewwidth<em>px</em> is the width of the canvas, facewidth<em>px</em> is the width of the face on the canvas, and we assume facewidth<em>cm</em> is around 17 cm.</p>
