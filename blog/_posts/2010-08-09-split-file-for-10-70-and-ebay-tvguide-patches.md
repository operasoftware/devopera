---
title: Split File for 10.70 and eBay, TVGuide Patches
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

Since 10.70 has a newer core than 10.60 we&#39;ve decided to split the files. The difference isn&#39;t that big yet, the most visible change being Google Calendar actually working again in 10.70.

## Added patches

PATCH-274, TVGuide.com doesn&#39;t show program descriptions due to browser sniffing. Patch makes Opera pretend to be Safari in a specific script.

PATCH-272, Turns out we have an incomplete implementation of addEventListener on XmlHttpRequest objects, causing a failure to load the map at map.naver.com. Patch voids the method.

PATCH-270, Make virtual keyboard appear for pass code entry on societegenerale.fr. A layout bug caused some images not to load. Will be fixed in core shortly.

PATCH-268, ebay picture upload. Opera has stricter security checks than the other browsers wrt. domain checks in pop-ups and iframes just to be on the safe side. In essence Opera defaults to allowing only certain things, while the HTML5 spec defaults to allow most things but block specifics. It&#39;s hard work being the safest browser ;)

PATCH-267, Make BBCode editor buttons on computerra.ru work by disabling Opera sniffing.

PATCH-265, nyteknik.se uses &quot;parent&quot; as variable name, causing a script loop using all CPU. Again, Opera is stricter than the rest by not allowing overwriting certain global script variables (parent, top, self) to protect against certain cross domain attacks. Other browsers have similar blocks in place, but wiih slightly smarter implementations.

## Removed patches

PATCH-262, Layout regression squishes event detail edit screen on Google Calendar (only removed in 10.70 file)

PATCH-245, Work around transparent background on Tuenti chat (core fix)

PATCH-244, Make sure prototype.js doesn&#39;t overwrite Array concat on toyota.com (site changed)

PATCH-107, attachments download in Hotmail (site changed)

PATCH-69, hide SVG&#39;s style.filter property from script on map.sogou.com because it thinks we are IE (site changed)

344935, Allow frame nesting on web.tiscali.it (site changed)

OTW-4917, cs.kddi.com closed a window too soon (site changed)
