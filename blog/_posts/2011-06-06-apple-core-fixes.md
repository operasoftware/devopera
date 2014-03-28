---
title: Apple Core Fixes
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---
While last week was about Core fixes, this week is about fixes done by the sites themselves. Plus some new patches.

## Added patches



PATCH-427, Ad covers content on tradera.com. Core issue where margin on cleared floats collapses when it shouldn&#39;t.

PATCH-426, Add to favourites fails on BBC iPlayer because of script loading/parsing timing issue. Core bug. Fix under construction, hopefully sometime later this year.

PATCH-425, Hide document.attachEvent to get W3C-event.button-value-compatible code on web.qq.com. Makes the &quot;desktop&quot; icons clickable.

PATCH-424, layout issue on livedoor&#39;s search box. Core bug. Same as PATCH-416 from last week. Will be fixed.

PATCH-422, Miscalculated IFRAME height prevents booking on rede-expressos.pt. Core bug. How high is a 100% high iframe in a table cell? Depends on rendering mode. Hard to get right. Thanks to the persistent Portuguese posters over at <a href="http://my.opera.com/community/forums/topic.dml?id=570211" target="_blank">http://my.opera.com/community/forums/topic.dml?id=570211</a>

PATCH-421, Enable news ticker on balkanweb.com. Work around sniffer.

## Removed patches



PATCH-400, Make sure events can reach FBI menu. Core fix. Same as PATCH-205 on bild.de.

<s>PATCH-387, Make Apple menu visible. Site fixed.</s> Update: patch still in place for store.apple.com

PATCH-385, Apple.com thinks Opera&#39;s CSS property vendor prefix is o instead of O on JS properties. Site fixed.

PATCH-337, Remove browser warning message and allow movie playback on Voddler.com. Site fixed.

PATCH-266, Opera disallows using reserved word top as variable name on MySpace. Site changed.
