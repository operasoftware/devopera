---
title: Apple, Jira
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-1145, kb.apple.com — Undo the effects of buggy `display: -webkit-box` “support”.
- PATCH-1144, Opera is confused when `multiple` attribute is added to a SELECT that already has several options with selected attribute. Breaks project selection in Jira5.

## Removed patches

- PATCH-1127, snapguide.com — hack translate3d usage. Site changed.
- PATCH-1086, youtube — work around old fullscreen spec usage. Site changed.
- PATCH-971, guardianretirement.com: avoid reload. Site changed.
- PATCH-862, hipmunk.com: avoid header table cell collapse. Site changed.
- OTW-5415, Sytadin.fr IFRAME resize script detects Opera. Site changed.

Edit: for historical reasons, browser.js has always had a mix of CRLF and LF line endings. This release standardizes on LF. Shouldn’t make any practical difference, but saves ~1500 bytes and looks neater.
