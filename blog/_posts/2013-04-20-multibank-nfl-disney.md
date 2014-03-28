---
title: Multibank, NFL, Disney
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

PATCH-1133, multibank.pl — don’t send keypress events for shortcut keys, JS thinks every key is an enter key.

## Changed patches

- PATCH-936, nfl.com: avoid hundreds of reflows. Regexp update.
- PATCH-794, Prevent broken innerHTML setter on Disney booking site. Same bug, different wrapping.
