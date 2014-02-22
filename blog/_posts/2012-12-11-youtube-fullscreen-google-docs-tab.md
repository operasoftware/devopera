---
title: YouTube Fullscreen, Google Docs Tab
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1086, YouTube - Opera has implemented the latest fullscreen API spec. Compared to previous versions this changes the casing of the methods and attributes; fullScreenEnabled (old) vs. fullscreenEnabled (new). YouTube only implements the old version yet in their HTML5-test.<br/><br/>PATCH-1084, forcechange.com - generated content on real elements.<br/><br/>PATCH-1083, zebra.com - generated content on real elements.<br/><br/>PATCH-1082, coe.int - OTransitionEnd casing.<br/><br/>PATCH-1081, Google Docs - Tab key only works once. Follow-up to previous key patches.<br/><br/>PATCH-1080, hp.com - using only -webkit-, -moz- background gradient
