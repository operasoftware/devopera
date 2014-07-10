---
title: YouTube Fullscreen, Google Docs Tab
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-1086, YouTube — Opera has implemented the latest fullscreen API spec. Compared to previous versions this changes the casing of the methods and attributes; `fullScreenEnabled` (old) vs. `fullscreenEnabled` (new). YouTube only implements the old version yet in their HTML5-test.
- PATCH-1084, forcechange.com — generated content on real elements.
- PATCH-1083, zebra.com — generated content on real elements.
- PATCH-1082, coe.int — `OTransitionEnd` casing.
- PATCH-1081, Google Docs — Tab key only works once. Follow-up to previous key patches.
- PATCH-1080, hp.com — using only `-webkit-`, `-moz-` background gradient
