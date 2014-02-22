---
title: (Re-)Introducing `<video>`
authors:
- philip-jagenstedt
tags:
- html5
- opera
- video
- xiph
- gstreamer
- vorbis
- theora
- coreblog
layout: post
---
<p>Today the desktop team released a <a href="http://my.opera.com/desktopteam/blog/happy-new-year" target="_blank">new years pre-alpha of Opera 10.50</a> which includes the first public preview of our new HTML5 &lt;video&gt; implementation. It was Opera that first <a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-February/009702.html" target="_blank">proposed</a> &lt;video&gt; and made the first <a href="http://people.opera.com/howcome/2007/video/" target="_blank">proof-of-concept build</a> way back in 2007. In this post I will talk about what we&#39;ve done since then, the decisions we&#39;ve made and where we hope to go next.</p>

<h3>Codecs</h3>

<p>From the very beginning, one of the most important questions has been which audio and video formats should be used with HTML5. The issue has been debated heavily in the web standards community, but no consensus has been reached yet. We believe that the web platform must be built on open standards and will therefore continue to support the Ogg formats: the <a href="http://www.vorbis.com/" target="_blank">Vorbis</a> audio codec and the <a href="http://theora.org/" target="_blank">Theora</a> video codec. These, in addition to plain WAVE PCM audio, are our &quot;core codecs&quot; which we will support on all desktop platforms.</p>

<h3>Features</h3>

<p>While the core codec support remains the same, almost everything else has changed. The <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html" target="_blank">specification</a> has evolved a lot since &lt;video&gt; was first added, and we try to follow the spec to the letter. This is a non-exhaustive list of what we consider more or less done:</p>

<ul class="bullets"><li> Native controls (the <code>controls</code> attribute)</li><li> Scripted controls (e.g. using <code>play()</code>, <code>.currentTime</code> and <code>ontimeupdate</code>)</li><li> Poster image (the <code>poster</code> attribute)</li><li> Painting &lt;video&gt; frames on &lt;canvas&gt;</li><li> Selecting source depending on codec and environment (e.g. <code>&lt;source src=&quot;video-720p.ogv&quot; type=&quot;video/ogg&quot; media=&quot;(min-device-height: 720px)&quot;&gt;</code>)</li><li> Scripted codec detection (e.g. <code>canPlayType(&#39;video/ogg; codecs=vorbis,theora&#39;)</code>)</li></ul>

<span class="aligncenter"><span class='img'><img alt='' src='/blog/re-introducing-video/html5-video-spec-length.png' /></span><p><i>HTML5 &lt;video&gt; section then and now (rotated 90&#xB0;; scale 1:73)</i></p></span>

<p>As this is a pre-alpha, there are also some parts that are not finished. Most importantly, we don&#39;t support seeking at all yet. As a side effect we don&#39;t have the duration of files until we have played through to the end, so the seekbar isn&#39;t very useful right now. This is at the top of our list of things to fix before a final release. We are also working on improving bandwidth management so that we will be able to honor (the absence of) the <code>autobuffer</code> attribute.</p>

<h3>Implementation</h3>

<p>In our original &lt;video&gt; demo, we were using the libogg, libvorbis and libtheora libraries. For this release those libraries are still included, but we have adopted the <a href="http://gstreamer.freedesktop.org/" target="_blank">GStreamer</a> media framework as an extra layer between the browser core and the raw decoding. Among other things, this allows processing to take place in a separate thread, which has improved responsiveness and audio quality.</p>

<p>For platforms where GStreamer is natively available, we are simply using the system-installed version. Thus, if you are using Linux or FreeBSD, make sure to install at least the GStreamer &quot;base&quot; and &quot;good&quot; plugins, otherwise &lt;video&gt; won&#39;t work at all. (<strong>Update:</strong> on Debian/Ubuntu the package names are gstreamer0.10-plugins-base and gstreamer0.10-plugins-good.) Having done this, Opera will be able to play anything that GStreamer can handle, which fortunately includes our core codecs. We also try to detect a number of GStreamer plugins so that we can give truthful answers to scripts that ask e.g. <code>canPlayType(&#39;audio/flac&#39;)</code> or <code>canPlayType(&#39;video/x-msvideo&#39;)</code>. We hope you have fun playing with this, but stick to Ogg for anything serious that should cross-platform and cross-browser.</p>

<p>On Windows we have made a minimal GStreamer configuration which keeps only the features necessary to decode the above mentioned core codecs. As required by the GStreamer license (LGPL), our <a href="http://sourcecode.opera.com/gstreamer/" target="_blank">modified source code</a> is available. Unfortunately we don&#39;t have a Mac version of GStreamer ready for today&#39;s release, so &lt;video&gt; is not available on Mac just yet.</p>

<p>Many thanks to the developers of the GStreamer and Xiph projects, for excellent software and the occasional bit of advice on IRC.</p>

<span class="aligncenter"><span class='img'><img alt='' src='/blog/re-introducing-video/video-controls.png' /></span><p><i>Native controls in Opera 10.50 pre-alpha</i></p></span>

<h3>The future</h3>

<p>In the coming year, we hope that adoption of &lt;video&gt; continues and that we will see exciting new applications made possible by having audio and video as integral parts of the web platform. We will work hard to help realize this potential both by improving our own implementation and by contributing to the development of HTML and other specifications. A few things we think are important right now:</p>

<ul class="bullets"><li> Fullscreen video playback is a must-have feature.</li><li> Subtitles/captions (static as well as scripted).</li><li> <a href="http://www.w3.org/TR/media-frags/" target="_blank">Media Fragment URIs</a> will enable users to link to a specific point in time of a video and more.</li><li> More CSS to make &lt;video&gt; and the whole web even more awesome.</li><li> Let us not forget SVG&#39;s own &lt;audio&gt; and &lt;video&gt; elements.</li><li> Security, performance and stability (this is always important).</li></ul>

<p>(No promises on when any specific feature will be done.)</p>

<h3>Demos</h3>

<p>If you have read this far, you deserve to see some demos!</p>

<ul class="bullets"><li> <a href="http://en.wikipedia.org/w/index.php?title=Gulliver%27s_Travels_(film)&amp;direction=next&amp;oldid=329469376#History" target="_blank">Wikipedia&#39;s article on Gulliver&#39;s Travels</a> includes an excerpt from the film</li><li> <a href="http://people.freedesktop.org/~company/stuff/video-demo.html" target="_blank">Video and Canvas performance demo</a></li><li> <a href="http://9elements.com/io/projects/html5/canvas/" target="_blank">9elements HTML5 Canvas and Audio Experiment</a> (see also the <a href="http://9elements.com/io/?p=153" target="_blank">blog post</a>)</li><li> <a href="http://www.youtube.com/html5" target="_blank">YouTube HTML5 demo</a> (uses MPEG-4 &#x2013; only works on Linux/FreeBSD with the appropriate codecs installed)</li><li> <a href="http://tinyvid.tv/" target="_blank">TinyVid &#x2013; an experimental Ogg video uploading site</a></li><li> <a href="http://metavid.org/" target="_blank">Metavid &#x2013; Open Video Archive of the US Congress</a></li><li> <a href="http://camendesign.com/code/files/video_for_everybody/test.html" target="_blank">“Video For Everybody” Test Page</a></li><li> <a href="http://www.happyworm.com/jquery/jplayer/HTML5.Audio.Support/" target="_blank">HTML5 <audio> and Audio() Support Tester</audio></a></li><li> <a href="http://dev.opera.com/articles/view/a-call-for-video-on-the-web-opera-vid/" target="_blank">Opera&#39;s original call for video on the web</a> (for the nostalgic)</li></ul>

<p>With this I wish everyone a happy new year, may there be an abundance of &lt;video&gt; for all!</p>
