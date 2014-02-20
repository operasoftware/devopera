---
title: Facebook Video Calling and Opera
authors:
- patrick-lauke
tags:
- plugins
- facebook
- site-compatibility
- odin
layout: article
---

This week, [Facebook][1] unveiled its new [Video Calling][2] feature. Unfortunately, Opera is currently not supported.

[1]: http://www.facebook.com
[2]: http://www.facebook.com/videocalling

<figure>
	<img src="/blog/facebook-video-calling/fb-video.png">
</figure>

The reason for Facebook’s block seems to be a problem with our version of Opera on OS X. Facebook’s plug-in installs itself as `FacebookVideoCalling.webplugin` on Mac, but our browser only recognises plug-ins with a `.plugin` extension. This causes their plug-in detection scripts to think the installation failed, triggering a renewed installation process.

Our fearless engineers are working to fix this issue in Opera code as soon as possible, and we’re also in talks with Facebook to find a quick resolution to the problem.