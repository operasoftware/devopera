---
title: TED, KLM, JapanPost
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

PATCH-450, ted.com, reading document.cookie from mouseup event that also interacts with plugin causes script deadlock. After popular demand in the previous blog post comments Hallvord worked hard to solve this, and now you can get subtitles without page becoming unresponsive.

PATCH-449, japanpost.jp, Fix broken _supportsDOM function. Makes it possible to accept terms of service.

PATCH-448, klm.com, Fix broken resizing of iframes on the booking pages.

(oh, and there is yet another tweak to the apple.com menu patch...)
