---
title: More Google service patches, security patch
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-1035, Work around Cross Site Scripting bug for Opera versions prior to 12.10. See <a href="http://www.opera.com/support/kb/view/1031/" target="_blank">http://www.opera.com/support/kb/view/1031/</a><br/><br/>PATCH-1034, Google Image search centered. Presto drops center-inheritance for elements inside abs.pos. elements.<br/><br/>PATCH-1032, Google Docs - auto-close unsupported browser message. Message may be visible for a short while, then auto-clicked. Hiding it completely could also hide useful status messages.<br/><br/>PATCH-1031, surveymonkey.com - prevent dialog from growing when typing. Core margin issue. <br/><br/>PATCH-1030, GMail - force show attach file field in new composer. A reflow bug in Presto causes the file input not to show up.<br/><br/>PATCH-1028, tsn.ca - Dispatch of the &quot;video player ready&quot; event happens before event listener is added due to blocking DOM-added scripts, fire it again. Core issue.<br/><br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-857, hotels.ctrip.com maps not loading. Extended to cover more cases.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-967, barnesandnoble.com - show select arrows. Site changed.
