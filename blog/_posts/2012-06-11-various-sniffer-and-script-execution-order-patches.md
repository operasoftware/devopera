---
title: Various sniffer and script execution order patches
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-697, Moodle / YUI upload script execution order. Core issue.<br/><br/>PATCH-695, area-11.com: prevent high CPU usage. Core issue.<br/><br/>PATCH-694, b9dm.com: prevent high CPU usage. Core issue.<br/><br/>PATCH-690, Postpone inserted script which confuses frame breaker if run immediately on ing.nl. Core issue.<br/><br/>PATCH-689, talenthouse.com: work around browser sniffing.<br/><br/>PATCH-688, evaair.com: broken sniffing.<br/><br/>PATCH-682, Fix document viewer on Archives départementales de l&#39;Aisne. Browser sniff.<br/><br/>PATCH-583, argos.co.uk: work around jQuery1.2/Opera clientHeight issue.<br/><br/>PATCH-550, eBay: make spatial navigation in main menu work.<br/><br/>PATCH-537, nra.bg: work around captcha load issue. Browser sniff.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-676, RegExp parsing exception confuses Dojo, breaks BMO.com interface. Small tweak.<br/><br/>PATCH-325, Y!Mail: click continue link in unsupported browser page.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-76, Ensure submit button is visible on ing.nl. Site changed.<br/>
