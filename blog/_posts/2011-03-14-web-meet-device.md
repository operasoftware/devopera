---
layout: post
title: Web, meet the <device> element (and orientation events)
authors:
- richtr
tags:
- orientation
- W3C
- whatwg
- device
- mobile
- html
- coreblog
layout: article
---
<p>Recently we&#39;ve been prototyping on Opera Mobile for Android to add support for both the HTML <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#devices" rel="nofollow" target="_blank">&lt;device&gt;</a> element and the W3C&#39;s proposed <a href="http://dev.w3.org/geo/api/spec-source-orientation.html" rel="nofollow" target="_blank">orientation events</a> specification.<br/><br/>In our first internal build, web developers are able to access, display and interact in real-time with a user&#39;s web camera using native HTML features. ... </p><!--more--><strong><span style="color: red">This information is out of date. For the latest information, please refer here: <a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview" target="_blank">http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview</a></span></strong>

<span style="font-size: 160%">The &lt;device&gt; element</span>

Developers are able to request a real-time video stream of the device&#39;s back-facing camera. The resulting camera stream may be displayed in any web page by assigning the device element&#39;s <span style="font-family: courier new">data</span> attribute to a HTML <span style="font-family: courier new">&lt;video&gt;</span> element.

The simple example below demonstrates how our implementation of the HTML <span style="font-family: courier new">&lt;device&gt;</span> element can be used to display the web camera in a web page:

<pre>&lt;!DOCTYPE html&gt;
&lt;h1&gt;Simple web camera display demo&lt;/h1&gt;
&lt;device type=&quot;media&quot;/&gt;
&lt;video autoplay&gt;&lt;/video&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
var device = document.getElementsByTagName(&#39;device&#39;)[0],
    video = document.getElementsByTagName(&#39;video&#39;)[0];
device.addEventListener(&#39;change&#39;, function() {
  video.src = device.data;
}, true);
&lt;/script&gt;
</pre>
<span style="font-size: 140%">Opera&#39;s implementation</span>

Currently, the device element&#39;s <span style="font-family: courier new">change</span> event is triggered when the page is loaded or when a dynamic HTML device element is created in script and appended to the document. In the future we will be considering different user experiences to ensure that the user can opt-in and authorize the sharing of their web camera with a web page. In the absence of this user opt-in functionality, we have currently chosen to disable access to any Stream pixel data via a HTML <span style="font-family: courier new">&lt;canvas&gt;</span> element.

In addition to the limitations above, keen observers will note that we have simplified the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#stream" target="_blank">proposed Stream interface</a> by not implementing its proposed methods and attributes. By doing this we were still able to provide the core functionality of the <span style="font-family: courier new">&lt;device&gt;</span> element without unnecessarily exposing a URI. As demonstrated above, the Stream object itself should instead be assigned directly to a video element&#39;s <span style="font-family: courier new">src</span> attribute. When a video element&#39;s <span style="font-family: courier new">src</span> parameter has been assigned a Stream object and that attribute is subsequently queried the result is a reserved, though unresolvable, URI of <span style="font-family: courier new">about:streamurl</span>.

While prototyping with <span style="font-family: courier new">&lt;device&gt;</span> we discovered some inherent problems with using a HTML element. Although our initial implementation in this build does not provide any native user interface for the <span style="font-family: courier new">&lt;device&gt;</span> element, the element&#39;s design would require native user interface components to be inserted in to a web page in order to allow the user to initiate and grant access to their devices.  From experience with form controls, we know that this can be sub-optimal for designers, as it limits their ability to customize the controls. We feel a better approach is to allow authors to create their own user interfaces and provide an API that provides the same functionality.  Therefore, we welcome and will continue prototyping on the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#video-conferencing-and-peer-to-peer-communication" target="_blank">latest changes</a> introduced in to the WHATWG&#39;s HTML draft.

<span style="font-size: 160%">Orientation events</span>

Here&#39;s an example of using orientation events to create a simple compass:

<pre>&lt;!DOCTYPE html&gt;
&lt;h1&gt;Simple compass demo&lt;/h1&gt;
&lt;canvas id=&quot;arrow&quot; width=&quot;480&quot; height=&quot;480&quot;&gt;&lt;/canvas&gt;
&lt;p id=&#39;orient&#39;&gt;&lt;/p&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
window.addEventListener(&#39;deviceorientation&#39;, function(evt) {
  var arrow = document.getElementById(&#39;arrow&#39;);
  var ctx = arrow.getContext(&#39;2d&#39;);
  ctx.clearRect(0,0,480,480);

  alpha = -Math.PI *(evt.alpha/180.0);

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
  orient.innerHTML = &quot;(&quot; + evt.alpha + &quot;, &quot; + evt.beta + &quot;, &quot; +
                         evt.gamma + &quot;)&quot;;
}, true);
&lt;/script&gt;</pre>
<span style="font-size: 160%">Next steps</span>

We&#39;re still at the very beginning of the long road to ubiquitous web standards support for accessing the user&#39;s web camera and microphone in the browser. In the coming weeks and months we plan to continue developing and releasing updates related to these technologies. 

We plan to:

<ul class="bullets"><li>Release a public Android build for developers.</li><li>Add support for other major mobile and desktop platforms.</li><li>Continue to actively participate in the related standards process to ensure this functionality becomes ubiquitous across the whole web and available in all browsers and web runtimes.</li><li>Support microphone streams and allow assignment of those streams to <audio> elements.</audio></li><li>Build user interfaces, both on desktop and mobile, that enable the user to explicitly opt-in to web camera sharing and opt-out or modify their web camera sharing once initial authorization has been provided to a web page.</li><li>Prototype on whether the derived user experiences for authorizing web cam access are better exposed as a JavaScript API or as an HTML <span style="font-family: courier new">&lt;device&gt;</span> element.</li><li>Actively participate in the <a href="http://www.w3.org/2010/12/webrtc-charter.html" target="_blank">W3C RTC-Web Activity</a> to provide webcam and microphone streaming capabilities across the web.</li><li>Prototype on how we can expose other aspects of the local device (e.g. mounted file systems) to end users in a privacy-secure way.</li></ul>
Our current prototyping demonstrates one well-known method for web camera access although the methods used to access device functionality (and to a lesser extent, orientation events) *will* change significantly before they are adopted as ubiquitous web standards.

We&#39;ll be releasing a build shortly. In the mean time please give us your feedback in the comments below!
