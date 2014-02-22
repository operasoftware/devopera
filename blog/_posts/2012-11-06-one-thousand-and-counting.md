---
title: One Thousand and Counting
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
Edit: released updated file with some GMail patches.<br/>Edit2: extra variable check in PATCH-1008.<br/><br/>A small milestone reached with PATCH-1000 today. The patch database predates this numbering though and is up to about 1570 entries. Adding the entries in override_downloaded.ini we are probably closing in on 2000 site patches over the years.<br/><br/><span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1008, GMail: new composer recipient autocomplete arrow navigation. For 12.10 only as Opera fixed keyboard event handling we need to workaround the browser sniffing.<br/><br/>PATCH-1007, downg.com: decrease font-size to avoid wrapping.<br/><br/>PATCH-1000, ozakiverse.com - sniffing inverses wheelDelta. <br/><br/>For Opera 9 in June 2006 we added support for the mousewheel event. Unfortunately with a bug inversing the wheelDelta value. This was fixed for Opera 9.20 in April 2007. However we still encounter this<br/><pre>
if (window.opera) { delta = -delta; }
</pre><br/>on various sites (big ones too) The moral is: get it right the first time.<br/><br/>PATCH-996, Y!Mail Allow focusing address selector field by mouse click. Similar to <a href="http://my.opera.com/sitepatching/blog/2011/05/24/y-mail" target="_blank">PATCH-417</a>. As reported by <a href="http://my.opera.com/sitepatching/blog/2012/10/31/google-documents-etc?cid=99004772#comment99004772" target="_blank">BogdanM</a><br/><br/>PATCH-995, hbs.edu - avoid abuse of generated content.<br/><br/>PATCH-994, add future-shop CMS gradients.<br/><br/>PATCH-993, thenextweb.com, top bar placed too low. Core bug.<br/><br/>PATCH-992, GMail - Remove Opera-only CSS selector that sets transparent background color for selections.<br/><br/>PATCH-988, uye.memurlar.net - fix table layout.
