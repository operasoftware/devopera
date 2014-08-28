---
title: Everything You Need to Know About HTML5 Video and Audio
authors:
- simon-pieters
tags:
- html5
- theora
- javascript
- w3c
- video
- core-qa
- gstreamer
- vorbis
- canvas
- coreblog
license: cc-by-3.0
---

<p><p>Hi, I&#39;m Simon Pieters, and I&#39;m working with Quality Assurance for HTML5 <code>video</code> and <code>audio</code> at Opera.
</p><p>Opera 10.50 has now been released on Windows, and it supports the HTML5 <code>video</code> and <code>audio</code> elements. But how do you use them? <a href="https://dev.opera.com/articles/view/introduction-html5-video/" rel="nofollow">Introduction to HTML5 video</a> covers a general introduction but doesn&#39;t go into the details; <a href="https://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/" rel="nofollow">Accessible HTML5 Video with JavaScripted captions</a> shows how captions can be implemented until the spec gains proper support for captions; and <a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video" rel="nofollow">(re-)Introducing &lt;video&gt;</a> has some information on Opera&#39;s implementation. I recommend reading all three!

</p><p>This article aims to provide all the nitty-gritty details of HTML5 media, the DOM API, events, and so forth, so you can implement your own HTML5 player with fallback to old browsers.
</p> ... </p><!--more--><h3>What&#39;s supported?</h3>
<p>Opera 10.50 supports everything in <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html">the spec</a> with the following exceptions:</p>
<ul>
<li><code>preload</code> attribute is not supported. (<code>autobuffer</code> was changed to <code>preload</code> in the spec; Opera has <code>autobuffer</code> in the DOM but it doesn&#39;t do anything.)

</li><li><code>buffered</code>, <code>seekable</code> and <code>played</code> IDL attributes always return empty <code>TimeRanges</code> objects.
</li><li><code>playbackRate</code> and <code>defaultPlaybackRate</code> don&#39;t affect playback speed or direction.

</li></ul>
<p>Opera 10.50 on Windows and Mac support the Ogg container format and the Theora and Vorbis codecs, as well as the WAVE container format and PCM codec. Opera 10.50 on Linux and FreeBSD supports the container formats and codecs that are installed in GStreamer on your system. Make sure the GStreamer &quot;base&quot; and &quot;good&quot; plugins are installed for video and Ogg/Theora/Vorbis to work in Opera.
</p><h3>Let&#39;s get something playing</h3>
<p>So, how do we get a video to play in HTML? First you need an actual video in the right format. Opera supports Ogg/Theora/Vorbis, which is also supported by Firefox and Chrome.
</p><p>If you have a video around you want to play but it&#39;s not in Ogg/Theora/Vorbis, you need to convert it. You can use <a href="http://firefogg.org/">Firefogg</a> or <a href="http://v2v.cc/%7Ej/ffmpeg2theora/">ffmpeg2theora</a> or other programs to do this; <a href="http://diveintohtml5.org/video.html#firefogg">Dive into HTML5</a> is an online book which covers how to do this step-by-step. It also covers how to convert to MPEG-4/H.264/AAC.
</p><p>So now you have a video lying around on your server (or your local disk), and you want to play it in HTML. Use the following markup:
</p><pre>&lt;video src=&quot;video.ogv&quot; controls&gt;
 video not supported
&lt;/video&gt;</pre>
<p>The <code>controls</code> attribute instructs the browser to provide its own controls. If you want to write your own controls with JavaScript, you just leave out the <code>controls</code> attribute. The browser&#39;s controls can still be enabled by the user from the context menu in Opera, and when scripting is disabled, Opera&#39;s controls are present regardless of the <code>controls</code> attribute.
</p><p>The text &quot;video not supported&quot; will be shown if the browser doesn&#39;t support the <code>video</code> element; you could replace this with a link to the video file itself, or maybe an <code>object</code> element to try a plugin.

</p><p>Depending on how your server is configured, the video might or might not actually play. Opera requires that your video file is served as <code>video/ogg</code> (or <code>audio/ogg</code>, or <code>application/ogg</code>, or <code>audio/wav</code>...) for it to play. So if it doesn&#39;t play, your server might not know about the <code>ogv</code> file extension and serve the video as <code>text/plain</code> which Opera refuses to play. Here&#39;s how to fix this for Apache servers; add the following lines to your <code>.htaccess</code> file:

</p><pre>AddType video/ogg .ogv
AddType audio/ogg .oga</pre>
<p>That sets the right type for Ogg audio as well. While you&#39;re at it you could add <code>video/mp4</code> for <code>mp4</code> extensions.
</p><p>The <code>audio</code> element works much the same as the <code>video</code> element, except it doesn&#39;t show any video, and some features that only makes sense for videos are missing for <code>audio</code>.

</p><pre>&lt;audio src=&quot;audio.oga&quot; controls&gt;
 audio not supported
&lt;/audio&gt;</pre>
<p>You can also create <code>video</code> and <code>audio</code> elements with script. For a <code>video</code> to render anything, you also need to insert it in the document. An <code>audio</code> element doesn&#39;t need to be in the document to play sound, but it does if you want to show the browser&#39;s controls.

</p><p>Here&#39;s how to create a <code>video</code> element and insert it as the last child of <code>body</code>:
</p><pre>var video = document.createElement(&#39;video&#39;);
video.src = &#39;video.ogv&#39;;
video.controls = true;
document.body.appendChild(video);</pre>
<p>For <code>audio</code>, you can do the same thing:
</p><pre>var audio = document.createElement(&#39;audio&#39;);
audio.src = &#39;audio.oga&#39;;
audio.controls = true;
document.body.appendChild(audio);</pre>
<p>There&#39;s also a convenience <code>Audio()</code> constructor which is equivalent to creating an <code>audio</code> element with <code>createElement</code>, setting its <code>src</code> attribute to the constructor&#39;s first argument, if there is one, and setting the <code>preload</code> attribute to the value <code>auto</code>.

</p><pre>var audio = new Audio();
audio.src = &#39;audio.oga&#39;;</pre>
<pre>var audio = new Audio(&#39;audio.oga&#39;);</pre>
<p>For the rest of this article, I&#39;ll mostly only give examples for <code>video</code>, but most apply to <code>audio</code> as well.
</p><h3>But it doesn&#39;t work in Safari!</h3>
<p>Safari doesn&#39;t support Ogg/Theora/Vorbis out of the box. There are a few options:
</p><ul>
<li>Encode your video twice — once as Ogg/Theora/Vorbis and once as MPEG-4/H.264/AAC.
</li><li>Tell Safari users to install the <a href="http://www.xiph.org/quicktime/">Xiph QuickTime Component</a>. This will make Ogg work in Safari.

</li><li>Replace the <code>video</code> element with the <a href="http://www.flumotion.net/cortado/">Cortado Java applet</a> when you detect that Ogg isn&#39;t supported.
</li></ul>
<p>To convert your video to MPEG-4/H.264/AAC, you can use <a href="http://handbrake.fr/">Handbrake</a> or some other program — this is also detailed in <a href="http://diveintohtml5.org/video.html#handbrake-gui">the aforementioned book</a>.
</p><p>Now you have two video files, and you want to let the browser decide which one to play. To do this, you can use the <code>source</code> element as follows:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot;&gt;
 &lt;source src=&quot;video.mp4&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>Now the browser will first try to load and play <code>video.ogv</code>, and if it can&#39;t play it, it will try the next <code>source</code> element. If you want to save precious bandwidth, you can tell the browser the MIME type of each video so it doesn&#39;t need to download it to tell whether it can play it:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&quot;video/ogg&quot;&gt;
 &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>However, these MIME types only tell you which container format is being used (Ogg or MPEG-4), it doesn&#39;t say anything about which video and audio codecs are being used. A container format is similar to a ZIP archive containing several other files; to know that you support the individual files, you&#39;d need information about the individual files, not just the archive format. For video, we use the <code>codecs</code> MIME parameter for this purpose:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;&gt;
 &lt;source src=&quot;video.mp4&quot; type=&#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>Note that the codecs parameter uses double quotes, which means we have to use single quotes for the attribute value.
</p><p>The codec strings for Theora and Vorbis are straightforward. The codec strings for H.264 and AAC are more complicated; this is because there are several profiles for H.264 and AAC. The above represent the Baseline profile for H.264 and the Low-complexity profile for AAC. Those are the profiles used by YouTube and are supported on the iPhone. Higher profiles require more CPU to decode but are better compressed so take less bandwidth.
</p><p>If you don&#39;t want to encode your video twice, you can show a message for Safari users. You could have a link visible for everyone, or you could detect that Ogg isn&#39;t supported and only then show a message. The second point requires detection, so let&#39;s go through how to do that.
</p><h3>Detecting support</h3>
<p>There are several levels of support. First, the <code>video</code> element might not be supported at all. This is the case for Opera 10.10 and IE8. For this case, you can just put content inside the video element and it will be rendered (in the above examples, the content is just &quot;video not supported&quot;). No need to do anything further for this case.
</p><p>Second, the <code>video</code> element might be supported but the codecs you want to use are not. Safari doesn&#39;t support Ogg/Theora/Vorbis, while Opera and Firefox don&#39;t support MPEG-4/H.264/AAC. To detect this, you can either use the <code>canPlayType()</code> method on a media element, or you could have an <code>onerror</code> event listener; if a video fails to play because the codec is not supported, an <code>error</code> event is fired.

</p><p>The <code>canPlayType()</code> method takes a string argument in the form of a MIME type. The method returns one of three strings:
</p><dl>
<dt>The empty string
</dt><dd>The container format or one of the codecs are not supported.
</dd><dt><code>&quot;maybe&quot;</code>
</dt><dd>The container format is probably supported, but don&#39;t know about the codecs.
</dd><dt><code>&quot;probably&quot;</code>
</dt><dd>The container format and the codecs are probably supported.
</dd></dl>
<p>Note there&#39;s no <code>&quot;yes&quot;</code> — a MIME type doesn&#39;t contain enough information for a browser to know for sure whether it can play a given video. For instance, the video might have too high bitrate that the browser is unable to decode it.

</p><p>The MIME type is of the form <code>video/ogg</code> or <code>video/mp4; codecs=&quot;...&quot;</code> — just like in the server configuration and the <code>type</code> attribute on <code>source</code>.
</p><pre>var video = document.getElementsByTagName(&#39;video&#39;)[0];

// Opera 10.50 gives &quot;maybe&quot;
alert(video.canPlayType(&#39;video/ogg&#39;));

// Opera 10.50 gives &quot;probably&quot;
alert(video.canPlayType(&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;));

// Opera 10.50 gives &quot;&quot;
alert(video.canPlayType(&#39;video/mp4&#39;));
alert(video.canPlayType(&#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;));</pre>
<p>If you have an Ogg video and want to detect support, you could do it as follows:
</p><pre>var video = document.getElementsByTagName(&#39;video&#39;)[0];
if (video.canPlayType) { // &lt;video&gt; is supported!
	if (video.canPlayType(&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;)) {
		// it can play (maybe)!
	} else {
		// the container format or codecs aren&#39;t supported
		// let&#39;s fall back
		fallback(video);
	}
}</pre>

<p class="note">Note: HTML5 earlier said to return the string <code>&quot;no&quot;</code> instead of the empty string, which would make the above code never fall back (since the string <code>&quot;no&quot;</code> is truthy in JavaScript, while the empty string is falsy). If you want to support old video-supporting browsers that implemented <code>&quot;no&quot;</code>, then you would have to check for that string explicitly, or check for <code>&quot;maybe&quot;</code> and <code>&quot;probably&quot;</code> instead.
</p><p>The <code>fallback</code> function would take out the <code>video</code> and <code>source</code> elements from the DOM, but keep the other children of the <code>video</code>. This function could be implemented like this:

</p><pre>function fallback(video) {
	while (video.firstChild) {
		if (video.firstChild instanceof HTMLSourceElement) {
			video.removeChild(video.firstChild);
		} else {
			video.parentNode.insertBefore(video.firstChild, video);
		}
	}
	video.parentNode.removeChild(video);
}</pre>
<p>The other way to detect lack of codec support is to listen for the <code>error</code> event on the video:
</p><pre>&lt;video src=&quot;video.ogv&quot; controls onerror=&quot;fallback(this)&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>This will still make browsers that don&#39;t support Ogg download part of the video; we can fix that by using the <code>source</code> element and using <code>onerror</code> on the <code>source</code> element instead:

</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;
				 onerror=&quot;fallback(this.parentNode)&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>At this point you can add a link to the Xiph QuickTime Component page for Safari users:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;
				 onerror=&quot;fallback(this.parentNode)&quot;&gt;
 video not supported; if you&#39;re using Safari, try installing
 &lt;a href=&quot;http://www.xiph.org/quicktime/&quot;&gt;XiphQT&lt;/a&gt;

&lt;/video&gt;</pre>
<p>If you have several <code>source</code> elements, the <code>onerror</code> handler would go on the last <code>source</code> element:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;&gt;
 &lt;source src=&quot;video.mp4&quot; type=&#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;
				 onerror=&quot;fallback(this.parentNode)&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>An <code>error</code> is fired on each failing <code>source</code> element, and since they&#39;re tried in order, you know all of them have failed if the last one gets an <code>error</code> event.

</p><h3>Falling back to plugin</h3>
<p>If you want to try a plugin instead of showing a message when a video fails, you could use the <a href="http://www.flumotion.net/cortado/">Cortado Java applet</a> for Ogg, or you could use Flash for MP4, since Flash supports playing MPEG-4/H.264/AAC.
</p><p>If you just have an Ogg file, it could look something like this:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;
				 onerror=&quot;fallback(this.parentNode)&quot;&gt;
 &lt;object type=&quot;application/x-java-applet&quot; width=&quot;480&quot; height=&quot;288&quot;&gt;
	&lt;param name=&quot;archive&quot; value=&quot;cortado-ovt-stripped-wm_r51500.jar&quot;&gt;
	&lt;param name=&quot;code&quot; value=&quot;com.fluendo.player.Cortado.class&quot;&gt;
	&lt;param name=&quot;url&quot; value=&quot;video.ogv&quot;&gt;
	video and Java not supported
 &lt;/object&gt;
&lt;/video&gt;</pre>
<p>If you just have an MP4 file, it could look something like this:
</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.mp4&quot; type=&#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;
				 onerror=&quot;fallback(this.parentNode)&quot;&gt;
 &lt;object data=&quot;videoplayer.swf&quot;&gt;
	&lt;param name=&quot;flashvars&quot; value=&quot;video.mp4&quot;&gt;
	video and Flash not supported
 &lt;/object&gt;
&lt;/video&gt;</pre>
<p>If you have both an Ogg and an MP4 file, you could try falling back to both by nesting the <code>object</code> elements inside each other. You could also build up the fallback DOM with dynamically when you detect lack of support, which avoids having huge markup boilerplate for each video. The <a href="http://code.google.com/p/html5media/">html5media</a> project does this using the <a href="http://flowplayer.org/">Flowplayer</a> Flash video player.

</p><p>At this point, you should have video working in all popular browsers — including Opera 10.10 and IE, assuming Java or Flash are installed and enabled.
</p><h3>What&#39;s up with all that downloading?</h3>
<p>Opera 10.50, Chrome and Safari will automatically download the whole video file even if it hasn&#39;t started to play yet. Firefox 3.6 only loads enough to render a frame and determine duration, unless the <code>autobuffer</code> attribute is present. Note that the spec changed from <code>autobuffer</code> to <code>preload</code>, which hasn&#39;t been implemented anywhere yet. Opera plans to change to the Firefox behavior of only loading enough to render a frame and determine duration by default, unless the <code>preload</code> attribute says otherwise.
</p><p>The <code>preload</code> attribute has the following states:

</p><dl>
<dt>Attribute absent
</dt><dd>The browser is allowed to download as little or much as it wants. When Opera implements <code>preload</code>, this will probably be equivalent to <code>metadata</code>
</dd><dt><code>preload=&quot;none&quot;</code>
</dt><dd>The author hints that nothing should be downloaded.
</dd><dt><code>preload=&quot;metadata&quot;</code>
</dt><dd>The author hints that enough data should be downloaded to show a frame and to determine duration.
</dd><dt><code>preload=&quot;&quot;</code>
</dt><dt><code>preload=&quot;auto&quot;</code>
</dt><dd>The author hints that the browser should download as much as it sees fit to give a good user experience, possibly downloading the whole video.
</dd></dl>

<p>If you want to simulate <code>preload=&quot;none&quot;</code> in today&#39;s browsers, you can omit the <code>src</code> attribute and the <code>source</code> elements, and only add them when the user clicks a button.
</p><pre>&lt;video controls&gt;
 video not supported
&lt;/video&gt;
&lt;input type=&quot;button&quot; value=&quot;Load video&quot;
			 onclick=&quot;document.getElementsByTagName(&#39;video&#39;)[0].src = &#39;video.ogv&#39;;&quot;&gt;</pre>

<p>To populate a video with <code>source</code> elements dynamically, it could be done as follows:
</p><pre>&lt;video controls&gt;
 video not supported
&lt;/video&gt;
&lt;script&gt;
function loadVideo() {
	var video = document.getElementsByTagName(&#39;video&#39;)[0];
	video.insertBefore(createSource(&#39;video.ogv&#39;, &#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;), video.firstChild);
	video.insertBefore(createSource(&#39;video.mp4&#39;, &#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;), video.firstChild.nextSibling);
}
function createSource(src, type) {
	var source = document.createElement(&#39;source&#39;);
	source.src = src;
	source.type = type;
	return source;
}
&lt;/script&gt;
&lt;input type=&quot;button&quot; value=&quot;Load video&quot; onclick=&quot;loadVideo()&quot;&gt;</pre>

<p>This will show a blank <code>video</code> element until the user clicks the &quot;load video&quot; button. If you want to show an image instead of nothing then you can use the <code>poster</code> attribute.
</p><pre>&lt;video controls poster=&quot;videoframe.jpg&quot;&gt;</pre>
<p>Alternatively you could use an <code>img</code> element and replace it with a <code>video</code> element dynamically when the user clicks on it or on a button.
</p><h3>What else have you got?</h3>

<p>There are some more attributes for media elements that I haven&#39;t mentioned yet. I&#39;ll list them all here for completeness.
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
<p>The <code>audio</code> element has the same attributes, except for <code>poster</code>, <code>width</code> and <code>height</code>.

</p><p>The <code>autoplay</code> attribute would probably be used on pages where the primary content is a single video — for instance, videos on YouTube start playing automatically. Users can in theory disable autoplaying videos with a preference in the browser, although I&#39;m not aware of any such preference in existing browsers. If there weren&#39;t an attribute to do this, people would probably make videos start playing automatically with script anyway, which makes it harder to disable for the user.
</p><p>The <code>loop</code> attribute, if present, indicates that when the video has ended, if the direction of playback is forwards, the browser should seek back to the beginning. (The video doesn&#39;t loop when playing backwards.)
</p><p>The <code>autoplay</code>, <code>loop</code> and <code>controls</code> attributes are so-called boolean attributes. Such attributes represent the &quot;off&quot; state when absent, and the &quot;on&quot; state when present; regardless of the value. This is the same as e.g. the <code>disabled</code> attribute on <code>input</code>. In HTML5, these attributes can be written in three ways:

</p><pre>&lt;video loop&gt;</pre>
<pre>&lt;video loop=&quot;&quot;&gt;</pre>
<pre>&lt;video loop=&quot;loop&quot;&gt;</pre>
<p>In the first case, the attribute value is the empty string. They all mean the same thing. It could also be written in all-uppercase or with mixed case.
</p><p>In JavaScript, boolean IDL attributes return true if the attribute is present, and false if absent. Setting a boolean IDL attribute to true means the corresponding attribute is set with the same value as the attribute name, and setting to false means the corresponding attribute is removed. Thus, the following are equivalent:
</p><pre>video.loop = true;</pre>
<pre>video.setAttribute(&#39;loop&#39;, &#39;loop&#39;);</pre>
<p>The <code>width</code> and <code>height</code> attributes set the dimensions for the <code>video</code> element, in CSS pixels. You should not use any unit for these attributes; just like with the <code>img</code> element. Just like the <code>img</code> element, if you only set one of <code>width</code> and <code>height</code>, the other dimension is automatically adjusted appropriately so that the video remains its aspect ratio. However, unlike the <code>img</code> element, if you set <code>width</code> and <code>height</code> to something that doesn&#39;t match the aspect ratio of the video, the video is not stretched to fill the box. Instead the video remains the correct aspect ratio and is letterboxed inside the <code>video</code> element. The video will be rendered as big as possible inside the <code>video</code> element while retaining the aspect ratio.

</p><p>You can read out the video&#39;s intrinsic width and height by using the <code>videoWidth</code> and <code>videoHeight</code> IDL attributes.
</p><pre>&lt;video src=&quot;video.ogv&quot; width=&quot;300&quot; height=&quot;300&quot;
			 onloadedmetadata=&quot;alert(this.videoWidth + &#39;x&#39; + this.videoHeight);&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>If you want to use a percentage width or other units, you can set the dimensions with CSS. If you want, you could change the dimensions on <code>:hover</code> and/or <code>:focus</code>, and use the <code>-o-transition</code> CSS property to smoothly transition between the two.

</p><pre>video { width:100px; -o-transition:0.5s width }
video:hover, video:focus { width:400px }</pre>
<p>The <code>source</code> element has three attributes:
</p><dl>
<dt><code>src</code>
</dt><dd>URL for the video.
</dd><dt><code>type</code>
</dt><dd>MIME type for the video.
</dd><dt><code>media</code>
</dt><dd>A Media Query indicating for which medium the video applies.
</dd></dl>

<p>The <code>media</code> attributes takes a Media Query, just like the <code>media</code> attribute on the <code>style</code> element. For instance, you could specify <code>media=&quot;handheld&quot;</code> to indicate that the video is appropriate for handheld devices. Or you could specify <code>media=&quot;all and (min-device-height:720px)&quot;</code> to indicate that the video is appropriate for screens with 720 lines of pixels or bigger.
</p><h3>I want to roll my own controls</h3>

<p>If you&#39;re satisfied with the browser&#39;s native controls, then you can stop reading now. If you want the controls to have a different style, or you want a button for captions, or playback speed, and so forth, then read on.
</p><p>In the early days, the DOM API for <code>video</code> in HTML5 was very simple; you could <code>play()</code> a video, and you could <code>pause()</code> a video, and that was more or less it. Today the API is a lot bigger, and there are lots of events, so that you can implement sophisticated controls in JavaScript.
</p><p>When using your own controls, you omit the <code>controls</code> attribute.
</p><pre>&lt;video src=&quot;video.ogv&quot;&gt;
 video not supported
&lt;/video&gt;</pre>
<p>You can then use buttons that do something when clicked:
</p><pre>&lt;script&gt;
var video = document.getElementsByTagName(&#39;video&#39;)[0];
&lt;/script&gt;
&lt;input type=&quot;button&quot; value=&quot;Play&quot; onclick=&quot;video.play()&quot;&gt;
&lt;input type=&quot;button&quot; value=&quot;Pause&quot; onclick=&quot;video.pause()&quot;&gt;</pre>
<p>You can then style those buttons in some fancy way, for instance:
</p><pre>input[type=button] {
 background:papayawhip;
 color:black;
 height:3em;
 border:double;
 border-radius:0.5em;
 box-shadow:0 0.2em 0.5em black;
}</pre>

<p>If you want to use a single button for both play and pause, you need to listen for the <code>play</code> and <code>pause</code> events. The user can play and pause from the context menu, so if you just naively toggle between play and pause for every click on your button, it would become out of sync.
</p><p>There are three ways to set an event listener in HTML. The first is to use a normal attribute:
</p><pre>&lt;video onplay=&quot;exampleFunction()&quot;&gt;</pre>
<p>The second is using an IDL attribute with JavaScript:
</p><pre>video.onplay = exampleFunction;</pre>
<p>The third is to use the DOM Events <code>addEventListener</code> method:

</p><pre>video.addEventListener(&#39;play&#39;, exampleFunction, false);</pre>
<p>Let&#39;s replace the two buttons with a single play/pause button:
</p><pre>&lt;input type=&quot;button&quot; value=&quot;Play&quot; id=&quot;playpause&quot; onclick=&quot;video.play()&quot;&gt;</pre>
<p>Initially we assume that the video is paused, since that&#39;s the initial state. Even when the <code>autoplay</code> attribute is used, the video is still in the paused state until some video data has been loaded and the browser decides to start playing.
</p><p>Now, we need to change the button when the video is played or paused:
</p><pre>var playpause = document.getElementById(&#39;playpause&#39;);
video.onpause = function(e) {
	playpause.value = &#39;Play&#39;;
	playpause.onclick = function(e) { video.play(); }
}
video.onplay = funtion(e) {
	playpause.value = &#39;Pause&#39;;
	playpause.onclick = function(e) { video.pause(); }
}</pre>
<p>Alternatively, we could come up with a more elegant solution and take look at the <code>paused</code> IDL attribute when updating the button&#39;s label and deciding what to do when clicking the button:
</p><pre>&lt;input type=&quot;button&quot; value=&quot;Play&quot; id=&quot;playpause&quot; onclick=&quot;playOrPause()&quot;&gt;</pre>

<pre>video.onpause = video.onplay = function(e) {
	playpause.value = video.paused ? &#39;Play&#39; : &#39;Pause&#39;;
}
function playOrPause() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}</pre>
<p>Note that when the video has ended, the paused state of the video is still unpaused. Thus, if you want to show the &quot;play&quot; button when the video has ended, you need to change it when getting the <code>ended</code> event.
</p><pre>video.onended = function(e) {
	playpause.value = &#39;Play&#39;;
}</pre>
<p>The <code>playOrPause</code> function would be modified by also checking the value of the <code>ended</code> IDL attribute:
</p><pre>function playOrPause() {
	if (video.ended || video.paused) {
		video.play();
	} else {
		video.pause();
	}
}</pre>

<h3>Can you play anything yet?</h3>
<p>Initially a <code>video</code> element hasn&#39;t loaded anything — it&#39;s empty. This is represented by the <code>networkState</code> IDL attribute having the value 0, which is represented by a constant on the <code>video</code> element called <code>NETWORK_EMPTY</code>
</p><pre>var video = document.createElement(&#39;video&#39;);
alert(video.networkState == video.NETWORK_EMPTY); // true</pre>
<p>The other values for <code>networkState</code> are 1, <code>NETWORK_IDLE</code>, which means the browser has chosen a video to use but isn&#39;t downloading anything; 2, <code>NETWORK_LOADING</code>, which means the browser is trying to download data; and 3, <code>NETWORK_NO_SOURCE</code>, which means no source has been successfully loaded yet.

</p><p>When we set the <code>src</code> attribute, or insert a <code>source</code> element as a child of the <code>video</code>, the element automatically starts the loading process, and will try to use the <code>src</code> if it was set or find a suitable <code>source</code> element after the current script has finished running. When the load starts, a <code>loadstart</code> event is fired.

</p><p>The processing then depends on whether you used the <code>src</code> attribute or whether you used <code>source</code> elements. Let&#39;s go through the process for the <code>src</code> attribute first.
</p><p>The <code>currentSrc</code> IDL attribute is set to the resolved value of <code>src</code>. Then the browser tries to download and decode the referenced video. If this fails, then an <code>error</code> event is fired, and the <code>video</code>&#39;s <code>error</code> IDL attribute is set to a <code>MediaError</code> object whose <code>code</code> IDL attribute is set to value 4, i.e. <code>MEDIA_ERR_SRC_NOT_SUPPORTED</code>, and <code>networkState</code> is set to <code>NETWORK_NO_SOURCE</code>.

</p><pre>var video = document.createElement(&#39;video&#39;);
video.src = &#39;a-video-that-is-unsupported&#39;;
video.onerror = function(e) {
	alert(video.error.code == video.error.MEDIA_ERR_SRC_NOT_SUPPORTED); // true
	alert(video.networkState == video.NETWORK_NO_SOURCE); // true
}</pre>
<p>The other values of <code>MediaError</code>&#39;s <code>code</code> IDL attribute are 1, <code>MEDIA_ERR_ABORTED</code>, which means the user aborted the download (which will cause a <code>abort</code> event to be fired); 2, <code>MEDIA_ERR_NETWORK</code>, which means a network error occurred while the video was being downloaded; 3, <code>MEDIA_ERR_DECODE</code>, which means that a decoding error occured after successfully decoding part of the video.

</p><p>When using <code>source</code> elements, the browser goes through the list of <code>source</code> element children of the <code>video</code> element, updating <code>currentSrc</code> for each new <code>source</code> element it visits. If the <code>type</code> attribute has a MIME type the browser thinks it can potentially play, and if the Media Query in the <code>media</code> attribute applies to the current medium, then the browser tries to download and decode that source. If the <code>source</code> cannot be used — determined either by looking at <code>type</code> and <code>media</code>, or by trying to download and decode the video — then an <code>error</code> event is fired on the current <code>source</code> element (not on the <code>video</code> element). The <code>video</code>&#39;s <code>error</code> IDL attribute is still null; there could be a later <code>source</code> that the browser is able to play. If this was the last <code>source</code> element, then <code>networkState</code> will be <code>NETWORK_NO_SOURCE</code>, but if you were to insert another <code>source</code> element with script, then the browser would try to play that one as well — the <code>video</code> element is still alive even though all <code>source</code> elements so far have failed.

</p><p>If the load is successful, whether using the <code>src</code> attribute or using <code>source</code> elements, then as data is being downloaded, <code>progress</code> events are fired. When enough data has been loaded to determine the video&#39;s dimensions and duration, a <code>loadedmetadata</code> event is fired. When enough data has been loaded to render a frame, the <code>loadeddata</code> event is fired. When enugh data has been loaded to be able to play a little bit of the video, a <code>canplay</code> event is fired. When the browser determines that it can play through the whole video without stopping for downloading more data, a <code>canplaythrough</code> event is fired; this is also when the video starts playing if it has a <code>autoplay</code> attribute.

</p><p class="note">Note: Opera 10.50 doesn&#39;t try to determine when it has enough data to be able to play through, but instead just fires <code>canplay</code> and <code>canplaythrough</code> at the same time. This will probably be fixed in a future release.
</p><p>If the browser decides to stop downloading data in order to save bandwidth, then it will fire a <code>suspend</code> event. If the server stops giving data (without closing the connection) for some reason, then after three seconds the browser fires a <code>stalled</code> event. If the browser is playing faster than the server is serving data, or when seeking causes the browser to wait for downloading data, a <code>waiting</code> event is fired.

</p><p class="note">Note: Opera 10.50 doesn&#39;t suspend downloads yet, and doesn&#39;t fire the <code>stalled</code> event.
</p><p>If you want to have your play button disabled until the video is able to play, you can enable it on the <code>canplay</code> event:
</p><pre>&lt;input type=&quot;button&quot; value=&quot;Play&quot; id=&quot;playpause&quot; onclick=&quot;playOrPause()&quot; disabled&gt;</pre>
<pre>video.oncanplay = function(e) {
	playpause.disabled = false;
}</pre>
<p>The <code>readyState</code> IDL attribute indicates how much data the browser has loaded. At first, the value is 0, <code>HAVE_NOTHING</code>. When the <code>loadedmetadata</code> event is fired, <code>readyState</code> is 1, <code>HAVE_METADATA</code>. When <code>loadeddata</code> is fired, <code>readyState</code> is 2, <code>HAVE_CURRENT_DATA</code>. When <code>canplay</code> is fired, <code>readyState</code> is <code>HAVE_FUTURE_DATA</code>. When <code>canplaythrough</code> is fired, <code>readyState</code> is <code>HAVE_ENOUGH_DATA</code>. Note however that <code>readyState</code> can jump several steps in one go, for instance from <code>HAVE_METADATA</code> to <code>HAVE_FUTURE_DATA</code>, skipping <code>HAVE_CURRENT_DATA</code>, so if you inspect the <code>readyState</code> attribute in the <code>canplay</code> event handler, it might not be the value you expect because it has changed already before the event handler is run.

</p><pre>video.oncanplay = function(e) {
	alert(video.readyState); // might be 2, 3 or even 4
}</pre>
<h3>Skip forward, please</h3>
<p>If you want a seekbar, you would use the <code>currentTime</code> and <code>duration</code> IDL attributes and the <code>timeupdate</code> event.
</p><p>The <code>currentTime</code> IDL attribute returns the current time in seconds as a float value. The <code>duration</code> IDL attribute returns NaN if the duration is unknown (which it is initially), Infinite if the video is streaming, or the actual duration in seconds as a float value if the duration is known and finite. The <code>timeupdate</code> event is fired whenever the current position changes in some way, e.g. during normal playback or because the user seeked in the video.

</p><p>Let&#39;s add a seekbar:
</p><pre>&lt;input type=&quot;range&quot; step=&quot;any&quot; id=&quot;seekbar&quot;&gt;</pre>
<p>This creates a slider control which we can update when we get the <code>timeupdate</code> event, and which we can make seek the video when changed. But first we need to set the seekbar&#39;s <code>max</code> attribute to the video&#39;s duration when it becomes known, which we do by listening to the <code>durationchange</code> event.
</p><pre>var seekbar = document.getElementById(&#39;seekbar&#39;);
function setupSeekbar() {
	seekbar.max = video.duration;
}
video.ondurationchange = setupSeekbar;</pre>
<p>Now, we can make the video respond to changes to the seekbar, and make the seekbar change in response to the video&#39;s <code>currentTime</code> changing.

</p><pre>function seekVideo() {
	video.currentTime = seekbar.value;
}
function updateUI() {
	seekbar.value = video.currentTime;
}
seekbar.onchange = seekVideo;
video.ontimeupdate = updateUI;</pre>
<p>This works fine for normal cases. However, the seekbar will be broken for streaming video. Why? Because the seekbar assumes that the video starts at time 0, and that the duration is not Infinity. For instance, consider a streaming video and the browser only caches the past 30 minutes worth of data. As the browser throws away data from the cache, you can&#39;t seek back to the thrown away data.
</p><p>For this reason, there&#39;s an IDL attribute called <code>startTime</code>. For a normal video, it returns 0. For videos that have a timeline that isn&#39;t zero-based, it could be something different. For a streaming video, it&#39;s the earliest position the browser is able to seek back to.
</p><p>For a non-streaming video whose timeline isn&#39;t zero-based, we can fix the above seekbar by setting the <code>min</code> attribute to the video&#39;s <code>startTime</code>, and setting <code>max</code> to <code>startTime</code> plus <code>duration</code>.

</p><pre>function setupSeekbar() {
	seekbar.min = video.startTime;
	seekbar.max = video.startTime + video.duration;
}</pre>
<p>For a streaming video, <code>duration</code> is Infinity, so instead we need to set the <code>max</code> attribute to the latest time that has been buffered, and since <code>startTime</code> can change over time, we need to set the <code>min</code> attribute over time as well.
</p><p>For getting the latest time that has been buffered, we need the <code>buffered</code> IDL attribute. It returns a <code>TimeRanges</code> object which has a <code>length</code> attribute, a <code>start()</code> method and an <code>end()</code> method. In normal cases, there will only be one range — the browser starts downloading from time 0, and the downloaded range extends to however much is currently available. However, if the user seeks forward, the browser can stop the current download and start a new request for a later part of the video. In this case, there would be two ranges of buffered data.

</p><p>The <code>TimeRanges</code> object&#39;s <code>length</code> IDL attribute returns how many ranges there are. The <code>start()</code> method takes an argument <i>index</i>, where 0 represents the index of the first range, 1 represents the index of the second range, and so forth. It returns the start time of the range with the given index. The <code>end()</code> method similarly returns the end time of the range with the given index.
</p><p>So to find out the latest position of buffered data, we read the end time of the last range in <code>buffered</code>:

</p><pre>var lastBuffered = video.buffered.end(video.buffered.length-1);</pre>
<p>We can then use this to update the seekbar:
</p><pre>function updateUI() {
	var lastBuffered = video.buffered.end(video.buffered.length-1);
	seekbar.min = video.startTime;
	seekbar.max = lastBuffered;
	seekbar.value = video.currentTime;
}</pre>
<p>The <code>played</code> and <code>seekable</code> IDL attributes also return <code>TimeRanges</code> objects. The <code>played</code> IDL attribute returns the ranges that have been played, and the <code>seekable</code> IDL attribute returns which ranges the browser is able to seek to.

</p><p>These attributes can also be used to show fancy colored bars indicating which parts of the video has been downloaded, played, and are seekable. For the <code>buffered</code> attribute, you could update the bar for every <code>progress</code> event, which is fired when some media data has been downloaded. There&#39;s no event currently when media data is being discarded from the cache.
</p><p class="note">Note: Opera 10.50 always returns empty <code>TimeRanges</code> objects for <code>buffered</code>, <code>played</code> and <code>seekable</code>. <code>buffered</code> and <code>seekable</code> are planned to be implemented, but we don&#39;t see clear use cases for <code>played</code>, and it&#39;s easy to keep track of what&#39;s been played with JavaScript, so for now we don&#39;t plan to implement <code>played</code>.

</p><p>Seeking can be slow sometimes — especially if the time you&#39;re trying to seek to hasn&#39;t been downloaded yet. If you want to show a spinning icon or something while the browser is busy seeking, you can listen to the <code>seeking</code> and <code>seeked</code> events. <code>seeking</code> is fired when a seek starts, and <code>seeked</code> is fired when a seek is completed. There&#39;s also a <code>seeking</code> IDL attribute which returns true while the browser is seeking.
</p><h3>HTTP byte range requests</h3>

<p>While on the subject of downloaded data, seeking and duration, let&#39;s talk about HTTP byte range requests. HTTP supports a way for clients to request a range of bytes of a file, and for the server to respond with sending only the requested bytes. This is great for seeking in video, because you don&#39;t need to wait for the whole video to have downloaded before you can seek to the end. Opera 10.50 supports this, and lets you seek to any part of a video even though it hasn&#39;t been downloaded yet, assuming the server supports byte range requests.
</p><p>HTTP byte range requests are not only needed to be able to seek quickly, it&#39;s also needed to determine the duration for Ogg files. The Ogg format doesn&#39;t include any metadata about the duration of the video, so to know the duration, the browser has to seek to the end. Opera 10.50 does this. Depending on the video, it can result in a few extra requests. There have been some discussions about adding duration metadata to Ogg files, as well as stating the duration metadata as an HTTP header. When this happens, the extra requests will not be necessary.
</p><p>Note that if your server doesn&#39;t support byte range requests, Opera will assume that the video is streaming, i.e. <code>duration</code> will be Infinity.
</p><h3>Adjust the volume</h3>
<p>Media players usually have a mute button and a volume control. HTML5 provides the <code>volume</code> and <code>muted</code> IDL attributes, as well as the <code>volumechange</code> event. The event is fired whenever the value of <code>volume</code> or <code>muted</code> is changed.

</p><p>To implement a mute button, we flip the value of <code>muted</code>, and we update the button&#39;s label when the volume changes:
</p><pre>&lt;input type=&quot;button&quot; value=&quot;Unmuted&quot; id=&quot;mutebutton&quot; onclick=&quot;muteOrUnmute()&quot;&gt;</pre>
<pre>var mutebutton = document.getElementById(&#39;mutebutton&#39;);
video.onvolumechange = function(e) {
	mutebutton.value = video.muted ? &#39;Muted&#39; : &#39;Unmuted&#39;;
}
function muteOrUnmute() {
	video.muted = !video.muted;
}</pre>
<p>For the volume control, we can use a slider control just like the seekbar:
</p><pre>&lt;input type=&quot;range&quot; max=&quot;1&quot; step=&quot;any&quot; id=&quot;volumecontrol&quot; onchange=&quot;updateVolume()&quot;&gt;</pre>
<pre>var volumecontrol = document.getElementById(&#39;volumecontrol&#39;);
video.onvolumechange = function(e) {
	mutebutton.value = video.muted ? &#39;Muted&#39; : &#39;Unmuted&#39;;
	volumecontrol.value = video.volume;
}
function updateVolume() {
	video.volume = volumecontrol.value;
}</pre>
<h3>Let&#39;s look at another movie</h3>
<p>If you want to show several clips one after another, or otherwise dynamically change the source of a <code>video</code> element, it&#39;s possible without having to throw away the whole <code>video</code> element and creating a new one.

</p><p>If you&#39;re using the <code>src</code> attribute, then it&#39;s super-simple: just set <code>src</code> to the new value; the current video will be aborted, and the new video will be loaded in.
</p><pre>&lt;video src=&quot;video.ogv&quot; controls&gt;
 video not supported
&lt;/video&gt;
&lt;input type=&quot;button&quot; value=&quot;Load another video&quot;
			 onclick=&quot;document.getElementsByTagName(&#39;video&#39;)[0].src = &#39;video2.ogv&#39;;&quot;&gt;</pre>
<p>However, if you&#39;re using <code>source</code> elements, then you need to call <code>load()</code> manually when you&#39;re done changing the <code>source</code> elements.

</p><pre>&lt;video controls&gt;
 &lt;source src=&quot;video.ogv&quot; type=&#39;video/ogg; codecs=&quot;theora, vorbis&quot;&#39;&gt;
 &lt;source src=&quot;video.mp4&quot; type=&#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;&gt;
 video not supported
&lt;/video&gt;
&lt;script&gt;
function loadAnotherVideo() {
	var video = document.getElementsByTagName(&#39;video&#39;)[0];
	var sources = video.getElementsByTagName(&#39;source&#39;);
	sources[0].src = &#39;video2.ogv&#39;;
	sources[1].src = &#39;video2.mp4&#39;;
	video.load(); // need this for the new video to load
}
&lt;/script&gt;
&lt;input type=&quot;button&quot; value=&quot;Load another video&quot;
			 onclick=&quot;loadAnotherVideo()&quot;&gt;</pre>
<p>If you want to load in another video when the current one has ended, you can listen for the <code>ended</code> event. Remember though that you&#39;ll get another <code>ended</code> event when the second video has ended, so if you just want two videos to play, you need to clear the event listener after it has run once. If you use an <code>onended</code> attribute or IDL attribute, then you can set the IDL attribute to null.
</p><pre>video.onended = function(e) {
	video.onended = null;
	video.src = &#39;video2.ogv&#39;;
}</pre>
<p>If you use <code>addEventListener()</code>, then you remove the listener with <code>removeEventListener()</code>:

</p><pre>video.addEventListener(&#39;ended&#39;, function(e) {
	video.removeEventListener(&#39;ended&#39;, arguments.callee, false);
	video.src = &#39;video2.ogv&#39;;
}, false);</pre>
<p>When you call <code>load()</code>, or when you set <code>src</code>, or when a video fatally fails to load, an <code>emptied</code> event is fired, which allows you to reset your UI.
</p><h3>Fast forward, slow motion and rewind</h3>
<p>The <code>playbackRate</code> IDL attribute sets the speed and direction of video playback. The default value is 1, meaning normal speed. Higher numbers mean fast forward. Lower numbers mean slow motion. Negative numbers mean playing backwards. The number can be any float value. When the playback rate is changed, a <code>ratechange</code> event is fired.

</p><pre>&lt;input type=&quot;range&quot; min=&quot;-3&quot; max=&quot;3&quot; value=&quot;1&quot; id=&quot;ratecontrol&quot;
			 onchange=&quot;changePlaybackRate()&quot;&gt;
&lt;script&gt;
var ratecontrol = document.getElementById(&#39;ratecontrol&#39;);
video.onratechange = function(e) {
	ratecontrol.value = video.playbackRate;
}
function changePlaybackRate() {
	video.playbackRate = ratecontrol.value;
}
&lt;/script&gt;</pre>
<p>The <code>defaultPlaybackRate</code> IDL attribute sets the default speed (and direction) of video playback. This could be useful if your video is incorrectly encoded so that it&#39;s intrinsic speed is too slow or too fast. <code>playbackRate</code> is relative to <code>defaultPlaybackRate</code>. The default value of <code>defaultPlaybackRate</code> is 1. The <code>ratechange</code> event is also fired when <code>defaultPlaybackRate</code> changes value.

</p><p class="note">Note: Opera 10.50 does not support <code>playbackRate</code> or <code>defaultPlaybackRate</code>.
</p><h3>How to keep things synchronized</h3>
<p>There&#39;s currently no good API for synchronizing things with the timeline of a video, for instance captions or infoboxes. The spec has had &quot;cue ranges&quot; for this purpose earlier (which even earlier were &quot;cue points&quot;); it is expected that something similar will be added in the future, including support for declarative captions.
</p><p>However, for now, you will have to either use a timer and read <code>currentTime</code>, or listen for <code>timeupdate</code> and read <code>currentTime</code>. <code>timeupdate</code> is fired with 15 to 250 ms interval while the video is playing, unless the previous event handler for <code>timeupdate</code> is still running, in which case the browser should skip firing another event. Opera currently always fires it with 250 ms interval while the video is playing, while Firefox currently fires it once per rendered frame. The idea is to allow the event to be fired with greater interval if the system load increases, which could save battery life on a handheld device or keep things responsive in a heavy application. The bottomline is that you should not rely on the interval being the same over time or between browsers or devices.

</p><p>Let&#39;s say you want to show a <code>div</code> element between the times 3s and 7s of the video; you could do it like this:
</p><pre>&lt;div hidden data-starttime=3 data-endtime=7 id=hello&gt;Hello world!&lt;/div&gt;
&lt;script&gt;
var video = document.getElementsByTagName(&#39;video&#39;)[0];
var hello = document.getElementById(&#39;hello&#39;);
var hellostart = hello.getAttribute(&#39;data-starttime&#39;);
var helloend = hello.getAttribute(&#39;data-endtime&#39;);
video.ontimeupdate = function(e) {
	var hasHidden = hello.hasAttribute(&#39;hidden&#39;);
	if (video.currentTime &gt; hellostart &amp;&amp; video.currentTime &lt; helloend) {
		if (hasHidden)
			hello.removeAttribute(&#39;hidden&#39;);
	} else {
		if (!hasHidden)
			hello.setAttribute(&#39;hidden&#39;, &#39;&#39;);
	}
}
&lt;/script&gt;</pre>
<p>The <code>hidden</code> attribute indicates that the element is not relevant and should be hidden. This is not supported in browsers yet, so you have to hide it with CSS:
</p><pre>*[hidden] { display:none }</pre>
<p>The <code>data-starttime</code> and <code>data-endtime</code> attributes are custom <code>data-*</code> attributes that HTML5 allows on any element. It&#39;s great for including data that you want to read with script, instead of abusing <code>class</code> or <code>title</code>. HTML5 also has a convenience API for <code>data-*</code> attributes, but it&#39;s not supported in browsers yet, so we have to use <code>getAttribute</code> a little longer.

</p><p>The above would look like this using a timer instead:
</p><pre>&lt;div hidden data-starttime=3 data-endtime=7 id=hello&gt;Hello world!&lt;/div&gt;
&lt;script&gt;
var video = document.getElementsByTagName(&#39;video&#39;)[0];
var hello = document.getElementById(&#39;hello&#39;);
var hellostart = hello.getAttribute(&#39;data-starttime&#39;);
var helloend = hello.getAttribute(&#39;data-endtime&#39;);
setInterval(function() {
	var hasHidden = hello.hasAttribute(&#39;hidden&#39;);
	if (video.currentTime &gt; hellostart &amp;&amp; video.currentTime &lt; helloend) {
		if (hasHidden)
			hello.removeAttribute(&#39;hidden&#39;);
	} else {
		if (!hasHidden)
			hello.setAttribute(&#39;hidden&#39;, &#39;&#39;);
	}
}, 100);
&lt;/script&gt;</pre>
<p>This will run every 100 ms. Whether you should use <code>setInterval</code> or <code>timeupdate</code> depends on what you&#39;re doing and whether you&#39;re ok with the interval changing. Note that the <code>setInterval</code> example above also runs when the video is not playing, which the <code>timeupdate</code> example doesn&#39;t. It&#39;s possible to clear the interval with <code>clearInterval</code> when the video stops playing and setting it again when it starts playing, though.

</p><p>If you want to synchronize something with the time playback starts, or after a seek, you should listen for <code>playing</code> and <code>seeked</code> — not <code>play</code> or <code>seeking</code>. The former indicate when playback has actually started and a seek has finished, respectively, while the latter indicate that playback or seeking has just been requested, but could take some time before it actually occurs.
</p><h3>Video on a canvas</h3>
<p>The <code>canvas</code> element is like a dynamic <code>img</code> element which you can draw on with JavaScript. I&#39;m not going into detail how <code>canvas</code> works in general (however <a href="https://dev.opera.com/articles/view/html-5-canvas-the-basics/">HTML 5 canvas - the basics</a> is a recommended introduction), but I&#39;ll mention that it&#39;s possible to draw a <code>video</code> element on a canvas using the 2d context&#39;s <code>drawImage()</code> method (which also accepts <code>img</code> and <code>canvas</code> elements, and in Opera, <code>svg</code> elements). It will draw the current frame of the video onto the canvas. This allows you to do transformations of a video and to read pixel data from a video, which could be used to detect faces or movement in JavaScript.

</p><pre>&lt;video src=&quot;video.ogv&quot; controls&gt;
 video not supported
&lt;/video&gt;
&lt;canvas id=&quot;canvas&quot;&gt;
 canvas not supported
&lt;/canvas&gt;
&lt;script&gt;
var ctx = document.getElementById(&#39;canvas&#39;).getContext(&#39;2d&#39;);
var video = document.getElementsByTagName(&#39;video&#39;)[0];
video.onloadeddata = function(e) {
	ctx.canvas.width = video.videoWidth;
	ctx.canvas.height = video.videoHeight;
	ctx.drawImage(video, 0, 0);
}
&lt;/script&gt;</pre>

<p>You can also define a pattern of a <code>video</code> element with <code>createPattern()</code>.
</p><h3>Yawn</h3>
<p>Phew, that was quite an article, no? On the plus side, I think I managed to cover the whole <code>video</code> and <code>audio</code> DOM API and all related events. Now I&#39;m just waiting for you guys to do something creative with all of this. I haven&#39;t included any demos in this post — sorry — but I want <em>you</em> to create the demos and kick-ass sites and applications. There&#39;s lots of potential here with what can be done. Personally, I need to get back to working on QA...

</p><p>P.S. If the examples in this article don&#39;t work in some browsers, then either I&#39;ve made a typo or some other mistake, or there&#39;s a bug in the browser. Check the error console, <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html">the spec</a>, and if you think there&#39;s a bug, file it in the relevant browser vendor&#39;s bug tracker. For Opera, you can use our <a href="https://bugs.opera.com/wizard/">Bug Report Wizard</a> — include &quot;video&quot; or &quot;audio&quot; or &quot;media&quot; in the summary. Thanks!</p>
