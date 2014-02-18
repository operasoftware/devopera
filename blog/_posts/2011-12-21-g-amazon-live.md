---
title: G+, Amazon, Live
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/><s>PATCH-562, G+: work around broken image viewer by letting parts of the script think Opera is WebKit. Sigh. Tell us if this causes other brokenness.</s><br/>As discussed below, Google upgraded again shortly after, this patch causing a conflict, so we took it out.<br/> <br/> <br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-485, Add jQuery to Amazon Prime page. Site changed. The observant reader may also have noticed that we now &quot;Mask as Firefox&quot; on Amazon via override_downloaded.ini. A big step, but it seems hard to get any traction for fixing things or their side. Again, tell us if this causes other types of brokenness.<br/><br/>PATCH-389, Calendar.live.com: Events are shown in squished box because table cells are containers for positioned descendants. Site changed.<br/><br/>PATCH-242, Login.live.com: Prevent readystatechange events on SCRIPT, causes double banners. Site changed, and breaks beta version.
