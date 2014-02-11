---
title: HTML5 multimedia accessibility at DevCSI Accessibility Hack Day
authors:
- brucelawson
tags:
- accessibility
- video
- HTML5
- audio
- multimedia
- blog
layout: article
---
Fate took me five miles up the road to Aston University for a <a href="http://www.ukoln.ac.uk/events/devcsi/accessibility_hackdays/">DevCSI Accessibility Hack Day</a> where I spoke on HTML5 multimedia accessibility. Here are my slides:


<div style="width:425px" id="__ss_8377263"><strong style="display:block;margin:12px 0 4px"><a href="http://www.slideshare.net/brucelawson/html5-multimedia-accessibility" title="HTML5 Multimedia Accessibility">HTML5 Multimedia Accessibility</a></strong><object id="__sse8377263" width="425" height="355"><param name="movie" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=multimedia-a11y-110621092151-phpapp02&amp;stripped_title=html5-multimedia-accessibility&amp;userName=brucelawson" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="never" /><embed name="__sse8377263" src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=multimedia-a11y-110621092151-phpapp02&amp;stripped_title=html5-multimedia-accessibility&amp;userName=brucelawson" type="application/x-shockwave-flash" allowfullscreen="true" width="425" height="355" allowscriptaccess="never" /></object></div>

Some resources

<ul>
<li><a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> by Moi and Patrick Lauke</li>
<li><a href="http://camendesign.com/code/video_for_everybody">Video for Everybody</a> - Kroc Camen frankensteins in olde-worlde Flash embed code as fallback for HTML5 video</li>
<li><a href="http://www.w3.org/TR/html5/video.html#media-elements">Video API spec</a></li>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-track-element">Spec for the <code>&lt;track&gt;</code> element</a> for subtitles/ captioning etc</li>
<li><a href="http://www.iandevlin.com/blog/2011/05/html5/webvtt-and-video-subtitles">WebVTT format explained</a> by <a href="http://twitter.com/iandevlin">Ian Devlin</a></li>
<li><a href="http://www.delphiki.com/html5/playr/">Playr</a> - lightweight polyfill script that fakes <code>&lt;track&gt;</code> support in browsers that don&#39;t have native support (eg, all of them)</li>
<li><a href="http://mediaelementjs.com/">MediaElement.js</a> - jQuery-based polyfill that fakes track support and degrades to custom Flash and Silverlight players that mimic the HTML5 MediaElement API for older browsers</li>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#synchronising-multiple-media-elements">Synchronising multiple media elements</a> - nascent specification: <strong>highly liable to change</strong>!</li>
<li><a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview">Accessing device camera from JavaScript</a> - Labs build of Opera/ Android that implements HTML5 <code>getUserMedia</code> with bonus link to the Magic HTML5 Moustache demo</li>
</ul>

<p>After an evening hacking, <a href="http://twitter.com/scottbw">Scott Wilson</a> put together a <a href="http://dl.dropbox.com/u/4504633/vtt.wgt">webVTT generator W3C Widget</a>. Download it, double click to install (on a system with Opera Desktop or similar Widget manager and run-time installed). Point it at a video, then simply pause the video after a &quot;screenful&quot; of dialogue, enter that subtitle, unpause, rinse and repeat, then hit the VTT tab and copy and paste your VTT file.</p> 

