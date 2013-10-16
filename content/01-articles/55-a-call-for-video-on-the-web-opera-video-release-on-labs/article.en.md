Title: A call for video on the web - Opera <video> release on Labs
----
Date: 2007-11-07 18:29:15
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<h2>Introduction</h2>

<p>Video is one of the hottest things on the Web today, with several solutions available to create video effects and embed it in your web pages (for example Flash and Quicktime,) and much improved hardware available - these days we web users have web-enabled video cameras in our pockets and the bandwidth available to transfer more clips and streams than we can watch.</p>

<p>Something however is still not quite there about web video. The video solutions mentioned above are proprietary closed solutions that rely on plugins to display in a web page - what we need to make video a first-class web citizen is an easy, open solution to integrate video into web pages, and native support for video in browsers.</p>

<p>In short, we need a <code>&lt;video&gt;</code> element in HTML, and we must also agree on a baseline video format that will be universally supported, just like the GIF, JPEG and PNG image formats are universally supported for images. It&#39;s important that the video format we choose can be supported by a wide range of devices and that it&#39;s royalty-free (RF). RF is a well-established principle for W3C standards. The Ogg Theora format is a promising candidate, which has been chosen by Wikipedia.</p>

<h2>The good news</h2>

<p>The <code>&lt;video&gt;</code> element has already been proposed in the <a href="http://www.whatwg.org/specs/web-apps/current-work/#video" alt="The HTML5 working draft video element section">HTML5 working draft</a>, and here at Opera, we have created an experimental build of our browser for Windows, Mac and Linux with (amongst other things*) support for the <code>&lt;video&gt;</code> element/Ogg Theora built in. Even better is that we have made it downloadable for you to play with:</p>

<ul>
<li><a href="http://snapshot.opera.com/unix/snapshot_io_video_3d-2069/">Opera 9.52 preview for Linux/UNIX</a></li>
<li><a href="http://snapshot.opera.com/windows/o952s_io_video_3d_10093m.exe">Opera 9.52 preview for Windows</a> (MSI installer)</li>
<li><a href="http://snapshot.opera.com/windows/o952s_io_video_3d_10093.exe">Opera 9.52 preview for Windows</a> (Classic installer)</li>
<li><a href="http://snapshot.opera.com/mac/o952s_io_video_3d_4899.dmg">Opera 9.52 preview for Mac</a></li>
</ul>

<p>we have included several examples for you to check out below.</p>

<p class="note">* This build of Opera also supports video in SVG, File I/O and the 3d &lt;canvas&gt; - these topics deserve their own articles, which we hope to publish soon, although some of the examples below <a href="#video">include SVG</a>.</p>

The Opera video build is currently at a very experimental stage, so not widely supported as of yet. But this is a start - We&#39;re inviting you to start playing with it and passing the message on to others about how powerful this is!

<h2>How does it work?</h2>

<p>The simplest <code>&lt;video&gt;</code> element just uses a <code>src</code> attribute to point at the video you want to display, and a <code>controls</code> attribute, a boolean that specifies whether the user-agent should should provide controls for the video player (present,) or whether it shouldn&#39;t, as that will be handled by the web developer creating the site (absent):</p>

 <pre>&lt;video controls src=&quot;demo.ogg&quot;&gt;&lt;/video&gt;</pre>

<p>You can expand it slightly to include some text to display if the decoder isn&#39;t available, and an <code>id</code> with which to manipulate the video:</p>

<pre>&lt;video controls src=&quot;demo.ogg&quot; id=&quot;myVideo&quot;&gt;Theora decoder not found&lt;/video&gt;</pre>

<p>From here on in it&#39;s just a matter of using the CSS, SVG and JavaScript that you already know to create working controls and other interface items for your video player - you can even create effects like filters and reflections.</p>

<p>It&#39;s just as easy as Flash, but using an open standard and running right in the browser. Check out the source code of the examples below for more inspiration, and let us know what you come up with!</p>

<h2>Examples</h2>

<p>Here are some pages using the video element:</p>

<ul>
<li><a href="http://people.opera.com/howcome/2007/video/controls.html">native controls</a></li>
<li><a href="http://people.opera.com/howcome/2007/video/simple.html">scripted controls</a></li>
<li><a href="http://people.opera.com/howcome/2007/video/opacity.html">scripted with opacity</a></li>
<li><a href="http://people.opera.com/howcome/2007/video/wikipedia/macaw.html">Wikipedia-based demo on parrots</a></li>
<li><a href="http://people.opera.com/howcome/2007/video/wikipedia/octopus.html">Wikipedia-based demo on octopus</a></li>
</ul>

<p id="video">Here are some pages using the video element in SVG:</p>

<ul>
<li><a href="http://people.opera.com/howcome/2007/video/svg/clip-move.svg">clip-move</a></li>
<li><a href="http://people.opera.com/howcome/2007/video/svg/video-reflect.svg">video-reflect</a></li>
<li><a href="http://people.opera.com/howcome/2007/video/svg/video-filter.svg">video-filter</a></li>
</ul>

