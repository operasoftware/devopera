---
title: MS Community
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

PATCH-619, Emulating IE breaks Microsoft fora. As discussed [here][1] it recently became impossible to post new comments on social.microsoft.com with Opera after they upgraded their software. Until IE9, `document.getSelection()` would return a string, while `window.getSelection()` would return a selection object. For compatibility Opera implemented the same behavior. Fast forward to now, the upgraded MS community site depends on the new spec compliant behavior where both methods return a selection object.

[1]: http://my.opera.com/sitepatching/blog/show.dml/45518782#comment87525072

Incidentally, just before Easter we completed a rewrite of Presto’s Range and Selection [implementation][2] that also fixes this. But until that reaches public builds Hallvord wrote a one-liner to fix this site.

[2]: http://www.opera.com/docs/specs/presto2.11/#m210-306

	document.getSelection=function(){return window.getSelection();}

- PATCH-617, missing QuickView background color on Forever21.co.jp. Missing styles.
- PATCH-88, Make links work on Aeonretail. Outdated jQuery plugin detects Opera and scrolls up.

## Removed patches

206810, Prevent britishairways.com from reloading the page on resize. Site changed.
