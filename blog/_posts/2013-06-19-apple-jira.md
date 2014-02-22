---
title: Apple, Jira
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-1145, kb.apple.com - Undo the effects of buggy display: -webkit-box &#39;support&#39;.<br/><br/>PATCH-1144, Opera is confused when &#39;multiple&#39; attribute is added to a SELECT that already has several options with selected attribute. Breaks project selection in Jira5.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-1127, snapguide.com - hack translate3d usage. Site changed.<br/><br/>PATCH-1086, youtube - work around old fullscreen spec usage. Site changed.<br/><br/>PATCH-971, guardianretirement.com: avoid reload. Site changed.<br/><br/>PATCH-862, hipmunk.com: avoid header table cell collapse. Site changed.<br/><br/>OTW-5415, Sytadin.fr IFRAME resize script detects Opera. Site changed.<br/><br/>Edit: for historical reasons, browser.js has always had a mix of CRLF and LF line endings. This release standardizes on LF. Shouldn&#39;t make any practical difference, but saves ~1500 bytes and looks neater.
