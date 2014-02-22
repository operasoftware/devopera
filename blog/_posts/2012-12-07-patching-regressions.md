---
title: Patching Regressions
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1079, Google voice - invisible contacts. Overflow hidden in nested percentage dimension tables broke slightly in 12.10.<br/><br/>PATCH-1078, itslearning.com - fix menu. white-space:nowrap became a bit too aggressive after a fix in 12.10.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-581, Make getUserMedia() scripts written according to current spec work by faking window.URL.createObjectURL. The patch was way too simplistic so it broke other stuff.
