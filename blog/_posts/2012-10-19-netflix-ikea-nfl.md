---
title: Netflix, IKEA, NFL
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-946, netflix: avoid player init issues. CSS load race condition.
- PATCH-943, thaiair.co.jp — fix drop-down menu positioning. Sniffing.
- PATCH-940, ikea.com — prevent double registering of click handler. Sniffing.
- PATCH-937, omv.cz: old iframe resize script. Sniffing.
- PATCH-936, nfl.com: avoid hundreds of reflows. Mostly slow Opera.
- PATCH-934, ruter.no: jQuery autocompleter.
- PATCH-932, Work around race condition bug where script calls `selection.collapseToEnd()` before there is a selection, makes it possible to reply on MS forum. Added for 12.10.
- PATCH-931, viaplay.no: dismiss browser warning.
- PATCH-929, dickmorris.com — avoid empty lightbox. Abuse of content property.
- PATCH-847, kmart.com — fix moving product thumbnail images. Core bug.
