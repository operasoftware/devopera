---
title: autocomplete, razr, Quora, Y!Mail
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>fixJQueryAutocomplete() - generic patch to fix the browser sniffing in the obsolete autocomplete plugin for jQuery. Widely used and breaks after we fixed key event handling in Opera. 12.10+<br/><br/>PATCH-876, razr.com: CSS url() argument takes quotes according to CSSOM, but not all browsers do it that way, so we patch.<br/><br/>PATCH-874, Fix transition event case to un-confuse jQuery. A bit unfortunate renaming of event in Opera causes some breakage here and there. 12.0x only, as 12.10+ has removed prefixes.<br/><br/>PATCH-871, udemy.com: work around lack of pointer-events for non-SVG content in Opera.<br/><br/>PATCH-873, onlystudy.cn: make sure an event is passed in to the handler.<br/><br/>PATCH-863, Throttle scroll events and certain timeouts to improve Quora performance. Quora is still misbehaves in 12.0x due to other Core issues. Should be better in 12.10.<br/><br/>PATCH-862, hipmunk.com: avoid header table cell collapse. Core bug.<br/><br/>PATCH-794, Prevent broken innerHTML setter on Disney booking site.<br/><br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-325, Y!Mail sniffing. Regional sites use different &quot;browser not supported&quot; screens, try to catch more of them.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-261, Hide broken implementation of showModalDialog to make object detection reliable. The broken implementation will be removed in 12.10. May re-surface at some point, who knows.<br/>
