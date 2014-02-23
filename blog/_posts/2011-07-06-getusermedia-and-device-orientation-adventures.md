---
title: '`getUserMedia` and Device Orientation Adventures'
authors:
- shwetank-dixit
tags:
- getusermedia
- deviceorientation
- gyroscope
- camera
- opera-mobile
- android
- odin
layout: post
---
<p>Opera a while back had released an <a href="http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk" target="_blank">experimental android build</a>, with support for getUserMedia and Device Orientation support. The stuff is really really cool, and is one of the major things which will help close the gap between the capabilities of native and web applications on mobile. See the <a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview" target="_blank">post on the core concerns blog about these new addtions</a> for more information and demos.</p>

<h2>Whats so cool about it?</h2>

<p>You know how people who say that native apps are always better than web apps on mobile, because native apps can have access to certain device features like the camera, or the gyroscope? Well, thats no longer the domain of native apps anymore. </p>


<h2>Demo Time, Part 1: A simple camera app</h2>
<p>I made a simple camera app, which uses <code>getUserMedia</code> to access the camera, and the <code>video</code> tag to stream on the screen. There is a button, and upon clicking it, it takes a snapshot of it, and posts it on a <code>canvas</code> element. The first thing I do is:</p>

<pre>if (navigator.getUserMedia){
 	navigator.getUserMedia(&#39;video&#39;, v_success, v_error);
 } else{
 	not_supported();
 }</pre>

<p>If the browser supports access to the camera, then the success function is called, in this case <code>v_success()</code>. Its in this function that we take the video stream from the camera and associate it with the <code>video</code> element. </p>



<pre>var video_element = document.querySelector(&#39;video&#39;);
...
function v_success(stream){
 	video_element.src = stream;
}</pre>

<p>Its that simple! Now you have a the output of your camera  inside the page. But we want to do more. We want to create a button, which upon click, takes a snapshot of the camera stream, and outputs it to a canvas element, thereby taking our picture.</p>

<p>Lets get the button and add a click event handler:</p>

<pre>var button = document.querySelector(&#39;#button&#39;);
button.addEventListener(&#39;click&#39;,snapshot, false);</pre>

<p>So when the button is clicked, the <code>snapshot()</code> function is called. Here we take the video, and use it to draw the current snapshot of the video onto the canvas using the <code>drawImage()</code> method.</p>

<pre>function snapshot(){
 	var c = document.querySelector(&#39;canvas&#39;);
 	var ctx = c.getContext(&#39;2d&#39;);
 	var cw = c.clientWidth;
 	var ch = c.clientHeight;
 	ctx.drawImage(video_element, 0, 0, cw, ch);
 } </pre>

<p>This takes the current snapshot of the <code>video</code> element and puts it in the <code>canvas</code> element, thereby taking our picture. Check out the <a href="http://www.experimenting.in/exp/polaroids.htm" target="_blank">actual demo page</a>, and source code. Keep in mind, this is just a rough demo, and could be polished further, especially in terms of making it look better ... but that wasnt the focus here with this demo this time for me. Also, make sure to view this in a browser which supports getUserMedia, like our <a href="http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk" target="_blank">experimental build of Opera Mobile for Android.</a></p>

<h2>Demo Time, Part 2: Psychedelic web forms which clear on shake</h2>

<p>This is a demo, in which some values in a form are pre-entered, and if you shake the device you have, then it will clear the text entered in the form. It also changes the background color based on the orientation of your device....so you can just move your device around with your hand, and it will change the background color. Pretty cool, huh? It uses just some simple web forms (in my case, some html5 web forms but it could be any kind of web form) and the device orientation events as mentioned in the <a href="http://dev.w3.org/geo/api/spec-source-orientation.html" target="_blank">W3C Device Orientation Events spec</a>.</p>

<p>There are two key events to note here: The <code>deviceorientation</code> event and the <code>devicemotion</code> event. The former, as the name suggests, tells you about the orientation of the device in terms of alpha, beta and gamma values (a bit like the x, y and z x co-ordinates). The latter, once again as the name suggests, provides motion related information on the device. Whenever the device is moved, these events are fired. Now lets see some interesting stuff to do with them, starting with <code>deviceorientation</code>.</p>

<p>Here, we&#39;ll get the alpha, beta and gamma values of the current orientation of the device, and put those values as an RGB color as the background color. Which means, everytime the device is moved, there will be a different color applied to the background, based on the orientation of the device. Lets see how. First lets add an event listener to the window.</p>

<pre>window.addEventListener(&#39;deviceorientation&#39;, update, true);</pre>

<p>So whenever the device is moved, the <code>deviceorientation</code> event is fired, which calls the function <code>update()</code>. Our update() function looks like so:</p>

<pre>function update(event){ document.body.style.backgroundColor = &quot;rgb( &quot;+Math.abs(event.alpha)+&quot;, &quot;+Math.abs(event.beta)+&quot;, &quot;+Math.abs(event.gamma)+&quot; )&quot;; }</pre>

<p>Next comes the part where we need to clear the form if the device is shaken. The <code>devicemotion</code> event has a property called &#39;acceleration&#39; (for x, y and z axises). We&#39;ll just see if the acceleration is above a certain threshold, and if so, we figure that the device has been given a good enough shake ... and if so, then we&#39;ll clear the form.</p>

<p>Lets first look at the event handler.</p>

<pre>window.addEventListener(&#39;devicemotion&#39;, update_dm, true);</pre>

<p>Now lets look at the <code>update_dm()</code> function</p>

<pre>function update_dm(event){
   var acc_x = Math.abs(event.acceleration.x);
   var acc_y = Math.abs(event.acceleration.y);
   var acc_z = Math.abs(event.acceleration.z);
 	 if ( (acc_x || acc_y || acc_z) &gt; 9.5){
 	      name.value = &quot;&quot;;
 	      email.value = &quot;&quot;;
 	      age.value = &quot;&quot;;
 }</pre>

<p>So there you have it. See the final <a href="http://www.experimenting.in/exp/gyroform.htm" target="_blank">demo of web forms which clear on shake</a> and look through the code. Once again, make sure to view this in a browser which supports device orientation, like our <a href="http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk" target="_blank">experimental build of Opera Mobile for Android.</a>.</p>
