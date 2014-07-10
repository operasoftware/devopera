---
title: 10.61 Hotels.com Crash Fix
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

A small accident happened for 10.61 - we introduced a crash when searching on hotels.com. This browser.js is a quick fix for that until we get a fix in Opera proper.

## Added patches



PATCH-276 - avoid crash on hotels.com search result page. This may also happen on other sites, so if you see any crashes that are new to 10.61 this may be it.

## Changed patches



PATCH-186 - include lg.com in browser sniffing workaround patch to get maps.

## Removed patches

CORE-17445 - Detecting style.filter on Hotmail causes missing opacity effects. Site changed.

CORE-17500, Identify as Opera to the client-side sniffer on Hotmail. Site changed.

Opera masked as Firefox to get proper code over HTTP, but needed to identify as Opera for the client-side sniffers. A workaround for our own workaround - how neat :P
