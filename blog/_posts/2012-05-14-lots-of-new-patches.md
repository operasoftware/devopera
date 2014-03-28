---
title: Lots of New Patches
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

We’ve been busy the past week, looking at some issues that have been around for a while without response from site owners. Time to patch. Expect more the coming weeks.

## Added patches

- PATCH-646, Fix AAA TripTik sniffing.
- PATCH-645, meitu.com: sniffs for Gecko, no login for Opera users.
- PATCH-644, Resolving sbrf.ru’s menus `mouseout` confusion by helping them use `mouseleave` instead. Menus close too fast.
- PATCH-643, nab.com.au: avoid browser warning.
- PATCH-641, icicibank: fix browser sniffing that causes broken positioning of slideshow on frontpage.
- PATCH-638, frys.com: avoid racy framebuster due to lack of script async in Presto. For now.
- PATCH-636, uol.com.br: work around abs.pos.bottom.align core bug. 12.00 only, Core regression to be fixed shortly.
- PATCH-633, washingtonpost.com: No load fires for `<link>` element if href returns an empty file with text/JavaScript type. Use proper types please :)
- PATCH-631, Walmart menus messed up by `hasOwnProperty()` regression. 12.00 only, should be fixed in Core shortly.
- PATCH-630, facebook: work around Opera’s too strict origin checks on https for https -> http(s) other site -> https `<iframe>` communication to allow login from 3rd party sites, like my.opera.com :P This is a hack as good as they get and for 11.6x only. There will be a proper Core fix coming to 12.00. Look out for regressions.
- PATCH-629, yr.no: don’t define `responseXML` for `text/plain` responses, even if it looks like valid markup. Core bug.
