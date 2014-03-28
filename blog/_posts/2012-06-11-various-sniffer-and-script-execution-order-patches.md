---
title: Various Sniffer and Script Execution Order Patches
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-697, Moodle / YUI upload script execution order. Core issue.
- PATCH-695, area-11.com: prevent high CPU usage. Core issue.
- PATCH-694, b9dm.com: prevent high CPU usage. Core issue.
- PATCH-690, Postpone inserted script which confuses frame breaker if run immediately on ing.nl. Core issue.
- PATCH-689, talenthouse.com: work around browser sniffing.
- PATCH-688, evaair.com: broken sniffing.
- PATCH-682, Fix document viewer on Archives départementales de l’Aisne. Browser sniff.
- PATCH-583, argos.co.uk: work around jQuery1.2/Opera clientHeight issue.
- PATCH-550, eBay: make spatial navigation in main menu work.
- PATCH-537, nra.bg: work around captcha load issue. Browser sniff.

## Changed patches

- PATCH-676, RegExp parsing exception confuses Dojo, breaks BMO.com interface. Small tweak.
- PATCH-325, Y!Mail: click continue link in unsupported browser page.

## Removed patches

PATCH-76, Ensure submit button is visible on ing.nl. Site changed.
