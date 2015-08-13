---
title: Audio and Video in HTML5 - London Web Standards 20.09.2010
authors:
- patrick-lauke
tags:
- html
- video
- html5
- web-standards
- standards
- audio
- multimedia
license: cc-by-3.0
---

<p>Last Monday I popped down to the capital, fighting through an annoying cold I&#39;ve had for a week, to take part in a <a href="http://www.londonwebstandards.org/">London Web Standards</a> evening. To start off the proceedings, Google&#39;s <a href="http://mahemoff.com/">Michael Mahemoff</a> took us on a tour of some of the cool, but often overlooked new features of HTML5, such as application cache, local storage, geolocation. After that I tried to wow the crowd with a few insights into the capabilities offered by <a href="http://www.slideshare.net/redux/audio-and-video-in-html5-london-web-standards-20092010">Audio and Video in HTML5</a>.</p>
<object id="__sse5257450" width="425" height="355"><param name="movie" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=lws20-09-2010-100922063706-phpapp02&amp;stripped_title=audio-and-video-in-html5-london-web-standards-20092010&amp;userName=redux" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="never" /><embed name="__sse5257450" src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=lws20-09-2010-100922063706-phpapp02&amp;stripped_title=audio-and-video-in-html5-london-web-standards-20092010&amp;userName=redux" type="application/x-shockwave-flash" allowfullscreen="true" width="425" height="355" allowscriptaccess="never" /></object>
<p>And here are the examples I showed:</p>
<h3><code>video</code></h3>
<ul>
<li><a href="http://people.opera.com/patrickl/experiments/video/">Basic <code>video</code> example</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/flash-overlap/">Problem with plugins and overlapping HTML elements</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/flash-overlap/fixed">Fixing overlap problem in Flash with <code>wmode</code></a></li>
<li><a href="http://people.opera.com/patrickl/experiments/video/hover+transition/">Native <code>video</code> with CSS3 Transitions</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/webm/basic-controls/">Basic JavaScript controllers for <code>video</code></a></li>
<li><a href="http://people.opera.com/patrickl/experiments/webm/fancy-controls/">Fancy styled JavaScript-based <code>video</code> controls</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/webm/fancy-swap/">Swapping <code>video</code> sources for simple playlists/galleries</a></li>
</ul>
<p>As a bonus, I also mentioned <a href="https://html.spec.whatwg.org/multipage/video.html#websrt-0">WebSRT</a> and the <code>&lt;track&gt;</code> element (not part of HTML5), and showed the <a href="http://people.opera.com/philipj/2010/07/21/html5-video-webinar/demos/track.html">JavaScript demo implementation of WebSRT</a> by Opera&#39;s <a href="http://blog.foolip.org/">Philip Jägenstedt</a> as another example of how the native APIs for <code>video</code> can be used in creative new ways.</p>
<h3><code>audio</code></h3>
<p>The first public outing of my <code>audio</code> examples!</p>
<ul>
<li><a href="http://people.opera.com/patrickl/experiments/audio/wilhelm/controls">Simple <code>audio</code> element (with visible <code>control</code>)</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/audio/wilhelm/">Same example without <code>control</code> attribute – playback can only be controlled via JavaScript</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/audio/hacky-looper/">Hacky looper to work around current <code>loop</code> latency and demonstrate scriptability</a></li>
<li><a href="http://people.opera.com/patrickl/experiments/audio/windchime/">Trivial example of random scripting – the <code>audio</code> windchime</a></li>
</ul>
