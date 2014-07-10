---
title: Google Documents, Etc.
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-977, Google Documents copy paste. Work around browser sniffing. 12.10 only (requires clipboard support)
- PATCH-974, espn.go.com: make image gallery work, suppressing transform usage.
- PATCH-971, guardianretirement.com: avoid frame reload and browser sniffing.
- PATCH-967, barnesandnoble.com — show select arrows. Opera supports more styling of form elements, the page CSS hides part of them.
- PATCH-966, dadergezocht.nl — old iframe resize script.
- PATCH-964, comcast.com: work around sniffer that prevents typing.
- PATCH-962, dr.dk: fix misnested browser sniff.
- PATCH-961, oldspice.com: remove sniff in jQuery `postMessage` plugin (incorrectly assumes lack of `postMessage`).
- PATCH-679, officeapps.live.com: correct `MouseEvent` button. Same as on Skydrive. Editing still largely broken though.

## Changed patches

- PATCH-582, GMail: override workaround for old `font-size` bug in Opera. New classnames.
- PATCH-566, GMail: override overflow and fixed position styles. Re-added to 12.10 to make scrollbars appear for small windows.
