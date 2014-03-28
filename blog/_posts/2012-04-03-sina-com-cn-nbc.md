---
title: sina.com.cn, NBC
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-615, Unexpected script loading order breaks video player ready check in NBC video player. Same as PATCH-577.
- PATCH-614, sina.com.cn: video doesn’t play due to removed script readystate support in 11.62 and browser sniffing. No good deed goes unpunished I guess. Opera removes script readystate support for spec and browser compatibility only to stumble across browser sniffing voiding it. So let’s void the browser sniffing ;)

## Removed patches

PATCH-45, AOL.jp sniffing prevents styling. Site changed.

**Note:** only 11.62 updated this time.
