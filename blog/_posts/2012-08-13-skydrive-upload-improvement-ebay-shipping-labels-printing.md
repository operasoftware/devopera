---
title: Skydrive Upload Improvement, Ebay Shipping Labels Printing
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-788, shaw.ca: work around browser sniffing
- PATCH-785, tweak hiermenus patch.
- PATCH-784, eBay Classifieds — disable block on image uploader.
- PATCH-782, skydrive.live.com — improve upload of files. The issue this works around has already been fixed in Core for 12.50. Let us know how this works out.
- PATCH-774, Fix postage label printing failure with eBay/PayPal: avoid browser sniffing (already in 12.50-file since last week)
- PATCH-743, webs.com — fix reference to stylesheet variable. (already in 12.50-file since last week)

## Changed patches

OTW-3405,  Rabobank cancels T keypress (removed from 12.50 after Core fix)

## Removed patches

- PATCH-744, Twitter: work around comma-separated statement limit in Carakan ES engine. Removed from 12.01 file, as a Core fix was patched in.
- PATCH-230, Prevent unsolicited access to Java’s deploymenttoolkit. This is more than two years old, if you still have an unpatched Java version that old, please upgrade immediately ;)
- MGTRN-2289, tickets.com — scripts are not allowed to use reserved identifier `top`. Site changed.
