---
title: Google Sign-On
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches Presto

PATCH-1152 — As commented on previous blog-post, Google changed their 3rd-party sign-on page, using the (in Presto) unsupported document.hasFocus method. This caused the “Accept” button not to work.

Thanks to [dantesoft][1] for the simple workaround. 11.6x and 12.0x doesn’t support the page visibility API, so there I just made the function always return true. Incidentally the same behavior as [Chrome until this summer][2] ;)

[1]: http://my.opera.com/community/forums/topic.dml?id=1745272
[2]: https://code.google.com/p/chromium/issues/detail?id=64846

## Changed patches Presto

PATCH-569 — tvguide.co.uk, updated event listeners.
