---
title: Small Performance Improvements
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-1077, carrefour.it — speed up custom sort function. The way written it causes a reflow for every iteration. Presto isn’t too fast in this case, causing what looks like a freeze, unless you are very patient.
- PATCH-1076, usbank.com — avoid unsupported browser alert. Netscape-style browser sniffing.
- PATCH-1075, mail.live.com — make Facebook status flyout clickable. Presto bug.
- PATCH-1072, qidian.com — work around base resolving issue in Presto. 12.10 only.
- PATCH-1071, aliorbank.pl — show invisible borders. Rounding issue with < 0.09em wide borders
- PATCH-1070, fix infinite load issue with webcollage script expecting different event order. Originally meant as a specific site fix, but thanks to rseiler’s [work][1] we made it a generic fix.

[1]: http://my.opera.com/sitepatching/blog/show.dml/56235332#comment100029282

## Removed patches

PATCH-737, mog.com — report Opera as a supported browser. Site changed.
