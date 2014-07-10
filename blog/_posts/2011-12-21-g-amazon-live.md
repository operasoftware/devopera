---
title: G+, Amazon, Live
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

<del>PATCH-562, G+: work around broken image viewer by letting parts of the script think Opera is WebKit. Sigh. Tell us if this causes other brokenness.</del>

As discussed below, Google upgraded again shortly after, this patch causing a conflict, so we took it out.

## Removed patches

- PATCH-485, Add jQuery to Amazon Prime page. Site changed. The observant reader may also have noticed that we now “Mask as Firefox” on Amazon via override_downloaded.ini. A big step, but it seems hard to get any traction for fixing things or their side. Again, tell us if this causes other types of brokenness.
- PATCH-389, Calendar.live.com: Events are shown in squished box because table cells are containers for positioned descendants. Site changed.
- PATCH-242, Login.live.com: Prevent readystatechange events on SCRIPT, causes double banners. Site changed, and breaks beta version.
