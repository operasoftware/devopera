---
title: Marlin sync
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

Marlin got a major [Core version bump][1] last week, up to Presto/2.12.363. This obsoletes a number of patches. (we’re only releasing a 12.50 file today)

[1]: http://my.opera.com/desktopteam/blog/2012/08/03/summer-core-update

## Added patches

- PATCH-774, Fix postage label printing failure with eBay/PayPal: avoid browser sniffing
- PATCH-774, Fix postage label printing failure with eBay/PayPal: `frame.print()` bug workaround
- PATCH-743, webs.com - fix reference to stylesheet variable.

## Removed patches

- PATCH-714, facebook: prevent chat window overflow. Core fix.
- PATCH-695, area-11.com: prevent high CPU usage. Core fix.
- PATCH-694, b9dm.com: prevent high CPU usage. Core fix.
- PATCH-652, Fix displaying recommended items in Amazon. Core fix.
- PATCH-636, uol.com.br: work around abs.pos.bottom.align core bug. Core fix.
- PATCH-631, Walmart menus messed up by `hasOwnProperty()` regression. Core fix.
- PATCH-610, GMaps: avoid autoclose of problem reporting dialog. Core fix.
- PATCH-605, remove document.charset. Core fix.
- PATCH-604, Facebook: work around iframe load event issue. Core fix.
- PATCH-566, GMail: override overflow and fixed position styles to improve scrolling performance. Core fix.
- PATCH-545, Bing Image Search adds history entries when scrolling results. Core fix.
- PATCH-522, wangpiao.com: allow seat selection. Core fix.
- PATCH-512, Yammer: work around missing exception when strictly comparing doc from other origin with undefined. Core fix.
- PATCH-512, Yammer: work around limitation on setting document.referrer inside https `<iframe>`. Core fix.
- PATCH-510, Yahoo!: Enable logging in with other auth services, work around cross-domain navigation block. Core fix.
- PATCH-76, Make sure `getAttribute()` does not confuse an old BackBase lib’s code where it uses namespace-like syntax. Core fix.
