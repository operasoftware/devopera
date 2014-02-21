---
title: Small update
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-324, Fix autocomplete forms being prematurely submitted on <a href="http://www.ostgotatrafiken.se/" target="_blank">OstgotaTrafiken</a>. Another case of the key events issue where the page would reload instead of selecting the wanted destination since the event wasn&#39;t properly cancelled. This won&#39;t affect that many if you, but we don&#39;t want the Opera developers in Linköping to miss the bus ;-)<br/><br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-264, Enable @mentions. The original patch lingered around after doing its work, causing some error messages for Facebook apps. This change makes sure the event listener is removed after the patch is done.<br/><br/>PATCH-321, Work around pre inheritance into tables on Google Code. Extended to catch more cases. Thanks to <a href="http://my.opera.com/eliotcougar/" target="_blank">eliotcougar</a><br/><br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-37, To-button does not bring up contacts list on Hotmail. Removed for O11 only after Core fix.
