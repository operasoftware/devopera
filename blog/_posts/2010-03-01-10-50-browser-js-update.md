---
title: 10.50 Browser.js Update
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

It&#39;s been a while since the last browser.js update on this blog - 1 short month to be exact. This isn&#39;t as big as the last change but some nice ones anyway:

## New patches



<a href="http://bild.de/" target="_blank">bild.de</a> image galleries - a little workaround for an Opera bug with mouse events on transparent elements. The bug has always been there but became more visible after we fixed another bug earlier this year.

<a href="http://blogger.com/" target="_blank">blogger.com</a> post submit failed - work around an issue that came about because Opera spoofs as Mozilla on Blogger to work at all. Makes sure the click() method is on the button.

<a href="http://forums.xbox.com/" target="_blank">forums.xbox.com</a> can&#39;t be scrolled - Opera has trouble with extremely tall or wide elements, sometimes causing scrolling to be disabled.

<a href="http://pb.yamada-denki.jp" target="_blank">http://pb.yamada-denki.jp</a> pamphlets not showing - work around Opera sniffing.

<a href="http://social.microsoft.com" target="_blank">social.microsoft.com</a> forum editor hangs - work around a combination of document.domain and TinyMCE.



## Changed patches



softbank.jp login fails - obsoleted by a core fix for not caching certain elements without cache headers.

<a href="http://mail.live.com" target="_blank">mail.live.com</a> - removed a sub patch where Opera wouldn&#39;t allow setting a style value to null. Fixed in core.



## Removed patches



Google Gears compatibility layer - Gears isn&#39;t supported in Opera desktop anyway so this has little mission.

Missing submit button on yahoo.co.jp auctions - obsoleted by core fix handling invalid markup

Apple store locator missing text - they changed service provider so site doesn&#39;t exist like it did.

<a href="http://klm.com/" target="_blank">klm.com</a> menus fail to expand - site redesigned.
