---
title: MS Community
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-619, Emulating IE breaks Microsoft fora. As discussed <a href="http://my.opera.com/sitepatching/blog/show.dml/45518782#comment87525072" target="_blank">here</a> it recently became impossible to post new comments on social.microsoft.com with Opera after they upgraded their software. Until IE9, document.getSelection() would return a string, while window.getSelection() would return a selection object. For compatibility Opera implemented the same behavior. Fast forward to now, the upgraded MS community site depends on the new spec compliant behavior where both methods return a selection object.<br/><br/>Incidentally, just before Easter we completed a rewrite of Presto&#39;s Range and Selection <a href="http://www.opera.com/docs/specs/presto2.11/#m210-306" target="_blank">implementation</a> that also fixes this. But until that reaches public builds Hallvord wrote a one-liner to fix this site.<br/><br/><pre>
document.getSelection=function(){return window.getSelection();}
</pre><br/><br/>PATCH-617, missing QuickView background color on Forever21.co.jp. Missing styles.<br/><br/>PATCH-88, Make links work on Aeonretail. Outdated jQuery plugin detects Opera and scrolls up.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/>206810, Prevent britishairways.com from reloading the page on resize. Site changed.
