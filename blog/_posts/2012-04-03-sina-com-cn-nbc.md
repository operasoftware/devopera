---
title: sina.com.cn, NBC
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-615, Unexpected script loading order breaks video player ready check in NBC video player. Same as PATCH-577.<br/><br/>PATCH-614, sina.com.cn: video doesn&#39;t play due to removed script readystate support in 11.62 and browser sniffing. No good deed goes unpunished I guess. Opera removes script readystate support for spec and browser compatibility only to stumble across browser sniffing voiding it. So let&#39;s void the browser sniffing ;)<br/> <br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-45, AOL.jp sniffing prevents styling. Site changed.<br/><br/><br/>Note: only 11.62 updated this time.
