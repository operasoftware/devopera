---
title: SwedBank, Santander Bank
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

PATCH-611, SwedBank: temporary work around for mismatch between window.event support and charCode support makes it impossible to log in. Added for 11.62 and 12.00, as we now hide window.event Opera gets a different code branch that expects charCode to be defined for key events. This has been fixed internally, but not released so we patch meanwhile.

## Changed patches

PATCH-84, Santander bank prevents typing certain keys. Apply patch to additional subdomain.

## Removed patches

PATCH-543, yihaodian.com: fix wrongly aligned product image. Site changed.
