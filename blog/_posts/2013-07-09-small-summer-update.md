---
title: Small summer update
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="color: blue"><span style="font-size: 140%">Blink</span></span><br/><br/><span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1148, Google translate sends O15 audio/mp3 for text-to-speech. Patch replaces audio element with the old Flash-equivalent.<br/><br/><span style="color: orange"><span style="font-size: 140%">Presto</span></span><br/><br/><span style="font-size: 140%">Added patches</span><br/>PATCH-1147, G+ - allow photo sharing. Site depends on window.URL.createObjectURL - not supported in Presto, but we can fake it.<br/><br/><span style="font-size: 140%">Added patches</span><br/><br/>PATCH-750, westelm.com - Fix compatibility with old mapquest. Updated script names.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-1068, amazon - avoid looping hash decode. Sub-site closed.<br/><br/>PATCH-937, omv.cz: old iframe resize script. Site changed.<br/><br/>PATCH-661, fintyre.it: work around sniffing. Site changed.<br/><br/>Only 12.1x updated this time, as G+ was broken in additional ways in earlier versions.
