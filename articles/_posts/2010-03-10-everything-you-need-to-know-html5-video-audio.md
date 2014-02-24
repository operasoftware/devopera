---
title: Everything You Need to Know About HTML5 Video and Audio
authors:
- simon-pieters
intro: 'This article builds on our previous HTML5 `<video>` publications by offering deep coverage of the functionality available in the `<video>`/`<audio>` API, a detailed reference of `<video>` and `<audio>` attributes, and guidance on codecs, and creating video/audio suitable for use with these elements.'
layout: article
---
              <div class="note">

<p>Update history:</p>

<ul>
<li>Article updated 26 January 2011 — Simplified information about what video formats Opera supports, as now Linux versions handle video the same as Mac and PC. Also deleted links to Labs WebM builds, as all release versions now support it.</li>
<li>Article updated 1 July 2010 — replaced download links to our experiment WebM-enabled builds with links to Opera 10.60 (final).</li>
<li>Article updated 14th May 2010 — some minor changes made; information on codecs added to mention the VP8 codec Google have made available and the experimental <a href="http://labs.opera.com/news/2010/05/19/">VP8-supporting Opera Labs build</a>.</li>
</ul>

              </div>

<h2>Introduction</h2>
<p>The latest version of Opera supports the HTML5 <code>video</code> and <code>audio</code> elements. But how do you use them? <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> is a great general introduction but doesn't go deep into the details. <a href="http://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/">Accessible HTML5 Video with JavaScripted captions</a> shows how captions can be implemented until the spec gains proper support for captions; and <a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video">(re-)Introducing &lt;video&gt;</a> has some information on Opera's implementation. I recommend reading all three!</p>

<p>This article aims to provide all the nitty-gritty details of HTML5 media, the DOM API, events, and so forth, so you can implement your own HTML5 player with fallback for older browsers.
</p>

<p class="note">Editor's note: This article was originally published on the <a href="http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2">Opera Core Concerns blog</a>, but we liked it so much that we convinced Simon to let us publish it here as well.</p>

<h3>What's supported?</h3>
<p>Opera supports everything in <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#video">the HTML5 <code>video</code> spec</a> with the following exceptions:</p>
<ul>
<li>The <code>preload</code> attribute is not supported. (<code>autobuffer</code> was changed to <code>preload</code> in the spec; Opera has <code>autobuffer</code> in the DOM but it doesn't do anything.)

</li><li>The <code>buffered</code>, <code>seekable</code> and <code>played</code> IDL attributes always return empty <code>TimeRanges</code> objects.
</li><li><code>playbackRate</code> and <code>defaultPlaybackRate</code> don't affect playback speed or direction.

</li></ul>
<p>Currently Opera supports the WebM container format with the VP8 and Vorbis codecs, the Ogg container format with the Theora and Vorbis codecs, and the WAVE container format and PCM codec.
</p>


<h3>Let's get something playing</h3>
<p>So, how do we get a video to play in HTML? First you need an actual video in the right format. Opera currently supports Ogg/WebM, which is also supported by Firefox and Chrome.
</p><p>If you have a video that you want to play but it's not in Ogg/WebM, you need to convert it. You can use <a href="http://www.mirovideoconverter.com/">Miro</a> or another program of choice to do this.</p>

<p>So now you have a video lying around on your server (or your local disk), and you want to play it in HTML. Use the following markup:
</p>

<code><pre>&lt;video src="video.ogv" controls&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>The <code>controls</code> attribute instructs the browser to provide its own controls. If you want to write your own controls with JavaScript, you just leave out the <code>controls</code> attribute. The browser's controls can still be enabled by the user from the context menu in Opera, and when scripting is disabled, Opera's controls are present regardless of the <code>controls</code> attribute.
</p><p>The text "video not supported" will be shown if the browser doesn't support the <code>video</code> element; you could replace this with a link to the video file itself, or maybe an <code>object</code> element to display an alternative version with a plugin, eg Flash.

</p><p>Depending on how your server is configured, the video might or might not actually play. Current Opera requires that your video file is served as <code>video/ogg</code> (or <code>audio/ogg</code>, or <code>application/ogg</code>, or <code>audio/wav</code>...) for it to play. So if it doesn't play, your server might not know about the <code>ogv</code> file extension and serve the video as <code>text/plain</code>, which Opera refuses to play. Here's how to fix this for Apache servers; add the following lines to your <code>.htaccess</code> file:

</p>

<code><pre>AddType video/ogg .ogv
AddType audio/ogg .oga</pre></code>

<p>That sets the right type for Ogg audio as well. While you're at it you could add <code>video/mp4</code> for <code>mp4</code> extensions.
</p><p>The <code>audio</code> element works much the same as the <code>video</code> element, except it doesn't show any video, and some features that only makes sense for videos are missing.

</p>

<code><pre>&lt;audio src="audio.oga" controls&gt;
 audio not supported
&lt;/audio&gt;</pre></code>

<p>You can also create <code>video</code> and <code>audio</code> elements with script. For a <code>video</code> to render anything, you also need to insert it in the document. An <code>audio</code> element doesn't need to be in the document to play sound, but it does if you want to show the browser's controls.

</p><p>Here's how to create a <code>video</code> element and insert it as the last child of <code>body</code>:
</p>

<code><pre>var video = document.createElement('video');
video.src = 'video.ogv';
video.controls = true;
document.body.appendChild(video);</pre></code>

<p>For <code>audio</code>, you can do the same thing:
</p>

<code><pre>var audio = document.createElement('audio');
audio.src = 'audio.oga';
audio.controls = true;
document.body.appendChild(audio);</pre></code>

<p>There's also a convenient <code>Audio()</code> constructor, which is equivalent to creating an <code>audio</code> element with <code>createElement</code>, setting its <code>src</code> attribute to the constructor's first argument, if there is one, and setting the <code>preload</code> attribute to the value <code>auto</code>.

</p>

<code><pre>var audio = new Audio();
audio.src = 'audio.oga';</pre>
<pre>var audio = new Audio('audio.oga');</pre></code>

<p>For the rest of this article, I'll mostly only show examples for <code>video</code>, although most apply to <code>audio</code> as well.
</p>

<h3>But it doesn't work in Safari!</h3>

<p>Safari doesn't support Ogg/WebM out of the box — it instead supports the H.264 codec. There are a few options available to get round the conflicting codec support issue we are currently faced with:
</p><ul>
<li>Encode your video twice — once as Ogg/WebM and once as MPEG-4.
</li><li>Tell Safari users to install the <a href="http://www.xiph.org/quicktime/">Xiph QuickTime Component</a>. This will make Ogg work in Safari.

</li><li>Replace the <code>video</code> element with the <a href="http://www.flumotion.net/cortado/">Cortado Java applet</a> when you detect that Ogg/WebM isn't supported.
</li></ul>
<p>To convert your video to MPEG-4/H.264/AAC, you can use <a href="http://handbrake.fr/">HandBrake</a> or some other program — this is also detailed in <a href="http://diveintohtml5.info/video.html#handbrake-gui">Dive Into HTML5</a>.
</p><p>Now you have two video files, you should expose both in the code so browsers can play whichever one they understand. To do this, you can use the <code>source</code> element as follows:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv"&gt;
 &lt;source src="video.mp4"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>Now the browser will first try to load and play <code>video.ogv</code>, and if it can't play it, it will try the next <code>source</code> element. If you want to save precious bandwidth, you can tell the browser the MIME type of each video so it doesn't need to download it to tell whether it can play it:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type="video/ogg"&gt;
 &lt;source src="video.mp4" type="video/mp4"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>However, these MIME types only tell you which container format is being used (Ogg or MPEG-4, in the above case) — it doesn't say anything about which video and audio codecs are being used. A container format is similar to a ZIP archive containing several other files; to know that you support the individual files, you'd need information about the individual files, not just the archive format. For video, we use the codec's MIME parameter for this purpose:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'&gt;
 &lt;source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>Note that the codecs parameter uses double quotes, which means we have to use single quotes for the attribute value.
</p><p>The codec strings for Theora and Vorbis are straightforward. The codec strings for H.264 and AAC are more complicated; this is because there are several profiles for H.264 and AAC. The above represent the Baseline profile for H.264 and the Low-complexity profile for AAC. Those are the profiles used by YouTube and supported on the iPhone. Higher profiles require more CPU to decode but are better compressed so take less bandwidth.
</p><p>If you don't want to encode your video twice, you can show a message for Safari users. You could have a link visible for everyone, or you could detect that Ogg isn't supported and only then show a message. The second point requires detection, so let's go through how to do that.
</p><h3>Detecting support</h3>
<p>There are several levels of support. First, the <code>video</code> element might not be supported at all. This is the case for Opera 10.10 and below and IE8 and below. For this case, you can just put content inside the video element and it will be rendered (in the above examples, the content is just "video not supported"). No need to do anything further for this case.
</p><p>Second, the <code>video</code> element might be supported but the codecs you want to use might not be. Safari doesn't support Ogg/WebM, while Opera and Firefox don't support MPEG-4/H.264/AAC. To detect this, you can either use the <code>canPlayType()</code> method on a media element, or you could have an <code>onerror</code> event listener; if a video fails to play because the codec is not supported, an <code>error</code> event is fired.

</p><p>The <code>canPlayType()</code> method takes a string argument in the form of a MIME type. The method returns one of three strings:
</p><dl>
<dt>The empty string
</dt><dd>The container format or one of the codecs are not supported.
</dd><dt><code>"maybe"</code>
</dt><dd>The container format is probably supported, but don't know about the codecs.
</dd><dt><code>"probably"</code>
</dt><dd>The container format and the codecs are probably supported.
</dd></dl>
<p>Note there's no <code>"yes"</code> — a MIME type doesn't contain enough information for a browser to know for sure whether it can play a given video. For instance, the video might have too high a bitrate so that the browser is unable to decode it.

</p><p>The MIME type is of the form <code>video/ogg</code> or <code>video/mp4; codecs="..."</code> — just like in the server configuration and the <code>type</code> attribute on <code>source</code>.
</p>

<code><pre>var video = document.getElementsByTagName('video')[0];

// Opera 10.50 gives "maybe"
alert(video.canPlayType('video/ogg'));

// Opera 10.50 gives "probably"
alert(video.canPlayType('video/ogg; codecs="theora, vorbis"'));

// Opera 10.50 gives ""
alert(video.canPlayType('video/mp4'));
alert(video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));</pre></code>

<p>If you have an Ogg video and want to detect support, you could do it as follows:
</p>

<code><pre>var video = document.getElementsByTagName('video')[0];
if (video.canPlayType) { // &lt;video&gt; is supported!
  if (video.canPlayType('video/ogg; codecs="theora, vorbis"')) {
    // it can play (maybe)!
  } else {
    // the container format or codecs aren't supported
    // let's fall back
    fallback(video);
  }
}</pre></code>

<p class="note">Note: HTML5 earlier said to return the string <code>"no"</code> instead of the empty string, which would make the above code never fall back (since the string <code>"no"</code> is truthy in JavaScript, while the empty string is falsy). If you want to support old video-supporting browsers that implemented <code>"no"</code>, then you would have to check for that string explicitly, or check for <code>"maybe"</code> and <code>"probably"</code> instead.
</p><p>The <code>fallback</code> function would take out the <code>video</code> and <code>source</code> elements from the DOM, but keep the other children of the <code>video</code>. This function could be implemented like this:

</p>

<code><pre>function fallback(video) {
  while (video.firstChild) {
    if (video.firstChild instanceof HTMLSourceElement) {
      video.removeChild(video.firstChild);
    } else {
      video.parentNode.insertBefore(video.firstChild, video);
    }
  }
  video.parentNode.removeChild(video);
}</pre></code>

<p>The other way to detect lack of codec support is to listen for the <code>error</code> event on the video:
</p>

<code><pre>&lt;video src="video.ogv" controls onerror="fallback(this)"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>This will still make browsers that don't support Ogg download part of the video; we can fix that by using the <code>source</code> element and using <code>onerror</code> on the <code>source</code> element instead:

</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'
         onerror="fallback(this.parentNode)"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>At this point you can add a link to the Xiph QuickTime Component page for Safari users:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'
         onerror="fallback(this.parentNode)"&gt;
 video not supported; if you're using Safari, try installing
 &lt;a href="http://www.xiph.org/quicktime/"&gt;XiphQT&lt;/a&gt;

&lt;/video&gt;</pre></code>

<p>If you have several <code>source</code> elements, the <code>onerror</code> handler would go on the last <code>source</code> element:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'&gt;
 &lt;source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
         onerror="fallback(this.parentNode)"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>An <code>error</code> is fired on each failing <code>source</code> element, and since they're tried in order, you know all of them have failed if the last one gets an <code>error</code> event.

</p>

<h3>Falling back to plugins</h3>

<p>If you want to try a plugin instead of showing a message when a video fails, you could use the <a href="http://www.flumotion.net/cortado/">Cortado Java applet</a> for Ogg, or you could use Flash for MP4, since Flash supports playing MPEG-4/H.264/AAC.
</p>

<p>If you just have an Ogg file, it could look something like this:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'
         onerror="fallback(this.parentNode)"&gt;
 &lt;object type="application/x-java-applet" width="480" height="288"&gt;
  &lt;param name="archive" value="cortado-ovt-stripped-wm_r51500.jar"&gt;
  &lt;param name="code" value="com.fluendo.player.Cortado.class"&gt;
  &lt;param name="url" value="video.ogv"&gt;
  video and Java not supported
 &lt;/object&gt;
&lt;/video&gt;</pre></code>

<p>If you just have an MP4 file, it could look something like this:
</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
         onerror="fallback(this.parentNode)"&gt;
 &lt;object data="videoplayer.swf"&gt;
  &lt;param name="flashvars" value="video.mp4"&gt;
  video and Flash not supported
 &lt;/object&gt;
&lt;/video&gt;</pre></code>

<p>If you have both an Ogg and an MP4 file, you could try falling back to both by nesting the <code>object</code> elements inside each other. You could also build up the fallback DOM with dynamically when you detect lack of support, which avoids having huge markup boilerplate for each video. The <a href="http://html5media.info/">html5media</a> project does this using the <a href="http://flowplayer.org/">Flowplayer</a> Flash video player.

</p>

<p>At this point, you should have video working in all popular browsers — including Opera 10.10 and IE, assuming Java or Flash are installed and enabled.
</p>

<h3>What's up with all that downloading?</h3>

<p>Opera, Chrome and Safari will automatically download the whole video file even if it hasn't started to play yet. Firefox 3.6 only loads enough to render a frame and determine duration, unless the <code>autobuffer</code> attribute is present. Note that the spec changed from <code>autobuffer</code> to <code>preload</code>, which hasn't been implemented anywhere yet. Opera plans to change to the Firefox behavior of only loading enough to render a frame and determine duration by default, unless the <code>preload</code> attribute says otherwise.
</p>

<p>The <code>preload</code> attribute has the following states:

</p>

<dl>
<dt>Attribute absent
</dt><dd>The browser is allowed to download as little or much as it wants. When Opera implements <code>preload</code>, this will probably be equivalent to <code>metadata</code>
</dd><dt><code>preload="none"</code>
</dt><dd>The author hints that nothing should be downloaded.
</dd><dt><code>preload="metadata"</code>
</dt><dd>The author hints that enough data should be downloaded to show a frame and to determine duration.
</dd><dt><code>preload=""</code>
</dt><dt><code>preload="auto"</code>
</dt><dd>The author hints that the browser should download as much as it sees fit to give a good user experience, possibly downloading the whole video.
</dd></dl>

<p>If you want to simulate <code>preload="none"</code> in today's browsers, you can omit the <code>src</code> attribute and the <code>source</code> elements, and only add them when the user clicks a button.
</p><pre>&lt;video controls&gt;
 video not supported
&lt;/video&gt;
&lt;input type="button" value="Load video"
       onclick="document.getElementsByTagName('video')[0].src = 'video.ogv';"&gt;</pre>

<p>To populate a video with <code>source</code> elements dynamically, it could be done as follows:
</p>

<code><pre>&lt;video controls&gt;
 video not supported
&lt;/video&gt;
&lt;script&gt;
function loadVideo() {
  var video = document.getElementsByTagName('video')[0];
  video.insertBefore(createSource('video.ogv', 'video/ogg; codecs="theora, vorbis"'), video.firstChild);
  video.insertBefore(createSource('video.mp4', 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), video.firstChild.nextSibling);
}
function createSource(src, type) {
  var source = document.createElement('source');
  source.src = src;
  source.type = type;
  return source;
}
&lt;/script&gt;
&lt;input type="button" value="Load video" onclick="loadVideo()"&gt;</pre></code>

<p>This will show a blank <code>video</code> element until the user clicks the "load video" button. If you want to show an image instead of nothing then you can use the <code>poster</code> attribute.
</p>

<code><pre>&lt;video controls poster="videoframe.jpg"&gt;</pre></code>

<p>Alternatively you could use an <code>img</code> element and replace it with a <code>video</code> element dynamically when the user clicks on it or on a button.
</p><h3>What else have you got?</h3>

<p>There are some more attributes for media elements that I haven't mentioned yet. I'll list them all here for completeness.
</p><p>The <code>video</code> element:
</p><dl>
<dt><code>src</code>
</dt><dd>URL for the video.
</dd><dt><code>poster</code>
</dt><dd>URL to an image to use as the poster frame until the video starts playing.
</dd><dt><code>preload</code>
</dt><dd>Hint to the browser how much it should download before the video starts playing.
</dd><dt><code>autoplay</code>

</dt><dd>Boolean attribute that hints that the browser should start playing the video automatically.
</dd><dt><code>loop</code>
</dt><dd>Boolean attribute indicating whether the video should loop.
</dd><dt><code>controls</code>
</dt><dd>Boolean attribute indicating whether the browser should show its controls.
</dd><dt><code>width</code>
</dt><dd>Width of the video box, in CSS pixels.
</dd><dt><code>height</code>
</dt><dd>Height of the video box, in CSS pixels.
</dd></dl>
<p>The <code>audio</code> element has the same attributes, excepting <code>poster</code>, <code>width</code> and <code>height</code>.

</p><p>The <code>autoplay</code> attribute would probably be used on pages where the primary content is a single video — for instance, videos on YouTube start playing automatically. Users can in theory disable autoplaying videos with a preference in the browser, although I'm not aware of any such preference in existing browsers. If there weren't an attribute to do this, people would probably make videos start playing automatically with script anyway, which makes it harder for the user to disable them.
</p><p>The <code>loop</code> attribute, if present, indicates that when the video has ended, the browser should seek back to the beginning if the direction of playback is forwards. (The video doesn't loop when playing backwards.)
</p><p>The <code>autoplay</code>, <code>loop</code> and <code>controls</code> attributes are so-called boolean attributes. Such attributes represent the "off" state when absent, and the "on" state when present, regardless of the value. This is the same as e.g. the <code>disabled</code> attribute on <code>input</code>. In HTML5, these attributes can be written in three ways:

</p>

<code><pre>&lt;video loop&gt;</pre>
<pre>&lt;video loop=""&gt;</pre>
<pre>&lt;video loop="loop"&gt;</pre></code>

<p>In the first case, the attribute value is the empty string. They all mean the same thing. It could also be written in all-uppercase or with mixed case.
</p>

<p>In JavaScript, boolean IDL attributes return <code>true</code> if the attribute is present, and <code>false</code> if absent. Setting a boolean IDL attribute to <code>true</code> means the corresponding attribute is set with the same value as the attribute name, and setting it to <code>false</code> means the corresponding attribute is removed. Thus, the following are equivalent:
</p>

<code><pre>video.loop = true;</pre>
<pre>video.setAttribute('loop', 'loop');</pre></code>

<p>The <code>width</code> and <code>height</code> attributes set the dimensions for the <code>video</code> element, in CSS pixels. You should not use any unit for these attributes; just like with the <code>img</code> element. Also — in the same way as the <code>img</code> element — if you only set one of <code>width</code> and <code>height</code>, the other dimension is automatically adjusted appropriately so that the video retains its aspect ratio. However — unlike the <code>img</code> element — if you set <code>width</code> and <code>height</code> to something that doesn't match the aspect ratio of the video, the video is not stretched to fill the box. Instead, the video retains the correct aspect ratio and is letterboxed inside the <code>video</code> element. The video will be rendered as large as possible inside the <code>video</code> element while retaining the aspect ratio.

</p><p>You can read out the video's intrinsic width and height by using the <code>videoWidth</code> and <code>videoHeight</code> IDL attributes:
</p>

<code><pre>&lt;video src="video.ogv" width="300" height="300"
       onloadedmetadata="alert(this.videoWidth + 'x' + this.videoHeight);"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>If you want to use a percentage width or other units, you can set the dimensions with CSS. If you want, you can change the dimensions on <code>:hover</code> and/or <code>:focus</code>, and use the <code>-o-transition</code> CSS property to smoothly transition between the two.

</p>

<code><pre>video { width:100px; -o-transition:0.5s width }
video:hover, video:focus { width:400px }</pre></code>

<p>The <code>source</code> element has three attributes:
</p><dl>
<dt><code>src</code>
</dt><dd>URL for the video.
</dd><dt><code>type</code>
</dt><dd>MIME type for the video.
</dd><dt><code>media</code>
</dt><dd>A Media Query indicating for which medium the video applies.
</dd></dl>

<p>The <code>media</code> attribute takes a Media Query, just like the <code>media</code> attribute on the <code>style</code> element. For instance, you could specify <code>media="handheld"</code> to indicate that the video is appropriate for handheld devices. Or you could specify <code>media="all and (min-device-height:720px)"</code> to indicate that the video is appropriate for screens with 720 lines of pixels or bigger.
</p>

<h3>I want to roll my own controls</h3>

<p>If you're satisfied with the browser's native controls, then you can stop reading now. If you want the controls to have a different design, or you want a button for captions, or playback speed, and so forth, then read on.
</p><p>In the early days, the DOM API for <code>video</code> in HTML5 was very simple; you could <code>play()</code> a video, and you could <code>pause()</code> a video, and that was more or less it. Today the API is a lot bigger, and there are lots of events, so that you can implement sophisticated controls in JavaScript.
</p><p>When using your own controls, you omit the <code>controls</code> attribute.
</p>

<code><pre>&lt;video src="video.ogv"&gt;
 video not supported
&lt;/video&gt;</pre></code>

<p>You can then use buttons that do something when clicked:
</p>

<code><pre>&lt;script&gt;
var video = document.getElementsByTagName('video')[0];
&lt;/script&gt;
&lt;input type="button" value="Play" onclick="video.play()"&gt;
&lt;input type="button" value="Pause" onclick="video.pause()"&gt;</pre></code>

<p>You can then style those buttons in some fancy way, for instance:
</p>

<code><pre>input[type=button] {
 background:papayawhip;
 color:black;
 height:3em;
 border:double;
 border-radius:0.5em;
 box-shadow:0 0.2em 0.5em black;
}</pre></code>

<p>If you want to use a single button for both play and pause, you need to listen for the <code>play</code> and <code>pause</code> events. The user can play and pause from the context menu, so if you just naively toggle between play and pause for every click on your button, it would become out of sync.
</p><p>There are three ways to set an event listener in HTML. The first is to use a normal attribute:
</p>

<code><pre>&lt;video onplay="exampleFunction()"&gt;</pre></code>

<p>The second is using an IDL attribute with JavaScript:
</p>

<code><pre>video.onplay = exampleFunction;</pre></code>

<p>The third is to use the DOM Events <code>addEventListener</code> method:

</p>

<code><pre>video.addEventListener('play', exampleFunction, false);</pre></code>

<p>Let's replace the two buttons with a single play/pause button:
</p>

<code><pre>&lt;input type="button" value="Play" id="playpause" onclick="video.play()"&gt;</pre></code>

<p>Initially we assume that the video is paused, since that's the initial state. Even when the <code>autoplay</code> attribute is used, the video is still in the paused state until some video data has been loaded and the browser decides to start playing.
</p><p>Now, we need to change the button when the video is played or paused:
</p>

<code><pre>var playpause = document.getElementById('playpause');
video.onpause = function(e) {
  playpause.value = 'Play';
  playpause.onclick = function(e) { video.play(); }
}
video.onplay = funtion(e) {
  playpause.value = 'Pause';
  playpause.onclick = function(e) { video.pause(); }
}</pre></code>

<p>Alternatively, we could come up with a more elegant solution and take look at the <code>paused</code> IDL attribute when updating the button's label and deciding what to do when clicking the button:
</p>

<code><pre>&lt;input type="button" value="Play" id="playpause" onclick="playOrPause()"&gt;</pre>

<pre>video.onpause = video.onplay = function(e) {
  playpause.value = video.paused ? 'Play' : 'Pause';
}
function playOrPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}</pre></code>

<p>Note that when the video has ended, the paused state of the video is still unpaused. Thus, if you want to show the "play" button when the video has ended, you need to change it when getting the <code>ended</code> event.
</p>

<code><pre>video.onended = function(e) {
  playpause.value = 'Play';
}</pre></code>

<p>The <code>playOrPause</code> function would be modified by also checking the value of the <code>ended</code> IDL attribute:
</p>

<code><pre>function playOrPause() {
  if (video.ended || video.paused) {
    video.play();
  } else {
    video.pause();
  }
}</pre></code>

<h3>Can you play anything yet?</h3>

<p>Initially a <code>video</code> element won't load anything — it's empty. This is represented by the <code>networkState</code> IDL attribute having the value 0, which is represented by a constant on the <code>video</code> element called <code>NETWORK_EMPTY</code>
</p>

<code><pre>var video = document.createElement('video');
alert(video.networkState == video.NETWORK_EMPTY); // true</pre></code>

<p>The other values for <code>networkState</code> are 1, <code>NETWORK_IDLE</code>, which means the browser has chosen a video to use but isn't downloading anything; 2, <code>NETWORK_LOADING</code>, which means the browser is trying to download data; and 3, <code>NETWORK_NO_SOURCE</code>, which means no source has been successfully loaded yet.

</p><p>When we set the <code>src</code> attribute, or insert a <code>source</code> element as a child of the <code>video</code>, the element automatically starts the loading process, and will try to use the <code>src</code> if it was set or find a suitable <code>source</code> element after the current script has finished running. When the load starts, a <code>loadstart</code> event is fired.

</p><p>The processing then depends on whether you used the <code>src</code> attribute or whether you used <code>source</code> elements. Let's go through the process for the <code>src</code> attribute first.
</p><p>The <code>currentSrc</code> IDL attribute is set to the resolved value of <code>src</code>. Then the browser tries to download and decode the referenced video. If this fails, then an <code>error</code> event is fired, and the <code>video</code>'s <code>error</code> IDL attribute is set to a <code>MediaError</code> object whose <code>code</code> IDL attribute is set to value 4, i.e. <code>MEDIA_ERR_SRC_NOT_SUPPORTED</code>, and <code>networkState</code> is set to <code>NETWORK_NO_SOURCE</code>.

</p>

<code><pre>var video = document.createElement('video');
video.src = 'a-video-that-is-unsupported';
video.onerror = function(e) {
  alert(video.error.code == video.error.MEDIA_ERR_SRC_NOT_SUPPORTED); // true
  alert(video.networkState == video.NETWORK_NO_SOURCE); // true
}</pre></code>

<p>The other values of <code>MediaError</code>'s <code>code</code> IDL attribute are 1, <code>MEDIA_ERR_ABORTED</code>, which means the user aborted the download (which will cause a <code>abort</code> event to be fired); 2, <code>MEDIA_ERR_NETWORK</code>, which means a network error occurred while the video was being downloaded; 3, <code>MEDIA_ERR_DECODE</code>, which means that a decoding error occured after successfully decoding part of the video.

</p><p>When using <code>source</code> elements, the browser goes through the list of <code>source</code> element children of the <code>video</code> element, updating <code>currentSrc</code> for each new <code>source</code> element it visits. If the <code>type</code> attribute has a MIME type the browser thinks it can potentially play, and if the Media Query in the <code>media</code> attribute applies to the current medium, then tlt;/codepar/codeam name=he

browser tries to download and decode that source. If the <code>source</code> cannot be used — determined either by looking at <code>type</code> and <code>media</code>, or by trying to download and decode the video — then an <code>error</code> event is fired on the current <code>source</code> element (not on the <code>video</code> element). The <code>video</code>'s <code>error</code> IDL attribute is still null; there could be a later <code>source</code> that the browser is able to play. If this was the last <code>source</code> element, then <code>networkState</code> will be <code>NETWORK_NO_SOURCE</code>, but if you were to insert another <code>source</code> element with script, then the browser would try to play that one as well — the <code>video</code> element is still alive even though all <code>source</code> elements so far have failed.

</p><p>If the load is successful, whether using the <code>src</code> attribute or using <code>source</code> elements, <code>progress</code> events will be fired as data is downloaded. When enough data has been loaded to determine the video's dimensions and duration, a <code>loadedmetadata</code> event is fired. When enough data has been loaded to render a frame, the <code>loadeddata</code> event is fired. When enugh data has been loaded to be able to play a little bit of the video, a <code>canplay</code> event is fired. When the browser determines that it can play through the whole video without stopping to download more data, a <code>canplaythrough</code> event is fired; this is also the case when the video starts playing if it has a <code>autoplay</code> attribute.

</p><p class="note">Note: currently Opera doesn't try to determine when it has enough data to be able to play through, but instead just fires <code>canplay</code> and <code>canplaythrough</code> at the same time. This will probably be fixed in a future release.
</p><p>If the browser decides to stop downloading data in order to save bandwidth, it will fire a <code>suspend</code> event. If the server stops giving data (without closing the connection) for some reason, the browser fires a <code>stalled</code> event after three seconds. If the browser is playing faster than the server is serving data, or when seeking causes the browser to wait for downloading data, a <code>waiting</code> event is fired.

</p><p class="note">Note: currently Opera doesn't suspend downloads, and doesn't fire the <code>stalled</code> event.
</p><p>If you want to have your play button disabled until the video is able to play, you can enable it on the <code>canplay</code> event:
</p>

<code><pre>&lt;input type="button" value="Play" id="playpause" onclick="playOrPause()" disabled&gt;</pre>
<pre>video.oncanplay = function(e) {
  playpause.disabled = false;
}</pre></code>

<p>The <code>readyState</code> IDL attribute indicates how much data the browser has loaded. At first, the value is 0, <code>HAVE_NOTHING</code>. When the <code>loadedmetadata</code> event is fired, <code>readyState</code> is 1, <code>HAVE_METADATA</code>. When <code>loadeddata</code> is fired, <code>readyState</code> is 2, <code>HAVE_CURRENT_DATA</code>. When <code>canplay</code> is fired, <code>readyState</code> is <code>HAVE_FUTURE_DATA</code>. When <code>canplaythrough</code> is fired, <code>readyState</code> is <code>HAVE_ENOUGH_DATA</code>. Note however that <code>readyState</code> can jump several steps in one go, for instance from <code>HAVE_METADATA</code> to <code>HAVE_FUTURE_DATA</code>, skipping <code>HAVE_CURRENT_DATA</code>, so if you inspect the <code>readyState</code> attribute in the <code>canplay</code> event handler, it might not be the value you expect because it has changed already before the event handler is run.

</p>

<code><pre>video.oncanplay = function(e) {
  alert(video.readyState); // might be 2, 3 or even 4
}</pre></code>

<h3>Skip forward, please</h3>
<p>If you want a seekbar, you should use the <code>currentTime</code> and <code>duration</code> IDL attributes and the <code>timeupdate</code> event.
</p><p>The <code>currentTime</code> IDL attribute returns the current time in seconds as a float value. The <code>duration</code> IDL attribute returns NaN if the duration is unknown (which it is initially), Infinite if the video is streaming, or the actual duration in seconds as a float value if the duration is known and finite. The <code>timeupdate</code> event is fired whenever the current position changes in some way, e.g. during normal playback or because the user seeked in the video.

</p><p>Let's add a seekbar:
</p>

<code><pre>&lt;input type="range" step="any" id="seekbar"&gt;</pre></code>

<p>This creates a slider control which we can update when we get the <code>timeupdate</code> event, and which we can make seek the video when changed. But first we need to set the seekbar's <code>max</code> attribute to the video's duration when it becomes known, which we do by listening to the <code>durationchange</code> event.
</p>

<code><pre>var seekbar = document.getElementById('seekbar');
function setupSeekbar() {
  seekbar.max = video.duration;
}
video.ondurationchange = setupSeekbar;</pre></code>

<p>Now, we can make the video respond to changes to the seekbar, and make the seekbar change in response to the video's <code>currentTime</code> changing.

</p>

<code><pre>function seekVideo() {
  video.currentTime = seekbar.value;
}
function updateUI() {
  seekbar.value = video.currentTime;
}
seekbar.onchange = seekVideo;
video.ontimeupdate = updateUI;</pre></code>


<p>This works fine for normal cases. However, the seekbar will be broken for streaming video. Why? Because the seekbar assumes that the video starts at time 0, and that the duration is not Infinity. For instance, consider a streaming video and the browser only caches the past 30 minutes worth of data. As the browser throws away data from the cache, you can't seek back to the thrown away data.
</p><p>For this reason, there's an IDL attribute called <code>startTime</code>. For a normal video, it returns 0. For videos that have a timeline that isn't zero-based, it could be something different. For a streaming video, it's the earliest position the browser is able to seek back to.
</p><p>For a non-streaming video whose timeline isn't zero-based, we can fix the above seekbar by setting the <code>min</code> attribute to the video's <code>startTime</code>, and setting <code>max</code> to <code>startTime</code> plus <code>duration</code>.

</p>

<code><pre>function setupSeekbar() {
  seekbar.min = video.startTime;
  seekbar.max = video.startTime + video.duration;
}</pre></code>

<p>For a streaming video, <code>duration</code> is Infinity, so instead we need to set the <code>max</code> attribute to the latest time that has been buffered, and since <code>startTime</code> can change over time, we need to set the <code>min</code> attribute over time as well.
</p><p>For getting the latest time that has been buffered, we need the <code>buffered</code> IDL attribute. It returns a <code>TimeRanges</code> object which has a <code>length</code> attribute, a <code>start()</code> method and an <code>end()</code> method. In normal cases, there will only be one range — the browser starts downloading from time 0, and the downloaded range extends to however much is currently available. However, if the user seeks forward, the browser can stop the current download and start a new request for a later part of the video. In this case, there would be two ranges of buffered data.

</p><p>The <code>TimeRanges</code> object's <code>length</code> IDL attribute returns how many ranges there are. The <code>start()</code> method takes an argument <var>index</var>, where 0 represents the index of the first range, 1 represents the index of the second range, and so forth. It returns the start time of the range with the given index. The <code>end()</code> method similarly returns the end time of the range with the given index.
</p><p>So to find out the latest position of buffered data, we read the end time of the last range in <code>buffered</code>:

</p>

<code><pre>var lastBuffered = video.buffered.end(video.buffered.length-1);</pre></code>

<p>We can then use this to update the seekbar:
</p>

<code><pre>function updateUI() {
  var lastBuffered = video.buffered.end(video.buffered.length-1);
  seekbar.min = video.startTime;
  seekbar.max = lastBuffered;
  seekbar.value = video.currentTime;
}</pre></code>

<p>The <code>played</code> and <code>seekable</code> IDL attributes also return <code>TimeRanges</code> objects. The <code>played</code> IDL attribute returns the ranges that have been played, and the <code>seekable</code> IDL attribute returns which ranges the browser is able to seek to.

</p><p>These attributes can also be used to show fancy colored bars indicating which parts of the video has been downloaded, played, and are seekable. For the <code>buffered</code> attribute, you could update the bar for every <code>progress</code> event, which is fired when some media data has been downloaded. There's no event currently when media data is being discarded from the cache.
</p>

<p class="note">Note: currently Opera always returns empty <code>TimeRanges</code> objects for <code>buffered</code>, <code>played</code> and <code>seekable</code>. <code>buffered</code> and <code>seekable</code> are planned to be implemented, but we don't see clear use cases for <code>played</code>, and it's easy to keep track of what's been played with JavaScript, so for now we don't plan to implement <code>played</code>.

</p><p>Seeking can be slow sometimes — especially if the time you're trying to seek to hasn't been downloaded yet. If you want to show a spinning icon or something while the browser is busy seeking, you can listen to the <code>seeking</code> and <code>seeked</code> events. <code>seeking</code> is fired when a seek starts, and <code>seeked</code> is fired when a seek is completed. There's also a <code>seeking</code> IDL attribute which returns true while the browser is seeking.
</p>

<h3>HTTP byte range requests</h3>

<p>While on the subject of downloaded data, seeking and duration, let's talk about HTTP byte range requests. HTTP supports a way for clients to request a range of bytes of a file, and for the server to respond with sending only the requested bytes. This is great for seeking in video, because you don't need to wait for the whole video to have downloaded before you can seek to the end. Opera supports this, and lets you seek to any part of a video even though it hasn't been downloaded yet, assuming the server supports byte range requests.
</p><p>HTTP byte range requests are not only needed to be able to seek quickly, it's also needed to determine the duration for Ogg files. The Ogg format doesn't include any metadata about the duration of the video, so to know the duration, the browser has to seek to the end. Opera does this. Depending on the video, it can result in a few extra requests. There have been some discussions about adding duration metadata to Ogg files, as well as stating the duration metadata as an HTTP header. When this happens, the extra requests will not be necessary.
</p><p>Note that if your server doesn't support byte range requests, Opera will assume that the video is streaming, i.e. <code>duration</code> will be Infinity.
</p><h3>Adjust the volume</h3>
<p>Media players usually have a mute button and a volume control. HTML5 provides the <code>volume</code> and <code>muted</code> IDL attributes, as well as the <code>volumechange</code> event. The event is fired whenever the value of <code>volume</code> or <code>muted</code> is changed.

</p>

<p>To implement a mute button, we flip the value of <code>muted</code>, and we update the button's label when the volume changes:
</p>

<code><pre>&lt;input type="button" value="Unmuted" id="mutebutton" onclick="muteOrUnmute()"&gt;</pre>
<pre>var mutebutton = document.getElementById('mutebutton');
video.onvolumechange = function(e) {
  mutebutton.value = video.muted ? 'Muted' : 'Unmuted';
}
function muteOrUnmute() {
  video.muted = !video.muted;
}</pre></code>

<p>For the volume control, we can use a slider control just like the seekbar:
</p>

<code><pre>&lt;input type="range" max="1" step="any" id="volumecontrol" onchange="updateVolume()"&gt;</pre>
<pre>var volumecontrol = document.getElementById('volumecontrol');
video.onvolumechange = function(e) {
  mutebutton.value = video.muted ? 'Muted' : 'Unmuted';
  volumecontrol.value = video.volume;
}
function updateVolume() {
  video.volume = volumecontrol.value;
}</pre></code>

<h3>Let's look at another movie</h3>

<p>If you want to show several clips one after another, or otherwise dynamically change the source of a <code>video</code> element, it's possible without having to throw away the whole <code>video</code> element and creating a new one.

</p><p>If you're using the <code>src</code> attribute, then it's super-simple: just set <code>src</code> to the new value; the current video will be aborted, and the new video will be loaded in.
</p>

<code><pre>&lt;video src="video.ogv" controls&gt;
 video not supported
&lt;/video&gt;
&lt;input type="button" value="Load another video"
       onclick="document.getElementsByTagName('video')[0].src = 'video2.ogv';"&gt;</pre></code>

<p>However, if you're using <code>source</code> elements, then you need to call <code>load()</code> manually when you're done changing the <code>source</code> elements.

</p>

<code><pre>&lt;video controls&gt;
 &lt;source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'&gt;
 &lt;source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'&gt;
 video not supported
&lt;/video&gt;
&lt;script&gt;
function loadAnotherVideo() {
  var video = document.getElementsByTagName('video')[0];
  var sources = video.getElementsByTagName('source');
  sources[0].src = 'video2.ogv';
  sources[1].src = 'video2.mp4';
  video.load(); // need this for the new video to load
}
&lt;/script&gt;
&lt;input type="button" value="Load another video"
       onclick="loadAnotherVideo()"&gt;</pre></code>

<p>If you want to load in another video when the current one has ended, you can listen for the <code>ended</code> event. Remember though that you'll get another <code>ended</code> event when the second video has ended, so if you just want two videos to play, you need to clear the event listener after it has run once. If you use an <code>onended</code> attribute or IDL attribute, then you can set the IDL attribute to null.
</p>

<code><pre>video.onended = function(e) {
  video.onended = null;
  video.src = 'video2.ogv';
}</pre></code>

<p>If you use <code>addEventListener()</code>, then you remove the listener with <code>removeEventListener()</code>:

</p>

<code><pre>video.addEventListener('ended', function(e) {
  video.removeEventListener('ended', arguments.callee, false);
  video.src = 'video2.ogv';
}, false);</pre></code>

<p>When you call <code>load()</code>, or when you set <code>src</code>, or when a video fatally fails to load, an <code>emptied</code> event is fired, which allows you to reset your UI.
</p>

<h3>Fast forward, slow motion and rewind</h3>

<p>The <code>playbackRate</code> IDL attribute sets the speed and direction of video playback. The default value is 1, meaning normal speed. Higher numbers mean fast forward. Lower numbers mean slow motion. Negative numbers mean playing backwards. The number can be any float value. When the playback rate is changed, a <code>ratechange</code> event is fired.

</p>

<code><pre>&lt;input type="range" min="-3" max="3" value="1" id="ratecontrol"
       onchange="changePlaybackRate()"&gt;
&lt;script&gt;
var ratecontrol = document.getElementById('ratecontrol');
video.onratechange = function(e) {
  ratecontrol.value = video.playbackRate;
}
function changePlaybackRate() {
  video.playbackRate = ratecontrol.value;
}
&lt;/script&gt;</pre></code>

<p>The <code>defaultPlaybackRate</code> IDL attribute sets the default speed (and direction) of video playback. This could be useful if your video is incorrectly encoded so that its intrinsic speed is too slow or too fast. <code>playbackRate</code> is relative to <code>defaultPlaybackRate</code>. The default value of <code>defaultPlaybackRate</code> is 1. The <code>ratechange</code> event is also fired when <code>defaultPlaybackRate</code> changes value.

</p>
<p class="note">Note: currently Opera does not support <code>playbackRate</code> or <code>defaultPlaybackRate</code>.
</p>

<h3>How to keep things synchronized</h3>

<p>There's currently no good API for synchronizing things with the timeline of a video, for instance captions or infoboxes. The spec has had "cue ranges" for this purpose earlier (which even earlier were "cue points"); it is expected that something similar will be added in the future, including support for declarative captions.
</p><p>However, for now, you will have to either use a timer and read <code>currentTime</code>, or listen for <code>timeupdate</code> and read <code>currentTime</code>. <code>timeupdate</code> is fired at 15 to 250 ms intervals while the video is playing, unless the previous event handler for <code>timeupdate</code> is still running, in which case the browser should skip firing another event. Opera currently always fires it at 250 ms intervals while the video is playing, while Firefox currently fires it once per rendered frame. The idea is to allow the event to be fired at greater intervals if the system load increases, which could save battery life on a handheld device or keep things responsive in a heavy application. The bottom line is that you should not rely on the interval being the same over time or between browsers or devices.

</p>

<p>Let's say you want to show a <code>div</code> element between the times 3s and 7s of the video; you could do it like this:
</p>

<code><pre>&lt;div hidden data-starttime=3 data-endtime=7 id=hello&gt;Hello world!&lt;/div&gt;
&lt;script&gt;
var video = document.getElementsByTagName('video')[0];
var hello = document.getElementById('hello');
var hellostart = hello.getAttribute('data-starttime');
var helloend = hello.getAttribute('data-endtime');
video.ontimeupdate = function(e) {
 var hasHidden = hello.hasAttribute('hidden');
 if (video.currentTime &gt; hellostart &amp;&amp; video.currentTime &lt; helloend) {
   if (hasHidden)
     hello.removeAttribute('hidden');
 } else {
   if (!hasHidden)
     hello.setAttribute('hidden', '');
 }
}
&lt;/script&gt;</pre></code>

<p>The <code>hidden</code> attribute indicates that the element is not relevant and should be hidden. This is not supported in browsers yet, so you have to hide it with CSS:
</p>

<code><pre>*[hidden] { display:none }</pre></code>

<p>The <code>data-starttime</code> and <code>data-endtime</code> attributes are custom <code>data-*</code> attributes that HTML5 allows to be placed on any element. It's great for including data that you want to read with script, instead of abusing the <code>class</code> or <code>title</code> atributes. HTML5 also has a convenience API for <code>data-*</code> attributes, but it's not supported in browsers yet, so we have to use <code>getAttribute</code> a little longer.

</p><p>The above would look like this using a timer instead:
</p>

<code><pre>&lt;div hidden data-starttime=3 data-endtime=7 id=hello&gt;Hello world!&lt;/div&gt;
&lt;script&gt;
var video = document.getElementsByTagName('video')[0];
var hello = document.getElementById('hello');
var hellostart = hello.getAttribute('data-starttime');
var helloend = hello.getAttribute('data-endtime');
setInterval(function() {
 var hasHidden = hello.hasAttribute('hidden');
 if (video.currentTime &gt; hellostart &amp;&amp; video.currentTime &lt; helloend) {
   if (hasHidden)
     hello.removeAttribute('hidden');
 } else {
   if (!hasHidden)
     hello.setAttribute('hidden', '');
 }
}, 100);
&lt;/script&gt;</pre></code>

<p>This will run every 100 ms. Whether you should use <code>setInterval</code> or <code>timeupdate</code> depends on what you're doing and whether you're ok with the interval changing. Note that the <code>setInterval</code> example above also runs when the video is not playing, which the <code>timeupdate</code> example doesn't. It's possible to clear the interval with <code>clearInterval</code> when the video stops playing and setting it again when it starts playing, though.

</p><p>If you want to synchronize something with the time playback starts, or after a seek, you should listen for <code>playing</code> and <code>seeked</code> — not <code>play</code> or <code>seeking</code>. The former indicate when playback has actually started and a seek has finished, respectively, while the latter indicate that playback or seeking has just been requested, but could take some time before it actually occurs.
</p>

<h3>Video on a canvas</h3>

<p>The <code>canvas</code> element is like a dynamic <code>img</code> element, which you can draw on with JavaScript. I'm not going into detail how <code>canvas</code> works in general (<a href="http://dev.opera.com/articles/view/html-5-canvas-the-basics/">HTML5 canvas - the basics</a> is a recommended introduction), but I'll mention that it's possible to draw a <code>video</code> element on a canvas using the 2d context's <code>drawImage()</code> method (which also accepts <code>img</code> and <code>canvas</code> elements, and in Opera, <code>svg</code> elements). It will draw the current frame of the video onto the canvas. This allows you to do transformations of a video and to read pixel data from a video, which could be used to detect faces or movement in JavaScript.

</p>

<code><pre>&lt;video src="video.ogv" controls&gt;
 video not supported
&lt;/video&gt;
&lt;canvas id="canvas"&gt;
 canvas not supported
&lt;/canvas&gt;
&lt;script&gt;
var ctx = document.getElementById('canvas').getContext('2d');
var video = document.getElementsByTagName('video')[0];
video.onloadeddata = function(e) {
  ctx.canvas.width = video.videoWidth;
  ctx.canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);
}
&lt;/script&gt;</pre></code>

<p>You can also define a pattern of a <code>video</code> element with <code>createPattern()</code>.
</p>

<h3>Summary</h3>
<p>Phew, that was quite an article, no? On the plus side, I think I managed to cover the whole <code>video</code> and <code>audio</code> DOM API and all related events. Now I'm just waiting for you guys to do something creative with all of this. I haven't included any demos in this post — sorry — but I want <em>you</em> to create the demos and kick-ass sites and applications. There's lots of potential here of what can be done. Personally, I need to get back to working on QA...</p>

<p class="note">If the examples in this article don't work in some browsers, then either I've made a typo or some other mistake, or there's a bug in the browser. Check the error console, <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#video">the HTML5 &lt;video&gt; spec</a>, and if you think there's a bug, file it in the relevant browser vendor's bug tracker. For Opera, you can use our <a href="https://bugs.opera.com/wizard/">Bug Report Wizard</a> — include "video" or "audio" or "media" in the summary. Thanks!</p>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/view/custom-html5-video-player-with-css3-and-jquery/">Building a custom HTML5 video player with CSS3 and jQuery</a></li>
<li><a href="/articles/view/html5-audio-radio-player/">An HTML5 &lt;audio&gt; radio player</a></li>
</ul>
