---
title: Orkut Login
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
A security fix in 11.01 makes it impossible to log in to Orkut, as Opera throws a security error if reading from an iframe too soon. This release has a rather ugly patch for this, that will probably break as soon as Orkut updates something. But for now it should be fine. There will be a proper Core fix in an upcoming release.<br/><br/><span style="font-size: 140%">Added patches</span><br/>PATCH-377, Make it possible to log in to Orkut with 11.01<br/><br/>PATCH-376, Make sure main content isn&#39;t hidden on KDDI mobile/smartphone page. Core bug where floats are not cleared if they are preceded by an element with a negative bottom margin.
