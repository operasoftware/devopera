---
layout: post
title: Native webcam support and orientation events - technology preview
authors:
- richtr
tags:
- getUserMedia
- mobile
- html
- whatwg
- W3C
- orientation
- device
- coreblog
layout: article
---
<p><strong>UPDATE:</strong> We have released newer experimental builds with webcam support for both Opera Desktop on Mac/Linux/Windows and Opera Mobile on Android. You can get more information and download these builds <a href="http://dev.opera.com/articles/view/labs-more-fun-using-the-web-with-getusermedia-and-native-pages/" rel="nofollow" target="_blank">here</a>.<br/><br/>---<br/><br/>Last week we wrote a blog post discussing our internal prototyping of <a href="http://my.opera.com/core/blog/2011/03/14/web-meet-device" rel="nofollow" target="_blank">web camera streaming in the browser</a>. On the very same day, the proposed standard interface on which that was built <a href="http://html5.org/tools/web-apps-tracker?from=5944&amp;to=5945" rel="nofollow" target="_blank">changed considerably</a>. <br/><br/>This week we are pleased to announce the release an updated preview build of <a href="http://www.opera.com/mobile/" rel="nofollow" target="_blank">Opera Mobile for Android</a> enabling web developers to access and interact natively with a device&#39;s webcam via JavaScript. This build has been entirely re-based on the new standards proposal introduced last week so it&#39;s goodbye to the <span style="font-family: courier new">&lt;device&gt;</span> element and a big warm hello to the <span style="font-family: courier new">getUserMedia</span> JavaScript API. ... </p><!--more--><p>In addition to web camera streaming, Opera is also previewing support for the draft <a href="http://dev.w3.org/geo/api/spec-source-orientation.html" target="_blank">W3C Orientation Events</a> specification. These capabilities open up some exciting possibilities for the future of the web itself.</p>

<p>To get started, grab the <a href="http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk" target="_blank">Android build</a> and follow the installation instructions below:</p>

<ol><li>Go to the Android settings and ensure that &quot;Unknown sources&quot; (Allow install of non-Market application) is allowed.</li><li>Download the build (.apk) from the <a href="http://people.opera.com/richt/release/build/Opera_Mobile_11_LABS_device_orientation_preview_20110323.apk" target="_blank">provided location</a>. Alternatively, you can download the build with a desktop browser, save it on a device, and install it using any available file manager.</li><li>To launch this technology preview, find the installed Android application called &quot;Opera Mobile - Device/Orientation demo&quot;.</li></ol>
<p>To navigate back to this blog post, we added a camera icon on the Opera Speed Dial that will direct you back to this URL as a jumping off point for exploring <a href="http://people.opera.com/richt/release/demos" target="_blank">more demos</a>.</p>

<p>This build will not replace the standard version of Opera Mobile installed on your Android device. Furthermore, this build supports remote debugging via <a href="http://www.opera.com/dragonfly/" target="_blank">Opera Dragonfly</a>; please refer to <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/" target="_blank">Dev.Opera</a> for more instructions.</p>

<span style="font-size: 160%">Interacting with the camera</span>

<p>Developers are able to request a real-time video stream of the device&#39;s back-facing camera. The resulting camera stream may be displayed in any web page by assigning the success callback&#39;s return parameter to a HTML <span style="font-family: courier new">&lt;video&gt;</span> element.</p>

<p>The simple example below demonstrates how this technology can be used to display the web camera in a web page:</p>

<pre>&lt;!DOCTYPE html&gt;
&lt;h1&gt;Simple web camera display demo&lt;/h1&gt;
&lt;video autoplay&gt;&lt;/video&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
var video = document.getElementsByTagName(&#39;video&#39;)[0], 
       heading = document.getElementsByTagName(&#39;h1&#39;)[0];

if(navigator.getUserMedia) {
  navigator.getUserMedia(&#39;video&#39;, successCallback, errorCallback);
  function successCallback( stream ) {
    video.src = stream;
  }
  function errorCallback( error ) {
    heading.textContent = 
        &quot;An error occurred: [CODE &quot; + error.code + &quot;]&quot;;
  }
} else {
  heading.textContent = 
      &quot;Native web camera streaming is not supported in this browser!&quot;;
}
&lt;/script&gt;
</pre><span style="font-size: 90%">(<a href="http://people.opera.com/richt/release/demos/device" target="_blank">live demo</a>)</span>

<p>The code above will render as follows:</p>

<span class='imgcenter'><img alt='' src='/blog/webcam-orientation-preview/coreconcerns-device1.png' /></span> 
<p>More simple live web camera demos are available <a href="http://people.opera.com/richt/release/demos/device" target="_blank">here</a>.</p>

<span style="font-size: 120%">Opera&#39;s implementation</span>

<p>We have simplified the proposed <span style="font-family: courier new">GeneratedStream</span> interface by not implementing its proposed methods and attributes. The Stream object returned in the success callback should be assigned directly to a video element&#39;s <span style="font-family: courier new">src</span> attribute. When a video element&#39;s src parameter has been assigned a Stream object and that attribute is subsequently queried the attribute returns the reserved, though unresolvable, URI of <span style="font-family: courier new">about:streamurl</span>.</p>

<p>We are currently in the process of considering different user experiences to ensure that the user can opt-in and authorize the sharing of their web camera with a web page. In the absence of this user opt-in functionality, we have currently chosen to disable access to any Stream pixel data via a HTML &lt;canvas&gt; element in this preview build. Developers can, however, override this restriction for prototyping purposes by entering <span style="font-family: courier new">opera:config</span> in the URL bar, selecting &#39;Security Prefs&#39; and then checking the option to &#39;Allow Camera to Canvas Copy&#39; followed by &#39;Save&#39;.</p>

<span style="font-size: 160%">Interacting with device orientation</span>

<p>Here&#39;s an example of using orientation events to create a simple compass:</p>

<pre>&lt;!DOCTYPE html&gt;
&lt;h1&gt;Simple compass demo&lt;/h1&gt;
&lt;canvas id=&quot;arrow&quot; width=&quot;480&quot; height=&quot;480&quot;&gt;&lt;/canvas&gt;
&lt;p id=&#39;orient&#39;&gt;&lt;/p&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
function update(evt){
  var arrow = document.getElementById(&#39;arrow&#39;);
  var ctx = arrow.getContext(&#39;2d&#39;);
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

  var orient = document.getElementById(&#39;orient&#39;);
  orient.innerHTML = &quot;(&quot; + evt.alpha + &quot;, &quot; + evt.beta + &quot;, &quot; + evt.gamma + &quot;)&quot;;
}
window.addEventListener(&#39;deviceorientation&#39;, update, true);
&lt;/script&gt;</pre><span style="font-size: 90%">(<a href="http://people.opera.com/richt/release/demos/orientation/basic/orientation_compass.html" target="_blank">live demo</a>)</span>

<p>The code above will render as follows:</p><span class='imgcenter'><img alt='' src='/blog/webcam-orientation-preview/coreconcerns-device2.png' /></span> 
<p>We have also created a few other <a href="http://people.opera.com/richt/release/demos/orientation" target="_blank">live orientation demos</a> that you should check out.</p>

<span style="font-size: 160%">Next steps</span>

<p>It is likely that the standards around web camera access and streaming (and to a lesser extent, orientation events) will continue to evolve before this technology can become ubiquitous on the web. That&#39;s what happens <a href="http://my.opera.com/haavard/blog/2011/03/16/scrapped" target="_blank">when you&#39;re on the bleeding edge of technology</a>. It&#39;s where we like to be.</p>

<p>We plan to:</p>

<ul class="bullets"><li>Add support for other major mobile and desktop platforms.</li><li>Continue to actively participate in the related standards process to ensure this functionality becomes ubiquitous across the whole web and available in all browsers and web runtimes.</li><li>Support microphone streams and allow assignment of those streams to <audio> elements.</audio></li><li>Build user interfaces, both on desktop and mobile, that enable the user to explicitly opt-in to web camera sharing and opt-out or modify their web camera sharing once initial authorization has been provided to a web page.</li><li>Continue prototyping towards enabling peer-to-peer audio and video communications in open web technologies.</li><li>Prototype on how we can expose other aspects of the local device (e.g. mounted file systems) to end users in a privacy-secure way.</li></ul>
<p>Our current prototyping demonstrates one well-known method for web camera access although the methods used to access device functionality (and to a lesser extent, orientation events) *will* change significantly before they are adopted as ubiquitous web standards.</p>

<p><strong><span style="color: red">Disclaimer: This build is of pre-production quality and, therefore, might contain defects including, but not limited to, instabilities and crashes. In fact, it may not work at all. The features included in this build might be different from any final standards implementation.</span></strong></p>

<p>Give us your feedback in the comments below. We look forward to hearing about the great demos and services you come up with!</p>
