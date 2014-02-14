---
title: Facebook Video Calling and Opera
authors:
- patrick-lauke
tags:
- plugins
- facebook
- site-compatibility
layout: article
---
This week, <a href="http://www.facebook.com">Facebook</a> unveiled its new <a href="http://www.facebook.com/videocalling">Video Calling</a> feature. Unfortunately, Opera is currently not supported.<br/><br/><span class='imgcenter'><img alt='' src='http://files.myopera.com/patrickhlauke/blog/fb-video.png' /></span> <br/><br/>The reason for Facebook&#39;s block seems to be a problem with our version of Opera on OS X. Facebook&#39;s plug-in installs itself as <code>FacebookVideoCalling.webplugin</code> on Mac,  but our browser only recognises plug-ins with a <code>.plugin</code> extension. This causes their plug-in detection scripts to think the installation failed, triggering a renewed installation process.<br/><br/>Our fearless engineers are working to fix this issue in Opera code as soon as possible, and we&#39;re also in talks with Facebook to find a quick resolution to the problem.
