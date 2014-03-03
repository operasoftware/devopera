---
title: Weibo, SoftBank, Twitter, GMail Again
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-590, weibo.com: work around missing KeyboardEvent interface. 11.62 only, as site expects KeyboardEvent to be present if attachEvent is not. Not true quite yet (will be though)<br/><br/>PATCH-588, SoftBank Mobile History Plugin browser sniffing.<br/><br/>PATCH-561, Twitter: allow selection in TEXTAREA. Core bug where re-setting styles of textarea kills selection.<br/><br/>PATCH-422, Miscalculated IFRAME height prevents booking on rede-expressos. Removed last week, but was apparently still needed.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-585, 4chan: add bottom margin to blockquote for better readability, improved when selected.<br/><br/>PATCH-582, GMail: override workaround for old font-size bug in Opera, add !important in the hope that it will take effect for everyone, not just me ;-)
