---
title: Summer Cleaning
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Removed from all files

PATCH-276, Avoid crash when searching on hotels.com  Core fix, has been obsolete for while.

PATCH-220, Working around a bug that hides menu entries on fujifilm.ch Site changed  <br/>Original issue has also been fixed in yet to be released Core version.

PATCH-153, kpn.com hides body by mistake, site changed.

PATCH-80, Prevent re-execution of scripts on viddler.com, Core fix

PATCH-72, Sogou.com uses window.MouseEvent , Core fix

PATCH-48, force all images to load before printing TNT delivery sheet, Core fix

PATCH-38, Sniffing on aaa.com prevents zip code search , site changed

PATCH-32, Google Reader wraps long feed titles , Core fix

DSK-275537, insert Vcode elements in advance to avoid insert element during typing, Core fix

363564, FedEx.com mangles tables by turning TDs into block elements , site changed

348818, Pre-filled text as INPUT background not cleared on focus on show.co.kr , site changed

311225, Make Range.prototype.insertNode automatically import nodes from other documents on spaces.live.com, site doesn&#39;t exist anymore

219041,  moneta.co.kr relies on IE quirks for CSS positioning , site changed

86032, CapitalOne login fails - cross-domain access on https disallows setting location , Core fix

## Removed from 12.00 file only

PATCH-453, Avoid plugin-triggered document.cookie setting script deadlock bug on slideshare.net , platform workaround. This means a proper complete fix is still pending, but the workaround should cover most cases.

PATCH-450, Reading document.cookie from mouseup event that also interacts with plugin causes script deadlock on ted.com, platform workaround

PATCH-447, Fix rendering of HTML5 YouTube videos , Core fix. Rendering is still not correct (throbber visible over video, buttons on top of each other), but that is a different issue from this patch.

PATCH-446, Fix missing whitespace removal from script type attribute on americanexpress.com, Core fix

PATCH-424, layout issue on livedoor&#39;s search box, Core fix

PATCH-416, Fix fc2 blog editor position, Core fix

PATCH-411, Y!Mail: remove class that adds generated content for IFRAME, triggers bug that prevents layout updates , Core fix

PATCH-405, Prevent focusing search field and messed up rendering on comcast.net, Core fix

PATCH-392, Fix bestbuy.com menus, Core fix

PATCH-225, Y!Mail: Can not scroll to see all messages in inbox if list is taller than 32767px , Core fix

PATCH-215, Broken expanding sections on nhl.com, Core fix.
