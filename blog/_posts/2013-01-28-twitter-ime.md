---
title: Twitter IME++
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1109, Twitter: Disable innerHTML updates of the contentEditable element&#39;s DOM if we presume an IME is active, prevents crashes.<br/><br/>PATCH-1107, state.gov: avoid sIFR usage, caused rendering issues in Opera.<br/><br/>PATCH-1105, flipkart.com: Try to prevent double load events on initially empty IFRAMEs.<br/><br/>PATCH-1104, steelarm.ua: text-align breaks hover detection.<br/><br/>PATCH-1103, Nexon: fix old iframe resize script.<br/><br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-1095, Yahoo!SG - reload in unload handler. Site changed.<br/><br/>PATCH-879, gay.com - work around browser blocking. Site changed.<br/><br/>PATCH-658, jabong.com: override usage of CSS content property on element content. Site changed.
