---
title: Y!Mail Update
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

Another day, another file.

## Added patches

- PATCH-497, Avoid focus problems using IME on empty content-editable elements on qq.com. Opera removes focus from empty contentEditable elements when using IME.
- PATCH-492, virginamerica.com — Fix browser sniffing.

## Changed patches

- PATCH-411, PATCH-417, PATCH-418 and PATCH-460 — Yahoo! has moved the Neo (beta) mail to production, so we have to make the Neo patches apply to normal inbox as well. For now the patches to the “old” version are still active, in case they haven’t upgraded everyone yet. We aim to disable the old patches within a few weeks.
- PATCH-489, Add jQuery to Amazon product page. Fix regexp to avoid double jQuery and subsequent check-out problems.
