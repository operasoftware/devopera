Title: getUserMedia: accessing the camera and privacy UI
----
Date: 2012-01-09 10:17:35
----
Lang: en
----
Author: 
----
License: Creative Commons BSD License
----
License_url: http://creativecommons.org/licenses/BSD/
----
Text:

<p>In 2011, one of the most discussed aspects of HTML5 was whether web applications would &quot;kill&quot; native apps that are written for specific devices in platform-dependent languages. Two years ago, access to a device&#39;s Global Positioning System was only possible through native code; now, it&#39;s trivially easy to access via a Web app using the W3C Geolocation API.</p>
<p>Opera co-chaired the Geolocation Working Group, and today we&#39;re advancing the Web further towards feature-parity with native applications. We&#39;re not there yet, but we&#39;re getting closer.</p>  
<p>We were the first browser to   give developers JavaScript access to a device&#39;s media capture facilities on Android, and then on desktop. This latest desktop build adds a privacy UI.</p>
<p><a href="http://dev.w3.org/2011/webrtc/editor/getusermedia.html"><code>getUserMedia</code></a> began life as the <code>&lt;device&gt;</code> element in the HTML5 specification. It was renamed, and then rehoused with the W3C WebRTC Working Group. The spec allows access to camera and microphone, but this build accesses camera alone.</p>
<h2>Accessing the API</h2>
<p><code>navigator.getUserMedia</code> requires two arguments, and optionally a third. The first argument tells the device which media you require access to, and is passed as a JavaScript object. So, if you only require access to the microphone, the first argument would be <code>{audio: true}</code>; for video-chatting, you would use <code>{audio: true, video: true}</code>.</p>
<p>Which camera is used is left to the device: &quot;User agents are encouraged to default to using the user&#39;s primary or system default camera and/or microphone (as appropriate) to generate the media stream.&quot; </p>

<p>Devices with more than one camera generally have  a mechanism that allow the user to choose which one is used, so this gives the user control. Note also that the spec says &quot;User agents may allow users to use any media source, including pre-recorded media files.&quot;</p>
<p>The second argument is the <b>success callback</b> - the code to be executed assuming that the user allows access and the device supports your request. </p>
<p>There is an optional third argument. This is the <b>failure callback</b> - the code to be executed if something went wrong. It&#39;s optional, but only optional in the same way as washing your hands before you eat is optional: if you don&#39;t do it, you leave yourself open to all sorts of bugs and your mum will shout at you.</p>
<p>Of course, it&#39;s important to do feature detection before making an API call to ensure that the browser and device are capable, but even if feature detection is passed, there is still much that can cause failure: the user could deny permission; the user (or device) could turn off the camera via a hardware switch, for example.</p>
<p>So here&#39;s how we recommend you use the API:</p>
<pre>
<code>navigator.getUserMedia({audio: true, video: true}, success, error);

 function success(stream) {
  // ... use &#39;stream&#39; ...
  }
 
  function error(){
  //display fallback content
  }
</code>
</pre>
 
<h3>Changes from previous versions</h3>
<p>Older Opera.Labs getUserMedia implementations used an earlier version of the specification, in which the options were passed as a string rather than a JavaScript object. This Labs build supports the older version and the new version. We plan to remove support for the older syntax.</p>

<h2>User Experience</h2>
<p>Allowing a website access to the camera and microphone has obvious privacy implications. The <a href="http://dev.w3.org/geo/api/spec-source.html#security">Geolocation specification</a> requires that the user be informed which domain name is requesting access (because it may be in an iframe and therefore not corresponding with the address bar that a user can see). </p>
<p>The getUserMedia specification currently has nothing to say on this matter, but we are experimenting with a UI that will easily allow the user to see all permissions she has granted a particular site at once (camera, microphone, geolocation etc), as well as its security record. </p>
<p>Assume that you&#39;ve come to a site that wants media access. You&#39;ll see a notification callout, pointing to the address bar badge next  next to the URL, which tells you that the site is asking for camera access and asking you to confirm or deny. </p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/624-getusermedia-accessing-the-camera-and-privacy-ui/gum1c.gif" alt="notification callout" width="340" height="212" /></p>
<p class="caption">Figure 1: Notification callout when a site requires access to your camera</p>
<p>Information about the site&#39;s security record is provided by Netcraft and Phishtank. As with current desktop versions of Opera, clicking on the badge provides information about a site, and choosing &quot;details&quot; from the dialogue allows you to report a site for phishing or fraud.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/624-getusermedia-accessing-the-camera-and-privacy-ui/gum2c.gif" alt="review and amend permissions" width="331" height="296" /></p>
<p class="caption">Figure 2: The site&#39;s security information. &quot;Details&quot; allows you to report phishing etc</p>
<p>New in this Labs build is a second tab, with a tickmark. This is where you can  review and amend all the permissions you have granted a site. </p>
<p> Here&#39;s an example of a site that I&#39;ve granted both camera and Geolocation access to.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/624-getusermedia-accessing-the-camera-and-privacy-ui/gum3c.gif" alt="multiple permissions" width="421" height="353" /></p><p class="caption">Figure 3: Permissions you&#39;ve granted the current site, with chance to amend them</p>
<p>If a site iframes content from another URL which requests access, you&#39;ll also be alerted to that. Please note that we&#39;re continually trying to improve this UI. We&#39;re interested in any feedback you have about this.</p>

<h2>Show me the demos!</h2>
<p>So that&#39;s the theory. What can we do with this new facility? We&#39;ve enjoyed copying video into <code>&lt;canvas&gt;</code>, then manipulating the pixel data with JavaScript:</p>
<ul>
<li><a href="http://people.opera.com/brucel/articles/magic-html5-moustache.html">Magical HTML5 Moustache</a> by Richard Tibbett (the &quot;<a href="http://www.wired.com/thisdayintech/2011/03/0310bell-invents-telephone-mr-watson-come-here/">Mr. Watson, come here</a>&quot; of getUserMedia demos)</li>
<li><a href="http://people.opera.com/danield/html5/explode/">Exploding camera demo</a> (and <a href="http://dev.opera.com/articles/view/playing-with-html5-video-and-getusermedia-support/">how-it-works tutorial</a>)</li>
<li>Relive yesteryear with Daniel&#39;s <a href="http://people.opera.com/danield/webapps/instant-camera/">Webaroid Instant Camera</a> that doesn&#39;t need to be <a href="http://www.reddit.com/r/IAmA/comments/l63y6/iama_polaroid_expert_polaroid_camera_collector_ama/c2q3ao5">put under your armpit</a> to develop</li>
<li><a href="http://people.opera.com/shwetankd/external/demos/rlcp/rlcolorpicker.htm">Real Life Colour Picker</a></li>
<li><a href="http://people.opera.com/shwetankd/external/demos/warholiser/warholiser.htm">Warholiser</a></li>
<li><a href="http://miketaylr.com/photobooth/">Online Photo Booth</a></li>
</ul>

<h2>Now you show us yours!</h2>
<p>This is where you take over. We&#39;d love to see what you make with getUserMedia. Please let us know in the comments or tweet us at <a href="http://twitter.com/odevrel">@odevrel</a>.</p>

<h2>What&#39;s next?</h2>
<p>Of course, Webaroids and magic moustaches are fun, but unlikely to change the face of the Web. However, getUserMedia is part of a wider  spec called <a href="http://www.w3.org/TR/webrtc/">WebRTC 1.0 Real-time Communication Between Browsers</a> which includes a Peer-to-Peer API. The goal is  in-browser video conferencing and is an initiative begun by Google and supported by Mozilla and Opera - read more at the <a href="http://www.webrtc.org/blog">WebRTC blog</a>.</p>
