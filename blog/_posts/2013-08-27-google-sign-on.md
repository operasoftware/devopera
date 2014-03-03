---
title: Google Sign-On
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches Presto</span><br/><br/>PATCH-1152 - As commented on previous blog-post, Google changed their 3rd-party sign-on page, using the (in Presto) unsupported document.hasFocus method. This caused the &quot;Accept&quot; button not to work.<br/><br/>Thanks to <a href="http://my.opera.com/community/forums/topic.dml?id=1745272" target="_blank">dantesoft</a> for the simple workaround. 11.6x and 12.0x doesn&#39;t support the page visibility API, so there I just made the function always return true. (incidentally the same behavior as <a href="https://code.google.com/p/chromium/issues/detail?id=64846" target="_blank">Chrome until this summer</a> ;) )<br/><br/><span style="font-size: 140%">Changed patches Presto</span><br/><br/>PATCH-569 - tvguide.co.uk, updated event listeners.
