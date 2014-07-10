---
title: Cleaning Menu System Patches
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-509, cnnturk: work around CSS bug that causes footer content to float upwards as margins collapse.
- PATCH-506, YouTube: avoid Silverlight uploader. Core bug where passing Array-like objects between browser and plug-in fails. Now opera falls back to Flash uploader. Ideally it would use the new XHR uploader, but Opera hasn&#39;t implemented the upload methods of XHR2 yet.
- PATCH-503, Work around Transmenu’s browser sniffing.
- PATCH-498, Yahoo! Japan services block Opera from using Silverlight plugin in sniffing script.
- PATCH-494, Washingtonpost: avoid articles being overwritten in race condition.

## Removed patches

PATCH-412, Prevent old script from hiding iframes on pgatour. Site fixed.

- Transmenus - replaced with PATCH-503
- CoolMenus - very limited use
- Xaramenus - very limited use
- SoThinkMenus - very limited use
