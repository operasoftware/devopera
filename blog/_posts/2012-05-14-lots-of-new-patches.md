---
title: Lots of New Patches
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
We&#39;ve been busy the past week, looking at some issues that have been around for a while without response from site owners. Time to patch. Expect more the coming weeks.<br/><br/><span style="font-size: 140%">Added patches</span><br/>PATCH-646, Fix AAA TripTik sniffing.<br/><br/>PATCH-645, meitu.com: sniffs for &quot;Gecko&quot;, no login for Opera users.<br/><br/>PATCH-644, Resolving sbrf.ru&#39;s menus mouseout confusion by helping them use mouseleave instead. Menus close too fast.<br/><br/>PATCH-643, nab.com.au: avoid browser warning.<br/><br/>PATCH-641, icicibank: fix browser sniffing that causes broken positioning of slideshow on frontpage.<br/><br/>PATCH-638, frys.com: avoid racy framebuster due to lack of script async in Presto. For now.<br/><br/>PATCH-636, uol.com.br: work around abs.pos.bottom.align core bug. 12.00 only, Core regression to be fixed shortly.<br/><br/>PATCH-633, washingtonpost.com: No load fires for LINK element if href returns an empty file with text/javascript type. Use proper types please :)<br/><br/>PATCH-631, Walmart menus messed up by hasOwnProperty() regression. 12.00 only, should be fixed in Core shortly.<br/> <br/>PATCH-630, facebook: work around Opera&#39;s too strict origin checks on https for https -&gt; http(s) other site -&gt; https IFRAME communication to allow login from 3rd party sites, like my.opera.com :P  This is a hack as good as they get and for 11.6x only. There will be a proper Core fix coming to 12.00.<br/><br/>Look out for regressions.<br/> <br/>PATCH-629, yr.no: don&#39;t define responseXML for text/plain responses, even if it looks like valid markup. Core bug.
