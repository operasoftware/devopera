---
title: G+, Skydrive, Twitter, Yahoo, BofA
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-680, Work around bug that disregards BASE href on G+. This was a Core regression in 11.60, causing some links to resolve wrongly. Has been properly fixed in 12.
- PATCH-679, skydrive: correct MouseEvent which. When ticking checkboxes on Skydrive you’re supposed to get a menu on the right side to delete, move etc. One can always read [quirksmode][1] and cry over the sorry state of interoperability here and at the same time understand why mistakes can be made in JS code in this area. PATCH-676, RegExp parsing exception confuses Dojo, breaks BMO.com interface. Core bug. Thanks to My Opera user Hypermax for all the [debugging assistance][2].
- PATCH-671, Twitter: avoid ghost @ before username. Core bug with right-to-left mark in empty element causing double rendering of text.
- PATCH-669, Fix 100.5% width search box on Yahoo! Japan. 12 only. After we improved percentage rounding in Core, some elements become too wide in the Opera-specific CSS.
- PATCH-668, Broken browser sniffing prevents SafePass login on Bank of America site. This patch was developed somewhat blindly based on source sent by a user, so it has not been tested very well. Any users of BofA are encouraged to test and yell at us if we broke something :P

[1]: http://www.quirksmode.org/js/events_properties.html#button
[2]: http://my.opera.com/community/forums/topic.dml?id=1390832

## Changed patches

- PATCH-665, boortz.com: override abuse of CSS content on real elements. Formatting changes.
- PATCH-418, Y!Mail Fix inserting links in mail compose screen. Avoid console spam.

## Removed patches

- PATCH-662, nola.com: work around abuse of CSS content on real elements. Site changed.
- PATCH-641, icicibank: fix browser sniffing that causes broken positioning of slideshow on frontpage. Site changed.
- PATCH-567, cnet: remove `box-shadow` to improve scrolling performance. Removed from 12 after Core fix.
