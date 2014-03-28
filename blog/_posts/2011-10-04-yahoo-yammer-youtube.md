---
title: Yahoo!, Yammer, YouTube
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-514, paper.li: allow clicking headers despite lack of pointer-events support.
- PATCH-512, Yammer: work around missing exception when strictly comparing doc from other origin with undefined. Should make it easier to accept invitations. There are still some issues on the site though.
- PATCH-510, Yahoo!: Enable logging in with other auth services (like Google, Facebook), work around cross-domain navigation block on https sites. Opera is stricter than other browsers here.
- PATCH-505, YouTube: avoid deadlock when changing volume on windowless plugins. Mostly a problem on Mac.

## Changed patches

PATCH-452, avoid break on Browser.js execution when loading missingplugin.svg. Discovered by [timmi][1]

[1]: http://my.opera.com/sitepatching/blog/2011/09/27/cleaning-menu-system-patches#comment71299712
