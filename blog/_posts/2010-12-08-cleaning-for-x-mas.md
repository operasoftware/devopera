---
title: Cleaning for X-Mas
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---
Nothing brand new this time, but the web has evolved somewhat this year too, making some patches obsolete.

## Changed patches



UDM patch updated to catch more variants

Created parent .google. patch and moved all Google patches into this one. Makes the file a bit cleaner and saves a few top level if&#39;s.

## Removed patches



PATCH-313, Experimentally disable IE event model to watch compatibility impact. Experiment done, found a couple of breaking things, so leaving support in for now. See <a href="http://my.opera.com/sitepatching/blog/show.dml/21280702" target="_blank">previous blog post for discussions and background</a>.

PATCH-256, Non-flash uploader on Google Doc. This was a workaround for a Flash crash on PPC Mac. Since Opera11 will no longer support PPC Mac it has been removed from 11-file.

PATCH-243, Avoid CPU spike when enabling Drag &#39;n&#39; Zoom on maps.google.com. Core fix.

PATCH-238, Override minmax IE helper script on kasyouen.com. Site redesigned.

PATCH-62, Wrapping content in NewStars section. Site fixed it.

OTW-2979, browser sniffing breaks ibank.isb.ru Bank merged with another bank and site is no longer available.

DSK-224171, MSDN menus are invisible. The menu system as been redesigned and simplified obsoleting patch.

349584, head layout broken on kr.msn.com. Site moved to www.joinsmsn.com and redesigned.

342895, news.msn.co.kr navigation bar is offset from the page. Site moved www.joinsmsn.com and redesigned.

187226, Blogger.com Should distinguish AltGr and Ctrl. Core fix.
