---
title: Cleaning menu system patches
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-509, cnnturk: work around CSS bug that causes footer content to float upwards as margins collapse.<br/><br/>PATCH-506, YouTube: avoid Silverlight uploader. Core bug where passing Array-like objects between browser and plug-in fails. Now opera falls back to Flash uploader. Ideally it would use the new XHR uploader, but Opera hasn&#39;t implemented the upload methods of XHR2 yet.<br/><br/>PATCH-503, Work around Transmenu&#39;s browser sniffing.<br/><br/>PATCH-498, Yahoo! Japan services block Opera from using Silverlight plugin in sniffing script.<br/><br/>PATCH-494, Washingtonpost: avoid articles being overwritten in race condition.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-412, Prevent old script from hiding IFRAMEs on pgatour. Site fixed.<br/><br/>Transmenus - replaced with PATCH-503<br/><br/>CoolMenus - very limited use<br/>Xaramenus - very limited use<br/>SoThinkMenus - very limited use
