---
title: Netflix, IKEA, NFL
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-946, netflix: avoid player init issues. CSS load race condition.<br/><br/>PATCH-943, thaiair.co.jp - fix drop-down menu positioning. Sniffing.<br/><br/>PATCH-940, ikea.com - prevent double registering of click handler. Sniffing.<br/><br/>PATCH-937, omv.cz: old iframe resize script. Sniffing.<br/><br/>PATCH-936, nfl.com: avoid hundreds of reflows. Mostly slow Opera.<br/><br/>PATCH-934, ruter.no: jQuery autocompleter.<br/><br/>PATCH-932, Work around race condition bug where script calls selection.collapseToEnd() before there is a selection, makes it possible to reply on MS forum. Added for 12.10.<br/><br/>PATCH-931, viaplay.no: dismiss browser warning.<br/><br/>PATCH-929, dickmorris.com - avoid empty lightbox. Abuse of content property.<br/><br/>PATCH-847, kmart.com - fix moving product thumbnail images. Core bug.<br/><br/>
