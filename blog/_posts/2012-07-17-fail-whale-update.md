---
title: Fail Whale Update
authors:
- hallvord-steen
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

Oops, we [broke Twitter][1]. A good reason to get a new Browser.js update out.

[1]: http://my.opera.com/hallvors/blog/2012/07/17/twitter-crashes-itself-with-commas

## New patches:

- PATCH-325, Y!Mail work around browser blocking (Yahoo Mail Japan only)
- PATCH-730, Menu misplaced on [treasury.gov due][2] to window.opera sniffing in .NET JS library
- PATCH-738, Work around sniffing hiding submit buttons on [passport2.hp.com][3]
- PATCH-741, Avoid an Opera `pushState()` and URL resolution bug that breaks navigation on [help.adobe.com][4]
- PATCH-736, Work around browser sniffing that hides [Spain’s stock exchange’s menu][5]. We’ll see if this has any positive effect on the Spanish economy…
- PATCH-734, Avoid IE PNG transparency bug workaround that hides submit button on [E-pagofacil][6]
- PATCH-742, Work around browser sniffing that breaks [traffic.com][7]
- PATCH-744, [Twitter][8]: work around comma-separated statement limit in Carakan ES engine

[2]: http://www.treasury.gov
[3]: http://passport2.hp.com
[4]: http://help.adobe.com
[5]: http://www.bolsomadrid.es
[6]: http://www.e-pagofacil.com/espanol/site/compras_internet.php
[7]: http://www.traffic.com
[8]: http://www.twitter.com

## Changed patches

PATCH-689 [talenthouse.com][9]: work around browser sniff changed to avoid browser warning screen entirely, rather than clicking through it automatically

[9]: http://www.talenthouse.com

## Removed patches

PATCH-559 Browser sniffing on Raku Bus (site changed) Betfair relies on firstChild defined on attribute nodes (older patch, noticed this week that we have had a core fix for quite a while…)

So, now we just hope you get the new Browser.js before you try to use the updated Twitter :)
