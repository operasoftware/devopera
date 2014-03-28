---
title: Huffingtonpost, Tvguide, Cleaning
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-601, Huffingtonpost: Avoid ad overwrite. Browser sniffing in ad script causes a `document.write` from a timeout thread, overwriting the current article.
- PATCH-596, tvguide.co.uk — Fix double descriptions appearing in TV listing. Race condition causes title text not to be removed before running rest of `mouseover` handler, causing double entries.
- PATCH-592, Avoid freeze caused by regression related to `<textarea>` wrap attribute handling. A bug in O12, already fixed interally, so this patch should be obsolete soon.

## Removed patches

- PATCH-135, Live Mail Fix removing contacts from To field by clicking small X icon. Core fix.
- PATCH-112, Requires `add()` method on `<select>` elements. Site changed.
- PATCH-112, weather.news.qq.com uses `document.all` for browser detection. Site changed.
- PATCH-81, shoptime.com.br not possible to type since Opera does not support `charCode`. Site changed.
- PATCH-478, Fix annotations and advance to next video on YouTube leanback. Core fix in O12.
- PATCH-468, Make sure Play menu doesn’t wrap. Core fix in 12.
- PATCH-281, messed up layout in lower part of page due to wrong percentage rounding. Core fix in O12.
