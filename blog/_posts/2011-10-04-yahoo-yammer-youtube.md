---
title: Yahoo!, Yammer, YouTube
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-514, paper.li: allow clicking headers despite lack of pointer-events support.<br/><br/>PATCH-512, Yammer: work around missing exception when strictly comparing doc from other origin with undefined. Should make it easier to accept invitations. There are still some issues on the site though.<br/><br/>PATCH-510, Yahoo!: Enable logging in with other auth services (like Google, Facebook), work around cross-domain navigation block on https sites. Opera is stricter than other browsers here.<br/><br/>PATCH-505, YouTube: avoid deadlock when changing volume on windowless plugins. Mostly a problem on Mac.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-452, avoid break on browser.js execution when loading missingplugin.svg. Discovered by <a href="http://my.opera.com/sitepatching/blog/2011/09/27/cleaning-menu-system-patches#comment71299712" target="_blank">timmi</a>
