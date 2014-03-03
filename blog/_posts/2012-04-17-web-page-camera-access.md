---
title: Camera access from a web page in Opera Next
authors:
- karlcow
tags:
- Opera
- getusermedia
- operanext
- gUM
- camera
- webapi
- odin
license: cc-by-3.0
layout: post
---

<p>In 1969, we were told that <a href="http://photoshopcandy.com/wp-content/uploads/2010/03/tv-phone.jpg" target="_blank">someday, you&#39;ll be a star</a>, and after great efforts from the open web community, that time has come! <strong>Access to the camera from a web page</strong> through JavaScript (<a href="http://dev.w3.org/2011/webrtc/editor/getusermedia.html">getUserMedia</a>) is possible. Grab the latest Opera Next version <a href="http://my.opera.com/desktopteam/blog/2012/04/17/camera-getusermedia-support">from the desktop team blog</a>!</p>
<p>Let&#39;s rewind a bit. On <a href="http://dev.opera.com/articles/view/labs-more-fun-using-the-web-with-getusermedia-and-native-pages/">October 2011</a> and <a href="http://dev.opera.com/articles/view/getusermedia-access-camera-privacy-ui/">January 2012</a>, we released desktop Labs builds for testing getUserMedia. Your <a href="http://my.opera.com/desktopteam/blog/2011/10/19/new-opera-labs-release-with-getusermedia-and-opera-reader" target="_blank">feedback</a> has been valuable and helped fixed issues.</p>
<p>The first time you access a web page that requests access to the camera, you will get a notification requesting you to authorize it. It&#39;s time to rush to the bathroom, fix your hair, make up, change your shirt and smile. If you are not satisfied, you can deny right away.</p>
<p><span class='imgcenter'><img alt='' src='/blog/web-page-camera-access/first-time.jpg' /></span></p>
<p>Then you might want to change these settings later on - perhaps your image on the camera was not what you were expecting. Just click on the icon on the address bar and a menu pops up.</p>
<p><span class='imgcenter'><img alt='' src='/blog/web-page-camera-access/change-setting.jpg' /></span></p>
<p>Good! Now you have the choice in between a few options: <em>Always</em>, <em>Allow once</em> or <em>Deny</em>.</p>
<p><span class='imgcenter'><img alt='' src='/blog/web-page-camera-access/choices.jpg' /></span></p>
<p>There will always be an icon in the toolbar or the tab to tell you that the camera access is ongoing in case you had forgotten. It&#39;s worth noting that we do something similar for sites that request access to your geolocation.</p>
<p>The API for accessing the camera is fairly simple.</p>
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
<p>You can find more code samples and advanced examples in Daniel Davis&#39; <a href="http://dev.opera.com/articles/view/playing-with-html5-video-and-getusermedia-support/">Dev.Opera article about getUserMedia</a>.</p>
<p>And because we all need a <a href="http://people.opera.com/brucel/articles/magic-html5-moustache.html" target="_blank">moustache</a> to be a <a href="https://www.youtube.com/watch?v=BxhqVrbixZc" target="_blank">star</a>:</p>
<p><span class='imgcenter'><img alt='' src='/blog/web-page-camera-access/moustache.jpg' /></span></p>
<p>Time for you to code your project and share with us.</p>
