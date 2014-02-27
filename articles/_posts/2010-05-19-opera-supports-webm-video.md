---
title: Opera Supports the WebM Video Format
authors:
- chris-mills
intro: 'Today is a very significant day for the Web. WebM, a new, high-quality, free, and open video format is now available, and Opera has released Labs builds that support this format in HTML5 `<video>`. In this article, we look at some examples, how this came about, why it is such a good thing, and what the technical details look like.'
license: cc-by-nc-sa-3.0
layout: article
---
<div class="note">
<p>Update history:</p>
<ul>
<li>Article updated 1 July 2010 — replaced download links to our experiment WebM-enabled builds with links to Opera 10.60 (final).</li>
</ul>
</div>

<h2>Introduction</h2>

<p>You’ll probably already have read up on and experimented with the new HTML5 <code>&lt;video&gt;</code> element, which allows us to include video inside an HTML page without the need for plugins (if not, read our <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> before going any further.) You’ll probably also be aware that there is somewhat of a disagreement over codecs going on. Opera and Firefox currently support the Ogg Theora video codec, while Safari supports the H.264 codec. Google Chrome supports both, while Microsoft have announced support for H.264 in IE9. This is not ideal, as to implement a cross-browser video with HTML5 you would need to encode and reference multiple video formats. For example:</p>

<pre><code>&lt;video controls="controls"&gt;
   &lt;source src="theora.ogv" type='video/ogg; codecs="theora, vorbis"'&gt;
   &lt;source src="h264.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;
   &lt;p&gt;&lt;a href="h264.mp4"&gt;Download the video&lt;/a&gt;.&lt;/p&gt;
&lt;/video&gt;</code></pre>

<h2>Enter WebM</h2>

<p>Help is just around the corner — Google has released the <a href="http://www.webmproject.org/">VP8 video codec and WebM container format</a> under royalty-free terms, with the aim of making a high quality, open video format available across different browsers and platforms. This was announced publicly at the <a href="http://code.google.com/events/io/2010/">2010 Google I/O conference</a>.</p>
<p class="note">On the day of the announcement, Opera released an experimental WebM-enabled build. This feature is now part of the core functionality of <a href="http://www.opera.com/browser/">Opera 10.60</a> and all of our future desktop browser releases.</p>


<p>Google’s <a href="http://www.youtube.com">YouTube</a> property now supports WebM/VP8 — new videos are being made available in this format.</p>

<p class="note">Opera has worked with Google to include WebM/VP8 at its launch because we want to support high quality, royalty-free formats, so no-one is locked out of viewing or publishing Web content. We’d like to thank Google and the others involved for making this available.</p>

<h2>The WebM format details</h2>

<p>The WebM format consists of VP8 video and Vorbis audio wrapped inside a <code>.webm</code> container. This format is based on the <a href="http://www.matroska.org/">Matroska</a> media container format. WebM offers high-quality video with fast seeking.</p>

<p>The new MIME type is <code>video/webm</code>; you can test whether a browser supports this format using the following line:</p>

	<code><pre>.canPlayType('video/webm; codecs="vorbis,vp8"')</pre></code>



<p>It's worth noting that the changes to GStreamer made by Opera needed to support WebM have been contributed to the <a href="http://www.gstreamer.net/">GStreamer project</a>, helping bring WebM playback to Linux desktop applications.</p>

<h2>WebM examples</h2>

<p>There is nothing new that you need to know about the HTML5 <code>&lt;video&gt;</code> syntax to embed WebM videos into your web pages; you just need video in the right format, and some new codec information. For example:</p>

<pre><code>&lt;video controls="controls"&gt;
   &lt;source src="sunflower.webm" type='video/webm; codecs="vorbis,vp8"'&gt;
   &lt;p&gt;&lt;a href="sunflower.webm"&gt;Download the video&lt;/a&gt;.&lt;/p&gt;
&lt;/video&gt;</code></pre>

<p>You can see this code in action on our <a href="sunflower-webm.html">WebM simple example page</a> (you'll be able to run this provided you are using an HTML5 <code>&lt;video&gt;</code> and WebM-supporting browser).</p>

<p>We have also made some more interesting examples available:</p>

<ul>
<li><a href="custom-controls-webm-720p.html">WebM custom controls example (720p)</a>: This example plays a WebM video (<a href="http://www.elephantsdream.org/">Elephants Dream</a>, created by the Orange Open Movie project), and makes custom controls available, created using the <code>video</code> API.</li>
<li><a href="custom-controls-webm-360p.html">WebM custom controls example (360p)</a>: Same example, but with lower-quality video, for people on a slower connection.</li>
<li><a href="http://people.opera.com/patrickl/experiments/webm/fancy-swap/">WebM fancy swap example</a>: This example allows you to choose between different WebM-encoded videos by clicking on the thumbnails, which are then played via a <code>video</code> element.</li>
</ul>

<h3>YouTube support for WebM</h3>

<p>As mentioned above, YouTube now supports the WebM format — a number of videos are now being encoded using WebM, in addition to Flash and other formats, which will continue to be available for browsers that don’t support HTML5 <code>&lt;video&gt;</code>. To have the HTML5 videos served to you by default (where available), you can opt in to the HTML5 Youtube support at <a href="http://www.youtube.com/html5">http://www.youtube.com/html5</a> (click the link at the bottom of the page.)</p>

<p>You’ll know when you’re accessing a WebM video because Youtube shows
"HTML5·WEBM" as part of the controls UI.</p>

<p><img src="webm_example.png" alt="HTML5·WEBM as part of the YouTube controls UI" /></p>

<p>In case you want some examples, the following videos have a HTML5·WEBM version available:</p>

<ul>
<li><a href="http://www.youtube.com/watch?v=H_mU7lkE-sA&html5=True">Opera 10.50</a></li>
<li><a href="http://www.youtube.com/watch?v=OpTCS3g-cBY&html5=True">Opera Mini 5 on the iPhone</a></li>
<li><a href="http://www.youtube.com/watch?v=tQxbpryKKQo&html5=True">Official Adriana Lima COME BACK Video</a></li>
</ul>

<h2>Encoding WebM videos</h2>

<p>There are free and commercial tools available for creating and publishing content in the WebM format. For more details, have a look at the <a href="http://www.webmproject.org/tools/">WebM Project site</a>.</p>

<h2>Further links about video</h2>

<ul>
<li><a href="http://labs.opera.com/news/2010/05/19/">Opera Labs: Welcome, WebM &lt;video&gt;!</a>, by Håkon Wium Lie.</li>
<li><a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a>, by Bruce Lawson and Patrick Lauke</li>
<li><a href="http://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/">Accessible HTML5 Video with JavaScripted captions</a>, by Bruce Lawson</li>
<li><a href="http://dev.opera.com/articles/view/everything-you-need-to-know-about-html5-video-and-audio/">Everything you need to know about HTML5 video and audio</a>, by Simon Pieters</li>
</ul>
