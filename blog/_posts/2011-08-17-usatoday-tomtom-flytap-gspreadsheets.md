---
title: USAToday, TomTom, FlyTap, Gspreadsheets
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-465, enable Pluck comments on usatoday.com. As discussed <a href="http://my.opera.com/community/forums/topic.dml?id=1070982" target="_blank">here</a> comments are not visible. The theory was that the video patch mentioned below was the culprit. However, it turns out that the generic UDM menu patch triggered on an unrelated file on usatoday, causing script execution error. This is really a bug in Opera&#39;s JS execution, but for now we make sure the UDM patch doesn&#39;t run on usatoday.<br/><br/>PATCH-464, Make it possible to type in TomTom route planner. A unneeded scrollbar in a shrink-to-fit float causes inputs to be hidden.<br/><br/>PATCH-463, Fix broken markup on FlyTap. Will be properly fixed with Ragnarök (new parser)<br/> <br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-382, Google Spreadsheets cell size and column label size mismatch. Google moved the spreadsheets from spreadsheets.google.com to docs.google.com/spreadsheet/ - patch updated accordingly.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/><br/>OTW-4689, Work around browser sniffing to make videos appear on usatoday.com. Site changed.
