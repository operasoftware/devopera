---
title: Opera 10.60 Moves to the Beta Zone
authors:
- chris-mills
tags:
- beta
- webm
- opera
- opera-10
- video
- geolocation
- app-cache
- web-workers
- odin
license: cc-by-3.0
layout: post
---

<p>With a <a href="http://my.opera.com/ODIN/blog/opera-10-60-alpha">successful Opera 10.60 alpha release</a> behind us, we have continued progress on this version of the browser, and today we can announce <a href="http://www.opera.com/browser/next/">Opera 10.60 beta</a>! This new release is exciting in many ways, featuring further speed improvements over the alpha version, but the main interesting developer features are as follows:</p>

<ul>
  <li><strong>WebM video</strong>: We have already announced that Opera will be supporting the new WebM format for HTML5 <code>&lt;video&gt;</code>, and released an experimental labs build, but Opera 10.60 beta is the first proper release to feature this support. <a href="http://dev.opera.com/articles/view/opera-supports-webm-video/">Read more about WebM video</a>.</li>
  <li><strong>Web Workers support</strong>: <a href="http://www.whatwg.org/specs/web-workers/current-work/">Web Workers</a> is a new technology that allows you to spawn background processes in your JavaScript applications to perform computationally expensive tasks so that the performance of the main process (usually the user interface) is not affected. Remy Sharp has published a <a href="http://html5demos.com/worker">simple Web Workers demo</a>, while Mihai Sucan has created a more complex <a href="http://www.robodesign.ro/coding/html5-demo-video-histogram/index-web-worker.html">Video histogram Web Workers demo</a>, which uses a worker for the histogram calculations.</li>
  <li><strong>Geolocation</strong>: We can reveal support for the <a href="http://dev.w3.org/geo/api/spec-source.html">Geolocation API</a>, which provides an easy way to access Geo data via your applications. Read more about it and check out some demos in our <a href="http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/">How to use the W3C Geolocation API</a> article.</li>
  <li><strong>AppCache</strong>: ApplicationCache (or AppCache) is part of the <a href="http://www.w3.org/TR/html5/offline.html">HTML5 Offline Web Applications spec</a>, which defines mechanisms for enabling your web applications to continue working offline. AppCache in particular allows you to define a manifest file detailing all the application  assets you need to store locally for the web application to run offline, handles the storage mechanism, and many more things besides. Look at our <a href="http://people.opera.com/patrickl/experiments/appcache/">AppCache demo</a> for more information.</li>
</ul>

<p>We&#39;re very pleased with how this version is shaping up, especially with all the new support for HTML5 and associated specs. Please, <a href="http://www.opera.com/browser/next/">download Opera 10.60 beta</a>, try it out, and let us know what you think! Since this is at beta stage, there will be improvements to make before it is finalised.</p>
