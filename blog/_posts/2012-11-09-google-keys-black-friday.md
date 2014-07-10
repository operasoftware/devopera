---
title: Google Keys, Black Friday
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

Most of these are only relevant for 12.10 so that is the only file updated today.

## Added patches

- PATCH-1025, Amazon — Black Friday deals float upwards due to margin styling on UL and `innerHTML` updates. Core bug.
- PATCH-1022, Google Play — fix key event sniffing
- PATCH-1021, todoist.com — fix event.key usage as explained in comments of previous blog post.
- PATCH-1018, lufthansa.com — fix unclickable positioned inputs. Core bug.
- PATCH-1017, Google Reader — fix key event sniffing.
- PATCH-1016, p2pool.info — transitionend casing.
- PATCH-998, lucasarts.com — fix compatibility with hive using `3dtransforms`.

## Changed patches

- PATCH-1008, GMail — fix key event sniffing. Simplified and fixed keyboard shortcut issues.
- PATCH-992, GMail — Remove CSS that sets transparent background color for selections. Simplied and made a bit more robust. The first version didn’t always take.
- PATCH-382, Google Spreadsheets — fix key event sniffing. Simplified.
