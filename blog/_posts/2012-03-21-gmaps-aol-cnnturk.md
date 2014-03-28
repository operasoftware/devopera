---
title: GMaps, AOL, CNNTurk
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

As already pointed out [here][1] there is a new file out.

[1]: http://my.opera.com/sitepatching/blog/2012/03/13/facebook-again-web-de?cid=85449822#comment85449822

## Added patches

PATCH-610, GMaps: avoid autoclose of problem reporting dialog. Core issue with mouse event clientX/Y when clicking `<option>` See the [work behind this patch][2]

[2]: http://my.opera.com/hallvors/blog/2012/03/20/debugging-maps-google-maps

- PATCH-608, Aol.com: Avoid ad overwrite. Browser sniff.
- PATCH-605, remove document.charset. Not part of HTML5 platform. Also causes some slow load issues on Google translate in some cases.

## Changed patches

PATCH-509, cnnturk: work around CSS bug that causes footer content to float upwards. Site changed a bit, modified patch. Thanks to [https://github.com/operasoftware/browserjs/issues/2][3]

[3]: https://github.com/operasoftware/browserjs/issues/2
