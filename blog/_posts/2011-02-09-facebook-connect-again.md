---
title: Facebook Connect Again
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-381, Prevent scroll position reset on grooveshark.com search results. Core bug where scroll position is reset when setting unselectable attribute on body.<br/><br/>PATCH-380, Avoid blinking search field on meta.ua. Core bug where toggling display of left and right floated elements causes parent to shrink and grow when it shouldn&#39;t.<br/><br/>PATCH-372, Facebook Connect fails in Facebook apps and all over the web due to attachEvent IE-detection and subsequently getting wrong Flash embed. Second attempt at patching this. Last time (two weeks ago) it had ugly side effects. After some testing, analysis and development of a new patch we think it is ready for public consumption.
