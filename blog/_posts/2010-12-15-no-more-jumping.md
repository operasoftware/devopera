---
title: Less Jumping
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches



PATCH-351, Avoid jumping on generated content on iltasanomat.fi. As reported under the shoutbox this site jumps when hovering. Caused by miscalculation of height of generated content. Really an old bug that was uncovered by other layout fixes.

PATCH-337, Remove browser warning message and allow movie playback on <a href="http://www.voddler.com" target="_blank">voddler.com</a>

## Changed patches



Changed the browser.js version reporting patch to make it run on all opera.com subdomains, not just www. and jp. <a href="http://ru.opera.com/docs/browserjs/" target="_blank">Example</a>

## Removed patches



PATCH-312, Prevent double values submitted from SELECT elements on booking.com. Core fix.

PATCH-307, Prevent double values submitted from SELECT elements on lufthansa.com. Core fix.

PATCH-279, Fix URLs with empty port number on form submit. Core fix.

262693, AOL browser sniffing causes missing styling. Site changed. There are new issues though.

241286, Namooya.com main flash does not appear. Site doesn&#39;t exist anymore.

239590, bioware.com uses outdated HierMenus. Site no longer uses HierMenus.
