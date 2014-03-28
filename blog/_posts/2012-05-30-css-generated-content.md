---
title: CSS Generated Content
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-667, fake script `@defer` support on capitecbank.co.za. Well, Presto doesn’t support @defer yet. This should make it easier to log in.
- PATCH-665, boortz.com: abuse of CSS generated content on real elements. Presto supports not only `selector::before/::after{content: 'foo'}` but also `selector{content:'foo'}`. When sites then do `body {content: ''}` — you get, well, nothing.
- PATCH-664, oakley.com: abuse of CSS generated content on real elements.
- PATCH-662, nola.com: abuse of CSS generated content on real elements.
- PATCH-661, fintyre.it: work around Netscape-sniffing.
- PATCH-658, jabong.com: abuse of CSS generated content on real elements.

## Changed patches

PATCH-621, Work around browser sniffing in old Macromedia menu script. Replaces older version.
