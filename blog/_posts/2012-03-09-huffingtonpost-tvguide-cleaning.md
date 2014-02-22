---
title: Huffingtonpost, Tvguide, Cleaning
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-601, Huffingtonpost: Avoid ad overwrite. Browser sniffing in ad script causes a document.write from a timeout thread, overwriting the current article.<br/><br/>PATCH-596, tvguide.co.uk - Fix double descriptions appearing in TV listing. Race condition causes title text not to be removed before running rest of mouseover handler, causing double entries.<br/><br/>PATCH-592, Avoid freeze caused by regression related to TEXTAREA wrap attribute handling. A bug in O12, already fixed interally, so this patch should be obsolete soon.<br/> <br/> <br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-135, Live Mail Fix removing contacts from To field by clicking small X icon. Core fix.<br/><br/>PATCH-112, Requires add() method on SELECT elements. Site changed.<br/><br/>PATCH-112, weather.news.qq.com uses document.all for browser detection. Site changed.<br/><br/>PATCH-81, shoptime.com.br not possible to type since Opera does not support charCode. Site changed.<br/> <br/>PATCH-478, Fix annotations and advance to next video on YouTube leanback. Core fix in O12.<br/><br/>PATCH-468, Make sure Play menu doesn&#39;t wrap. Core fix in 12.<br/><br/>PATCH-281, messed up layout in lower part of page due to wrong percentage rounding. Core fix in O12.<br/><br/>
