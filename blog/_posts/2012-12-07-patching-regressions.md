---
title: Patching Regressions
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-1079, Google voice — invisible contacts. Overflow hidden in nested percentage dimension tables broke slightly in 12.10.
- PATCH-1078, itslearning.com — fix menu. `white-space:nowrap` became a bit too aggressive after a fix in 12.10.

## Removed patches

PATCH-581, Make `getUserMedia()` scripts written according to current spec work by faking `window.URL.createObjectURL`. The patch was way too simplistic so it broke other stuff.
