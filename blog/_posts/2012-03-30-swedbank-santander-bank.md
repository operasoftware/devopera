---
title: SwedBank, Santander bank
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-611, SwedBank: temporary work around for mismatch between window.event support and charCode support <br/>makes it impossible to log in. Added for 11.62 and 12.00, as we now hide window.event Opera gets a different code branch that expects charCode to be defined for key events. This has been fixed internally, but not released so we patch meanwhile.<br/><br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-84, Santander bank prevents typing certain keys. Apply patch to additional subdomain.<br/><br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-543, yihaodian.com: fix wrongly aligned product image. Site changed.
