---
title: Removing More From 10.6 File
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

Today&#39;s 10.60 snapshot saw a number of nice core fixes. Some of these errors were patched and we can now remove them. (Note: b3426 claims to be Version/10.50, thus getting the 10.5x browser.js)

IMO the by far most important core fix here was for CORE-28411 - plug-in scripting. We have spent several man-months researching and implementing new code to link up the script engine and plugins. Part of this was done for Opera 10.00. The work done back then made many video sites work. But the changes were not perfect and led to a number of issues with &quot;hung&quot; scripts (making links unclickable etc.) The past couple of months one of our top developers has redone the code and scripting of plug-ins is now much more robust. This should help Silverlight significantly (Netflix among other sites) and many other plug-ins.

The other major fix is CORE-28488 - scrolling disabled on very tall pages. We patched many of the affected pages, but there are probably more out there. From now on these should work. Note that this fixes the vertical part. Extremely wide pages will still have a similar issue. This is a lot of work to fix.

## Changed patches



PATCH-230, Prevent unsolicited access to Java&#39;s deploymenttoolkit. Removed &quot;launch&quot; part as it would break Voddler. CORE-28411 fix will otherwise make Voddler plug-in work, so we have to remove this bit. Hoping that most people have updated to Java6_u20 by now. (You haven&#39;t? Please do ASAP! :) )

## Removed patches



PATCH-249, XML namespace parsing on officeapps.live.com (core fix)

PATCH-223, Work around layout bug that breaks navigation menu on nationalgeographic.com (core fix)

PATCH-216, No scrollbars on mail.ru, oper.ru, livejournal.com, fotki.com, ncbi.nlm.nih.gov (CORE-28488)

PATCH-214, No scrollbars on github.com (CORE-28488)

PATCH-213, No scrollbars on lovdata.no (CORE-28488)

PATCH-210, Unintended security violation prevents videos from playing at IMDB (Carakan fix)

PATCH-199, Toshiba Digital Doors hung script (CORE-28411)

PATCH-193, No scrollbars on XBox forum (CORE-28488)

PATCH-192, Closing already closed documents from timeout can hang ES execution on Hotmail (core fix)

PATCH-187, make links clickable on hongen.com (CORE-28411)

PATCH-97, tall page can&#39;t be scrolled on tianya.cn (CORE-28488)
