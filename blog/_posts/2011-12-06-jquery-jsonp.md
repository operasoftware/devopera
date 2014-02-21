---
title: jQuery.jsonp
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="color: orangered">Edit: as Darko Pantić points out below, there was a bug in this patch. Thus a new file has been released with a fix for this.</span><br/><br/>Added PATCH-554: The jQuery <a href="http://code.google.com/p/jquery-jsonp/source/browse/trunk/core/jquery.jsonp.js" target="_blank">jsonp plugin</a> contains a workaround for Opera&#39;s historic lack of script.onerror support. Unfortunately the workaround relies on Opera&#39;s old script execution order as well - something that changed with the new HTML5-compatible parser. As a result a lot of content around the web breaks in Presto/2.9.220 onwards. This includes IMDB search suggestions, Hootsuite Twitter search, some Slideshare presentations etc. Even when the plugin is fixed, the propagation will take a while, so we add this generic patch to browser.js.<br/><br/>Removed PATCH-532: Google docs document list jumps back to top on scroll. Managed a last minute Core fix for this regression.<br/><br/>
