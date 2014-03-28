---
title: Post-Summer Update
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches for Blink

PATCH-1150, cabrio.ch: UDM Menu sniffing for `navigator.vendor`. Le sigh!

## Removed patches from Blink

PATCH-1141, google.com — hide voice input icon while it is unsupported. Google fixed the feature detection, so this patch and the July [mishap][1] can be avoided completely.

[1]: http://my.opera.com/sitepatching/blog/show.dml/67831402#comment110389762

## Removed patches for Presto

- PATCH-905, rememberthemilk.com: adapt to Opera 12.10’s more compliant key event code. Site fixed it.
- PATCH-857, hotels.ctrip.com: word around iframe load event issue. Site changed.
- PATCH-475, Avoid overflowing text on 265.com. Site changed.
