---
title: Playing With HTML5 Video & `getUserMedia` Support
authors:
- daniel-davis
intro: 'Building on the famous exploding video demo by Sean Christmann, we’re going to see how we can explode the video stream from a camera. With a few performance tweaks, this works surprisingly well both in desktop browser and on mobile devices.'
layout: article
---
<img src="html5-exploding-camera.jpg" width="400" height="300" alt="Use getUserMedia to make your head explode." style="float:right;padding-left: 10px;"/>

<p>You may have seen the impressive HTML5 experiment created by Sean Christmann involving a video that explodes at the click of a mouse. If not, we'd recommend that you have a look:</p>

<p><a href="http://www.craftymind.com/2010/04/20/blowing-up-html5-video-and-mapping-it-into-3d-space/">HTML5 exploding video demo</a></p>

<p>At the time, the boundaries of non-plugin video within a desktop browser were being explored and it caused a stir as an example of how video within the browser can be manipulated. The way he achieved the result was clever as he used two instances of the HTML5 canvas: a hidden one for painting and another visible one for manipulating. Sean must have been through a lot of trial and error and the lessons he learned are an interesting read.</p>

<p>Now that we have released a <a href="http://dev.opera.com/articles/view/getusermedia-access-camera-privacy-ui/">desktop build with getUserMedia support</a> to match our <a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview">Opera Mobile with camera support</a> for Android, we thought we'd have a go at converting his demo (with his permission) to work with either a webcam or a mobile device's built-in camera. The result can be seen here:</p>

<p><a href="http://people.opera.com/danield/html5/explode/">HTML5 exploding camera demo (bit.ly/democam)</a></p>

<p>Let's go through what we did to make the demo work with a camera both on desktop browsers as well as mobile devices.</p>

<h2>Use <code>getUserMedia</code> for the video source</h2>

<p>The original HTML code has a <code>&lt;video&gt;</code> element that uses two <code>&lt;source&gt;</code> elements to <a href="http://dev.opera.com/articles/view/introduction-html5-video/#codecs">enable two video formats to be available to browsers</a>. For camera use, we removed these <code>&lt;source&gt;</code> elements and replaced them with JavaScript code to use the camera as the video source. Incidentally, although we don't initially have a video source, we can still use the <code>autoplay</code> attribute so that the camera stream will be displayed without the user having to click anything.</p>

<pre><code>&lt;!-- HTML code --&gt;
&lt;video id="sourcevid" autoplay&gt;Put your fallback message here.&lt;/video&gt;</code></pre>

<pre><code>/* JavaScript code */
window.addEventListener('DOMContentLoaded', function() {
    // Assign the &lt;video&gt; element to a variable
    var video = document.getElementById('sourcevid');

    // Replace the source of the video element with the stream from the camera
    if (navigator.getUserMedia) {
        navigator.getUserMedia('video', successCallback, errorCallback);
        // Below is the latest syntax. Using the old syntax for the time being for backwards compatibility.
        // navigator.getUserMedia({video: true}, successCallback, errorCallback);
        function successCallback(stream) {
            video.src = stream;
        }
        function errorCallback(error) {
            console.error('An error occurred: [CODE ' + error.code + ']');
            return;
        }
    } else {
        console.log('Native web camera streaming (getUserMedia) is not supported in this browser.');
        return;
    }
}, false);</code></pre>

<p>That's it! In the demo code we added a more readable error message for users without camera support. Credit goes to <a href="http://richt.me/">Rich Tibbett</a> for this code.</p>

<p class="note">Note that we are checking for browser support of the <code>getUserMedia</code> method rather than checking which version of a particular browser the user is using. This is much more trouble-free and future-proof than parsing the user agent and trying to maintain a list of compatible browsers.</p>

<h2>Add touch support</h2>

<p>Although events such as <code>onclick</code> are understood by mobile browsers, using touch events is much more efficient and in this demo, we need as much efficiency as we can get. Firstly, we check to see if touch events are supported:</p>

<pre><code>// Create a boolean variable: true if touch is supported.
var isTouch = 'createTouch' in document;
</code></pre>

<p>Next, we use this boolean to override the <code>ontouchstart</code> event in touch-enabled devices and <code>onmousedown</code> in other environments. This means we only need to write one listener to fire our main function.</p>

<pre><code>
var outputcanvas = document.getElementById('output');
var mouse_down = (isTouch ? 'ontouchstart' : 'onmousedown');

outputcanvas[mouse_down] = function(event) {
    dropBomb(event, this);
};</code></pre>

<p>This is enough to get it to work, but in our demo we will also need the coordinates of the touch event. This is slightly different to getting mouse coordinates and this difference, if you're not aware, can cause a lot of head-scratching. Well, it did in my case! The cause is multi-touch support which means that each touch event has multiple coordinates, provided by the browser in a <code>touches</code> array. With an <code>if</code> statement such as the following, we can get the coordinates whatever browser we're dealing with:</p>

<pre><code>// Get the user's touch/mouse coordinates to explode the canvas
function dropBomb(event, obj) {
    event.preventDefault();
    var posx = 0;
    var posy = 0;
    var e = event || window.event;

    if (e.touches) {
        posx = event.touches[0].pageX;
        posy = event.touches[0].pageY;
    } else if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    var canvasX = posx-obj.offsetLeft;
    var canvasY = posy-obj.offsetTop;
    explode(canvasX, canvasY);
}</code></pre>

<h2>Speed, more speed!</h2>

<p>I was surprised at how fast desktop browsers handled the video manipulation but unlike Sean's original demo, we're also targetting mobile devices so we should strive for any performance improvement possible. Fortunately there are a couple of quick ways we can speed things up a bit. Firstly, we look for the most intensive part of the script and in this case, it's clearly the <code>processFrame()</code> function which is repeated every 33 milliseconds. Within this there is a <code>for</code> loop which loops through an array of tiles, calculating the length of the array with each iteration. Caching the array length at the start of the loop would be more efficient, like so:</p>

<pre><code>// Standard for loop
for(var i = 0; i &lt; tiles.length; i++){
    // Execute code
}

// Faster for loop with array length cached
for(var i = 0, len = tiles.length; i &lt; len; i++){
    // Execute code
}</code></pre>

<p>Any calls to <code>Math</code> methods are also time-consuming so we should to try to optimise these as well. One way is to simply cache the <code>Math</code> object in a global variable but we found this usually only gives a small improvement. A better approach would be to replace certain methods with more efficient versions if possible. In our <code>processFrame()</code> we're using <code>Math.abs()</code> a few times and there happens to be a faster way to achieve the same result:</p>

<pre><code>// Standard use of Math.abs
var a = Math.abs(x);

// Faster than Math.abs
function absolute(x) {
    return (x &lt; 0 ? -x : x);
}
var b = absolute(x);</code></pre>

<p>Finally, if we reference any object properties that are static, it's worth caching them in variables to get a further speed boost. For example, to adapt to various screen sizes we made the painting area (<code>PAINTRECT</code>) the same size as the browser window using <code>window.innerWidth</code> and <code>window.innerHeight</code>. This is unlikely to change during the demo (unless the user resizes the window) so we decided not to reference the <code>x</code>, <code>y</code>, <code>width</code> and <code>height</code> properties with each call of <code>processFrame()</code>. Instead, we can reference them once outside the recurring function and store them in a variable:</p>

<pre><code>var PAINTX = 0;
var PAINTY = 0;
var PAINTWIDTH = window.innerWidth;
var PAINTHEIGHT = window.innerHeight;

function processFrame() {
    // Some code
    draw.clearRect(PAINTX, PAINTY,PAINTWIDTH,PAINTHEIGHT);
    // Some more code
}</code></pre>

<p class="note">For performance testing, <a href="http://jsperf.com/">jsPerf</a> is an excellent resource, both for creating your own tests or running pre-made ones.</p>

<h2>Conclusion</h2>

<p>In converting Sean's demo to using a camera, it turns out it's very easy to simply replace the video's source with the camera's stream. This works well on desktop browsers with <code>getUserMedia</code> support but we went a bit further. The extra work we put in to our example is because in the 18 months since he wrote the original code, browser technology has progressed so that video within mobile web pages is now a reality. To provide the best experience possible for all users, it's worth making the extra effort to look after users on touch devices and to improve efficiency for lower-powered devices. I'm sure my code can be improved further so please let us know your suggestions and ideas in the comments.</p>

<p class="note">Note: You can find another fantastic camera demo, written by Mike Taylor, at his <a href="http://miketaylr.com/photobooth/">Photobooth page</a>. This makes great use of <code>getUserMedia</code> and <code>&lt;canvas&gt;</code>. Shwetank Dixit has also created a great <a href="http://people.opera.com/shwetankd/demos/warhol/warhol.htm"><code>getUserMedia</code> demo inspired by Andy Warhol</a>! There's also a <a href="http://people.opera.com/danield/webapps/instant-camera/">Polaroid-style getUserMedia demo</a>.</p>
