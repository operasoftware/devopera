---
title: Small Update
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-358, Enable the password box on footballteam.pl. This is an old Core bug where changing the type of an input element will remove focus.<br/><br/>PATCH-348, Disable Opera detection that causes hidden content on arealinfo.dk. document.write is called from the load event, overwriting the entire document. This would also have failed in other browsers unless there was different codepaths. Patched by making &#39;op&#39; a magic variable returning false.
