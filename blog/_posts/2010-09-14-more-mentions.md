---
title: More @Mentions
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches



PATCH-299 - Make deleting @mentions entries on Facebook work better.

PATCH-298 - Disable sniffing in old HTMLArea editors.

PATCH-294 - Hide double button text on weather.com. Purely cosmetic patch to an issue caused by some CSS hackery.

PATCH-208 - Caja Madrid hides login form by CSS mistake. This patch was removed for a while, but now re-added as it was still needed on some other sub-pages, as pointed out by <a href="http://my.opera.com/jorge.ca/" target="_blank">jorge.ca</a>

## Changed patches



Replace all instances of arguments.slice(2) with slice.call(arguments, 2) since Carakan doesn&#39;t support the former anymore.

Added another name to the HV menu file name pattern matching

## Removed patches



PATCH-203 and PATCH-292 - Prevent script scheduler hanging due to triple markup/script insertion into editor IFRAME. Core fix for TinyMCE and Facebook. Removed for 10.70 only.
