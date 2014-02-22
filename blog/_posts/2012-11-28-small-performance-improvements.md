---
title: Small Performance Improvements
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1077, carrefour.it - speed up custom sort function. The way written it causes a reflow for every iteration. Presto isn&#39;t too fast in this case, causing what looks like a freeze, unless you are very patient.<br/><br/>PATCH-1076, usbank.com - avoid unsupported browser alert. Netscape-style browser sniffing.<br/><br/>PATCH-1075, mail.live.com - make Facebook status flyout clickable. Presto bug.<br/><br/>PATCH-1072, qidian.com - work around base resolving issue in Presto. 12.10 only.<br/><br/>PATCH-1071, aliorbank.pl - show invisible borders. Rounding issue with &lt;0.09em wide borders<br/><br/>PATCH-1070, fix infinite load issue with webcollage script expecting different event order. Originally meant as a specific site fix, but thanks to rseiler&#39;s <a href="http://my.opera.com/sitepatching/blog/show.dml/56235332#comment100029282" target="_blank">work</a> we made it a generic fix.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-737, mog.com - report Opera as a supported browser. Site changed.
