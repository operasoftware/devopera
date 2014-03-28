---
title: Facebook Again, Web.de
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

PATCH-604, Facebook API: work around iframe load event issue. This one is active in 11.62 and later (versions with hidden `attachEvent` support). There is a race condition happening with `appendChild`, `about:blank` iframes and immediate navigation of said iframe.

Reported at [https://github.com/operasoftware/browserjs/issues/1][1]

[1]: https://github.com/operasoftware/browserjs/issues/1

- PATCH-603, GoogleTV: fix broken word spacing - Core bug with `text-align: justify`
- PATCH-581, Make `getUserMedia()` scripts written according to current spec work. Our implementation is not quite in sync with the spec right now, so to make spec-compliant demos work we fake support for `window.URL.createObjectURL`. Will soon be obsolete.

## Changed patches

PATCH-576, facebook API, make sure load event is sent when expected. This one is active along with the hiding of `attachEvent` patch for Opera 11.61 and older.

## Removed patches

PATCH-586, web.de: hide browser upgrade message. Site changed.
