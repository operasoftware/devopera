---
title: Live.com, Sun Webmail
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-823, img.complete must be false while loading a .js file into it. A caching hack on mail.live.com breaks in Opera if the js file is already loaded, causing the contact list (&quot;People&quot;) to fail.<br/><br/>PATCH-815, github: work around misplaced arrows. Core bug.<br/><br/>PATCH-810, Emulating IE\&#39;s cssText property on style sheets. Improves Skydrive. Still hoping for a site fix.<br/><br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-788, shaw.ca: work around browser sniff. Make patch apply only on www. as it broke the webmail.<br/><br/>PATCH-128, Sun Webmail set domain fix. Improve patch to catch more cases. Thanks to JD Lien for debugging help.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-801, schrack.com: prevent outdated opera-specific stylesheet. Site changed.<br/><br/>PATCH-84, Santander bank prevents typing certain keys. Site redesigned.
