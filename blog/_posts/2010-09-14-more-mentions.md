---
title: More @mentions
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-299 - Make deleting @mentions entries on Facebook work better.<br/><br/>PATCH-298 - Disable sniffing in old HTMLArea editors.<br/><br/>PATCH-294 - Hide double button text on weather.com. Purely cosmetic patch to an issue caused by some CSS hackery.<br/><br/>PATCH-208 - Caja Madrid hides login form by CSS mistake. This patch was removed for a while, but now re-added as it was still needed on some other sub-pages, as pointed out by <a href="http://my.opera.com/jorge.ca/" target="_blank">jorge.ca</a><br/> <br/><span style="font-size: 140%">Changed patches</span><br/>Replace all instances of arguments.slice(2) with slice.call(arguments, 2) since Carakan doesn&#39;t support the former anymore.<br/><br/>Added another name to the HV menu file name pattern matching<br/> <br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-203 and PATCH-292 - Prevent script scheduler hanging due to triple markup/script insertion into editor IFRAME. Core fix for TinyMCE and Facebook. Removed for 10.70 only.
