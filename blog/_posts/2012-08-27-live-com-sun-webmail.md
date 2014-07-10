---
title: Live.com, Sun Webmail
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-823, img.complete must be false while loading a .js file into it. A caching hack on mail.live.com breaks in Opera if the js file is already loaded, causing the contact list (“People”) to fail.
- PATCH-815, github: work around misplaced arrows. Core bug.
- PATCH-810, Emulating IE’s `cssText` property on style sheets. Improves Skydrive. Still hoping for a site fix.

## Changed patches

- PATCH-788, shaw.ca: work around browser sniff. Make patch apply only on www. as it broke the webmail.
- PATCH-128, Sun Webmail set domain fix. Improve patch to catch more cases. Thanks to JD Lien for debugging help.

## Removed patches

- PATCH-801, schrack.com: prevent outdated opera-specific stylesheet. Site changed.
- PATCH-84, Santander bank prevents typing certain keys. Site redesigned.
