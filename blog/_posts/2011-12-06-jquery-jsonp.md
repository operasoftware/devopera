---
title: jQuery.jsonp
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

**Edit:** as Darko Pantić points out below, there was a bug in this patch. Thus a new file has been released with a fix for this.

Added PATCH-554: The jQuery [jsonp plugin][1] contains a workaround for Opera’s historic lack of script.onerror support. Unfortunately the workaround relies on Opera’s old script execution order as well — something that changed with the new HTML5-compatible parser. As a result a lot of content around the web breaks in Presto/2.9.220 onwards. This includes IMDB search suggestions, Hootsuite Twitter search, some Slideshare presentations etc. Even when the plugin is fixed, the propagation will take a while, so we add this generic patch to Browser.js.

[1]: http://code.google.com/p/jquery-jsonp/source/browse/trunk/core/jquery.jsonp.js

Removed PATCH-532: Google docs document list jumps back to top on scroll. Managed a last minute Core fix for this regression.
