Title: The W3C device orientation API: detecting orientation and acceleration
----
Date: 2012-06-28 09:01:13
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introduction</h2>

<p>For a long time, there was talk of native apps having an advantage over web apps on mobile because native apps can utilise native device capabilities, for example the gyroscope and accelerometer. However, now you can do that using normal web pages too, thanks to the <a href="http://dev.w3.org/geo/api/spec-source-orientation.html">W3C Device Orientation specification</a>.</p>

<p>Using device orientation, we can determine the orientation of the device as well as gather information about its movement. This information is valuable in certain types of applications, such as games that require the user to tilt the device in some way.</p>

<p>In this article we&#39;ll look at the basics of how device orientation works, along with some simple examples.</p>

<h2>Our Co-ordinate system</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/715-the-w3c-device-orientation-api-detecting-orientation-and-acceleration/device-axes.png" alt="explanation of co-ordinate system" /></p>
<p class="caption">Figure 1: A diagram of the coordinate system used by device orientation.</p>

<p>We need a frame of reference to compare the change in direction and orientation whenever a device is moved. For this purpose, we&#39;ll assume a standard XYZ co-ordinate system. If you get your device and put it flat on a level surface like a table, with the screen facing up, you can imagine the X axis running from side to side (left to right) on the device (cutting the space horizontally into a lower half and an upper half), the Y axis running from bottom to top (cutting the space vertically into a left half and a right half), and the Z axis being a line running from the surface of the screen up to the sky. This axis system is illustrated in Figure 1.</p>

<p>Now that we have the co-ordinate system in place, we can make sense of rotating the device. Device orientation defines three types of rotation, which are as follows:</p>

<ul>
<li><p><strong>Alpha:</strong> The amount of rotation around the Z axis is known as alpha. To better understand it, consider the example of a set of helicopter blades rotating. They are not going up or down, or moving to the side. They are just rotating along the Z-axis by &#39;alpha&#39; degrees per microsecond. The range is from 0 to 360 degrees.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/715-the-w3c-device-orientation-api-detecting-orientation-and-acceleration/device-alpha.png" alt="Device rotated along Z axis" /></p>
<p class="caption">Figure 2: Device rotated along Z axis.</p>
</li>

<li>
<p><strong>Beta:</strong> The amount of rotation around the X-axis is known as beta. For example, when a plane is taking off from the runway, it is going in a straight line but in an upward direction. In that case, it is turning along the X-axis. The range is from -180 to 180 degrees.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/715-the-w3c-device-orientation-api-detecting-orientation-and-acceleration/device-beta.png" alt="Device rotated along X axis" /></p>
<p class="caption">Figure 3: Device rotated along X axis.</p>
</li>

<li>
<p><strong>Gamma:</strong> The amount of rotation around the Y-Axis is known as gamma. For example, if a plane is going straight (with wings parallel to the ground), but then wants to make a turn, it rotates with one wing moving towards the ground and the other wing moving further away. The range is from -90 to 90 degrees.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/715-the-w3c-device-orientation-api-detecting-orientation-and-acceleration/device-gamma.png" alt="Device rotated along Y axis" /></p>
<p class="caption">Figure 4: Device rotated along Y axis.</p>
</li>
</ul>

<h2>The <code>deviceorientation</code> event</h2>

<p>Device orientation specifies a new event called the <code>deviceorientation</code> event. Using this, we can figure out the tilt of the device in terms of alpha, beta and gamma.</p>

<p>Not all devices (especially laptops) support device orientation, so it is prudent to first check whether the device supports it before going further:</p>

<pre><code>if (window.DeviceOrientationEvent) {
  // your code
} else {
  console.log(&#39;device orientation not supported&#39;);
  // add fallback code here, as necessary
}</code></pre>

<p>We can now add an event listener, so that every time the device is rotated, it fires the event and we can process it using a function:</p>

<pre><code>window.addEventListener(&#39;deviceorientation&#39;, capture_orientation, false);</code></pre>

<p>Inside the <code>capture_orientation</code> function, we can now process the rotation of the device:</p>

<pre><code>function capture_orientation (event) {
 var alpha = event.alpha;
 var beta = event.beta;
 var gamma = event.gamma;
 console.log(&#39;Orientation - Alpha: &#39;+alpha+&#39;, Beta: &#39;+beta+&#39;, Gamma: &#39;+gamma);
}</code></pre>

<p>From the above function we can see how easy it is to get the alpha. beta and gamma values of the device rotation.</p>

<p>Take a look at our <a href="dodemo.htm">simple device orientation demo page</a>. This demo changes the background color of the page as you move it, as well as showing the alpha, beta and gamma values of the device&#39;s orientation.</p>

<h2>The <code>devicemotion</code> event</h2>

<p>We also have an event to help us determine how fast the device is accelerating: the <code>devicemotion</code> event taps into the device&#39;s accelerometer and determines its acceleration along the X, Y and Z axes.</p>

<p>The first thing, as usual, is to check whether the device supports the <code>devicemotion</code> event:</p>

<pre><code>if (window.DeviceMotionEvent) {
// proceed with the code
} else {
console.log(&#39;This device does not support devicemotion&#39;);
}</code></pre>

<p>Now we&#39;ll add an event listener like so:</p>

<pre><code>window.addEventListener(&#39;devicemotion&#39;, capture_acceleration, false);</code></pre>

<p>Then we&#39;ll write a function for capturing the acceleration. Keep in mind that we have a way of determining the acceleration of the device with and without the effects of gravity on it. The former is determined using the <code>accelerationIncludingGravity</code> property, and the latter using the <code>acceleration</code> property:</p>

<pre><code>function capture_acceleration (event) {
  var acceleration_x = event.acceleration.x;
  var acceleration_y = event.acceleration.y;
  var acceleration_z = event.acceleration.z;

  var acceleration_g_x = event.accelerationIncludingGravity.x;
  var acceleration_g_y = event.accelerationIncludingGravity.y;
  var acceleration_g_z = event.accelerationIncludingGravity.z;
}</code></pre>

<p>The measurements are in meters per second squared (ms<sup>2</sup>) and — as you can tell from the code above — there are properties available containing the acceleration along the X, Y, and Z axes. </p>

<p>Take a look at our — *ahem* — <a href="laser-sword-demo.htm">&quot;laser-sword&quot; demo</a>, which uses the <code>devicemotion</code> event and some nice swooshy sound clips embedded using HTML5 <code>&lt;audio&gt;</code> elements.</p>

<h2>Use cases and future possibilities</h2>

<p>Using the W3C device orientation spec, we can now have a web application determine the device&#39;s position and acceleration using JavaScript. This opens up a lot of possibilities that until now were not available to web apps.</p>

<p>Device orientation could also be used for gesture recognition. For example, a web-based music player could skip to the next song when the device is shaken at a certain speed, or you could use the same gesture to trigger an &quot;Undo&quot; command. Gestures are also great for games, and for accessibility: you could provide custom navigation gestures for people who find it hard to point and use their fingers on a touch phone.</p>

<h2>Cross browser issues</h2>

<p>Unfortunately, at this time there is a something of a <a href="http://lists.w3.org/Archives/Public/public-geolocation/2012Jun/0000.html">variance in the implementation of <code>device orientation</code></a> within various mobile browsers. We believe Opera Mobile&#39;s implementation is the most inline with the specification, followed by Firefox&#39;s implementation, which only differs in its calculation of <code>alpha</code> (it measures it clockwise instead of anti-clockwise — this can easily be normalized using some simple javascript) but otherwise is the same as Opera. Webkit-based mobile browsers like Mobile Safari and the Native Android browsers each calculate the position of alpha, beta and gamma in their own way. We hope future versions of those browsers release implementations more in line with the specification, so that developers can take advantage of device orientation in their web apps in an easier manner.</p>

<h2>Summary</h2>

<p><code>deviceorientation</code> and <code>devicemotion</code> provide cool new options for creating mobile apps, from games and augmented reality applications to normal applications that need an extra level of polish. The API is very simple, and it&#39;s easy for a developer to understand and start using it, today (cross browser issues not withstanding). Opera Mobile 12 and other major smartphone browsers already have support for it — it&#39;s a very promising technology and you should consider including it in your next project!</p>

<p class="note">Opera&#39;s Rich Tibbett has written a fantastic deviceOrientation example — see his <a href="http://people.opera.com/richt/release/demos/orientation/marinecompass/">Marine Compass demo</a>.</p>
