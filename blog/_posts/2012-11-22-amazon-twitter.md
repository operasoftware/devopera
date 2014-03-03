---
title: Amazon, Twitter
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-1069, postdanmark.dk - remove sniff in jQuery postMessage plugin as it incorrectly assumes lack of postMessage.<br/><br/>PATCH-1068, wireless.amazon - avoid looping hash decode causing freeze. Side effect of our Mask as Firefox mode.<br/><br/>PATCH-1067, qz.com - make maps draggable despite missing pointer-events support in Presto.<br/><br/>PATCH-1065, polskastacja.pl - remove sniffing to fix stream selection drop-down.<br/><br/>PATCH-1064, twitter - restart counter after window was unfocused then focused. No browser really agrees on what to do with JS intervals in background windows.
