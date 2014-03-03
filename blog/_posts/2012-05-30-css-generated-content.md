---
title: CSS Generated Content
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-667, fake script @defer support on capitecbank.co.za. Well, Presto doesn&#39;t support @defer yet. This should make it easier to log in.<br/><br/>PATCH-665, boortz.com: abuse of CSS generated content on real elements. Presto supports not only selector::before/::after{content: &quot;foo&quot;} but also selector{content:&quot;foo&quot;}. When sites then do body{content: &quot;&quot;} - you get, well, nothing.<br/><br/>PATCH-664, oakley.com: abuse of CSS generated content on real elements.<br/><br/>PATCH-662, nola.com: abuse of CSS generated content on real elements.<br/><br/>PATCH-661, fintyre.it: work around &#39;Netscape&#39;-sniffing.<br/><br/>PATCH-658, jabong.com: abuse of CSS generated content on real elements.<br/><br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-621, Work around browser sniffing in old Macromedia menu script. Replaces older version.
