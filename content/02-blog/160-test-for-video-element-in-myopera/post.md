Title: Test for video element in my.opera
----
Date: 2010-09-27 11:21:50
----
Author: 
----
Text:

<h3>video element with multiple sources</h3>
<video width="426" height="240" id="player">
	<source src="http://forum-test.oslo.osa/kirby/content/blog/160-test-for-video-element-in-myopera/fridge.webm" type="video/webm" />
	<source src="http://forum-test.oslo.osa/kirby/content/blog/160-test-for-video-element-in-myopera/fridge.ogv" type="video/ogg" />
	<source src="http://forum-test.oslo.osa/kirby/content/blog/160-test-for-video-element-in-myopera/fridge.mp4" type="video/mp4" />
	<p>Download the video in <a href="http://people.opera.com/patrickl/experiments/webm/videos/fridge.webm">WebM</a>, <a href="http://people.opera.com/patrickl/experiments/webm/videos/fridge.ogv">Ogg</a> or <a href="http://people.opera.com/patrickl/experiments/webm/videos/fridge.mp4">MP4</a> format.</p>
</video>


<h3>straight video element with single src attribute (not cross-browser compatible)</h3>
<video src="http://forum-test.oslo.osa/kirby/content/blog/160-test-for-video-element-in-myopera/fridge.webm">
<p>fallback</p>
</video>
