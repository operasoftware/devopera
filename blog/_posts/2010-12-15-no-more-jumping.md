---
title: Less jumping
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-351, Avoid jumping on generated content on iltasanomat.fi. As reported under the shoutbox this site jumps when hovering. Caused by miscalculation of height of generated content. Really an old bug that was uncovered by other layout fixes.<br/><br/>PATCH-337, Remove browser warning message and allow movie playback on <a href="http://www.voddler.com" target="_blank">voddler.com</a><br/> <br/><span style="font-size: 140%">Changed patches</span><br/>Changed the browser.js version reporting patch to make it run on all opera.com subdomains, not just www. and jp. <a href="http://ru.opera.com/docs/browserjs/" target="_blank">Example</a><br/> <br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-312, Prevent double values submitted from SELECT elements on booking.com. Core fix.<br/><br/>PATCH-307, Prevent double values submitted from SELECT elements on lufthansa.com. Core fix.<br/><br/>PATCH-279, Fix URLs with empty port number on form submit. Core fix.<br/><br/>262693, AOL browser sniffing causes missing styling. Site changed. There are new issues though.<br/><br/>241286, Namooya.com main flash does not appear. Site doesn&#39;t exist anymore.<br/><br/>239590, bioware.com uses outdated HierMenus. Site no longer uses HierMenus.
