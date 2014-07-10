---
title: Twitter IME++
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-1109, Twitter: Disable `innerHTML` updates of the contentEditable element’s DOM if we presume an IME is active, prevents crashes.
- PATCH-1107, state.gov: avoid sIFR usage, caused rendering issues in Opera.
- PATCH-1105, flipkart.com: Try to prevent double load events on initially empty iframes.
- PATCH-1104, steelarm.ua: `text-align` breaks hover detection.
- PATCH-1103, Nexon: fix old iframe resize script.

## Removed patches

- PATCH-1095, Yahoo!SG — reload in unload handler. Site changed.
- PATCH-879, gay.com — work around browser blocking. Site changed.
- PATCH-658, jabong.com: override usage of CSS content property on element content. Site changed.
