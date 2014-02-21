---
title: GMaps, AOL, CNNTurk
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
As already pointed out <a href="http://my.opera.com/sitepatching/blog/2012/03/13/facebook-again-web-de?cid=85449822#comment85449822" target="_blank">here</a> there is a new file out.<br/><br/><span style="font-size: 140%">Added patches</span><br/>PATCH-610, GMaps: avoid autoclose of problem reporting dialog. Core issue with mouse event clientX/Y when clicking &lt;option&gt; See the <a href="http://my.opera.com/hallvors/blog/2012/03/20/debugging-maps-google-maps" target="_blank">work behind this patch</a><br/><br/>PATCH-608, Aol.com: Avoid ad overwrite. Browser sniff.<br/><br/>PATCH-605, remove document.charset. Not part of HTML5 platform. Also causes some slow load issues on Google translate in some cases.<br/><br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-509, cnnturk: work around CSS bug that causes footer content to float upwards. Site changed a bit, modified patch. Thanks to <a href="https://github.com/operasoftware/browserjs/issues/2" target="_blank">https://github.com/operasoftware/browserjs/issues/2</a>
