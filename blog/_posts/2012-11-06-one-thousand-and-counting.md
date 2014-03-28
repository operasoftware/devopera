---
title: One Thousand and Counting
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

**Edit:** released updated file with some GMail patches.
**Edit:** extra variable check in PATCH-1008.

A small milestone reached with PATCH-1000 today. The patch database predates this numbering though and is up to about 1570 entries. Adding the entries in override_downloaded.ini we are probably closing in on 2000 site patches over the years.

## Added patches

- PATCH-1008, GMail: new composer recipient autocomplete arrow navigation. For 12.10 only as Opera fixed keyboard event handling we need to workaround the browser sniffing.
- PATCH-1007, downg.com: decrease font-size to avoid wrapping.
- PATCH-1000, ozakiverse.com — sniffing inverses wheelDelta.

For Opera 9 in June 2006 we added support for the mousewheel event. Unfortunately with a bug inversing the wheelDelta value. This was fixed for Opera 9.20 in April 2007. However we still encounter this

	if (window.opera) { delta = -delta; }

On various sites (big ones too) The moral is: get it right the first time.

- PATCH-996, Y!Mail Allow focusing address selector field by mouse click. Similar to [PATCH-417][1]. As reported by [BogdanM][2]
- PATCH-995, hbs.edu — avoid abuse of generated content.
- PATCH-994, add future-shop CMS gradients.
- PATCH-993, thenextweb.com, top bar placed too low. Core bug.
- PATCH-992, GMail — Remove Opera-only CSS selector that sets transparent background color for selections.
- PATCH-988, uye.memurlar.net — fix table layout.

[1]: http://my.opera.com/sitepatching/blog/2011/05/24/y-mail
[2]: http://my.opera.com/sitepatching/blog/2012/10/31/google-documents-etc?cid=99004772#comment99004772
