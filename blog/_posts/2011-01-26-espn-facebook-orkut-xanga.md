---
title: ESPN, Orkut, Xanga
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-375, Make sure the ESPN polls work. Slightly broken sniffing sends Opera a non-scriptable Flash element. Just adding &quot;netscape&quot; to the UA-string to make it work.<br/><br/>PATCH-374, Panning an Orkut profile scrolls down to an unwanted loading message, hide it. Core bug makes it possible to scroll overflow:hidden elements into view. Thanks to <a href="http://my.opera.com/rafaelluik/" target="_blank">Rafael</a> for patch.<br/><br/>PATCH-373 Xanga TinyMCE Editor. Xanga uses an old version of TinyMCE which has issues with document domain in Opera. Causes extra linebreaks.<br/><br/><s>PATCH-372 Facebook Connect fails in Facebook apps and all over the web due to attachEvent &quot;detection&quot;. Script thinks Opera is IE, subsequently the Facebook comment boxes on third party sites do not load.</s> <br/><br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-367, Correct placement of marquee on in.gr. Make sure is applies to to more that just www. Thanks to <a href="http://my.opera.com/Galileo/" target="_blank">Galileo</a> for pointing it out.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-301, Disable browser blocking on freemail.hu. Freemail removed the browser sniffing.
