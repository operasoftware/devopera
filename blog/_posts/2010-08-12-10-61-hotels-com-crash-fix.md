---
title: 10.61 hotels.com crash fix
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
A small accident happened for 10.61 - we introduced a crash when searching on hotels.com. This browser.js is a quick fix for that until we get a fix in Opera proper.<br/><br/><span style="font-size: 140%">Added patches</span><br/>PATCH-276 - avoid crash on hotels.com search result page. This may also happen on other sites, so if you see any crashes that are new to 10.61 this may be it.<br/><br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-186 - include lg.com in browser sniffing workaround patch to get maps.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>CORE-17445 - Detecting style.filter on Hotmail causes missing opacity effects. Site changed.<br/><br/>CORE-17500, Identify as Opera to the client-side sniffer on Hotmail. Site changed. <br/><br/>Opera masked as Firefox to get proper code over HTTP, but needed to identify as Opera for the client-side sniffers. A workaround for our own workaround - how neat :P
