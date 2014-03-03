---
title: May Mini Update, Part Deux
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-246 - <a href="http://ajaxian.com/" target="_blank">ajaxian.com</a> freezes - workaround for core freeze bug with floated iframes in width restricted elements.<br/><br/>PATCH-245 - <a href="http://www.tuenti.com/" target="_blank">tuenti.com</a> chat blocked/not working. This patch is in three parts. The first is to spoof as Firefox to avoid the blocking. The second is a painting issue with nested absolutely positioned elements (fixed internally but not released yet). The third is about extra linebreaks when using &quot;enter&quot; to send message. Patch is to cancel event.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-46 - <a href="http://www.dfdsseaways.no/" target="_blank">dfdsseaways</a> calendar was 1900 years into the future. With Carakan getYear() again returns the equivalent of getFullYear()-1900, while in Futhark getYear and getFullYear returned the same. The battle between being compatible with IE or the other browsers... The patch actually broke the calendar in 10.50, so removed.
