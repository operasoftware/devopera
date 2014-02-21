---
title: Skydrive upload improvement, ebay shipping labels printing
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-788, shaw.ca: work around browser sniffing<br/><br/>PATCH-785, tweak hiermenus patch.<br/><br/>PATCH-784, eBay Classifieds - disable block on image uploader.<br/><br/>PATCH-782, skydrive.live.com - improve upload of files. The issue this works around has already been fixed in Core for 12.50. Let us know how this works out.<br/><br/>PATCH-774, Fix postage label printing failure with eBay/PayPal: avoid browser sniffing (already in 12.50-file since last week)<br/><br/>PATCH-743, webs.com - fix reference to stylesheet variable. (already in 12.50-file since last week)<br/><br/><span style="font-size: 140%">Changed patches</span><br/>OTW-3405,  Rabobank cancels t keypress (removed from 12.50 after Core fix)<br/><br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-744, Twitter: work around comma-separated statement limit in Carakan ES engine. Removed from 12.01 file, as a Core fix was patched in.<br/><br/>PATCH-230, Prevent unsolicited access to Java&#39;s deploymenttoolkit. This is more than two years old, if you still have an unpatched Java version that old, please upgrade immediately ;)<br/><br/>MGTRN-2289, tickets.com - scripts are not allowed to use reserved identifier &quot;top&quot;. Site changed.
