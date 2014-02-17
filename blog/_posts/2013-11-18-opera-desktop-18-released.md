---
title: Opera Desktop 18 released
authors:
- bruce-lawson
intro: '[Opera Desktop 18 for Mac and Windows](http://www.opera.com/computer) is out, based on Chromium 31. ([See features and download](http://www.opera.com/computer))'
tags:
- getusermedia
- webrtc
- opera-18
- themes
- extensions
layout: article
---
<p><a href="http://www.opera.com/computer">Opera Desktop 18 for Mac and Windows</a> is out, based on Chromium 31. (<a href="http://www.opera.com/computer">See features and download</a>)</p>

<h3>getUserMedia and WebRTC</h3>

<p>Developers will be glad to know that access to the camera and microphone with <code>getUserMedia</code> is now enabled. Try using your head to control a game with <a href="http://shinydemos.com/facekat">FaceKat</a>, which uses gUM and the open-source <a href="https://github.com/auduno/headtrackr">headtrackr</a> JavaScript by Opera&#39;s Audun Mathias Øygard. Also try Paul Neave&#39;s <a href="http://webcamtoy.com">Webcam Toy</a> which uses WebGL to manipulate the video stream.</p>

<p>Note how the tab that&#39;s accessing your video or audio has a pulsing red beacon to remind you that you&#39;re broadcasting, even if you&#39;re reading another tab, so you&#39;re not accidentally recorded picking your nose while reading Slashdot.

<p><code>getUserMedia</code> is part of <a href="http://www.webrtc.org">WebRTC</a>, a free, open project that enables web browsers with Real-Time Communications (RTC) capabilities via simple Javascript APIs. Try it out by inviting up to seven friends to a video chat room on <a href="http://www.appear.in/">appear.in</a>, a great simple videoconferencing system using WebRTC. What&#39;s particularly nice about (Oslo-based!) <a href="http://www.appear.in/">appear.in</a> is that it&#39;s very webby — no plugins are used (that&#39;s the point of webRTC) and it uses the web&#39;s basic architectural principle: you just share a link to invite friends using Opera, Chrome or Firefox to connect with a simple UI.</p>

<span class='imgcenter'><img alt='' src='/blog/opera-desktop-18-released/webcam.jpg' /></span>

(<a href="http://comoyo.github.io/blog/2013/08/05/video-meetings-in-the-browser-using-webrtc-and-angularjs/">Read more about the technology behind appear.in</a>)

<h3>More Extension APIs</h3>
<p>Opera 18 adds the following APIs to extensions:</p>
<ul>
<li><a href="http://dev.opera.com/extension-docs/permissions.html">chrome.permissions</a> (<a href="http://dev.opera.com/extension-docs/tut_optional_permissions.html">tutorial</a>)</li>
<li><a href="http://dev.opera.com/extension-docs/browsingData.html">chrome.browsingData</a> (<a href="http://dev.opera.com/extension-docs/tut_removing_browsingdata.html">tutorial</a>)</li>
<li><a href="http://dev.opera.com/extension-docs/contentSettings.html">chrome.contentSettings</a> (<a href="http://dev.opera.com/extension-docs/tut_contentsettings.html">tutorial</a>)</li>
<li><a href="http://dev.opera.com/extension-docs/devtools.inspectedWindow.html">chrome.devtools.inspectedWindow</a></li>
<li><a href="http://dev.opera.com/extension-docs/devtools.network.html">chrome.devtools.network</a></li>
<li><a href="http://dev.opera.com/extension-docs/devtools.panels.html">chrome.devtools.panels</a></li>
<li><a href="http://dev.opera.com/extension-docs/omnibox.html">chrome.omnibox</a> (<a href="http://dev.opera.com/extension-docs/tut_omnibox.html">tutorial</a>)</li>
<li><a href="http://dev.opera.com/extension-docs/pageCapture.html">chrome.pageCapture</a></li>
<li><a href="http://dev.opera.com/extension-docs/privacy.html">chrome.privacy</a> (<a href="http://dev.opera.com/extension-docs/tut_privacy.html">tutorial</a>)</li>
<li><a href="http://dev.opera.com/extension-docs/types.html">chrome.types</a></li>
<li><a href="http://dev.opera.com/extension-docs/tut_offroad.html">Opera Off-Road Mode extension API (available through chrome.types)</a></li>
</ul>

<p>See our <a href="http://dev.opera.com/extension-docs/index.html">Opera 15+ extensions documentation</a> for in-depth discussion of these APIs.</p>

<p>Also, a big shout-out to Martin Kadlec (BS-Harou) who <a href="http://my.opera.com/desktopteam/blog/2013/08/08/opera-17-first-developer-stream-preview?startidx=650#comment111142002">suggested</a> an Off-Road Mode API with a concrete use-case. Thanks, Martin!</p>

<h3>Themes, and what&#39;s next</h3>

Opera 18 can be themed. Making themes is very easy — read <a href="http://dev.opera.com/articles/view/themes-in-opera-18-and-higher/">Themes in Opera 18+</a> and upload to <a href="https://addons.opera.com/en/themes/">addons.opera.com/en/themes/</a> to share with the world.</p>

<p>In the next two weeks, we&#39;ll promote the experimental <a href="http://opera.com/developer">Opera developer stream</a> to feature-complete <a href="http://opera.com/next">Opera.Next</a> so you can try out new standards and features. Keep an eye on the <a href="http://blogs.opera.com/desktop/">Opera desktop team blog</a> for documentation about forthcoming releases and full changelogs.</p>


